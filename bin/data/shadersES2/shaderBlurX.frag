precision highp float;
precision highp sampler2D;

uniform sampler2D tex0;
uniform float blurAmnt;
varying vec2 texCoordVarying;

void main()
{
    // dirty one
    //======================================
    // vec4 color = vec4(0.0);
	
    // color += 1.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -4.0 * 0.01, 0.0));
    // color += 2.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -3.0 * 0.01, 0.0));
    // color += 3.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -2.0 * 0.01, 0.0));
    // color += 4.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -1.0 * 0.01, 0.0));
    
    // color += 5.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 0.01, 0.0));
	
    // color += 4.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 1.0 * 0.01, 0.0));
    // color += 3.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 2.0 * 0.01, 0.0));
    // color += 2.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 3.0 * 0.01, 0.0));
    // color += 1.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 4.0 * 0.01, 0.0));
	
    // color /= 25.0;
    
    // gl_FragColor = color;

    //======================================

    vec4 color = vec4(0.0);
	
    color += 1.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -9.0 * 0.01, 0.0));
    color += 2.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -8.0 * 0.01, 0.0));
    color += 3.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -7.0 * 0.01, 0.0));
    color += 4.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -6.0 * 0.01, 0.0));
    color += 5.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -5.0 * 0.01, 0.0));
    color += 6.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -4.0 * 0.01, 0.0));
    color += 7.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -3.0 * 0.01, 0.0));
    color += 8.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -2.0 * 0.01, 0.0));
    color += 9.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * -1.0 * 0.01, 0.0));
    
    color += 10.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 0.01, 0.0));

    color += 9.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 1.0 * 0.01, 0.0));
    color += 8.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 2.0 * 0.01, 0.0));
    color += 7.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 3.0 * 0.01, 0.0));
    color += 6.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 4.0 * 0.01, 0.0));
    color += 5.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 5.0 * 0.01, 0.0));
    color += 4.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 6.0 * 0.01, 0.0));
    color += 3.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 7.0 * 0.01, 0.0));
    color += 2.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 8.0 * 0.01, 0.0));
    color += 1.0 * texture2D(tex0, texCoordVarying + vec2(blurAmnt * 9.0 * 0.01, 0.0));
	
    color /= 100.0;
    
    gl_FragColor = color;
}