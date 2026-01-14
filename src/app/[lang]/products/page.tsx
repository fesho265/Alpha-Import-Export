import { getPageMetadata } from "@/utils/generateMetadata";
import ProductsClient from "./ProductsClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "ar" }>;
}) {
  const { lang } = await params;
  return getPageMetadata("products", lang);
}

export default function ProductsPage() {
  return <ProductsClient />;
}
