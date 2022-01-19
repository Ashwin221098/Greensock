function startanim(){
    setTimeout(function(){
        id("shape1").style.transform = 'translatex(0px)';
        id("shape1").style.transition = 'all 0.4s ease-out';
    }, 500)

    setTimeout(function(){
        id("photo").style.transform = 'translatex(0px)';
        id("photo").style.transition = 'all 0.4s ease-out';
    }, 900)

    setTimeout(function(){
        id("shape2").style.transform = 'translatex(0px)';
        id("shape2").style.transition = 'all 0.4s ease-out';
    }, 1400)

    setTimeout(function(){
        id("logo").style.transform = 'scale(1)';
        id("logo").style.transition = 'all 0.8s ease';
    }, 2000)

    setTimeout(function(){
        id("text1").style.transform = 'translatex(0px)';
        id("text1").style.opacity = '1';
        id("text1").style.transition = 'all 0.5s ease';
    }, 2500)

    setTimeout(function(){
      
        id("text2").style.opacity = '1';
        id("text2").style.transition = 'all 0.5s ease';
    }, 3000)

    setTimeout(function(){
        id("text3a").style.opacity = '1';
        id("text3a").style.transition = 'all 0.5s ease';
    }, 3500)

    setTimeout(function(){
        id("text3b").style.opacity = '1';
        id("text3b").style.transition = 'all 0.5s ease';
    }, 4000)

    setTimeout(function(){
        id("cta").style.transform = 'scale(1)';
        id("cta").style.opacity = '1';
        id("cta").style.transition = 'all 0.5s ease';
    }, 4500)

    

}
window.onload = startanim();

function id(s){
    return document.getElementById(s);
}