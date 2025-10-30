# ENCOM Globe Development Guide

## Build Commands
- `npm start` - Start development server with hot reloading
- `npm run build` - Build the library (both regular and minified versions)
- `npm run build:demo` - Build the complete demo with all assets
- `npm run build:dev` - Build development version with all assets
- `grunt buildgrid` - Rebuild the globe grid
- `npm run test` - No tests configured yet

## Code Style Guidelines

### Imports
- CommonJS module system (`require` and `module.exports`)
- One import per line, alphabetize when possible
- Core libraries first, then external libraries, then local modules

### Formatting
- Use 4-space indentation
- Semicolons required
- Prefer single quotes for strings
- Camel case for variable and function names

### JavaScript Patterns
- Constructor functions with capitalized names (e.g., `Globe`, `Marker`, `Satellite`)
- Prototype methods for object functionality
- Module pattern for private scopes and public interfaces
- Use closures for private variables and helper functions
- Event handling via callback functions

### Error Handling
- Use descriptive variable names for error parameters
- Return early pattern for validation
- Use default options via object parameter pattern

### Performance
- Reuse textures when possible
- Optimize THREE.js objects with shared materials
- Cache computed values when appropriate
- Use requestAnimationFrame for animation loops