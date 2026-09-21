const About = () => {
    return (
        <section
            id="about"
            className="my-16 scroll-mt-24 px-4 sm:my-24 sm:px-8 md:px-16 lg:my-36 lg:px-24"
        >
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:gap-6">
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                    About us
                </h2>

                <p className="text-left text-base text-muted-foreground sm:text-justify sm:text-lg md:text-xl lg:text-2xl">
                    <span className="font-semibold">JobFin</span> was built for one
                    simple reason: job hunting shouldn't mean losing track of where
                    you applied, or realizing too late that the office is two hours
                    from home. It brings your applications, commute distances, and
                    progress into one clear view, helping you stay organized and
                    find opportunities that fit your career and everyday life.
                </p>
            </div>
        </section>
    );
};

export default About;