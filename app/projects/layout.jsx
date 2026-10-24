import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Projects", "Explore Sunil Parajuli’s work in social security, health insurance, openIMIS, interoperability, and digital public infrastructure.", "/projects");
export default function Layout({ children }) {
  return <>{children}<Footer /></>;
}
