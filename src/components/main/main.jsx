import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";
import Item from "../item/item";
const Main = () => {
  const [warGame, setwarGame] = useState([]);
  const [boardGame, setboardGame] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/war-games")
      .then((warGame) => {
        setwarGame(warGame.data.data);
      })
      .catch(() => {})
      .finally(() => {});

    axios
      .get("http://localhost:1337/api/board-games")
      .then((boardGame) => {
        setboardGame(boardGame.data.data);
      })
      .catch(() => {})
      .finally(() => {});
  }, []);
  return (
    <>
      <Header />
      <section>
        <article className="war">War Game</article>
        {warGame.map((item, key) => {
          return <Item item={item.attributes} />;
        })}

        <article className="board">Board Game</article>
        {boardGame.map((item, key) => {
          return <Item item={item.attributes} />;
        })}
      </section>
    </>
  );
};
export default Main;
