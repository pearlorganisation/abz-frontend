import Image from "next/image"
import Link from "next/link"
import LoginForm from "@/components/AuthComponents/Login-form"

export default function ResearcherLogin() {
  return (
    <main className="flex min-h-screen">
      <div className="w-full bg-[#121212] text-white p-8 md:p-12 lg:w-1/2 flex flex-col">
        <div className="mb-16">
          <Link href="/" className="text-[#ff6600] text-2xl font-bold">
            CyberNeoGen
          </Link>
        </div>

        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Log in to Researcher Portal</h1>
          <p className="text-gray-400 mb-6">Enter your credentials to access your account.</p>

          <LoginForm userType="researcher" />

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400 mb-2">
              Forgot your password?{" "}
              <Link href="/reset-password" className="text-blue-400 hover:underline">
                Reset password
              </Link>
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Don&apos;t have an account?{" "}
              <Link href="/signup/researcher" className="text-blue-400 hover:underline">
                Create an account
              </Link>
            </p>
            <p className="text-sm text-gray-400">
              Looking for the Customer portal?{" "}
              <Link href="/login/customer" className="text-blue-400 hover:underline">
                Go to Customer portal
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/placeholder.svg?height=1080&width=1080"
          alt="Bugcrowd team members"
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  )
}
