import "./App.css";
import FilterTabs from "./components/FilterTabs";
import Footer from "./components/Footer";
import MenuList from "./components/MenuList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-40 sm:pt-28 pb-10 px-3 md:px-5">
        <main className="flex flex-col gap-y-10">
          <h1 className="capitalize text-center text-2xl leading-loose font-extrabold text-gray-800">
            <span className="border-b-4 border-s-4 rounded-bl-full rounded-tl-full px-4 py-2 border-orange-700">
              View your favourite meal
            </span>
          </h1>
          <FilterTabs />
          <MenuList />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
