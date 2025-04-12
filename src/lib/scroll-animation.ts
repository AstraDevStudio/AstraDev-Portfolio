import gsap from 'gsap';

export const scrollAnimation=(position:any)=>{
    const tl=gsap.timeline();

    tl.to(position,{
        scrollTrigger:{
            trigger: '#start-trigger',
            start:'top bottom'
        }  
    })
}