gdjs.jumpscareCode = {};
gdjs.jumpscareCode.localVariables = [];
gdjs.jumpscareCode.GDjumpscareObjects1= [];
gdjs.jumpscareCode.GDjumpscareObjects2= [];


gdjs.jumpscareCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("jumpscare"), gdjs.jumpscareCode.GDjumpscareObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "fuzzy-jumpscare-80560.mp3", false, 1000, 1);
}{for(var i = 0, len = gdjs.jumpscareCode.GDjumpscareObjects1.length ;i < len;++i) {
    gdjs.jumpscareCode.GDjumpscareObjects1[i].setVolume(9999999);
}
}{for(var i = 0, len = gdjs.jumpscareCode.GDjumpscareObjects1.length ;i < len;++i) {
    gdjs.jumpscareCode.GDjumpscareObjects1[i].play();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "restart_countdown");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "restart_countdown") >= 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start menu", false);
}}

}


};

gdjs.jumpscareCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.jumpscareCode.GDjumpscareObjects1.length = 0;
gdjs.jumpscareCode.GDjumpscareObjects2.length = 0;

gdjs.jumpscareCode.eventsList0(runtimeScene);
gdjs.jumpscareCode.GDjumpscareObjects1.length = 0;
gdjs.jumpscareCode.GDjumpscareObjects2.length = 0;


return;

}

gdjs['jumpscareCode'] = gdjs.jumpscareCode;
