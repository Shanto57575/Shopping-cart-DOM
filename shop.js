document.getElementById('firstButton').addEventListener('click',function(){
    const firstCard = document.getElementById('firstCard').innerText;
    const firstPrice = document.getElementById('firstPrice').value;
    const firstQuantity = document.getElementById('firstQuantity').value;
    
    const valid =  Validity(firstPrice,firstQuantity);
    
    if(valid){
        const calc =  calculation(firstPrice,firstQuantity);
        displayValue(firstCard,firstPrice,firstQuantity,calc);
    }
    
    document.getElementById('firstPrice').value = '';
    document.getElementById('firstQuantity').value = '';
})

document.getElementById('secondButton').addEventListener('click',function(){
    const secondCard = document.getElementById('secondCard').innerText;

    const secondPrice = document.getElementById('secondPrice').value;
    const secondQuantity = document.getElementById('secondQuantity').value;
    
    const valid =  Validity(secondPrice,secondQuantity);
    
    if(valid){
        const calc =  calculation(secondPrice,secondQuantity);
        displayValue(secondCard,secondPrice,secondQuantity,calc);
    }
    
    document.getElementById('secondPrice').value = '';
    document.getElementById('secondQuantity').value = '';
})


document.getElementById('thirdButton').addEventListener('click',function(){
    const thirdCard = document.getElementById('thirdCard').innerText;
    const thirdPrice = document.getElementById('thirdPrice').value;
    const thirdQuantity = document.getElementById('thirdQuantity').value;
    
    const valid =  Validity(thirdPrice,thirdQuantity);
    
    if(valid){
        const calc =  calculation(thirdPrice,thirdQuantity);
        displayValue(thirdCard,thirdPrice,thirdQuantity,calc);
    }
    
    document.getElementById('thirdPrice').value = '';
    document.getElementById('thirdQuantity').value = '';
})
document.getElementById('fourthButton').addEventListener('click',function(){
    const fourthCard = document.getElementById('fourthCard').innerText;
    const fourthPrice = document.getElementById('fourthPrice').value;
    const fourthQuantity = document.getElementById('fourthQuantity').value;
    
    const valid =  Validity(fourthPrice,fourthQuantity);
    
    if(valid){
        const calc =  calculation(fourthPrice,fourthQuantity);
        displayValue(fourthCard,fourthPrice,fourthQuantity,calc);
    }
    
    document.getElementById('fourthPrice').value = '';
    document.getElementById('fourthQuantity').value = '';
})
document.getElementById('fifthButton').addEventListener('click',function(){
    const fifthCard = document.getElementById('fifthCard').innerText;
    const fifthPrice = document.getElementById('fifthPrice').value;
    const fifthQuantity = document.getElementById('fifthQuantity').value;
    
    const valid =  Validity(fifthPrice,fifthQuantity);
    
    if(valid){
        const calc =  calculation(fifthPrice,fifthQuantity);
        displayValue(fifthCard,fifthPrice,fifthQuantity,calc);
    }
    
    document.getElementById('fifthPrice').value = '';
    document.getElementById('fifthQuantity').value = '';
})
document.getElementById('sixthButton').addEventListener('click',function(){
    const sixthCard = document.getElementById('sixthCard').innerText;
    const sixthPrice = document.getElementById('sixthPrice').value;
    const sixthQuantity = document.getElementById('sixthQuantity').value;
    
    const valid =  Validity(sixthPrice,sixthQuantity);
    
    if(valid){
        const calc =  calculation(sixthPrice,sixthQuantity);
        displayValue(sixthCard,sixthPrice,sixthQuantity,calc);
    }
    
    document.getElementById('sixthPrice').value = '';
    document.getElementById('sixthQuantity').value = '';
})


/*
   random color
*/

function randomColor(){

}