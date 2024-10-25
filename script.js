const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); 



var tl= gsap.timeline()
tl.from("#page1 h1",{
    y:100,
    opacity:0,
    duration:2,
    delay:0.4,
    stagger:0.2,
    Scrub:5
})

tl.from("#page1 button",{
    x:-200,
    opacity:0,
    duration:0.8,
    delay:0.3,
    stagger:0.2,
    Scrub:5

})

tl.from("#page1 img",{
    x:500,
    opacity:0,
    duration:1,
    delay:0.2,
    stagger:0.2,
    Scrub:5
})