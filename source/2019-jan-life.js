(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2019_jan_life_atlas_", frames: [[668,812,14,14],[0,0,1762,756],[518,758,598,52],[1764,0,234,368],[0,758,516,117],[518,812,57,57],[640,812,26,27],[700,812,13,14],[1118,758,64,64],[577,812,61,27],[684,812,14,14]]}
];


// symbols:



(lib.Image = function() {
	this.initialize(ss["2019_jan_life_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BACK = function() {
	this.initialize(ss["2019_jan_life_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["2019_jan_life_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.line = function() {
	this.initialize(ss["2019_jan_life_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.TEXT = function() {
	this.initialize(ss["2019_jan_life_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.半圓型 = function() {
	this.initialize(ss["2019_jan_life_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.小圓點紅 = function() {
	this.initialize(ss["2019_jan_life_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.小小圓點紅 = function() {
	this.initialize(ss["2019_jan_life_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.藍ball = function() {
	this.initialize(ss["2019_jan_life_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.藍ballshadow = function() {
	this.initialize(ss["2019_jan_life_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.黑洞 = function() {
	this.initialize(ss["2019_jan_life_atlas_"]);
	this.gotoAndStop(10);
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


(lib.Symbol_10_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.藍ballshadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_10_Layer_1, null, null);


(lib.Symbol_8_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_8_Layer_1, null, null);


(lib.Symbol_6_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.藍ball();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_6_Layer_1, null, null);


(lib.Symbol_4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.小小圓點紅();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_4_Layer_1, null, null);


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.小圓點紅();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1, null, null);


(lib.Symbol_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_2_Layer_1, null, null);


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.半圓型();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1, null, null);


(lib.scene_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.TEXT();
	this.instance.parent = this;
	this.instance.setTransform(373,83);

	this.instance_1 = new lib.BACK();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene_Layer_1, null, null);


(lib.right_黑洞 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 黑洞
	this.instance = new lib.黑洞();
	this.instance.parent = this;
	this.instance.setTransform(220,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.right_黑洞, null, null);


(lib.ball_path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// path
	this.instance = new lib.line();
	this.instance.parent = this;
	this.instance.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_10_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(30.5,13.5,1,1,0,0,0,30.5,13.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,61,27), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_8_Layer_1();
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

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,14,14), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_6_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(36,-40,1,1,0,0,0,36,-40);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,64,64), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(6.5,7,1,1,0,0,0,6.5,7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,13,14), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(13,13.5,1,1,0,0,0,13,13.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,26,27), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(149.5,13,1,1,0,0,0,149.5,13);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,299,26), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(28.5,28.5,1,1,0,0,0,28.5,28.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,57,57), null);


(lib.Symbol_5_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(32,32,0.2437,0.2437,0,0,0,31.8,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:32,regY:32,scaleX:0.2978,scaleY:0.2978,x:32.05,y:32.05},0).wait(1).to({scaleX:0.3518,scaleY:0.3518},0).wait(1).to({scaleX:0.4058,scaleY:0.4058},0).wait(1).to({scaleX:0.4598,scaleY:0.4598},0).wait(1).to({scaleX:0.5138,scaleY:0.5138,x:32.1,y:32.1},0).wait(1).to({scaleX:0.5679,scaleY:0.5679,x:32.05,y:32.05},0).wait(1).to({scaleX:0.6219,scaleY:0.6219,x:32.1,y:32.1},0).wait(1).to({scaleX:0.6759,scaleY:0.6759,x:32.15,y:32.15},0).wait(1).to({scaleX:0.7299,scaleY:0.7299,x:32.1,y:32.1},0).wait(1).to({scaleX:0.7839,scaleY:0.7839,x:32.15,y:32.15},0).wait(1).to({scaleX:0.8379,scaleY:0.8379},0).wait(1).to({scaleX:0.892,scaleY:0.892},0).wait(1).to({scaleX:0.946,scaleY:0.946},0).wait(1).to({scaleX:1,scaleY:1,x:32.2,y:32.2},0).wait(17).to({scaleX:0.946,scaleY:0.946,x:32.15,y:32.15},0).wait(1).to({scaleX:0.892,scaleY:0.892},0).wait(1).to({scaleX:0.8379,scaleY:0.8379},0).wait(1).to({scaleX:0.7839,scaleY:0.7839},0).wait(1).to({scaleX:0.7299,scaleY:0.7299,x:32.1,y:32.1},0).wait(1).to({scaleX:0.6759,scaleY:0.6759,x:32.15,y:32.15},0).wait(1).to({scaleX:0.6219,scaleY:0.6219,x:32.1,y:32.1},0).wait(1).to({scaleX:0.5679,scaleY:0.5679,x:32.05,y:32.05},0).wait(1).to({scaleX:0.5138,scaleY:0.5138,x:32.1,y:32.1},0).wait(1).to({scaleX:0.4598,scaleY:0.4598,x:32.05,y:32.05},0).wait(1).to({scaleX:0.4058,scaleY:0.4058},0).wait(1).to({scaleX:0.3518,scaleY:0.3518},0).wait(1).to({scaleX:0.2978,scaleY:0.2978},0).wait(1).to({scaleX:0.2437,scaleY:0.2437,x:32,y:32},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.scene_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(881,378,1,1,0,0,0,881,378);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene, new cjs.Rectangle(0,0,1762,756), null);


(lib.red_group_red2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red2
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(60,13.5,1,1,0,0,0,13,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:8},0).wait(1).to({x:-8.3},0).wait(1).to({x:-18.8},0).wait(1).to({x:-26.4},0).wait(1).to({x:-32.1},0).wait(1).to({x:-36.55},0).wait(1).to({x:-40.1},0).wait(1).to({x:-42.9},0).wait(1).to({x:-45.1},0).wait(1).to({x:-46.85},0).wait(1).to({x:-48.25},0).wait(1).to({x:-49.35},0).wait(1).to({x:-50.15},0).wait(1).to({x:-50.8},0).wait(1).to({x:-51.25},0).wait(1).to({x:-51.55},0).wait(1).to({x:-51.75},0).wait(1).to({x:-51.9},0).wait(1).to({x:-51.95},0).wait(1).to({x:-52},0).wait(3).to({x:-0.9},0).wait(1).to({x:15.15},0).wait(1).to({x:25.6},0).wait(1).to({x:33.15},0).wait(1).to({x:38.95},0).wait(1).to({x:43.45},0).wait(1).to({x:47.05},0).wait(1).to({x:49.95},0).wait(1).to({x:52.25},0).wait(1).to({x:54.1},0).wait(1).to({x:55.6},0).wait(1).to({x:56.8},0).wait(1).to({x:57.7},0).wait(1).to({x:58.4},0).wait(1).to({x:58.95},0).wait(1).to({x:59.35},0).wait(1).to({x:59.6},0).wait(1).to({x:59.8},0).wait(1).to({x:59.9},0).wait(1).to({x:59.95},0).wait(1).to({x:60},0).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.red_group_red1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-105.5,39,1,1,0,0,0,6.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-53.45},0).wait(1).to({x:-37.15},0).wait(1).to({x:-26.65},0).wait(1).to({x:-19.05},0).wait(1).to({x:-13.35},0).wait(1).to({x:-8.9},0).wait(1).to({x:-5.35},0).wait(1).to({x:-2.55},0).wait(1).to({x:-0.35},0).wait(1).to({x:1.4},0).wait(1).to({x:2.8},0).wait(1).to({x:3.9},0).wait(1).to({x:4.7},0).wait(1).to({x:5.35},0).wait(1).to({x:5.8},0).wait(1).to({x:6.1},0).wait(1).to({x:6.3},0).wait(1).to({x:6.45},0).wait(1).to({x:6.5},0).wait(4).to({x:-44.55},0).wait(1).to({x:-60.65},0).wait(1).to({x:-71.1},0).wait(1).to({x:-78.65},0).wait(1).to({x:-84.45},0).wait(1).to({x:-88.95},0).wait(1).to({x:-92.55},0).wait(1).to({x:-95.45},0).wait(1).to({x:-97.75},0).wait(1).to({x:-99.6},0).wait(1).to({x:-101.1},0).wait(1).to({x:-102.3},0).wait(1).to({x:-103.2},0).wait(1).to({x:-103.9},0).wait(1).to({x:-104.45},0).wait(1).to({x:-104.85},0).wait(1).to({x:-105.1},0).wait(1).to({x:-105.3},0).wait(1).to({x:-105.4},0).wait(1).to({x:-105.45},0).wait(1).to({x:-105.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.red_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// red2_obj_
	this.red2 = new lib.red_group_red2();
	this.red2.name = "red2";
	this.red2.parent = this;
	this.red2.setTransform(60,13.5,1,1,0,0,0,60,13.5);
	this.red2.depth = 0;
	this.red2.isAttachedToCamera = 0
	this.red2.isAttachedToMask = 0
	this.red2.layerDepth = 0
	this.red2.layerIndex = 0
	this.red2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.red2).wait(1).to({regX:4,x:4},0).wait(21).to({regX:60,x:60},0).wait(1).to({regX:4,x:4},0).wait(22));

	// red1_obj_
	this.red1 = new lib.red_group_red1();
	this.red1.name = "red1";
	this.red1.parent = this;
	this.red1.setTransform(-105.5,39,1,1,0,0,0,-105.5,39);
	this.red1.depth = 0;
	this.red1.isAttachedToCamera = 0
	this.red1.isAttachedToMask = 0
	this.red1.layerDepth = 0
	this.red1.layerIndex = 1
	this.red1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.red1).wait(1).to({regX:-49.5,x:-49.5},0).wait(21).to({regX:-105.5,x:-105.5},0).wait(1).to({regX:-49.5,x:-49.5},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,0,185,46);


(lib.item3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(149.6,13,1,1,0,0,0,149.6,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:149.5,rotation:0.3191,x:149.4,y:12.6},0).wait(1).to({rotation:0.6383,x:149.25,y:12.15},0).wait(1).to({rotation:0.9574,x:149.15,y:11.75},0).wait(1).to({rotation:1.2765,x:148.95,y:11.35},0).wait(1).to({rotation:1.5956,x:148.85,y:10.9},0).wait(1).to({rotation:1.9148,x:148.65,y:10.5},0).wait(1).to({rotation:2.2339,x:148.6,y:10.05},0).wait(1).to({rotation:2.553,x:148.4,y:9.6},0).wait(1).to({rotation:2.8721,x:148.25,y:9.2},0).wait(1).to({rotation:3.1913,x:148.15,y:8.75},0).wait(1).to({rotation:3.5104,x:148,y:8.35},0).wait(1).to({rotation:3.8295,x:147.85,y:7.9},0).wait(1).to({rotation:4.1486,x:147.7,y:7.45},0).wait(1).to({rotation:4.4678,x:147.6,y:7.05},0).wait(1).to({rotation:4.7869,x:147.45,y:6.6},0).wait(1).to({rotation:5.106,x:147.3,y:6.2},0).wait(1).to({rotation:5.4251,x:147.15,y:5.8},0).wait(1).to({rotation:5.7443,x:147.05,y:5.35},0).wait(1).to({rotation:6.0634,x:146.9,y:4.95},0).wait(1).to({rotation:6.3825,x:146.75,y:4.45},0).wait(1).to({rotation:6.7016,x:146.65,y:4.05},0).wait(1).to({rotation:7.0208,x:146.5,y:3.6},0).wait(1).to({rotation:7.3399,x:146.3,y:3.2},0).wait(1).to({rotation:7.659,x:146.15,y:2.75},0).wait(1).to({rotation:7.9781,x:146.05,y:2.35},0).wait(1).to({rotation:8.2973,x:145.9,y:1.9},0).wait(1).to({rotation:8.6164,x:145.75,y:1.5},0).wait(1).to({rotation:8.9355,x:145.7,y:1.05},0).wait(1).to({rotation:9.2546,x:145.45,y:0.65},0).wait(1).to({rotation:9.5738,x:145.3,y:0.2},0).wait(1).to({rotation:9.8929,x:145.2,y:-0.2},0).wait(1).to({rotation:10.212,x:145.05,y:-0.65},0).wait(1).to({rotation:10.5311,x:144.9,y:-1.05},0).wait(1).to({rotation:10.8503,x:144.8,y:-1.5},0).wait(1).to({rotation:11.1694,x:144.65,y:-1.95},0).wait(1).to({rotation:11.4885,x:144.45,y:-2.35},0).wait(1).to({rotation:11.8076,x:144.35,y:-2.8},0).wait(1).to({rotation:12.1268,x:144.2,y:-3.2},0).wait(1).to({rotation:12.4459,x:144.1,y:-3.65},0).wait(1).to({rotation:12.765,x:143.95,y:-4},0).wait(1).to({rotation:13.0841,x:143.75,y:-4.5},0).wait(1).to({rotation:13.4033,x:143.7,y:-4.9},0).wait(1).to({rotation:13.7224,x:143.5,y:-5.3},0).wait(1).to({rotation:14.0415,x:143.4,y:-5.8},0).wait(1).to({rotation:14.3606,x:143.3,y:-6.15},0).wait(1).to({rotation:14.6798,x:143.1,y:-6.55},0).wait(1).to({rotation:14.9989,x:142.95,y:-7.05},0).wait(1).to({rotation:14.8925,x:142.85,y:-7.2},0).wait(1).to({rotation:14.7861,x:142.75,y:-7.35},0).wait(1).to({rotation:14.6796,x:142.6,y:-7.4},0).wait(1).to({rotation:14.5732,x:142.55,y:-7.55},0).wait(1).to({rotation:14.4668,x:142.4,y:-7.7},0).wait(1).to({rotation:14.3604,x:142.35,y:-7.8},0).wait(1).to({rotation:14.254,x:142.2,y:-7.95},0).wait(1).to({rotation:14.1475,x:142.05,y:-8.1},0).wait(1).to({rotation:14.0411,x:142,y:-8.25},0).wait(1).to({rotation:13.9347,x:141.85,y:-8.35},0).wait(1).to({rotation:13.8283,x:141.75,y:-8.5},0).wait(1).to({rotation:13.7219,x:141.65,y:-8.6},0).wait(1).to({rotation:13.6155,x:141.55,y:-8.75},0).wait(1).to({rotation:13.509,x:141.4,y:-8.9},0).wait(1).to({rotation:13.4026,x:141.35,y:-9},0).wait(1).to({rotation:13.2962,x:141.2,y:-9.15},0).wait(1).to({rotation:13.1898,x:141.1,y:-9.3},0).wait(1).to({rotation:13.0834,x:140.95,y:-9.4},0).wait(1).to({rotation:12.9769,x:140.9,y:-9.6},0).wait(1).to({rotation:12.8705,x:140.75,y:-9.7},0).wait(1).to({rotation:12.7641,x:140.7,y:-9.75},0).wait(1).to({rotation:12.6577,x:140.55,y:-9.95},0).wait(1).to({rotation:12.5513,x:140.5,y:-10.05},0).wait(1).to({rotation:12.4448,x:140.35,y:-10.2},0).wait(1).to({rotation:12.3384,x:140.2,y:-10.3},0).wait(1).to({rotation:12.232,x:140.1,y:-10.5},0).wait(1).to({rotation:12.1256,x:139.95,y:-10.6},0).wait(1).to({rotation:12.0192,x:139.85,y:-10.7},0).wait(1).to({rotation:11.9127,x:139.75,y:-10.9},0).wait(1).to({rotation:11.8063,x:139.65,y:-11},0).wait(1).to({rotation:11.6999,x:139.55,y:-11.1},0).wait(1).to({rotation:11.5935,x:139.45,y:-11.25},0).wait(1).to({rotation:11.4871,x:139.3,y:-11.4},0).wait(1).to({rotation:11.3806,x:139.2,y:-11.5},0).wait(1).to({rotation:11.2742,x:139.05,y:-11.6},0).wait(1).to({rotation:11.1678,x:139,y:-11.8},0).wait(1).to({rotation:11.0614,x:138.85,y:-11.9},0).wait(1).to({rotation:10.955,x:138.75,y:-12.05},0).wait(1).to({rotation:10.8486,x:138.65,y:-12.15},0).wait(1).to({rotation:10.7421,x:138.55,y:-12.35},0).wait(1).to({rotation:10.6357,x:138.45,y:-12.4},0).wait(1).to({rotation:10.5293,x:138.3,y:-12.55},0).wait(1).to({rotation:10.4229,x:138.2,y:-12.7},0).wait(1).to({rotation:10.3165,x:138.1,y:-12.85},0).wait(1).to({rotation:10.21,x:138,y:-12.95},0).wait(1).to({rotation:10.1036,x:137.85,y:-13.1},0).wait(1).to({rotation:9.9972,x:137.75,y:-13.25},0).wait(1).to({rotation:9.8908,x:137.65,y:-13.35},0).wait(1).to({rotation:9.1597,x:138.15,y:-12.8},0).wait(1).to({rotation:8.4287,x:138.65,y:-12.3},0).wait(1).to({rotation:7.6976,x:139.1,y:-11.7},0).wait(1).to({rotation:6.9665,x:139.6,y:-11.15},0).wait(1).to({rotation:6.2355,x:140.15,y:-10.65},0).wait(1).to({rotation:5.5044,x:140.6,y:-10.05},0).wait(1).to({rotation:4.7734,x:141.15,y:-9.5},0).wait(1).to({rotation:4.0423,x:141.65,y:-9},0).wait(1).to({rotation:3.3112,x:142.15,y:-8.4},0).wait(1).to({rotation:2.5802,x:142.6,y:-7.85},0).wait(1).to({rotation:1.8491,x:143.1,y:-7.35},0).wait(1).to({rotation:1.1181,x:143.6,y:-6.8},0).wait(1).to({rotation:0.387,x:144.1,y:-6.25},0).wait(1).to({rotation:-0.3441,x:144.65,y:-5.7},0).wait(1).to({rotation:-1.0751,x:145.1,y:-5.15},0).wait(1).to({rotation:-1.8062,x:145.6,y:-4.6},0).wait(1).to({rotation:-2.5372,x:146.15,y:-4.05},0).wait(1).to({rotation:-3.2683,x:146.6,y:-3.5},0).wait(1).to({rotation:-3.9994,x:147.15,y:-3},0).wait(1).to({rotation:-4.7304,x:147.6,y:-2.45},0).wait(1).to({rotation:-5.4615,x:148.1,y:-1.9},0).wait(1).to({rotation:-6.1925,x:148.65,y:-1.45},0).wait(1).to({rotation:-6.9236,x:149.1,y:-0.8},0).wait(1).to({rotation:-7.6547,x:149.6,y:-0.25},0).wait(1).to({rotation:-8.3857,x:150.05,y:0.25},0).wait(1).to({rotation:-9.1168,x:150.55,y:0.8},0).wait(1).to({rotation:-9.8478,x:151.05,y:1.35},0).wait(1).to({rotation:-10.5789,x:151.55,y:1.9},0).wait(1).to({rotation:-11.31,x:152.05,y:2.45},0).wait(1).to({rotation:-12.041,x:152.55,y:2.95},0).wait(1).to({rotation:-12.7721,x:153.05,y:3.55},0).wait(1).to({rotation:-13.5031,x:153.55,y:4.1},0).wait(1).to({rotation:-14.2342,x:154.05,y:4.65},0).wait(1).to({rotation:-14.9653,x:154.6,y:5.15},0).wait(1).to({rotation:-15.6963,x:155,y:5.7},0).wait(1).to({rotation:-16.4274,x:155.6,y:6.2},0).wait(1).to({rotation:-17.1584,x:156.1,y:6.8},0).wait(1).to({rotation:-17.8895,x:156.55,y:7.35},0).wait(1).to({rotation:-18.6206,x:157.05,y:7.85},0).wait(1).to({rotation:-19.3516,x:157.55,y:8.4},0).wait(1).to({rotation:-20.0827,x:158.05,y:8.95},0).wait(1).to({rotation:-20.8137,x:158.55,y:9.55},0).wait(1).to({rotation:-21.5448,x:159.05,y:10.1},0).wait(1).to({rotation:-22.2759,x:159.6,y:10.65},0).wait(1).to({rotation:-23.0069,x:160.05,y:11.15},0).wait(1).to({rotation:-23.738,x:160.6,y:11.7},0).wait(1).to({rotation:-24.469,x:161.05,y:12.3},0).wait(1).to({rotation:-25.2001,x:161.55,y:12.8},0).wait(1).to({rotation:-24.6751,x:161.35},0).wait(1).to({rotation:-24.1501,x:161},0).wait(1).to({rotation:-23.6251,x:160.75},0).wait(1).to({rotation:-23.1001,x:160.55},0).wait(1).to({rotation:-22.5751,x:160.3},0).wait(1).to({rotation:-22.0501,x:160.05,y:12.85},0).wait(1).to({rotation:-21.5251,x:159.75},0).wait(1).to({rotation:-21.0001,x:159.5},0).wait(1).to({rotation:-20.4751,x:159.3},0).wait(1).to({rotation:-19.9501,x:159.1},0).wait(1).to({rotation:-19.4251,x:158.8},0).wait(1).to({rotation:-18.9001,x:158.55},0).wait(1).to({rotation:-18.3751,x:158.3},0).wait(1).to({rotation:-17.8501,x:158.05},0).wait(1).to({rotation:-17.3251,x:157.75},0).wait(1).to({rotation:-16.8001,x:157.5,y:12.9},0).wait(1).to({rotation:-16.2751,x:157.3},0).wait(1).to({rotation:-15.7501,x:157.05,y:12.85},0).wait(1).to({rotation:-15.2251,x:156.75,y:12.9},0).wait(1).to({rotation:-14.7001,x:156.5,y:12.85},0).wait(1).to({rotation:-14.1751,x:156.3,y:12.9},0).wait(1).to({rotation:-13.6501,x:156},0).wait(1).to({rotation:-13.1251,x:155.75},0).wait(1).to({rotation:-12.6,x:155.55},0).wait(1).to({rotation:-12.075,x:155.25},0).wait(1).to({rotation:-11.55,x:155},0).wait(1).to({rotation:-11.025,x:154.8},0).wait(1).to({rotation:-10.5,x:154.5},0).wait(1).to({rotation:-9.975,x:154.25},0).wait(1).to({rotation:-9.45,x:154},0).wait(1).to({rotation:-8.925,x:153.75},0).wait(1).to({rotation:-8.4,x:153.5},0).wait(1).to({rotation:-7.875,x:153.3,y:12.95},0).wait(1).to({rotation:-7.35,x:152.95,y:12.9},0).wait(1).to({rotation:-6.825,x:152.75,y:12.95},0).wait(1).to({rotation:-6.3,x:152.5,y:12.9},0).wait(1).to({rotation:-5.775,x:152.25,y:12.95},0).wait(1).to({rotation:-5.25,x:152},0).wait(1).to({rotation:-4.725,x:151.75},0).wait(1).to({rotation:-4.2,x:151.5},0).wait(1).to({rotation:-3.675,x:151.25,y:12.9},0).wait(1).to({rotation:-3.15,x:150.95,y:13},0).wait(1).to({rotation:-2.625,x:150.75,y:12.95},0).wait(1).to({rotation:-2.1,x:150.5},0).wait(1).to({rotation:-1.575,x:150.25,y:13},0).wait(1).to({rotation:-1.05,x:149.95,y:12.95},0).wait(1).to({rotation:-0.525,x:149.7,y:13},0).wait(1).to({rotation:0,x:149.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_191 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(191).call(this.frame_191).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.item3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(149.5,13,1,1,0,0,0,149.5,13);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1).to({regX:146.3,regY:12.8,x:146.3,y:12.8},0).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-62.2,316.2,150.10000000000002);


(lib.item2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-53.05},0).wait(1).to({x:-69.55},0).wait(1).to({x:-80.1},0).wait(1).to({x:-87.65},0).wait(1).to({x:-93.35},0).wait(1).to({x:-97.7},0).wait(1).to({x:-101.15},0).wait(1).to({x:-103.85},0).wait(1).to({x:-105.95},0).wait(1).to({x:-107.6},0).wait(1).to({x:-108.9},0).wait(1).to({x:-109.85},0).wait(1).to({x:-110.6},0).wait(1).to({x:-111.1},0).wait(1).to({x:-111.5},0).wait(1).to({x:-111.75},0).wait(1).to({x:-111.85},0).wait(1).to({x:-111.95},0).wait(1).to({x:-112},0).wait(3).to({x:-62.75},0).wait(1).to({x:-46.95},0).wait(1).to({x:-36.55},0).wait(1).to({x:-28.9},0).wait(1).to({x:-23},0).wait(1).to({x:-18.35},0).wait(1).to({x:-14.6},0).wait(1).to({x:-11.55},0).wait(1).to({x:-9.05},0).wait(1).to({x:-7.05},0).wait(1).to({x:-5.4},0).wait(1).to({x:-4.05},0).wait(1).to({x:-2.95},0).wait(1).to({x:-2.1},0).wait(1).to({x:-1.45},0).wait(1).to({x:-0.95},0).wait(1).to({x:-0.6},0).wait(1).to({x:-0.35},0).wait(1).to({x:-0.15},0).wait(1).to({x:-0.05},0).wait(1).to({x:0},0).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.item2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.item2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1).to({regX:-56,x:-56},0).wait(20).to({regX:0,x:0},0).wait(1).to({regX:-56,x:-56},0).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-7,126,14);


(lib.item1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(28.5,28.5,1,1,0,0,0,28.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.6521,y:28},0).wait(1).to({rotation:1.3043,y:27.6},0).wait(1).to({rotation:1.9564,y:27.1},0).wait(1).to({rotation:2.6085,x:28.45,y:26.6},0).wait(1).to({rotation:3.2606,x:28.5,y:26.1},0).wait(1).to({rotation:3.9128,y:25.7},0).wait(1).to({rotation:4.5649,y:25.15},0).wait(1).to({rotation:5.217,y:24.75},0).wait(1).to({rotation:5.8691,y:24.2},0).wait(1).to({rotation:6.5213,x:28.45,y:23.75},0).wait(1).to({rotation:7.1734,x:28.5,y:23.3},0).wait(1).to({rotation:7.8255,x:28.45,y:22.8},0).wait(1).to({rotation:8.4776,x:28.5,y:22.3},0).wait(1).to({rotation:9.1298,y:21.8},0).wait(1).to({rotation:9.7819,y:21.35},0).wait(1).to({rotation:10.434,y:20.9},0).wait(1).to({rotation:11.0861,x:28.45,y:20.4},0).wait(1).to({rotation:11.7383,y:19.9},0).wait(1).to({rotation:12.3904,x:28.5,y:19.45},0).wait(1).to({rotation:13.0425,x:28.45,y:18.95},0).wait(1).to({rotation:13.6946,x:28.5,y:18.5},0).wait(1).to({rotation:14.3468,y:18},0).wait(1).to({rotation:14.9989,x:28.45,y:17.55},0).wait(1).to({rotation:15.5316,x:28.9,y:17.1},0).wait(1).to({rotation:16.0643,x:29.4,y:16.7},0).wait(1).to({rotation:16.5971,x:29.85,y:16.2},0).wait(1).to({rotation:17.1298,x:30.3,y:15.8},0).wait(1).to({rotation:17.6625,x:30.75,y:15.35},0).wait(1).to({rotation:18.1952,x:31.2,y:14.9},0).wait(1).to({rotation:18.7279,x:31.7,y:14.5},0).wait(1).to({rotation:19.2606,x:32.15,y:14.05},0).wait(1).to({rotation:19.7934,x:32.6,y:13.6},0).wait(1).to({rotation:20.3261,x:33.1,y:13.2},0).wait(1).to({rotation:20.8588,x:33.55,y:12.75},0).wait(1).to({rotation:21.3915,x:34,y:12.35},0).wait(1).to({rotation:21.9242,x:34.45,y:11.9},0).wait(1).to({rotation:22.4569,x:34.9,y:11.45},0).wait(1).to({rotation:22.9897,x:35.35,y:11.05},0).wait(1).to({rotation:23.5224,x:35.85,y:10.55},0).wait(1).to({rotation:24.0551,x:36.25,y:10.1},0).wait(1).to({rotation:24.5878,x:36.7,y:9.7},0).wait(1).to({rotation:25.1205,x:37.2,y:9.25},0).wait(1).to({rotation:25.6532,x:37.65,y:8.85},0).wait(1).to({rotation:26.1859,x:38.05,y:8.4},0).wait(1).to({rotation:26.7187,x:38.55,y:7.95},0).wait(1).to({rotation:27.2514,x:39.05,y:7.55},0).wait(1).to({rotation:27.7841,x:39.45,y:7.1},0).wait(1).to({rotation:28.8375,x:38.9,y:6.65},0).wait(1).to({rotation:29.8909,x:38.4,y:6.2},0).wait(1).to({rotation:30.9443,x:37.9,y:5.8},0).wait(1).to({rotation:31.9976,x:37.3,y:5.35},0).wait(1).to({rotation:33.051,x:36.8,y:4.95},0).wait(1).to({rotation:34.1044,x:36.25,y:4.5},0).wait(1).to({rotation:35.1578,x:35.75,y:4.05},0).wait(1).to({rotation:36.2112,x:35.2,y:3.65},0).wait(1).to({rotation:37.2646,x:34.7,y:3.2},0).wait(1).to({rotation:38.3179,x:34.15,y:2.7},0).wait(1).to({rotation:39.3713,x:33.6,y:2.35},0).wait(1).to({rotation:40.4247,x:33.05,y:1.9},0).wait(1).to({rotation:41.4781,x:32.5,y:1.45},0).wait(1).to({rotation:42.5315,x:32,y:1},0).wait(1).to({rotation:43.5849,x:31.45,y:0.6},0).wait(1).to({rotation:44.6382,x:30.95,y:0.15},0).wait(1).to({rotation:45.6916,x:30.35,y:-0.3},0).wait(1).to({rotation:46.745,x:29.9,y:-0.7},0).wait(1).to({rotation:47.7984,x:29.35,y:-1.15},0).wait(1).to({rotation:48.8518,x:28.8,y:-1.6},0).wait(1).to({rotation:49.9052,x:28.25,y:-2.05},0).wait(1).to({rotation:50.9585,x:27.7,y:-2.45},0).wait(1).to({rotation:52.0119,x:27.2,y:-2.9},0).wait(1).to({rotation:53.0653,x:26.65,y:-3.3},0).wait(1).to({rotation:57.9864,x:27.35,y:-3.65},0).wait(1).to({rotation:62.9075,x:28.05,y:-3.9},0).wait(1).to({rotation:67.8286,x:28.65,y:-4.15},0).wait(1).to({rotation:72.7498,x:29.4,y:-4.45},0).wait(1).to({rotation:77.6709,x:30.05,y:-4.7},0).wait(1).to({rotation:82.592,x:30.7,y:-5.05},0).wait(1).to({rotation:87.5131,x:31.45,y:-5.3},0).wait(1).to({rotation:92.4342,x:32.15,y:-5.55},0).wait(1).to({rotation:97.3553,x:32.8,y:-5.85},0).wait(1).to({rotation:102.2764,x:33.45,y:-6.1},0).wait(1).to({rotation:107.1975,x:34.1,y:-6.35},0).wait(1).to({rotation:112.1187,x:34.8,y:-6.65},0).wait(1).to({rotation:117.0398,x:35.5,y:-6.9},0).wait(1).to({rotation:121.9609,x:36.15,y:-7.2},0).wait(1).to({rotation:126.882,x:36.85,y:-7.45},0).wait(1).to({rotation:131.8031,x:37.55,y:-7.75},0).wait(1).to({rotation:136.7242,x:38.2,y:-8},0).wait(1).to({rotation:141.6453,x:38.9,y:-8.3},0).wait(1).to({rotation:146.5664,x:39.6,y:-8.6},0).wait(1).to({rotation:151.4876,x:40.3,y:-8.9},0).wait(1).to({rotation:156.4087,x:41,y:-9.15},0).wait(1).to({rotation:161.3298,x:41.65,y:-9.5},0).wait(1).to({rotation:166.2509,x:42.35,y:-9.75},0).wait(1).to({rotation:171.172,x:43.05,y:-10},0).wait(1).to({rotation:160.6409,x:43.35,y:-9.1},0).wait(1).to({rotation:150.1098,x:43.7,y:-8.15},0).wait(1).to({rotation:139.5788,x:44.05,y:-7.15},0).wait(1).to({rotation:129.0477,x:44.4,y:-6.2},0).wait(1).to({rotation:118.5166,x:44.75,y:-5.3},0).wait(1).to({rotation:107.9855,x:45.1,y:-4.4},0).wait(1).to({rotation:97.4544,x:45.45,y:-3.45},0).wait(1).to({rotation:86.9234,x:45.85,y:-2.5},0).wait(1).to({rotation:76.3923,x:46.15,y:-1.6},0).wait(1).to({rotation:65.8612,x:46.5,y:-0.65},0).wait(1).to({rotation:55.3301,x:46.8,y:0.25},0).wait(1).to({rotation:44.7991,x:47.15,y:1.2},0).wait(1).to({rotation:34.268,x:47.55,y:2.15},0).wait(1).to({rotation:23.7369,x:47.9,y:3.05},0).wait(1).to({rotation:13.2058,x:48.25,y:4},0).wait(1).to({rotation:2.6747,x:48.55,y:4.9},0).wait(1).to({rotation:-7.8563,x:48.95,y:5.85},0).wait(1).to({rotation:-18.3874,x:49.3,y:6.8},0).wait(1).to({rotation:-28.9185,x:49.65,y:7.7},0).wait(1).to({rotation:-39.4496,x:49.95,y:8.6},0).wait(1).to({rotation:-49.9807,x:50.4,y:9.5},0).wait(1).to({rotation:-60.5117,x:50.7,y:10.5},0).wait(1).to({rotation:-71.0428,x:51,y:11.4},0).wait(1).to({rotation:-81.5739,x:51.4,y:12.35},0).wait(1).to({rotation:-76.0669,x:51.05,y:13.15},0).wait(1).to({rotation:-70.5599,x:50.75,y:14.05},0).wait(1).to({rotation:-65.0529,x:50.4,y:14.85},0).wait(1).to({rotation:-59.5459,x:50.1,y:15.75},0).wait(1).to({rotation:-54.039,x:49.8,y:16.6},0).wait(1).to({rotation:-48.532,x:49.45,y:17.4},0).wait(1).to({rotation:-43.025,x:49.15,y:18.25},0).wait(1).to({rotation:-37.518,x:48.8,y:19.1},0).wait(1).to({rotation:-32.011,x:48.5,y:19.95},0).wait(1).to({rotation:-26.504,x:48.15,y:20.8},0).wait(1).to({rotation:-20.997,x:47.85,y:21.65},0).wait(1).to({rotation:-15.49,x:47.55,y:22.5},0).wait(1).to({rotation:-9.9831,x:47.25,y:23.35},0).wait(1).to({rotation:-4.4761,x:46.9,y:24.25},0).wait(1).to({rotation:1.0309,x:46.6,y:25.1},0).wait(1).to({rotation:6.5379,x:46.25,y:25.95},0).wait(1).to({rotation:12.0449,x:45.95,y:26.8},0).wait(1).to({rotation:17.5519,x:45.6,y:27.65},0).wait(1).to({rotation:23.0589,x:45.3,y:28.45},0).wait(1).to({rotation:28.5659,x:45,y:29.4},0).wait(1).to({rotation:34.0728,x:44.7,y:30.2},0).wait(1).to({rotation:39.5798,x:44.35,y:31},0).wait(1).to({rotation:45.0868,x:44,y:31.9},0).wait(1).to({rotation:50.5938,x:43.75,y:32.75},0).wait(1).to({rotation:52.0396,x:42.9,y:32.15},0).wait(1).to({rotation:53.4855,x:42,y:31.55},0).wait(1).to({rotation:54.9313,x:41.1,y:31},0).wait(1).to({rotation:56.3772,x:40.3,y:30.45},0).wait(1).to({rotation:57.823,x:39.5,y:29.85},0).wait(1).to({rotation:59.2689,x:38.55,y:29.25},0).wait(1).to({rotation:60.7147,x:37.75,y:28.7},0).wait(1).to({rotation:62.1605,x:36.85,y:28.1},0).wait(1).to({rotation:63.6064,x:35.95,y:27.5},0).wait(1).to({rotation:65.0522,x:35.1,y:26.9},0).wait(1).to({rotation:66.4981,x:34.25,y:26.35},0).wait(1).to({rotation:67.9439,x:33.45,y:25.75},0).wait(1).to({rotation:69.3897,x:32.55,y:25.25},0).wait(1).to({rotation:70.8356,x:31.7,y:24.6},0).wait(1).to({rotation:72.2814,x:30.8,y:24},0).wait(1).to({rotation:73.7273,x:30,y:23.45},0).wait(1).to({rotation:75.1731,x:29.15,y:22.85},0).wait(1).to({rotation:76.619,x:28.25,y:22.3},0).wait(1).to({rotation:78.0648,x:27.4,y:21.7},0).wait(1).to({rotation:79.5106,x:26.6,y:21.1},0).wait(1).to({rotation:80.9565,x:25.7,y:20.55},0).wait(1).to({rotation:82.4023,x:24.8,y:19.95},0).wait(1).to({rotation:83.8482,x:23.95,y:19.4},0).wait(1).to({rotation:85.294,x:23.1,y:18.8},0).wait(1).to({rotation:81.7401,x:23.35,y:19.2},0).wait(1).to({rotation:78.1862,x:23.55,y:19.6},0).wait(1).to({rotation:74.6323,x:23.75,y:20},0).wait(1).to({rotation:71.0783,x:24,y:20.4},0).wait(1).to({rotation:67.5244,x:24.2,y:20.85},0).wait(1).to({rotation:63.9705,x:24.45,y:21.2},0).wait(1).to({rotation:60.4166,x:24.65,y:21.6},0).wait(1).to({rotation:56.8627,x:24.95,y:22.05},0).wait(1).to({rotation:53.3088,x:25.15,y:22.45},0).wait(1).to({rotation:49.7548,x:25.35,y:22.85},0).wait(1).to({rotation:46.2009,x:25.6,y:23.25},0).wait(1).to({rotation:42.647,x:25.8,y:23.65},0).wait(1).to({rotation:39.0931,x:26,y:24},0).wait(1).to({rotation:35.5392,x:26.25,y:24.45},0).wait(1).to({rotation:31.9853,x:26.45,y:24.85},0).wait(1).to({rotation:28.4313,x:26.7,y:25.25},0).wait(1).to({rotation:24.8774,x:26.9,y:25.7},0).wait(1).to({rotation:21.3235,x:27.15,y:26.1},0).wait(1).to({rotation:17.7696,x:27.35,y:26.5},0).wait(1).to({rotation:14.2157,x:27.6,y:26.95},0).wait(1).to({rotation:10.6618,x:27.8,y:27.3},0).wait(1).to({rotation:7.1078,x:28,y:27.75},0).wait(1).to({rotation:3.5539,x:28.25,y:28.1},0).wait(1).to({rotation:0,x:28.5,y:28.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_191 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(191).call(this.frame_191).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.item1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(28.5,28.5,1,1,0,0,0,28.5,28.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1).to({regX:37.9,regY:12.2,x:37.9,y:12.2},0).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-48.3,105.3,121.1);


(lib.ball_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(224.5,386.5,0.4074,0.4074,0,0,0,30.4,13.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:30.5,scaleX:0.3989,scaleY:0.3989,x:194.75},0).wait(1).to({scaleX:0.3905,scaleY:0.3905,x:165.05,y:386.45},0).wait(1).to({scaleX:0.382,scaleY:0.382,x:135.35},0).wait(1).to({scaleX:0.3735,scaleY:0.3735,x:105.65,y:386.5},0).wait(1).to({scaleX:0.3651,scaleY:0.3651,x:75.95},0).wait(1).to({scaleX:0.3566,scaleY:0.3566,x:46.25,y:386.45},0).wait(1).to({scaleX:0.3481,scaleY:0.3481,x:16.5,y:386.5},0).wait(1).to({scaleX:0.4296,scaleY:0.4296,x:32.5,alpha:0.125},0).wait(1).to({scaleX:0.5111,scaleY:0.5111,x:48.5,alpha:0.25},0).wait(1).to({scaleX:0.5926,scaleY:0.5926,x:64.5,alpha:0.375},0).wait(1).to({scaleX:0.6741,scaleY:0.6741,x:80.5,alpha:0.5},0).wait(1).to({scaleX:0.7556,scaleY:0.7556,x:96.5,alpha:0.625},0).wait(1).to({scaleX:0.837,scaleY:0.837,x:112.55,alpha:0.75},0).wait(1).to({scaleX:0.9185,scaleY:0.9185,x:128.5,alpha:0.875},0).wait(1).to({scaleX:1,scaleY:1,x:144.55,alpha:1},0).wait(16).to({scaleX:0.9069,scaleY:0.9069,x:126.25,alpha:0.8571},0).wait(1).to({scaleX:0.8138,scaleY:0.8138,x:107.95,alpha:0.7143},0).wait(1).to({scaleX:0.7206,scaleY:0.7206,x:89.7,alpha:0.5714},0).wait(1).to({scaleX:0.6275,scaleY:0.6275,x:71.4,y:386.45,alpha:0.4286},0).wait(1).to({scaleX:0.5344,scaleY:0.5344,x:53.1,alpha:0.2857},0).wait(1).to({scaleX:0.4413,scaleY:0.4413,x:34.8,alpha:0.1429},0).wait(1).to({scaleX:0.3481,scaleY:0.3481,x:16.5,y:386.5,alpha:0},0).wait(1).to({scaleX:0.3566,scaleY:0.3566,x:46.25,y:386.45},0).wait(1).to({scaleX:0.3651,scaleY:0.3651,x:75.95,y:386.5},0).wait(1).to({scaleX:0.3735,scaleY:0.3735,x:105.65},0).wait(1).to({scaleX:0.382,scaleY:0.382,x:135.35,y:386.45},0).wait(1).to({scaleX:0.3905,scaleY:0.3905,x:165.05},0).wait(1).to({scaleX:0.3989,scaleY:0.3989,x:194.75,y:386.5},0).wait(1).to({scaleX:0.4074,scaleY:0.4074,x:224.5,y:386.45},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_5_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(33,14.5,1,1,0,0,0,33,14.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1).to({regX:32.2,regY:32.2,x:32.2,y:32.2},0).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,64,64);


(lib.Scene_1_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// scene
	this.instance = new lib.scene();
	this.instance.parent = this;
	this.instance.setTransform(876,376,1,1,0,0,0,881,378);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_scene, null, null);


(lib.right_red_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red_group
	this.instance = new lib.red_group();
	this.instance.parent = this;
	this.instance.setTransform(121.5,228,1,1,0,0,0,36.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.right_red_group, null, null);


(lib.item5_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red
	this.instance = new lib.item2();
	this.instance.parent = this;
	this.instance.setTransform(207.6,20,1,1,0,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.item5_red, null, null);


(lib.item5_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.item3();
	this.instance.parent = this;
	this.instance.setTransform(149.6,39.85,1,1,0,0,0,149.6,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.item5_line, null, null);


(lib.item5_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue
	this.instance = new lib.item1();
	this.instance.parent = this;
	this.instance.setTransform(172.1,28.5,1,1,0,0,0,28.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.item5_blue, null, null);


(lib.item5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red_obj_
	this.red = new lib.item5_red();
	this.red.name = "red";
	this.red.parent = this;
	this.red.setTransform(200.6,13,1,1,0,0,0,200.6,13);
	this.red.depth = 0;
	this.red.isAttachedToCamera = 0
	this.red.isAttachedToMask = 0
	this.red.layerDepth = 0
	this.red.layerIndex = 0
	this.red.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.red).wait(1));

	// blue_obj_
	this.blue = new lib.item5_blue();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(172.1,28.5,1,1,0,0,0,172.1,28.5);
	this.blue.depth = 0;
	this.blue.isAttachedToCamera = 0
	this.blue.isAttachedToMask = 0
	this.blue.layerDepth = 0
	this.blue.layerIndex = 1
	this.blue.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blue).wait(1));

	// line_obj_
	this.line = new lib.item5_line();
	this.line.name = "line";
	this.line.parent = this;
	this.line.setTransform(149.5,39.9,1,1,0,0,0,149.5,39.9);
	this.line.depth = 0;
	this.line.isAttachedToCamera = 0
	this.line.isAttachedToMask = 0
	this.line.layerDepth = 0
	this.line.layerIndex = 2
	this.line.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.line).wait(1));

}).prototype = getMCSymbolPrototype(lib.item5, new cjs.Rectangle(0,0,299,57), null);


(lib.ball_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(187.05,188.15,0.9911,1,180,0,0,71.2,-143.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:32.2,regY:32.2,rotation:168.1827,x:188.8,y:8.1},0).wait(1).to({rotation:156.3655,x:151.9,y:11.5},0).wait(1).to({rotation:144.5482,x:116.45,y:22.4},0).wait(1).to({rotation:132.7309,x:84.1,y:40.4},0).wait(1).to({rotation:120.9137,x:56,y:64.65},0).wait(1).to({rotation:109.0964,x:33.45,y:94.05},0).wait(1).to({rotation:97.2791,x:17.5,y:127.5},0).wait(1).to({rotation:85.4619,x:8.65,y:163.5},0).wait(1).to({rotation:73.6446,x:7.45,y:200.5},0).wait(1).to({rotation:61.8273,x:13.75,y:237.1},0).wait(1).to({rotation:50.0101,x:27.5,y:271.5},0).wait(1).to({rotation:38.1928,x:48,y:302.4},0).wait(1).to({rotation:26.3755,x:74.3,y:328.5},0).wait(1).to({rotation:14.5583,x:105.45,y:348.55},0).wait(1).to({rotation:2.741,x:140.05,y:361.9},0).wait(1).to({rotation:2.741},0).wait(15).to({rotation:15.4024,x:103.05,y:347.4},0).wait(1).to({rotation:28.0637,x:70.2,y:325.05},0).wait(1).to({rotation:40.7251,x:43.05,y:296.15},0).wait(1).to({rotation:53.3864,x:22.85,y:261.95},0).wait(1).to({rotation:66.0478,x:10.6,y:224.15},0).wait(1).to({rotation:78.7091,x:7,y:184.65},0).wait(1).to({rotation:91.3705,x:12.15,y:145.3},0).wait(1).to({rotation:104.0319,x:25.75,y:108},0).wait(1).to({rotation:116.6932,x:47.25,y:74.6},0).wait(1).to({rotation:129.3546,x:75.5,y:46.75},0).wait(1).to({rotation:142.0159,x:109.25,y:25.7},0).wait(1).to({rotation:154.6773,x:146.7,y:12.6},0).wait(1).to({rotation:167.3386,x:186.1,y:8.05},0).wait(1).to({rotation:180,x:225.65,y:12.25},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// blue_obj_
	this.blue = new lib.ball_blue();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(210.3,96.4,1,1,0,0,0,210.3,96.4);
	this.blue.depth = 0;
	this.blue.isAttachedToCamera = 0
	this.blue.isAttachedToMask = 0
	this.blue.layerDepth = 0
	this.blue.layerIndex = 0
	this.blue.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blue).wait(1).to({regX:112.6,regY:182.4,x:112.6,y:182.4},0).wait(44));

	// shadow_obj_
	this.shadow = new lib.ball_shadow();
	this.shadow.name = "shadow";
	this.shadow.parent = this;
	this.shadow.setTransform(224.5,386.5,1,1,0,0,0,224.5,386.5);
	this.shadow.depth = 0;
	this.shadow.isAttachedToCamera = 0
	this.shadow.isAttachedToMask = 0
	this.shadow.layerDepth = 0
	this.shadow.layerIndex = 1
	this.shadow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(1).to({regX:121.4,x:121.4},0).wait(44));

	// path_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmSdMQghgEgUgbQgUgcAFghQAEghAcgVQAbgUAhAFQGgA9FvhWQFUhOERjGQEDi7CvkRQCqkJBEk3QBGk4grk4QgrlDidkYIgBAAQimkqkWjaQkujsmZh+QgggKgPgeQgQgeAKggQAKggAegQQAdgPAgAJQG4CIFDD+IABAAQEvDuC3FGQCsEzAwFiQAvFVhNFUQhLFUi5EhQjAEskcDMQkrDZl0BWQjoA2j5AAQixAAi6gbg");
	var mask_graphics_1 = new cjs.Graphics().p("Ag9dwQgagXgCghQgCgiAWgaQAXgZAhgCQGkgbFVigQE8iUDij6QDXjsBykwQBwkmACk/QADk+hrkqQhtkzjUjxIAAAAQjhkBk9ibQlYipmqgmQghgDgWgaQgVgaADghQADgiAagWQAagVAgACQHKAqFxC2IABAAQFaCpD2EZQDpEJB4FQQB1FEgEFcQgDFdh5FBQh+FNjrEDQj4ESlaChQlvCunEAdIgGAAQgeAAgXgUg");
	var mask_graphics_2 = new cjs.Graphics().p("AFHdcQgegRgIggQgKggARgeQARgeAggIQGWhxEtjjQEXjRCrkjQChkTAylCQAwk1g/k5Qg+k5imkOQipkVkCjBIAAAAQkRjNlWhXQlzhempAxQghAEgagVQgbgVgEghQgDgiAVgaQAVgbAhgEQHIg1GOBmIABAAQF2BfEqDhQEaDTC6EwQC1EmBEFWQBFFWg1FSQg3FfixEuQi6E/kyDlQlED1m1B6QgMADgLAAQgUAAgTgLg");
	var mask_graphics_3 = new cjs.Graphics().p("AK9cmQgggKgQgeQgPgeAKghQAKggAegPQF2jCD5kbQDmkGBrlAQBlkvgRlDQgQk6h+klQh9kmjajmQjfjtkjiIIAAAAQk1iQlhgPQl9gRmXCIQggALgegPQgegPgLggQgKggAPgeQAPgfAggKQG0iSGaASIAAAAQGCAQFSCeQE/CVD1EEQDtD6CJFCQCJFAASFWQATFjhwFMQh1Fej8EfQkLEymTDRQgSAJgTAAQgMAAgNgEg");
	var mask_graphics_4 = new cjs.Graphics().p("AQVbOQgigEgVgaQgVgaADgiQADgiAbgVQFGkKC5lJQCrkvAnlPQAmk9hUk5QhQkwi3kFQi3kGkEi0QkLi7k5hJIAAAAQlMhOlcA6Ql5A+lyDZQgdARghgJQgggJgRgcQgRgeAIggQAJghAdgRQGNjoGWhDIAAAAQF8g/FrBVQFXBRElDLQEcDFDHEeQDIEdBYFMQBbFXgpFcQgqFvi8FMQjHFjlgEeQgWATgdAAIgIAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AUFY/QgagVgEghQgDgiAVgaQEIlIBylnQBqlNgflPQgck9iSkiQiNkajpjZQjpjbkjh7QkriAlCgIIAAABQlUgJlJCAQllCLk+EgQgYAWgigCQgigBgWgZQgXgZACgiQABgiAZgWQFVk1GAiUIAAgBQFoiMF0AKQFgAIFICLQE+CGD+DwQD/DuCZEzQChE9AfFcQAhFwhzFsQh6GEkeFgQgUAbgiADIgKABQgcAAgWgTg");
	var mask_graphics_6 = new cjs.Graphics().p("AX2WxQgegPgKghQgLggAQgeQDAl3All3QAklbhjlBQhdkxjLj+QjDj3kRilQkQink3g8Qk+hAk8A7IAAAAQlQA+koDBQlBDQj8FbQgTAbgiAFQghAGgbgUQgbgUgGghQgFgiAUgbQEOl0FZjgIAAAAQFEjTFvhDQFahBFdBFQFTBDEqC2QEpC0DWENQDeEWBmFPQBsFhgmF7QgoGVjPGUQgPAeghAKQgMAEgNAAQgTAAgSgJg");
	var mask_graphics_7 = new cjs.Graphics().p("AamUKQghgJgRgdQgQgeAJggQBumWgol3QgklbijkmQiakYj6jPQjyjJkthqQkthrk7AEQlGAEkpB6IAAAAQk8CBj6D6QkPEOivGGQgOAeggAMQgfAMgfgNQgfgOgMggQgMgfAOgeQC8mkEkkiIAAAAQERkRFaiNQFGiGFlgEQFYgFFIB1QFJB0EIDcQESDiCpEzQCyFDAoF7QAsGUh3G2QgJAggdARQgTALgVAAQgLAAgLgDg");
	var mask_graphics_8 = new cjs.Graphics().p("AccRTQghgBgXgaQgWgZACgiQAZmkh0lnQhrlLjcj/QjQjykgiYQkWiTk8gqQk7grk1BFQk+BGkKC1IAAAAQkaC/jCEoQjSE/hbGiQgHAhgdASQgcASghgHQghgHgSgdQgSgcAHghQBinBDilXIAAAAQDTlDE2jRQEjjGFdhNQFQhMFZAwQFZAuEwCgQE7CmDjEJQDyEZB1FqQB+GCgcHFQgBAigaAWQgXAVgdAAIgHgBg");
	var mask_graphics_9 = new cjs.Graphics().p("A8sQnQgiAAgYgYQgXgZAAghQAEnMCXl/IgBAAQCNlmEEkNQD1j9FFiTQE6iPFcgZQFagZFKBeQFWBiEWDVQElDhC+FLQDKFgBCHBQAFAhgUAbQgUAbghAFQgiAFgbgUQgbgUgFgiQg+mgi7lHQitkukLjNQj9jDk5hZQkuhXk9AYQk/AXkgCCQkoCGjgDnIAAABQjtD1iBFIQiMFkgDGtQgBAhgYAYQgYAXghAAIAAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("A77TWQgcgTgHggQhanDBFmWIgBAAQBAl8DIk8QC7kqEgjTQEWjMFQhfQFPhhFVAZQFjAZE7CYQFOCgD9EeQEOEvCdGpQAMAfgOAfQgPAfgfALQggAMgfgOQgegOgMggQiSmKj6kaQjnkFkxiSQkfiKlEgXQk5gXkyBYQkzBYj/C7QkHDAirEQIAAAAQi2Egg7FcQhAF5BVGlQAGAggSAcQgTAdghAGQgJACgIAAQgYAAgUgOg");
	var mask_graphics_11 = new cjs.Graphics().p("A4VWQQgggNgNgeQi1mngQmbIAAgBQgPmBCCldQB6lKDvkKQDmkBE1iiQE0ijFUguQFggwFUBUQFnBYEyDkQFHDxDxGBQASAcgIAhQgHAhgdASQgcASgigIQghgHgRgdQjgllkvjgQkYjQlHhQQk2hNlBAsQk4AqkaCVQkaCVjTDrQjaDyhwEtIAAABQh3E+AOFhQAPF/CpGKQANAegNAgQgMAfgfANQgQAHgQAAQgPAAgPgGg");
	var mask_graphics_12 = new cjs.Graphics().p("AzEYzQghgGgUgbQkHl5hkmPIAAAAQhfl2A4lyQA0lbCzk0QCtkrENjeQEMjfFDhzQFQh3FcAMQFyANFaCgQFyCpE7FHQAXAYgBAiQAAAigZAXQgYAXgiAAQgigBgXgYQkkkvlXieQk8iSlRgMQk+gLkyBtQkpBpj1DMQj2DLieESQikEZgwE9IABABQgzFRBWFXQBdFzD2FfQATAbgGAhQgGAigbATQgVAPgZAAIgPgCg");
	var mask_graphics_13 = new cjs.Graphics().p("AtTajQlQk7izlyIgBAAQiolbgWl1QgUleBwlTQBslIDZkRQDZkREliyQEwi6FXg7QFthAF0BVQGMBaF3EAQAcASAGAiQAGAhgTAcQgTAcghAGQghAGgcgTQlcjtlwhUQlUhOlMA6Qk5A3kVCpQkNCjjGD6QjHD6hjEtQhnE0ATFAIAAABQAUFUCaE+QCoFYE4ElQAZAXABAiQABAhgXAZQgXAYgiACIgDAAQggAAgXgWg");
	var mask_graphics_14 = new cjs.Graphics().p("AlkcQQmJjvj7lFIgBAAQjskxhhlpQhdlUAoliQAnlWCdk4QCbk4D7jqQEDj0FFiBQFXiJF9AHQGXAHGjCtQAfANANAfQANAfgNAfQgMAfggAOQgfANgfgOQmGigl5gHQlcgHk4B9QkpB2jtDfQjlDXiPEdQiPEdgjE7QgmFCBVE2IAAAAQBZFKDYEXQDrEuFuDfQAcARAIAhQAIAhgRAdQgSAdghAIQgKACgKAAQgVAAgUgMg");
	var mask_graphics_15 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_16 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_17 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_18 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_19 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_20 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_21 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_22 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_23 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_24 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_25 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_26 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_27 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_28 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_29 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_30 = new cjs.Graphics().p("ADAdaQmxiak5kLIAAAAQkmj6iplNQigk5gilkQghlWBalRQBZlRDFkZQDLkkEkjBQE0jNF2hHQGPhNG+BUQAhAGAUAcQATAcgHAhQgGAhgcATQgcATghgGQmehNlyBGQlWBBkZC7QkKCwi6EKQi0EChRE0QhSE1AeE6QAeFECSEeIAAAAQCbEwENDlQEjD4GTCPQAgALAOAfQAPAegLAgQgMAggeAOQgSAJgRAAQgOAAgNgFg");
	var mask_graphics_31 = new cjs.Graphics().p("AmJcKQmGj1j2lJIgBAAQjok1hclqQhXlVAulhQArlWChk1QChk2D+jnQEGjwFIh8QFYiEF9ANQGXAMGgC0QAfANANAgQAMAfgNAfQgNAfggANQgfAMgfgOQmDiml5gMQlcgMk7B4QkqByjwDbQjoDTiTEcQiUEbgoE6QgpFBBPE4IABAAQBUFKDUEbQDmEyFrDkQAcASAHAhQAIAggSAdQgSAcghAIQgKACgJAAQgWAAgUgMg");
	var mask_graphics_32 = new cjs.Graphics().p("AuUaQQlGlEipl3IAAgBQiflfgKl2QgKlfB6lPQB1lFDikKQDgkKEqiqQE1ixFagxQFug1FxBhQGKBlFvEKQAbAUAGAiQAFAhgUAbQgUAbghAGQgiAFgbgUQlVj3lthfQlRhYlOAxQk7AtkaChQkRCbjOD0QjOD0hsEpQhvEyAJFAIAAABQAKFVCRFCQCdFdEwEuQAXAXAAAiQABAigYAYQgYAYgiAAIAAAAQgiAAgXgYg");
	var mask_graphics_33 = new cjs.Graphics().p("A0UYTQghgIgSgcQj3mEhSmTIAAAAQhOl6BIluQBDlZDBktQC6kjEWjSQEVjSFJhkQFUhpFcAcQFwAdFUCvQFpC5EsFVQAWAZgCAiQgCAhgZAWQgZAXgigCQgigCgWgaQkXk8lPisQk2iglQgaQk+gak2BgQktBbj9DBQj/DBirEKQiwESg9E6IAAABQhBFOBGFbQBNF2DmFqQASAcgHAhQgHAhgdASQgUANgXAAQgJAAgJgCg");
	var mask_graphics_34 = new cjs.Graphics().p("A5jVdQgegPgMgfQibmxAImbIAAAAQAHmCCXlVQCNlCD+j7QD1jzE+iQQE9iRFWgZQFigcFOBoQFiBtEkD1QE4EFDaGOQAQAdgJAhQgKAggdAQQgeAQghgJQgggKgQgdQjKlykijyQkLjglChjQkxhelDAYQk5AYkiCEQkjCEjhDfQjoDkiBEnIAAAAQiJE3gHFhQgHF/CRGTQALAfgOAfQgPAfgfALQgOAFgOAAQgSAAgRgIg");
	var mask_graphics_35 = new cjs.Graphics().p("A8wSQQgbgVgEghQg5nIBjmPIgBgBQBcl2DeksQDRkbEvi+QEki3FWhGQFVhIFSAyQFgAzEwCvQFAC4DoEvQD3FDB+GzQAJAggQAeQgRAdggAJQghAKgegQQgdgRgJggQh1mUjkksQjUkVklioQkUiflCgvQk2guk4BCQk4BBkNCoQkUCsi/EDIABAAQjLEShUFWQhcF0A2GpQAEAhgVAbQgVAbghAEIgLABQgbAAgWgSg");
	var mask_graphics_36 = new cjs.Graphics().p("Ab8PSQgZgWgCgiQgZmkidlXQiSk8j4jkQjrjYkwh0Qklhxk/gFQk+gFkrBpQkzBrjzDTIAAAAQkCDfidE8QirFWgpGrQgDAhgbAVQgaAWghgDQgigEgVgaQgWgaAEghQAsnKC4lwIAAAAQCslZEaj0QEKjnFRh2QFGhzFbAHQFdAEFAB8QFMB/ECDtQEQD6CgFaQCqFxAbHFQACAhgXAaQgWAZgiACIgGAAQgeAAgXgVg");
	var mask_graphics_37 = new cjs.Graphics().p("AbkSwQghgFgUgcQgUgcAGghQBEmfhPlxQhIlUjBkVQi1kGkPi0QkFivk2hKQk3hMk5AlQlDAlkbCYIAAABQktChjfESQjyEpiGGWQgKAfgeAQQgfAPgfgLQghgKgPgeQgPgfAKgfQCRm0EEk/IAAAAQDzksFJiwQE2inFjgpQFWgoFTBSQFTBREdC/QEoDFDHEgQDUEwBPF0QBVGNhJHAQgGAhgbAUQgWAPgYAAIgPgBg");
	var mask_graphics_38 = new cjs.Graphics().p("AZLVsQgfgNgOgfQgNgfANgfQCdmHAFl5QAEldh/k3Qh4kojgjrQjZjkkeiMQkeiOk7ghQlCgjk2BXIAAAAQlJBbkWDbQktDsjcFwQgRAcghAJQggAIgdgRQgdgSgIghQgJggASgdQDsmLFEj9IAAgBQEvjvFohjQFThfFiAmQFXAjE5CcQE5CZDsD5QD2EBCDFFQCLFVgEF+QgEGWiqGlQgNAfgfANQgQAHgPAAQgQAAgPgGg");
	var mask_graphics_39 = new cjs.Graphics().p("AViYPQgbgTgHghQgFghATgcQDvlaBXlvQBRlTg3lNQg0k6iokWQihkOj4jIQj5jJkrhmQk0holAAQIgBAAQlUARk/CYQlaClknE2QgXAYgiABQgiABgYgXQgYgYgBghQgBgiAXgYQE9lNF0ixIAAAAQFcinF1gSQFfgSFSBzQFHBuEPDcQEPDaCwEnQC4ExA4FYQA9FthYFzQhdGMkCF1QgTAcgiAGIgPABQgYAAgWgPg");
	var mask_graphics_40 = new cjs.Graphics().p("ARwatQgigBgWgZQgXgZABgiQACgiAZgWQE1keCmlTQCZk5ATlQQASk+hmk0QhikrjHj6QjGj6kOilQkViqk9g3IAAABQlPg7lZBPQl1BVllDuQgbASghgGQghgHgTgcQgTgcAHghQAGghAcgTQF/j/GRhbIAAAAQF5hWFuBAQFbA8ExC6QEnCzDYESQDZERBrFGQBwFSgVFcQgUFxioFXQixFulOEzQgYAVggAAIgDAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AMKcWQgggJgRgdQgRgdAJghQAJghAdgQQFtjTDskmQDakQBclFQBYkygglDQgek5iLkfQiKkgjkjbQjpjjkph7IAAAAQk7iClhAAQl+ABmQCaQgfAMgfgOQgfgNgMgfQgMggANgfQAOgfAfgMQGuilGbgBIAAAAQGBgBFZCPQFFCHEBD4QD4DwCXE6QCYE6AgFWQAjFhhgFQQhlFkjvEqQj9E9mKDjQgTALgVAAQgKAAgMgDg");
	var mask_graphics_42 = new cjs.Graphics().p("AF/dWQgegQgKggQgKggAQgeQAPgeAhgKQGSh9EmjrQERjaChkoQCZkYAolCQAnk3hIk3QhIk3itkJQiykQkHi5IgBAAQkWjFlZhMQl2hTmnA+QghAFgbgUQgbgVgFghQgFghAUgbQAVgbAhgFQHGhDGRBaIABgBQF4BUExDYQEgDKDEErQC+EgBNFUQBQFTgrFUQgsFhioEzQixFFkqDuQk9D+mxCHQgNAEgMAAQgTAAgSgKg");
	var mask_graphics_43 = new cjs.Graphics().p("AggdwQgagWgCghQgDgiAWgaQAWgZAggDQGkgiFTilQE6iYDej+QDTjvBukyQBqkogCk+QgCk/hvkoQhykxjYjuIAAAAQjlj9k/iXQlbijmqggQghgDgWgZQgWgaACghQADgiAZgWQAagWAhACQHKAjF0CwIAAAAQFeCkD6EVQDsEFB+FOQB5FDACFdQADFbh1FDQh4FPjnEHQj0EWlXCnQltCynFAkIgHABQgcAAgXgUg");
	var mask_graphics_44 = new cjs.Graphics().p("AmLdPQgigFgUgbQgVgbAFgiQAFghAbgUQAbgVAiAFQGfA7FwhWQFThQERjHQECi7CukSQCpkJBEk4QBEk4gsk4QgslDiekYIgBAAQinkpkXjZQkujrmah9QgggKgPgeQgQgdAJggQALghAdgQQAegPAgAJQG4CHFED9IABAAQEwDtC4FFQCtEyAxFiQAwFVhLFUQhKFVi5EhQi+EtkcDNQkqDal0BXQjrA4j+AAQitAAi1gZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:189.6541,y:189.2546}).wait(1).to({graphics:mask_graphics_1,x:189.5858,y:187.4733}).wait(1).to({graphics:mask_graphics_2,x:189.6676,y:186.1602}).wait(1).to({graphics:mask_graphics_3,x:189.7517,y:180.3744}).wait(1).to({graphics:mask_graphics_4,x:189.7905,y:170.5682}).wait(1).to({graphics:mask_graphics_5,x:189.6275,y:157.6751}).wait(1).to({graphics:mask_graphics_6,x:189.27,y:142.2924}).wait(1).to({graphics:mask_graphics_7,x:188.9239,y:125.1025}).wait(1).to({graphics:mask_graphics_8,x:186.9549,y:106.668}).wait(1).to({graphics:mask_graphics_9,x:186.2662,y:102.2714}).wait(1).to({graphics:mask_graphics_10,x:183.3689,y:120.9732}).wait(1).to({graphics:mask_graphics_11,x:175.8749,y:138.6101}).wait(1).to({graphics:mask_graphics_12,x:164.7545,y:154.5644}).wait(1).to({graphics:mask_graphics_13,x:150.8061,y:168.2103}).wait(1).to({graphics:mask_graphics_14,x:134.6305,y:178.9926}).wait(1).to({graphics:mask_graphics_15,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_16,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_17,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_18,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_19,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_20,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_21,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_22,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_23,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_24,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_25,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_26,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_27,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_28,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_29,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_30,x:116.8624,y:186.0695}).wait(1).to({graphics:mask_graphics_31,x:135.8399,y:178.3358}).wait(1).to({graphics:mask_graphics_32,x:152.947,y:166.4279}).wait(1).to({graphics:mask_graphics_33,x:167.3872,y:151.3256}).wait(1).to({graphics:mask_graphics_34,x:178.4332,y:133.7419}).wait(1).to({graphics:mask_graphics_35,x:184.9832,y:114.3912}).wait(1).to({graphics:mask_graphics_36,x:186.455,y:95.8724}).wait(1).to({graphics:mask_graphics_37,x:188.607,y:115.9544}).wait(1).to({graphics:mask_graphics_38,x:189.0837,y:135.0807}).wait(1).to({graphics:mask_graphics_39,x:189.5234,y:152.4006}).wait(1).to({graphics:mask_graphics_40,x:189.7587,y:167.1377}).wait(1).to({graphics:mask_graphics_41,x:189.7761,y:178.5473}).wait(1).to({graphics:mask_graphics_42,x:189.6797,y:185.6006}).wait(1).to({graphics:mask_graphics_43,x:189.5847,y:187.4401}).wait(1).to({graphics:mask_graphics_44,x:189.6663,y:189.1899}).wait(1));

	// path_obj_
	this.path = new lib.ball_path();
	this.path.name = "path";
	this.path.parent = this;
	this.path.setTransform(117,186,1,1,0,0,0,117,186);
	this.path.depth = 0;
	this.path.isAttachedToCamera = 0
	this.path.isAttachedToMask = 0
	this.path.layerDepth = 0
	this.path.layerIndex = 2
	this.path.maskLayerName = 0

	var maskedShapeInstanceList = [this.path];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.path).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1,238.9,401);


(lib.Scene_1_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// left
	this.instance = new lib.item5();
	this.instance.parent = this;
	this.instance.setTransform(734,90.5,1,1,0,0,0,149.6,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_left, null, null);


(lib.right_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ball
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(117,200,1,1,0,0,0,117,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.right_ball, null, null);


(lib.right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red_group_obj_
	this.red_group = new lib.right_red_group();
	this.red_group.name = "red_group";
	this.red_group.parent = this;
	this.red_group.setTransform(65.5,228,1,1,0,0,0,65.5,228);
	this.red_group.depth = 0;
	this.red_group.isAttachedToCamera = 0
	this.red_group.isAttachedToMask = 0
	this.red_group.layerDepth = 0
	this.red_group.layerIndex = 0
	this.red_group.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.red_group).wait(1));

	// ball_obj_
	this.ball = new lib.right_ball();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(193.4,193,1,1,0,0,0,193.4,193);
	this.ball.depth = 0;
	this.ball.isAttachedToCamera = 0
	this.ball.isAttachedToMask = 0
	this.ball.layerDepth = 0
	this.ball.layerIndex = 1
	this.ball.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// 黑洞_obj_
	this.黑洞 = new lib.right_黑洞();
	this.黑洞.name = "黑洞";
	this.黑洞.parent = this;
	this.黑洞.setTransform(227,12,1,1,0,0,0,227,12);
	this.黑洞.depth = 0;
	this.黑洞.isAttachedToCamera = 0
	this.黑洞.isAttachedToMask = 0
	this.黑洞.layerDepth = 0
	this.黑洞.layerIndex = 2
	this.黑洞.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.黑洞).wait(1));

}).prototype = getMCSymbolPrototype(lib.right, new cjs.Rectangle(-27,-6,413.9,398), null);


(lib.Scene_1_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// right
	this.instance = new lib.right();
	this.instance.parent = this;
	this.instance.setTransform(1380.5,386,1,1,0,0,0,120.5,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_right, null, null);


// stage content:
(lib._2019janlife = function(mode,startPosition,loop) {
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

	// right_obj_
	this.right = new lib.Scene_1_right();
	this.right.name = "right";
	this.right.parent = this;
	this.right.setTransform(1439.9,378.9,1,1,0,0,0,1439.9,378.9);
	this.right.depth = 0;
	this.right.isAttachedToCamera = 0
	this.right.isAttachedToMask = 0
	this.right.layerDepth = 0
	this.right.layerIndex = 0
	this.right.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.right).wait(1));

	// left_obj_
	this.left = new lib.Scene_1_left();
	this.left.name = "left";
	this.left.parent = this;
	this.left.setTransform(733.9,90.5,1,1,0,0,0,733.9,90.5);
	this.left.depth = 0;
	this.left.isAttachedToCamera = 0
	this.left.isAttachedToMask = 0
	this.left.layerDepth = 0
	this.left.layerIndex = 1
	this.left.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.left).wait(1));

	// scene_obj_
	this.scene = new lib.Scene_1_scene();
	this.scene.name = "scene";
	this.scene.parent = this;
	this.scene.setTransform(876,376,1,1,0,0,0,876,376);
	this.scene.depth = 0;
	this.scene.isAttachedToCamera = 0
	this.scene.isAttachedToMask = 0
	this.scene.layerDepth = 0
	this.scene.layerIndex = 2
	this.scene.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.scene).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(795,373,962,381);
// library properties:
lib.properties = {
	id: '3F730BEF3B514601B2980B81405BE89A',
	width: 1600,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/2019_jan_life_atlas_.png", id:"2019_jan_life_atlas_"}
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
an.compositions['3F730BEF3B514601B2980B81405BE89A'] = {
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