PixelPainter
============

Coloring pixels in a grid


Create a class called PixelPainter  
It's constructor will accept 2 arguments, **width** and **height**

Write the PixelPainter class such that it returns a 'grid' and some 'control buttons'.  
The grid will be *width* cells wide, and *height* cells tall.  
Each cell can be any width or height you choose, it should be a square.  

The *controls* will be 

  - a swatch of colors (any amount of colors you choose is fine)
  - an *erase* button, to turn on erase mode
  - a *clear* button, to reset the grid


This is a sketch of how the PixelPainter should look.
![sketch](http://i.imgur.com/yuku6aj.png)
\**this is just a sample! bonus cookies for being creative!

The final invocation should be similar to this:

    var pixelPainter = new PixelPainter(20,20);
    $("#container").append(pixelPainter.render());

with the ability to do some nice options

    var pixelPainter = new PixelPainter(80,90);
    pixelPainter.cellSize = 8; // 8px by 8px
    $("#container").html(pixelPainter.render());

Document your options, and how to embed and use your PixelPainter.

\**NOTE: you must somehow embed your PixelPainter into #container, though you cannot simply write directly to the document from inside of PixelPainter. so i should be able to port your class to another document and render PixelPainter into any container i choose.*

###Files
  - index.html
  - js/PixelPainter.js - define the class here
  - js/app.js  - launch the app from here
  - css/PixelPainter.css - PixelPainter specific css here
  - *css/app.css*  - doesn't exist cause it's optional