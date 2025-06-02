gdjs.Start_32menuCode = {};
gdjs.Start_32menuCode.localVariables = [];
gdjs.Start_32menuCode.GDmade_9595by_9595textObjects1= [];
gdjs.Start_32menuCode.GDmade_9595by_9595textObjects2= [];
gdjs.Start_32menuCode.GDbackgroundObjects1= [];
gdjs.Start_32menuCode.GDbackgroundObjects2= [];
gdjs.Start_32menuCode.GDGAME_9595NAMEObjects1= [];
gdjs.Start_32menuCode.GDGAME_9595NAMEObjects2= [];
gdjs.Start_32menuCode.GDPlay_9595buttonObjects1= [];
gdjs.Start_32menuCode.GDPlay_9595buttonObjects2= [];
gdjs.Start_32menuCode.GDNewTextObjects1= [];
gdjs.Start_32menuCode.GDNewTextObjects2= [];
gdjs.Start_32menuCode.GDgoal_9595infoObjects1= [];
gdjs.Start_32menuCode.GDgoal_9595infoObjects2= [];


gdjs.Start_32menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Dystopian     FREE DOWNLOAD   Phycological Horror Soundtrack   Chilling Loop (OST).mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_button"), gdjs.Start_32menuCode.GDPlay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32menuCode.GDPlay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32menuCode.GDPlay_9595buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32menuCode.GDPlay_9595buttonObjects1[k] = gdjs.Start_32menuCode.GDPlay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Start_32menuCode.GDPlay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click sound.MP3", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 1", false);
}}

}


};

gdjs.Start_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32menuCode.GDmade_9595by_9595textObjects1.length = 0;
gdjs.Start_32menuCode.GDmade_9595by_9595textObjects2.length = 0;
gdjs.Start_32menuCode.GDbackgroundObjects1.length = 0;
gdjs.Start_32menuCode.GDbackgroundObjects2.length = 0;
gdjs.Start_32menuCode.GDGAME_9595NAMEObjects1.length = 0;
gdjs.Start_32menuCode.GDGAME_9595NAMEObjects2.length = 0;
gdjs.Start_32menuCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Start_32menuCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Start_32menuCode.GDNewTextObjects1.length = 0;
gdjs.Start_32menuCode.GDNewTextObjects2.length = 0;
gdjs.Start_32menuCode.GDgoal_9595infoObjects1.length = 0;
gdjs.Start_32menuCode.GDgoal_9595infoObjects2.length = 0;

gdjs.Start_32menuCode.eventsList0(runtimeScene);
gdjs.Start_32menuCode.GDmade_9595by_9595textObjects1.length = 0;
gdjs.Start_32menuCode.GDmade_9595by_9595textObjects2.length = 0;
gdjs.Start_32menuCode.GDbackgroundObjects1.length = 0;
gdjs.Start_32menuCode.GDbackgroundObjects2.length = 0;
gdjs.Start_32menuCode.GDGAME_9595NAMEObjects1.length = 0;
gdjs.Start_32menuCode.GDGAME_9595NAMEObjects2.length = 0;
gdjs.Start_32menuCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Start_32menuCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Start_32menuCode.GDNewTextObjects1.length = 0;
gdjs.Start_32menuCode.GDNewTextObjects2.length = 0;
gdjs.Start_32menuCode.GDgoal_9595infoObjects1.length = 0;
gdjs.Start_32menuCode.GDgoal_9595infoObjects2.length = 0;


return;

}

gdjs['Start_32menuCode'] = gdjs.Start_32menuCode;
