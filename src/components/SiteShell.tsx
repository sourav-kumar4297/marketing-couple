import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      <Sidebar />
      <main className="lg:pl-[92px]">
        <div className="mx-auto max-w-[1480px] px-4 pb-24 pt-5 sm:px-8 sm:pt-6 lg:px-12 lg:pb-12 xl:px-16">
          <TopBar />
          {children}
        </div>
      </main>
    </div>
  );
}
