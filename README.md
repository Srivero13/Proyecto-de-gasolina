# Gasoline Project

A system designed to reduce speculation in the distribution and sale of fuel.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project aims to reduce speculation and hoarding in the fuel market by providing a platform to register and consult information about gas stations and their fuel prices.

## Features

- Register gas stations with current fuel prices.
- Admin panel for managing stations and prices.
- Interactive frontend for viewing stations and price information.

## Requirements

- [Node.js](https://nodejs.org/) (recommended: version 14.x or higher)
- A modern web browser (Chrome, Firefox, Edge, etc.)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Srivero13/Proyecto-de-gasolina.git
   cd Proyecto-de-gasolina
2. Install dependencies:

bash
Copy
Edit
npm install
3. Start the server:

node server.js
Open your browser and go to http://localhost:3000 to access the application.

Usage
Home Page (index.html): Displays available gas stations and their fuel prices.

Admin Panel (admin.html): Allows adding, editing, or deleting stations and updating fuel prices.

Project Structure:

Proyecto-de-gasolina/
├── admin.html          # Admin interface
├── index.html          # Main user interface
├── estaciones.json     # JSON database of gas stations
├── server.js           # Node.js server
└── README.md           # Project documentation
Contributing
Contributions are welcome! To contribute:

Fork the repository.

Create a new branch: git checkout -b feature/your-feature-name.

Commit your changes: git commit -m 'Add some feature'.

Push to the branch: git push origin feature/your-feature-name.

Open a Pull Request and describe your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
