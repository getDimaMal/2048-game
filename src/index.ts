import "./styles/main.scss";
import GameController from "./app/controllers/game.controller";
import SwipeController from "./app/controllers/swipe.controller";
import { GameModel } from "./app/models/game.model";
import { GameView } from "./app/views/game.view";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    new SwipeController();
    const game = new GameController(new GameModel(), new GameView());

    root.append(game.render());
});