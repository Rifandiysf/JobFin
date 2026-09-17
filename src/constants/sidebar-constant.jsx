import { LayoutDashboardIcon, Settings2Icon, CircleHelpIcon, BriefcaseBusiness } from "lucide-react"

export const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
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
            url: "/setting",
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