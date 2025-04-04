var tl =gsap.timeline({scrollTrigger:{
    trigger :".two",
    start :"0% 0%",
    end : "80% 60%",
    scrub:true,
}})
   tl.to("#can",{
    top:"185%",
    left:"77%",
    width:"50%",
    rotate:"-30deg"

   },'can')
   
   tl.to("#leaf",{
    top:"195%",
    left:"75%",
    width:"12%",
    rotate:"0deg"
   },'can')

   tl.to("#quart-apple-ltr1",{
    top:"124%",
    left:"10%",
    width:"30%",
    rotate:"100deg"
   },'can')

   
   tl.to("#half-apple",{
    top:"135%",
    right:"85%",
    width:"35%",

    rotate:"-30deg"
   },'can')
   
//    tl.to("#quart-apple1",{
//     top:"163%",
//     left:"70%",
//     width:"5%",
//     rotate:"60deg"
//    },'can')

   tl.to("#quart-apple-rtl",{
    top:"184%",
    left:"65%",
    width:"40%",
    rotate:"-60deg"
   },'can')

   var tl2 =gsap.timeline({scrollTrigger:{
    trigger :".three",
    start :"0% 95%",
    end : "20% 50%",
    scrub:true,
}})
tl2.to("#can",{
    top:"273%",
    left:"50%",
    width:"45%",
    rotate:"0deg"
},'can')
tl.to("#quart-apple-ltr2",{
    top:"220%",
    left:"50%",
    width:"40%",
    rotate:"25deg"
   },'can')
   
//    ***********************************************************
   gsap.from("#logo",{
    opacity:0,
    duration:1,
    delay:.5,
    y:-25
   })
   gsap.from("#new",{
    opacity:1,
    duration:1,
    delay:.5,
    y:60  
 })
   
   gsap.from("#nav-links",{
    opacity:0,
    duration:1,
    delay:.5,
    y:-25,
})

gsap.from("nav",{
    stagger:{
        each:0.2}
  })
    // gsap.from("#can",{
    // opacity:1,
    // duration:2,
    // x:-1000,
    // rotate:270,
    // width:"60%",
    // })

    gsap.from("#leaf",{
        opacity:1,
        duration:2,
        x:-1000,
        rotate:270,
       
        })
        gsap.from("#quart-apple-rtl", {
            opacity: 1,
            duration: 2,
            y: -1000,  // Reduce this value to limit movement
            rotate: 270,
        });
        
            gsap.from("#half-apple",{
                opacity:1,
                duration:2,
                y:1000,
                rotate:270,
                })
                gsap.from("#quart-apple-ltr1",{
                    opacity:1,
                    duration:2,
                    y:1000,
                    rotate:270,
                    })
             gsap.from("#quart-apple-ltr2",{
                opacity:1,
                duration:2,
                x:1000,
                rotate:200,
                })
                gsap.from("#quart-apple-ltr2",{
                    opacity:1,
                    y: -15,  // Move up 50 pixels
                    duration: 1,
                    repeat: -1,
                    yoyo: true,  // Moves back to the original position
                    ease: "power1.inOut",
                    
                    })
                gsap.to("#coconoutleaf", {
                    y: -50,  // Move up 50 pixels
                    duration: 1,
                    repeat: 3,
                    rotate:30,  // Infinite loop
                    yoyo: true,  // Moves back to the original position
                    ease: "power1.inOut"  // Smooth movement
                });
                gsap.from("h3",{
                    scale:0,
                  delay:.5,  // Move up 50 pixels
                    duration: 1,
                    ease: "power1.inOut",
                    scrollTrigger:"h3"
                    
                    })
                    gsap.from("h4",{
                       // Move up 50 pixels
                        duration:2   ,
                        repeat: -1,
                        
                        ease: "linear",
                        x: "-100%", 
                        })
                        gsap.to(".marquee-content", {
                            x: "-100%", 
                            duration: 5, 
                            repeat: -1, 
                            ease: "linear",
                            modifiers: {
                                x: gsap.utils.unitize(x => `${x % window.innerWidth}px`)
                            }
                        });
                        gsap.to("#about-apple", {
                            // Move up 50 pixels
                            y:-5,
                            duration: .7,
                            repeat: -1,
                            rotate:0, 
                            yoyo: true,  // Moves back to the original position
                            ease: "power1.in"  // Smooth movement
                        });
      