const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

})

const color = {
    h: 200,
    s: 50,
    l: 50
}

const vague = {
    y: canvas.height/2,
    nbCourbes: 0.01,
    amplitude: 200, 
    frequence: 0.01
}

let increment = vague.frequence;

function animate() {
    
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(0,0,canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    for(let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, vague.y + Math.sin(i * vague.nbCourbes + increment) * vague.amplitude * Math.sin(increment));
    }

    ctx.strokeStyle = `hsl(${Math.abs(color.h * Math.sin(increment))}, ${color.s}%, ${color.l}%)`
    ctx.stroke();

    increment += vague.frequence;
}
animate();