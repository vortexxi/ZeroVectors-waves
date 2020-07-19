$(document).ready(function(){
	
  $('a[data-class]').click(function () {
    updateNavbarClass($(this).attr('data-class'));
  });

  updateNavbarClass('navbar-fixed-left');
			
				$('.animsition-overlay').animsition({
			 inClass: 'overlay-slide-in-top',
			 outClass: 'overlay-slide-out-bottom',
			 overlay : true,
			 overlayClass : 'animsition-overlay-slide',
			 overlayParentElement : 'body'
    		});
			
			$('[data-toggle="tooltip"]').tooltip(); 
			 
			 //init scrollmagic
			 var controller = new ScrollMagic.Controller();
			 
			 $('.divCol').each(function() {
                var myScene = new ScrollMagic.Scene({
				 triggerElement: this,	
				 duration: '90%'
				 })
				 .setClassToggle(this, 'fade-in')
				 .addTo(controller); 
            });
			
			
		});
		
		function updateNavbarClass(className) {
  $('nav')
    .removeClass(function (index, css) {
      return (css.match(/(^|\s)navbar-fixed-\S+/g) || []).join(' ');
    })
    .addClass(className);

  $('a[data-class]').removeClass('active').parent('li').removeClass('active');
  $('a[data-class="'+className+'"]').addClass('active').parent('li').addClass('active');

  fixBodyPadding(className);

}

function fixBodyPadding(className) {
  if (/navbar-fixed-(left|right)/.test(className)) {
    $('body').removeAttr('style');
    if (className === 'navbar-fixed-right') {
      $('body').css('paddingLeft', 0);
    } else {
      $('body').css('paddingRight', 0);
    }
  } else {
    $('body').css({
      "padding-right": 0,
      "padding-left": 0,
      "padding-top": '70px'
    });
  }
}	
			
function init() {

        var stats = initStats();

        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        var camera = new THREE.PerspectiveCamera(16, window.innerWidth / window.innerHeight, 0.1, 1000);

        // create a render and set the size
        var webGLRenderer = new THREE.WebGLRenderer();
        webGLRenderer.setClearColor(new THREE.Color(0xff9b71, 1.0));
        webGLRenderer.setSize(window.innerWidth, window.innerHeight);
		webGLRenderer.setSize(400, 400);
        webGLRenderer.shadowMapEnabled = true;

        // position and point the camera to the center of the scene
        camera.position.x = 130;
        camera.position.y = 40;
        camera.position.z = 50;
        camera.lookAt(scene.position);
        scene.add(camera);

        // add spotlight for the shadows
        var spotLight = new THREE.DirectionalLight(0xffffff);
        spotLight.position.set(30, 40, 50);
        spotLight.intensity = 1;
        scene.add(spotLight);

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);
		
        // call the render function
        var step = 0;


        // setup the control gui
     //   var controls = new function () {
            // we need the first child, since it's a multimaterial


     //   };

        var gui = new dat.GUI();
        var mesh;

        var loader = new THREE.OBJLoader();
		//loader.load('figura2.obj', function (loadedMesh) {
        loader.load("ZeroVectors.obj", function (loadedMesh) {
            var material = new THREE.MeshPhongMaterial({color: 0x8a9597});
			material.side = THREE.DoubleSide;
			
            // loadedMesh is a group of meshes. For
            // each mesh set the material, and compute the information
            // three.js needs for rendering.
            loadedMesh.children.forEach(function (child) {
                child.material = material;
                child.geometry.computeFaceNormals();
                child.geometry.computeVertexNormals();
            });

            mesh = loadedMesh;
            loadedMesh.scale.set(5, 5, 5);
            loadedMesh.rotation.x = -0.5;
			loadedMesh.rotation.y = -0.5;
			loadedMesh.rotation.z = -0.5;
			
            scene.add(loadedMesh);
        });


        render();


        function render() {
            stats.update();

            if (mesh) {
                mesh.rotation.y += 0.006;
                mesh.rotation.x += 0.006;
//                mesh.rotation.y+=0.006;
            }


            // render using requestAnimationFrame
            requestAnimationFrame(render);
            webGLRenderer.render(scene, camera);
        }

       function initStats() {

            var stats = new Stats();
            stats.setMode(0); // 0: fps, 1: ms

            // Align top-left
           stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';

            document.getElementById("Stats-output").appendChild(stats.domElement);

            return stats;
        }
    }
    window.onload = init;