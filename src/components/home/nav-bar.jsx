import { Link } from "react-router-dom";
import { Button } from "../ui/button";


const Navbar = () => {
    return (
        <header className="flex justify-between items-center fixed left-0 top-0 w-full px-6 py-4 z-99 bg-background">
            <div className="flex items-center gap-1">
                <img src="/jobfin.svg" alt="logo" className="size-8" />
                <h1 className="font-bold text-3xl">JobFin</h1>
            </div>

            <nav className="flex items-center gap-6 font-medium">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#features">Features</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#faq">FAQ</a>
            </nav>

            <div>
                <Button variant="ghost" className="p-5 rounded-full text-lg font-semibold">
                    <Link to="/login">Login</Link>
                </Button>
                <Button className="p-5 rounded-full text-lg font-semibold">
                    <Link to="/signup">Get Started</Link>
                </Button>
            </div>
        </header>
    )
}

export default Navbar