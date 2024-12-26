import * as THREE from 'three';
import fragmentShader from './circle/circle_fragmentShader.glsl';
import vertexShader from './circle/circle_vertexShader.glsl';

/* Boilerplate */
const scene: THREE.Scene = new THREE.Scene();
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set( 0, 0, 10);

/* Configure particles */
const particleCount: number = 100;
const radius: number = 5;

const geometry: THREE.BufferGeometry = new THREE.BufferGeometry();
const positions: Float32Array = new Float32Array(particleCount * 3);
const angles: Float32Array = new Float32Array(particleCount);

for (let i = 0; i < particleCount; i++) {
    const angle: number = (i / particleCount) * Math.PI * 2;
    angles[i] = angle;

    const x: number = radius * Math.cos(angle);
    const y: number = radius * Math.sin(angle);
    const z: number = 0;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('angle', new THREE.BufferAttribute(angles, 1));

const material: THREE.ShaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
        uTime: { value: 0.0 },
        uRadius: { value: radius },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
});

const particles: THREE.Points = new THREE.Points(geometry, material);
scene.add(particles);

function animate() {
    material.uniforms.uTime.value += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();
