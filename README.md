# game-prototypes

A dashboard for linking to my game prototypes.
https://scmx.github.io/game-prototypes

## Purpose

For use in Kiosk app in order to have one starting url where all my
current game prototype projects can be reached from.

## Local usage

You can add a `?l=192.168.1.123:1234` query param in order to add another
local project.

You start a server with something like: `npm run dev -- --host --https`
Which exposes: https://192.168.1.9:5173 (https to not violate github pages
[HSTS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)).

On an iPad for example in a Kiosk app you can now enter
https://scmx.github.io/game-prototypes?l=192.168.1.9:5173 in order to
add an additional item for your current project.

## Contributing

Feel free to fork the project with your own links if you want.

## Future ideas

Show info and link to source code for each game.

## How to deploy / note to self

Github pages is configured to use main branch with html in docs folder.
Vite is configured to have docs folder as output and base url /game-prototypes.

- `npm run build` Build to docs folder
- `npm run preview` Check that is works
- `git add docs`
- `git commit -n "Update github pages"`
