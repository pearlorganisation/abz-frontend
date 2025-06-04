import ProgramCard from "@/components/Company/Programs/ProgramCard";
import HeaderTabs from "@/components/Company/Programs/HeaderTabs";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderTabs />
      <div className="bg-yellow-900 text-yellow-300 text-sm p-3 text-center">
        ⚠️ To view the BugBase dashboard as a bug bounty hunter <b>click here</b>
      </div>
      <div className="p-6">
        <ProgramCard
          title="denocomp-i0ot"
          url="https://gogoa.zapto.org/"
          description="denot program descriptio"
        />
      </div>
    </div>
  );
}
