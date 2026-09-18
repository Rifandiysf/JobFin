// src/components/common/nav-main.jsx
import { useLocation, Link } from "react-router-dom";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";

export function NavMain({ items }) {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const isActive = location.pathname.startsWith(item.url)

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={isActive} className={isActive ? "bg-primary! dark:text-background!" : ""}>
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