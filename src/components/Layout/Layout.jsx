import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col bg-blue-300 p-2.5">
      <Header />
      <main className="">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
