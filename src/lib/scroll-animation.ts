import gsap from 'gsap';

export const scrollAnimation=(position:any,target:any,onUpdate:any)=>{
    const tl=gsap.timeline();

    tl.to(position,{
        scrollTrigger:{
            trigger: '#start-trigger',
            start:'top bottom'
        }  
    })
}