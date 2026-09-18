import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 text-center">
            <span
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[10rem] font-black leading-none text-muted-foreground/10 sm:text-[16rem]"
            >
                404
            </span>

            <div className="relative flex flex-col items-center gap-3">
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                    Page Not Found!
                </h1>
                <p className="max-w-sm text-sm text-muted-foreground">
                    Content unavailable due to error or deletion by owner
                </p>

                <Button
                    asChild
                    className="mt-4 bg-primary font-bold text-black hover:bg-primary/80"
                >
                    <Link to="/dashboard">
                        Back to Home
                        <ArrowRightIcon className="size-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;