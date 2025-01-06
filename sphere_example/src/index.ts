import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let camera: THREE.PerspectiveCamera;
let ambientLight: THREE.AmbientLight;
let controls: OrbitControls;
let sphere: THREE.Mesh;

/* Sphere geometry */

/* Initialize scene, camera, lights, particles, etc. */
function init(): void {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    
    // Camera
    /* IMPORTANT NOTE - the sizing of the renderer/camera needs to change when
        implemented in the portfolio frontend
    */    
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(0, 5, 20);

    // Ambient light
    ambientLight = new THREE.AmbientLight('0xffffff', 0.5);
    scene.add(ambientLight);

    // Orbit controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 30;

    /* IMPORTANT NOTE - the sizing of the renderer/camera needs to change when
        implemented in the portfolio frontend
    */
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add window resize event
    window.addEventListener('resize', () => {
        /* IMPORTANT NOTE - the sizing of the renderer needs to change when
            implemented in the portfolio frontend
        */
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // sphere
    sphere = new THREE.Mesh(
        new THREE.SphereGeometry(4, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0xEEEEEE, }), // TODO replace w/ shader
    );
    sphere.position.set(0, 5, 0);
    scene.add(sphere);
}

/* Render scene */
function render() {
    renderer.render(scene, camera);
}

/* Animate loop */
async function animate() {
    requestAnimationFrame(animate);
    render();
}


init();
animate();
