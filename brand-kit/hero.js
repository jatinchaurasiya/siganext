/* =========================================================================
   Siganext — Hero motion (Three.js + GSAP)
   The "Signal -> Power -> Data" trace: a glowing line flows across a dark
   circuit-board field, colour-shifting teal -> gold -> green.
   One orchestrated moment on load; then quiet. Honors prefers-reduced-motion
   by freezing to the static end-state (canvas hidden, CSS shows fallback).
   ========================================================================= */

import * as THREE from "three";
import { gsap } from "gsap";

const canvas = document.getElementById("hero-canvas");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!canvas || reduce) {
  // Static end-state: CSS fallback (.hero__static) is already visible.
  if (canvas) canvas.style.display = "none";
} else {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  // ---- flowing trace (TubeGeometry along a converging curve) ----------
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-8, -1.5, 0),
    new THREE.Vector3(-4,  1.6, 1),
    new THREE.Vector3(-1, -1.2, -1),
    new THREE.Vector3( 2,  1.8, 1.2),
    new THREE.Vector3( 5, -0.6, -0.5),
    new THREE.Vector3( 8,  0.4, 0),
  ]);

  const geo = new THREE.TubeGeometry(curve, 240, 0.045, 12, false);

  // teal -> gold -> green gradient along the tube length
  const grad = new THREE.TextureLoader(); // (unused tex path; use vertex colors)
  const colors = [];
  const cTeal  = new THREE.Color("#2FB8C6");
  const cGold  = new THREE.Color("#E8A33D");
  const cGreen = new THREE.Color("#1F6E4A");
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const t = (i % (pos.count / 6)) / (pos.count / 6);
    const c = new THREE.Color();
    if (t < 0.5) c.copy(cTeal).lerp(cGold, t / 0.5);
    else         c.copy(cGold).lerp(cGreen, (t - 0.5) / 0.5);
    colors.push(c.r, c.g, c.b);
  }
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  const mat = new THREE.MeshBasicMaterial({
    vertexColors: true, transparent: true, opacity: 0.95,
  });
  const tube = new THREE.Mesh(geo, mat);
  scene.add(tube);

  // moving "pulse" of brighter light travelling along the curve
  const pulseGeo = new THREE.SphereGeometry(0.14, 16, 16);
  const pulseMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const pulse = new THREE.Mesh(pulseGeo, pulseMat);
  scene.add(pulse);

  // ---- faint node field (dashboards resolving at the end) -------------
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0x1F6E4A, transparent: true, opacity: 0.5 });
  const nodes = new THREE.Group();
  for (let i = 0; i < 40; i++) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), nodeMat);
    s.position.set(
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 4 - 2
    );
    nodes.add(s);
  }
  scene.add(nodes);

  // ---- resize --------------------------------------------------------
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);
  resize();

  // ---- orchestrated entrance (GSAP) ----------------------------------
  const intro = { p: 0 };
  gsap.to(intro, {
    p: 1, duration: 2.4, ease: "power2.out",
    onUpdate: () => { tube.material.opacity = 0.1 + intro.p * 0.85; }
  });
  gsap.from(tube.rotation, { y: -0.6, duration: 2.4, ease: "power2.out" });
  gsap.from(nodes.scale, { x: 0.6, y: 0.6, z: 0.6, duration: 2.0, ease: "power2.out", delay: 0.3 });

  // ---- render loop (quiet) -------------------------------------------
  const clock = new THREE.Clock();
  function tick() {
    const t = clock.getElapsedTime();
    // pulse travels 0->1 along curve repeatedly
    const u = (t * 0.08) % 1;
    pulse.position.copy(curve.getPointAt(u));
    pulse.material.opacity = 1;
    tube.rotation.y = Math.sin(t * 0.15) * 0.05; // barely-there drift
    nodes.rotation.y = t * 0.02;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  tick();

  // pause when offscreen (perf + reduced distraction)
  const heroEl = document.querySelector(".hero");
  if (heroEl) {
    new IntersectionObserver((e) => {
      const vis = e[0].isIntersecting;
      if (!vis) renderer.setAnimationLoop(null);
      else tick();
    }).observe(heroEl);
  }
}
