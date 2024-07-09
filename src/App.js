import "./App.css";
import cardStyles from "./card.module.css";
import gameStyles from "./game.module.styl";
import treasuresList from "./treasures/index.js";

function App() {
  console.log(gameStyles,'gameStyles')
  console.log(cardStyles,'cardStyles')
  return (
    <div className="App">
      <header className="App-header">
        {gameStyles.card}
        {treasuresList.map((item) => {
          return (
            <div key={item.id} className={gameStyles.card}>
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
