import Header from "Components/layout/header";
import Footer from "Components/layout/footer";

export default function Home({ children }) {
  return (
    <div className="min-h-screen container bg-white">
      <Header/>
      <div className="scroll overflow-auto my-8 mt-0">{children}</div>
      <Footer />
    </div>
  );
}