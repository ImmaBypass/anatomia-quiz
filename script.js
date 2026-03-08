const labels = [

{x:130,y:40,name:"Frontal"},
{x:130,y:60,name:"Nassal"},
{x:130,y:80,name:"Pòmul"},
{x:130,y:100,name:"Mandíbula"},
{x:140,y:160,name:"Estern"},
{x:140,y:195,name:"Costelles"},
{x:140,y:225,name:"Columna vertebral"},
{x:140,y:250,name:"Sacre"},
{x:140,y:275,name:"Ili"},
{x:185,y:295,name:"Pubis"},
{x:140,y:300,name:"Isqui"},
{x:140,y:320,name:"Coxal"},
{x:145,y:385,name:"Fèmur"},
{x:145,y:445,name:"Ròtula"},
{x:145,y:480,name:"Tíbia"},
{x:145,y:515,name:"Peroné"},
{x:145,y:545,name:"Ossos del tars"},
{x:145,y:575,name:"Metatars"},
{x:145,y:605,name:"Falanges"},

{x:250,y:40,name:"Parietal"},
{x:250,y:60,name:"Temporal"},
{x:250,y:80,name:"Occipital"},
{x:250,y:110,name:"Vèrtebres cervicals"},
{x:255,y:175,name:"Vèrtebres dorsals"},
{x:260,y:245,name:"Vèrtebres lumbars"},
{x:265,y:285,name:"Sacre"},
{x:265,y:310,name:"Coccix"},

{x:405,y:145,name:"Clavícula"},
{x:410,y:180,name:"Omòplat"},
{x:410,y:210,name:"Húmer"},
{x:630,y:60,name:"Temporal"},
{x:630,y:90,name:"Masseter"},
{x:630,y:120,name:"Buccinador"},
{x:630,y:150,name:"Orbicular dels llavis"},
{x:630,y:180,name:"Digàstric"},

{x:610,y:40,name:"Serrat"},
{x:600,y:75,name:"Bíceps braquial"},
{x:620,y:110,name:"Supinador"},
{x:600,y:150,name:"Pectorals"},
{x:600,y:190,name:"Recte anterior"},
{x:610,y:225,name:"Oblic major"},
{x:605,y:265,name:"Psoes ilíac"},
{x:610,y:380,name:"Sartori"},
{x:610,y:505,name:"Tibial"},

{x:780,y:35,name:"Esternocleidomastoïdal"},
{x:770,y:70,name:"Orbicular de l'ull"},
{x:770,y:105,name:"Deltoides"},
{x:770,y:145,name:"Tríceps"},
{x:770,y:185,name:"Dorsal ample"},
{x:770,y:225,name:"Palmar"},
{x:770,y:270,name:"Flexors i extensors"},
{x:770,y:305,name:"Gluti"},
{x:770,y:355,name:"Bíceps femoral"},
{x:770,y:560,name:"Bessons"},

{x:1015,y:55,name:"Trapezi"},
{x:1015,y:100,name:"Deltoides"},
{x:1015,y:140,name:"Tríceps"},
{x:1015,y:180,name:"Dorsal ample"},
{x:1015,y:215,name:"Palmar"},
{x:1015,y:255,name:"Flexors i extensors"},
{x:1015,y:295,name:"Gluti"},
{x:1015,y:355,name:"Bíceps femoral"},
{x:1015,y:410,name:"Bessons"},
{x:1015,y:495,name:"Tendó d'Aquil·les"}

];

const container = document.getElementById("inputs");

labels.forEach((l,i)=>{

let input=document.createElement("input");

input.style.left=l.x+"px";
input.style.top=l.y+"px";

input.id="q"+i;

input.addEventListener("input",autoResize);

container.appendChild(input);

});

function autoResize(e){

let el=e.target;

el.style.width="42px";

if(el.value.length>6){
el.style.width=(el.value.length*6)+"px";
}

}

function normalize(t){
return t
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"");
}

function checkAnswers(){

let score=0;

labels.forEach((l,i)=>{

let input=document.getElementById("q"+i);

if(normalize(input.value)===normalize(l.name)){
input.style.background="#9cff9c";
score++;
}
else{
input.style.background="#ff9c9c";
}

});

document.getElementById("score").innerText="Puntuació: "+score+" / "+labels.length;

}

function resetQuiz(){

labels.forEach((l,i)=>{

let input=document.getElementById("q"+i);
input.value="";
input.style.background="white";
input.style.width="42px";

});

document.getElementById("score").innerText="Puntuació: 0";

}

function showAnswers(){

labels.forEach((l,i)=>{

let el=document.getElementById("q"+i);
el.value=l.name;
autoResize({target:el});

});

}

});

}
