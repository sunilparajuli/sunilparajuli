import Footer from "@/components/Footer";
export const metadata = {
  title: "Projects",
  description:
    "Selected social protection, health insurance, and public-sector technology projects by Sunil Parajuli.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
