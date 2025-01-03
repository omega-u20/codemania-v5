document.getElementById('content').addEventListener("scroll",()=>{
    setTimeout(() => {        
        trigger()
        herocard()
      }, 100);
    setTimeout(()=>{
        magic()
    },200)
    scroller();
})
document.getElementById('content').addEventListener('click',()=>{
    document.getElementById('menudrop').style.transform='translateY(-50em)'
    document.getElementById('menudrop').style.opacity=0
})

document.getElementById('heroover').addEventListener('scroll',function (e){
    console.log(e.deltaY);
    document.getElementById('content').scrollTop+= e.deltaY
})

function magic(){
    const trig1 = document.getElementById('about').getBoundingClientRect().top
    const trig2 = document.getElementById('timeline').getBoundingClientRect().top
    const trig3 = document.getElementById('prizes').getBoundingClientRect().top
    const trig5 = document.getElementById('shop').getBoundingClientRect().top
    const trig4 = document.getElementById('contact').getBoundingClientRect().top
    //console.log(`trig 1 ${trig1}\ntrig 2 ${trig2}\ntrig 3 ${trig3}\ntrig 4 ${trig4}`);
    

    const el1 = document.getElementById('abtcont')
    const el11 = document.getElementById('why')
    const el2 = document.getElementById('timecont')
    const el3 = document.getElementById('przcont')
    const el5 = document.getElementById('shopcont')
    const el4 = document.getElementById('last')

    if ((trig1<=(window.innerHeight || document.documentElement.clientHeight)-200)&& !(trig2<=50)) {
        el1.style.opacity = 1
        el11.style.opacity = 1
        el1.style.transform ='translateX(0)'
        el11.style.transform ='translateX(0)'
    }else{
        el1.style.opacity = 0
        el11.style.opacity = 0
        el1.style.transform ='translateX(-200px)'
        el11.style.transform ='translateX(-200px)'
    }

     if ((trig2<=(window.innerHeight || document.documentElement.clientHeight)-200)&& !(trig3<=50)) {
        el2.style.opacity = 1
        el2.style.transform ='translateX(0)'
    }else{
        el2.style.opacity = 0
        el2.style.transform ='translateX(-200px)'
    }

     if ((trig3<=(window.innerHeight || document.documentElement.clientHeight)-200)&& !(trig5<=50)) {
        el3.style.opacity = 1
        el3.style.transform ='translateX(0)'
    }else{
        el3.style.opacity = 0
        el3.style.transform ='translateX(-200px)'
    }

    
    if ((trig5<=(window.innerHeight || document.documentElement.clientHeight)-200)&& !(trig4<=50)) {
        el5.style.opacity = 1
        el5.style.transform ='translateX(0)'
    }else{
        el5.style.opacity = 0
        el5.style.transform ='translateX(-200px)'
    }

     if ((trig4<=(window.innerHeight || document.documentElement.clientHeight)-200)) {
        el4.style.opacity = 1
        el4.style.transform ='translateX(0)'
    }else{
        el4.style.opacity = 0
        el4.style.transform ='translateX(-200px)'
    }
}

const scrol = document.getElementById('content')
document.getElementById('hmimg2').style.display='none'
var i=1;
document.getElementById('menudrop').style.transform='translateY(-50em)'
//const body = document.getElementsByTagName('body')[0]
const content = document.getElementById('content');
//document.getElementById('heroover').style.display='none'

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
    var winh = (window.innerHeight || document.documentElement.clientHeight);

    if(trig1>100){
        heroow.style.opacity=0
        heroow.style.transform='perspective(12cm) rotateX(30deg)'
        hero.className= 'big'
    }else if(((trig1<=200)&&(trig2>(winh -100)))&&((trig1<-100)&&(trig2>100))){
            heroow.style.opacity=1
            heroow.style.transform='perspective(5cm) rotateX(0deg)'
            hero.className= 'small'
    }else if(trig2<=200){
        heroow.style.opacity=0
        heroow.style.transform='perspective(12cm) rotateX(-30deg)'
        hero.className= 'smallu'
    }
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
        document.getElementById('hmimg1').style.opacity=0
        setTimeout(() => {
            document.getElementById('hmimg1').style.display='none'
            document.getElementById('hmimg2').style.display=''
        }, 1000);
        setTimeout(() => {
            document.getElementById('hmimg2').style.opacity=1
        }, 1100);
    }else{
        document.getElementById('hmimg2').style.opacity=0
        setTimeout(() => {
            document.getElementById('hmimg1').style.display=''
            document.getElementById('hmimg2').style.display='none'
        }, 1000);
        setTimeout(() => {
            document.getElementById('hmimg1').style.opacity=1
        }, 1100);
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
var on =false
function apear() {
    if (!on) {
        document.getElementById('menudrop').style.transform='translateY(0em)'
        document.getElementById('menudrop').style.opacity=1
        on=true
    } else {
        document.getElementById('menudrop').style.transform='translateY(-50em)'
        document.getElementById('menudrop').style.opacity=0        
        on =false
    }
}