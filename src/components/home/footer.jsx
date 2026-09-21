import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
];

const LEGAL_LINKS = [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
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
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-white/10 px-4 pb-10 pt-10 sm:px-8 sm:pt-12 md:flex md:items-start md:justify-between">
                <div className="flex flex-col gap-3">
                    <span className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/30">
                        Navigation
                    </span>
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    <span className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/30">
                        Legal
                    </span>
                    {LEGAL_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1 text-sm font-medium text-white/70 transition-colors hover:text-white"
                        >
                            {link.label}
                            <ArrowUpRight
                                size={12}
                                className="-translate-y-0.5 opacity-0 transition-all group-hover:opacity-100"
                            />
                        </a>
                    ))}
                </div>

                <div className="col-span-2 flex flex-col items-start gap-3 md:items-end">
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
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-white/50 transition-colors hover:text-white md:mt-4"
                    >
                        Back to top <ArrowUpRight size={12} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-start gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
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

            <div className="w-full overflow-hidden px-4 py-4 sm:px-8">
                <img
                    src="/watermark.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-full select-none opacity-55"
                />
            </div>
        </footer>
    );
};

export default Footer;