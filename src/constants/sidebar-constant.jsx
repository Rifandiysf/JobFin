import { LayoutDashboardIcon, Settings2Icon, CircleHelpIcon, BriefcaseBusiness } from "lucide-react"

export const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: (
                <LayoutDashboardIcon />
            ),
        },
        {
            title: "Application",
            url: "/application",
            icon: (
                <BriefcaseBusiness />
            ),
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "/Account",
            icon: (
                <Settings2Icon />
            ),
        },
        {
            title: "Get Help",
            url: "/get-help",
            icon: (
                <CircleHelpIcon />
            ),
        },
    ],
}