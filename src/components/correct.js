import React from 'react';
import $ from "jquery"
function retry() {
  $("#userEssay").val(encodeURI($("#userEssay").val()))
}


function Correct() {
  return (
    <div className="App">
      <header className="App-header">      
        <h3>Improve My Essay</h3>
        <div class="">        
        <p id="tamplate">
        </p>
          <form action="/corrected/">
            <textarea placeholder="Copy/Write your essay here" name="essay" type="text" id="userEssay"></textarea>
            <button id="evaluateBtn" onClick={retry}>Correct Essay</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Correct;
