"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    BookOpen,
    GraduationCap,
    Settings,
    LogOut,
    CreditCard
} from "lucide-react";

const studentLinks = [
    { href: "/student", label: "Dashboard", icon: LayoutDashboard },
    { href: "/student/courses", label: "My Courses", icon: BookOpen },
    { href: "/student/achievements", label: "Achievements", icon: GraduationCap },
    { href: "/subscription", label: "Subscription", icon: CreditCard },
    { href: "/student/settings", label: "Settings", icon: Settings },
];

const instructorLinks = [
    { href: "/instructor", label: "Dashboard", icon: LayoutDashboard },
    { href: "/instructor/courses", label: "Manage Courses", icon: BookOpen },
    { href: "/instructor/analytics", label: "Analytics", icon: GraduationCap },
    { href: "/instructor/settings", label: "Settings", icon: Settings },
];

export function Sidebar({ role = "STUDENT" }: { role?: "STUDENT" | "INSTRUCTOR" | "ADMIN" }) {
    const pathname = usePathname();
    const links = role === "INSTRUCTOR" ? instructorLinks : studentLinks;

    return (
        <div className="w-64 h-screen fixed left-0 top-0 glass border-r border-white/20 flex flex-col p-6">
            <div className="mb-10">
                <Link href="/" className="text-2xl font-bold tracking-tight">
                    LMS<span className="text-primary">.ai</span>
                </Link>
            </div>

            <nav className="flex-1 space-y-2">
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                                isActive
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                    : "hover:bg-white/10 text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{link.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="pt-6 border-t border-white/10">
                <Link href="/">
                    <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
