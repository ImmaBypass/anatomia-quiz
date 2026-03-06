const labels = [

{x:192,y:40,name:"Frontal"},
{x:190,y:62,name:"Nasal"},
{x:192,y:88,name:"Pòmiul"},
{x:185,y:109,name:"Mandíbula"},
{x:191,y:169,name:"Estern"},
{x:187,y:205,name:"Costelles"},
{x:187,y:236,name:"Columna vertebral"},
{x:193,y:263,name:"Sacre"},
{x:189,y:292,name:"Ilí"},
{x:230,y:313,name:"Pubis"},
{x:195,y:315,name:"Coxal"},
{x:192,y:338,name:"Isqui"},
{x:189,y:407,name:"Fèmur"},
{x:192,y:469,name:"Ròtula"},
{x:190,y:507,name:"Tíbia"},
{x:186,y:540,name:"Peroné"},
{x:185,y:567,name:"Ossos del tars"},
{x:184,y:602,name:"Metatars"},
{x:188,y:637,name:"Falanges"},

{x:307,y:46,name:"Parietal"},
{x:311,y:69,name:"Temporal"},
{x:307,y:86,name:"Occipital"},
{x:306,y:115,name:"Vèrtebres cervicals"},
{x:305,y:182,name:"Vèrtebres dorsals"},
{x:305,y:256,name:"Vèrtebres lumbars"},
{x:302,y:298,name:"Sacre"},
{x:301,y:326,name:"Còccix"},

{x:493,y:153,name:"Clavícula"},
{x:493,y:187,name:"Omòplat"},
{x:492,y:221,name:"Húmer"},
{x:492,y:286,name:"Radi"},
{x:493,y:311,name:"Cúbit"},
{x:493,y:337,name:"Ossos de carp"},
{x:495,y:372,name:"Metacarp"},
{x:494,y:411,name:"Falanges"},

{x:654,y:41,name:"Nasals"},
{x:649,y:77,name:"Masseter"},
{x:667,y:116,name:"Orbicular dels llavis"},
{x:646,y:158,name:"Digàstric"},
{x:647,y:197,name:"Serrat"},
{x:658,y:236,name:"Bíceps braquial"},
{x:649,y:277,name:"Supinador"},
{x:644,y:401,name:"Recte anterior"},
{x:644,y:530,name:"Tibial"},

{x:811,y:30,name:"Frontal"},
{x:808,y:71,name:"Orbicular de l’ull"},
{x:810,y:117,name:"Temporal"},
{x:813,y:156,name:"Buccinador"},
{x:812,y:197,name:"Pectorals"},
{x:812,y:239,name:"Rectes majors"},
{x:811,y:284,name:"Oblic major"},
{x:814,y:321,name:"Psoas iliac"},
{x:819,y:376,name:"Sartori"},
{x:822,y:591,name:"Flexors i extensors"},

{x:1073,y:54,name:"Esternocleidomastoïdal"},
{x:1077,y:104,name:"Trapeci"},
{x:1078,y:149,name:"Deltoides"},
{x:1074,y:187,name:"Tríceps"},
{x:1074,y:228,name:"Dorsal ample"},
{x:1074,y:268,name:"Palmar"},
{x:1077,y:310,name:"Flexors i extensors"},
{x:1081,y:369,name:"Gluti"},
{x:1082,y:430,name:"Bíceps femoral"},
{x:1081,y:517,name:"Bessons"}

]

const container=document.getElementById("inputs")

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
