'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

export function Parallax({ children, className = '', speed = 0.5, direction = 'up' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const multiplier = direction === 'up' ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

interface ParallaxTextProps {
  children: string
  className?: string
  baseVelocity?: number
}

export function ParallaxText({ children, className = '', baseVelocity = 5 }: ParallaxTextProps) {
  const baseX = useRef(0)

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex gap-8"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20 / Math.abs(baseVelocity),
            ease: 'linear',
          },
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex-shrink-0">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
