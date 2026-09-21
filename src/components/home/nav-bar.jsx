import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed left-0 top-0 z-99 w-full bg-background">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
                <a href="#home" onClick={closeMenu} className="flex items-center gap-1">
                    <img src="/jobfin.svg" alt="JobFin logo" className="size-7 sm:size-8" />
                    <span className="text-2xl font-bold sm:text-3xl">JobFin</span>
                </a>

                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-6 font-medium lg:flex"
                >
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-2 lg:flex">
                    <Button
                        asChild
                        variant="ghost"
                        className="rounded-full p-5 text-lg font-semibold"
                    >
                        <Link to="/login">Login</Link>
                    </Button>
                    <Button asChild className="rounded-full p-5 text-lg font-semibold">
                        <Link to="/signup">Get Started</Link>
                    </Button>
                </div>

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
                </Button>
            </div>

            {isOpen && (
                <div
                    id="mobile-menu"
                    className="flex flex-col gap-4 border-b px-4 pb-6 pt-2 sm:px-6 lg:hidden"
                >
                    <nav aria-label="Mobile navigation" className="flex flex-col font-medium">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="rounded-md px-2 py-3 transition-colors hover:bg-muted"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                            asChild
                            variant="ghost"
                            className="w-full rounded-full p-5 text-base font-semibold sm:w-auto"
                        >
                            <Link to="/login" onClick={closeMenu}>
                                Login
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="w-full rounded-full p-5 text-base font-semibold sm:w-auto"
                        >
                            <Link to="/signup" onClick={closeMenu}>
                                Get Started
                            </Link>
                        </Button>
                    </div>
                </div>
    )
}
        </header >
    );
};

export default Navbar;