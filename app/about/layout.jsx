import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("About", "Meet Sunil Parajuli, a social security and social protection professional in Nepal. Explore his experience, education, and e-Governance research.", "/about");
export default function Layout({ children }) {
  return <>{children}<Footer /></>;
}
