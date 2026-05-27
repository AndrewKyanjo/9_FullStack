"use client";

import { useState } from "react";

interface UserRecord {
  initials: string;
  name: string;
  email: string;
  occupation: string;
  status: "Active" | "Pending" | "Inactive";
}

const records: UserRecord[] = [
  {
    initials: "AL",
    name: "Alex Lebron",
    email: "alex.lebron@enterprise.com",
    occupation: "Senior Cloud Architect",
    status: "Active",
  },
  {
    initials: "SW",
    name: "Sarah Waters",
    email: "s.waters@fintech-solutions.io",
    occupation: "Product Manager",
    status: "Pending",
  },
  {
    initials: "MK",
    name: "Michael Kross",
    email: "mkross@datalabs.net",
    occupation: "Data Scientist",
    status: "Active",
  },
  {
    initials: "JD",
    name: "Jane Doe",
    email: "jane.doe@global-inc.com",
    occupation: "Legal Counsel",
    status: "Inactive",
  },
  {
    initials: "RB",
    name: "Robert Burns",
    email: "rburns@tech-corp.com",
    occupation: "VP of Engineering",
    status: "Active",
  },
];

const statusStyles: Record<UserRecord["status"], string> = {
  Active: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Inactive: "bg-surface-variant text-on-surface-variant",
};

const avatarBg: Record<UserRecord["status"], string> = {
  Active: "bg-primary-fixed text-on-primary-fixed",
  Pending: "bg-secondary-fixed text-on-secondary-fixed",
  Inactive: "bg-surface-container-high text-secondary",
};

export default function UserRecordsTable() {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = records.filter(
    (r) =>
      r.name.toLowerCase().includes(filter.toLowerCase()) ||
      r.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0px_1px_3px_rgba(9,30,66,0.13)] overflow-hidden flex flex-col flex-1">
      <div className="px-lg py-md border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-md bg-surface-container-low/30">
        <div className="flex items-center gap-sm">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            Show:
          </span>
          <select className="bg-transparent border-none text-label-md font-label-md focus:ring-0 cursor-pointer">
            <option>10 Entries</option>
            <option>25 Entries</option>
            <option>50 Entries</option>
          </select>
        </div>
        <div className="relative w-full sm:w-72">
          <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[18px]">
            search
          </span>
          <input
            className="w-full pl-xl pr-md py-xs border border-outline-variant rounded-lg focus:border-primary-container focus:ring-0 text-body-md transition-all"
            placeholder="Filter by name or email..."
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-container-low sticky top-0 z-10">
            <tr>
              <th className="px-lg py-md font-label-sm text-label-sm text-secondary uppercase tracking-widest border-b border-outline-variant">
                Name
              </th>
              <th className="px-lg py-md font-label-sm text-label-sm text-secondary uppercase tracking-widest border-b border-outline-variant">
                Email
              </th>
              <th className="px-lg py-md font-label-sm text-label-sm text-secondary uppercase tracking-widest border-b border-outline-variant">
                Occupation
              </th>
              <th className="px-lg py-md font-label-sm text-label-sm text-secondary uppercase tracking-widest border-b border-outline-variant">
                Status
              </th>
              <th className="px-lg py-md font-label-sm text-label-sm text-secondary uppercase tracking-widest border-b border-outline-variant text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {filtered.map((record) => (
              <tr
                key={record.email}
                className="hover:bg-surface-container-low transition-colors group"
              >
                <td className="px-lg py-md">
                  <div className="flex items-center gap-md">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${avatarBg[record.status]}`}
                    >
                      {record.initials}
                    </div>
                    <span className="font-label-md text-label-md text-on-surface">
                      {record.name}
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md text-body-md text-secondary">
                  {record.email}
                </td>
                <td className="px-lg py-md text-body-md text-secondary">
                  {record.occupation}
                </td>
                <td className="px-lg py-md">
                  <span
                    className={`px-sm py-1 text-[11px] font-bold rounded-full uppercase ${statusStyles[record.status]}`}
                  >
                    {record.status}
                  </span>
                </td>
                <td className="px-lg py-md text-right">
                  <button className="p-xs text-outline hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-lg py-md border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md bg-surface-container-low/30">
        <p className="font-caption text-caption text-on-surface-variant">
          Showing <span className="font-bold">1</span> to{" "}
          <span className="font-bold">{filtered.length}</span> of{" "}
          <span className="font-bold">{records.length}</span> records
        </p>
        <div className="flex items-center gap-xs">
          <button
            className="h-8 w-8 flex items-center justify-center rounded border border-outline-variant text-secondary hover:bg-surface-container-low transition-colors disabled:opacity-30"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_left
            </span>
          </button>
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              className={`h-8 w-8 flex items-center justify-center rounded font-label-md text-label-md transition-colors ${
                currentPage === p
                  ? "bg-primary-container text-on-primary shadow-sm"
                  : "border border-outline-variant text-secondary hover:bg-surface-container-low"
              }`}
              onClick={() => setCurrentPage(p)}
            >
              {p}
            </button>
          ))}
          <span className="px-xs text-outline">...</span>
          <button className="h-8 w-8 flex items-center justify-center rounded border border-outline-variant text-secondary font-label-md text-label-md hover:bg-surface-container-low transition-colors">
            12
          </button>
          <button
            className="h-8 w-8 flex items-center justify-center rounded border border-outline-variant text-secondary hover:bg-surface-container-low transition-colors"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
