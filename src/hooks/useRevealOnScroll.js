import { useEffect } from 'react'

export function useRevealOnScroll(selector = '.reveal', rootMargin = '0px 0px -10% 0px') {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector))
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin })
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [selector, rootMargin])
}
