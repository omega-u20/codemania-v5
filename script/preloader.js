console.log('preloader-script');
const loaderValues=['AWAIT','AWAIT.','AWAIT..','AWAIT...']
var i =0;
var killed = false

changer()

function changer() {
    document.getElementById("loadertxt").innerHTML=loaderValues[i]
    if (i==3) {
        i=0
    }else{
        i++
    }
    caller()
}

function caller() {
    setTimeout(() => {
        if(!killed){
            changer()
        }else{
            nirwana()
        }
    }, 500);
}

setTimeout(() => {
        document.getElementById("preloader").style.opacity=0
}, 4000);

setTimeout(() => {
    killed =true
    document.getElementById("preloader").remove()
}, 6000);

function nirwana(){
    console.log('Pre loader died!');
    return null
}