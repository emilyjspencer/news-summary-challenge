
var assert = {

  test: function(text) {
  p = document.createElement("p");
  p.innerHTML = text;
  
  document.getElementById('testRunner').appendChild(p);
},

 isEqual: function(actual, expect, nameOfTest) {
 if (actual !== expect) {
 text =  nameOfTest +  "FAILED" + actual + "DOES NOT EQUAL" + expect;

} else {
text =  nameOfTest +  "     "  +  "  PASSED!"

}
 this.test(text);
},


isTrue: function(assertionToCheck, nameOfTest) {
  if(!assertionToCheck){
    text =  nameOfTest + "FAILED" + assertionToCheck + " FALSY";
   
  }
  else {
    text =  nameOfTest +  "        " +    "PASSED!"
   
  }
  this.test(text);
},


}