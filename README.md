PixelPainter
============
My Change!  Done by Brad! and more changes
> Coloring pixels in a grid

![sketch](http://i.imgur.com/6kLmYWp.png)

PixelPainter is a plugin that you will create. It has a color swatch of infinite colors and a grid of infinite size! When a user clicks on a color from the swatch they can paint the color on the pixel grid! There should also be two buttons, one for erasing a color and the other to clear the entire canvas.

## Getting Started and Specs

### PixelPainter(_width_, _height_)
When instatiated it appends a new PixelPainter object to a HTML div element with an id of **pp-canvas**.

**note**: you can use either the _Module_ or _Classical_ OOP Patterns for this.

The `height` and `width` attributes set the size of the **canvas**. Each cell of the canvas can be any width or height you choose but it should be a square.

The height and width of the **color swatch** will be determined by the colors available which you, the developer, will set.

Do not edit the `index.html` file. You will generate all of your html markup using jQuery and inserting newly generated elements into the dom using jQuery.

## Bonus Round
Develop a way for PixelPainter to accept an configuration object at the moment of instatiation while still supporting the passing in two parameters, as mentioned previously.

An example of the configuration object may look like:

```javascript
{
  width: 6,
  height: 6,
  gridSize: 10,
  colorSwatch: ["#000000", "#0000FF", "#00FFFF", "#FFFFFF"]
}
```
