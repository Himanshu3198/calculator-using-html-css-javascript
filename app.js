// console.log('app js')
 screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (let item of buttons) {
    item.addEventListener('click', (e) => {
       let buttontext = e.target.innerText;
        console.log('Button text is ', buttontext)
      
            
        if(buttontext =='x')
        {  buttontext = '*';
          screenValue +=buttontext;
        screen.value=screenValue;
        }
        else if(buttontext == 'clear')
        {
            screenValue =" ";
            screen.value =screenValue;
        }
         else if (buttontext == '=')
        {
    
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=buttontext;
            screen.value=screenValue;
        }


    })
}


 