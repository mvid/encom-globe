# Encom Globe Build System

This project uses Webpack for building and bundling.

## Requirements

- Node.js 14.x or higher
- npm 6.x or higher

## Development

To start the development server with hot reloading:

```bash
npm start
```

This will start a development server at http://localhost:9000

## Building

### Library Build

To build just the library files:

```bash
npm run build
```

This will create both unminified and minified versions in the `dist` directory:
- `dist/encom-globe.js` - Unminified version with source maps
- `dist/encom-globe.min.js` - Minified version optimized for production

### Demo Build

To create a complete demo build with all assets:

```bash
npm run build:demo
```

This will create a complete demo in the `demo` directory with all necessary files.

### Development Build

To create a development build for testing:

```bash
npm run build:dev
```

This creates a development version in the `dev-build` directory.

## Project Structure

- `src/` - Source JavaScript files
- `webpack-config/` - Webpack configuration files
  - `webpack.common.js` - Common webpack configuration
  - `webpack.lib.js` - Configuration for unminified library 
  - `webpack.prod.js` - Configuration for minified library
  - `webpack.dev.js` - Development server configuration
  - `webpack.demo.js` - Demo build configuration
- `dist/` - Library build output (just the JS files)
- `demo/` - Complete demo with all assets
- `dev-build/` - Development build output