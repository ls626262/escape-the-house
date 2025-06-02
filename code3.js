gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.GDyou_9595winObjects1= [];
gdjs.EndCode.GDyou_9595winObjects2= [];
gdjs.EndCode.GDbackgroundObjects1= [];
gdjs.EndCode.GDbackgroundObjects2= [];


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start menu", false);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDyou_9595winObjects1.length = 0;
gdjs.EndCode.GDyou_9595winObjects2.length = 0;
gdjs.EndCode.GDbackgroundObjects1.length = 0;
gdjs.EndCode.GDbackgroundObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
gdjs.EndCode.GDyou_9595winObjects1.length = 0;
gdjs.EndCode.GDyou_9595winObjects2.length = 0;
gdjs.EndCode.GDbackgroundObjects1.length = 0;
gdjs.EndCode.GDbackgroundObjects2.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
