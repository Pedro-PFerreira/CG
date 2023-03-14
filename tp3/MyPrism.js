import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPrism extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);

        this.slices = slices;
        this.stacks = stacks;

		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [];
        this.indices = [];
        this.normals = [];

        var angle = 0;
        var var_inc = 2*Math.PI/this.slices;

        for (var i = 0; i < this.stacks; i++){
            var normalanglele = var_inc/2;
            for(var j = 0; j < this.slices; j++){

                var height = 1;

                var sin_a=Math.sin(angle);
                var sin_aa=Math.sin(angle+var_inc);
                var cos_a=Math.cos(angle);
                var cos_aa=Math.cos(angle+var_inc);

                this.vertices.push(cos_a, sin_a, i*height);
                this.vertices.push(cos_aa, sin_aa, (i+1)*height);
                this.vertices.push(cos_a, sin_a, (i+1)*height);
                this.vertices.push(cos_aa, sin_aa, i*height);

                this.normals.push(Math.cos(normalanglele), Math.sin(normalanglele), 0);
                this.normals.push(Math.cos(normalanglele), Math.sin(normalanglele), 0);
                this.normals.push(Math.cos(normalanglele), Math.sin(normalanglele), 0);
                this.normals.push(Math.cos(normalanglele), Math.sin(normalanglele), 0);

                this.indices.push((j*4+1)+(this.slices*4*i), (j*4+2)+(this.slices*4*i), (j*4+0)+(this.slices*4*i));
                this.indices.push((j*4+0)+(this.slices*4*i), (j*4+3)+(this.slices*4*i), (j*4+1)+(this.slices*4*i));


                angle += var_inc;
                normalanglele += var_inc;
            }
        }

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangleles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
    /**
     * Called when user interacts with GUI to change object's complexity.
     * @param {integer} complexity - changes number of slices
    */ 
    updateBuffers(complexity){
        this.slices = 4 + Math.round(8 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}