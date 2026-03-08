const labels = [

{x:229.657,y:24.382,name:"Frontal"},
{x:226.285,y:47.477,name:"Nasal"},
{x:255.307,y:78.849,name:"Pòmiul"},
{x:229.044,y:145.681,name:"Mandíbula"},
{x:230.270,y:181.856,name:"Estern"},
{x:226.898,y:198.206,name:"Costelles"},
{x:226.387,y:214.148,name:"Columna vertebral"},
{x:298.942,y:34.601,name:"Parietal"},
{x:298.533,y:71.083,name:"Temporal"},
{x:295.467,y:89.885,name:"Occipital"},
{x:230.270,y:266.162,name:"Sacre"},
{x:228.840,y:262.994,name:"Ilí"},
{x:229.146,y:284.045,name:"Pubis"},
{x:228.533,y:307.753,name:"Coxal"},
{x:258.475,y:286.804,name:"Isqui"},
{x:289.131,y:229.987,name:"Fèmur"},
{x:306.095,y:272.293,name:"Ròtula"},
{x:319.073,y:277.198,name:"Tíbia"},
{x:304.869,y:294.877,name:"Peroné"}

]

const container = document.getElementById("inputs")

labels.forEach((l,i)=>{

let input=document.createElement("input")

input.style.left=l.x+"px"
input.style.top=l.y+"px"

input.id="q"+i

container.appendChild(input)

})

function normalize(t){

return t.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")

}

function checkAnswers(){

let score=0

labels.forEach((l,i)=>{

let input=document.getElementById("q"+i)

if(normalize(input.value)==normalize(l.name)){

input.style.background="#9cff9c"
score++

}else{

input.style.background="#ff9c9c"

}

})

document.getElementById("score").innerText="Puntuació: "+score+" / "+labels.length

}

function resetQuiz(){

labels.forEach((l,i)=>{

let input=document.getElementById("q"+i)

input.value=""
input.style.background="white"

})

document.getElementById("score").innerText="Puntuació: 0"

}

function showAnswers(){

labels.forEach((l,i)=>{

document.getElementById("q"+i).value=l.name

})

}
