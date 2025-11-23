import { Sidebar } from "@/components/Sidebar";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Mock user for demo
    const role = "STUDENT";

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Sidebar role={role} />
            <main className="pl-64 min-h-screen">
                <div className="p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
