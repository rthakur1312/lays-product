import {GLTFLoader} from "./GLTFLoader.js";
import { Loader } from "./three.module.js";
import {OrbitControls} from "./OrbitControls.js";


let scene, camera, renderer, cube, light, mx, my, controls;
let isMouseDown = false;


const div = document.getElementById('product-img-bg');



     scene = new THREE.Scene();

//  camera = new THREE.PerspectiveCamera(75, 
//     window.innerWidth/window.innerHeight,
//     0.1,
//     1000
//     );

camera = new THREE.PerspectiveCamera(85, 800 / 600, 1, 5000 );
// camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
camera.rotation.y = 45/180*Math.PI;
camera.position.x = -10;
camera.position.y = 100;
camera.position.z = 1000;
//     camera.position.x = -10;
//     camera.position.y = 200;
//     camera.position.z = 800;
// camera.lookAt(scene.position);


     renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
      

    renderer.setSize(800,600 );
    
    

    div.appendChild(renderer.domElement);

    // document.body.appendChild(renderer.domElement);

    let loader = new GLTFLoader();

    let obj;
    loader.load("scene.gltf", function(gltf){
        obj = gltf.scene;
        scene.add(gltf.scene);
        obj.scale.set(4,4,4);
    });
    // loader.load("scene.gltf", function(gltf){
    //     obj = gltf.scene;
    //     scene.add(gltf.scene);
    //     obj.scale.set(3.8,3.8,3.8);
    // });

    // scene.background = new THREE.Color(0xF7CE41);

    light = new THREE.HemisphereLight(0XFFFFFF, 0X000000, 2);

  

    // const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    // // const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
    // const texture = new THREE.TextureLoader().load('textures/Badge_baseColor.png');
    //  const material = new THREE.MeshBasicMaterial( {map:texture} );
    // cube = new THREE.Mesh( geometry, material );
    // light = new THREE.HemisphereLight(0XFFFFFF, 0X000000, 1);

    
    scene.add(light);

    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false;
    // camera.position.set(0, 100, 800);
    

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

        function onMouseDown(){
            isMouseDown = true;
        }

        function onMouseUp(){
            isMouseDown = false;
        }

    


    // mx = 0;
    //      my = 0;

    //     function saveMouse(event) {
    //         mx = event.clientX;
    //         my = event.clientY;
    //     }

    //     document.onmousemove = saveMouse;

    // function render() {
    //     if (resize(renderer)) {
    //         camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //         camera.updateProjectionMatrix();
    //     }
    //     renderer.render(scene, camera);
    //     requestAnimationFrame(render);
    // }
    
    // function resize(renderer) {
    //     const canvas = renderer.domElement;
    //     const width = canvas.clientWidth;
    //     const height = canvas.clientHeight;
    //     const needResize = canvas.width !== width || canvas.height !== height;
    //     if (needResize) {
    //         renderer.setSize(width, height, false);
    //     }
    //     return needResize;
    // }
    
    
    // window.addEventListener( 'resize', function() {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    
    //     renderer.setSize( window.innerWidth, window.innerHeight )
    // })


         


    function animate() {
        requestAnimationFrame(animate);
        if(!isMouseDown) {
        obj.rotation.y += 0.01;
        controls.reset();
        // cube.rotation.y = mx/500 ;
        // cube.rotation.x = my/500;
        }
        

        renderer.render(scene, camera);
    }

    // function onWindowResize() {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight);

    // }

    // window.addEventListener('resize', onWindowResize, false);

    animate();
    
