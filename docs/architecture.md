# Architecture

```text
Razor Page -> Vue mount point -> Vue sample component
      |                ^
      |                |
      +--> ASP.NET Core static files / Webpack production bundle
                       |
                       +--> Webpack Dev Server in development
```

ASP.NET Core owns routing and Razor rendering. Webpack compiles Vue single-file components into a bundle; the Razor page loads the development server bundle during development and static assets in production. The current Vue content is a sample component only.
