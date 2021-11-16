


//nr4
setInterval(displayClock, 500);
//nr1 

function displayClock(){
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    //nr6
    let en = "Am"
    
    //nr7
    if(hrs > 12){
       
        en = "PM";
    }
//nr2
if(hrs > 12){
    hrs = hrs - 12;
}

if (hrs == 0 ){
    hrs = 12;


}
// nr5 
if(hrs < 10){
   hrs = "0" + hrs;
}

if(min < 10){
    min = "0" + min;
 }
 if(sec < 10){
    sec = "0" + sec;
 }

//n3
document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec + " " + en;

}




