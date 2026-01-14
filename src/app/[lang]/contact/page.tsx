import { getPageMetadata } from "@/utils/generateMetadata";
import ContactClient from "./ContactClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "ar" }>;
}) {
  const { lang } = await params;
  return getPageMetadata("contact", lang);
}

export default function ContactPage() {
  return <ContactClient />;
}
