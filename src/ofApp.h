#pragma once

#include "ofxiOS.h"

class ofApp : public ofxiOSApp
{
public:
    void setup();
    void update();
    void draw();
    
    ofShader shaderBlurX;
    ofShader shaderBlurY;
    
    ofFbo baseFbo;
    ofFbo fboBlurOnePass;
    ofFbo fboBlurTwoPass;
};


