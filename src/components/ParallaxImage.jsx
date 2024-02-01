import background from '../assets/parallax-background.png'
import cover from '../assets/parallax-cover.png'
import { Parallax } from 'react-parallax'

export const ParallaxImage = () => {
  return (
    <div>
      <Parallax bgImage={background} strength={500}>
        <div>
          <div className='d-flex justify-content-center cover-image'>
            <img src={cover} alt='' height={500} />
          </div>
          <div className='parallax-container'>
            <div className='position-absolute text-container'>
              <p>Making your business outstanding is a science.</p>
              <p>We take it (a) seriously and (b) creatively.</p>
              <div className='d-md-flex justify-content-center gap-2'>
                <button className='button-parallax check-port mt-1'>Check our portfolio</button>
                <button className='button-parallax get-contact mt-1'>Get in contact</button>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  )
}
