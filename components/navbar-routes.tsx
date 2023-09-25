"use client";

import { UserButton } from "@clerk/nextjs";
import  { usePathname, useRouter } from "next/navigation";
import {Button} from "@/components/ui/button";
import  { LogOut } from "lucide-react";

export const NavbarRoutes = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.startsWith("/chapter");

    return(
        <div className="flex gap-x-2 ml-auto">
            {isTeacherPage || isPlayerPage ? (
                <Button>
                    <LogOut />
                </Button>
            ): null}
            <UserButton/>
        </div>
    )
}