import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

export const LegalLayout = ({ title, lastUpdated, children }) => (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-3">
            <Link
                to="/"
                className="inline-flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
                <ArrowLeftIcon className="size-4" />
                Back to Home
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
            <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>

        <div
            className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground
            [&_h2]:mt-4 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground
            [&_strong]:text-foreground
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1
            [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-2"
        >
            {children}
        </div>
    </div>
);