import Link from "next/link";

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "#" },
  { label: "My Profile", icon: "person", href: "#", active: true },
  { label: "Settings", icon: "settings", href: "#" },
];

export default function SideNavBar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 z-50 bg-on-surface flex flex-col py-lg shadow-lg hidden md:flex">
      <div className="px-gutter mb-xl">
        <h1 className="font-headline-sm text-headline-sm text-surface-container-lowest">
          Enterprise Portal
        </h1>
        <p className="font-caption text-caption text-surface-variant">
          Management Console
        </p>
      </div>

      <nav className="flex-1 px-sm space-y-xs">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-md px-md py-sm font-label-md text-label-md transition-all duration-200 ease-in-out ${
              item.active
                ? "bg-primary-container text-on-primary-container border-l-4 border-primary rounded-r-lg"
                : "text-surface-variant hover:text-surface-bright hover:bg-secondary-container/10"
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto px-gutter border-t border-outline-variant/20 pt-md">
        <div className="flex items-center gap-sm">
          <img
            alt="User Profile"
            className="w-8 h-8 rounded-full bg-surface-container"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbjcIpfjA4nib-1c9eCF0oYn3fUq-Khcqp5aI8qW8cZntyV9eOaTfo_vCt0QwpgoI5jFe2AGXOV4KfGuGaQCLvchqzub7r6ToY1T-Zf6Bf2E8HFJOBeBCQQL_7OQqde0Kr31-aPbgMLNq3-wb9-UET0PVV3mRaZUY2dABM5lvSOMlO40TvO2TONwHvWoMsKIOcQCy9sF6d54X5T4vp0Dm9r9Jr3U6aX8Dt3u1EAiK75ltW1BXYGlSKND_v7DfHUL5OEh11wTOJIw2s"
          />
          <div className="overflow-hidden">
            <p className="font-label-sm text-label-sm text-surface-container-lowest truncate">
              Alex Sterling
            </p>
            <p className="font-caption text-caption text-surface-variant truncate">
              Admin Access
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}