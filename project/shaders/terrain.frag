#ifdef GL_ES
precision highp float;
#endif

varying vec2 aTextureCoord;
varying vec2 vAltCoord;
uniform sampler2D uSampler;

void main() {

    vec4 color1 = texture2D(uSampler, aTextureCoord);

    vec4 color2 = texture2D(uSampler,vAltCoord);

    vec4 textColor = color1;

    vec4 altColor = color2;

    textColor.r = color1.r * 0.700 + color1.g * 0.700 + color1.b * 0.700;

    textColor.g = color1.r * 0.700 + color1.g * 0.700 + color1.b * 0.700;

    textColor.b = color1.r * 0.700 + color1.g * 0.700 + color1.b * 0.700;

    altColor.r = color2.r * 0.300 + color2.g * 0.300+ color2.b * 0.300;

    altColor.g = color2.r * 0.300 + color2.g * 0.300+ color2.b * 0.300;

    altColor.b = color2.r * 0.300 + color2.g * 0.300+ color2.b * 0.300;

    gl_FragColor = textColor + altColor;

}

