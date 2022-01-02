function startanim(){
    var startTime = 0;
    var TL = new TimelineMax();
 
    // bg image
    TL.to("#photo, #textbg", 0.5, {rotationX:0, ease:Power1.easeNone}, startTime);
   
    // logo
    startTime += 0.5;
    TL.to("#logo", 0.5, {scale:1.4, ease:Power1.easeNone}, startTime);
    startTime += 0.4;
    TL.to("#logo", 0.5, {scale:1, ease:Power1.easeNone}, startTime);
 
    // frame text's
    startTime += 0.5;
    TL.to("#text1", 0.5, {rotationX:0, ease:Power1.easeNone}, startTime);
    startTime += 0.5;
    TL.to("#text2", 0.5, {x:0, opacity:1, ease:Power1.easeNone}, startTime);
    startTime += 0.5;
    TL.to("#text3", 0.5, {x:0, opacity:1, ease:Power1.easeNone}, startTime);
    startTime += 0.5;
    TL.to("#text4", 0.5, {translateY:0, opacity:1, ease:Power1.easeNone}, startTime);
 
    // circle
    startTime += 0.5;
    TL.to("#circle", 0.5, {rotation:-720, opacity:1, ease:Power1.easeNone}, startTime);

    // button
    startTime += 0.5;
    TL.to("#button", 0.5, {scale:1.4, ease:Power1.easeNone}, startTime);
    startTime += 0.4;
    TL.to("#button", 0.5, {scale:1, ease:Power1.easeNone}, startTime);

    // url 
    startTime += 0.5;
    TL.to("#url", 0.5, {translateY:0, opacity:1, ease:Power1.easeNone}, startTime);
 
    console.log(TL.duration());
 }
 window.onload = startanim();