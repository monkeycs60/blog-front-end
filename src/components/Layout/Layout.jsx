import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <div className="min-h-screen flex flex-col p-2.5 max-w-6xl mx-auto bg-blue-300">
      <Header />
      <main className="">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
