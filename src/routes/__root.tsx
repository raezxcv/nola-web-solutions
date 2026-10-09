import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import appCss from "../styles.css?url";
import { reportVibeError } from "../lib/vibe-error-reporting";
import { SiteHeader } from "../components/site/site-header";
import { SiteFooter } from "../components/site/site-footer";
import { ScrollToTop } from "../components/site/scroll-to-top";
import { SmoothScroll } from "../components/site/smooth-scroll";

import { ASSETS } from "../lib/site-data";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-ink text-white px-4 py-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />

      <div className="relative z-10 max-w-md text-center">
        <div className="mb-6 inline-flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan backdrop-blur-md">
            ✦ Page Not Found ✦
          </span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
          404
        </h1>
        <h2 className="mt-3 text-xl font-bold text-white/90">Page not found</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink hover:bg-slate-100 px-7 py-3 text-sm font-bold shadow-xl transition-all duration-300 active:scale-95"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportVibeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-ink text-white px-4 py-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />

      <div className="relative z-10 max-w-lg text-center">
        <div className="mb-6 inline-flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan backdrop-blur-md">
            ✦ System Notice ✦
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          This page didn't load
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/60 max-w-md mx-auto">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset?.();
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink hover:bg-slate-100 px-7 py-3 text-sm font-bold shadow-xl transition-all duration-300 active:scale-95"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] text-white hover:bg-white/10 px-7 py-3 text-sm font-bold transition-all duration-300 active:scale-95"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NOLA Web Solutions" },
      {
        name: "description",
        content:
          "NOLA Web Solutions builds complete digital growth systems — websites, automation, AI, SEO, and CRM bundled into practical packages designed around your business.",
      },
      { name: "author", content: "NOLA Web Solutions" },
      { property: "og:title", content: "NOLA Web Solutions" },
      {
        property: "og:description",
        content: "We don't just build websites. We build the digital system around your business.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..1000;1,9..40,400..1000&family=Syne:wght@400;500;600;700;800&display=swap",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67f714fcb3b10b90335d89a2.png",
      },
      {
        rel: "apple-touch-icon",
        href: "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67f714fcb3b10b90335d89a2.png",
      },
      {
        rel: "shortcut icon",
        href: "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67f714fcb3b10b90335d89a2.png",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } },
      }),
  );
  const { queryClient: _qc } = Route.useRouteContext();
  void _qc;

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <ScrollToTop />
      </div>
    </QueryClientProvider>
  );
}
