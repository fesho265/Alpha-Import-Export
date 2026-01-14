import { getPageMetadata } from "@/utils/generateMetadata";
import ProductsClient from "./ProductsClient";

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "ar" };
}) {
  return getPageMetadata("products", params.lang);
}

export default function ProductsPage() {
  return <ProductsClient />;
}
