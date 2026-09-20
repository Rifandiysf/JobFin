import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
];

const socialLinks = [
    { label: "Instagram", href: "https://instagram.com/Rifandiysf" },
    { label: "LinkedIn", href: "https://linkedin.com/in/rifandiyusuf" },
];

const Footer = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            const day = now.toLocaleDateString("en-US", {
                weekday: "long",
                timeZone,
            });

            const clock = now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
                timeZone,
            });

            const tzShort = new Intl.DateTimeFormat("en-US", {
                timeZone,
                timeZoneName: "short",
            })
                .formatToParts(now)
                .find((part) => part.type === "timeZoneName")?.value;

            setTime(`${day} ${clock} ${tzShort}`);
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="flex w-full flex-col overflow-hidden bg-black">
            <div className="flex items-start justify-between border-b border-background/10 px-8 pb-10 pt-12 max-sm:flex-col max-sm:gap-10">
                <div className="flex flex-col gap-3">
                    <span className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/30">
                        Navigation
                    </span>
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    <span className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/30">
                        Social
                    </span>
                    {socialLinks.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1 text-sm font-medium text-white/70 transition-colors hover:text-white"
                        >
                            {s.label}
                            < ArrowUpRight
                                size={12}
                                className="-translate-y-0.5 opacity-0 transition-all group-hover:opacity-100"
                            />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col items-end gap-3 max-sm:items-start">
                    <span className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/30">
                        Info
                    </span>
                    <span className="text-sm font-medium text-white/70">
                        Bandung, Indonesia
                    </span>
                    <span className="text-sm font-medium tabular-nums text-white/70">
                        {time}
                    </span>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-white"
                    >
                        Back to top <ArrowUpRight size={12} />
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between px-8 py-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                <span className="text-[11px] font-medium uppercase tracking-widest text-white/30">
                    Copyright &copy; {new Date().getFullYear()} JobFin. All rights reserved.
                </span>

                <a
                    href="https://instagram.com/Rifandiysf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium uppercase tracking-widest text-white/30 transition-colors hover:text-white/60"
                >
                    Built by Rifandi Yusuf
                </a>
            </div>

            <div className="flex w-full items-center gap-4 overflow-hidden px-8 py-4 text-white/10" >
                <img src="/watermark.svg" className="w-full opacity-55"/>
            </div>
        </footer>
    );
};

export default Footer;