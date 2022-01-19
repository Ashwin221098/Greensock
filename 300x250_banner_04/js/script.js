function startanim(){
    var startTime = 0;
    var TL = new TimelineMax({repeat:-1});
 
    // bg image
    startTime += 0.5;
    TL.to("#shape1", 0.5, {x:0, y:0, ease:Power1.easeout}, startTime);

    startTime += 0.5;
    TL.to("#img1", 0.5, {x:0, y:0, opacity:1, ease:Power1.easeNone}, startTime);
  
    // frame text's
    startTime += 0.4;
    TL.to("#text1", 0.4, {x:"45px", opacity:1, ease:Power1.easeout}, startTime);
    startTime += 0.4;
    TL.to("#text1", 0.4, {x:0, ease:Power1.easeout}, startTime);

    startTime += 0.3;
    TL.to("#text2a", 0.3, {x:"20px", opacity:1, ease:Power1.easeout}, startTime);
    startTime += 0.3;
    TL.to("#text2a", 0.3, {x:0, ease:Power1.easeout}, startTime);

    startTime += 0.3;
    TL.to("#text2b", 0.3, {x:"30px", opacity:1, ease:Power1.easeout}, startTime);
    startTime += 0.3;
    TL.to("#text2b", 0.3, {x:0, ease:Power1.easeout}, startTime);

    startTime += 0.5;
    TL.to("#underline", 0.5, {width:"85px", opacity:1, ease:Power1.easeout}, startTime);
    startTime += 0.5;
    TL.to("#underline", 0.5, {width:"28px", ease:Power1.easeout}, startTime);

    startTime += 0.5;
    TL.to("#text3", 0.5, {y:0, opacity:1, ease:Power1.easeout}, startTime);

    // logo 
    startTime += 0.5;
    TL.to("#logo, #logo1", 0.5, {y:0, opacity:1, ease:Power1.easeout}, startTime);

    startTime += 0.5;
    TL.to("#shape2", 0.5, {opacity: 0.5, ease:Power1.easeout}, startTime);
    startTime += 0.5;
    TL.to("#txt1", 0.5, {opacity:1, ease:Power1.easeNone}, startTime);

    // cta 
    startTime += 0.5;
    TL.to("#cta", 0.5, {x:0, opacity:1, ease:Power1.easeout}, startTime);
    
    // url
    startTime += 0.5;
    TL.to("#url", 0.5, {x:0, opacity:1, ease:Power1.easeout}, startTime);

    // bg image
    startTime += 0.5;
    TL.to("#shape2", 0.5, {opacity: 0.5, ease:Power1.easeout}, startTime);
    
    TL.to("#img1, #txt1", 1, {opacity:1, ease:Power1.easeNone}, startTime);

    startTime += 1;
    TL.to("#img1, #txt1", 0.5, {opacity:0, ease:Power1.easeNone}, startTime);
    TL.to("#img2, #txt2", 1, {opacity:1, ease:Power1.easeNone}, startTime);

    startTime += 1;
    TL.to("#img2, #txt2", 0.5, {opacity:0, ease:Power1.easeNone}, startTime);
    TL.to("#img3, #txt3", 1, {opacity:1, ease:Power1.easeNone}, startTime);

    console.log(TL.duration());
 }
 window.onload = startanim();