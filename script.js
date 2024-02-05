let tl = gsap.timeline()
tl.from("#nav h3",{
    y: -50,
    opacity:0,
    duration :1,
    delay:0.45,
    stagger:0.25,
})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.75,
    stagger:0.25
})

tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:1.5,
    stagger:1.5
})
tl.from("#footer h3",{
    x:-100,
    duration:0.8,
    stagger:0.4,
    opacity:0,
})