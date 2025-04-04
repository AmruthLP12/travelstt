"use client"

import { useEffect } from "react"

export default function AOSInit() {
  useEffect(() => {
    const initAOS = async () => {
      const elements = document.querySelectorAll("[data-aos]")

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("aos-animate")
            } else {
              entry.target.classList.remove("aos-animate")
            }
          })
        },
        {
          threshold: 0.1,
        },
      )

      elements.forEach((element) => {
        observer.observe(element)
      })
    }

    initAOS()
  }, [])

  return null
}

