import "./App.css";
import FilterTabs from "./components/FilterTabs";
import MenuList from "./components/MenuList";
import Search from "./components/Search";

function App() {
  return (
    <div className="container mx-auto py-10 px-3 md:px-5">
      <Search />
      <main className="flex flex-col gap-y-10">
        <FilterTabs />
        <MenuList />
      </main>
    </div>
  );
}

export default App;
