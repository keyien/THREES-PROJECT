import * as THREE from 'three'

const scene = new THREE.Scene()

const geometry = new THREE.ConeGeometry(0.7, 1.5, 32)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const cone = new THREE.Mesh(geometry, material)
scene.add(cone)

const light = new THREE.PointLight(0xffffff, 1)
light.position.set(2, 2, 2)
scene.add(light)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas.webgl') })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)
