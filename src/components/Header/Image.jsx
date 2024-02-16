import { useSpring, animated } from 'react-spring'

export const Image = ({ src, alt, from, to }) => {
  const [springProps, setSpring] = useSpring(() => ({
    from,
    to
  }))

  return (
    <animated.div style={springProps}>
      <img className='img-fluid' src={src} alt={alt} />
    </animated.div>
  )
}
