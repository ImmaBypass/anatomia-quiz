const labels = [

{x:210,y:37,name:"Frontal"},
{x:210,y:56,name:"Nassal"},
{x:209,y:78,name:"Pòmul"},
{x:208,y:98,name:"Mandíbula"},
{x:212,y:155,name:"Estern"},
{x:204,y:189,name:"Costelles"},
{x:196,y:223,name:"Columna vertebral"},
{x:196,y:245,name:"Sacre"},
{x:191,y:273,name:"Ili"},
{x:247,y:294,name:"Pubis"},
{x:190,y:295,name:"Isqui"},
{x:189,y:316,name:"Coxal"},
{x:193,y:381,name:"Fèmur"},
{x:198,y:439,name:"Ròtula"},
{x:196,y:473,name:"Tíbia"},
{x:194,y:507,name:"Peroné"},
{x:193,y:540,name:"Ossos del tars"},
{x:193,y:567,name:"Metatars"},
{x:191,y:600,name:"Falanges"},

{x:289,y:38,name:"Parietal"},
{x:289,y:60,name:"Temporal"},
{x:289,y:77,name:"Occipital"},
{x:289,y:105,name:"Vèrtebres cervicals"},
{x:287,y:171,name:"Clavícula"},
{x:294,y:243,name:"Omòplat"},
{x:299,y:281,name:"Húmer"},
{x:298,y:304,name:"Radi"},

{x:479,y:140,name:"Orbicular de l'ull"},
{x:485,y:173,name:"Temporal"},
{x:486,y:204,name:"Masseter"},
{x:478,y:267,name:"Orbicular dels llavis"},
{x:487,y:289,name:"Digàstric"},
{x:493,y:317,name:"Serrat"},
{x:492,y:349,name:"Bíceps braquial"},
{x:487,y:383,name:"Supinador"},

{x:614,y:37,name:"Nassals"},
{x:609,y:70,name:"Frontal"},
{x:627,y:103,name:"Orbicular de l'ull"},
{x:609,y:145,name:"Temporal"},
{x:606,y:183,name:"Masseter"},
{x:617,y:219,name:"Buccinador"},
{x:612,y:259,name:"Pectorals"},
{x:617,y:375,name:"Recte anterior"},
{x:618,y:498,name:"Tibial"},

{x:791,y:30,name:"Esternocleidomastoïdal"},
{x:791,y:64,name:"Trapezi"},
{x:792,y:99,name:"Deltoides"},
{x:792,y:140,name:"Tríceps"},
{x:795,y:182,name:"Dorsal ample"},
{x:792,y:222,name:"Palmar"},
{x:791,y:267,name:"Flexors i extensors"},
{x:792,y:301,name:"Gluti"},
{x:792,y:352,name:"Bíceps femoral"},
{x:795,y:555,name:"Bessons"},

{x:1034,y:48,name:"Trapezi"},
{x:1040,y:93,name:"Deltoides"},
{x:1036,y:137,name:"Tríceps"},
{x:1035,y:175,name:"Dorsal ample"},
{x:1041,y:209,name:"Palmar"},
{x:1043,y:251,name:"Flexors i extensors"},
{x:1047,y:289,name:"Gluti"},
{x:1044,y:348,name:"Bíceps femoral"},
{x:1037,y:400,name:"Bessons"},
{x:1044,y:485,name:"Tendó d'Aquil·les"}

];

const container = document.getElementById("inputs");

labels.forEach((l,i)=>{

let input=document.createElement("input");

input.style.left=l.x+"px";
input.style.top=l.y+"px";

input.id="q"+i;

container.appendChild(input);

});

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

});

document.getElementById("score").innerText="Puntuació: 0";

}

function showAnswers(){

labels.forEach((l,i)=>{

document.getElementById("q"+i).value=l.name;

});

}
