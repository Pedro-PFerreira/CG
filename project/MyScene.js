import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import { MyPanorama } from "./MyPanorama.js";
import { MyPlane } from "./MyPlane.js";
import { MySphere } from "./MySphere.js";
import { MyBird } from "./MyBird.js";
import { MyTail } from "./MyTail.js";
import { MyHead } from "./MyHead.js";
import { MyAnimatedBird } from "./MyAnimatedBird.js";

/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();
  }
  init(application) {
    super.init(application);

    //Animation
    this.appStartTime = Date.now();
    this.setUpdatePeriod(50);
    
    this.initCameras();
    this.initLights();

    //Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    //Bird Materiais --------------------------------
      //Penas
    this.feathers_tex = new CGFappearance(this);
    this.feathers_tex.setAmbient(1, 1, 1, 1);
    this.feathers_tex.setDiffuse(1, 1, 1, 1);
    this.feathers_tex.setSpecular(0.1, 0.1, 0.1, 1);
    this.feathers_tex.setShininess(10.0);
    this.feathers_tex.loadTexture('images/feathers.jpg');
    this.feathers_tex.setTextureWrap('REPEAT', 'REPEAT');
      //Olhos
    this.eyes_tex = new CGFappearance(this);
    this.eyes_tex.setAmbient(0, 0, 0,1.0);
    this.eyes_tex.setDiffuse(0,0,0, 1.0);
    this.eyes_tex.setSpecular(1, 1,1, 1.0);
    this.eyes_tex.setShininess(10.0);
      //Bico
    this.beak_tex = new CGFappearance(this);
    this.beak_tex.setAmbient(1, 0.647, 0,1.0);
    this.beak_tex.setDiffuse(0,0,0, 1.0);
    this.beak_tex.setSpecular(1, 1,1, 1.0);
    this.beak_tex.setShininess(10.0);

    this.birdTextures = [this.feathers_tex,this.eyes_tex,this.beak_tex];


    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.plane = new MyPlane(this,30);
    this.sphere = new MySphere(this, 30, 20);
    this.head = new MyHead(this);
    this.panorama_text = new CGFtexture(this, "images/panorama4.jpg");
    this.panorama = new MyPanorama(this, this.panorama_text, 30, 20);

    //Bird (Tests)
    this.bird = new MyAnimatedBird(this, this.birdTextures);
    //this.bird = new MyBird(this,[this.feathers_tex, this.eyes_tex, this.beak_tex]);

    this.objects = [this.sphere, this.panorama, this.bird, this.head];

    this.objectIDs = {'Sphere': 0, 'Panorama': 1, 'Bird': 2, 'Bird + Panorama': 3};

    //Objects connected to MyInterface
    this.displayAxis = false;
    this.scaleFactor = 1;
    this.selectedObject = 2;
    this.displayObject = true;
    this.displayNormals = false;

    this.enableTextures(true);
    

this.texture = new CGFtexture(this, "images/terrain.jpg");
this.appearance = new CGFappearance(this);
this.appearance.setTexture(this.texture);
this.appearance.setTextureWrap('REPEAT', 'REPEAT');

this.sphere_appearance = new CGFappearance(this);
this.sphere_text = new CGFtexture(this, 'images/earth.jpg');

this.sphere_appearance.setEmission(0.4, 0.4, 0.4, 1);
this.sphere_appearance.setShininess(300);
this.sphere_appearance.setTexture(this.sphere_text);
this.sphere_appearance.setTextureWrap('REPEAT', 'REPEAT');

  }
  initLights() {
    this.lights[0].setPosition(15, 0, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      0.9,
      0.1,
      1000,
      //CAMERA VALUES FOR TESTING BIRD
      vec3.fromValues(10,2,3),
      vec3.fromValues(0,0,0)
      //CORRECT VALUES BELOW
      //vec3.fromValues(50, 10, 15),
      //vec3.fromValues(0, 0, 0)
    );
  }
  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }

  updateObjectComplexity(){
    this.objects[this.selectedObject].updateBuffers(this.objectComplexity);
  }

  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    this.pushMatrix();

    // Draw axis
    if (this.displayAxis) this.axis.display();

    //Draw Head
    if (this.selectedObject == 3){
      this.bird.display();
      this.panorama.display();
    }
    
    //Draw Sphere
    if (this.selectedObject == 0){
  
      this.sphere_appearance.apply()
      this.objects[this.selectedObject].display();
      this.popMatrix();
    }

    //Draw Panorama
    if (this.selectedObject == 1){

      this.objects[this.selectedObject].display();
      this.popMatrix();
    }

    //Draw Bird
    if (this.selectedObject == 2){

      this.objects[this.selectedObject].display();
      this.popMatrix();
    }

    if (this.displayNormals){
      this.objects[this.selectedObject].enableNormalViz();
    }
    else{
      this.objects[this.selectedObject].disableNormalViz();
    }

    // ---- BEGIN Primitive drawing section

    this.pushMatrix();
    this.appearance.apply();
    this.translate(0,-100,0);
    this.scale(400,400,400);
    this.rotate(-Math.PI/2.0,1,0,0);
    this.plane.display();
    this.popMatrix();

    // ---- END Primitive drawing section
  }

  update(t){
    var timeSinceAppStart= (t-this.appStartTime)/1000.0; //in seconds
    this.bird.update(timeSinceAppStart);
    this.bird.display();
  }
}
