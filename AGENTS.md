<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Process management — NEVER use pkill -f

`pkill -f` matches the tool's own bash shell (which contains the match string
in its `-c` argument), killing itself mid-command and leaving orphaned children.

**Safe alternatives:**
- `fuser -k 3000/tcp` — kills whatever is listening on port 3000
- `kill <pid>` — target-specific, no name matching
- `killall next-server` — kills by process name (no -f, exact match only)

# next.config.ts — do not set turbopack.root

Setting `turbopack.root` in `next.config.ts` in ESM context is fragile:
- `__dirname` is a CJS-only global (throws `exports is not defined`)
- `import.meta.url` breaks Next.js config compilation
- `process.cwd()` causes Turbopack to silently hang on all requests

The warning "inferred workspace root" is cosmetic. Leave `turbopack.root`
unset. The app works fine without it.
