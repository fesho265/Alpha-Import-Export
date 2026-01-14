import { getPageMetadata } from "@/utils/generateMetadata";
import AboutClient from "./AboutClient";

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "ar" };
}) {
  return getPageMetadata("about", params.lang);
}

export default function AboutPage() {
  return <AboutClient />;
}
