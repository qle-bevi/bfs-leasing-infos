import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type MainMenuButtonProps = {
  href: string
  label: string
  text: string
}

const MainMenuButton = ({
  href,
  label,
  text
}: MainMenuButtonProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    if (ref.current != null) {
      const listener = (ev: MouseEvent) => {
        ev.preventDefault()
        setShowText(false)
      }

      ref.current.addEventListener('mouseleave', listener)

      return () => {
        ref.current?.removeEventListener('mouseleave', listener)
      }
    }
  }, [ref])

  return (
    <a ref={ref} href={href} className="relative block text-center text-lg sm:text-base text-bmw-blue p-4 sm:p-2 border border-bmw-blue w-full transition-colors hover:bg-bmw-blue hover:text-white">
      { label }
      <a
        href="#"
        onClick={(ev) => {
          ev.preventDefault()
          ev.stopPropagation()
          setShowText(v => !v)
        }}
        className='absolute flex justify-center items-center top-0 right-0 bottom-0 pr-3 z-10'
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.002 29.957" className="w-6 h-6">
          <path fill="currentColor" d="M15.023 0a14.978 14.978 0 1 0 14.978 14.978A15.026 15.026 0 0 0 15.023 0Zm.135 4.978a2.786 2.786 0 0 1 2.869 2.78 2.872 2.872 0 1 1-5.74.09 2.862 2.862 0 0 1 2.871-2.87Zm-.629 7.31a7.05 7.05 0 0 1 .718.09 3.085 3.085 0 0 1 2.6 1.659c1.336 3.222-2.15 7.613-1.077 9.014s2.913.428 3.049.314c.118-.1.371-.094.18.224a4.667 4.667 0 0 1-3.947 1.973 5.868 5.868 0 0 1-.853 0c-2.3-.309-3.842-1.738-3.588-3.588.355-2.572 2-5.616 1.345-7.31-.5-1.307-1.814-.631-2.467-.314-.039.014-.354.063-.224-.179a5.593 5.593 0 0 1 4.26-1.884Z"/>
        </svg>
      </a>
      <AnimatePresence>
        { showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute text-sm leading-tight px-10 top-0 bottom-0 left-0 right-0 bg-bmw-blue text-white flex justify-center items-center text-center">
            { text }
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  )
}

export default MainMenuButton
