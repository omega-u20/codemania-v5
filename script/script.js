document.getElementById('content').addEventListener("scroll",()=>{
    setTimeout(() => {        
        trigger()
        herocard()
      }, 100);
    setTimeout(()=>{
        magic()
        partypoper()
    },200)
    scroller();
})

var inview =false
var poped = false

document.addEventListener('keyup',(e)=>{
if(((e.key=='f')||(e.key=='F'))&& inview){
    console.log('congrats');
    confetify();
}
})

function partypoper(){
    const pop = document.getElementById('winner').getBoundingClientRect().top
    if ((pop<= 200)&& !poped) {
        confetify()
        poped=true
    }
}

//document.getElementById('cdown').style=""
const message ='Codemania v5.0 has ended.\nTry again next time'

document.getElementById('content').addEventListener('click',()=>{
    document.getElementById('menudrop').style.transform='translateY(-50em)'
    document.getElementById('menudrop').style.opacity=0
})
document.getElementById('timecont').addEventListener('click',function (e){
    e.preventDefault()
})

//scroll transparency
document.getElementById('heroover').addEventListener('wheel',function (e){
    /* console.log('e'); */
    document.getElementById('content').scrollTop+= e.deltaY
})
document.getElementById('confetti').addEventListener('wheel',function (e){
    document.getElementById('content').scrollTop+= e.deltaY
})


function regredirect(){
    alert(message)
    //window.location.href='https://forms.gle/u3DZtj7929K4f8fu6'
}
function guidredirect(){
    alert(message)
    //window.location.href='https://drive.google.com/file/d/1sjksHLC-zCGjcMxNFsHwf6RUkFy9SInB/view?usp=sharing'
}
function orderdirect(){
    alert(message)
    //window.location.href='https://forms.gle/QfJoXQGAT5fWyd6n8'
}

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
        inview=true
    }else{
        el2.style.opacity = 0
        el2.style.transform ='translateX(-200px)'
        inview=false
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

console.log('script connected');
const scrol = document.getElementById('content')
document.getElementById('hmimg2').style.display='none'
var i=1;
document.getElementById('menudrop').style.transform='translateY(-50em)'
//const body = document.getElementsByTagName('body')[0]
const content = document.getElementById('content');
//document.getElementById('heroover').style.display='none'

function scroller(){
    if (document.getElementById('scrltrig').getBoundingClientRect().top>= -100) {
        document.getElementById('scrollhost').style.opacity=1;
    }else{
        document.getElementById('scrollhost').style.opacity=0;
    }
}
var first =true
var triggered =false

function herocard(){
    //var scroler = scrol.scrollTop/100
    const trig1 = document.getElementById('trig1').getBoundingClientRect().top
    const trig2 = document.getElementById('trig2').getBoundingClientRect().top
    const heroow = document.getElementById('heroover')
    const hero = document.getElementById('hero')
    var winh = (window.innerHeight || document.documentElement.clientHeight);

    if((trig1>200)&& !first && !triggered){
        poped = false
        triggered =true
        heroow.style.opacity=0
        heroow.style.transform='perspective(12cm) rotateX(30deg)'
        hero.className= 'big'
        setTimeout(()=>{
            heroow.style.display='none'
            triggered =false
        },1100)
    }else if(((trig1<=200)&&(trig2>(winh -100)))&&((trig1<-100)&&(trig2>100))&& !triggered){
        triggered =true
            first=false
            heroow.style.display='block'
        setTimeout(()=>{
            heroow.style.opacity=1
            heroow.style.transform='perspective(5cm) rotateX(0deg)'
            hero.className= 'small'
            triggered =false
        },100)
    }else if((trig2<=200)&& !triggered){
        triggered =true
        heroow.style.opacity=0
        heroow.style.transform='perspective(12cm) rotateX(-30deg)'
        hero.className= 'smallu'
        setTimeout(()=>{
            heroow.style.display='none'
            triggered =false
        },1100)
    }
}

function trigger(){
    const offset =100
    const mid = document.getElementById('owlmid')
    const left = document.getElementById('owlleft')
    const bottom = document.getElementById('owlbot')
    const owl = document.getElementById('owl')

    const midl = mid.getBoundingClientRect().top
    const lefl = left.getBoundingClientRect().top
    const botl = bottom.getBoundingClientRect().top

    if(midl>((window.innerHeight || document.documentElement.clientHeight) - offset)){
        owl.className= 'onorm'
        document.getElementById('hero').className= 'big'
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
    if(botl<=((window.innerHeight || document.documentElement.clientHeight) - offset)){
        console.log('bottom');
        owl.className= 'obot'
    }

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