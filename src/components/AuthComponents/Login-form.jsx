"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { instance } from "@/services/Axios/axiosInterceptor";

export default function LoginForm({ userType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await instance.post("/auth/login", {
        email,
        password,
        identifier_type: "EMAIL",
      });
      console.log(res);
      if (res.data.success) {
        router.push("/dashboard");
      }
    } catch (err) {
      setErrorMsg(err?.response?.data?.message || "Login failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    console.log({ email, password, rememberMe, userType });
    // For demo purposes, we'll just log the values
    // router.push(`/${userType}/dashboard`)
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex items-center">
        <input
          id="remember-me"
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-[#1a1a1a]"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm">
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
      >
        Log in
      </button>
    </form>
  );
}
