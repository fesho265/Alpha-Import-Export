import { getPageMetadata } from "@/utils/generateMetadata";
import ContactClient from "./ContactClient";

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "ar" };
}) {
  return getPageMetadata("contact", params.lang);
}

export default function ContactPage() {
  return <ContactClient />;
}
