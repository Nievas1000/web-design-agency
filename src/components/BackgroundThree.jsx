import { useEffect } from 'react'
import * as THREE from 'three'

export const Background = () => {
  useEffect(() => {
    // Configuración de Three.js
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Crear rombo izquierdo
    const geometryLeft = new THREE.BufferGeometry()
    const verticesLeft = new Float32Array([-1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0])
    geometryLeft.setAttribute('position', new THREE.BufferAttribute(verticesLeft, 3))
    const materialLeft = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const diamondLeft = new THREE.Mesh(geometryLeft, materialLeft)

    // Crear rombo derecho
    const geometryRight = geometryLeft.clone() // Clona la geometría del rombo izquierdo
    const materialRight = materialLeft.clone() // Clona el material del rombo izquierdo
    const diamondRight = new THREE.Mesh(geometryRight, materialRight)

    // Posiciona los rombos
    diamondLeft.position.x = -2 // Ajusta según tu necesidad
    diamondRight.position.x = 2 // Ajusta según tu necesidad

    // Agrega los rombos a la escena
    scene.add(diamondLeft)
    scene.add(diamondRight)

    // Posiciona la cámara
    camera.position.z = 5

    // Agrega el canvas al DOM
    document.body.appendChild(renderer.domElement)

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotación de los rombos
      diamondLeft.rotation.x += 0.01
      diamondLeft.rotation.y += 0.01
      diamondRight.rotation.x -= 0.01
      diamondRight.rotation.y -= 0.01

      // Renderiza la escena
      renderer.render(scene, camera)
    }

    // Llama a la función de animación
    animate()

    // Maneja el redimensionamiento de la ventana
    const handleResize = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()

      renderer.setSize(newWidth, newHeight)
    }

    // Agrega el manejador de redimensionamiento
    window.addEventListener('resize', handleResize)

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.removeChild(renderer.domElement)
    }
  }, []) // Se ejecuta solo una vez al montar el componente

  return null // El componente no renderiza nada
}
