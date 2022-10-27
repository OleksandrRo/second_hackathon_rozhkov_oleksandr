import { useEffect } from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import * as dat from 'dat.gui';
import './App.css';
import space from './textures/space.jpg';

function App() {
  useEffect( () => {
    const gui = new dat.GUI();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 96;

    const canvas = document.getElementById('myThreeJsCanvas');
    const render = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    render.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(render.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xff0000, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const spotLightControl = gui.addFolder("Spot Light")
    spotLightControl.add(spotLight.position, "x").min(-10).max(10).step(0.1);
    spotLightControl.add(spotLight.position, "y").min(-10).max(10).step(0.1);


    const sphereGeometry = new THREE.SphereGeometry( 16, 30, 30);
    const sphereMaterial = new THREE.MeshPhongMaterial({color: 0xffff00});
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphereMesh);

    // const boxAvatar = new THREE.SphereGeometry( 16, 30, 30);
    // const sphereMaterial = new THREE.MeshPhongMaterial({color: 0xffff00});
    // const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    // scene.add(sphereMesh);

    const controls = new OrbitControls( camera, render.domElement ); 
    const stats = Stats();
    document.body.appendChild(stats.dom);

    const grid = new THREE.GridHelper(1000, 40);
    scene.add(grid);


    const addStar = () => {
      const starsGeometry = new THREE.SphereGeometry( 0.2, 30, 30, 30);
      const starsMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
      const starsMesh = new THREE.Mesh(starsGeometry, starsMaterial);

      const [x, y, z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(300));

      starsMesh.position.set(x, y, z);
      scene.add(starsMesh);
    }
    Array(500).fill().forEach(addStar);

    // const spaceTexture = new THREE.TextureLoader();
    // const loader = new Promise((resolve)=>resolve);
    // loader.then(spaceTexture.load(space));
    // scene.background = spaceTexture;

    const spaceTexture = new THREE.TextureLoader();
    scene.background = spaceTexture.load(space)


    const animate = () => {

      stats.update();
      controls.update();
      render.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div >
      <canvas id="myThreeJsCanvas" />
    </div>
  )
}

export default App
