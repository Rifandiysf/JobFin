import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <section className="my-36 px-6 sm:px-12">
            <div className="relative flex min-h-140 flex-col items-center justify-center gap-6 overflow-hidden rounded-3xl px-6 text-center">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/cta-background.webp')",
                    }}
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/10"
                />

                <div className="relative z-10 flex flex-col items-center gap-6">
                    <h2 className="text-4xl font-medium leading-tight tracking-tight text-white sm:text-6xl">
                        Stop losing track of your job search.
                        <br />
                        Start organizing today.
                    </h2>

                    <p className="max-w-lg text-sm text-white/80 sm:text-base">
                        Track every application, calculate your commute, and see your
                        progress — all in one place, completely free.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white font-medium text-black hover:bg-white/90"
                        >
                            <Link to="/signup">Get Started Free</Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="secondary"
                            className="bg-black font-medium text-white hover:bg-black/80"
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