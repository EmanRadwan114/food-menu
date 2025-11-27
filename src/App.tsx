import "./App.css";
import FilterTabs from "./components/FilterTabs";
import MenuList from "./components/MenuList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-28 pb-10 px-3 md:px-5">
        <main className="flex flex-col gap-y-10">
          <FilterTabs />
          <MenuList />
        </main>
      </div>
    </>
  );
}

export default App;
