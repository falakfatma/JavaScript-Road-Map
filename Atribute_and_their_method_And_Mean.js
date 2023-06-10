//Atribute and their method
let card = document.getElementsByClassName('card')[0]
console.log(card.getAttribute('id'))
console.log(card.setAttribute('alt','world'))
console.log(card.hasAttribute('alt'))
console.log(card.removeAttribute('alt'))
console.log(card.attributes)
console.log(itself.attributes)


// to find mean of 5 
let mean = (a,b,c,d,e) => {
  console.log(( a+b+c+d+e)/5)
}
mean(2,4,4,5,5)
