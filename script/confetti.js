console.log('confettifier added');
var width = getViewportWidth()
if (width<=460) {
    var concount = Math.floor((Math.random()*10)+10)
} else {
    var concount = Math.floor((Math.random()*50)+50)
}

console.log(concount);
var conlist = [
    '<div class="cn1 cnf"',
    '<div class="cn2 cnf"',
    '<div class="cn3 cnf"',
    '<div class="cn4 cnf"']

var condeploy =""

function confetify() {
    document.getElementById('confetti').style.height="100%"
for (let i = 0; i < concount; i++) {
    var confinum = Math.floor(Math.random()*4)
    //console.log(confinum);
    condeploy+=conlist[confinum]+`style="animation-delay:${(Math.random())}s,${(Math.random())}s"`+'></div>';
}
document.getElementById('confetti').innerHTML=condeploy
setTimeout(() => {
    const particles = document.querySelectorAll(".cnf")
    particles.forEach(particle => {
        particle.remove()
    });
    document.getElementById('confetti').style.height=""
    condeploy =""
}, 3500);
}


function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
  }
