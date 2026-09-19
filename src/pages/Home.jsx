import About from "@/components/home/about";
import CallToAction from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Feature from "@/components/home/feature";
import Flow from "@/components/home/flow";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/nav-bar";


const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Feature />
                <Flow />
                <Faq />
                <CallToAction />
            </main>
            <Footer />
        </>
    )
}

export default Home