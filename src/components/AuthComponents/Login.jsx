import Image from "next/image"
import Link from "next/link"
import UserTypeSelection from "@/components/AuthComponents/user-type-selection"

export default function Login() {
  return (
    <main className="flex min-h-screen">
      <div className="w-full bg-[#121212] text-white p-8 md:p-12 lg:w-1/2 flex flex-col">
        <div className="mb-16">
          <Link href="/" className="text-[#ff6600] text-2xl font-bold">
            CyberNeoGen
          </Link>
        </div>

        <div className="max-w-md mx-auto w-full flex-1 flex flex-col justify-center">
          <UserTypeSelection />

          <div className="mt-auto pt-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-400">
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/security" className="hover:text-white">
                Security
              </Link>
              <Link href="/do-not-sell" className="hover:text-white">
                Do Not Sell My Information
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/placeholder.svg?height=1080&width=1080"
          alt="Bugcrowd office building"
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  )
}
