// Generamos 64 cajas temporales y las distribuimos en 4 columnas para que te sea fácil arrastrarlas
const labels = Array.from({ length: 64 }, (_, i) => {
  const col = Math.floor(i / 16); // 16 cajas por figura aproximadamente
  const row = i % 16;
  return {
    x: 100 + (col * 280), // Las separa horizontalmente
    y: 20 + (row * 30),   // Las separa verticalmente
    name: "Q" + (i + 1)   // Nombre temporal Q1, Q2, etc.
  };
});

const container = document.getElementById("inputs");
const img = document.getElementById("img");

img.onload = () => {
  labels.forEach((l, i) => {
    let input = document.createElement("input");
    input.style.left = l.x + "px";
    input.style.top = l.y + "px";
    input.id = "q" + i;
    input.value = l.name; // Mostramos Q1, Q2 para identificarlas
    input.readOnly = true; // Solo lectura para facilitar el arrastre
    container.appendChild(input);
  });
};

// --- LÓGICA DE ARRASTRAR Y SOLTAR (DRAG & DROP) ---
let isDragging = false;
let currentEl = null;
let startX, startY, initialLeft, initialTop;

container.addEventListener('mousedown', (e) => {
  if(e.target.tagName === 'INPUT') {
    isDragging = true;
    currentEl = e.target;
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = parseFloat(currentEl.style.left) || 0;
    initialTop = parseFloat(currentEl.style.top) || 0;
    currentEl.style.zIndex = 1000;
  }
});

window.addEventListener('mousemove', (e) => {
  if(!isDragging || !currentEl) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  currentEl.style.left = (initialLeft + dx) + 'px';
  currentEl.style.top = (initialTop + dy) + 'px';
});

window.addEventListener('mouseup', () => {
  if(currentEl) currentEl.style.zIndex = 10;
  isDragging = false;
  currentEl = null;
});

// --- EXPORTAR LAS NUEVAS COORDENADAS ---
function exportCoords() {
  const inputs = document.querySelectorAll('#inputs input');
  const newLabels = Array.from(inputs).map((inp, i) => {
    return {
      x: Math.round(parseFloat(inp.style.left) * 100) / 100,
      y: Math.round(parseFloat(inp.style.top) * 100) / 100,
      name: "" // Lo dejamos vacío para rellenarlo luego
    };
  });
  console.log("Copia este código:", JSON.stringify(newLabels, null, 2));
  alert("¡Coordenadas guardadas! Abre la consola (F12) para copiarlas.");
}

// Funciones originales del Quiz
function normalize(t){
  return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}

function checkAnswers(){
  let score=0;
  labels.forEach((l,i)=>{
    let input=document.getElementById("q"+i);
    if(normalize(input.value) === normalize(l.name)){
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
