import React from "react";

const api = {
  key: process.env.REACT_APP_MY_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search... "
          ></input>
        </div>
      </main>
    </div>
  );
}

export default App;
