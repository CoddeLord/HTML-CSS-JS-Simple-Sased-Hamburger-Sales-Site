var card = document.querySelectorAll('.sepet-btn');
var menuCard = document.querySelectorAll('.menu-card');


card.forEach( button=> {
    button.addEventListener('click', function(){
       this.textContent =  "Sepete Eklendi";
       this.classList.toggle('clicked');
    });

});


menuCard.forEach(cardd =>{
    cardd.addEventListener ('click', function(){
        window.location.href = 'sparis.html'
    })
})