import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import AllRecipes from "./components/AllRecipes";

function App() {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [searchQuery, setSearchQuery] = useState("chicken");
  const appId = "beb1337e";
  const appKeys = "0daf1004650b28725ee79481f21cab46";
  const URL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${appKeys}`;
  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const fetchedData = await response.json();
      setData(fetchedData.hits);
    } catch (err) {
      console.log(err, "this is error message");
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchQuery]);
  console.log(inputVal, "this is inputval");
  const searchRecipe = () => {
    setSearchQuery(inputVal);
    setInputVal("");
  };
  console.log(searchQuery, "search query");
  return (
    <div className="App">
      food app
      <input
        type="text"
        placeholder="search for your recipe"
        id="input"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={searchRecipe}>Search</button>
      <div className="all">
        <AllRecipes data={data} />
      </div>
    </div>
  );
}

export default App;
