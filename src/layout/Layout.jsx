import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full px-4 sm:px-6 md:px-16 pt-6">
        {children}
      </main>
      <Footer />
    </>
  );
}
export default Layout;
