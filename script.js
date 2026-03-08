const labels=[

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
{x:287,y:171,name:"Vèrtebres dorsals"},
{x:294,y:243,name:"Vèrtebres lumbars"},
{x:299,y:281,name:"Sacre"},
{x:298,y:304,name:"Coccix"},

{x:479,y:140,name:"Clavícula"},
{x:485,y:173,name:"Omòplat"},
{x:486,y:204,name:"Húmer"},
{x:478,y:267,name:"Radi"},
{x:487,y:289,name:"Cúbit"},
{x:493,y:317,name:"Ossos de carp"},
{x:492,y:349,name:"Metacarp"},
{x:487,y:383,name:"Falanges"},

{x:614,y:37,name:"Nassals"},
{x:609,y:70,name:"Masseter"},
{x:627,y:103,name:"Orbicular dels llavis"},
{x:609,y:145,name:"Digàstric"},
{x:606,y:183,name:"Serrat"},
{x:617,y:219,name:"Biceps branquial"},
{x:612,y:259,name:"Supinador"},
{x:617,y:375,name:"Recte anterior"},
{x:618,y:498,name:"Tibial"},

{x:791,y:30,name:"Frontal"},
{x:791,y:64,name:"Orbicular de l'ull"},
{x:792,y:99,name:"Temporal"},
{x:792,y:140,name:"Buccinador"},
{x:795,y:182,name:"Pectorals"},
{x:792,y:222,name:"Rectes majors"},
{x:791,y:267,name:"Oblic major"},
{x:792,y:301,name:"Psoas iliac"},
{x:792,y:352,name:"Sartori"},
{x:795,y:555,name:"Flexors i extensors"},

{x:1034,y:48,name:"Esternocleidomastoïdal"},
{x:1040,y:93,name:"Trapezi"},
{x:1036,y:137,name:"Deltoides"},
{x:1035,y:175,name:"Triceps"},
{x:1041,y:209,name:"Dorsal ample"},
{x:1043,y:251,name:"Palmar"},
{x:1047,y:289,name:"Flexors i extensors"},
{x:1044,y:348,name:"Gluti"},
{x:1037,y:400,name:"Bíceps femoral"},
{x:1044,y:485,name:"Bessons"}

];

const container=document.getElementById("inputs");

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
el.style.width=(42+(el.value.length-6)*6)+"px";
}

}

function normalize(t){
return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
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
input.style.width="42px";

if(document.body.classList.contains("dark")){
input.style.background="#2a2a2a";
}else{
input.style.background="white";
}

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

/* THEME */

document.getElementById("themeToggle").onclick=()=>{
document.body.classList.toggle("dark");
};

/* MENU */

const menuBtn=document.getElementById("menuButton");
const menuPanel=document.getElementById("menuPanel");

menuBtn.onclick=()=>{
menuPanel.classList.toggle("open");
};

/* EMAIL */

document.getElementById("suggestBtn").addEventListener("click",function(){
window.open("mailto:samuelgil@vedrunaimmaculada.cat?subject=Sugerencia%20Quiz%20Anatomia","_self");
});
