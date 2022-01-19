function startanim(){
    setTimeout(function(){
        id("bg").style.transform = 'scale(1)';
        id("bg").style.transition = 'all 3s linear';
    }, 250)

    setTimeout(function(){
        id("topline").style.width = '214px';
        id("topline").style.transition = 'all 0.5s ease';

        id("bottomline").style.width = '214px';
        id("bottomline").style.transition = 'all 0.5s ease';
    }, 500)

    setTimeout(function(){
        id("text1").style.transform = 'translateX(0px)';
        id("text1").style.transition = 'all 0.3s ease-out';
    }, 1000)
     
    setTimeout(function(){
        id("text2").style.transform = 'translateX(0px)';
        id("text2").style.transition = 'all 0.3s ease-out';
    }, 1300) 
    
    setTimeout(function(){
        id("text3").style.transform = 'translateY(0px)';
        id("text3").style.opacity = '1';
        id("text3").style.transition = 'all 0.5s ease-out';
    }, 1600)

    setTimeout(function(){
        id("cta").style.transform = 'translateX(0px)';
        id("cta").style.opacity = '1';
        id("cta").style.transition = 'all 0.5s ease-out';
    }, 2100)

    setTimeout(function(){
        id("url").style.transform = 'translateX(0px)';
        id("url").style.opacity = '1';
        id("url").style.transition = 'all 0.5s ease-out';
    }, 2600)
    setTimeout(function(){
        id("logo").style.opacity = '1';
        id("logo").style.transition = 'all 0.5s ease-out';
    }, 3100)
}
window.onload = startanim();

function id(s){
    return document.getElementById(s);
}