import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()

const geometry = new THREE.ConeGeometry(0.7, 1.5, 32)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const cone = new THREE.Mesh(geometry, material)
scene.add(cone)

const sizes = { width: 800, height: 600 }

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  cone.rotation.y = elapsedTime
  cone.rotation.x = elapsedTime * 0.5
  cone.position.x = Math.sin(elapsedTime) * 2
  cone.position.y = Math.cos(elapsedTime) * 1

  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
