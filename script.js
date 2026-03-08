const labels = [
{ x:229.657,y:24.382,name:"?" },
{ x:226.285,y:47.477,name:"?" },
{ x:255.307,y:78.849,name:"?" },
{ x:229.044,y:145.681,name:"?" },
{ x:230.270,y:181.856,name:"?" },
{ x:226.898,y:198.206,name:"?" },
{ x:226.387,y:214.148,name:"?" },
{ x:298.942,y:34.601,name:"?" },
{ x:298.533,y:71.083,name:"?" },
{ x:295.467,y:89.885,name:"?" },
{ x:230.270,y:266.162,name:"?" },
{ x:228.840,y:262.994,name:"?" },
{ x:229.146,y:284.045,name:"?" },
{ x:228.533,y:307.753,name:"?" },
{ x:258.475,y:286.804,name:"?" },
{ x:289.131,y:229.987,name:"?" },
{ x:306.095,y:272.293,name:"?" },
{ x:319.073,y:277.198,name:"?" },
{ x:304.869,y:294.877,name:"?" },

{ x:213.491,y:367.563,name:"?" },
{ x:218.841,y:417.155,name:"?" },
{ x:217.001,y:450.877,name:"?" },
{ x:215.162,y:484.600,name:"?" },
{ x:213.491,y:518.169,name:"?" },
{ x:213.491,y:544.789,name:"?" },
{ x:212.025,y:577.336,name:"?" },

{ x:200.957,y:942.488,name:"?" },
{ x:203.139,y:910.554,name:"?" },
{ x:196.972,y:882.145,name:"?" },
{ x:188.133,y:860.379,name:"?" },
{ x:195.184,y:798.146,name:"?" },
{ x:195.184,y:766.467,name:"?" },
{ x:188.133,y:734.431,name:"?" },

{ x:310.341,y:36.389,name:"?" },
{ x:310.341,y:58.513,name:"?" },
{ x:310.341,y:75.272,name:"?" },
{ x:310.341,y:103.579,name:"?" },
{ x:308.256,y:169.951,name:"?" },
{ x:314.781,y:241.483,name:"?" },

{ x:327.774,y:1054.494,name:"?" },
{ x:326.548,y:968.751,name:"?" },
{ x:322.767,y:853.430,name:"?" },
{ x:326.722,y:812.452,name:"?" },
{ x:314.694,y:776.431,name:"?" },
{ x:318.679,y:739.489,name:"?" },
{ x:335.985,y:697.132,name:"?" },
{ x:318.679,y:664.022,name:"?" },
{ x:322.767,y:630.658,name:"?" },

{ x:170.582,y:1233.661,name:"?" },
{ x:170.582,y:1191.559,name:"?" },
{ x:170.582,y:1156.968,name:"?" },
{ x:170.582,y:1122.735,name:"?" },
{ x:171.349,y:1315.055,name:"?" },
{ x:170.582,y:1359.456,name:"?" },
{ x:170.582,y:1393.690,name:"?" },
{ x:170.582,y:1444.631,name:"?" },
{ x:173.617,y:1564.520,name:"?" },

{ x:303.090,y:1561.544,name:"?" },
{ x:296.376,y:1492.281,name:"?" },
{ x:303.090,y:1439.960,name:"?" },
{ x:305.951,y:1382.704,name:"?" },
{ x:301.864,y:1344.690,name:"?" },
{ x:299.104,y:1302.486,name:"?" },
{ x:292.697,y:1268.559,name:"?" },
{ x:295.201,y:1230.851,name:"?" },
{ x:298.389,y:1187.165,name:"?" },
{ x:292.697,y:1140.720,name:"?" }
];

const container = document.getElementById("inputs");
const img = document.getElementById("img");

const BASE_WIDTH = 527.15;   // ancho original detectado
const BASE_HEIGHT = 1625.125;

img.onload = () => {

const scaleX = img.width / BASE_WIDTH;
const scaleY = img.height / BASE_HEIGHT;

labels.forEach((l,i)=>{

let input = document.createElement("input");

const offsetX = 22.92;
const offsetY = -2.70;

input.style.left = (l.x - offsetX) + "px";
input.style.top = (l.y - offsetY) + "px";

input.id="q"+i;

container.appendChild(input);

});

};

function normalize(t){
return t.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"");
}

function checkAnswers(){

let score=0;

labels.forEach((l,i)=>{

let input=document.getElementById("q"+i);

if(normalize(input.value)==normalize(l.name)){
input.style.background="#9cff9c";
score++;
}else{
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
