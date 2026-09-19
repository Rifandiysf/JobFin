import { UserPlusIcon, PlusCircleIcon, LineChartIcon } from "lucide-react";

const STEPS = [
    {
        icon: UserPlusIcon,
        title: "Sign up & set your address",
        description: "Create your account and set your home address as the starting point.",
    },
    {
        icon: PlusCircleIcon,
        title: "Add your applications",
        description: "Log the company, position, and status for every job you apply to.",
    },
    {
        icon: LineChartIcon,
        title: "Track & visualize",
        description: "See your commute distance, progress, and trends all in one dashboard.",
    },
];

const Flow = () => {
    return (
        <section id="how-it-works" className="flex flex-col items-center gap-3 my-36 px-24 text-center">
            <h1 className="text-3xl font-medium tracking-tight">How it works</h1>
            <p className="max-w-md text-muted-foreground">
                A simple 3-step process to organize your entire job applications
            </p>

            <div className="relative mt-16 grid w-full max-w-4xl grid-cols-3 gap-6">
                <div
                    className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-9 hidden border-t-2 border-dashed border-primary/40 md:block"
                    aria-hidden="true"
                />

                {STEPS.map((step) => {
                    const Icon = step.icon;

                    return (
                        <div key={step.title} className="relative z-10 flex flex-col items-center gap-4">
                            <div className="flex size-18 items-center justify-center rounded-full border bg-background shadow-sm">
                                <Icon className="size-7 text-foreground" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-lg font-semibold">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Flow;