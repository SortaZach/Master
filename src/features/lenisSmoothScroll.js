import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Lenis Scroll
function lenisSmoothScroll() {
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  requestAnimationFrame(raf)
}

export default lenisSmoothScroll
