const labels = [

{x:229.65,y:24.38,w:42.71,h:25.63,name:"Frontal"},
{x:226.28,y:47.47,w:51.70,h:70.91,name:"Nasal"},
{x:255.30,y:78.84,w:28.10,h:33.19,name:"Pòmiul"},
{x:229.04,y:145.68,w:35.86,h:23.90,name:"Mandíbula"},
{x:230.27,y:181.85,w:46.48,h:22.57,name:"Estern"},
{x:226.89,y:198.20,w:54.04,h:60.70,name:"Costelles"},
{x:226.38,y:214.14,w:23.80,h:18.48,name:"Columna vertebral"},
{x:298.94,y:34.60,w:51.08,h:42.50,name:"Parietal"},
{x:298.53,y:71.08,w:47.92,h:25.33,name:"Temporal"},
{x:295.46,y:89.88,w:48.83,h:40.56,name:"Occipital"},

{x:230.27,y:266.16,w:19.71,h:22.27,name:"Sacre"},
{x:228.83,y:262.99,w:16.23,h:15.93,name:"Ilí"},
{x:229.14,y:284.04,w:32.58,h:26.87,name:"Pubis"},
{x:228.53,y:307.75,w:31.67,h:27.27,name:"Coxal"},
{x:258.47,y:286.80,w:34.83,h:24.62,name:"Isqui"},

{x:289.13,y:229.98,w:51.28,h:37.70,name:"Fèmur"},
{x:306.09,y:272.29,w:36.27,h:20.83,name:"Ròtula"},
{x:319.07,y:277.19,w:20.93,h:20.63,name:"Tíbia"},
{x:304.86,y:294.87,w:37.18,h:23.90,name:"Peroné"},

{x:291.78,y:163.66,w:49.76,h:35.54,name:"Clavícula"},
{x:224.75,y:357.95,w:41.48,h:28.61,name:"Omòplat"},

{x:227.91,y:572.48,w:48.43,h:22.27,name:"Húmer"},
{x:227.61,y:537.32,w:48.73,h:26.26,name:"Radi"},
{x:224.85,y:537.73,w:18.08,h:26.66,name:"Cúbit"},
{x:253.56,y:541.72,w:26.46,h:18.80,name:"Ossos del carp"},
{x:226.28,y:506.05,w:66.72,h:24.21,name:"Metacarp"},
{x:226.18,y:471.00,w:40.56,h:28.91,name:"Falanges"}

]

const container = document.getElementById("inputs")

labels.forEach((l,i)=>{

let input=document.createElement("input")

input.style.left=l.x+"px"
input.style.top=l.y+"px"

input.style.width=l.w+"px"
input.style.height=l.h+"px"

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
