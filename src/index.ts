import './styles/main.scss';
import { GameModel } from './app/models/game.model';
import { GameController } from './app/controllers/game.controller';
import { GameView } from './app/views/game.view';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const game = new GameController(new GameModel(), new GameView());

  root.append(game.render());
});