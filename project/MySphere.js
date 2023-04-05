import {CGFobject} from '../lib/CGF.js';
/**
 * MySphere
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MySphere extends CGFobject {
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
        this.textCoords = [];

        var index = 0;

        for (var i = 0; i < this.stacks; i++){
            var teta = j *2*Math.PI/this.stacks;

            var sin_teta = Math.sin(teta);
            var cos_teta = Math.cos(teta);
            for(var j = 0; j < this.slices; j++){

                var alpha = i * 2*Math.PI / this.slices;

                var sin_alpha = Math.sin(alpha);
                var cos_alpha = Math.cos(alpha)

                this.vertices.push(sin_teta*sin_alpha, cos_alpha, cos_teta*sin_alpha);

                this.indices.push(index++, index++,index++);
                this.indices.push(index--,index--,index++);
                index += 2;
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
        //this.slices = 4 + Math.round(8 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}