import { useState } from "react";
import {
  BarChart3Icon,
  ListCheckIcon,
  ShieldCheckIcon,
  ChevronRightIcon,
  RouteIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: ListCheckIcon,
    title: "CRUD Tracking",
    description:
      "Log every application in seconds — company, position, status, and notes, all searchable and filterable.",
    image: "/images/crud-tracking.svg",
  },
  {
    icon: RouteIcon,
    title: "Maps & Distance",
    description:
      "See exactly how far each company is from home, with real commute routes and travel time — before you say yes.",
    image: "/images/maps-distance.svg",
  },
  {
    icon: BarChart3Icon,
    title: "Dashboard Analytics",
    description:
      "Visualize your progress — applications by status, monthly trends, and average commute distance.",
    image: "/images/dashboard-analytics.svg",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure Sign-in",
    description:
      "Sign in with Google in one click, or use email — your account is protected with secure authentication.",
    image: "/images/secure-sign-In.svg",
  },
];

const Feature = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = FEATURES[activeIndex];

  return (
    <section id="features" className="flex flex-col gap-6 px-24 my-36">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-3xl font-medium">
          Features
        </div>
        <h1 className="text-lg text-muted-foreground font-medium tracking-tight">
          One platform. Everything your job hunt needs.
        </h1>
      </div>

      <div className="flex min-h-130 w-full overflow-hidden rounded-2xl bg-primary">
        <div className="flex w-full max-w-sm flex-col bg-background border">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = index === activeIndex;

            return (
              <button
                key={feature.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex flex-col gap-3 border-b border-border/60 p-5 text-left transition-colors last:border-b-0",
                  isActive ? "bg-muted" : "hover:bg-muted/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-md border-border border p-2 text-[#05aff2]">
                    <Icon className="size-5" />
                  </div>
                  <span className="flex-1 text-lg font-bold">{feature.title}</span>
                  <ChevronRightIcon
                    className={cn(
                      "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                      isActive && "rotate-90"
                    )}
                  />
                </div>

                {isActive && (
                  <p className="pl-13 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        <div className="relative hidden flex-1 items-center justify-center overflow-hidden p-10 md:flex">

          <div className="relative hidden flex-1 items-center justify-center overflow-hidden p-10 md:flex">
            <img
              key={active.image}
              src={active.image}
              alt={active.title}
              className="relative z-10 max-h-full max-w-full rounded-lg border border-white/10 object-contain shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;