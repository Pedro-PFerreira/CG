attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
varying float offset;
uniform sampler2D uSampler2;

void main() {

	vTextureCoord = aTextureCoord;

	vec3 height = 0.3 * aVertexNormal * (texture2D(uSampler2, vTextureCoord).b);

	offset = texture2D(uSampler2, vTextureCoord).b;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + height, 1.0);
}