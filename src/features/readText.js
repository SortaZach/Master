import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

//Stagger Text animation
function readText() {
  //reading text animation
  let readingText = new SplitText('.read-text', {
    type: 'words',
  })

  gsap.from(readingText.words, {
    opacity: 0.13,
    stagger: 0.16,
    ease: 'none',
    scrollTrigger: {
      trigger: '.read-text-wrapper',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      pin: '.read-text',
    },
  })
}

export default readText
