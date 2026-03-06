const answers = {

frontal:"frontal",
nasal:"nasal",
pomul:"pòmul",
mandibula:"mandíbula",

estern:"estern",
costelles:"costelles",

columna:"columna vertebral",

ili:"ili",
pubis:"pubis",
isqui:"isqui",

femur:"fèmur",
rotula:"ròtula",
tibia:"tíbia",
perone:"peroné",

trapeci:"trapeci",
deltoides:"deltoides",
triceps:"tríceps",
pectorals:"pectorals",
biceps:"bíceps",
gluti:"gluti",
bessons:"bessons"

}

function normalize(text){

return text
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")

}

function check(){

let score=0
let total=Object.keys(answers).length

for(let id in answers){

let input=document.getElementById(id)

let user=normalize(input.value)
let correct=normalize(answers[id])

if(user===correct){

input.style.background="#9cff9c"
score++

}else{

input.style.background="#ff9c9c"

}

}

document.getElementById("score").innerText="Puntuació: "+score+" / "+total

}

function resetQuiz(){

for(let id in answers){

let input=document.getElementById(id)

input.value=""
input.style.background="white"

}

document.getElementById("score").innerText="Puntuació: 0"

}

function showAnswers(){

for(let id in answers){

document.getElementById(id).value=answers[id]

}

}
