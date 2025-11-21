# RazorVueApp

A hybrid web application that seamlessly integrates .NET 8 Razor Pages with Vue 3 components. This project demonstrates how to build modern, interactive web applications by combining server-side rendering with reactive frontend components.

## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Development Workflow](#development-workflow)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About the Project

RazorVueApp showcases a modern approach to web development by leveraging the strengths of both .NET and Vue ecosystems. The application uses ASP.NET Core Razor Pages for server-side rendering and routing, while Vue 3 Composition API powers the interactive client-side components. Webpack bundles the Vue components and manages the build pipeline.

This architecture is ideal for:

- Teams with expertise in both .NET and JavaScript ecosystems
- Applications requiring server-side rendering with modern frontend interactivity
- Progressive migration from traditional Razor Pages to component-based architecture
- Projects that benefit from .NET's backend capabilities and Vue's reactive UI

## Key Features

- **Hybrid Architecture**: Combines ASP.NET Core Razor Pages with Vue 3 components
- **Hot Module Replacement**: Development mode with live reloading via Webpack DevServer
- **Environment-Aware Loading**: Automatically switches between dev server and production bundles
- **Modern Build Pipeline**: Webpack 5 with Babel transpilation and Vue SFC support
- **Bootstrap Integration**: Responsive UI with Bootstrap 5
- **TypeScript Ready**: Configured for easy TypeScript adoption

## Technologies Used

**Backend:**

- .NET 8.0 (ASP.NET Core Razor Pages)
- C# with nullable reference types enabled

**Frontend:**

- Vue 3.5.12 (Composition API ready)
- JavaScript (ES6+)

**Build Tools:**

- Webpack 5.96.0
- Babel 7.26.0 (ES6+ transpilation)
- Vue Loader 17.3.1 (Single File Components)

**Development:**

- Webpack Dev Server 5.1.0
- HTML Webpack Plugin 5.6.3

**Styling:**

- Bootstrap 5 (via CDN)
- CSS Modules support
- Scoped Vue component styles

## Architecture

The application follows a hybrid architecture pattern:

1. **Server Layer**: ASP.NET Core handles routing, server-side rendering, and serves static files
2. **Build Layer**: Webpack compiles Vue components into optimized bundles
3. **Client Layer**: Vue components mount into designated DOM elements on Razor Pages
4. **Development Layer**: Webpack DevServer provides hot reloading during development

```
┌─────────────────────────────────────────────┐
│           ASP.NET Core Server               │
│  (Razor Pages, Static Files, Routing)      │
└──────────────┬──────────────────────────────┘
               │
               ├─── Development ───> Webpack DevServer (Port 9000)
               │                     └─> Hot Module Replacement
               │
               └─── Production ────> Static Bundle (wwwroot/dist)
                                     └─> Optimized Assets
┌─────────────────────────────────────────────┐
│           Vue 3 Application                 │
│  (Components, Reactivity, DOM Updates)     │
└─────────────────────────────────────────────┘
```

## Project Structure

```
RazorVueApp/
├── Pages/                          # Razor Pages
│   ├── Index.cshtml               # Main page with Vue integration
│   ├── Index.cshtml.cs            # Page model
│   ├── Privacy.cshtml             # Privacy page
│   ├── Error.cshtml               # Error page
│   └── Shared/
│       ├── _Layout.cshtml         # Layout template
│       ├── _Layout.cshtml.css     # Layout styles
│       └── _ValidationScriptsPartial.cshtml
├── wwwroot/                        # Static files
│   ├── js/
│   │   ├── main.js                # Vue app entry point
│   │   ├── index.html             # Webpack dev template
│   │   └── components/
│   │       └── SampleComponent.vue # Sample Vue component
│   ├── css/
│   │   └── site.css               # Global styles
│   ├── dist/                       # Webpack output (generated)
│   │   └── bundle.js              # Compiled Vue bundle
│   └── lib/                        # Client libraries (Bootstrap, jQuery)
├── Properties/
│   └── launchSettings.json        # Launch profiles
├── Program.cs                      # Application entry point
├── RazorVueApp.csproj             # .NET project file
├── package.json                    # Node.js dependencies
├── webpack.config.js              # Webpack configuration
├── appsettings.json               # App configuration
└── appsettings.Development.json   # Development settings
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [.NET 8 SDK](https://dotnet.microsoft.com/download) or later
- [Node.js](https://nodejs.org/) (v18.0 or later recommended)
- npm (comes with Node.js)
- A code editor (VS Code, Visual Studio, or Rider recommended)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/gezielcarvalho/razor-vue-app.git
   cd razor-vue-app
   ```

2. **Restore .NET dependencies**:

   ```bash
   dotnet restore
   ```

3. **Install Node.js dependencies**:

   ```bash
   npm install
   ```

### Running the Application

#### Option 1: Development Mode (Recommended)

For the best development experience with live reloading:

1. **Start Webpack Dev Server** (in one terminal):

   ```bash
   npm run dev
   ```

   This starts the dev server at `http://localhost:9000` with hot module replacement.

2. **Start the .NET application** (in another terminal):

   ```bash
   dotnet run
   ```

3. **Access the application**:

   Navigate to:

   - HTTP: `http://localhost:5167`
   - HTTPS: `https://localhost:7168`

   The app will automatically load Vue components from the dev server, and changes to `.vue` files will be hot-reloaded instantly.

#### Option 2: Production Mode

To test the production build:

1. **Build the Vue components**:

   ```bash
   npm run build
   ```

   This creates optimized, minified bundles in `wwwroot/dist/`.

2. **Start the .NET application without launch profile** (defaults to port 5000):

   ```bash
   dotnet run --no-launch-profile
   ```

   Or, to use the configured ports (5167/7168), run normally:

   ```bash
   dotnet run
   ```

3. **Access the application**:

   Open your browser and navigate to:

   - If using `--no-launch-profile`: `http://localhost:5000`
   - If using launch profile: `http://localhost:5167` or `https://localhost:7168`

   The app will load the static, optimized bundle from `wwwroot/dist/bundle.js`.

### Development Workflow

**NPM Scripts:**

- `npm run dev` - Start Webpack Dev Server with hot reload (port 9000)
- `npm run build` - Build production bundle with minification
- `npm run build:dev` - Build development bundle (useful for debugging)

**Making Changes to Vue Components:**

1. Ensure Webpack Dev Server is running (`npm run dev`)
2. Edit Vue components in `wwwroot/js/components/`
3. Changes are automatically hot-reloaded in the browser
4. No need to refresh the page manually

**Making Changes to Razor Pages:**

1. Edit `.cshtml` files in the `Pages/` directory
2. Save the file
3. Refresh the browser to see changes
4. For automatic refresh, use `dotnet watch run` instead of `dotnet run`

**Adding New Vue Components:**

1. Create a new `.vue` file in `wwwroot/js/components/`
2. Import it in `main.js` or another component
3. Register it in the Vue app configuration
4. Use it in your Razor pages within the `#vue-app` div

**Production Build Checklist:**

1. Run `npm run build` to create optimized bundles
2. Test with `dotnet run` (uses Development environment by default)
3. For true production testing, use `dotnet run --no-launch-profile`
4. Verify the bundle loads from `wwwroot/dist/bundle.js` (check browser DevTools)
5. Check for any console errors related to Vue initialization

## Configuration

### Webpack Configuration

The `webpack.config.js` file controls the build process:

- **Entry Point**: `wwwroot/js/main.js`
- **Output**: `wwwroot/dist/bundle.js`
- **Mode**: Configured via command line (development or production)
- **Dev Server Port**: 9000
- **Hot Reload**: Enabled in development mode
- **Proxy**: API requests to `/api` are proxied to the .NET backend at port 5167

### Launch Settings

The application can be run with different profiles (defined in `Properties/launchSettings.json`):

- **http**: Runs on `http://localhost:5167` (Development environment)
- **https**: Runs on `https://localhost:7168` (Development environment, with HTTP fallback)
- **IIS Express**: Runs on IIS Express (Development environment)
- **No launch profile** (`--no-launch-profile`): Runs on default ports (5000/5001) in Production environment

### Environment Detection

The `Index.cshtml` page automatically detects the environment:

- **Development**: Loads bundles from Webpack Dev Server (`http://localhost:9000/bundle.js`)
- **Production**: Loads static bundles from `wwwroot/dist/bundle.js` with cache busting (`asp-append-version="true"`)

### Port Configuration Summary

| Scenario                         | .NET Port | Environment | Vue Bundle Source     |
| -------------------------------- | --------- | ----------- | --------------------- |
| `dotnet run`                     | 5167/7168 | Development | DevServer (port 9000) |
| `dotnet run --no-launch-profile` | 5000/5001 | Production  | Static bundle         |
| `dotnet watch run`               | 5167/7168 | Development | DevServer (port 9000) |

## Usage

### Example: Using the Sample Component

The included `SampleComponent.vue` demonstrates basic Vue functionality:

```vue
<template>
  <div>
    <h2>Hello from Vue Component!</h2>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "This is a Vue component inside a .NET Razor app!!!",
    };
  },
  methods: {
    changeMessage() {
      this.message = "Message changed!";
    },
  },
};
</script>
```

### Integrating Vue into Razor Pages

1. **Add a mount point** in your Razor page:

   ```html
   <div id="vue-app">
     <!-- Vue components render here -->
   </div>
   ```

2. **Load the bundle** in the Scripts section:

   ```csharp
   @section Scripts {
       @if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development")
       {
           <script src="http://localhost:9000/bundle.js"></script>
       }
       else
       {
           <script src="~/dist/bundle.js" asp-append-version="true"></script>
       }
   }
   ```

   Note: The `asp-append-version="true"` attribute adds cache-busting in production.

3. **Configure your Vue app** in `main.js`:

   ```javascript
   import { createApp } from "vue";
   import MyComponent from "./components/MyComponent.vue";

   const app = createApp({
     components: { MyComponent },
     template: `<my-component />`,
   });

   app.mount("#vue-app");
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` file for more information.

---

**Project Repository**: [https://github.com/gezielcarvalho/razor-vue-app](https://github.com/gezielcarvalho/razor-vue-app)

**Author**: Geziel Carvalho

**Last Updated**: November 2025
