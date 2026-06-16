import { motion } from 'motion/react'
import { useEffect, useState, type ReactNode } from 'react'

export function SplitText({ text }: { text: string }) {
  const words = text.split(' ')

  return (
    <span className="inline-block">
      {words.map((word, wordIndex) => {
        const baseIndex = words.slice(0, wordIndex).join('').length + wordIndex
        return (
          <span key={word} className="inline-block whitespace-nowrap">
            {word.split('').map((char, letterIndex) => {
              const charIndex = baseIndex + letterIndex
              return (
                <motion.span
                  key={`${char}-${charIndex}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 34, rotateX: -64 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: charIndex * 0.018, duration: 0.62, ease: [0.2, 1, 0.3, 1] }}
                >
                  {char}
                </motion.span>
              )
            })}
            {'\u00A0'}
          </span>
        )
      })}
    </span>
  )
}

export function BlurText({ text }: { text: string }) {
  return (
    <motion.span initial={{ filter: 'blur(14px)', opacity: 0 }} animate={{ filter: 'blur(0px)', opacity: 1 }} transition={{ duration: 0.8 }}>
      {text}
    </motion.span>
  )
}

export function RotatingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => setIndex((current) => (current + 1) % words.length), 2100)
    return () => window.clearInterval(interval)
  }, [words.length])

  return (
    <span className="relative inline-flex min-w-[13.5rem] overflow-hidden rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-cyan-100">
      <motion.span key={words[index]} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.28 }}>
        {words[index]}
      </motion.span>
    </span>
  )
}

export function ShinyText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`shiny-text ${className}`}>{children}</span>
}

export function DecryptedText({ text, className = '' }: { text: string; className?: string }) {
  const [value, setValue] = useState(text.replace(/[^\s]/g, '0'))
  const chars = '01FRANCISCOJAVIER<>/_'

  useEffect(() => {
    let frame = 0
    const interval = window.setInterval(() => {
      frame += 1
      setValue(text.split('').map((char, index) => (index < frame / 2 || char === ' ' ? char : chars[(index + frame) % chars.length])).join(''))
      if (frame > text.length * 2) window.clearInterval(interval)
    }, 34)
    return () => window.clearInterval(interval)
  }, [text])

  return <span className={className}>{value}</span>
}

export function GlitchText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`glitch ${className}`} data-text={children}>{children}</span>
}

export function GradientText({ children }: { children: ReactNode }) {
  return <span className="gradient-text">{children}</span>
}
