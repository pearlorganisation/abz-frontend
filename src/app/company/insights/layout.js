// app/layout.js
import AssetsNavbar from "@/components/Company/Assets/AssetsNavbar";
import CompanyDashboard from "@/components/Company/CompanyDashboard";

export const metadata = {
  title: "My App",
  description: "Next.js Layout Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen  bg-gray-100 flex-row text-gray-900">
        {/* Sidebar */}
        <div className="flex flex-row bg-white shadow">
          <aside className="w-64 bg-white shadow">
            <AssetsNavbar />
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
      </body>
    </html>
  );
}
