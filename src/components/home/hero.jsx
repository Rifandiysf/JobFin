const Hero = () => {
    return (
        <section id="home" className="grid grid-rows-2 min-h-dvh w-full px-6">
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
                <h1 className="w-full max-w-5xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                    Navigate your way through every step of your job applications.
                </h1>

                <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                    Track every application, map your commute, and stay organized
                    through every step toward a role that truly fits your life.
                </p>
            </div>

            <div className="relative h-[60dvh] w-full overflow-hidden rounded-2xl">
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