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
        <section
            id="how-it-works"
            className="my-16 flex scroll-mt-24 flex-col items-center gap-3 px-4 text-center sm:my-24 sm:px-8 md:px-16 lg:my-36 lg:px-24"
        >
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                How it works
            </h2>
            <p className="max-w-md text-sm text-muted-foreground sm:text-base">
                A simple 3-step process to organize your entire job applications
            </p>

            <div className="relative mt-10 grid w-full max-w-4xl grid-cols-1 gap-10 sm:mt-16 md:grid-cols-3 md:gap-6">
                <div
                    className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-9 hidden border-t-2 border-dashed border-primary/40 md:block"
                    aria-hidden="true"
                />

                {STEPS.map((step) => {
                    const Icon = step.icon;

                    return (
                        <div
                            key={step.title}
                            className="relative z-10 flex flex-col items-center gap-4"
                        >
                            <div className="flex size-14 items-center justify-center rounded-full border bg-background shadow-sm sm:size-16 md:size-18">
                                <Icon className="size-6 text-foreground sm:size-7" />
                            </div>
                            <div className="flex max-w-xs flex-col gap-1.5">
                                <h3 className="text-base font-semibold sm:text-lg">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Flow;