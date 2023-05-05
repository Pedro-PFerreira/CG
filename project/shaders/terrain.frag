#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying float offset;
uniform sampler2D uSampler1;
uniform sampler2D uSampler3;

void main() {

    vec4 color1 = texture2D(uSampler3, vTextureCoord);

    vec4 color2 = texture2D(uSampler1, vec2(0, 1.0 - offset));

    gl_FragColor = 0.70 * color1 + 0.30 * color2;
}

