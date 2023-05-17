import {CGFappearance,CGFobject} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';
/**
 * MyBillboard
 * @constructor
 * @param {MyScene} scene - Reference to MyScene object
 * @param {Array} coords - Array of texture coordinates (optional)
 */
export class MyBillboard extends CGFobject {
	constructor(scene, x,y,z) {
		super(scene);

        this.quad = new MyQuad(scene);
		
        this.x = x;
        this.y = y;
        this.z = z;

        this.textureIndex = this.getRandomIntInclusive(1,3);

        console.log(this.textureIndex);

        this.initMaterials();
        this.display();
	}

    initMaterials(){
        this.billboardTexture1 = new CGFappearance(this.scene);
        this.billboardTexture1.setEmission(1,1,1,1);
        this.billboardTexture1.setShininess(20.0);
        this.billboardTexture1.loadTexture('images/billboardtree.png');
        this.billboardTexture1.setTextureWrap('REPEAT', 'REPEAT');

        this.billboardTexture2 = new CGFappearance(this.scene);
        this.billboardTexture2.setEmission(1,1,1,1);
        this.billboardTexture2.setShininess(20.0);
        this.billboardTexture2.loadTexture('images/billboardtree_2.png');
        this.billboardTexture2.setTextureWrap('REPEAT', 'REPEAT');

        this.billboardTexture3 = new CGFappearance(this.scene);
        this.billboardTexture3.setEmission(1,1,1,1);
        this.billboardTexture3.setShininess(20.0);
        this.billboardTexture3.loadTexture('images/billboardtree_3.png');
        this.billboardTexture3.setTextureWrap('REPEAT', 'REPEAT');

    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    display(){

        //Quad's Normal vector 
        let quad_normals = [0,0,1];

        // Camera position vector;
        let camera_pos = [this.scene.camera.position[0], 0, this.scene.camera.position[2]];        

        let magnitude = Math.sqrt(camera_pos[0]*camera_pos[0] + camera_pos[2]*camera_pos[2]);

        camera_pos = [camera_pos[0] / magnitude, 0, camera_pos[2] / magnitude];

        let angle = Math.acos((vec3.dot(quad_normals, camera_pos))* (Math.PI/180));
        let rot_axis = [0,0,1];

        vec3.cross(rot_axis, quad_normals, camera_pos);
        this.scene.pushMatrix();
        this.scene.scale(10, 10, 10);
        this.scene.translate(this.x,this.y,this.z);
        this.scene.rotate(angle, rot_axis[0], rot_axis[1], rot_axis[2]);

        if (this.textureIndex == 1){
            this.billboardTexture1.apply();
        }
        else if (this.textureIndex == 2){
            this.billboardTexture2.apply();
        }
        else{
            this.billboardTexture3.apply();
        }
        this.quad.display();
        this.scene.popMatrix();
    }

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}

    updateBuffers(){
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

