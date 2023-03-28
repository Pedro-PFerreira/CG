attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float normScale;
uniform float timeFactor;

varying vec4 vet_pos;
varying vec4 normal;

void main() {

    vec3 offset = vec3(sin(timeFactor), 0.0, 0.0);
    
    vec4 vertex = vec4(aVertexPosition + offset, 1.0);

	gl_Position = uPMatrix * uMVMatrix * vertex;

    normal = vec4(aVertexNormal, 1.0);

    vet_pos = gl_Position / 10.0;

}