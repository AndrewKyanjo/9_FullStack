"use client";

import { useState, FormEvent } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const buttonContent = () => {
    if (loading) {
      return (
        <>
          <span className="material-symbols-outlined animate-spin text-[18px]">
            progress_activity
          </span>
          Authenticating...
        </>
      );
    }
    if (success) {
      return (
        <>
          <span className="material-symbols-outlined text-[18px]">
            check_circle
          </span>
          Welcome back
        </>
      );
    }
    return (
      <>
        Sign In
        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </>
    );
  };

  return (
    <form className="space-y-lg" onSubmit={handleSubmit}>
      <div className="space-y-sm">
        <label
          className="font-label-md text-label-md text-on-surface-variant block"
          htmlFor="email"
        >
          Email Address
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </div>
          <input
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-11 pr-md py-md font-body-md text-body-md focus:ring-0 focus:border-primary-container focus:border-2 transition-all outline-none"
            id="email"
            name="email"
            placeholder="name@company.com"
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-sm">
        <div className="flex justify-between items-center">
          <label
            className="font-label-md text-label-md text-on-surface-variant"
            htmlFor="password"
          >
            Password
          </label>
          <a
            className="font-label-sm text-label-sm text-primary hover:underline underline-offset-4 transition-all"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">lock</span>
          </div>
          <input
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-11 pr-11 py-md font-body-md text-body-md focus:ring-0 focus:border-primary-container focus:border-2 transition-all outline-none"
            id="password"
            name="password"
            placeholder="••••••••"
            required
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
          />
          <button
            className="absolute inset-y-0 right-0 pr-md flex items-center text-outline hover:text-on-surface-variant transition-colors"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <span className="material-symbols-outlined text-[20px]">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-sm">
        <input
          className="w-4 h-4 text-primary bg-surface-container border-outline-variant rounded focus:ring-primary"
          id="remember"
          name="remember"
          type="checkbox"
          checked={formData.remember}
          onChange={handleChange}
        />
        <label
          className="font-body-md text-body-md text-secondary select-none"
          htmlFor="remember"
        >
          Stay signed in for 30 days
        </label>
      </div>
      <button
        className={`w-full font-label-md text-label-md py-md rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-sm group ${
          success
            ? "bg-tertiary-container text-on-tertiary-container"
            : "bg-primary-container text-on-primary-container"
        }`}
        disabled={loading}
        type="submit"
      >
        {buttonContent()}
      </button>
    </form>
  );
}
