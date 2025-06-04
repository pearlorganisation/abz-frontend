import CompanyHeader from "@/components/Company/common/Header";
import Sidebar from "@/components/Company/Dashboard/Sidebar";

export default function CompanyLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 bg-black min-h-screen text-white">
        <CompanyHeader />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
