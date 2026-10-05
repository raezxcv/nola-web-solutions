import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Reveal } from "../site/reveal";

/**
 * Sticky scroll-story: a single browser window that TRANSFORMS through six
 * stages as the visitor scrolls — visitor arrives → form → lead → automation
 * → AI responds → reaches the business. The continuity of one evolving
 * interface is what makes it feel premium.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

const STAGES = [
  { k: "01", label: "A visitor opens the website" },
  { k: "02", label: "A form submission appears" },
  { k: "03", label: "A lead enters the system" },
  { k: "04", label: "Automation activates" },
  { k: "05", label: "AI responds" },
  { k: "06", label: "The lead reaches the business" },
];

export function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress (0..1) to a continuous stage index 0..5
  const stageF = useTransform(scrollYProgress, [0.06, 0.94], [0, 5]);

  return (
    <section className="relative bg-ink-2 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
      {/* tall scroll track */}
      <div ref={ref} className="relative h-[420vh]">
        <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            {/* left: statement + stage rail */}
            <div className="relative z-10">
              <Reveal>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan">
                  The system in motion
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
                  What happens when your website starts working for you?
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-md text-base leading-relaxed text-white/50">
                  Scroll. One interface evolves from a simple visit into a fully automated,
                  AI-assisted customer journey.
                </p>
              </Reveal>

              <StageRail progress={scrollYProgress} />
            </div>

            {/* right: evolving browser */}
            <div className="relative">
              <BrowserStage stageF={stageF} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StageRail({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const [idx, setIdx] = useState(0);
  useMotionValueEvent(progress, "change", (v) => {
    setIdx(Math.min(STAGES.length - 1, Math.max(0, Math.round(v * (STAGES.length - 1)))));
  });
  return (
    <ol className="mt-10 space-y-2.5">
      {STAGES.map((s, i) => {
        const active = i === idx;
        const done = i < idx;
        return (
          <li key={s.k} className="flex items-center gap-3">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[0.7rem] font-bold transition-all duration-500 ${
                active
                  ? "border-cyan bg-cyan/15 text-cyan"
                  : done
                    ? "border-white/20 bg-white/5 text-white/60"
                    : "border-white/10 text-white/30"
              }`}
            >
              {s.k}
            </span>
            <span
              className={`text-sm transition-colors duration-500 ${
                active ? "font-semibold text-white" : "text-white/40"
              }`}
            >
              {s.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function BrowserStage({ stageF }: { stageF: any }) {
  return (
    <div className="relative aspect-[4/3] w-full">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/20 to-cyan/10 blur-3xl" />

      <BrowserChrome>
        <div className="relative h-full w-full overflow-hidden p-5 sm:p-7">
          {/* Layer 0 — visitor */}
          <Layer index={0} stageF={stageF}>
            <VisitorLayer />
          </Layer>
          {/* Layer 1 — form */}
          <Layer index={1} stageF={stageF}>
            <FormLayer />
          </Layer>
          {/* Layer 2 — lead in CRM */}
          <Layer index={2} stageF={stageF}>
            <LeadLayer />
          </Layer>
          {/* Layer 3 — automation */}
          <Layer index={3} stageF={stageF}>
            <AutomationLayer />
          </Layer>
          {/* Layer 4 — AI responds */}
          <Layer index={4} stageF={stageF}>
            <AiLayer />
          </Layer>
          {/* Layer 5 — reaches business */}
          <Layer index={5} stageF={stageF}>
            <HandoffLayer />
          </Layer>
        </div>
      </BrowserChrome>

      {/* floating stage label */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-ink/80 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-md"
        // animate opacity subtly with stageF
      >
        <StageLabel stageF={stageF} />
      </motion.div>
    </div>
  );
}

function StageLabel({ stageF }: { stageF: any }) {
  const text = useTransform(stageF, (v: number) => {
    const i = Math.round(v);
    return STAGES[Math.min(STAGES.length - 1, Math.max(0, i))]?.label ?? "";
  });
  return <motion.span>{text}</motion.span>;
}

function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="ml-3 flex h-6 flex-1 items-center rounded-md border border-white/[0.07] bg-white/[0.02] px-3 text-[0.7rem] text-white/40">
          yourbusiness.com
        </div>
      </div>
      <div className="relative h-[calc(100%-2.75rem)]">{children}</div>
    </div>
  );
}

/** Stacked layer whose opacity + scale crossfade with the active stage. */
function Layer({
  index,
  stageF,
  children,
}: {
  index: number;
  stageF: any;
  children: React.ReactNode;
}) {
  const opacity = useTransform(
    stageF,
    [index - 0.55, index - 0.05, index + 0.05, index + 0.55],
    [0, 1, 1, 0],
  );
  const scale = useTransform(stageF, [index - 0.6, index, index + 0.6], [0.96, 1, 1.02]);
  const y = useTransform(stageF, [index - 0.6, index, index + 0.6], [12, 0, -12]);
  return (
    <motion.div className="absolute inset-5 sm:inset-7" style={{ opacity, scale, y }}>
      {children}
    </motion.div>
  );
}

/* ---------- per-stage interface mockups (pure CSS/SVG) ---------- */

function VisitorLayer() {
  return (
    <div className="flex h-full flex-col">
      <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyan">
        Website
      </div>
      <div className="mt-2 text-lg font-bold text-white">A new visitor arrives</div>
      <div className="mt-4 grid flex-1 grid-cols-3 gap-3">
        <div className="col-span-2 space-y-2.5">
          <div className="h-3 w-2/3 rounded bg-white/15" />
          <div className="h-2.5 w-full rounded bg-white/10" />
          <div className="h-2.5 w-5/6 rounded bg-white/10" />
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <div className="h-16 rounded-lg border border-white/10 bg-white/[0.04]" />
            <div className="h-16 rounded-lg border border-white/10 bg-white/[0.04]" />
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="h-10 rounded-lg border border-white/10 bg-white/[0.04]" />
          <div className="h-10 rounded-lg border border-white/10 bg-white/[0.04]" />
          <div className="mt-auto h-9 rounded-lg bg-primary/80" />
        </div>
      </div>
    </div>
  );
}

function FormLayer() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-full max-w-xs rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyan">
          Contact form
        </div>
        <div className="mt-3 space-y-2.5">
          <div className="h-9 rounded-md border border-white/10 bg-white/[0.04]" />
          <div className="h-9 rounded-md border border-white/10 bg-white/[0.04]" />
          <div className="h-9 rounded-md border border-cyan/40 bg-cyan/[0.08]" />
        </div>
        <motion.div
          className="mt-3 h-9 rounded-md bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ originX: 0 }}
        />
      </div>
      <div className="mt-3 text-xs text-white/40">Form submitted</div>
    </div>
  );
}

function LeadLayer() {
  return (
    <div className="flex h-full flex-col">
      <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyan">
        NOLA CRM
      </div>
      <div className="mt-2 text-lg font-bold text-white">New lead captured</div>
      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
            AR
          </div>
          <div className="flex-1">
            <div className="h-2.5 w-1/2 rounded bg-white/20" />
            <div className="mt-1.5 h-2 w-1/3 rounded bg-white/10" />
          </div>
          <span className="rounded-full bg-cyan/15 px-2.5 py-1 text-[0.65rem] font-semibold text-cyan">
            New
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-6 rounded bg-white/[0.05]" />
          <div className="h-6 rounded bg-white/[0.05]" />
          <div className="h-6 rounded bg-white/[0.05]" />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-white/40">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
        Added to pipeline · Stage: New
      </div>
    </div>
  );
}

function AutomationLayer() {
  return (
    <div className="flex h-full flex-col">
      <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyan">
        Automation
      </div>
      <div className="mt-2 text-lg font-bold text-white">Workflow activates</div>
      <div className="mt-5 flex flex-1 items-center">
        <div className="flex w-full items-center justify-between gap-1">
          {["Lead", "Notify", "Follow-up", "Book"].map((n, i) => (
            <div key={n} className="flex flex-1 items-center gap-1">
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/[0.08] text-[0.6rem] font-bold text-cyan">
                  {i + 1}
                </div>
                <span className="text-[0.6rem] text-white/50">{n}</span>
              </div>
              {i < 3 && (
                <div className="relative h-px flex-1 bg-white/15">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-cyan"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 1.4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-white/60">
        <span className="font-semibold text-white/80">SMS sent:</span> "Hi Angela, thanks for
        reaching out — here's a link to book your consultation."
      </div>
    </div>
  );
}

function AiLayer() {
  return (
    <div className="flex h-full flex-col">
      <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyan">
        AI assistant
      </div>
      <div className="mt-3 flex-1 space-y-2.5 overflow-hidden">
        <div className="flex justify-end">
          <div className="max-w-[78%] rounded-2xl rounded-br-sm bg-primary/85 px-3.5 py-2 text-xs text-white">
            Do you have appointments available this week?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-white/85">
            Yes — I have Tuesday at 2pm or Thursday at 10am. Is this for a new consultation?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[78%] rounded-2xl rounded-br-sm bg-primary/85 px-3.5 py-2 text-xs text-white">
            Tuesday works. It's a new consultation.
          </div>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span className="rounded-full bg-cyan/15 px-2.5 py-1 text-[0.65rem] font-semibold text-cyan">
            Qualified lead
          </span>
          <span className="text-[0.65rem] text-white/40">Routing to team…</span>
        </div>
      </div>
    </div>
  );
}

function HandoffLayer() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyan">
        Your team
      </div>
      <div className="mt-3 flex h-14 w-14 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10">
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 text-cyan"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11 3 3L22 4" />
        </svg>
      </div>
      <div className="mt-4 text-lg font-bold text-white">Lead delivered</div>
      <p className="mt-1.5 max-w-xs text-xs text-white/50">
        A qualified, booked consultation — handed to your team, ready to convert.
      </p>
    </div>
  );
}
