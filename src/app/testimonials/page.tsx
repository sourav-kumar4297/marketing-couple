import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";

export const metadata: Metadata = {
  title: "Testimonials",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageIntro
        eyebrow="TESTIMONIALS"
        title="Brands that grew with us."
        description="A few words from partners who trusted Marketing Couple with their story, content, and growth."
      />

      <TestimonialsSlider />
    </>
  );
}
