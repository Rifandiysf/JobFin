const Hero = () => {
    return (
        <section
            id="home"
            className="flex min-h-dvh w-full flex-col gap-6 px-4 pb-6 pt-24 sm:gap-8 sm:px-6 sm:pb-8 sm:pt-28 lg:px-10"
        >
            <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center sm:gap-4 lg:gap-5">
                <h1 className="w-full max-w-5xl text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    Navigate your way through every step of your job applications.
                </h1>

                <p className="max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base lg:text-lg">
                    Track every application, map your commute, and stay organized
                    through every step toward a role that truly fits your life.
                </p>
            </div>

            <div className="relative h-[40dvh] w-full shrink-0 overflow-hidden rounded-xl sm:h-[50dvh] sm:rounded-2xl lg:h-[60dvh]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/videos/mesh-gradient.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    );
};

export default Hero;