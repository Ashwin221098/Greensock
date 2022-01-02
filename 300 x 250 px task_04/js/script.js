function startanim(){
    var startTime = 0;
    var TL = new TimelineMax({repeat: -1});
 
    // bg image
    TL.to("#img1", 1, {opacity:1, ease:Power1.easeNone}, startTime);

    startTime += 1;
    TL.to("#img2", 1, {opacity:1, ease:Power1.easeNone}, startTime);
 
    startTime += 1;
    TL.to("#img3", 1, {opacity:1, ease:Power1.easeNone}, startTime);
  
   
    console.log(TL.duration());
 }
 window.onload = startanim();