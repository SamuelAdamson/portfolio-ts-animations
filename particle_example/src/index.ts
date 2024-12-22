import * as THREE from 'three';

/* Boilerplate */
const scene: THREE.Scene = new THREE.Scene();
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

camera.position.set( 0, 0, 10);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* Handle resize */
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

/* Particles and geometry */
const particleCount: number = 10000;
const noiseAmount: number = 0.2;
const radius: number = 3;
const geometry: THREE.BufferGeometry = new THREE.BufferGeometry();
const positions: Float32Array = new Float32Array(particleCount * 3);

/* Place particles */
for (let i = 0; i < particleCount; i++) {
    const theta: number = Math.random() * Math.PI * 2;
    const phi: number = Math.acos(2 * Math.random() - 1);

    const x: number = radius * Math.sin(phi) * Math.cos(theta) + (Math.random() - 0.5) * noiseAmount;
    const y: number = radius * Math.sin(phi) * Math.sin(theta) + (Math.random() - 0.5) * noiseAmount;
    const z: number = radius * Math.cos(phi) + (Math.random() - 0.5) * noiseAmount;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

/* Particle material */
const material: THREE.PointsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.05,
});

/* Create points */
const points: THREE.Points = new THREE.Points(geometry, material);
scene.add(points);

/* Animation loop */
function animate() {
    requestAnimationFrame(animate);
    
    /* Rotation */
    points.rotation.y += 0.01; // Rotate around Y-axis
    points.rotation.x += 0.005; // Rotate around X-axis

    renderer.render(scene, camera);
}

animate();
