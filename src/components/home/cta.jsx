import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <section className="my-16 px-4 sm:my-24 sm:px-8 lg:my-36 lg:px-12">
            <div className="relative flex min-h-112 flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl px-4 py-16 text-center sm:min-h-140 sm:rounded-3xl sm:px-6">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/cta-background.webp')",
                    }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/10" />

                <div className="relative z-10 flex w-full flex-col items-center gap-4 sm:gap-6">
                    <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Stop losing track of your job applications.{" "}
                        <br className="hidden sm:block" />
                        Start organizing today.
                    </h2>

                    <p className="max-w-lg text-sm text-white/80 sm:text-base lg:text-lg">
                        Track every application, calculate your commute, and see your
                        progress — all in one place, completely free.
                    </p>

                    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <Button
                            asChild
                            className="w-full rounded-full bg-primary p-5 text-base font-semibold text-black hover:bg-primary/90 sm:w-auto sm:text-lg"
                        >
                            <Link to="/signup">Get Started Free</Link>
                        </Button>

                        <Button
                            asChild
                            variant="secondary"
                            className="w-full rounded-full bg-background p-5 text-base font-semibold text-foreground hover:bg-background/80 sm:w-auto sm:text-lg"
                        >
                            <Link to="/login">Login</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;