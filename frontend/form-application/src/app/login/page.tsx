import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";

export default function LoginPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow flex items-center justify-center px-gutter py-xxl relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary-container/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-tertiary-container/10 rounded-full blur-[100px]" />
                </div>
                <div className="z-10 w-full max-w-[440px] bg-surface-container-lowest border border-outline-variant rounded-lg p-xl login-card-shadow">
                    <div className="flex flex-col items-center mb-xl">
                        <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg mb-md">
                            <span className="material-symbols-outlined text-on-primary text-[32px]">
                                shield_person
                            </span>
                        </div>
                        <h1 className="font-headline-md text-headline-md text-primary">
                            UserPortal
                        </h1>
                        <p className="font-body-md text-body-md text-secondary mt-xs">
                            Secure Enterprise Management
                        </p>
                    </div>
                    <LoginForm />
                    <div className="mt-xl pt-xl border-t border-outline-variant flex flex-col items-center gap-md">
                        <p className="font-body-md text-body-md text-secondary">
                            New to the portal?
                        </p>
                        <button className="w-full border border-outline-variant text-secondary font-label-md text-label-md py-md rounded-lg hover:bg-surface-container-low transition-colors">
                            Request Platform Access
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
