"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { instance } from "@/services/Axios/axiosInterceptor";

const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  optional = false,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label} {optional && <span className="text-gray-500">(optional)</span>}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      required={required}
    />
  </div>
);

export default function SignupForm({ userType }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    company_name: "", // for company users
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      username,
      email,
      phone,
      password,
      confirmPassword,
      agreeTerms,
      company_name,
    } = formData;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    if (!agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    // Submit logic here, including userType as role
    // console.log({
    //   firstName,
    //   lastName,
    //   email,
    //   phone,
    //   password,
    //   agreeTerms,
    //   role: userType,
    //   ...(userType === "company" && { company_name }),
    // });
    try {
      const dataToSend = {
        first_name: firstName,
        last_name: lastName,
        // user_name: `${firstName.toLowerCase()}_${lastName.toLowerCase()}`, // backend expects this field
        user_name: username, // backend expects this field
        email,
        phone_number: phone,
        password,
        confirm_password: confirmPassword,
        role: userType.toUpperCase(),
        company_name: userType === "company" ? company_name : undefined,
      };

      const response = await instance.post(`/auth/register`, dataToSend);
      // alert(JSON.stringify(response));

      const responseData = response?.data?.message;

      alert(responseData ?? "Signup successful! Please verify your email.");
      // router.push("/login");
    } catch (error) {
      console.error("Signup error:", error);
      alert(
        error?.response?.data?.message ||
          "An error occurred during signup. Please try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          id="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <InputField
          id="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <InputField
        id="username"
        label="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <InputField
        id="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <InputField
        id="phone"
        type="tel"
        label="Phone No."
        value={formData.phone}
        onChange={handleChange}
        optional
      />

      {userType === "company" && (
        <InputField
          id="company_name"
          label="Company Name"
          value={formData.company_name}
          onChange={handleChange}
          required
        />
      )}

      <InputField
        id="password"
        type="password"
        label="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <InputField
        id="confirmPassword"
        type="password"
        label="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      {/* Hidden input for role */}
      <input type="hidden" id="role" value={userType} />

      <div className="flex items-center">
        <input
          id="agreeTerms"
          type="checkbox"
          checked={formData.agreeTerms}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-[#1a1a1a]"
          required
        />
        <label htmlFor="agreeTerms" className="ml-2 text-sm">
          I agree to the{" "}
          <Link href="/terms" className="text-blue-400 hover:underline">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-blue-400 hover:underline">
            Privacy Policy
          </Link>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
      >
        Create Account
      </button>
    </form>
  );
}
