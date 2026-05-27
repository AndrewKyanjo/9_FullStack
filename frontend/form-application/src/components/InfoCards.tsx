const cards = [
  {
    icon: "security",
    title: "Data Privacy",
    description:
      "Your data is encrypted using enterprise-grade protocols and stored in a secure vault.",
  },
  {
    icon: "sync",
    title: "Real-time Sync",
    description:
      "Changes made here are instantly reflected across all connected SaaS modules.",
  },
  {
    icon: "history",
    title: "Audit Logs",
    description:
      "A full history of modifications is maintained for organizational compliance.",
  },
];

export default function InfoCards() {
  return (
    <div className="mt-xxl grid grid-cols-1 md:grid-cols-3 gap-lg">
      {cards.map((card) => (
        <div
          key={card.title}
          className="p-lg bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col items-center text-center"
        >
          <span className="material-symbols-outlined text-primary text-[32px] mb-sm">
            {card.icon}
          </span>
          <h4 className="font-label-md text-label-md mb-xs">{card.title}</h4>
          <p className="font-caption text-caption text-secondary">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}