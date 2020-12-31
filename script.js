'use strict';

const listArray = [];
let renderList = document.getElementById("renderlist");
let inputText = document.getElementById("inputtext");

const submit = () => {
    
    listArray.push(renderList.innerHTML = inputText.value);

    let x = '<hr/>';

    for (let i = 0; i < listArray.length; i++) {
        
        x +=  (i+1) + ". " + listArray[i] + "<hr/>" ;
        
    }
    
    renderList.innerHTML = x;
    
}

const delline = () => {

   console.log(listArray.pop());


}

