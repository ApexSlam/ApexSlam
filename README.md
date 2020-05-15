# Apex Slam

This is a multiplayer platformer game in which the objective of the game to reach the goal while fighting off all of the other players within the match.

To start, the MVP of this project will be the following

- Players compete against everyone else to reach the goal area which will be at the top of the map.
    - Once they reach it, they win and will be placed into the leaderboard
    - There will be no combat system.
        - Players will interfere with each other by jumping on top of another player to block their ascent
- There will be one hero
- There will only be one map
- There will only be one game mode

## Tech Stack

The rationale for choosing the technologies that I did was primarily to reduce barrier to contributing to the game. I did this by only choosing one language for the entire game and by setting up the not-so-straightforward tooling so that everyone can just jump right into writing code.

### Client

- Phaser JS
    - This is our game client framework.
    - Phaser has an inbuilt physic, animation, and Game object framework, so it takes care of a lot of extra stuff so we dont need to worry about writing a physics engine and other stuff.
- Typescript
- Socket.io
    - Rooms
        - We need to establish a "lobby" or waiting room where players will waiting inside until the game is started. We will use socket.io's room functionality to achieve this
    - Event Broadcasting
        - Since this is a multiplayer game, we need to be able to broadcast your player's actions to all of the other clients/players in your game.
        - We will achive this by broadcasting your client's events to the server (to track game state) and to all of the other clients
- Jest
    - Optional, but if you want to write tests to validate your data structures and assert expected behaviors so other people know how to use your code, it'd be much appreciated.

### Backend

- ExpressJS
    - Allows for us to write minimal boilerplate code to set up REST endpoints
- Socket.io
    - Rooms
        - We need to establish a "lobby" or waiting room where players will waiting inside until the game is started. We will use socket.io's room functionality to achieve this
    - Event Broadcasting
        - Since this is a multiplayer game, we need to be able to broadcast your player's actions to all of the other clients/players in your game.
        - We will achive this by broadcasting your client's events to the server (to track game state) and to all of the other clients
- MongoDB
    - We probably won't need this until after we finish the MVP, but perhaps it may be useful to have the following features:
        - store current game state if we implement a "Pause Game" functionality, and we end the game
        - store OAuth tokens and associate a player's lifetime career stats
            - Avg ranking
            - Career dmg dealt
            - etc.

## Contributing to this Repository (Backend)

Look here for the [Work Board](https://trello.com/invite/b/Gnr2QLRc/575cf42319d1cbe493355935b08c9eb4/work-board). Note that I made this work board really quickly and it's possible that some tickets have unclear descriptions. Feel free to DM me (@andrew.chen) on Slack if anything is unclear.

To facilitate working with others a bit easier, I'd like to lay some ground rules for how one should contribute to this repository

### Git

I've installed husky which imposes git hooks.

For now, it's fairly minimal. All it does is lint the staged files if they haven't already been linted.

The Git workflow:

1. Clone repo
2. Pick a ticket from the trello board
    - Assign yourself to the ticket
    - Move it to in-progress
    - As you work, add to the ticket any considerations you may have or anything you think may be useful in the future about your implementation of this ticket.
3. Make a new branch with a better name than what I have on trello for the ticket and do the work
4. Open a PR
    - Assign anyone who has been working on the same files as you, or assign me.
    - If you have an approval from anyone, then just rebase and merge; We're trying to move as fast as possible, so if there's anything that goes wrong, just make another ticket on trello and fix your mistake on another branch.

### File Structure

```
.
├── README.md
├── client
├── nodemon.json
├── package-lock.json
├── package.json
├── src
│   ├── index.ts                // The app main router that combines all of the other ones
│   ├── routers                 // Define all of the sub routers in here
│   │   ├── hello.ts            // A sub router that handles all routers that start with "/hello"
│   │   └── index.ts            // Combines all subrouters
│   └── services
│       └── hello.ts
└── tsconfig.json
```

All Typescript source code should go inside of the `src` folder.

- `src/index.ts`: The main Express App entry point.
    - This is where you should be registering middleware, but outside of that, you shouldnt need to touch this file
- `src/services/*.ts`: All services that you may need
    - If you anticipate that you may need to use a service within your router, make a service within this directory and refer to it in your sub router.
    - Refer to `src/routers/hello.ts` for how to import services
    - Refer to `src/services/hello.ts` for how to create an export a service.
- `src/routers/index.ts`: Combines all of the subrouters into the main App router
    - You would need to edit this file if you made a new sub router
- `src/routers/*.ts`: A sub router file.
    - Refer to `src/routers/hello.ts` for a basic file structure

### Getting Started

1. Clone Repository
2. `npm i`
    - Install dependencies
3. `npm run dev`
    - Run nodemon, which will run our backend web server and will restart everytime you make a change
4. Make a `.env`
    - As of 9:17AM ET Fri May 15 2020, it's not necessary to make this file
        - Eventually, if we end up being able to host the project, then we'll need to populate this file with stuff
    - Populate with an option `PORT` env variable via: `PORT=3000`
    - See `src/index.ts` to see how the `PORT` environment variable is being used
4. Test hello routes on localhost:3000/hello
5. You're ready to get started!