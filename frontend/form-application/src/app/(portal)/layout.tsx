import SideNavBar from "@/components/SideNavBar";
import TopAppBar from "@/components/TopAppBar";
import Footer from "@/components/Footer";

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">
            <SideNavBar />
            
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                <TopAppBar />

                <main className="flex-1 p-gutter max-w-5xl mx-auto w-full">
                    {children}
                </main>

                <Footer />
            </div>

            <div className="fixed top-0 right-0 -z-10 opacity-10 pointer-events-none">
                <div className="w-[600px] h-[600px] bg-gradient-to-br from-primary via-tertiary to-transparent rounded-full blur-[100px]" />
            </div>
        </div>
    );
}