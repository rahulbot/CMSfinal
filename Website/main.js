sectionPositions = [];
var startPos;
sections.each(function(d,i) {
  var top = this.getBoundingClientRect().top;

  if(i === 0) {
    startPos = top;
  }
  sectionPositions.push(top - startPos);
});