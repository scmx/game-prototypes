import "./style.css";

const games = [
  {
    href: "https://scmx.github.io/spelsylt7",
    emoji: "🧍",
    title: "Spelsylt7 Prototype",
    tags: ["typescript", "vanilla"],
  },
  {
    href: "https://scmx.github.io/seahorse-angler-game-typescript",
    emoji: "🐠",
    title: "Seahorse Angler Game",
    tags: ["typescript", "vanilla"],
  },
  {
    href: "https://scmx.github.io/mastermind ",
    emoji: "🧠",
    title: "Mastermind Game",
    tags: ["hyperapp"],
  },
  {
    href: "https://scmx.github.io/asteroids-canvas-game-typescript",
    emoji: "☄️",
    title: "Asteroids Game",
    tags: ["typescript", "vanilla"],
  },
];

new URLSearchParams(location.search).getAll("l").forEach((localhost) => {
  const match = localhost.match(/^(\d+).(\d+).(\d+).(\d+):(\d+)$/);
  if (!match) return;
  const [a, b, c, d, port] = match.slice(1);
  if (a !== "192" || b !== "168") return;
  const host = `${a}.${b}.${c}.${d}`;
  games.push({
    href: `${location.protocol}//${host}:${port}`,
    emoji: "🧪",
    title: `${host} ${port}`,
    tags: [],
  });
});

games.forEach((game) => {
  const title = document.createElement("span");
  title.textContent = game.title;
  title.className = "game-title";

  const anchor = document.createElement("a");
  anchor.href = game.href;
  anchor.className = "game-anchor";
  anchor.appendChild(title);

  const span = document.createElement("span");
  span.className = "game-emoji";
  span.dataset.emoji = game.emoji;

  const article = document.createElement("article");
  article.className = "game-card";
  article.appendChild(anchor);
  article.appendChild(span);

  grid.appendChild(article);
});

refresh.onclick = () => location.reload();

declare global {
  const app: HTMLDivElement;
  const grid: HTMLDivElement;
  const refresh: HTMLButtonElement;
}
