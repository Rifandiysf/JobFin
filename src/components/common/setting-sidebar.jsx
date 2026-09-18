import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { data } from "@/constants/setting-constant";
import { ArrowLeft } from "lucide-react";
import { SettingNav } from "./setting-nav";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

export function SettingSidebar({
    ...props
}) {
    const { logout } = useAuth()

    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5!">
                            <Link to="/dashboard">
                                <ArrowLeft className="size-5!" />
                                <span className="text-base font-bold">Back to Dashboard</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SettingNav items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <SettingNav items={data.NavSetFooter} onClick={logout}/>
            </SidebarFooter>
        </Sidebar>
    );
}
