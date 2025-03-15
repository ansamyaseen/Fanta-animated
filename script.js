var tl =gsap.timeline({scrollTrigger:{
    trigger :".two",
    start :"0% 95%",
    end : "80% 60%",
    scrub:true,
}})
   tl.to("#can",{
    top:"145%",
    left:"77%",
    width:"45%",
    rotate:"-30deg"
   },'can')

   tl.to("#leaf",{
    top:"155%",
    left:"75%",
    width:"12%",
    rotate:"0deg"
   },'can')

   tl.to("#quart-apple-ltr1",{
    top:"114%",
    left:"10%",
    width:"30%",
    rotate:"100deg"
   },'can')

   
   tl.to("#half-apple",{
    top:"125%",
    left:"83%",
    width:"35%",
    rotate:"90deg"
   },'can')
   
//    tl.to("#quart-apple1",{
//     top:"163%",
//     left:"70%",
//     width:"5%",
//     rotate:"60deg"
//    },'can')

   tl.to("#quart-apple-rtl",{
    top:"150%",
    left:"20%",
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
    top:"237%",
    left:"50%",
    width:"45%",
    rotate:"0deg"
},'can')
tl.to("#quart-apple-ltr2",{
    top:"251%",
    left:"42%",
    width:"40%",
    rotate:"25deg"
   },'can')