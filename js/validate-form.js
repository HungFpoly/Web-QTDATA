function validate() {
    const arr = [firstname, lastname, email, jobtitle, subject, question];
    
    var error = 0;
  
    for (let i = 0; i < arr.length; i++) {
      inputSuccess(arr[i]);
      if (arr[i].value.trim().length == 0) {
        error++;
        inputError(arr[i], "The field is required.");
      }
    }
    if (error > 0) {
      document.getElementById("result").className = "uk-animation-slide-top custom-result"
      document.getElementById("result").innerHTML = '<i class="fa fa-times-circle fa-2x" style=" vertical-align: middle;padding-right:10px"></i> ' + error +' fields have an error. Please check and try again.'
      return false;
      
    }
    
    return true;
  }
  function inputError(input, message) {
    if (input.name != "question") {
      const fromcontrol = input.parentElement;
      const small = fromcontrol.lastElementChild;
      small.innerText = message;
    }
    if (input.name == "question") {
      const fromcontrol = input.parentElement;
      fromcontrol.className = "form-control error uk-width-1-1@m";
      const small = fromcontrol.lastElementChild;
      small.innerText = message;
    }
  }
  function inputSuccess(input) {
    if (input.name != "question") {
      const fromcontrol = input.parentElement;
      fromcontrol.className = "form-control uk-width-3-4@m";
      const small = fromcontrol.lastElementChild;
      small.innerText = "";
      
    }
    if (input.name == "question") {
      const fromcontrol = input.parentElement;
      const small = fromcontrol.lastElementChild;
      small.innerText = "";
    }
  }
  