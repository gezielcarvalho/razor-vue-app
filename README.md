# RazorVueApp

This project combines a .NET Razor Pages application with Vue components to create a dynamic web application. The Razor Pages framework provides server-side rendering and backend functionality, while Vue handles the frontend interactivity.

## Table of Contents

- [RazorVueApp](#razorvueapp)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
      - [1. Build the Vue Components](#1-build-the-vue-components)
      - [2. Start the .NET Server](#2-start-the-net-server)
      - [3. Access the Application](#3-access-the-application)
    - [Development Mode (Optional)](#development-mode-optional)
  - [Usage](#usage)
  - [License](#license)

## About the Project

This application was built to demonstrate how .NET Razor Pages can be combined with Vue components to add dynamic frontend elements to a server-rendered web application. The app uses Webpack to compile and bundle the Vue components, which are then loaded into specific Razor Pages.

## Technologies Used

- .NET (Razor Pages)
- Vue 3
- Webpack
- Node.js (for managing frontend dependencies)

## Project Structure

```
RazorVueApp/
├── wwwroot/
│   ├── js/
│   │   ├── main.js               # Entry point for Vue app
│   │   └── components/
│   │       └── SampleComponent.vue # Sample Vue component
│   └── dist/                      # Compiled files from Webpack
├── Pages/
│   └── Index.cshtml               # Main Razor Page with Vue component
├── webpack.config.js              # Webpack configuration file
├── package.json                   # Node.js dependencies
├── Program.cs                     # .NET entry point
```

## Getting Started

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download) (version 6.0 or newer)
- [Node.js](https://nodejs.org/) (version 18.0 or newer)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/gezielcarvalho/razor-vue-app.git
   cd RazorVueApp
   ```

2. **Install .NET dependencies**:

   ```bash
   dotnet restore
   ```

3. **Install Node.js dependencies**:
   ```bash
   npm install
   ```

### Running the Application

#### 1. Build the Vue Components

Use Webpack to compile and bundle the Vue components. This will output the files to the `wwwroot/dist` directory.

```bash
npx webpack --config webpack.config.js
```

#### 2. Start the .NET Server

Run the .NET server to host the Razor Pages application, including the bundled Vue files.

```bash
dotnet run
```

#### 3. Access the Application

Once the server is running, you can access the application in your browser at:

```
http://localhost:5000
```

### Development Mode (Optional)

To run the frontend in development mode with hot reloading, you can start Webpack DevServer separately:

```bash
npx webpack serve
```

Then, access the development server at `http://localhost:9000`.

## Usage

1. Open the main page (`Index.cshtml`) at `http://localhost:5000`.
2. Interact with the Vue component embedded in the Razor Page to see frontend interactivity powered by Vue.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

This README provides an overview of how the app is set up, the dependencies required, and instructions for running both the .NET and Vue components. Let me know if you'd like any additional details included!
