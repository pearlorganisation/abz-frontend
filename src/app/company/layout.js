// app/layout.js
import CompanyDashboard from "@/components/Company/CompanyDashboard";

export const metadata = {
  title: "My App",
  description: "Next.js Layout Example",
};

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen  bg-gray-100 flex-row text-gray-900">
      {/* Sidebar */}
      <div className="flex flex-row bg-white shadow">
        <aside className=" bg-white shadow">
          <CompanyDashboard />
        </aside>
        <main className=" p-4  w-full">{children}</main>
      </div>
      {/* Main Content Area */}
      <div className=" flex flex-col">
        {/* Optional Header */}

        {/* Page Content */}

        {/* Footer */}
        <footer className="bg-white shadow p-4 mt-auto">Global Footer</footer>
      </div>
    </div>
  );
}
