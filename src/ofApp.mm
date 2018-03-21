#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup()
{
    ofBackground(0);
    ofSetFrameRate(60);
    ofDisableBlendMode();
    
    shaderBlurX.load("shadersES2/shaderBlurX");
    shaderBlurY.load("shadersES2/shaderBlurY");
    
    fboBlurOnePass.allocate(ofGetWidth(), ofGetHeight(), GL_RGBA);
    fboBlurTwoPass.allocate(ofGetWidth(), ofGetHeight(), GL_RGBA);
    baseFbo.allocate(ofGetWidth(), ofGetHeight(), GL_RGBA);
}

//--------------------------------------------------------------
void ofApp::update()
{
    //----------------------------------------------------------
    // draw stuff to fbo
    baseFbo.begin();
    {
        ofClear(0);
        ofDrawCircle(ofGetWidth()/2, ofGetHeight()/2, 20 + ofGetFrameNum() % 50);
    }
    baseFbo.end();
}

//--------------------------------------------------------------
void ofApp::draw()
{
    float blur = ofMap(mouseX, 0, ofGetWidth(), 0.0, 1.0, true);
    //----------------------------------------------------------
    // Pass1
    fboBlurOnePass.begin();
    {
        ofClear(0);
        shaderBlurX.begin();
        {
            shaderBlurX.setUniform1f("blurAmnt", blur);
            baseFbo.draw(0, 0);
        }
        shaderBlurX.end();
    }
    fboBlurOnePass.end();
    
    //----------------------------------------------------------
    // Pass2
    fboBlurTwoPass.begin();
    {
        ofClear(0);
        shaderBlurY.begin();
        {
            shaderBlurY.setUniform1f("blurAmnt", blur);
            fboBlurOnePass.draw(0, 0);
        }
        shaderBlurY.end();
    }
    fboBlurTwoPass.end();
    
    //----------------------------------------------------------
    // draw output stuff
    // blur fbo
    fboBlurTwoPass.draw(0, 0);
    ofPushStyle();
    {
        ofEnableBlendMode(OF_BLENDMODE_ADD);
        // base fbo
        baseFbo.draw(0, 0);
    }
    ofPopStyle();
    
    // draw gui
    ofDrawBitmapStringHighlight("Move mouse to X axis to blur", 20, 20);
}
