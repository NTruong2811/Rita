import './style.css';
import './resources/js/Chat'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';





const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const screen_size = {
	width: window.innerWidth,
	height: window.innerHeight
}
// tao doi tuong

scene.add( new THREE.AmbientLight( 0x443333 ) );

const dirLight1 = new THREE.DirectionalLight( 0xffddcc, 1 );
dirLight1.position.set( 1, 0.75, 0.5 );
scene.add( dirLight1 );

const dirLight2 = new THREE.DirectionalLight( 0xccccff, 1 );
dirLight2.position.set( - 1, 0.75, - 0.5 );
scene.add( dirLight2 );


var directionalLight = new THREE.DirectionalLight(0xffffff, 3.5);
directionalLight.position.set( 5, 10, 7.5 );
directionalLight.shadow.camera.right = 2;
directionalLight.shadow.camera.left = - 2;
directionalLight.shadow.camera.top	= 2;
directionalLight.shadow.camera.bottom = - 2;
directionalLight.castShadow = true;
scene.add(directionalLight);


// tao mat phang

// const grid = new THREE.GridHelper(200, 50)
// scene.add(grid);




// tao camera
const camera = new THREE.PerspectiveCamera(52, screen_size.width / screen_size.height);

camera.position.z = 1.4
camera.position.y = 1.5

// camera.lookAt(0, 0, 0);
console.log(camera);

// camera.rotation.y = 10
scene.add(camera);



const loader = new GLTFLoader();
loader.load('public/model/scene.gltf', function (model) {
	var actor = model.scene
    // actor.position.y= -1
     console.log(model);
	controls.target.set(actor.position.x, actor.position.y + 1.4, actor.position.z);
	scene.add(actor);
}, function (e) {
	// console.log(e);
})



// tao khung render
const canvas = document.getElementById('app');
const render = new THREE.WebGLRenderer({ canvas });

// tao controller 
const controls = new OrbitControls(camera, render.domElement);
controls.autoRotate = false;

controls.update();

function animate() {
	requestAnimationFrame(animate);

	controls.update();
	render.render(scene, camera);
}
animate()





render.setSize(screen_size.width, screen_size.height);
render.render(scene, camera);