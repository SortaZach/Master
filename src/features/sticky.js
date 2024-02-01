import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

//Sticky
function sticky() {
  //Text on left side sticky
  ScrollTrigger.create({
    trigger: '.sticky-section',
    start: 'top top',
    end: 'bottom 70%',
    pin: '.sticky-heading',
  })
}

export default sticky
