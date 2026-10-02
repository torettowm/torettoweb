import type { Metadata } from "next";
import DemoSite from "../../../components/DemoSite";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const demoTitles: Record<string, string> = {
  lumina: "Lumina | فروشگاه آنلاین بوتیک",
  novapay: "NovaPay | پلتفرم پرداخت هوشمند",
  "arka-tech": "Arka Tech | سایت شرکتی",
};

export function generateStaticParams() {
  return [
    { slug: "lumina" },
    { slug: "novapay" },
    { slug: "arka-tech" },
  ];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: demoTitles[slug] || "نمونه‌کار Torreto Web",
    description: "نمونه‌کار طراحی و توسعه وب‌سایت توسط Torreto Web",
  };
}

export default async function DemoPage({ params }: PageProps) {
  const { slug } = await params;

  return <DemoSite slug={slug} />;
}
