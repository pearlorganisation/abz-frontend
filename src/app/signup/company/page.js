import Image from "next/image"
import Link from "next/link"
import SignupForm from "@/components/AuthComponents/Signup-form"

export default function CompanySignup() {
  return (
    <main className="flex min-h-screen">
      <div className="w-full bg-[#121212] text-white p-8 md:p-12 lg:w-1/2 flex flex-col">
        <div className="mb-16">
          <Link href="/" className="text-[#ff6600] text-2xl font-bold">
            CyberNeoGen
          </Link>
        </div>

        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Join as a Company</h1>
          <p className="text-gray-400 mb-6">Create an account to start finding vulnerabilities and earning rewards.</p>

          <SignupForm userType="company" />

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login/company" className="text-blue-400 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/placeholder.svg?height=1080&width=1080"
          alt="Bugcrowd office"
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  )
}
