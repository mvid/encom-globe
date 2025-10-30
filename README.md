# Encom Globe

# Instructions to use

```
npm i -g bower # install bower globally
npm i -g grunt-cli # install grunt-cli globally
npm i # install packages from packages.json
bower i  # install bower
```

## Using grunt

You can now use grunt:

```
grunt watch
grunt browserify
grunt buildgrid
grunt uglify

```

watch: The watch task listens for changes in specified files (src/\*.js, index.html, styles.css, Gruntfile.js, and browserify.js). When a change is detected, it runs the browserify task and triggers a livereload event in the browser if the livereload option is enabled.

browserify: This task runs Browserify to bundle the project's JavaScript modules. The entry point is browserify.js, and the output file is placed in the build directory with a name specified in the package.json file.

shell:buildgrid: This task runs a shell command to execute the bin/buildgrid script with specified options (like -r 500, -o grid.js, and -m resources/equirectangle_projection.png). The buildgrid script generates a grid configuration and writes it to grid.js.

uglify: The uglify task takes the bundled JavaScript file created by the browserify task and minifies it using Uglify. The minified file is saved in the build directory with a .min.js extension.

# About

The **Encom Globe** is a WebGL-based clone of the globe from the boardroom scene in [Tron: Legacy](http://www.imdb.com/title/tt1104001/). If you don't recall that scene, check out [Bradley Munkowitz's excellent writeup](http://work.gmunk.com/TRON-Board-Room) about its production for more information.

This version attempts to stay as true to the in-movie original as possible while maintaining a high frame rate on low powered machines and devices. It is getting _pretty close_ to acheiving that goal and mimics most of the details seen on screen, including the loading animations for the globe hexagon particles, the satellites, and the markers.

![Encom Globe](https://raw.github.com/arscan/encom-globe/master/screenshot.jpg "Encom Globe")

It written using Three.js, with parts implemented in GLSL. It is not at all affiliated with Tron, Disney, or the team that created the original movie version. It is just a tribute.

A [Demo](http://www.robscanlon.com/encom-globe) is available on robscanlon.com - original author's website.

### Usage

The Encom Globe was written as part of a [larger project](http://www.robscanlon.com/encom-boardroom) and with a specific use in mind, but it does provide a certain level of flexibility if you would like to use it yourself as an alternative to the popular [WebGL Globe](http://www.chromeexperiments.com/globe). The blue markers, orange connected markers, and satellites can be placed wherever and whenever you would like.

View [index.html](index.html) for a usage example.

### Development

This project uses Webpack for building and bundling:

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build library files (dist/encom-globe.js and dist/encom-globe.min.js)
npm run build

# Build complete demo
npm run build:demo
```

For more detailed build instructions, see [BUILD.md](BUILD.md).

### License

The MIT License (MIT)
Copyright (c) 2014-2017 Robert Scanlon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
