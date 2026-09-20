import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    UserPlusIcon,
    ListCheckIcon,
    MapPinIcon,
    BarChart3Icon,
    SettingsIcon,
} from "lucide-react";

const GUIDES = [
    {
        icon: UserPlusIcon,
        title: "Getting started",
        content: (
            <ul className="flex list-disc flex-col gap-1.5 pl-5">
                <li>Sign up with your email and password, or sign in with Google in one click.</li>
                <li>
                    Go to <strong>Settings → Account</strong> and set your home address. This is optional,
                    but required if you want the commute distance and map route feature to work.
                </li>
            </ul>
        ),
    },
    {
        icon: ListCheckIcon,
        title: "Adding & managing applications",
        content: (
            <ul className="flex list-disc flex-col gap-1.5 pl-5">
                <li>Go to the <strong>Application</strong> page and click "Add Application" to log a new job application.</li>
                <li>Fill in the company name, position, status, applied date, and — optionally — the company's address.</li>
                <li>Use the search bar and status filter to quickly find a specific application.</li>
                <li>Click on a company name to open its detail page, edit its info, or delete it.</li>
            </ul>
        ),
    },
    {
        icon: MapPinIcon,
        title: "Commute distance & maps",
        content: (
            <ul className="flex list-disc flex-col gap-1.5 pl-5">
                <li>
                    If both your home address and a job's company address are filled in, JobFin automatically
                    calculates the driving distance, estimated travel time, and route.
                </li>
                <li>Open a job's detail page to see the route drawn on the map.</li>
                <li>Distance and time are estimates based on OpenStreetMap data and may differ from real-time traffic conditions.</li>
            </ul>
        ),
    },
    {
        icon: BarChart3Icon,
        title: "Understanding your dashboard",
        content: (
            <ul className="flex list-disc flex-col gap-1.5 pl-5">
                <li>Total Applications — the number of job applications you've logged.</li>
                <li>Applications per Status — a breakdown of how many applications are in each stage (applied, interview, offer, etc.).</li>
                <li>Monthly Trend — how many applications you've submitted each month.</li>
                <li>Average Distance — the average commute distance across applications that have a company address set.</li>
            </ul>
        ),
    },
    {
        icon: SettingsIcon,
        title: "Account settings",
        content: (
            <ul className="flex list-disc flex-col gap-1.5 pl-5">
                <li>Update your home address anytime from <strong>Settings → Account</strong>.</li>
                <li>Switch between light and dark theme from <strong>Settings → Theme</strong>.</li>
                <li>Change your password from the Account tab (not available if you signed in with Google).</li>
                <li>Forgot your password? Use the "Forgot your password?" link on the login page to reset it via email.</li>
            </ul>
        ),
    },
];

const GetHelp = () => {
    return (
        <div className="flex flex-col gap-6 p-6">
            <div>
                <h1 className="text-2xl font-bold text-foreground">Documentation</h1>
                <p className="text-sm text-muted-foreground">
                    Guides on how to use every feature in JobFin.
                </p>
            </div>

            <Accordion type="single" collapsible className="flex max-w-2xl flex-col gap-3">
                {GUIDES.map((guide) => {
                    const Icon = guide.icon;

                    return (
                        <AccordionItem key={guide.title} value={guide.title} className="rounded-xl border px-5">
                            <AccordionTrigger className="py-4 text-left hover:no-underline">
                                <span className="flex items-center gap-3 font-medium">
                                    <Icon className="size-4 text-primary" />
                                    {guide.title}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="pl-7 text-muted-foreground">
                                {guide.content}
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default GetHelp;