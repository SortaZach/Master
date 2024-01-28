import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

//Stagger Text animation
function staggerText() {
  //create a variable to hold letters
  let craftedSplitText = new SplitText('.stagger-text', {
    type: 'chars',
  })

  let chars = craftedSplitText.chars

  gsap.from(chars, {
    yPercent: 130,
    stagger: 0.05,
    ease: 'back.out',
    duration: 1,
    scrollTrigger: {
      trigger: '.stagger-text',
      start: 'top 80%',
      markers: true,
    },
  })
}

export default staggerText
