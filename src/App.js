import "./App.css";
import gameStyle from "./game.styl";
import treasuresList from "./treasures/index.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {treasuresList.map((item) => {
          return (
            <div key={item.id} className={gameStyle.treasureItem}>
              <img src={item.imgUrl} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
