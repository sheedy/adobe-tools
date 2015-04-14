# Adobe Tools

A collection of Actions and Extendscript scripts for various Adobe products

***

## Illustrator

### Actions

#### Sheedy Actions

`Prepare Selection for Sketch` outlines the stroke of the selection, unifies the path, converts it to a compound path and copies to the clipboard ready for pasting into [Sketch](http://bohemiancoding.com/sketch/) (uses the [wholePixelResize script](http://github.com/sheedy/adobe-tools#wholepixelresize).

##### Steps

1. [Download](https://github.com/sheedy/adobe-tools/zipball/master) the files
2. Move or copy `Illustrator/Actions/Sheedy Actions.aia` into `/Applications/YOUR_VERSION_OF_ILLUSTRATOR/Presets/en_US/Actions/`
3. Open Illustrator
4. Select the artwork that you want to prepare for Sketch
5. Open the Actions Panel and select "Prepare Selection for Sketch" then click the play icon at the bottom of the panel
6. Switch to Sketch and paste
 
If not, click the fly-out menu from the actions panel and select "Load Actions..." and navigate to the above folder.

### Scripts

#### wholePixelResize

Proportionally resizes *width and height* of selection to nearest whole pixel value then scales *height* disproportionally to nearest whole pixel.

1. [Download](https://github.com/sheedy/adobe-tools/zipball/master) the files
2. Move or copy `Illustrator/Scripts/wholePixelResize.jsx` into `/Applications/YOUR_VERSION_OF_ILLUSTRATOR/Presets/en_US/Scripts/`
3. Open Illustrator
4. Select the artwork that you want to resize
5. Select `File > Scripts > wholePixelResize`
