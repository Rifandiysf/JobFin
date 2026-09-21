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
        <section
            id="features"
            className="my-16 scroll-mt-24 px-4 sm:my-24 sm:px-8 md:px-16 lg:my-36 lg:px-24"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:gap-8">
                <div className="flex flex-col gap-2 sm:gap-3">
                    <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                        Features
                    </h2>
                    <p className="text-base font-medium tracking-tight text-muted-foreground sm:text-lg">
                        One platform. Everything your job hunt needs.
                    </p>
                </div>

                <div className="flex w-full flex-col overflow-hidden rounded-xl bg-primary sm:rounded-2xl md:min-h-130 md:flex-row">
                    <div className="flex w-full flex-col border bg-background md:w-80 md:shrink-0 lg:w-96">
                        {FEATURES.map((feature, index) => {
                            const Icon = feature.icon;
                            const isActive = index === activeIndex;

                            return (
                                <div
                                    key={feature.title}
                                    className={cn(
                                        "border-b border-border/60 transition-colors last:border-b-0",
                                        isActive ? "bg-muted" : "hover:bg-muted/50"
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        aria-expanded={isActive}
                                        className="flex w-full items-center gap-3 p-4 text-left sm:p-5"
                                    >
                                        <div className="rounded-md border border-border p-2 text-[#05aff2]">
                                            <Icon className="size-5" />
                                        </div>
                                        <span className="flex-1 text-base font-bold sm:text-lg">
                                            {feature.title}
                                        </span>
                                        <ChevronRightIcon
                                            className={cn(
                                                "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                                                isActive && "rotate-90"
                                            )}
                                        />
                                    </button>

                                    {isActive && (
                                        <div className="flex flex-col gap-4 px-4 pb-4 sm:px-5 sm:pb-5">
                                            <p className="pl-13 text-sm leading-relaxed text-muted-foreground">
                                                {feature.description}
                                            </p>
\
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="w-full rounded-lg border border-border object-contain md:hidden"
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="relative hidden flex-1 items-center justify-center overflow-hidden p-6 md:flex lg:p-10">
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