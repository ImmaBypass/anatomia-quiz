const data = [
    { x: 210, y: 37, name: "Frontal" },
    { x: 210, y: 56, name: "Nassal" },
    { x: 209, y: 78, name: "Pòmul" },
    { x: 208, y: 98, name: "Mandíbula" },
    { x: 212, y: 155, name: "Estern" },
    { x: 204, y: 189, name: "Costelles" },
    { x: 196, y: 223, name: "Columna Vertebral" },
    { x: 196, y: 245, name: "Sacre" },
    { x: 191, y: 273, name: "Ilí" },
    { x: 247, y: 294, name: "Pubis" },
    { x: 190, y: 295, name: "Isqui" },
    { x: 189, y: 316, name: "Coxal" },
    { x: 193, y: 381, name: "Fèmur" },
    { x: 198, y: 439, name: "Ròtula" },
    { x: 196, y: 473, name: "Tíbia" },
    { x: 194, y: 507, name: "Peroné" },
    { x: 193, y: 540, name: "Ossos del tars" },
    { x: 193, y: 567, name: "Metatars" },
    { x: 191, y: 600, name: "Falanges" },
    { x: 289, y: 38, name: "Parietal" },
    { x: 289, y: 60, name: "Temporal" },
    { x: 289, y: 77, name: "Occipital" },
    { x: 289, y: 105, name: "Vèrtebres cervicals" },
    { x: 287, y: 171, name: "Vèrtebres dorsals" },
    { x: 294, y: 243, name: "Vèrtebres lumbars" },
    { x: 299, y: 281, name: "Sacre" },
    { x: 298, y: 304, name: "Còccix" },
    { x: 479, y: 140, name: "Clavícula" },
    { x: 485, y: 173, name: "Omòplat" },
    { x: 486, y: 204, name: "Húmer" },
    { x: 478, y: 267, name: "Radi" },
    { x: 487, y: 289, name: "Cúbit" },
    { x: 493, y: 317, name: "Ossos del carp" },
    { x: 492, y: 349, name: "Metacarp" },
    { x: 487, y: 383, name: "Falanges" },
    { x: 614, y: 37, name: "Nassals" },
    { x: 609, y: 70, name: "Masseter" },
    { x: 627, y: 103, name: "Orbicular dels llavis" },
    { x: 609, y: 145, name: "Digàstric" },
    { x: 606, y: 183, name: "Serrat" },
    { x: 617, y: 219, name: "Bíceps braquial" },
    { x: 612, y: 259, name: "Supinador" },
    { x: 617, y: 375, name: "Recte anterior" },
    { x: 618, y: 498, name: "Tibial" },
    { x: 791, y: 30, name: "Frontal" },
    { x: 791, y: 64, name: "Orbicular de l'ull" },
    { x: 792, y: 99, name: "Temporal" },
    { x: 792, y: 140, name: "Buccinador" },
    { x: 795, y: 182, name: "Pectorals" },
    { x: 792, y: 222, name: "Rectes majors" },
    { x: 791, y: 267, name: "Oblic major" },
    { x: 792, y: 301, name: "Psoas ilíac" },
    { x: 792, y: 352, name: "Sartori" },
    { x: 795, y: 555, name: "Flexors i extensors" },
    { x: 1034, y: 48, name: "Esternocleidomastoïdal" },
    { x: 1040, y: 93, name: "Trapezi" },
    { x: 1036, y: 137, name: "Deltoides" },
    { x: 1035, y: 175, name: "Tríceps" },
    { x: 1041, y: 209, name: "Dorsal ample" },
    { x: 1043, y: 251, name: "Palmar" },
    { x: 1047, y: 289, name: "Flexors i extensors" },
    { x: 1044, y: 348, name: "Gluti" },
    { x: 1037, y: 400, name: "Bíceps femoral" },
    { x: 1044, y: 485, name: "Bessons" }
];

const container = document.getElementById('quiz-container');
const scoreElement = document.getElementById('score');
const inputs = [];

// Inicialització
data.forEach((item, index) => {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'input-box';
    input.style.left = item.x + 'px';
    input.style.top = item.y + 'px';
    container.appendChild(input);
    inputs.push(input);
});

// Funció de comparació "intel·ligent"
function normalitzar(t) {
    return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

document.getElementById('btn-comprovar').onclick = () => {
    let score = 0;
    inputs.forEach((input, i) => {
        if (normalitzar(input.value) === normalitzar(data[i].name)) {
            input.classList.add('correct');
            input.classList.remove('incorrect');
            score++;
        } else if (input.value !== "") {
            input.classList.add('incorrect');
            input.classList.remove('correct');
        }
    });
    scoreElement.innerText = score;
};

document.getElementById('btn-reiniciar').onclick = () => {
    inputs.forEach(input => {
        input.value = "";
        input.className = "input-box";
    });
    scoreElement.innerText = "0";
};

document.getElementById('btn-respostes').onclick = () => {
    inputs.forEach((input, i) => {
        input.value = data[i].name;
        input.className = "input-box correct";
    });
    scoreElement.innerText = data.length;
};
