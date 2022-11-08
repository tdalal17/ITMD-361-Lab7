function init(){
    //between these two lines of code, insert your javascript
    function Aclick(){
      var inputentry = document.getElementById('entryinput').value;
      var outputresult = document.getElementById('textoutput');
      outputresult.innerHTML = inputentry;
      alert("Tanay Dalal: " + inputentry);
      }
    var b = document.getElementById('entrybutton');
    b.addEventListener('click', Aclick);
    }
    window.addEventListener('load', init);