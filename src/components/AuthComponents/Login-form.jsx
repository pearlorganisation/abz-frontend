"use client";

import { useReducer, useCallback } from "react"
import { useRouter } from "next/navigation"
import { instance } from "@/services/Axios/axiosInterceptor"

const initialState = {
  identifier: "",
  password: "",
  rememberMe: false,
  identifierType: "EMAIL", // or "USERNAME"
  loading: false,
  error: null,
}

function reducer(state, action) {
  return { ...state, ...action }
}

export default function LoginForm({ userType }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const router = useRouter()

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target
    dispatch({ [name]: type === "checkbox" ? checked : value })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    console.log({ email, password, rememberMe, userType });
    // For demo purposes, we'll just log the values
    // router.push(`/${userType}/dashboard`)
  };
    e.preventDefault()
    const { identifier, password, identifierType, rememberMe } = state

    if (!identifier || !password) {
      dispatch({ error: "All fields are required." })
      return
    }

    dispatch({ loading: true, error: null })

    const dataToSend = {
      password,
      identifier_type: identifierType,
      ...(identifierType === "EMAIL"
        ? { email: identifier }
        : { user_name: identifier }),
    }

    try {
      const res = await instance.post("/auth/login", dataToSend, {
        withCredentials: true,
      })

      if (res.data.success) {
        router.push(`/${userType}/dashboard`)
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Login failed. Please try again."
      dispatch({ error: msg })
    } finally {
      dispatch({ loading: false })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Login With</label>
        <select
          name="identifierType"
          value={state.identifierType}
          onChange={handleChange}
          className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md text-white"
        >
          <option value="EMAIL">Email</option>
          <option value="USERNAME">Username</option>
        </select>
      </div>

      <div>
        <label htmlFor="identifier" className="block text-sm font-medium mb-2">
          {state.identifierType === "EMAIL" ? "Email" : "Username"}
        </label>
        <input
          id="identifier"
          name="identifier"
          type={state.identifierType === "EMAIL" ? "email" : "text"}
          value={state.identifier}
          onChange={handleChange}
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
          name="password"
          type="password"
          value={state.password}
          onChange={handleChange}
          className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex items-center">
        <input
          id="rememberMe"
          name="rememberMe"
          type="checkbox"
          checked={state.rememberMe}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-[#1a1a1a]"
        />
        <label htmlFor="rememberMe" className="ml-2 block text-sm">
          Remember me
        </label>
      </div>

      {state.error && (
        <p className="text-sm text-red-500">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={state.loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.loading ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
}
