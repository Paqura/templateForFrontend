import Perlin from "../components/Perlin/_perlin";

const size = 600;
const cols = 30;
const rows = 30;
let time = 0;

const gridWidth = size / cols;
const gridHeight = size / cols;

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = size;
canvas.height = size;
ctx.font = '10px Arial';

document.body.appendChild(canvas);

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ctx.fillColor = "#000000";
            let random = Math.ceil(Math.random() * 100 * Perlin(100 / 1000, 0, 0));
            // ctx.fillRect(i * gridWidth, j * gridHeight, gridWidth - 1, gridHeight - 1);
            let flow = Math.floor(100 * Perlin(i / random, j / random, 0));
            ctx.fillColor = "#ffffff";
            ctx.fillText(flow, i * gridWidth, j * gridHeight);
        }
    }
};

function draw() {
    render();
    time++;
    requestAnimationFrame(draw);
}

draw();