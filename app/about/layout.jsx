import Footer from "@/components/Footer";
export const metadata = {
  title: "About",
  description:
    "Social security, health insurance, and digital public infrastructure experience of Sunil Parajuli.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
