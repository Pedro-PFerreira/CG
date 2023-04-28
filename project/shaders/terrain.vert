attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

void main() {

	vTextureCoord = aTextureCoord;
	vec3 offset=vec3(0.0,0.0,0.0);

	offset= 0.1*aVertexNormal* (texture2D(uSampler2, vTextureCoord).b - 0.4);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}