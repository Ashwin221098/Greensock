function startanim(){
    setTimeout(function(){
        id("logo").style.opacity = '1';
        id("logo").style.transition = 'all 0.5s ease';
    }, 500)

    setTimeout(function(){
        id("text1").style.opacity = '1';
        id("text1").style.transition = 'all 0.5s ease';
    }, 1000)

    setTimeout(function(){
        id("text2").style.opacity = '1';
        id("text2").style.transition = 'all 0.5s ease';
    }, 1500)

    setTimeout(function(){
        id("text3").style.opacity = '1';
        id("text3").style.transition = 'all 0.5s ease';
    }, 2000)

    setTimeout(function(){
        id("cta").style.opacity = '1';
        id("cta").style.transition = 'all 0.5s ease';
    }, 2500)

    setTimeout(function(){
        id("url").style.opacity = '1';
        id("url").style.transition = 'all 0.5s ease';
    }, 3000)
     
}
window.onload = startanim();

function id(s){
    return document.getElementById(s);
}