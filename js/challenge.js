let counter = document.getElementById('counter')
let integer = 0;
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let coeur = document.getElementById('heart')
let pause = document.getElementById('pause')
var cycleTimer;
const intervalID =function(){cycleTimer=setInterval(add, 1000)};
intervalID();
const stopInterval =function(){clearInterval(cycleTimer)}

function add(){
    integer += 1
    counter.textContent = integer
}

function decret(){
    integer -= 1
    counter.textContent = integer
}

function toggleOff(){
    if(pause.value === 'ON'){
    pause.value = 'OFF'
    minus.disabled = true
    plus.disabled = true
    coeur.disabled = true
   this.textContent = 'resume'
stopInterval()
   }else if(pause.value === 'OFF'){
    pause.value = 'ON'
    minus.disabled = false
    plus.disabled = false
    coeur.disabled = false
    this.textContent = 'pause'
    intervalID()
   }}

pause.addEventListener('click', toggleOff)
minus.addEventListener('click', decret)
plus.addEventListener('click', add)
coeur.addEventListener('click', function(e){
    let listOfLikes = document.querySelector('.likes')
    let newLikes = document.createElement('li')
    newLikes.textContent = `${counter.textContent} has 1 likes`
    listOfLikes.appendChild(newLikes)
})



function creaT(){
    let newComment = document.createElement('p')
newComment.textContent = comment.value
parentC.appendChild(newComment);
comment.value = ""
}


let button = document.getElementById('submit')
let comment = document.getElementById('comment-input')
let parentC = document.getElementById('list')

button.addEventListener('click', function(e){
    e.preventDefault()
    creaT();

})



// cumul des likes ex : 53 has 10 likes 


