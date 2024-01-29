import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

//Stagger Text animation
function sideScroll() {
  const items = document.querySelectorAll('.slider__item')
  const height = document.querySelector('.slider').offsetWidth
  const width = (items.length - 1) * 100

  document.querySelector('.sticky__wrapper').style.height = `${height / 16}rem`

  gsap.to('.slider__item', {
    xPercent: -width,
    ease: 'none',
    scrollTrigger: {
      markers: true,
      trigger: '.sticky__wrapper',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      pin: '.slider',
    },
  })

  items.forEach((item) => {
    gsap.to(item.querySelector('.slider__img'), {
      xPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.sticky__wrapper',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })
  })
}

export default sideScroll
