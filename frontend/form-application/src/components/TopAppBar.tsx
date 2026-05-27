export default function TopAppBar() {
  return (
    <header className="w-full sticky top-0 z-40 bg-surface border-b border-outline-variant shadow-sm flex justify-between items-center h-16 px-gutter">
      <div className="flex items-center gap-md">
        <span className="font-headline-md text-headline-md font-bold text-primary">
          UserPortal
        </span>
      </div>

      <div className="flex items-center gap-xl">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            className="pl-xl pr-md py-xs bg-surface-container-low border border-outline-variant rounded-lg text-body-md font-body-md w-64 focus:border-primary focus:ring-0"
            placeholder="Search..."
            type="text"
          />
        </div>

        <div className="flex items-center gap-md">
          <button className="material-symbols-outlined text-secondary hover:bg-surface-container-low p-xs rounded-full transition-colors cursor-pointer">
            notifications
          </button>
          <button className="material-symbols-outlined text-secondary hover:bg-surface-container-low p-xs rounded-full transition-colors cursor-pointer">
            help
          </button>
          <img
            alt="User profile avatar"
            className="w-8 h-8 rounded-full border border-outline-variant"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW9k6t_YkLHLGxb6-D0eJ846GsOksQ36vzIYdg_pmQIlpCxsM_XOpBjHHHVZ4EuVCVJtU_XRH6hCI319VRGENwd3qwMYDj89kL0MExnXaHuwUma6LvoDKKktg9HJptQEkyOT1k-j6bB8L1hf1f-QeSKGuD1DFkxwmxAbfBhaMAZS-aXCjdCTbvh_MhNmiwD_V0zgjHC42RU_2P96mvePgiAKZ2AbOlliJcZlUv0M3eWww-VMQtFHl5VGq_dDb_Yj2X56s65LTK6HZw"
          />
        </div>
      </div>
    </header>
  );
}