import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import * as dat from 'dat.gui';
import './App.css';
// import space_image from './textures/space_image.jpg';
import avatar from './textures/avatar.jpg';
import sun_image from './textures/sun_image.jpg';
import mercury_image from './textures/mercury_image.jpg';
import venus_image from './textures/venus_image.jpg';
import earth_image from './textures/earth_image.jpg';
import mars_image from './textures/mars_image.jpg';
import jupiter_image from './textures/jupiter_image.jpg';
import saturn_image from './textures/saturn_image.jpg';
import saturn_ring from './textures/saturn_ring.png';
import uranus_image from './textures/uranus_image.jpg';
import neptune_image from './textures/neptune_image.jpg';
import pluto_image from './textures/pluto_image.jpg';
import stars_image from './textures/stars_image.jpg';
import { TextureLoader } from 'three';



function App() {
  useEffect(() => {
    // User interface
    const gui = new dat.GUI();

    // Scene, camera, canva and render 
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 196;
    camera.position.y = 190;
    camera.position.x = -80;

    const canvas = document.getElementById('myThreeJsCanvas');
    const render = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    render.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(render.domElement);

    // Light the project
    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    // ambientLight.castShadow = true;
    // scene.add();

    // const spotLight = new THREE.SpotLight(0xff0000, 1);
    // spotLight.castShadow = true;
    // spotLight.position.set(0, 64, 32);
    // scene.add(spotLight);

    // const spotLightControl = gui.addFolder("Spot Light")
    // spotLightControl.add(spotLight.position, "x").min(-10).max(10).step(0.1);
    // spotLightControl.add(spotLight.position, "y").min(-10).max(10).step(0.1);

    const spotLight = new THREE.PointLight(0xffffff, 3, 500);
    scene.add(spotLight);
    

    // Sun and planet
    const sunLoader = new THREE.TextureLoader();
    const sunGeometry = new THREE.SphereGeometry(30, 30, 30);
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: sunLoader.load(sun_image)
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    const mercuryLoader = new THREE.TextureLoader();
    const mercuryGeometry = new THREE.SphereGeometry(0.8, 30, 30);
    const mercuryMaterial = new THREE.MeshStandardMaterial({
      map: mercuryLoader.load(mercury_image)
    });
    const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    const mercuryObj = new THREE.Object3D();
    mercuryObj.add(mercury);
    mercury.position.x = 78;
    scene.add(mercuryObj);

    const venusLoader = new THREE.TextureLoader();
    const venusGeometry = new THREE.SphereGeometry(1.8, 30, 30);
    const venusMaterial = new THREE.MeshStandardMaterial({
      map: venusLoader.load(venus_image)
    });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    const venusObj = new THREE.Object3D();
    venusObj.add(venus);
    venus.position.x = 90;
    scene.add(venusObj);

    const earthLoader = new THREE.TextureLoader();
    const earthGeometry = new THREE.SphereGeometry(2, 30, 30);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthLoader.load(earth_image)
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    const earthObj = new THREE.Object3D();
    earthObj.add(earth);
    earth.position.x = 110;
    scene.add(earthObj);

    const marsLoader = new THREE.TextureLoader();
    const marsGeometry = new THREE.SphereGeometry(1.2, 30, 30);
    const marsMaterial = new THREE.MeshStandardMaterial({
      map: marsLoader.load(mars_image)
    });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);
    const marsObj = new THREE.Object3D();
    marsObj.add(mercury);
    mars.position.x = 120;
    scene.add(marsObj);

    const jupiterLoader = new THREE.TextureLoader();
    const jupiterGeometry = new THREE.SphereGeometry(10, 30, 30);
    const jupiterMaterial = new THREE.MeshStandardMaterial({
      map: jupiterLoader.load(jupiter_image)
    });
    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    const jupiterObj = new THREE.Object3D();
    jupiterObj.add(jupiter);
    jupiter.position.x = 160;
    scene.add(jupiterObj);

    const saturnLoader = new THREE.TextureLoader();
    const saturnGeometry = new THREE.SphereGeometry(9, 30, 30);
    const saturnMaterial = new THREE.MeshStandardMaterial({
      map: saturnLoader.load(saturn_image)
    });
    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    const saturnObj = new THREE.Object3D();
    saturnObj.add(saturn);
    saturn.position.x = 190;
    scene.add(saturnObj);

    const saturnRingLoader= new THREE.TextureLoader();
    const saturnRingGeometry = new THREE.RingGeometry(10, 20, 32);
    const saturnRingMaterial = new THREE.MeshBasicMaterial ({
      map: saturnRingLoader.load(saturn_ring),
      side: THREE.DoubleSide
    });
    const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
    saturnRing.position.x = 190;
    saturnRing.rotation.x = -0.45 * Math.PI;
    saturnRing.rotation.y = -0.1 * Math.PI;
    saturnObj.add(saturnRing);

    const uranusLoader = new THREE.TextureLoader();
    const uranusGeometry = new THREE.SphereGeometry(3.9, 30, 30);
    const uranusMaterial = new THREE.MeshStandardMaterial({
      map: uranusLoader.load(uranus_image)
    });
    const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
    const uranusObj = new THREE.Object3D();
    uranusObj.add(uranus);
    uranus.position.x = 220;
    scene.add(uranusObj);

    const neptuneLoader = new THREE.TextureLoader();
    const neptuneGeometry = new THREE.SphereGeometry(3.8, 30, 30);
    const neptuneMaterial = new THREE.MeshStandardMaterial({
      map: neptuneLoader.load(neptune_image)
    });
    const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    const neptuneObj = new THREE.Object3D();
    neptuneObj.add(neptune);
    neptune.position.x = 240;
    scene.add(neptuneObj);

    const plutoLoader = new THREE.TextureLoader();
    const plutoGeometry = new THREE.SphereGeometry(0.4, 30, 30);
    const plutoMaterial = new THREE.MeshStandardMaterial({
      map: plutoLoader.load(pluto_image)
    });
    const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
    const plutoObj = new THREE.Object3D();
    plutoObj.add(pluto);
    pluto.position.x = 280;
    scene.add(plutoObj);

    // My avatar cube
    const myAvatar = new THREE.TextureLoader();
    const boxAvatar = new THREE.BoxGeometry(10, 10, 10)
    const avatarMaterial = new THREE.MeshBasicMaterial({
      map: myAvatar.load(avatar)
    });
    const my = new THREE.Mesh(boxAvatar, avatarMaterial);
    my.position.set(50, 15, 5);
    sun.add(my)

    // Stars 
    const addStar = () => {
      const starsGeometry = new THREE.SphereGeometry(0.1, 30, 30, 30);
      const starsMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
      const starsMesh = new THREE.Mesh(starsGeometry, starsMaterial);

      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));

      starsMesh.position.set(x, y, z);
      scene.add(starsMesh);
    }
    Array(600).fill().forEach(addStar);

    // Background
    const spaceTexture = new THREE.TextureLoader();
    scene.background = spaceTexture.load(stars_image)

    
    // Manual control scene and grid
    const controls = new OrbitControls(camera, render.domElement);
    const stats = Stats();
    document.body.appendChild(stats.dom);
    const grid = new THREE.GridHelper(1000, 30);
    scene.add(grid);

    // Animation
    const animate = () => {
      sun.rotateY(-0.001);
      mercury.rotateY(-0.003);
      mercuryObj.rotateY(0.0088);
      venus.rotateY(-0.005);
      venusObj.rotateY(0.000264);
      earth.rotateY(-0.007);
      earthObj.rotateY(0.000365);
      mars.rotateY(-0.003);
      marsObj.rotateY(0.000687);
      jupiter.rotateY(-0.003);
      jupiterObj.rotateY(0.0004332);
      // saturn.rotateY(-0.003);
      saturnObj.rotateY(0.00010759);
      uranus.rotateY(-0.003);
      uranusObj.rotateY(0.00030685);
      neptune.rotateY(-0.003);
      neptuneObj.rotateY(0.00060190);
      pluto.rotateY(-0.003);
      plutoObj.rotateY(0.00010759);

      my.rotation.y += 0.01;
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
