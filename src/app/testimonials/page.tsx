import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";

export const metadata: Metadata = {
  title: "Testimonials",
};

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-[calc(100dvh-7.5rem)] flex-col lg:min-h-[calc(100dvh-4.5rem)]">
      <PageIntro
        eyebrow="TESTIMONIALS"
        title="Brands that grew with us."
        description="A few words from partners who trusted Marketing Couple with their story, content, and growth."
      />

      <div className="flex flex-1 flex-col justify-center pb-4">
        <TestimonialsSlider />
      </div>
    </div>
  );
}
