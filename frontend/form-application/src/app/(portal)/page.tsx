import ProfileForm from "@/components/ProfileForm";
import InfoCards from "@/components/InfoCards";

export default function ProfilePage() {
    return (
        <>
            <div className="mb-xl">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
                    Profile Data Entry
                </h2>
                <p className="font-body-lg text-body-lg text-secondary">
                    Complete the information below to update your enterprise
                    profile records.
                </p>
            </div>
            <ProfileForm />
            <InfoCards />
        </>
    );
}
