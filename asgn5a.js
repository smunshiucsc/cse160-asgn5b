import * as THREE from 'three';
import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';
import {MTLLoader} from 'three/addons/loaders/MTLLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CubeTextureLoader } from 'three';
import { BoxGeometry } from 'three';
import { MeshBasicMaterial } from 'three';
import { Mesh } from 'three';

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas,
        alpha: true,
      });
    renderer.setClearColor( 0xffffff, 0);
    
    const fov = 50;
    const scene = new THREE.Scene();
    const color = 0xFFFFFF;
    const intensity = 2;

    const aspect = window.innerWidth / window.innerHeight;;
    const near = 0.1;
    const far = 1000;

    const sky_loader = new CubeTextureLoader();
    const sky_texture = sky_loader.load([
        'resources/images/turf.jpg', 
        'resources/images/turf.jpg', 
        'resources/images/turf.jpg', 
        'resources/images/turf.jpg',
        'resources/images/turf.jpg', 
        'resources/images/turf.jpg'  
    ]);

    // Apply texture to the scene
    scene.background = sky_texture;

    // Create a cube geometry for the skybox
    const geometry = new BoxGeometry(1000, 1000, 1000);
    const material = new MeshBasicMaterial({ 
        color: 0xffffff, 
        envMap: sky_texture, 
        side: THREE.BackSide 
    });

    // Create a mesh and add it to the scene
    const skybox = new Mesh(geometry, material);
    scene.add(skybox);

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0,10,20);

    const controls = new OrbitControls( camera, canvas );
	controls.target.set( 0, 5, 0 );
	controls.update();

    
    var light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-100, 200, 400);
    scene.add(light);

    var ambientLight = new THREE.AmbientLight(0xffffff, 1); // Added Ambient lighting for Orbital Controls
    scene.add(ambientLight);

    var hemisphereLight = new THREE.HemisphereLight(color, 0xfffffff, 2);
    scene.add(hemisphereLight);

    
    // Eye2 (Sphere)
    const second_radius = 1.2;   
    const second_widthSegments = 10;  
    const second_heightSegments = 14;  
    const second_sphereGeometry = new THREE.SphereGeometry( second_radius, second_widthSegments, second_heightSegments );
    const second_sphereMaterial = new THREE.MeshPhongMaterial({color: 0x0097FF});
    const second_sphere = new THREE.Mesh(second_sphereGeometry, second_sphereMaterial);
    scene.add(second_sphere);
    second_sphere.position.x = 4;
    second_sphere.position.y = 6;

    // Eye1 (Sphere)
    const radius = 1.2;   
    const widthSegments = 10;  
    const heightSegments = 14;  
    const sphereGeometry = new THREE.SphereGeometry( radius, widthSegments, heightSegments );
    const sphereMaterial = new THREE.MeshPhongMaterial({color: 0x0097FF});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphere.position.x = -6;
    sphere.position.y = 6;

    // Cube + Texture Pack (Minecraft Diamond Ore)
    const boxWidth = 2;
    const boxHeight = 2;
    const boxDepth = 2;
    const boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const loader = new THREE.TextureLoader();
    const texture = loader.load('resources/images/minecraft_diamond_ore.jpg');
    texture.colorSpace = THREE.SRGBColorSpace;

    const obs_texture = loader.load('resources/images/obsidian.jpg');
    obs_texture.colorSpace = THREE.SRGBColorSpace;

    const diamond_texture = loader.load('resources/images/diamond_block.jpg');
    diamond_texture.colorSpace = THREE.SRGBColorSpace;

    const gold_texture = loader.load('resources/images/gold_block.png');
    gold_texture.colorSpace = THREE.SRGBColorSpace;

    const iron_texture = loader.load('resources/images/iron_block.jpg');
    iron_texture.colorSpace = THREE.SRGBColorSpace;

    const emerald_texture = loader.load('resources/images/emerald_block.jpg');
    emerald_texture.colorSpace = THREE.SRGBColorSpace;

    const netherite_texture = loader.load('resources/images/netherite.jpg');
    netherite_texture.colorSpace = THREE.SRGBColorSpace;

    const redstone_texture = loader.load('resources/images/redstone_block.jpg');
    netherite_texture.colorSpace = THREE.SRGBColorSpace;

    const prismarine_texture = loader.load('resources/images/prismarine_block.jpg');
    prismarine_texture.colorSpace = THREE.SRGBColorSpace;

    const boxMaterial = new THREE.MeshPhongMaterial({map: texture});
    const obsMaterial = new THREE.MeshPhongMaterial({map: obs_texture});
    const diamondMaterial = new THREE.MeshPhongMaterial({map: diamond_texture});
    const goldMaterial = new THREE.MeshPhongMaterial({map: gold_texture});
    const ironMaterial = new THREE.MeshPhongMaterial({map: iron_texture});
    const emeraldMaterial = new THREE.MeshPhongMaterial({map: emerald_texture});
    const netheriteMaterial = new THREE.MeshPhongMaterial({map: netherite_texture});
    const redstoneMaterial = new THREE.MeshPhongMaterial({map: redstone_texture});
    const prismarineMaterial = new THREE.MeshPhongMaterial({map: prismarine_texture});

    const cube = new THREE.Mesh(boxGeometry, boxMaterial);
    const cube2 = new THREE.Mesh(boxGeometry, obsMaterial);
    const cube3 = new THREE.Mesh(boxGeometry, diamondMaterial);
    const cube4 = new THREE.Mesh(boxGeometry, goldMaterial);
    const cube5 = new THREE.Mesh(boxGeometry, ironMaterial);
    const cube6 = new THREE.Mesh(boxGeometry, emeraldMaterial);
    const cube7 = new THREE.Mesh(boxGeometry, netheriteMaterial);
    const cube8 = new THREE.Mesh(boxGeometry, redstoneMaterial);
    const cube9 = new THREE.Mesh(boxGeometry, prismarineMaterial);
    const cube10 = new THREE.Mesh(boxGeometry, diamondMaterial);
    const cube11 = new THREE.Mesh(boxGeometry, goldMaterial);
    const cube12 = new THREE.Mesh(boxGeometry, ironMaterial);
    const cube13 = new THREE.Mesh(boxGeometry, emeraldMaterial);
    const cube14 = new THREE.Mesh(boxGeometry, netheriteMaterial);
    const cube15 = new THREE.Mesh(boxGeometry, redstoneMaterial);
    const cube16 = new THREE.Mesh(boxGeometry, prismarineMaterial);
    const cube17 = new THREE.Mesh(boxGeometry, goldMaterial);
    const cube18 = new THREE.Mesh(boxGeometry, diamondMaterial);
    const cube19 = new THREE.Mesh(boxGeometry, obsMaterial);
    const cube20 = new THREE.Mesh(boxGeometry, diamondMaterial);
    const cube21 = new THREE.Mesh(boxGeometry, goldMaterial);

    
    scene.add(cube);
    cube.position.y = 3;
    cube.position.x = -0.9;

    scene.add(cube2);
    cube2.position.y = 11;
    cube2.position.x = -0.9;
    cube2.scale.set(0.5, 0.5, 0.5);
    
    scene.add(cube3);
    cube3.position.y = 11;
    cube3.position.x = 3.5;
    cube3.scale.set(0.5, 0.5, 0.5);

    scene.add(cube4);
    cube4.position.y = 11;
    cube4.position.x = 7.9;
    cube4.scale.set(0.5, 0.5, 0.5);

    scene.add(cube5);
    cube5.position.y = 11;
    cube5.position.x = 12.3;
    cube5.scale.set(0.5, 0.5, 0.5);

    scene.add(cube6);
    cube6.position.y = 7;
    cube6.position.x = 12.3;
    cube6.scale.set(0.5, 0.5, 0.5);

    scene.add(cube7);
    cube7.position.y = 3;
    cube7.position.x = 12.3;
    cube7.scale.set(0.5, 0.5, 0.5);

    scene.add(cube8);
    cube8.position.y = -1;
    cube8.position.x = 12.3;
    cube8.scale.set(0.5, 0.5, 0.5);

    scene.add(cube9);
    cube9.position.y = -5;
    cube9.position.x = 12.3;
    cube9.scale.set(0.5, 0.5, 0.5);

    scene.add(cube10);
    cube10.position.y = 11;
    cube10.position.x = -5.5;
    cube10.scale.set(0.5, 0.5, 0.5);

    scene.add(cube11);
    cube11.position.y = 11;
    cube11.position.x = -9.9;
    cube11.scale.set(0.5, 0.5, 0.5);

    scene.add(cube12);
    cube12.position.y = 11;
    cube12.position.x = -14.3;
    cube12.scale.set(0.5, 0.5, 0.5);

    scene.add(cube13);
    cube13.position.y = 7;
    cube13.position.x = -14.3;
    cube13.scale.set(0.5, 0.5, 0.5);

    scene.add(cube14);
    cube14.position.y = 3;
    cube14.position.x = -14.3;
    cube14.scale.set(0.5, 0.5, 0.5);

    scene.add(cube15);
    cube15.position.y = -1;
    cube15.position.x = -14.3;
    cube15.scale.set(0.5, 0.5, 0.5);

    scene.add(cube16);
    cube16.position.y = -5;
    cube16.position.x = -14.3;
    cube16.scale.set(0.5, 0.5, 0.5);

    scene.add(cube17);
    cube17.position.y = -5;
    cube17.position.x = -9.9;
    cube17.scale.set(0.5, 0.5, 0.5);

    scene.add(cube18);
    cube18.position.y = -5;
    cube18.position.x = -5.5;
    cube18.scale.set(0.5, 0.5, 0.5);

    scene.add(cube19);
    cube19.position.y = -5;
    cube19.position.x = -0.9;
    cube19.scale.set(0.5, 0.5, 0.5);

    scene.add(cube20);
    cube20.position.y = -5;
    cube20.position.x = 3.5;
    cube20.scale.set(0.5, 0.5, 0.5);

    scene.add(cube21);
    cube21.position.y = -5;
    cube21.position.x = 7.9;
    cube21.scale.set(0.5, 0.5, 0.5);


    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();
    mtlLoader.load('resources/models/katana.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('resources/models/katana.obj', (root) => {
    root.scale.set(2.5, 1.5, 2.5);
    //root.rotation.y = 20;
    root.rotation.z = Math.PI / 2.15;
    //root.rotation.z = 10;
    root.position.set(6, -1, 0);
    scene.add(root);
    });
  });

    // Render()
    function render(time) {
        time *= 0.001;  // convert time to seconds
        
        cube.rotation.x = time;
        cube.rotation.y = time;
        cube2.rotation.x = time;
        cube2.rotation.y = time;
        cube3.rotation.x = time;
        cube3.rotation.y = time;
        cube4.rotation.x = time;
        cube4.rotation.y = time;
        cube5.rotation.x = time;
        cube5.rotation.y = time;
        cube6.rotation.x = time;
        cube6.rotation.y = time;
        cube7.rotation.x = time;
        cube7.rotation.y = time;
        cube8.rotation.x = time;
        cube8.rotation.y = time;
        cube9.rotation.x = time;
        cube9.rotation.y = time;
        cube10.rotation.x = time;
        cube10.rotation.y = time;
        cube11.rotation.x = time;
        cube11.rotation.y = time;
        cube12.rotation.x = time;
        cube12.rotation.y = time;
        cube13.rotation.x = time;
        cube13.rotation.y = time;
        cube14.rotation.x = time;
        cube14.rotation.y = time;
        cube15.rotation.x = time;
        cube15.rotation.y = time;
        cube16.rotation.x = time;
        cube16.rotation.y = time;
        cube17.rotation.x = time;
        cube17.rotation.y = time;
        cube18.rotation.x = time;
        cube18.rotation.y = time;
        cube19.rotation.x = time;
        cube19.rotation.y = time;
        cube20.rotation.x = time;
        cube20.rotation.y = time;
        cube21.rotation.x = time;
        cube21.rotation.y = time;

        sphere.rotation.x = time;
        sphere.rotation.y = time;
        second_sphere.rotation.x = time;
        //second_sphere.rotation.y = time;


        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

main();
