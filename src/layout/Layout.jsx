import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      {/* default layout that set padding and for the main contents for all sub pages  */}
      <main className="mx-auto w-full px-4 sm:px-6 md:px-24 pt-6">
        {children}
      </main>
      <Footer />
    </>
  );
}
export default Layout;
