const colors = document.querySelectorAll('.changeIt');
for(const color of colors){
    color.addEventListener('mouseenter',function(){
        color.style.backgroundColor = '#'+ Math.floor(Math.random()*1000);
    })
}




