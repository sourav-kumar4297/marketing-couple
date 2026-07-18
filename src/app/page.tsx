import { ProcessStrip } from "@/components/ProcessStrip";
import { ProfileHeader } from "@/components/ProfileHeader";
import { TrustedBy } from "@/components/TrustedBy";
import { WorkGrid } from "@/components/WorkGrid";

export default function HomePage() {
  return (
    <>
      <ProfileHeader />
      <ProcessStrip />
      <WorkGrid />
      <TrustedBy />
    </>
  );
}
