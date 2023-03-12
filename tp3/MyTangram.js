import { CGFappearance, CGFobject } from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleBig } from './MyTriangleBig.js';
import { MyTriangleSmall } from './MyTriangleSmall.js';
import { MyUnitCube } from './MyUnitCube.js';

/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initMaterials(this.scene);
        //Initialize scene objects
        this.square = new MyDiamond(this.scene);
        this.blueTriangle = new MyTriangleBig(this.scene);
        this.greenTriangle = new MyTriangleBig(this.scene);
        this.lightBlueTriangle = new MyTriangle(this.scene);
        //this.unitCube = new MyUnitCube(this.scene);
        this.redTriangle = new MyTriangleSmall(this.scene);
        this.purpleTriangle = new MyTriangleSmall(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);

    }

    initMaterials(scene){

        this.red = new CGFappearance(scene);
        this.red.setAmbient(1, 0, 0,1.0);
        this.red.setDiffuse(0,0,0, 1.0);
        this.red.setSpecular(1, 1,1, 1.0);
        this.red.setShininess(10.0);

        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(0.627, 0.125, 0.941,1.0);
        this.purple.setDiffuse(0,0,0, 1.0);
        this.purple.setSpecular(1, 1,1, 1.0);
        this.purple.setShininess(10.0);


        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(1, 0.75, 0.8,1.0);
        this.pink.setDiffuse(0,0,0, 1.0);
        this.pink.setSpecular(1, 1,1, 1.0);
        this.pink.setShininess(10.0);


        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(1, 0.647, 0,1.0);
        this.orange.setDiffuse(0,0,0, 1.0);
        this.orange.setSpecular(1, 1,1, 1.0);
        this.orange.setShininess(10.0);


        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0, 1, 1,1.0);
        this.blue.setDiffuse(0,0,0, 1.0);
        this.blue.setSpecular(1, 1,1, 1.0);
        this.blue.setShininess(10.0);


        this.green = new CGFappearance(scene);
        this.green.setAmbient(0.196, 0.804, 0.196,1.0);
        this.green.setDiffuse(0,0,0, 1.0);
        this.green.setSpecular(1, 1,1, 1.0);
        this.green.setShininess(10.0);


        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(1, 1, 0,1.0);
        this.yellow.setDiffuse(0,0,0, 1.0);
        this.yellow.setSpecular(1, 1,1, 1.0);
        this.yellow.setShininess(10.0);

    }

    
    display() {
        
        /*
        var angle = 45 * (Math.PI / 180);
        var rotateCube = [
            Math.cos(angle), -Math.sin(angle), 0, 0,
            Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]


        var translateCube = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0.5, 0, -0.5, 1
		];*/

        var angle = -20;
        var rotateSquare = [
            Math.cos(angle), - Math.sin(angle), 0, 0,
            Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]

        var translateSquare = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 1, 0, 1
            ];

        var translateBlueTriangle = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -0.2, -2.07, 0, 1
            ];

        angle = - 90 * (Math.PI / 180);
        var translateGreenTriangle = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -0.3, -2.06, 0, 1
        ]
        var rotateGreenTriangle = [
            Math.cos(angle), - Math.sin(angle), 0, 0,
            Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]

        var translateLightBlueTriangle = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0.5,0.5,0,1
        ]

        var translateLightBlueTriangle2 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            -0.5,-0.5,0,1
        ]

        var translateLightBlueTriangle3 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            2.12,2.5,0,1
        ]

        angle = 225 * (Math.PI / 180);
        var rotateLightBlueTriangle = [
            Math.cos(angle), - Math.sin(angle), 0, 0,
            Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]
    
        var translateRedTriangle1 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,-0.5,0,1
        ]

        var translateRedTriangle2 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0.4,4,0,1
        ]

        angle = - 90 * (Math.PI / 180);
        var rotateRedTriangle = [
            Math.cos(angle), - Math.sin(angle), 0, 0,
            Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]

        var translatePurpleTriangle1 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            1,0,0,1
        ]

        var translatePurpleTriangle2 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0.9,2.8,0,1
        ]

        angle = - 150 * (Math.PI / 180);
        var rotatePurpleTriangle = [
            Math.cos(angle), - Math.sin(angle), 0, 0,
            Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]

        angle = 225 * (Math.PI / 180);
        var rotateParallelogram = [
            Math.cos(angle), - Math.sin(angle), 0, 0,
            Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]
        var translateParallelogram1 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,-3.5,0,1
        ]
        var translateParallelogram2 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            -2,0,0,1
        ]
        var reflectParallelogram = [
            -1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,0,1
        ]

/*
        this.scene.pushMatrix();
        this.scene.multMatrix(rotateCube);        
		this.scene.multMatrix(translateCube);
		this.unitCube.display();
		this.scene.popMatrix();
*/
        this.scene.pushMatrix();
        this.scene.multMatrix(rotateSquare);
        this.scene.multMatrix(translateSquare);
        //this.green.apply();
        this.scene.customMaterial.apply();
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translateBlueTriangle);
        this.blue.apply();       
        this.blueTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(rotateGreenTriangle);
        this.scene.multMatrix(translateGreenTriangle);        
        this.orange.apply();
        this.greenTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translateLightBlueTriangle3);
        this.scene.multMatrix(translateLightBlueTriangle2);
        this.scene.multMatrix(rotateLightBlueTriangle);
        this.scene.multMatrix(translateLightBlueTriangle);
        this.pink.apply();
        this.lightBlueTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translateRedTriangle2);
        this.scene.multMatrix(rotateRedTriangle);
        this.scene.multMatrix(translateRedTriangle1);
        this.red.apply();
        this.redTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translatePurpleTriangle2);
        this.scene.multMatrix(rotatePurpleTriangle);
        this.scene.multMatrix(translatePurpleTriangle1);
        this.purple.apply();
        this.purpleTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translateParallelogram2);
        this.scene.multMatrix(reflectParallelogram);
        this.scene.multMatrix(translateParallelogram1);
        this.scene.multMatrix(rotateParallelogram);
        this.yellow.apply();
        this.parallelogram.display();
        this.scene.popMatrix();
     }
}