import UserRecordsTable from "@/components/UserRecordsTable";

export default function DashboardPage() {
    return (
        <>
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
                <div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">
                        User Records
                    </h1>
                    <p className="font-body-lg text-body-lg text-secondary">
                        Manage and monitor all submitted user data in real-time.
                    </p>
                </div>
                <div className="flex gap-sm">
                    <button className="px-lg py-sm bg-surface-container-low text-secondary font-label-md text-label-md rounded-lg border border-outline-variant hover:bg-surface-container-high transition-colors flex items-center gap-xs">
                        <span className="material-symbols-outlined text-[18px]">
                            filter_list
                        </span>
                        Filters
                    </button>
                    <button className="px-lg py-sm bg-primary-container text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity flex items-center gap-xs shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">
                            add
                        </span>
                        Add Record
                    </button>
                </div>
            </section>
            <UserRecordsTable />
        </>
    );
}
