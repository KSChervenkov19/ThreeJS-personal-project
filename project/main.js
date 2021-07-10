import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.01, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();
loader.load('assets/scene.gltf', function (gltf) {
  scene.add(gltf.scene);
});


renderer.outputEncoding = THREE.sRGBEncoding;

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 15, 100);


function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate();

scene.background = new THREE.Color( 0x94a4c3 );

const light = new THREE.AmbientLight( 0xffffff );
scene.add(light);