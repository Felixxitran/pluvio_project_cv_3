import { animated, useSpring } from 'react-spring'
import React from 'react'
import { BsTextCenter } from 'react-icons/bs'
const Spring = ({ rotation = 0, timing = 150, children }) => {
  const [isBooped, setIsBooped] = React.useState(false)
  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    //transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    transformOrigin: 'center',
    transform: isBooped ? `scale(1.5)` : `scale(1.0)`,
    config: {
      tension: 300,
      friction: 10,
    },
  })
  React.useEffect(() => {
    // Unchanged
    if (!isBooped) {
      return
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false)
    }, timing)
    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isBooped, timing])
  const trigger = () => {
    // Unchanged
    setIsBooped(true)
  }
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  )
}

export default Spring
