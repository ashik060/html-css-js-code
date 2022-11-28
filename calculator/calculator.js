let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerText){
      case 'C':
        display.innerText = '';
        break;
      case '⌫':
        if(display.innerText){
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case '÷':
        if(display.innerText){
          display.innerText += '/';
        }
        break;
      case '×':
        if(display.innerText){
          display.innerText += '*';
        }
        break;
      case '(':
        let lt = display.innerText += e.target.innerText;
        let ltLength = lt.length;
        let lastTwo = lt.slice(ltLength-2, ltLength);
        // console.log(lastTwo);
        if(lastTwo == '1('){
          display.innerText = lt.slice(0,ltLength-2)+ '1*(';
        }
        else if(lastTwo == '2('){
          display.innerText = lt.slice(0,ltLength-2)+'2*('; 
        }
        else if(lastTwo == '3('){
          display.innerText = lt.slice(0,ltLength-2)+'3*('; 
        }
        else if(lastTwo == '4('){
          display.innerText = lt.slice(0,ltLength-2)+'4*('; 
        }
        else if(lastTwo == '5('){
          display.innerText = lt.slice(0,ltLength-2)+'5*('; 
        }
        else if(lastTwo == '6('){
          display.innerText = lt.slice(0,ltLength-2)+'6*('; 
        }
        else if(lastTwo == '7('){
          display.innerText = lt.slice(0,ltLength-2)+'7*('; 
        }
        else if(lastTwo == '8('){
          display.innerText = lt.slice(0,ltLength-2)+'8*('; 
        }
        else if(lastTwo == '9('){
          display.innerText = lt.slice(0,ltLength-2)+'9*('; 
        }
        else if(lastTwo == '0('){
          display.innerText = lt.slice(0,ltLength-2)+'0*('; 
        }
        else if(lastTwo == ')('){
          display.innerText = lt.slice(0,ltLength-2)+ ')*('; 
        }
        break;
      case '=':
        try{
          display.innerText = eval(display.innerText);
        } catch{
          display.innerText = 'Error!';
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});

 