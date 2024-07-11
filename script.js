const slots = document.querySelectorAll('.slot');
slots.forEach(slot => slot.addEventListener('click',function(){
  this.classList.toggle('clickedOn');
}))

slots.forEach(slot =>{
  slot.addEventListener('transitionend',function(e){
    if(e.propertyName === 'flex-grow'){
      this.classList.toggle('clicked-active');
    }
  })
})

