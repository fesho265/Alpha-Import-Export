import { getPageMetadata } from "@/utils/generateMetadata";
import AboutClient from "./AboutClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "ar" }>;
}) {
  const { lang } = await params;
  return getPageMetadata("about", lang);
}

export default function AboutPage() {
  return <AboutClient />;
}
