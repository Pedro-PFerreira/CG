import {CGFobject} from '../lib/CGF.js';
/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPrism extends CGFobject {
    constructor(scene, slices, stacks){

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

        for (var i = 0; i < this.stacks; i++){
            
            
            var norm_angle = angle/2; //Usam a mesma normal por face, logo pode ser o ângulo médio

            for (var j = 0; j < this.slices; j++){

                var h = 1;

                //Enviar as coordenadas de cada vértice. O ângulo aumenta 360º a dividir pelo número de faces, devido à inscrição no cilindro.
                this.vertices.push(Math.cos(angle), Math.sin(angle + (2*Math.PI / this.slices)), i*h);
                this.vertices.push(Math.cos(angle + (2*Math.PI / this.slices)), Math.sin(angle), (i+1)*h);
                this.vertices.push(Math.cos(angle), Math.sin(angle), (i+1)*h);
                this.vertices.push(Math.cos(angle + (2*Math.PI / this.slices)), Math.sin(angle + (2*Math.PI / this.slices)), (i+1)*h);


                //Enviar os vetores normais
                this.normals.push(Math.cos(norm_angle), Math.sin(norm_angle), 0);
                this.normals.push(Math.cos(norm_angle), Math.sin(norm_angle), 0);
                this.normals.push(Math.cos(norm_angle), Math.sin(norm_angle), 0);
                this.normals.push(Math.cos(norm_angle), Math.sin(norm_angle), 0);

                //Enviar os índices. Valores múltiplos com números de quatro (j*4), pois as faces são retangulares (4 vértices)
                this.indices.push((j*4+1)+(this.slices*4*i), (j*4+2)+(this.slices*4*i), (j*4+0)+(this.slices*4*i));
                this.indices.push((j*4+0)+(this.slices*4*i), (j*4+3)+(this.slices*4*i), (j*4+1)+(this.slices*4*i));


            }
            
            angle += (2*Math.PI / this.slices);
            norm_angle += (2*Math.PI / this.slices);

        }



/*
        for (var i = 0; i <=2*Math.PI; i += angle){
            this.vertices.push(Math.cos(i));
            this.vertices.push(0);
            this.vertices.push(Math.sin(i));

            this.vertices.push(Math.cos(i));
            this.vertices.push(2);
            this.vertices.push(Math.sin(i));
        }

        for (var i = 0; i <= this.slices - 2; i += 2){
            this.indices.push(i);
            this.indices.push(i+1);
            this.indices.push(i+2);


            this.indices.push(i);
            this.indices.push(i+2);
            this.indices.push(i+1);
        }
*/
		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

    updateBuffers(complextity){
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}