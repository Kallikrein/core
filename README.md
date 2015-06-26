# Cordova-Framework

## Summary
* [Files architecture](#files-architecture)

-----

#### Files architecture

<pre>
<b>./</b>
├── <b><a href="#node_modules">nodes_modules/</a></b>
├── <b><a href="#www">www/</a></b>
|   ├── <b><a href="#assets">assets/</a></b>
|   |   ├── <b><a href="#img">img/</a></b>
|   |   ├── <b><a href="#fonts">fonts/</a></b>
|   |   └── <a href="#css">*.css</a>
|   ├── <b><a href="#bower_components">bower_components/</a></b>
|   |   ├── <b><a href="#bluebird">bluebird/</a></b>
|   |   ├── <b><a href="#mithril">mithril/</a></b>
|   |   └── <b><a href="#requirejs">requirejs/</a></b>
|   ├── <b><a href="#components">components/</a></b>
|   ├── <b><a href="#models">models/</a></b>
|   ├── <b><a href="#lib">lib/</a></b>
|   ├── <b><a href="#services">services/</a></b>
|   ├── <a href="#eslint">.eslintrc</a>
|   ├── <b><a href="#custom">custom</a></b>
|   ├── <a href="#eslint">index.html</a>
|   └── <a href="#custom">main.js/</a>
├── <a href="#bowerrc">.bowerrc</a>
├── <a href="#eslintrc">.eslintrc/</a>
├── <a href="#gitignore">.gitignore</a>
├── <a href="#bower">bower.json</a>
├── <a href="#gruntfilejs">Gruntfile.js</a>
├── <a href="#package">package.json</a>
└── <a href="#readme">README.md</a>
</pre>


#### node_modules/
> [node v0.12.4](http://nodejs.org/documentation/)<br>
> [npm v2.10.1](https://www.npmjs.org/doc/)

_You shouldn't have to use this folder: **Npm** will do the work for you._<br>
This is where all Node dependencies are installed locally by **Npm**.<br>
**Node** is a Javascript platform for server-side and networking applications. It provides a non-blocking I/O API that optimizes scalability. We use it as an environment to develop our application and to be able to see code modifications in real-time.<br>
**Npm** (aka Node Package Manager) is a tool that let us install our application dependencies. It automatically manages dependencies versions of each.

#### bower_components/
> [Bower v1.4.1](http://bower.io/docs/api/)

_You shouldn't have to use this folder: **Bower** will do the work for you._<br>
This is where all **Bower** dependencies are installed.<br>
**Bower** is a package manager optimized for the front-end web technologies. It let us install all dependencies that are not **Node** related. It work very similarly like **Npm**.

#### mithril/
> [mithril v0.2.0](http://lhorie.github.io/mithril/mithril.html)

_You shouldn't have to use this folder: **Bower** will do the work for you._<br>
This is where **Mithril** files are located.<br>
**Mithril** is a very light-weight Javascript framework that use a virtual DOM to optimize the browser render process. It is structured with the MVC paradigm which allowing us greater modularity and a better code organization.<br>
**Be careful when you upgrade Mithril! We overloaded the m.route() function to have animation routing system.**

#### requirejs/
> [requirejs v2.1.18](http://requirejs.org/docs/api.html)

_You shouldn't have to use this folder: **Bower** will do the work for you._<br>
**RequireJS** is a javascript module loader. It lets us split our code files to get very atomic peace of code. It resolves all the dependencies a file could possibly need which is the key to unit testing.

#### Gruntfile.js
> [Grunt v0.4.5](http://gruntjs.com/getting-started)

This is the **Grunt** configuration file.<br>
**Grunt** is a Javascript task runner that provides many ways to automated recurrent processes. It has such a huge plugins list that everything you need to do to develop your project can be automatized. We obviously use it to save some time, especially to automatically reload browser pages.

#### Bible

* <a href="http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html" target="_blank">Module pattern in-depth</a>
* <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">Mastering markdown</a>

#### Useful tools
* <a href="http://jsbeautifier.org/" target="_blank">Deminify JS or HTML</a>
