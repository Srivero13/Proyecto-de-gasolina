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
- **`admin.html`**: This is the **admin interface**, where users can manage gas stations, including adding, editing, or deleting stations and updating fuel prices.
- **`index.html`**: The **main user interface** where users can view a list of available gas stations and their current fuel prices.
- **`estaciones.json`**: This file acts as a **JSON database**, containing all the necessary information about the gas stations, such as their names, addresses, and fuel prices.
- **`server.js`**: The **Node.js server** that powers the application, providing necessary backend functionality like serving the pages and handling requests.
- **`README.md`**: This file contains **documentation** for setting up and using the project, along with any other relevant information.

Contributing
Contributions are welcome! To contribute:

Fork the repository.

Create a new branch: git checkout -b feature/your-feature-name.

Commit your changes: git commit -m 'Add some feature'.

Push to the branch: git push origin feature/your-feature-name.

Open a Pull Request and describe your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
