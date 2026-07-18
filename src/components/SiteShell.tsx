import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      <Sidebar />
      <main className="lg:pl-[92px]">
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-5 sm:px-6 sm:pt-6 lg:px-10 lg:pb-12">
          <TopBar />
          {children}
        </div>
      </main>
    </div>
  );
}
