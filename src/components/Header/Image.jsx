import { useSpring, animated } from 'react-spring'

export const Image = ({ src, alt, from, to }) => {
  const [springProps, setSpring] = useSpring(() => ({
    from,
    to,
    config: { tension: 100, friction: 40 }
  }))

  return (
    <animated.div style={springProps} className='image-container'>
      <img src={src} alt={alt} />
    </animated.div>
  )
}
