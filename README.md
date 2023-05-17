
![My Photo](src/assets/logo.png)
# Project Name

Rick and Morty memory game

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## About

Memory game with characters from Rick and Morty by consuming the API located at https://rickandmortyapi.com/.

![My Photo](src/assets/preview_game.png)

## Features

- Main View: Display a list of Rick and Morty characters.
- Game View: Memory game with a 3x4 grid of character cards, a correct guesses counter, and a turns counter.
- Game logic: Shuffle cards, show cards for 3 seconds, compare selected cards, keep track of correct guesses and turns, and display game over message.
- Every time a card gets matched the card will turn unselectable. 
- Game over message displays two buttons, Repetir (will reinitiate the game), Inicio (will redirect to home view)

### This project uses the following technologies:

- React: A JavaScript library for building user interfaces.
- React Router DOM: A library for routing in React applications.
- LocalForage: A library for offline data storage in web browsers.
- Match-sorter: A utility library for sorting and filtering lists.
- Sort-by: A utility library for sorting arrays of objects.
- Vite: A fast development server and build tool for modern web applications.
- Sass: A CSS preprocessor that adds features like variables, mixins, and nested selectors.
- Vite plugins: Various Vite plugins and dependencies for supporting React and TypeScript development.

## Getting Started

### Prerequisites

- Node.js: 14.x or higher
- npm: 6.x or higher

### Installation

1. Clone the repository:

```bash
git clone https://github.com/natachaAviles/aptitude.git
```

2. Navigate to the project directory:

```bash
cd aptitude
```

3. Install the dependencies:

```bash
npm install
```

4. Start development server:

```bash
npm run dev
```

### Folder structure

```
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── styles/
│   ├── layouts/
│   ├── services/
│   ├── main.jsx
│   ├── utils.js
|   ├── constants.js
│   └── App.jsx
├── tests/
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```



