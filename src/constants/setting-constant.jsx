import { CircleUserIcon, LogOut, SunMoon } from "lucide-react";

export const data = {
    navMain: [
        {
            title: "Account",
            url: "/account",
            icon: (
                <CircleUserIcon />
            ),
        },
        {
            title: "Themes",
            url: "/theme",
            icon: (
                <SunMoon />
            ),
        },
    ],
    NavSetFooter: [
        {
            title: "Logout Account",
            url: "",
            icon: (
                <LogOut />
            )
        },
    ]
}