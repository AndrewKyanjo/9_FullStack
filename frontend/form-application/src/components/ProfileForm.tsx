"use client";

import { useState, FormEvent, FocusEvent } from "react";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    occupation: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    postalCode: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Basic required validation (if you add required attribute)
    const inputs = document.querySelectorAll("input[required]");
    inputs.forEach((input) => {
      const el = input as HTMLInputElement;
      if (!el.value) {
        el.classList.add("border-error");
      } else {
        el.classList.remove("border-error");
      }
    });
    alert("Profile Updated Successfully");
  };

  return (
    <form className="space-y-lg" onSubmit={handleSubmit}>
      {/* Personal Info */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm overflow-hidden">
        <div className="px-lg py-md border-b border-outline-variant bg-surface-container-low">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Personal Info
          </h3>
        </div>
        <div className="p-lg grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="flex flex-col gap-xs">
            <label
              className={`font-label-md text-label-md ${
                focusedField === "fullName"
                  ? "text-primary"
                  : "text-on-surface-variant"
              }`}
            >
              Full Name
            </label>
            <input
              className="w-full border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring"
              placeholder="e.g. Johnathan Doe"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onFocus={() => handleFocus("fullName")}
              onBlur={handleBlur}
            />
          </div>

          <div className="flex flex-col gap-xs">
            <label
              className={`font-label-md text-label-md ${
                focusedField === "dob" ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              Date of Birth
            </label>
            <div className="relative">
              <input
                className="w-full border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring appearance-none"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                onFocus={() => handleFocus("dob")}
                onBlur={handleBlur}
              />
              <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                calendar_today
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-xs">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Gender
            </span>
            <div className="flex items-center gap-xl py-sm">
              {["Male", "Female", "Other"].map((g) => (
                <label
                  key={g}
                  className="flex items-center gap-sm cursor-pointer"
                >
                  <input
                    className="text-primary focus:ring-primary w-4 h-4"
                    type="radio"
                    name="gender"
                    value={g.toLowerCase()}
                    checked={formData.gender === g.toLowerCase()}
                    onChange={handleChange}
                  />
                  <span className="font-body-md text-body-md">{g}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-xs">
            <label
              className={`font-label-md text-label-md ${
                focusedField === "maritalStatus"
                  ? "text-primary"
                  : "text-on-surface-variant"
              }`}
            >
              Marital Status
            </label>
            <select
              className="w-full border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring bg-surface-container-lowest"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              onFocus={() => handleFocus("maritalStatus")}
              onBlur={handleBlur}
            >
              <option value="">Select status...</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>

          <div className="flex flex-col gap-xs md:col-span-2">
            <label
              className={`font-label-md text-label-md ${
                focusedField === "occupation"
                  ? "text-primary"
                  : "text-on-surface-variant"
              }`}
            >
              Occupation / Job Title
            </label>
            <input
              className="w-full border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring"
              placeholder="e.g. Senior Software Architect"
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              onFocus={() => handleFocus("occupation")}
              onBlur={handleBlur}
            />
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm overflow-hidden">
        <div className="px-lg py-md border-b border-outline-variant bg-surface-container-low">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Contact Details
          </h3>
        </div>
        <div className="p-lg grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="flex flex-col gap-xs">
            <label
              className={`font-label-md text-label-md ${
                focusedField === "email" ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              Email Address
            </label>
            <input
              className="w-full border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring"
              placeholder="name@company.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
            />
          </div>

          <div className="flex flex-col gap-xs">
            <label
              className={`font-label-md text-label-md ${
                focusedField === "phone" ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              Phone Number
            </label>
            <input
              className="w-full border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring"
              placeholder="+1 (555) 000-0000"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => handleFocus("phone")}
              onBlur={handleBlur}
            />
          </div>

          <div className="flex flex-col gap-xs md:col-span-2">
            <label
              className={`font-label-md text-label-md ${
                focusedField === "street" ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              Street Address
            </label>
            <input
              className="w-full border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring"
              placeholder="123 Corporate Blvd, Ste 400"
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              onFocus={() => handleFocus("street")}
              onBlur={handleBlur}
            />
          </div>

          <div className="flex flex-col gap-xs">
            <label
              className={`font-label-md text-label-md ${
                focusedField === "city" ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              City
            </label>
            <input
              className="w-full border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring"
              placeholder="San Francisco"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              onFocus={() => handleFocus("city")}
              onBlur={handleBlur}
            />
          </div>

          <div className="flex flex-col gap-xs">
            <label
              className={`font-label-md text-label-md ${
                focusedField === "postalCode"
                  ? "text-primary"
                  : "text-on-surface-variant"
              }`}
            >
              Postal Code
            </label>
            <input
              className="w-full border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring"
              placeholder="94105"
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              onFocus={() => handleFocus("postalCode")}
              onBlur={handleBlur}
            />
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-end items-center gap-md pt-md">
        <button
          className="px-xl py-sm rounded-lg font-label-md text-label-md text-secondary bg-surface-container-low hover:bg-surface-container-high transition-colors"
          type="button"
          onClick={() => alert("Cancelled")}
        >
          Cancel
        </button>
        <button
          className="px-xl py-sm rounded-lg font-label-md text-label-md text-on-primary bg-primary-container shadow-md hover:opacity-90 active:scale-[0.98] transition-all"
          type="submit"
        >
          Save Profile Changes
        </button>
      </div>
    </form>
  );
}