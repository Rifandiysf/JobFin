import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom";

export function SettingNav({
    items,
    onClick,
}) {
    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    {items.map((item) => {
                        const isActive = location.pathname.startsWith(item.url)

                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild onClick={onClick} isActive={isActive} className={isActive ? "bg-primary! dark:text-background!" : ""}>
                                    <Link to={item.url}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
