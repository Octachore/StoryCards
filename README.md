#StoryCards

[See live demo.](http://tarotdescontes.octadev.fr/#/ "StoryCards (Tarot des contes) live demo")

## Description

This is an application to generate random hands of *cards* representing characters, objects and places. The game, which is called, in french, "tarot des contes", from the old *tarot* game, is to write a short story (e.g. a novella) with the card data as constraints.

## How it works

It is a singlepage HTML5 and JavaScript application, using the awesome AngularJS framework.
This is the structure :
- The **index.html** file is the root of the application. It loads scripts and css files and places a container for the views. These views are displayed using the AngularJS [ngRoute](https://docs.angularjs.org/api/ngRoute "AngularJS Documentation for ngRoute") module.
- The **views** folder contains the html view files.
- The **app.js** file contains the application logic (i.e. the pure JavaScript functions, such as random pickers, as well as AngularJS modules, controllers, filters...)
- The **defaultStoryData.json** contains some default JSON data.


## License

Under [MIT License](http://opensource.org/licenses/MIT "The MIT License (MIT)").
