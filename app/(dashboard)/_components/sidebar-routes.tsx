"use client";

import { usePathname } from "next/navigation";
import { Layout,Compass, BarChart, List } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search"
    },
];

const teacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics",
    },
];

export const SidebarRoutes = () => {
const pathname = usePathname();

const isTeacherPage = pathname?.startsWith("/teacher");

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;
    return(
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    href={route.href}
                    icon={route.icon}
                    label={route.label}
                />
            ))}
        </div>
    )
}