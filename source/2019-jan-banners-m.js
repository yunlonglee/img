(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2019_jan_banners_m_atlas_", frames: [[174,1158,7,7],[156,1142,14,14],[126,1172,30,9],[126,1142,28,28],[158,1158,14,14],[158,1174,15,5],[172,1142,14,14],[0,0,915,1140],[0,1142,124,124]]}
];


// symbols:



(lib.右上小紅點上下移動 = function() {
	this.initialize(ss["2019_jan_banners_m_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.右上小紅點上下移動_1 = function() {
	this.initialize(ss["2019_jan_banners_m_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.小小紅球下左右移動 = function() {
	this.initialize(ss["2019_jan_banners_m_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.小小紅球下左右移動2 = function() {
	this.initialize(ss["2019_jan_banners_m_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.小小紅球下左右移動s = function() {
	this.initialize(ss["2019_jan_banners_m_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.小小紅球下左右移動sshadow = function() {
	this.initialize(ss["2019_jan_banners_m_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.左小黃球 = function() {
	this.initialize(ss["2019_jan_banners_m_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.解放年終與紅包經典ITBAG馬上購拷貝 = function() {
	this.initialize(ss["2019_jan_banners_m_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.金球上下移動 = function() {
	this.initialize(ss["2019_jan_banners_m_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol_7_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.左小黃球();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_7_Layer_1, null, null);


(lib.Symbol_6_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.小小紅球下左右移動s();
	this.instance.parent = this;

	this.instance_1 = new lib.小小紅球下左右移動sshadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_6_Layer_1, null, null);


(lib.Symbol_5_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.小小紅球下左右移動2();
	this.instance.parent = this;

	this.instance_1 = new lib.小小紅球下左右移動();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_5_Layer_1, null, null);


(lib.Symbol_4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.右上小紅點上下移動();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_4_Layer_1, null, null);


(lib.Symbol_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.右上小紅點上下移動_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_2_Layer_1, null, null);


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.金球上下移動();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1, null, null);


(lib.scene_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.解放年終與紅包經典ITBAG馬上購拷貝();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene_Layer_1, null, null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_7_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(7,7,1,1,0,0,0,7,7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,14,14), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_6_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(8,7.5,1,1,0,0,0,8,7.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,16,15), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_5_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(15.5,15,1,1,0,0,0,15.5,15);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,31,30), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(3.5,3.5,1,1,0,0,0,3.5,3.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,7,7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(7,7,1,1,0,0,0,7,7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,14,14), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(62,62,1,1,0,0,0,62,62);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,124,124), null);


(lib.scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.scene_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(457.5,570,1,1,0,0,0,457.5,570);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene, new cjs.Rectangle(0,0,915,1140), null);


(lib.item4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(-79,-45.1,1,1,0,0,0,-79,-45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:7,regY:7,rotation:-77.8464,x:-10,y:-118.15},0).wait(1).to({rotation:-106.9092,x:-54.2,y:-142.45},0).wait(1).to({rotation:-127.9584,x:-90.85,y:-144.8},0).wait(1).to({rotation:-144.864,x:-119.3,y:-137.1},0).wait(1).to({rotation:-159.1272,x:-140.8,y:-124.3},0).wait(1).to({rotation:-171.5148,x:-156.3,y:-109.2},0).wait(1).to({rotation:-182.76,x:-167.4,y:-92.85},0).wait(1).to({rotation:-193.704,x:-174.85,y:-75.25},0).wait(1).to({rotation:-203.628,x:-178.6,y:-58.25},0).wait(1).to({rotation:-212.708,x:-179.5,y:-42.35},0).wait(1).to({rotation:-221.06,x:-178.05,y:-27.8},0).wait(1).to({rotation:-228.792,x:-174.75,y:-14.6},0).wait(1).to({rotation:-235.972,x:-170.2,y:-2.85},0).wait(1).to({rotation:-242.672,x:-164.65,y:7.45},0).wait(1).to({rotation:-248.936,x:-158.45,y:16.5},0).wait(1).to({rotation:-254.812,x:-151.75,y:24.25},0).wait(1).to({rotation:-260.34,x:-144.7,y:31},0).wait(1).to({rotation:-265.544,x:-137.6,y:36.65},0).wait(1).to({rotation:-270.456,x:-130.35,y:41.35},0).wait(1).to({rotation:-275.1,x:-123.15,y:45.15},0).wait(1).to({rotation:-279.492,x:-116.15,y:48.3},0).wait(1).to({rotation:-283.656,x:-109.25,y:50.8},0).wait(1).to({rotation:-287.604,x:-102.55,y:52.6},0).wait(1).to({rotation:-291.352,x:-96.1,y:53.95},0).wait(1).to({rotation:-294.912,x:-89.95,y:54.85},0).wait(1).to({rotation:-298.3,x:-84.05,y:55.3},0).wait(1).to({rotation:-301.524,x:-78.35,y:55.4},0).wait(1).to({rotation:-304.592,x:-73,y:55.25},0).wait(1).to({rotation:-307.512,x:-67.9,y:54.8},0).wait(1).to({rotation:-310.296,x:-63.05,y:54.2},0).wait(1).to({rotation:-312.948,x:-58.45,y:53.3},0).wait(1).to({rotation:-315.476,x:-54.15,y:52.35},0).wait(1).to({rotation:-317.888,x:-50.1,y:51.2},0).wait(1).to({rotation:-320.188,x:-46.25,y:50},0).wait(1).to({rotation:-322.38,x:-42.6,y:48.65},0).wait(1).to({rotation:-324.472,x:-39.2,y:47.25},0).wait(1).to({rotation:-326.468,x:-36,y:45.8},0).wait(1).to({rotation:-328.372,x:-33.05,y:44.3},0).wait(1).to({rotation:-330.184,x:-30.3,y:42.85},0).wait(1).to({rotation:-331.916,x:-27.6,y:41.35},0).wait(1).to({rotation:-333.568,x:-25.15,y:39.8},0).wait(1).to({rotation:-335.14,x:-22.85,y:38.3},0).wait(1).to({rotation:-336.64,x:-20.65,y:36.85},0).wait(1).to({rotation:-338.068,x:-18.6,y:35.3},0).wait(1).to({rotation:-339.428,x:-16.75,y:33.85},0).wait(1).to({rotation:-340.724,x:-15,y:32.45},0).wait(1).to({rotation:-341.956,x:-13.3,y:31.05},0).wait(1).to({rotation:-343.132,x:-11.8,y:29.7},0).wait(1).to({rotation:-344.244,x:-10.35,y:28.4},0).wait(1).to({rotation:-345.304,x:-9.05,y:27.1},0).wait(1).to({rotation:-346.308,x:-7.75,y:25.85},0).wait(1).to({rotation:-347.264,x:-6.55,y:24.7},0).wait(1).to({rotation:-348.168,x:-5.5,y:23.5},0).wait(1).to({rotation:-349.028,x:-4.5,y:22.4},0).wait(1).to({rotation:-349.84,x:-3.5,y:21.35},0).wait(1).to({rotation:-350.608,x:-2.65,y:20.3},0).wait(1).to({rotation:-351.332,x:-1.8,y:19.3},0).wait(1).to({rotation:-352.016,x:-1,y:18.4},0).wait(1).to({rotation:-352.664,x:-0.3,y:17.55},0).wait(1).to({rotation:-353.272,x:0.35,y:16.65},0).wait(1).to({rotation:-353.844,x:0.95,y:15.9},0).wait(1).to({rotation:-354.38,x:1.5,y:15.15},0).wait(1).to({rotation:-354.884,x:2.05,y:14.4},0).wait(1).to({rotation:-355.352,x:2.55,y:13.8},0).wait(1).to({rotation:-355.796,x:3,y:13.15},0).wait(1).to({rotation:-356.204,x:3.4,y:12.55},0).wait(1).to({rotation:-356.588,x:3.8,y:12},0).wait(1).to({rotation:-356.944,x:4.15,y:11.45},0).wait(1).to({rotation:-357.272,x:4.45,y:11.05},0).wait(1).to({rotation:-357.576,x:4.75,y:10.6},0).wait(1).to({rotation:-357.856,x:5.05,y:10.15},0).wait(1).to({rotation:-358.112,x:5.25,y:9.8},0).wait(1).to({rotation:-358.348,x:5.5,y:9.45},0).wait(1).to({rotation:-358.564,x:5.65,y:9.15},0).wait(1).to({rotation:-358.76,x:5.9,y:8.8},0).wait(1).to({rotation:-358.936,x:6,y:8.6},0).wait(1).to({rotation:-359.092,x:6.2,y:8.3},0).wait(1).to({rotation:-359.236,x:6.3,y:8.1},0).wait(1).to({rotation:-359.364,x:6.4,y:7.95},0).wait(1).to({rotation:-359.472,x:6.55,y:7.75},0).wait(1).to({rotation:-359.572,x:6.65,y:7.6},0).wait(1).to({rotation:-359.656,x:6.7,y:7.5},0).wait(1).to({rotation:-359.728,x:6.75,y:7.4},0).wait(1).to({rotation:-359.792,x:6.8,y:7.3},0).wait(1).to({rotation:-359.84,x:6.9,y:7.2},0).wait(1).to({rotation:-359.884,x:6.95,y:7.15},0).wait(1).to({rotation:-359.916,y:7.1},0).wait(1).to({rotation:-359.944,x:7,y:7.05},0).wait(1).to({rotation:-359.964,y:7},0).wait(1).to({rotation:-359.98},0).wait(1).to({rotation:-359.988},0).wait(1).to({rotation:-359.996},0).wait(2).to({rotation:-360},0).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.item4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_95 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.item4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(-32.5,-15.6,1,1,0,0,0,-32.5,-15.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1).to({regX:-87.6,regY:-44.8,x:-87.6,y:-44.8},0).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189,-154.5,203,219.4);


(lib.item3_red4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red4
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(8,7.5,1,1,0,0,0,8,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:12.3},0).wait(1).to({x:16.6},0).wait(1).to({x:20.95},0).wait(1).to({x:25.25},0).wait(1).to({x:29.55},0).wait(1).to({x:33.9},0).wait(1).to({x:38.2},0).wait(1).to({x:42.5},0).wait(1).to({x:46.85},0).wait(1).to({x:51.15},0).wait(1).to({x:55.5},0).wait(1).to({x:59.8},0).wait(1).to({x:64.1},0).wait(1).to({x:68.45},0).wait(1).to({x:72.75},0).wait(1).to({x:77.05},0).wait(1).to({x:81.4},0).wait(1).to({x:85.7},0).wait(1).to({x:90},0).wait(1).to({x:94.35},0).wait(1).to({x:98.65},0).wait(1).to({x:103},0).wait(1).to({x:98.65},0).wait(1).to({x:94.35},0).wait(1).to({x:90},0).wait(1).to({x:85.7},0).wait(1).to({x:81.4},0).wait(1).to({x:77.05},0).wait(1).to({x:72.75},0).wait(1).to({x:68.45},0).wait(1).to({x:64.1},0).wait(1).to({x:59.8},0).wait(1).to({x:55.5},0).wait(1).to({x:51.15},0).wait(1).to({x:46.85},0).wait(1).to({x:42.5},0).wait(1).to({x:38.2},0).wait(1).to({x:33.9},0).wait(1).to({x:29.55},0).wait(1).to({x:25.25},0).wait(1).to({x:20.95},0).wait(1).to({x:16.6},0).wait(1).to({x:12.3},0).wait(1).to({x:8},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item3_red3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red3
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(56.5,32,1,1,0,0,0,15.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:53.5},0).wait(1).to({x:50.55},0).wait(1).to({x:47.6},0).wait(1).to({x:44.65},0).wait(1).to({x:41.7},0).wait(1).to({x:38.75},0).wait(1).to({x:35.8},0).wait(1).to({x:32.85},0).wait(1).to({x:29.9},0).wait(1).to({x:26.95},0).wait(1).to({x:24},0).wait(1).to({x:21},0).wait(1).to({x:18.05},0).wait(1).to({x:15.15},0).wait(1).to({x:12.2},0).wait(1).to({x:9.25},0).wait(1).to({x:6.3},0).wait(1).to({x:3.35},0).wait(1).to({x:0.4},0).wait(1).to({x:-2.55},0).wait(1).to({x:-5.5},0).wait(1).to({x:-8.5},0).wait(1).to({x:-5.5},0).wait(1).to({x:-2.55},0).wait(1).to({x:0.4},0).wait(1).to({x:3.35},0).wait(1).to({x:6.3},0).wait(1).to({x:9.25},0).wait(1).to({x:12.2},0).wait(1).to({x:15.15},0).wait(1).to({x:18.05},0).wait(1).to({x:21},0).wait(1).to({x:24},0).wait(1).to({x:26.95},0).wait(1).to({x:29.9},0).wait(1).to({x:32.85},0).wait(1).to({x:35.8},0).wait(1).to({x:38.75},0).wait(1).to({x:41.7},0).wait(1).to({x:44.65},0).wait(1).to({x:47.6},0).wait(1).to({x:50.55},0).wait(1).to({x:53.5},0).wait(1).to({x:56.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// red3_obj_
	this.red3 = new lib.item3_red3();
	this.red3.name = "red3";
	this.red3.parent = this;
	this.red3.setTransform(56.5,32,1,1,0,0,0,56.5,32);
	this.red3.depth = 0;
	this.red3.isAttachedToCamera = 0
	this.red3.isAttachedToMask = 0
	this.red3.layerDepth = 0
	this.red3.layerIndex = 0
	this.red3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.red3).wait(1).to({regX:24,x:24},0).wait(44));

	// red4_obj_
	this.red4 = new lib.item3_red4();
	this.red4.name = "red4";
	this.red4.parent = this;
	this.red4.setTransform(8,7.5,1,1,0,0,0,8,7.5);
	this.red4.depth = 0;
	this.red4.isAttachedToCamera = 0
	this.red4.isAttachedToMask = 0
	this.red4.layerDepth = 0
	this.red4.layerIndex = 1
	this.red4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.red4).wait(1).to({regX:55.5,x:55.5},0).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,0,135,47);


(lib.item2_red2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(7,36,1,1,0,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:41.6},0).wait(1).to({x:54.05},0).wait(1).to({x:62.8},0).wait(1).to({x:69.65},0).wait(1).to({x:75.25},0).wait(1).to({x:79.95},0).wait(1).to({x:84},0).wait(1).to({x:87.55},0).wait(1).to({x:90.6},0).wait(1).to({x:93.3},0).wait(1).to({x:95.7},0).wait(1).to({x:97.8},0).wait(1).to({x:99.6},0).wait(1).to({x:101.25},0).wait(1).to({x:102.6},0).wait(1).to({x:103.8},0).wait(1).to({x:104.85},0).wait(1).to({x:105.65},0).wait(1).to({x:106.3},0).wait(1).to({x:106.75},0).wait(1).to({x:107},0).wait(1).to({x:30.9},0).wait(1).to({x:-1.45},0).wait(1).to({x:-13.15},0).wait(1).to({x:-21.4},0).wait(1).to({x:-27.85},0).wait(1).to({x:-33.15},0).wait(1).to({x:-37.65},0).wait(1).to({x:-41.5},0).wait(1).to({x:-44.9},0).wait(1).to({x:-47.85},0).wait(1).to({x:-50.45},0).wait(1).to({x:-52.75},0).wait(1).to({x:-54.8},0).wait(1).to({x:-56.65},0).wait(1).to({x:-58.25},0).wait(1).to({x:-59.65},0).wait(1).to({x:-60.85},0).wait(1).to({x:-61.9},0).wait(1).to({x:-62.8},0).wait(1).to({x:-63.55},0).wait(1).to({x:-64.1},0).wait(1).to({x:-64.5},0).wait(1).to({x:-64.75},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item2_red1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(18.5,3.5,1,1,0,0,0,3.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-14.55},0).wait(1).to({x:-26.45},0).wait(1).to({x:-34.8},0).wait(1).to({x:-41.3},0).wait(1).to({x:-46.7},0).wait(1).to({x:-51.2},0).wait(1).to({x:-55.1},0).wait(1).to({x:-58.45},0).wait(1).to({x:-61.4},0).wait(1).to({x:-64},0).wait(1).to({x:-66.25},0).wait(1).to({x:-68.3},0).wait(1).to({x:-70.05},0).wait(1).to({x:-71.6},0).wait(1).to({x:-72.9},0).wait(1).to({x:-74.05},0).wait(1).to({x:-75.05},0).wait(1).to({x:-75.85},0).wait(1).to({x:-76.45},0).wait(1).to({x:-76.9},0).wait(1).to({x:-77.15},0).wait(2).to({x:-44.75},0).wait(1).to({x:-33.05},0).wait(1).to({x:-24.8},0).wait(1).to({x:-18.35},0).wait(1).to({x:-13.05},0).wait(1).to({x:-8.55},0).wait(1).to({x:-4.7},0).wait(1).to({x:-1.3},0).wait(1).to({x:1.65},0).wait(1).to({x:4.2},0).wait(1).to({x:6.5},0).wait(1).to({x:8.55},0).wait(1).to({x:10.4},0).wait(1).to({x:12},0).wait(1).to({x:13.4},0).wait(1).to({x:14.6},0).wait(1).to({x:15.65},0).wait(1).to({x:16.55},0).wait(1).to({x:17.3},0).wait(1).to({x:17.85},0).wait(1).to({x:18.25},0).wait(1).to({x:18.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// red2_obj_
	this.red2 = new lib.item2_red2();
	this.red2.name = "red2";
	this.red2.parent = this;
	this.red2.setTransform(7,36,1,1,0,0,0,7,36);
	this.red2.depth = 0;
	this.red2.isAttachedToCamera = 0
	this.red2.isAttachedToMask = 0
	this.red2.layerDepth = 0
	this.red2.layerIndex = 0
	this.red2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.red2).wait(1).to({regX:21.1,x:21.1},0).wait(21).to({regX:7,x:7},0).wait(1).to({regX:21.1,x:21.1},0).wait(22));

	// red1_obj_
	this.red1 = new lib.item2_red1();
	this.red1.name = "red1";
	this.red1.parent = this;
	this.red1.setTransform(18.5,3.5,1,1,0,0,0,18.5,3.5);
	this.red1.depth = 0;
	this.red1.isAttachedToCamera = 0
	this.red1.isAttachedToMask = 0
	this.red1.layerDepth = 0
	this.red1.layerIndex = 1
	this.red1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.red1).wait(1).to({regX:-29.3,x:-29.3},0).wait(21).to({regX:18.5,x:18.5},0).wait(1).to({regX:-29.3,x:-29.3},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.6,0,194.6,43);


(lib.item1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(62.1,62.1,0.0959,0.0959,0,0,0,62,62);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1964,scaleY:0.1964,x:62.05,y:62.05,alpha:0.1111},0).wait(1).to({scaleX:0.2969,scaleY:0.2969,x:61.95,y:61.95,alpha:0.2222},0).wait(1).to({scaleX:0.3973,scaleY:0.3973,x:61.9,y:61.9,alpha:0.3333},0).wait(1).to({scaleX:0.4978,scaleY:0.4978,x:61.85,y:61.85,alpha:0.4444},0).wait(1).to({scaleX:0.5982,scaleY:0.5982,x:61.8,y:61.8,alpha:0.5556},0).wait(1).to({scaleX:0.6987,scaleY:0.6987,x:61.7,y:61.7,alpha:0.6667},0).wait(1).to({scaleX:0.7991,scaleY:0.7991,alpha:0.7778},0).wait(1).to({scaleX:0.8996,scaleY:0.8996,x:61.6,y:61.6,alpha:0.8889},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1).to({y:61.9},0).wait(1).to({y:62.65},0).wait(1).to({y:64.05},0).wait(1).to({y:65.95},0).wait(1).to({y:68.4},0).wait(1).to({y:71.4},0).wait(1).to({y:74.95},0).wait(1).to({y:79.05},0).wait(1).to({y:83.7},0).wait(1).to({y:88.9},0).wait(1).to({y:94.65},0).wait(1).to({y:100.95},0).wait(1).to({y:92.9},0).wait(1).to({y:88.05},0).wait(1).to({y:86.45},0).wait(1).to({y:88.05},0).wait(1).to({y:92.9},0).wait(1).to({y:100.95},0).wait(1).to({y:96.95},0).wait(1).to({y:95.6},0).wait(1).to({y:96.95},0).wait(1).to({y:100.95},0).wait(1).to({y:99},0).wait(1).to({y:100.95},0).wait(1).to({y:102.6},0).wait(1).to({scaleX:0.8952,scaleY:0.8952,x:61.55,y:102.55,alpha:0.9},0).wait(1).to({scaleX:0.7905,scaleY:0.7905,alpha:0.8},0).wait(1).to({scaleX:0.6857,scaleY:0.6857,alpha:0.7},0).wait(1).to({scaleX:0.581,scaleY:0.581,alpha:0.6},0).wait(1).to({scaleX:0.4762,scaleY:0.4762,x:61.6,y:102.6,alpha:0.5},0).wait(1).to({scaleX:0.3715,scaleY:0.3715,alpha:0.4},0).wait(1).to({scaleX:0.2667,scaleY:0.2667,alpha:0.3},0).wait(1).to({scaleX:0.162,scaleY:0.162,alpha:0.2},0).wait(1).to({scaleX:0.0572,scaleY:0.0572,alpha:0.1},0).wait(1).to({scaleX:0.0475,scaleY:0.0475,rotation:-180,x:61.55,y:102.55,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.item1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(62.1,62.1,1,1,0,0,0,62.1,62.1);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1).to({regX:61.6,regY:82.1,x:61.6,y:82.1},0).wait(8).to({regX:62.1,regY:62.1,x:62.1,y:62.1},0).wait(1).to({regX:61.6,regY:82.1,x:61.6,y:82.1},0).wait(24).to({regX:62.1,regY:62.1,x:62.1,y:62.1},0).wait(1).to({regX:61.6,regY:82.1,x:61.6,y:82.1},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,124,165);


(lib.Scene_1_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// scene
	this.instance = new lib.scene();
	this.instance.parent = this;
	this.instance.setTransform(457.5,570,1,1,0,0,0,457.5,570);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_scene, null, null);


(lib.Scene_1_item4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item4
	this.instance = new lib.item4();
	this.instance.parent = this;
	this.instance.setTransform(118,684,1,1,0,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item4, null, null);


(lib.Scene_1_item3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item3
	this.instance = new lib.item3();
	this.instance.parent = this;
	this.instance.setTransform(473,1019.5,1,1,0,0,0,36,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item3, null, null);


(lib.Scene_1_item2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item2
	this.instance = new lib.item2();
	this.instance.parent = this;
	this.instance.setTransform(861,384,1,1,0,0,0,11,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item2, null, null);


(lib.Scene_1_item1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item1
	this.instance = new lib.item1();
	this.instance.parent = this;
	this.instance.setTransform(555,114,1,1,0,0,0,62,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item1, null, null);


// stage content:
(lib._2019janbannersm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// item4_obj_
	this.item4 = new lib.Scene_1_item4();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(78.5,661.5,1,1,0,0,0,78.5,661.5);
	this.item4.depth = 0;
	this.item4.isAttachedToCamera = 0
	this.item4.isAttachedToMask = 0
	this.item4.layerDepth = 0
	this.item4.layerIndex = 0
	this.item4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item4).wait(1));

	// item3_obj_
	this.item3 = new lib.Scene_1_item3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(473,1019.5,1,1,0,0,0,473,1019.5);
	this.item3.depth = 0;
	this.item3.isAttachedToCamera = 0
	this.item3.isAttachedToMask = 0
	this.item3.layerDepth = 0
	this.item3.layerIndex = 1
	this.item3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item3).wait(1));

	// item2_obj_
	this.item2 = new lib.Scene_1_item2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(861,384.5,1,1,0,0,0,861,384.5);
	this.item2.depth = 0;
	this.item2.isAttachedToCamera = 0
	this.item2.isAttachedToMask = 0
	this.item2.layerDepth = 0
	this.item2.layerIndex = 2
	this.item2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item2).wait(1));

	// item1_obj_
	this.item1 = new lib.Scene_1_item1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(555.1,114.1,1,1,0,0,0,555.1,114.1);
	this.item1.depth = 0;
	this.item1.isAttachedToCamera = 0
	this.item1.isAttachedToMask = 0
	this.item1.layerDepth = 0
	this.item1.layerIndex = 3
	this.item1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item1).wait(1));

	// scene_obj_
	this.scene = new lib.Scene_1_scene();
	this.scene.name = "scene";
	this.scene.parent = this;
	this.scene.setTransform(457.5,570,1,1,0,0,0,457.5,570);
	this.scene.depth = 0;
	this.scene.isAttachedToCamera = 0
	this.scene.isAttachedToMask = 0
	this.scene.layerDepth = 0
	this.scene.layerIndex = 4
	this.scene.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.scene).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(457.5,570,457.5,570);
// library properties:
lib.properties = {
	id: 'CA3E05F3F2EF4E6F8F502808F97BD478',
	width: 915,
	height: 1140,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/2019_jan_banners_m_atlas_.png", id:"2019_jan_banners_m_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CA3E05F3F2EF4E6F8F502808F97BD478'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;