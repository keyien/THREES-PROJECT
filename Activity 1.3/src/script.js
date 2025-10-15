import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()

const group = new THREE.Group()
scene.add(group)
group.scale.y = 2
group.rotation.y = 0.2

const cone1 = new THREE.Mesh(
  new THREE.ConeGeometry(0.7, 1.5, 32),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cone1.position.x = -1.5
group.add(cone1)

const cone2 = new THREE.Mesh(
  new THREE.ConeGeometry(0.7, 1.5, 32),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cone2.position.x = 0
group.add(cone2)

const cone3 = new THREE.Mesh(
  new THREE.ConeGeometry(0.7, 1.5, 32),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cone3.position.x = 1.5
group.add(cone3)

const light = new THREE.PointLight(0xffffff, 1)
light.position.set(2, 2, 2)
scene.add(light)

const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

const sizes = { width: 800, height: 600 }
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
