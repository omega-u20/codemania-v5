document.getElementById('content').addEventListener("scroll",()=>{
    setTimeout(() => {
        magic()
        
        trigger()
        herocard()
      }, 1000);
    scroller();
})
document.getElementById('content').addEventListener('click',()=>{
    document.getElementById('menudrop').style.transform='translateY(-50em)'
    document.getElementById('menudrop').style.opacity=0
})

function magic(){
    //const trig1 = document.getElementById('trig1').getBoundingClientRect().top
}

const scrol = document.getElementById('content')
var i=1;

function scroller(){
    if (document.getElementById('scrollhost').getBoundingClientRect().top>(((window.innerHeight || document.documentElement.clientHeight)/10)*7)) {
        document.getElementById('scrollhost').style.opacity=1;
    }else{
        document.getElementById('scrollhost').style.opacity=0;
    }
}

function herocard(){
    //var scroler = scrol.scrollTop/100
    const trig1 = document.getElementById('trig1').getBoundingClientRect().top
    const trig2 = document.getElementById('trig2').getBoundingClientRect().top
    const heroow = document.getElementById('heroover')
    const hero = document.getElementById('hero')
    //console.log('sc: '+scroler);

    
    if(trig1>((window.innerHeight || document.documentElement.clientHeight) - 100)){
        heroow.className= 'scroln'
        hero.className= 'big'
    }
    if((trig1<=((window.innerHeight || document.documentElement.clientHeight) - 100))&&(trig2>((window.innerHeight || document.documentElement.clientHeight) - 100))){
        heroow.className= 'scrol'
        hero.className= 'small'
    }
    if(trig2<=((window.innerHeight || document.documentElement.clientHeight) - 100)){
        heroow.className= 'scrolu'
        hero.className= 'smallu'
    }
    /* if (scroler*10>100) {
        hero.style.opacity=100+"%"
    }else if (scroler>=42) {
        
    } else {
        hero.style.opacity=scroler*10+"%"
    }

    if ((scroler>26)&&(scroler<42)) {
        return
    } else if ((scroler>=42)&&(scroler<=100)) {
        hero.style.bottom=(26+i)+"%"
        i=i+1
    } else {
        i=1
        hero.style.bottom=scroler+"%"
    }

    if (scroler==0) {
        hero.style.transform='rotateX('+20+'deg)'
    } else if (scroler>20) {
        hero.style.transform='perspective(6cm) rotateX('+(0)+'deg)'
    } else {
        hero.style.transform='perspective(6cm) rotateX('+(20/scroler)+'deg)'
    }
    if (scroler>=100) {
        i=1
    } */
}

console.log('script connected');

function trigger(){
    const offset =100
    const mid = document.getElementById('owlmid')
    const left = document.getElementById('owlleft')
    //const bottom = document.getElementById('owlbot')
    const owl = document.getElementById('owl')

    const midl = mid.getBoundingClientRect().top
    const lefl = left.getBoundingClientRect().top
    //const botl = bottom.getBoundingClientRect().top

    if(midl>((window.innerHeight || document.documentElement.clientHeight) - offset)){
        owl.className= 'onorm'
    }
    if(midl<=((window.innerHeight || document.documentElement.clientHeight) - offset)){
       // console.log('middle');
        owl.className= 'omid'
        document.getElementById('heroover').className= 'scroln'
    }
    if(lefl<=((window.innerHeight || document.documentElement.clientHeight) - offset)){
        //console.log('left');
        owl.className= 'oleft'
    }
    /* if(botl<=((window.innerHeight || document.documentElement.clientHeight) - offset)){
        console.log('bottom');
        owl.className= 'obot'
    } */

}

function disapier(){
    document.getElementById('menudrop').style.transform='translateY(-50em)'
    document.getElementById('menudrop').style.opacity=0
}
function apear() {
    document.getElementById('menudrop').style.transform='translateY(0em)'
    document.getElementById('menudrop').style.opacity=1
}