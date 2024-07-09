import "./App.css";
import gameStyles from "./game.module.styl";
import treasuresList from "./treasures/index.js";

function App() {
  return (
    <div className="App">
      <div className={gameStyles.cardWrap}>
        {treasuresList.map((item) => {
          return (
            <div key={item.id} className={gameStyles.card}>
              <img
                src={item.imgUrl}
                alt={item.name}
                className={gameStyles.icon}
              />
              <p className={gameStyles.name}>{item.name}</p>
              <p className={gameStyles.desc}>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
