#target illustrator

if(documents.length > 0) {

  var doc = app.activeDocument;

    function scaleXY() {
      // Save selection to variable:
      var sel = doc.selection[i];
      var width = sel.width;
      var newWidth = Math.round(width);
      var scaleX = newWidth / width * 100;
      // alert("Old W: " + width + " New W: " + newWidth + " Scale: " + scaleX);
      // resize(scaleX, scaleY, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, scaleAbout)
      sel.resize(scaleX, scaleX); // as percentage
    }

    function scaleY() {
      // Save selection to variable:
      var sel = doc.selection[i];
      var height = sel.height;
      var newHeight = Math.round(height);
      var scaleY = newHeight / height * 100;
      // resize(scaleX, scaleY, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, scaleAbout)
      sel.resize(100, scaleY);
    }

    var sel = doc.selection;
    // alert("Items: " + sel.length);

    for (var i = sel.length - 1; i >= 0; i--) {
      // alert("Item: " + i);
      scaleXY(doc, i);
      scaleY(doc, i);

      // app.doAction("Prepare Selection for Sketch", "Sheedy");
      // var newCompoundPath = sel.compoundPathItems.add();
      // doc.activeLayer.compoundPathItems.add();
      // // Create the path items
      // newPath = newCompoundPath.pathItems.add(sel[i]);
      // newPath.setEntirePath(sel[i]);
    };

}

// Ask user for input by showing prompt box and save inputted value to variable:
// var stemsAmount = prompt("Processing " + obj.name + "nHow xxx?", objTop + "," + objLeft);
