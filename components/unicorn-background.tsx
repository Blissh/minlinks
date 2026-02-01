"use client"

import { useEffect, useState } from "react"

export function UnicornBackground() {
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            // Cambia de 1 a 0.6 en los primeros 300px de scroll
            const newOpacity = Math.max(0.6, 1 - scrollY / 500)
            setOpacity(newOpacity)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })

        const initUnicorn = () => {
            // @ts-ignore
            if (window.UnicornStudio && window.UnicornStudio.init) {
                // @ts-ignore
                window.UnicornStudio.init()
            }
        }

        if (!document.getElementById("unicorn-script")) {
            const script = document.createElement("script")
            script.id = "unicorn-script"
            script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.4/dist/unicornStudio.umd.js"
            script.async = true
            script.onload = initUnicorn
            document.head.appendChild(script)
        } else {
            initUnicorn()
        }

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            data-us-project="Wrr1Jvfvz9ReaZnq9ekE"
            className="fixed inset-0 -z-1 w-full h-full transition-opacity duration-300 ease-out"
            style={{
                pointerEvents: 'none',
                opacity: opacity
            }}
        />
    )
}
