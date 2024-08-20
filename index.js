import tetris from "./basic/Tetris/tetris.js";

if (import.meta.url === new URL(import.meta.url).href) {
  tetris();
  console.log("Hello, World!");
}
