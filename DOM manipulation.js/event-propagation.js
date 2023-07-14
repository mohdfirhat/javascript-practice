outerwindow.addEventListner('click', function() {
  console.log('outerWindow');
},true);
middlewindow.addEventListner('click', function() {
  e.stopPropagation();
  console.log('middleWindow');
},(once: true);
innerwindow.addEventListner('click', function() {
  e.preventDefault();
  console.log('innerWindow');
},true);

//when true, it goes from top to bottom of the DOMtree.
//when false it goes from bottom to top
//stopPropagation stops the passing of info to the top/bottom
//preventDefault prevent the default action of the <a>-hyperlink function 