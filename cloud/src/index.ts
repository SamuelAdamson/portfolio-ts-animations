import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


/* Set up scene, camera, renderer */
const scene: THREE.Scene = new THREE.Scene();
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

camera.position.set(0, 5, 20);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function render() {
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

/* Window resize */
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
});

/* Orbit Controls */
const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 30;


/* Sphere geometry */
const sphere: THREE.Mesh = new THREE.Mesh(
    new THREE.SphereGeometry(4, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xEEEEEE, }), // TODO replace w/ shader
);
sphere.position.set(0, 5, 0);
scene.add(sphere);

animate();
