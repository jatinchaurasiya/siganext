"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-grid-navy grid place-items-center">
      <div className="w-10 h-10 rounded-full border-2 border-signal-teal/30 border-t-signal-teal animate-spin" />
    </div>
  ),
});

type Props = ComponentProps<typeof HeroScene>;

export default function HeroSceneWrapper(props: Props) {
  return <HeroScene {...props} />;
}
