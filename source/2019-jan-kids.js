(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2019_jan_kids_atlas_", frames: [[223,342,265,167],[74,343,31,32],[74,391,31,10],[223,118,219,222],[0,416,16,6],[0,0,492,116],[0,343,72,71],[0,118,221,223],[74,403,16,16],[74,377,28,12]]}
];


// symbols:



(lib.BACK = function() {
	this.initialize(img.BACK);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2364,1173);


(lib.line = function() {
	this.initialize(ss["2019_jan_kids_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.red = function() {
	this.initialize(ss["2019_jan_kids_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shadow = function() {
	this.initialize(ss["2019_jan_kids_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shadow2 = function() {
	this.initialize(ss["2019_jan_kids_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.shadow3 = function() {
	this.initialize(ss["2019_jan_kids_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.TEXT = function() {
	this.initialize(ss["2019_jan_kids_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.triangle = function() {
	this.initialize(ss["2019_jan_kids_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件 = function() {
	this.initialize(ss["2019_jan_kids_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.彈跳小黃球 = function() {
	this.initialize(ss["2019_jan_kids_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.黑洞 = function() {
	this.initialize(ss["2019_jan_kids_atlas_"]);
	this.gotoAndStop(9);
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


(lib.Symbol_11_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.red();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_11_Layer_1, null, null);


(lib.Symbol_8_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_8_Layer_1, null, null);


(lib.Symbol_5_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shadow2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_5_Layer_1, null, null);


(lib.Symbol_4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.向量圖智慧型物件();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_4_Layer_1, null, null);


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.triangle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1, null, null);


(lib.Symbol_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shadow3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_2_Layer_1, null, null);


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.彈跳小黃球();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1, null, null);


(lib.scene_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.TEXT();
	this.instance.parent = this;
	this.instance.setTransform(201,95);

	this.instance_1 = new lib.BACK();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene_Layer_1, null, null);


(lib.item2_path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// path
	this.instance = new lib.line();
	this.instance.parent = this;
	this.instance.setTransform(18,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();


(lib.item2_hole = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hole
	this.instance = new lib.黑洞();
	this.instance.parent = this;
	this.instance.setTransform(267,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_11_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(15.5,16,1,1,0,0,0,15.5,16);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,31,32), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_8_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(15.5,5,1,1,0,0,0,15.5,5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,31,10), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_5_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(109.5,111,1,1,0,0,0,109.5,111);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,219,222), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(110.5,111.5,1,1,0,0,0,110.5,111.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,221,223), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(36,35.5,1,1,0,0,0,36,35.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,72,71), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(8,3,1,1,0,0,0,8,3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,16,6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(8,8,1,1,0,0,0,8,8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,16,16), null);


(lib.Symbol_6_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(15.5,15.95,0.3938,0.3938,0,0,0,15.5,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:16,scaleX:0.4371,scaleY:0.4371,x:15.45,y:16.05},0).wait(1).to({scaleX:0.4804,scaleY:0.4804,x:15.5},0).wait(1).to({scaleX:0.5237,scaleY:0.5237,x:15.45},0).wait(1).to({scaleX:0.567,scaleY:0.567,x:15.5},0).wait(1).to({scaleX:0.6103,scaleY:0.6103,x:15.45},0).wait(1).to({scaleX:0.6536,scaleY:0.6536,x:15.5},0).wait(1).to({scaleX:0.6969,scaleY:0.6969},0).wait(1).to({scaleX:0.7402,scaleY:0.7402,x:15.45,y:16.1},0).wait(1).to({scaleX:0.7835,scaleY:0.7835,x:15.5},0).wait(1).to({scaleX:0.8268,scaleY:0.8268,x:15.45},0).wait(1).to({scaleX:0.8701,scaleY:0.8701,x:15.5},0).wait(1).to({scaleX:0.9134,scaleY:0.9134,x:15.45},0).wait(1).to({scaleX:0.9567,scaleY:0.9567,x:15.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(16).to({scaleX:0.9596,scaleY:0.9596,x:15.45},0).wait(1).to({scaleX:0.9192,scaleY:0.9192,x:15.5},0).wait(1).to({scaleX:0.8788,scaleY:0.8788,x:15.45},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,x:15.5},0).wait(1).to({scaleX:0.7979,scaleY:0.7979,x:15.45,y:16.05},0).wait(1).to({scaleX:0.7575,scaleY:0.7575,x:15.5},0).wait(1).to({scaleX:0.7171,scaleY:0.7171,x:15.45},0).wait(1).to({scaleX:0.6767,scaleY:0.6767,x:15.5,y:16.1},0).wait(1).to({scaleX:0.6363,scaleY:0.6363,x:15.45},0).wait(1).to({scaleX:0.5958,scaleY:0.5958,x:15.5,y:16.05},0).wait(1).to({scaleX:0.5554,scaleY:0.5554,x:15.45},0).wait(1).to({scaleX:0.515,scaleY:0.515,x:15.5},0).wait(1).to({scaleX:0.4746,scaleY:0.4746,x:15.45},0).wait(1).to({scaleX:0.4342,scaleY:0.4342,x:15.5},0).wait(1).to({scaleX:0.3938,scaleY:0.3938},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.scene_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(1182,586.5,1,1,0,0,0,1182,586.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene, new cjs.Rectangle(0,0,2364,1173), null);


(lib.item4_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// yellow
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(182.5,111.5,1,1,0,0,0,110.5,111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:182.25,y:111.65},0).wait(1).to({x:182.05,y:111.8},0).wait(1).to({x:181.85,y:111.95},0).wait(1).to({x:181.65,y:112.1},0).wait(1).to({x:181.4,y:112.25},0).wait(1).to({x:181.2,y:112.4},0).wait(1).to({x:181,y:112.6},0).wait(1).to({x:180.8,y:112.75},0).wait(1).to({x:180.6,y:112.9},0).wait(1).to({x:180.35,y:113.05},0).wait(1).to({x:180.15,y:113.2},0).wait(1).to({x:179.95,y:113.35},0).wait(1).to({x:179.75,y:113.55},0).wait(1).to({x:179.55,y:113.7},0).wait(1).to({x:179.3,y:113.85},0).wait(1).to({x:179.1,y:114},0).wait(1).to({x:178.9,y:114.15},0).wait(1).to({x:178.7,y:114.3},0).wait(1).to({x:178.5,y:114.5},0).wait(1).to({x:178.25,y:114.65},0).wait(1).to({x:178.05,y:114.8},0).wait(1).to({x:177.85,y:114.95},0).wait(1).to({x:177.65,y:115.1},0).wait(1).to({x:177.4,y:115.25},0).wait(1).to({x:177.2,y:115.4},0).wait(1).to({x:177,y:115.6},0).wait(1).to({x:176.8,y:115.75},0).wait(1).to({x:176.6,y:115.9},0).wait(1).to({x:176.35,y:116.05},0).wait(1).to({x:176.15,y:116.2},0).wait(1).to({x:175.95,y:116.35},0).wait(1).to({x:175.75,y:116.55},0).wait(1).to({x:175.55,y:116.7},0).wait(1).to({x:175.3,y:116.85},0).wait(1).to({x:175.1,y:117},0).wait(1).to({x:174.9,y:117.15},0).wait(1).to({x:174.7,y:117.3},0).wait(1).to({x:174.5,y:117.5},0).wait(1).to({x:174.25,y:117.65},0).wait(1).to({x:174.05,y:117.8},0).wait(1).to({x:173.85,y:117.95},0).wait(1).to({x:173.65,y:118.1},0).wait(1).to({x:173.4,y:118.25},0).wait(1).to({x:173.2,y:118.4},0).wait(1).to({x:173,y:118.6},0).wait(1).to({x:172.8,y:118.75},0).wait(1).to({x:172.6,y:118.9},0).wait(1).to({x:172.35,y:119.05},0).wait(1).to({x:172.15,y:119.2},0).wait(1).to({x:171.95,y:119.35},0).wait(1).to({x:171.75,y:119.55},0).wait(1).to({x:171.55,y:119.7},0).wait(1).to({x:171.3,y:119.85},0).wait(1).to({x:171.1,y:120},0).wait(1).to({x:170.9,y:120.15},0).wait(1).to({x:170.7,y:120.3},0).wait(1).to({x:170.5,y:120.5},0).wait(1).to({x:170.25,y:120.65},0).wait(1).to({x:170.05,y:120.8},0).wait(1).to({x:169.85,y:120.95},0).wait(1).to({x:169.65,y:121.1},0).wait(1).to({x:169.4,y:121.25},0).wait(1).to({x:169.2,y:121.4},0).wait(1).to({x:169,y:121.6},0).wait(1).to({x:168.8,y:121.75},0).wait(1).to({x:168.6,y:121.9},0).wait(1).to({x:168.35,y:122.05},0).wait(1).to({x:168.15,y:122.2},0).wait(1).to({x:167.95,y:122.35},0).wait(1).to({x:167.75,y:122.55},0).wait(1).to({x:167.55,y:122.7},0).wait(1).to({x:167.3,y:122.85},0).wait(1).to({x:167.1,y:123},0).wait(1).to({x:166.9,y:123.15},0).wait(1).to({x:166.7,y:123.3},0).wait(1).to({x:166.5,y:123.5},0).wait(1).to({x:166.25,y:123.65},0).wait(1).to({x:166.05,y:123.8},0).wait(1).to({x:165.85,y:123.95},0).wait(1).to({x:165.65,y:124.1},0).wait(1).to({x:165.4,y:124.25},0).wait(1).to({x:165.2,y:124.4},0).wait(1).to({x:165,y:124.6},0).wait(1).to({x:164.8,y:124.75},0).wait(1).to({x:164.6,y:124.9},0).wait(1).to({x:164.35,y:125.05},0).wait(1).to({x:164.15,y:125.2},0).wait(1).to({x:163.95,y:125.35},0).wait(1).to({x:163.75,y:125.55},0).wait(1).to({x:163.55,y:125.7},0).wait(1).to({x:163.3,y:125.85},0).wait(1).to({x:163.1,y:126},0).wait(1).to({x:162.9,y:126.15},0).wait(1).to({x:162.7,y:126.3},0).wait(1).to({x:162.5,y:126.5},0).wait(1).to({x:162.7,y:126.3},0).wait(1).to({x:162.9,y:126.15},0).wait(1).to({x:163.1,y:126},0).wait(1).to({x:163.3,y:125.85},0).wait(1).to({x:163.5,y:125.7},0).wait(1).to({x:163.75,y:125.55},0).wait(1).to({x:163.95,y:125.4},0).wait(1).to({x:164.15,y:125.25},0).wait(1).to({x:164.35,y:125.05},0).wait(1).to({x:164.55,y:124.9},0).wait(1).to({x:164.75,y:124.75},0).wait(1).to({x:165,y:124.6},0).wait(1).to({x:165.2,y:124.45},0).wait(1).to({x:165.4,y:124.3},0).wait(1).to({x:165.6,y:124.15},0).wait(1).to({x:165.8,y:124},0).wait(1).to({x:166,y:123.8},0).wait(1).to({x:166.25,y:123.65},0).wait(1).to({x:166.45,y:123.5},0).wait(1).to({x:166.65,y:123.35},0).wait(1).to({x:166.85,y:123.2},0).wait(1).to({x:167.05,y:123.05},0).wait(1).to({x:167.25,y:122.9},0).wait(1).to({x:167.5,y:122.75},0).wait(1).to({x:167.7,y:122.55},0).wait(1).to({x:167.9,y:122.4},0).wait(1).to({x:168.1,y:122.25},0).wait(1).to({x:168.3,y:122.1},0).wait(1).to({x:168.5,y:121.95},0).wait(1).to({x:168.75,y:121.8},0).wait(1).to({x:168.95,y:121.65},0).wait(1).to({x:169.15,y:121.5},0).wait(1).to({x:169.35,y:121.3},0).wait(1).to({x:169.55,y:121.15},0).wait(1).to({x:169.75,y:121},0).wait(1).to({x:170,y:120.85},0).wait(1).to({x:170.2,y:120.7},0).wait(1).to({x:170.4,y:120.55},0).wait(1).to({x:170.6,y:120.4},0).wait(1).to({x:170.8,y:120.25},0).wait(1).to({x:171,y:120.05},0).wait(1).to({x:171.25,y:119.9},0).wait(1).to({x:171.45,y:119.75},0).wait(1).to({x:171.65,y:119.6},0).wait(1).to({x:171.85,y:119.45},0).wait(1).to({x:172.05,y:119.3},0).wait(1).to({x:172.25,y:119.15},0).wait(1).to({x:172.5,y:119},0).wait(1).to({x:172.7,y:118.8},0).wait(1).to({x:172.9,y:118.65},0).wait(1).to({x:173.1,y:118.5},0).wait(1).to({x:173.3,y:118.35},0).wait(1).to({x:173.5,y:118.2},0).wait(1).to({x:173.75,y:118.05},0).wait(1).to({x:173.95,y:117.9},0).wait(1).to({x:174.15,y:117.75},0).wait(1).to({x:174.35,y:117.55},0).wait(1).to({x:174.55,y:117.4},0).wait(1).to({x:174.75,y:117.25},0).wait(1).to({x:175,y:117.1},0).wait(1).to({x:175.2,y:116.95},0).wait(1).to({x:175.4,y:116.8},0).wait(1).to({x:175.6,y:116.65},0).wait(1).to({x:175.8,y:116.5},0).wait(1).to({x:176,y:116.3},0).wait(1).to({x:176.25,y:116.15},0).wait(1).to({x:176.45,y:116},0).wait(1).to({x:176.65,y:115.85},0).wait(1).to({x:176.85,y:115.7},0).wait(1).to({x:177.05,y:115.55},0).wait(1).to({x:177.25,y:115.4},0).wait(1).to({x:177.5,y:115.25},0).wait(1).to({x:177.7,y:115.05},0).wait(1).to({x:177.9,y:114.9},0).wait(1).to({x:178.1,y:114.75},0).wait(1).to({x:178.3,y:114.6},0).wait(1).to({x:178.5,y:114.45},0).wait(1).to({x:178.75,y:114.3},0).wait(1).to({x:178.95,y:114.15},0).wait(1).to({x:179.15,y:114},0).wait(1).to({x:179.35,y:113.8},0).wait(1).to({x:179.55,y:113.65},0).wait(1).to({x:179.75,y:113.5},0).wait(1).to({x:180,y:113.35},0).wait(1).to({x:180.2,y:113.2},0).wait(1).to({x:180.4,y:113.05},0).wait(1).to({x:180.6,y:112.9},0).wait(1).to({x:180.8,y:112.75},0).wait(1).to({x:181,y:112.55},0).wait(1).to({x:181.25,y:112.4},0).wait(1).to({x:181.45,y:112.25},0).wait(1).to({x:181.65,y:112.1},0).wait(1).to({x:181.85,y:111.95},0).wait(1).to({x:182.05,y:111.8},0).wait(1).to({x:182.25,y:111.65},0).wait(1).to({x:182.5,y:111.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item4_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(109.5,140,1,1,0,0,0,109.5,111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:109.75,y:139.85},0).wait(1).to({x:110.05,y:139.7},0).wait(1).to({x:110.35,y:139.55},0).wait(1).to({x:110.6,y:139.4},0).wait(1).to({x:110.9,y:139.25},0).wait(1).to({x:111.2,y:139.1},0).wait(1).to({x:111.45,y:138.95},0).wait(1).to({x:111.75,y:138.8},0).wait(1).to({x:112.05,y:138.65},0).wait(1).to({x:112.3,y:138.5},0).wait(1).to({x:112.6,y:138.35},0).wait(1).to({x:112.9,y:138.2},0).wait(1).to({x:113.15,y:138.05},0).wait(1).to({x:113.45,y:137.9},0).wait(1).to({x:113.75,y:137.75},0).wait(1).to({x:114,y:137.6},0).wait(1).to({x:114.3,y:137.45},0).wait(1).to({x:114.6,y:137.3},0).wait(1).to({x:114.9,y:137.2},0).wait(1).to({x:115.15,y:137.05},0).wait(1).to({x:115.45,y:136.9},0).wait(1).to({x:115.75,y:136.75},0).wait(1).to({x:116,y:136.6},0).wait(1).to({x:116.3,y:136.45},0).wait(1).to({x:116.6,y:136.3},0).wait(1).to({x:116.85,y:136.15},0).wait(1).to({x:117.15,y:136},0).wait(1).to({x:117.45,y:135.85},0).wait(1).to({x:117.7,y:135.7},0).wait(1).to({x:118,y:135.55},0).wait(1).to({x:118.3,y:135.4},0).wait(1).to({x:118.55,y:135.25},0).wait(1).to({x:118.85,y:135.1},0).wait(1).to({x:119.15,y:134.95},0).wait(1).to({x:119.4,y:134.8},0).wait(1).to({x:119.7,y:134.65},0).wait(1).to({x:120,y:134.5},0).wait(1).to({x:120.3,y:134.4},0).wait(1).to({x:120.55,y:134.25},0).wait(1).to({x:120.85,y:134.1},0).wait(1).to({x:121.15,y:133.95},0).wait(1).to({x:121.4,y:133.8},0).wait(1).to({x:121.7,y:133.65},0).wait(1).to({x:122,y:133.5},0).wait(1).to({x:122.25,y:133.35},0).wait(1).to({x:122.55,y:133.2},0).wait(1).to({x:122.85,y:133.05},0).wait(1).to({x:123.1,y:132.9},0).wait(1).to({x:123.4,y:132.75},0).wait(1).to({x:123.7,y:132.6},0).wait(1).to({x:123.95,y:132.45},0).wait(1).to({x:124.25,y:132.3},0).wait(1).to({x:124.55,y:132.15},0).wait(1).to({x:124.8,y:132},0).wait(1).to({x:125.1,y:131.85},0).wait(1).to({x:125.4,y:131.7},0).wait(1).to({x:125.7,y:131.6},0).wait(1).to({x:125.95,y:131.45},0).wait(1).to({x:126.25,y:131.3},0).wait(1).to({x:126.55,y:131.15},0).wait(1).to({x:126.8,y:131},0).wait(1).to({x:127.1,y:130.85},0).wait(1).to({x:127.4,y:130.7},0).wait(1).to({x:127.65,y:130.55},0).wait(1).to({x:127.95,y:130.4},0).wait(1).to({x:128.25,y:130.25},0).wait(1).to({x:128.5,y:130.1},0).wait(1).to({x:128.8,y:129.95},0).wait(1).to({x:129.1,y:129.8},0).wait(1).to({x:129.35,y:129.65},0).wait(1).to({x:129.65,y:129.5},0).wait(1).to({x:129.95,y:129.35},0).wait(1).to({x:130.2,y:129.2},0).wait(1).to({x:130.5,y:129.05},0).wait(1).to({x:130.8,y:128.9},0).wait(1).to({x:131.1,y:128.8},0).wait(1).to({x:131.35,y:128.65},0).wait(1).to({x:131.65,y:128.5},0).wait(1).to({x:131.95,y:128.35},0).wait(1).to({x:132.2,y:128.2},0).wait(1).to({x:132.5,y:128.05},0).wait(1).to({x:132.8,y:127.9},0).wait(1).to({x:133.05,y:127.75},0).wait(1).to({x:133.35,y:127.6},0).wait(1).to({x:133.65,y:127.45},0).wait(1).to({x:133.9,y:127.3},0).wait(1).to({x:134.2,y:127.15},0).wait(1).to({x:134.5,y:127},0).wait(1).to({x:134.75,y:126.85},0).wait(1).to({x:135.05,y:126.7},0).wait(1).to({x:135.35,y:126.55},0).wait(1).to({x:135.6,y:126.4},0).wait(1).to({x:135.9,y:126.25},0).wait(1).to({x:136.2,y:126.1},0).wait(1).to({x:136.5,y:126},0).wait(1).to({x:136.2,y:126.1},0).wait(1).to({x:135.9,y:126.25},0).wait(1).to({x:135.65,y:126.4},0).wait(1).to({x:135.35,y:126.55},0).wait(1).to({x:135.05,y:126.7},0).wait(1).to({x:134.8,y:126.85},0).wait(1).to({x:134.5,y:127},0).wait(1).to({x:134.25,y:127.15},0).wait(1).to({x:133.95,y:127.3},0).wait(1).to({x:133.65,y:127.45},0).wait(1).to({x:133.4,y:127.6},0).wait(1).to({x:133.1,y:127.75},0).wait(1).to({x:132.8,y:127.85},0).wait(1).to({x:132.55,y:128},0).wait(1).to({x:132.25,y:128.15},0).wait(1).to({x:132,y:128.3},0).wait(1).to({x:131.7,y:128.45},0).wait(1).to({x:131.4,y:128.6},0).wait(1).to({x:131.15,y:128.75},0).wait(1).to({x:130.85,y:128.9},0).wait(1).to({x:130.55,y:129.05},0).wait(1).to({x:130.3,y:129.2},0).wait(1).to({x:130,y:129.35},0).wait(1).to({x:129.75,y:129.5},0).wait(1).to({x:129.45,y:129.6},0).wait(1).to({x:129.15,y:129.75},0).wait(1).to({x:128.9,y:129.9},0).wait(1).to({x:128.6,y:130.05},0).wait(1).to({x:128.3,y:130.2},0).wait(1).to({x:128.05,y:130.35},0).wait(1).to({x:127.75,y:130.5},0).wait(1).to({x:127.5,y:130.65},0).wait(1).to({x:127.2,y:130.8},0).wait(1).to({x:126.9,y:130.95},0).wait(1).to({x:126.65,y:131.1},0).wait(1).to({x:126.35,y:131.25},0).wait(1).to({x:126.05,y:131.35},0).wait(1).to({x:125.8,y:131.5},0).wait(1).to({x:125.5,y:131.65},0).wait(1).to({x:125.25,y:131.8},0).wait(1).to({x:124.95,y:131.95},0).wait(1).to({x:124.65,y:132.1},0).wait(1).to({x:124.4,y:132.25},0).wait(1).to({x:124.1,y:132.4},0).wait(1).to({x:123.8,y:132.55},0).wait(1).to({x:123.55,y:132.7},0).wait(1).to({x:123.25,y:132.85},0).wait(1).to({x:123,y:133},0).wait(1).to({x:122.7,y:133.1},0).wait(1).to({x:122.4,y:133.25},0).wait(1).to({x:122.15,y:133.4},0).wait(1).to({x:121.85,y:133.55},0).wait(1).to({x:121.55,y:133.7},0).wait(1).to({x:121.3,y:133.85},0).wait(1).to({x:121,y:134},0).wait(1).to({x:120.75,y:134.15},0).wait(1).to({x:120.45,y:134.3},0).wait(1).to({x:120.15,y:134.45},0).wait(1).to({x:119.9,y:134.6},0).wait(1).to({x:119.6,y:134.75},0).wait(1).to({x:119.3,y:134.85},0).wait(1).to({x:119.05,y:135},0).wait(1).to({x:118.75,y:135.15},0).wait(1).to({x:118.5,y:135.3},0).wait(1).to({x:118.2,y:135.45},0).wait(1).to({x:117.9,y:135.6},0).wait(1).to({x:117.65,y:135.75},0).wait(1).to({x:117.35,y:135.9},0).wait(1).to({x:117.05,y:136.05},0).wait(1).to({x:116.8,y:136.2},0).wait(1).to({x:116.5,y:136.35},0).wait(1).to({x:116.25,y:136.5},0).wait(1).to({x:115.95,y:136.6},0).wait(1).to({x:115.65,y:136.75},0).wait(1).to({x:115.4,y:136.9},0).wait(1).to({x:115.1,y:137.05},0).wait(1).to({x:114.8,y:137.2},0).wait(1).to({x:114.55,y:137.35},0).wait(1).to({x:114.25,y:137.5},0).wait(1).to({x:114,y:137.65},0).wait(1).to({x:113.7,y:137.8},0).wait(1).to({x:113.4,y:137.95},0).wait(1).to({x:113.15,y:138.1},0).wait(1).to({x:112.85,y:138.25},0).wait(1).to({x:112.55,y:138.35},0).wait(1).to({x:112.3,y:138.5},0).wait(1).to({x:112,y:138.65},0).wait(1).to({x:111.75,y:138.8},0).wait(1).to({x:111.45,y:138.95},0).wait(1).to({x:111.15,y:139.1},0).wait(1).to({x:110.9,y:139.25},0).wait(1).to({x:110.6,y:139.4},0).wait(1).to({x:110.3,y:139.55},0).wait(1).to({x:110.05,y:139.7},0).wait(1).to({x:109.75,y:139.85},0).wait(1).to({x:109.5,y:140},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_191 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(191).call(this.frame_191).wait(1));

	// yellow_obj_
	this.yellow = new lib.item4_yellow();
	this.yellow.name = "yellow";
	this.yellow.parent = this;
	this.yellow.setTransform(182.5,111.5,1,1,0,0,0,182.5,111.5);
	this.yellow.depth = 0;
	this.yellow.isAttachedToCamera = 0
	this.yellow.isAttachedToMask = 0
	this.yellow.layerDepth = 0
	this.yellow.layerIndex = 0
	this.yellow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.yellow).wait(1).to({regX:172.5,regY:119,x:172.5,y:119},0).wait(191));

	// shadow_obj_
	this.shadow = new lib.item4_shadow();
	this.shadow.name = "shadow";
	this.shadow.parent = this;
	this.shadow.setTransform(109.5,140,1,1,0,0,0,109.5,140);
	this.shadow.depth = 0;
	this.shadow.isAttachedToCamera = 0
	this.shadow.isAttachedToMask = 0
	this.shadow.layerDepth = 0
	this.shadow.layerIndex = 1
	this.shadow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(1).to({regX:123,regY:133,x:123,y:133},0).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293,251);


(lib.item3_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// yellow
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(8,8,1,1,0,0,0,8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:8.05},0).wait(1).to({y:8.1},0).wait(1).to({y:8.2},0).wait(1).to({y:8.35},0).wait(1).to({y:8.55},0).wait(1).to({y:8.8},0).wait(1).to({y:9.1},0).wait(1).to({y:9.45},0).wait(1).to({y:9.9},0).wait(1).to({y:10.4},0).wait(1).to({y:11},0).wait(1).to({y:11.7},0).wait(1).to({y:12.55},0).wait(1).to({y:13.6},0).wait(1).to({y:14.8},0).wait(1).to({y:16.3},0).wait(1).to({y:18.2},0).wait(1).to({y:20.65},0).wait(1).to({y:23.95},0).wait(1).to({y:28.7},0).wait(1).to({y:35.5},0).wait(1).to({y:28.7},0).wait(1).to({y:23.95},0).wait(1).to({y:20.65},0).wait(1).to({y:18.2},0).wait(1).to({y:16.3},0).wait(1).to({y:14.8},0).wait(1).to({y:13.6},0).wait(1).to({y:12.55},0).wait(1).to({y:11.7},0).wait(1).to({y:11},0).wait(1).to({y:10.4},0).wait(1).to({y:9.9},0).wait(1).to({y:9.45},0).wait(1).to({y:9.1},0).wait(1).to({y:8.8},0).wait(1).to({y:8.55},0).wait(1).to({y:8.35},0).wait(1).to({y:8.2},0).wait(1).to({y:8.1},0).wait(1).to({y:8.05},0).wait(1).to({y:8},0).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.item3_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(9,41,0.4688,0.4688,0,0,0,8,3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4929,scaleY:0.4929,alpha:0.0455},0).wait(1).to({scaleX:0.517,scaleY:0.517,alpha:0.0909},0).wait(1).to({scaleX:0.5412,scaleY:0.5412,y:40.95,alpha:0.1364},0).wait(1).to({scaleX:0.5653,scaleY:0.5653,x:8.95,y:41,alpha:0.1818},0).wait(1).to({scaleX:0.5895,scaleY:0.5895,y:40.95,alpha:0.2273},0).wait(1).to({scaleX:0.6136,scaleY:0.6136,y:41,alpha:0.2727},0).wait(1).to({scaleX:0.6378,scaleY:0.6378,y:40.95,alpha:0.3182},0).wait(1).to({scaleX:0.6619,scaleY:0.6619,x:9,y:41,alpha:0.3636},0).wait(1).to({scaleX:0.6861,scaleY:0.6861,y:40.95,alpha:0.4091},0).wait(1).to({scaleX:0.7102,scaleY:0.7102,y:41,alpha:0.4545},0).wait(1).to({scaleX:0.7344,scaleY:0.7344,alpha:0.5},0).wait(1).to({scaleX:0.7585,scaleY:0.7585,x:8.95,alpha:0.5455},0).wait(1).to({scaleX:0.7827,scaleY:0.7827,alpha:0.5909},0).wait(1).to({scaleX:0.8068,scaleY:0.8068,y:40.95,alpha:0.6364},0).wait(1).to({scaleX:0.831,scaleY:0.831,x:9,y:41,alpha:0.6818},0).wait(1).to({scaleX:0.8551,scaleY:0.8551,y:40.95,alpha:0.7273},0).wait(1).to({scaleX:0.8793,scaleY:0.8793,y:41,alpha:0.7727},0).wait(1).to({scaleX:0.9034,scaleY:0.9034,y:40.95,alpha:0.8182},0).wait(1).to({scaleX:0.9276,scaleY:0.9276,x:8.95,y:41,alpha:0.8636},0).wait(1).to({scaleX:0.9517,scaleY:0.9517,alpha:0.9091},0).wait(1).to({scaleX:0.9759,scaleY:0.9759,alpha:0.9545},0).wait(1).to({scaleX:1,scaleY:1,x:9,alpha:1},0).wait(1).to({scaleX:0.9801,scaleY:0.9801,alpha:0.9545},0).wait(1).to({scaleX:0.9602,scaleY:0.9602,alpha:0.9091},0).wait(1).to({scaleX:0.9403,scaleY:0.9403,x:8.95,y:40.95,alpha:0.8636},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,alpha:0.8182},0).wait(1).to({scaleX:0.9006,scaleY:0.9006,y:41,alpha:0.7727},0).wait(1).to({scaleX:0.8807,scaleY:0.8807,x:9,alpha:0.7273},0).wait(1).to({scaleX:0.8608,scaleY:0.8608,alpha:0.6818},0).wait(1).to({scaleX:0.8409,scaleY:0.8409,y:40.95,alpha:0.6364},0).wait(1).to({scaleX:0.821,scaleY:0.821,x:8.95,alpha:0.5909},0).wait(1).to({scaleX:0.8011,scaleY:0.8011,y:41,alpha:0.5455},0).wait(1).to({scaleX:0.7812,scaleY:0.7812,x:9,alpha:0.5},0).wait(1).to({scaleX:0.7614,scaleY:0.7614,alpha:0.4545},0).wait(1).to({scaleX:0.7415,scaleY:0.7415,y:40.95,alpha:0.4091},0).wait(1).to({scaleX:0.7216,scaleY:0.7216,x:8.95,alpha:0.3636},0).wait(1).to({scaleX:0.7017,scaleY:0.7017,y:41,alpha:0.3182},0).wait(1).to({scaleX:0.6818,scaleY:0.6818,alpha:0.2727},0).wait(1).to({scaleX:0.6619,scaleY:0.6619,x:9,alpha:0.2273},0).wait(1).to({scaleX:0.642,scaleY:0.642,alpha:0.1818},0).wait(1).to({scaleX:0.6221,scaleY:0.6221,y:40.95,alpha:0.1364},0).wait(1).to({scaleX:0.6023,scaleY:0.6023,x:8.95,alpha:0.0909},0).wait(1).to({scaleX:0.5824,scaleY:0.5824,y:41,alpha:0.0455},0).wait(1).to({scaleX:0.5625,scaleY:0.5625,x:9,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// yellow_obj_
	this.yellow = new lib.item3_yellow();
	this.yellow.name = "yellow";
	this.yellow.parent = this;
	this.yellow.setTransform(8,8,1,1,0,0,0,8,8);
	this.yellow.depth = 0;
	this.yellow.isAttachedToCamera = 0
	this.yellow.isAttachedToMask = 0
	this.yellow.layerDepth = 0
	this.yellow.layerIndex = 0
	this.yellow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.yellow).wait(1).to({regY:21.8,y:21.8},0).wait(44));

	// shadow_obj_
	this.shadow = new lib.item3_shadow();
	this.shadow.name = "shadow";
	this.shadow.parent = this;
	this.shadow.setTransform(9,41,1,1,0,0,0,9,41);
	this.shadow.depth = 0;
	this.shadow.isAttachedToCamera = 0
	this.shadow.isAttachedToMask = 0
	this.shadow.layerDepth = 0
	this.shadow.layerIndex = 1
	this.shadow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,44);


(lib.item2_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(15.5,182,1,1,0,0,0,15.5,5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(16).to({alpha:0.8571},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0},0).wait(8));

}).prototype = p = new cjs.MovieClip();


(lib.item1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(36,35.5,1,1,0,0,0,36,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.6521,y:35.05},0).wait(1).to({rotation:1.3043,y:34.55},0).wait(1).to({rotation:1.9564,y:34.15},0).wait(1).to({rotation:2.6085,y:33.6},0).wait(1).to({rotation:3.2606,y:33.15},0).wait(1).to({rotation:3.9128,y:32.65},0).wait(1).to({rotation:4.5649,y:32.15},0).wait(1).to({rotation:5.217,x:35.95,y:31.65},0).wait(1).to({rotation:5.8691,y:31.25},0).wait(1).to({rotation:6.5213,y:30.75},0).wait(1).to({rotation:7.1734,y:30.25},0).wait(1).to({rotation:7.8255,y:29.75},0).wait(1).to({rotation:8.4776,y:29.3},0).wait(1).to({rotation:9.1298,y:28.8},0).wait(1).to({rotation:9.7819,x:36,y:28.35},0).wait(1).to({rotation:10.434,x:35.95,y:27.85},0).wait(1).to({rotation:11.0861,y:27.4},0).wait(1).to({rotation:11.7383,x:36,y:26.9},0).wait(1).to({rotation:12.3904,y:26.4},0).wait(1).to({rotation:13.0425,x:35.95,y:25.95},0).wait(1).to({rotation:13.6946,x:36,y:25.45},0).wait(1).to({rotation:14.3468,y:25},0).wait(1).to({rotation:14.9989,x:35.95,y:24.5},0).wait(1).to({rotation:15.5316,x:36.45,y:24.1},0).wait(1).to({rotation:16.0643,x:36.9,y:23.65},0).wait(1).to({rotation:16.5971,x:37.35,y:23.2},0).wait(1).to({rotation:17.1298,x:37.8,y:22.75},0).wait(1).to({rotation:17.6625,x:38.3,y:22.35},0).wait(1).to({rotation:18.1952,x:38.7,y:21.9},0).wait(1).to({rotation:18.7279,x:39.2,y:21.45},0).wait(1).to({rotation:19.2606,x:39.65,y:21.05},0).wait(1).to({rotation:19.7934,x:40.1,y:20.6},0).wait(1).to({rotation:20.3261,x:40.55,y:20.2},0).wait(1).to({rotation:20.8588,x:41,y:19.7},0).wait(1).to({rotation:21.3915,x:41.45,y:19.35},0).wait(1).to({rotation:21.9242,x:41.95,y:18.9},0).wait(1).to({rotation:22.4569,x:42.4,y:18.45},0).wait(1).to({rotation:22.9897,x:42.85,y:18},0).wait(1).to({rotation:23.5224,x:43.3,y:17.55},0).wait(1).to({rotation:24.0551,x:43.75,y:17.1},0).wait(1).to({rotation:24.5878,x:44.25,y:16.75},0).wait(1).to({rotation:25.1205,x:44.7,y:16.3},0).wait(1).to({rotation:25.6532,x:45.15,y:15.85},0).wait(1).to({rotation:26.1859,x:45.6,y:15.4},0).wait(1).to({rotation:26.7187,x:46.05,y:14.95},0).wait(1).to({rotation:27.2514,x:46.5,y:14.55},0).wait(1).to({rotation:27.7841,x:46.95,y:14.1},0).wait(1).to({rotation:28.8375,x:46.5,y:13.65},0).wait(1).to({rotation:29.8909,x:45.9,y:13.25},0).wait(1).to({rotation:30.9443,x:45.4,y:12.8},0).wait(1).to({rotation:31.9976,x:44.85,y:12.4},0).wait(1).to({rotation:33.051,x:44.3,y:11.95},0).wait(1).to({rotation:34.1044,x:43.75,y:11.5},0).wait(1).to({rotation:35.1578,x:43.25,y:11.05},0).wait(1).to({rotation:36.2112,x:42.7,y:10.6},0).wait(1).to({rotation:37.2646,x:42.15,y:10.2},0).wait(1).to({rotation:38.3179,x:41.65,y:9.75},0).wait(1).to({rotation:39.3713,x:41.15,y:9.35},0).wait(1).to({rotation:40.4247,x:40.55,y:8.85},0).wait(1).to({rotation:41.4781,x:40,y:8.45},0).wait(1).to({rotation:42.5315,x:39.5,y:8},0).wait(1).to({rotation:43.5849,x:39,y:7.55},0).wait(1).to({rotation:44.6382,x:38.4,y:7.15},0).wait(1).to({rotation:45.6916,x:37.9,y:6.7},0).wait(1).to({rotation:46.745,x:37.35,y:6.3},0).wait(1).to({rotation:47.7984,x:36.85,y:5.85},0).wait(1).to({rotation:48.8518,x:36.25,y:5.4},0).wait(1).to({rotation:49.9052,x:35.75,y:4.95},0).wait(1).to({rotation:50.9585,x:35.25,y:4.5},0).wait(1).to({rotation:52.0119,x:34.65,y:4.1},0).wait(1).to({rotation:53.0653,x:34.15,y:3.7},0).wait(1).to({rotation:57.9864,x:34.85,y:3.35},0).wait(1).to({rotation:62.9075,x:35.5,y:3.1},0).wait(1).to({rotation:67.8286,x:36.25,y:2.85},0).wait(1).to({rotation:72.7498,x:36.9,y:2.6},0).wait(1).to({rotation:77.6709,x:37.55,y:2.3},0).wait(1).to({rotation:82.592,x:38.25,y:2.05},0).wait(1).to({rotation:87.5131,x:38.9,y:1.75},0).wait(1).to({rotation:92.4342,x:39.6,y:1.45},0).wait(1).to({rotation:97.3553,x:40.3,y:1.15},0).wait(1).to({rotation:102.2764,x:40.95,y:0.95},0).wait(1).to({rotation:107.1975,x:41.65,y:0.65},0).wait(1).to({rotation:112.1187,x:42.3,y:0.35},0).wait(1).to({rotation:117.0398,x:43.05,y:0.05},0).wait(1).to({rotation:121.9609,x:43.7,y:-0.2},0).wait(1).to({rotation:126.882,x:44.35,y:-0.45},0).wait(1).to({rotation:131.8031,x:45.05,y:-0.7},0).wait(1).to({rotation:136.7242,x:45.75,y:-1.05},0).wait(1).to({rotation:141.6453,x:46.4,y:-1.35},0).wait(1).to({rotation:146.5664,x:47.1,y:-1.65},0).wait(1).to({rotation:151.4876,x:47.75,y:-1.9},0).wait(1).to({rotation:156.4087,x:48.45,y:-2.2},0).wait(1).to({rotation:161.3298,x:49.15,y:-2.5},0).wait(1).to({rotation:166.2509,x:49.85,y:-2.75},0).wait(1).to({rotation:171.172,x:50.55,y:-3.05},0).wait(1).to({rotation:160.6409,x:50.9,y:-2.05},0).wait(1).to({rotation:150.1098,x:51.2,y:-1.15},0).wait(1).to({rotation:139.5788,x:51.6,y:-0.25},0).wait(1).to({rotation:129.0477,x:51.9,y:0.75},0).wait(1).to({rotation:118.5166,x:52.25,y:1.7},0).wait(1).to({rotation:107.9855,x:52.65,y:2.65},0).wait(1).to({rotation:97.4544,x:52.95,y:3.55},0).wait(1).to({rotation:86.9234,x:53.3,y:4.5},0).wait(1).to({rotation:76.3923,x:53.65,y:5.4},0).wait(1).to({rotation:65.8612,x:53.95,y:6.3},0).wait(1).to({rotation:55.3301,x:54.35,y:7.25},0).wait(1).to({rotation:44.7991,x:54.7,y:8.2},0).wait(1).to({rotation:34.268,x:55.05,y:9.1},0).wait(1).to({rotation:23.7369,x:55.35,y:10.05},0).wait(1).to({rotation:13.2058,x:55.75,y:10.95},0).wait(1).to({rotation:2.6747,x:56.1,y:11.95},0).wait(1).to({rotation:-7.8563,x:56.4,y:12.85},0).wait(1).to({rotation:-18.3874,x:56.75,y:13.8},0).wait(1).to({rotation:-28.9185,x:57.1,y:14.65},0).wait(1).to({rotation:-39.4496,x:57.5,y:15.6},0).wait(1).to({rotation:-49.9807,x:57.85,y:16.55},0).wait(1).to({rotation:-60.5117,x:58.15,y:17.4},0).wait(1).to({rotation:-71.0428,x:58.5,y:18.4},0).wait(1).to({rotation:-81.5739,x:58.9,y:19.3},0).wait(1).to({rotation:-76.0669,x:58.55,y:20.15},0).wait(1).to({rotation:-70.5599,x:58.3,y:21},0).wait(1).to({rotation:-65.0529,x:57.95,y:21.85},0).wait(1).to({rotation:-59.5459,x:57.6,y:22.7},0).wait(1).to({rotation:-54.039,x:57.3,y:23.55},0).wait(1).to({rotation:-48.532,x:57,y:24.4},0).wait(1).to({rotation:-43.025,x:56.6,y:25.25},0).wait(1).to({rotation:-37.518,x:56.3,y:26.1},0).wait(1).to({rotation:-32.011,x:56,y:26.95},0).wait(1).to({rotation:-26.504,x:55.7,y:27.8},0).wait(1).to({rotation:-20.997,x:55.35,y:28.65},0).wait(1).to({rotation:-15.49,x:55.1,y:29.5},0).wait(1).to({rotation:-9.9831,x:54.75,y:30.35},0).wait(1).to({rotation:-4.4761,x:54.4,y:31.25},0).wait(1).to({rotation:1.0309,x:54.1,y:32.1},0).wait(1).to({rotation:6.5379,x:53.75,y:32.95},0).wait(1).to({rotation:12.0449,x:53.45,y:33.75},0).wait(1).to({rotation:17.5519,x:53.15,y:34.65},0).wait(1).to({rotation:23.0589,x:52.8,y:35.5},0).wait(1).to({rotation:28.5659,x:52.5,y:36.35},0).wait(1).to({rotation:34.0728,x:52.15,y:37.2},0).wait(1).to({rotation:39.5798,x:51.9,y:38.05},0).wait(1).to({rotation:45.0868,x:51.55,y:38.9},0).wait(1).to({rotation:50.5938,x:51.2,y:39.75},0).wait(1).to({rotation:52.0396,x:50.4,y:39.2},0).wait(1).to({rotation:53.4855,x:49.5,y:38.6},0).wait(1).to({rotation:54.9313,x:48.7,y:38},0).wait(1).to({rotation:56.3772,x:47.85,y:37.45},0).wait(1).to({rotation:57.823,x:46.9,y:36.8},0).wait(1).to({rotation:59.2689,x:46.1,y:36.25},0).wait(1).to({rotation:60.7147,x:45.25,y:35.65},0).wait(1).to({rotation:62.1605,x:44.35,y:35.15},0).wait(1).to({rotation:63.6064,x:43.5,y:34.55},0).wait(1).to({rotation:65.0522,x:42.65,y:33.9},0).wait(1).to({rotation:66.4981,x:41.8,y:33.35},0).wait(1).to({rotation:67.9439,x:40.9,y:32.75},0).wait(1).to({rotation:69.3897,x:40,y:32.2},0).wait(1).to({rotation:70.8356,x:39.15,y:31.6},0).wait(1).to({rotation:72.2814,x:38.35,y:31.05},0).wait(1).to({rotation:73.7273,x:37.5,y:30.45},0).wait(1).to({rotation:75.1731,x:36.65,y:29.85},0).wait(1).to({rotation:76.619,x:35.75,y:29.25},0).wait(1).to({rotation:78.0648,x:34.9,y:28.7},0).wait(1).to({rotation:79.5106,x:34.05,y:28.1},0).wait(1).to({rotation:80.9565,x:33.2,y:27.55},0).wait(1).to({rotation:82.4023,x:32.3,y:26.95},0).wait(1).to({rotation:83.8482,x:31.45,y:26.35},0).wait(1).to({rotation:85.294,x:30.6,y:25.8},0).wait(1).to({rotation:81.7401,x:30.8,y:26.2},0).wait(1).to({rotation:78.1862,x:31.05,y:26.6},0).wait(1).to({rotation:74.6323,x:31.25,y:27},0).wait(1).to({rotation:71.0783,x:31.45,y:27.4},0).wait(1).to({rotation:67.5244,x:31.7,y:27.8},0).wait(1).to({rotation:63.9705,x:31.95,y:28.25},0).wait(1).to({rotation:60.4166,x:32.15,y:28.65},0).wait(1).to({rotation:56.8627,x:32.4,y:29.05},0).wait(1).to({rotation:53.3088,x:32.65,y:29.4},0).wait(1).to({rotation:49.7548,x:32.85,y:29.9},0).wait(1).to({rotation:46.2009,x:33.05,y:30.25},0).wait(1).to({rotation:42.647,x:33.3,y:30.65},0).wait(1).to({rotation:39.0931,x:33.5,y:31.05},0).wait(1).to({rotation:35.5392,x:33.75,y:31.5},0).wait(1).to({rotation:31.9853,x:34,y:31.85},0).wait(1).to({rotation:28.4313,x:34.2,y:32.25},0).wait(1).to({rotation:24.8774,x:34.4,y:32.7},0).wait(1).to({rotation:21.3235,x:34.65,y:33.1},0).wait(1).to({rotation:17.7696,x:34.85,y:33.5},0).wait(1).to({rotation:14.2157,x:35.1,y:33.9},0).wait(1).to({rotation:10.6618,x:35.35,y:34.3},0).wait(1).to({rotation:7.1078,x:35.5,y:34.75},0).wait(1).to({rotation:3.5539,x:35.75,y:35.15},0).wait(1).to({rotation:0,x:36,y:35.5},0).wait(1));

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
	this.Layer_1.setTransform(36,35.5,1,1,0,0,0,36,35.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1).to({regX:45.4,regY:19.2,x:45.4,y:19.2},0).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-51.5,125.7,141.5);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_6_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(15.5,16.1,1,1,0,0,0,15.5,16.1);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,31,32);


(lib.Scene_1_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// scene
	this.instance = new lib.scene();
	this.instance.parent = this;
	this.instance.setTransform(1155,586.5,1,1,0,0,0,1182,586.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_scene, null, null);


(lib.Scene_1_item4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item4
	this.instance = new lib.item4();
	this.instance.parent = this;
	this.instance.setTransform(1495.5,51.5,1,1,0,0,0,146.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item4, null, null);


(lib.Scene_1_item3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item3
	this.instance = new lib.item3();
	this.instance.parent = this;
	this.instance.setTransform(557.5,415,1,1,0,0,0,8.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item3, null, null);


(lib.Scene_1_item1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item1
	this.instance = new lib.item1();
	this.instance.parent = this;
	this.instance.setTransform(527,109.5,1,1,0,0,0,36,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item1, null, null);


(lib.item2_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(152,134.45,1,1,175.9996,0,0,142.7,-19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.5,regY:16.1,rotation:164.2741,x:264.8,y:65.6},0).wait(1).to({rotation:152.5403,x:248.45,y:44.1},0).wait(1).to({rotation:140.8064,x:228.1,y:26.4},0).wait(1).to({rotation:129.0725,x:204.5,y:13.2},0).wait(1).to({rotation:117.3387,x:178.75,y:5.1},0).wait(1).to({rotation:105.6048,x:151.9,y:2.4},0).wait(1).to({rotation:93.8709,x:125.05,y:5.15},0).wait(1).to({rotation:82.1371,x:99.3,y:13.35},0).wait(1).to({rotation:70.4032,x:75.8,y:26.55},0).wait(1).to({rotation:58.6693,x:55.45,y:44.3},0).wait(1).to({rotation:46.9355,x:39.15,y:65.8},0).wait(1).to({rotation:35.2016,x:27.5,y:90.2},0).wait(1).to({rotation:23.4677,x:21.15,y:116.4},0).wait(1).to({rotation:11.7339,x:20.3,y:143.4},0).wait(1).to({rotation:0,x:24.85,y:170.05},0).wait(16).to({rotation:12.572,x:20.15,y:141.45},0).wait(1).to({rotation:25.144,x:21.75,y:112.6},0).wait(1).to({rotation:37.716,x:29.6,y:84.85},0).wait(1).to({rotation:50.288,x:43.3,y:59.35},0).wait(1).to({rotation:62.86,x:62.2,y:37.5},0).wait(1).to({rotation:75.432,x:85.5,y:20.3},0).wait(1).to({rotation:88.004,x:111.95,y:8.6},0).wait(1).to({rotation:100.576,x:140.25,y:2.9},0).wait(1).to({rotation:113.148,x:169.2,y:3.5},0).wait(1).to({rotation:125.72,x:197.3,y:10.35},0).wait(1).to({rotation:138.292,x:223.2,y:23.15},0).wait(1).to({rotation:150.864,x:245.65,y:41.35},0).wait(1).to({rotation:163.436,x:263.7,y:63.9},0).wait(1).to({rotation:176.008,x:276.4,y:90},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// red_obj_
	this.red = new lib.item2_red();
	this.red.name = "red";
	this.red.parent = this;
	this.red.setTransform(217.5,108.9,1,1,0,0,0,217.5,108.9);
	this.red.depth = 0;
	this.red.isAttachedToCamera = 0
	this.red.isAttachedToMask = 0
	this.red.layerDepth = 0
	this.red.layerIndex = 0
	this.red.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.red).wait(1).to({regX:146.8,regY:84.5,x:146.8,y:84.5},0).wait(44));

	// shadow_obj_
	this.shadow = new lib.item2_shadow();
	this.shadow.name = "shadow";
	this.shadow.parent = this;
	this.shadow.setTransform(15.5,182,1,1,0,0,0,15.5,182);
	this.shadow.depth = 0;
	this.shadow.isAttachedToCamera = 0
	this.shadow.isAttachedToMask = 0
	this.shadow.layerDepth = 0
	this.shadow.layerIndex = 1
	this.shadow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(45));

	// path_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgcVWQgkgFhQgTIkwhJQgwgMgYgHQgngMgdgPQgqgUhGg2IhnhQQhCg4h7h4QhFhEgdgmQgaghgkg8QgqhHgRgYIgng2QgXgggNgXQgmhEAIg6QADgXAMgTQAMgVAUgJQAWgKAZAIQAaAIAMAVQAIAPADAaIAGArQAHAcAYAgIAsA3QAUAaAeA6QAfA6AUAaQAWAeArAoIBGBCIAyA3QAeAiAXASQASAPAjAXQAmAYAPAMQALAJAhAdQAbAZASAMQAdATApAOQAaAJAyALIEuBJQBUAUAqADQAqADA1gFQAggDA9gKQCPgXBHgSQB1geBVgvIAsgZQAagQATgIIAzgUQAfgMASgNQARgNATgWIAggoQAZgdA0gqQA6gvAVgXQArgtAshQIBKiHIAegyQARgeAHgYQAJgdACg3QADg7AGgZQAFgVAdhEQAXg3ABgkQAAgUgGgaIgMgtQgMgxgOhYQgOhXgDguQgEg6ARggQAKgWAVgMQAWgNAVAGQAVAFAPAVQANATADAZQADAOAAAgQABAeADAQQACAMAHAXQAHAYACAMQADAQAAAhQABAhACAQQADASALAfQAMAiADAOQAPBAggBkQgqCKgEAbIgFA3QgCAigFAUQgGAdgPAgQgKAUgVAmIg/BwQgmBDgTAfQgiA1ghAlQgaAdgxAsQg5AzgTATQgWAWgqAuQgmAnghAUQgVANgkAPIg7AZQgSAKgmAXQgkAWgTAKQgiAQhCASQifArieAYQhIAMg0ADIgwABQgpAAgjgEg");
	var mask_graphics_1 = new cjs.Graphics().p("ACUVRIk3gJQgygBgZgCQgogEgggIQgtgLhQgnIh1g5QhMgoiShcQhRg0glgfQgggbgvg0Qg5g8gVgUIgxgtQgegbgRgTQgzg7gEg6QgCgYAHgVQAIgWARgOQAUgOAaADQAbACAQATQALAMAJAZIAPApQAMAaAeAaIA3AtQAYAVAqAyQArAzAYAWQAcAYAzAeIBSAyIA8AsQAlAaAaAOQAUAKAoAPQApAQASAJQANAGAlAWQAgASAUAIQAgANAsAFQAbADAzABIE2AIQBWADArgGQAqgGAygQQAfgKA6gWQCGg0BDghQBsg1BJhAIAlgiQAXgUARgMIAugeQAbgSAPgRQAOgQAOgaIAXgtQASgiArg0QAug6ARgbQAgg1AbhXIAsiTIATg4QAKggACgZQADgfgJg2QgKg6AAgaQABgUAOhJQAMg7gHgjQgEgUgLgYIgWgrQgWgtgfhTQgghTgNgsQgQg4AKgjQAGgXARgQQATgRAWABQAWABASARQARAQAJAXQAFAOAHAfQAHAeAGAOQAEALAMAWQAMAVAEAMQAHAPAHAgQAHAhAGAPQAHARARAcQASAfAHANQAbA8gKBoQgNCPACAcIAHA2QAFAiAAAVQgBAdgIAjQgFAVgNApIgmB8QgXBIgNAjQgWA7gYArQgTAhgnA2QgtA+gPAWQgRAbggA1QgdAugcAbQgSAQggAXIg0AlQgQANggAeQgfAdgRAOQgeAXg8AfQiTBLiVA5QhEAagzAOQhBASg6AFQgVACgnAAIg6gBg");
	var mask_graphics_2 = new cjs.Graphics().p("AgZVcQgvgBhWgVIh+gfQhTgYiig8QhagigqgXQglgTg5gpQhEgvgZgQIg5ghQgjgUgUgPQg/gvgQg4QgHgXADgWQADgYAOgRQAQgSAbgDQAagDAUAPQANAKAOAXIAXAlQASAWAjAUIA+AgQAdAQAzAoQA0ApAcAQQAhASA4ATIBaAgIBFAeQApASAcAIQAWAGAqAGQAsAHATAFQAOAEApANQAjAMAVADQAiAGArgEQAbgDAygJIEyg5QBVgQApgPQAngOAugaQAcgQA0giQB5hPA6gtQBfhLA6hNIAegpQASgZAOgPIAmgnQAXgYALgTQALgTAIgcIANgxQALglAfg8QAhhCALgeQAVg6AHhbIAMiZIAIg6QADgigDgYQgEgegUg0QgWg3gFgZQgEgVgBhKQgBg8gOghQgIgTgQgVIgdglQgggogwhKQgwhLgVgoQgcg0ACgkQABgYAOgTQAPgVAWgEQAVgDAWANQATAMAOAVQAIAMANAdQANAcAJANQAHAKAQASQAQATAGAKQAKAOAOAeQAOAeAIAOQAKAPAXAYQAYAaAKAMQAnA1AMBoQARCPAIAbIASA0QALAgAEAUQAGAdAAAjQgBAXgEAqIgMCAQgHBMgGAkQgJA+gPAwQgMAlgbA8QgfBGgJAZQgLAdgVA7QgSAzgWAgQgOAUgbAcIgrAvQgNARgZAkQgYAjgOARQgZAcg0AsQiABniGBXQg9AogvAYQg9Afg3ARQgiAKhRAPIkzA5QgxAJgZADQggAEgaAAIgOgBg");
	var mask_graphics_3 = new cjs.Graphics().p("ACHVXIiCgEQhVgGiqgZQhggOgugOQgogLhAgcQhMgggcgKIg/gVQgmgMgYgLQhGghgcgzQgLgVgCgWQgCgYAKgTQAMgVAZgJQAagIAWAKQAPAHASATIAfAgQAWASAmAMIBEASQAfAKA6AdQA8AcAfAKQAkALA6AHIBgANIBIAPQAsAJAeACQAWABAqgCQAsgDAUABQAOABAsAFQAkADAVAAQAjgCAqgNQAagIAvgUIEfh3QBQghAlgXQAkgWAngjQAYgWAsgsQBmhmAvg5QBNhcAphYIAVgvQAMgcALgRIAdguQASgcAGgWQAHgUACgdIACgzQAEgmARhBQAThIAEgfQAJg9gMhaIgUiZIgFg6QgEgigIgYQgKgcgeguQghgxgKgZQgIgTgRhJQgNg5gVgeQgLgRgUgRIglgeQgnghg+g/Qg/g+gegkQglgsgFgkQgFgXAKgWQAKgXAVgJQAUgIAYAJQAVAHASASQAKALATAZQATAYALALQAJAJATAOQAUAPAJAJQAMALATAaQAUAbAMAMQANANAaASQAeAVALAKQAyArAhBjQAvCJANAYIAcAwQASAdAJASQALAbAHAjQAEAWAFArIAPCAQAJBMACAlQAEA9gFAyQgEAmgOBBQgPBLgFAaQgEAfgIA+QgIA2gPAkQgJAWgVAhIggA3QgJATgRApQgQAngKATQgSAhgqA2QhoCAhxBwQg0A0gpAhQg0ArgzAcQgfARhMAgIkhB3QguATgXAIQgnANggAGQgiAGg6AAIgrgBg");
	var mask_graphics_4 = new cjs.Graphics().p("AhnVXQgqgDhFgOQhRgPgegEIhBgHQgogEgZgGQhMgSgmgsQgPgSgHgVQgGgXAGgVQAHgXAXgOQAXgOAYAGQAQADAWAQIAkAYQAZAOAoADIBGAEQAhADA/AQQBAAQAhADQAlADA7gFIBegIIBLAAQAtAAAdgFQAWgDApgLQArgMAUgDQANgCAsgFQAkgDAVgGQAigJAmgVQAYgNAqgdIEAixQBHgxAfgeQAfgdAfgqQATgaAig1QBOh5AjhBQA4hrAWheIAKgyQAGgeAHgTIATgzQAMgfACgXQACgVgEgdIgIgxQgFgmAEhDQADhLgCgfQgFg+gehWIgziRIgRg4QgLgggNgWQgQgagngmQgqgqgPgVQgMgSgfhDQgZg2gbgYQgOgPgYgMIgqgWQgtgYhKgwQhKgwgkgdQgugkgNgiQgJgWAFgXQAFgZASgMQATgMAZADQAWADAVAOQANAIAXAUQAXAUAOAJQAKAGAWALQAXAKAKAHQAOAJAZAVQAZAWANAJQAQAKAeANQAhANANAIQA6AgA1BaQBKB8ASAVIAlAoQAYAZAMARQARAYAOAgQAIAVAOApIApB6QAZBIAKAkQAQA8AGAyQAEAmAABCQAABNACAbQABAfAGA9QAEA2gIAmQgEAYgNAlIgVA9QgFAUgIArQgIApgFAWQgLAkgeA9QhLCThYCFQgnA9ghApQgrA1grAmQgbAXhEAvIkCCxQgpAcgVANQgjAVgfAMQgrAShXAPIiAAXQhVAMisALQg7AEgpAAQgZAAgSgCg");
	var mask_graphics_5 = new cjs.Graphics().p("AilVjQhOgBgugkQgTgOgLgTQgLgVABgWQACgYAUgSQAUgSAYAAQARAAAZALIAoAQQAcAIAngFIBGgLQAggDBAACQBCACAhgEQAlgEA4gRIBcgcIBJgQQAsgJAbgLQAWgHAlgUQAogUASgHQANgGAqgNQAjgLATgKQAfgPAhgdQAVgSAjglIDWjiQA7g/AYgkQAYgiAWgxQANgdAWg6QAziHAVhHQAhh0ABhhIAAgxQAAgfACgVIAJg2QAEgggCgXQgDgUgKgcIgSgwQgMgkgLhDQgMhJgJgeQgRg7gvhPIhRiDIgcgzQgRgdgRgTQgVgWgvgdQgxgggUgSQgPgPgtg7QgjgwgfgSQgSgLgZgHIgugNQgxgOhSggQhTgfgpgVQg0gZgUgfQgNgUAAgXQgBgaAQgQQAPgPAagCQAWgCAXAJQAOAFAcAQQAaAOAPAGQAMAEAYAGQAXAFAMAFQAQAFAcAQQAdAQAPAGQASAHAgAGQAjAHAOAEQA/AUBHBNQBiBpAWASIAtAfQAdATAPAOQAVAUAVAdQAMASAWAlIBCBwQAnBBARAhQAdA4AQAvQAMAkANBBQAQBLAHAaQAIAeATA8QAPA0ABAnQAAAYgFAnIgHA/QgBAVABArQABAqgBAWQgDAlgRBCQgrCgg6CUQgaBEgXAvQgfA9giAuQgWAdg4A7IjYDjQgjAkgSARQgdAcgcASQgmAahSAiIh5AwQhRAeimAvQhdAZgvAHQgqAFhGABQhRACgeACIhCAHQgkAEgYAAIgFgBg");
	var mask_graphics_6 = new cjs.Graphics().p("AAKV1QgUgKgPgRQgPgSgDgVQgDgYAPgWQAQgWAXgFQAQgDAbAFIAqAIQAdACAmgNIBBgZQAggLBAgLQBAgLAggLQAjgMAzgcIBVgvIBEgeQApgSAYgRQAUgMAhgaQAigdARgKQALgIAmgWQAggSARgOQAbgVAagjQARgWAagsICikJQAthKAQgoQARgnALgzQAHggAJg9QAWiPAFhJQAIh4gShfIgLgyQgGgegCgUIgDg3QgCgggIgWQgGgUgQgZIgbgqQgUghgZg/QgahFgPgcQgeg3g+hCIhqhwIgngsQgWgZgVgPQgZgRgzgTQg4gVgWgNQgSgMg4gwQgtgngigMQgTgHgbgCIgvgDQgzgDhXgOQhYgOgsgMQg5gOgZgZQgRgRgFgXQgGgZAMgTQAMgSAYgHQAWgHAZAEQAOACAeAKQAdAJAQACQAMABAZABQAYABAMABQARADAfAJQAgAKAQADQASACAhAAQAkgBAOABQBCAGBVA9QB2BTAZAMIAzAWQAgANARAKQAZAPAbAYQAQAQAdAfIBXBfQA0A5AXAcQAoAwAaArQATAhAbA9QAfBGAMAYQAOAbAfA3QAZAwAJAmQAGAXADAoIAGA/QADAVALAqQAJApAEAWQAFAlgDBEQgJCkgZCdQgMBJgNAyQgRBCgZA0QgPAhgrBGIijEKQgbArgOAUQgXAhgXAYQggAihKAxIhrBJQhJAuiZBQQhWAsgtARQgnAOhFAPQhQATgdAIIg+AUQgmANgaAFQgcAFgZAAQgrAAghgQg");
	var mask_graphics_7 = new cjs.Graphics().p("AE3V4QgXgGgSgNQgTgPgIgUQgHgXAKgYQALgZAXgKQAPgHAbAAIArgBQAdgEAigVIA7gmQAcgQA8gZQA9gZAdgQQAggTAsgnIBJg/IA8gsQAlgaAUgVQARgQAaghQAcgjAOgOQAKgKAggdQAcgYANgRQAWgbATgoQALgYARgwIBokmQAchRAIgrQAIgpAAg1QAAgggEg9QgIiQgKhJQgRh4gmhZIgVguQgMgcgGgUIgPg1QgJgfgLgUQgLgSgUgVIgkgkQgagcglg4Qgpg/gUgXQgogwhLg0Ih/hXIgvgkQgbgTgYgKQgcgMg2gIQg6gJgZgIQgUgHhBgkQg0gdgkgFQgUgCgaADIgvAHQgyAHhZAFQhXAEgugBQg7gCgegUQgUgNgKgWQgKgXAHgVQAIgUAWgMQAUgLAZgBQAPgBAgADQAeADAQgCQAMgBAXgEQAYgFAMAAQARgCAgADQAiADAQAAQASgCAggHQAjgIAPgCQBBgIBgAqQCFA5AbAGIA2ALQAiAGATAGQAcAKAeASQATAMAjAYIBqBLQA+AtAdAWQAxAoAiAkQAZAdAnA1QAtA+ARAVQAUAYApAvQAjAqAQAjQALAWALAmIATA8QAHAUATAnQATAnAHAUQANAjALBEQAaCjAICfQAEBIgDA0QgDBEgNA4QgIAjgbBOIhpEmQgRAvgKAXQgQAlgRAcQgYAog+BAIhaBdQg+A8iFBuQhKA9gpAaQgkAWhAAdQhKAjgaAOIg5AhQgjAUgYAKQgxAVgqAAQgUAAgRgEg");
	var mask_graphics_8 = new cjs.Graphics().p("AJVVaQgYgBgUgJQgWgLgLgSQgNgVAGgaQAFgaAUgPQAOgKAagFIAqgLQAbgKAdgbIAygxQAYgWA2glQA3glAYgWQAbgZAkgvIA6hNIAyg3QAegiAQgYQAMgTATgmQAUgoALgRQAIgLAZgkQAWgdAKgTQAQgfAKgrQAGgbAGgyIAok1QAMhUgCgrQgBgqgLg0QgGgggQg8QgmiLgahFQgphyg4hPIgegpQgSgYgKgTIgZgwQgPgdgPgRQgPgPgYgRIgrgcQgfgVgwgwQg1g0gYgUQgygmhUgjIiOg7Ig1gZQgfgNgZgFQgdgGg3AEQg7ADgagDQgVgDhHgWQg5gRgkADQgUACgZAIIgsARQgwAShVAWQhWAXgtAIQg5AKgigNQgWgIgPgTQgPgVADgWQAEgVATgRQARgPAZgGQAOgEAfgEQAegDAPgFQAMgDAXgKQAWgJAMgDQAQgFAhgEQAhgEAPgEQASgFAegNQAggQAOgFQA+gVBmAVQCOAcAcABIA3gCQAigBAUADQAdADAiAMQAVAHAoARIB2A0QBGAeAhAQQA4AcApAdQAfAXAxAsQA5AzAVARQAYATAyAmQArAiAYAeQAOATATAjIAfA4QAMARAaAjQAaAiAMASQAUAgAZA/QA7CaApCaQATBHAIA0QALBDgBA5QgBAjgKBSIgqE2QgGAxgFAYQgIAogLAfQgQAsguBLIhFBvQgxBHhrCIQg8BLgiAhQgeAdg5AqQhBAygXATIgxAsQgeAbgVAPQg9Arg5AAIgEAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AMwUSQgYgFgPgQQgQgSAAgaQgBgbARgSQALgNAZgLIAngTQAYgPAXghIAmg7QAUgaAtgvQAtgvAUgbQAVgfAZg1IAphXIAlhBQAWgnALgbQAIgVALgpQALgrAIgTQAEgNASgoQAPghAGgVQAJghABgsQAAgcgEgyIgZk1QgHhXgKgpQgKgpgVgxQgNgdgcg4QhCiAgog+QhAhnhHhBIglgiQgXgVgOgPIgjgrQgUgZgTgNQgRgMgbgLIgwgTQgjgOg5glQg+gogcgOQg4gbhagRIiXgcIg5gOQgigGgZAAQgeABg1APQg4AQgaACQgVABhKgGQg7gGgjALQgTAGgXAOIgoAZQgrAbhPAoQhPAogrASQg2AVgjgGQgYgDgSgQQgTgRgBgWQgBgVAPgVQAOgSAWgLQANgHAegKQAdgKAOgHQALgGAUgOQAUgOALgFQAPgIAegLQAggLAOgHQARgJAagTQAcgWANgIQA5giBoAAQCRgDAbgEIA1gNQAhgIAUgCQAdgDAkAFQAWACAqAJIB/AZQBLAQAjAJQA9AQAuATQAjAQA5AhQBCAmAYAMQAcAOA5AbQAxAYAdAZQASAQAaAeIAqAvQAPAPAhAdQAgAbAQAPQAaAcAmA4QBZCLBICOQAhBBATAxQAZBAALA4QAHAjAHBSIAYE3QADAyABAYQAAApgEAhQgGAugeBTIgtB6QggBQhNCbQgrBWgbAoQgXAigvA1Qg2A+gSAYIgnA1QgXAhgSASQg1A6g5AKQgLACgLAAQgMAAgLgDg");
	var mask_graphics_10 = new cjs.Graphics().p("AQOS0QgYAAgSgMQgUgOgFgaQgGgaAMgWQAJgOAVgQIAigbQAVgUAQglIAZhBQANgeAjg3QAjg4ANgeQAOgjAOg5IAWheIAWhGQAOgrAFgdQAEgXACgqQACgsADgUQACgOAJgrQAIgjABgWQACgjgIgrQgGgbgOgwIhZkpQgZhTgSgnQgSgmgfgrQgTgagngwQhchwgzg1QhUhXhTgxIgsgaQgbgPgQgMIgrgiQgagVgUgJQgUgIgdgFIgygIQglgIg/gYQhGgagegHQg9gPhbACIiZAEIg7gCQghABgZAFQgdAIgxAZQg0AbgaAIQgUAGhKAJQg7AHgfARQgSAKgUASIghAiQglAjhFA3QhEA4gnAaQgwAggkACQgYACgUgMQgXgNgGgVQgFgVALgXQAJgUAUgQQALgJAbgRQAagPAMgLQAKgHARgSQAQgSAKgIQANgLAcgQQAcgRANgLQAOgLAWgZQAXgbALgKQAwgtBmgXQCNggAagKIAygYQAfgPATgGQAcgIAkgEQAWgBArgBICAgBQBMgBAlABQA/ADAxAKQAlAIA/AUQBJAYAaAHQAeAIA9AOQA1ANAiATQAVALAfAYIAzAmQASAMAmAVQAlAUATAMQAfAVAwAwQB1B1BkB8QAuA4AdAsQAlA5AXA1QAOAhAXBPIBYEsQAOAvAGAYQAJAnACAhQAEAvgMBXIgSCBQgPBVgrCnQgYBdgSAtQgQAngjA9QgnBIgNAbIgbA8QgRAlgNAWQgoBDg2AWQgVAIgVAAIgCAAg");
	var mask_graphics_11 = new cjs.Graphics().p("ASlRAQgXgJgLgZQgLgYAIgXQAFgQASgUIAcghQAQgYAIgoIALhFQAGggAXg9QAWg+AHggQAHglABg7IAChgIAHhKQAFgsgBgeQgBgXgHgpQgHgsgBgUQgBgOAAgsQAAgkgDgWQgFgigSgnQgKgagZgsIiVkRQgphMgagiQgagigngjQgYgWgwgnQhxhag9gqQhkhDhcgfIgwgQQgdgJgTgJIgxgYQgdgPgWgEQgVgFgeABIgyADQgnABhCgLQhKgLgfgBQg9gChZAVIiVAkIg6ALQghAHgXALQgbANgrAjQgtAmgXAMQgTAKhGAYQg5ATgbAYQgPANgQAWIgaAoQgcAqg4BFQg3BFghAhQgoApgjAKQgXAGgWgHQgZgIgKgTQgKgUAGgYQAFgXAQgTQAJgLAXgWQAXgVAJgMQAIgKAMgVQANgVAIgJQAKgNAYgXQAYgWALgNQALgOAQgdQARgfAJgNQAmg2BfgrQCDg9AXgPIAsghQAbgVASgKQAZgPAjgKQAVgGAqgKIB+gcQBKgRAkgGQA+gKAygBQAmAABBAHQBNAIAaABQAfACA/ABQA2ACAlALQAXAHAkARIA6AbQAUAHAqAMQAoAMAVAIQAiAPA6AkQCKBaB8BlQA4AuAmAlQAwAwAhAvQAVAdAnBIICVETQAXAsALAWQARAlAJAgQANAsAHBYIAJCCQADBWgHCsQgFBhgIAvQgHApgVBDQgYBPgHAdIgOBAQgJAogIAYQgZBKgwAgQgUAOgWAEQgIACgIAAQgOAAgNgGg");
	var mask_graphics_12 = new cjs.Graphics().p("AUkPIQgYgFgQgVQgQgWADgYQACgRANgXIAUgmQALgbAAgoIgEhGQAAghAJhAQAJhBAAghQgBgmgLg5IgShfIgIhKQgFgtgHgcQgGgWgPgoQgQgpgGgTQgEgOgJgqQgHgjgHgVQgNgggZgkQgQgWghgnIjKjsQg4hCghgbQgggcgugaQgcgRg3gcQiBhBhFgbQhwgthggMIgygFQgfgDgUgFIg1gOQgggIgWAAQgVABgdAHIgwANQglAJhEADQhKAEgeAGQg+ALhSAnIiLBCIg2AXQgfAOgUAPQgYASgjArQgkAvgUARQgQANhAAnQgzAegVAdQgNAQgKAZIgSAsQgSAvgpBPQgoBPgZAnQgeAxghAPQgVALgXgCQgagCgOgRQgOgQABgaQAAgWAMgXQAHgNASgaQARgZAHgOQAFgLAIgXQAJgXAFgLQAHgPATgbQATgbAIgOQAIgRAKgfQAKgjAGgNQAag9BUg+QBzhXAUgUIAkgpQAWgaAPgOQAWgTAfgSQAUgKAngSIB1g2QBGggAigNQA6gXAxgLQAlgIBCgHQBMgIAbgEQAfgFA9gNQA1gJAmADQAYACAmAKIA/AOQAUADAsADQAqADAWAEQAlAHBAAXQCaA8CNBJQBBAhAtAcQA5AlAqAnQAaAYA2A/IDKDuQAhAmAOAUQAZAgAPAdQAXApAYBVIAkB8QAVBUAdCqQAQBfABAwQABAqgGBGQgHBSgBAeIAABCQAAAogDAZQgJBOgpAqQgQARgVAJQgPAGgQAAIgMgBg");
	var mask_graphics_13 = new cjs.Graphics().p("AU4MpQgUgRgCgZQgCgRAIgZIAMgqQAFgcgJgnIgShEQgHgggEhBQgFhCgHggQgIgkgXg2IgmhZIgXhHQgOgqgNgbQgKgUgXgiQgZgmgJgRQgGgNgSgoQgPghgLgSQgTgegggdQgUgTgpgfIj3i9QhEg0gngVQgkgUgzgQQgegLg8gPQiMglhJgNQh2gVhgAJIgyAFQgfAEgUgBIg3gCQghgCgWAFQgUAFgbANIgtAXQgjAQhBASQhIATgdAMQg5AYhJA3Ih6BdIgwAiQgbAUgRATQgUAXgYAxQgbA1gPAVQgNARg3AzQgrAogPAgQgJATgFAZIgIAvQgJAygXBVQgXBWgQArQgUA3gcAWQgSAQgYACQgZADgRgNQgRgOgFgZQgEgWAHgZQADgOANgdQAMgcADgPQADgMADgYQADgZAEgLQAEgRAMgeQANgeAFgQQAEgSADggQADgjADgPQANhBBFhOQBfhtAPgXIAagxQAQgeANgQQARgXAbgYQARgOAigaIBohNQA9guAfgUQA1gjAtgUQAjgQA+gUQBJgYAagKQAdgLA5gZQAzgUAmgFQAYgDAnABIBAABQAVgBArgGQApgGAWgBQAmgBBDAKQCjAaCaAqQBGATAyASQA/AYAyAeQAeASBCAyID3C/QAoAfASAQQAfAbAVAZQAeAjAqBOIA9BzQAmBNBACgQAjBaALAuQAKApAJBGQAKBRAFAeIAOBAQAIAoACAZQAHBOgfAxQgMAVgSAMQgUAOgWABIAAAAQgYAAgUgSg");
	var mask_graphics_14 = new cjs.Graphics().p("A0cLuQgTgKgKgXQgJgVACgZQABgPAGgfQAGgeAAgPQAAgNgCgYQgCgYABgNQABgQAGggQAGghABgQQABgTgEggQgFgkAAgPQgBhCA0hbQBGh+AKgZIAQg1QAJggAJgTQAMgbAVgcQAOgSAcggIBWhhQAyg5AagaQAsgtAogeQAfgXA5ggQBCgnAXgPQAagRAzgkQAtgeAlgNQAXgIAmgHIA/gNQAUgFApgPQAogOAVgFQAlgJBEgEQCkgJCfAJQBJAEA0AIQBDAKA2ASQAiAMBKAkIEaCHQAtAVAWAMQAkAUAZAUQAlAdA5BDIBUBkQA1BEBgCQQA1BPAVArQASAmAWBCQAbBOAMAcIAaA8QARAlAHAYQAXBLgUA3QgHAWgQAQQgQASgVAFQgYAFgXgNQgXgNgIgYQgFgPADgbIADgrQgBgdgRgkIggg/QgNgegSg+QgShAgOgeQgQgigigwIg2hOIgmhAQgWgngTgXQgOgSgegeQgggfgMgPQgJgLgagkQgVgdgPgQQgZgYglgXQgYgOgugVIkZiGQhOglgpgMQgpgMg0gGQgggDg+gDQiQgIhJADQh5AFhcAcIgwAQQgdAKgVADIg2AJQggAGgVAJQgTAJgXASIgoAgQgeAXg8AfQhCAigaARQgzAjg8BGIhkB0IgoArQgXAagMAWQgOAagOA1QgPA5gLAXQgJAUgrA8QgiAxgIAjQgFAUABAbIACAvQACAzgFBYQgFBZgGAtQgIA6gXAcQgPASgWAIQgLAEgLAAQgMAAgLgGg");
	var mask_graphics_15 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_16 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_17 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_18 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_19 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_20 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_21 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_22 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_23 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_24 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_25 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_26 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_27 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_28 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_29 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_30 = new cjs.Graphics().p("AzJN/QgVgGgOgVQgNgSgEgZQgCgPgBgfQAAgfgDgPQgCgMgHgYQgHgXgCgMQgDgRgBggQAAgigDgQQgDgSgKgfQgMgigEgOQgOhBAfhjQAriKAEgcIAEg3QADgiAEgUQAHgbAPghQAJgUAVglIBAhxQAlhCAUgfQAig1AhgmQAZgcAxgsQA5g0ATgTQAWgWArguQAmgnAhgUQAUgMAlgPIA6gaQATgJAlgXQAkgWAUgKQAigQBBgTQCggqCdgZQBIgLA0gDQBEgEA5AHQAjAEBQATIEwBKQAxAMAXAHQAnAMAeAOQAqAUBGA3IBmBQQBCA3B8B5QBEBDAeAmQAZAhAkA9QArBGARAZIAmA1QAYAhAMAWQAmBDgIA6QgDAYgLATQgNAUgTAKQgWAKgagIQgZgIgMgWQgJgOgDgbIgGgrQgHgcgYggIgsg1QgTgbgfg5Qgfg6gTgbQgXgegrgoIhGhCIgyg3QgeghgXgTQgRgOgkgXQglgYgQgNQgLgIgggeQgbgYgSgMQgdgTgqgOQgagJgxgMIkvhIQhUgUgrgDQgqgEg0AGQgfADg+AKQiOAXhIASQh1AdhUAvIgsAaQgbAPgTAIIgzAUQgeAMgSAOQgRAMgTAXIggAnQgZAdg1ArQg5AvgWAWQgrAtgsBQIhJCHIgfAyQgQAdgIAYQgIAdgDA3QgCA7gGAaQgFAUgdBFQgYA2AAAkQgBAVAGAaIAMAuQANAxANBXQAOBYADAuQAEA6gQAgQgLAVgUAMQgQAKgPAAQgGAAgHgCg");
	var mask_graphics_31 = new cjs.Graphics().p("A0eLkQgTgKgKgXQgIgVACgaQAAgOAHgfQAGgeABgQQABgMgCgYQgCgZABgMQABgRAHgfQAHghABgQQABgTgEggQgEgkAAgPQAAhCA1haQBIh9AKgZIARg1QAKggAJgTQAMgaAWgcQAOgSAdggIBXhfQAzg5AagaQAtgsAogdQAggWA5ggQBDglAXgPQAagQA0gkQAugdAkgMQAXgIAngHIA/gLQAUgGAqgOQAogNAVgGQAlgIBEgDQCjgGCfALQBJAFA0AJQBDALA2AUQAiAMBKAkIEYCLQAsAXAWAMQAjAUAaAVQAkAdA4BFIBSBkQA0BFBeCRQA0BQAUAsQARAmAWBDQAaBOALAcIAaA8QAPAlAHAZQAWBLgUA2QgIAXgQAQQgRARgVAFQgXAFgYgOQgXgNgHgYQgFgQADgaIAEgsQgBgdgQgkIgfg/QgNgegRg/QgRhAgNgeQgPgighgxIg2hPIgkhAQgWgogSgXQgOgSgegeQgfgggMgPQgJgLgZgkQgVgegPgQQgYgZglgXQgYgOgugWIkWiKQhOgngpgMQgogNg1gGQgfgEg/gEQiQgKhIACQh5ADhdAbIgwAPQgeAJgUAEIg2AIQghAFgUAJQgTAIgYASIgoAfQgfAXg8AeQhDAhgaARQg0Aig9BFIhlBzIgpAqQgXAZgNAWQgOAagPA1QgQA4gLAYQgKATgrA8QgjAwgJAjQgFAUAAAbIACAvQABAzgGBYQgGBYgHAuQgJA5gXAcQgPATgXAHQgLADgJAAQgNAAgLgGg");
	var mask_graphics_32 = new cjs.Graphics().p("AUzM8QgUgSgBgZQgCgRAJgZIANgpQAGgdgIgnIgQhEQgGgggChBQgDhCgGggQgHglgWg3IgihaIgVhHQgNgrgMgbQgKgVgWgjQgXgmgJgSQgGgMgRgpQgNghgLgTQgSgegfgeQgUgUgoggIjxjEQhDg3glgVQgkgVgygSQgegLg8gSQiKgphJgPQh2gYhgAGIgyADQgfADgUgBIg3gEQghgDgWAFQgUAEgbAMIguAVQgjAQhCAPQhIARgdALQg7AWhKA1Ih9BaIgxAgQgcAUgRASQgUAXgaAwQgcA0gRAUQgNARg4AxQgtAngQAgQgJASgGAaIgJAuQgKAygaBUQgZBVgSArQgVA2gdAWQgTAOgXACQgaACgRgOQgQgOgEgZQgEgWAIgYQAEgPANgcQANgcAEgPQADgMAEgYQAEgYADgMQAFgQANgeQAOgeAFgQQAFgQAEghQAEgjADgPQAPhABIhMQBihqAQgXIAbgwQARgdANgQQASgXAcgXQARgOAjgZIBqhJQA/gsAfgUQA2ghAugTQAjgPA/gSQBKgWAZgJQAegKA6gXQAzgTAngDQAXgDAoADIBAACQAUAAArgFQAqgEAWgBQAmABBDALQCiAfCYAvQBGAVAxAUQA/AZAwAgQAeATBAA0IDyDGQAnAgASAQQAeAcAUAaQAdAkAnBQIA6B0QAjBOA7CiQAhBaAKAwQAJAoAGBGQAIBSAEAeIAMBBQAHAnABAaQAFBOggAwQgNAUgTAMQgUAOgWAAQgYgBgTgSg");
	var mask_graphics_33 = new cjs.Graphics().p("AUMPjQgXgGgPgWQgPgWAEgYQACgRAPgXIAWglQAMgaABgoIgBhGQACghAMhAQAMhBABghQABglgJg6IgNhfIgFhLQgDgsgGgdQgFgXgNgoQgOgqgFgTQgDgOgHgqQgGgkgHgVQgKghgYgkQgPgYgfgnIjAj2Qg1hEgggdQgegdgtgcQgbgSg2geQh+hHhDgfQhugyhfgQIgygHQgfgFgUgFIg0gQQgfgKgXgBQgVAAgdAFIgxALQglAHhDABQhLABgfAEQg9AIhVAjIiNA8Ig3AVQggAMgVAOQgYASglApQgmAtgVAQQgRANhBAjQg0AcgXAcQgNAQgMAYIgTArQgVAvgsBMQgsBOgaAlQghAwghAPQgVAKgYgDQgZgEgOgRQgNgSACgZQACgXAMgWQAHgNAUgYQASgZAIgOQAGgKAJgXQAJgXAGgKQAIgPAUgaQAUgaAIgOQAJgQALgfQAMgiAGgOQAdg7BXg6QB3hSAUgTIAmgoQAXgZAQgNQAXgSAggQQAUgKAogQIB4gwQBGgdAjgMQA8gUAxgJQAmgGBBgEQBNgFAbgDQAfgDA8gKQA3gHAmAFQAYADAmALIA9ARQAVAEArAFQAqAGAWAEQAkAJA/AaQCXBCCKBPQBAAkArAeQA3AoApApQAZAZAyBBIDAD3QAfAoAOAUQAXAiAOAdQAUAqAVBWIAeB+QARBUAVCsQAMBfgBAwQAAAqgKBGQgLBRgCAeIgDBCQgCAogEAZQgNBNgqAoQgRARgVAIQgOAFgOAAQgIAAgIgCg");
	var mask_graphics_34 = new cjs.Graphics().p("ARzRiQgVgLgKgZQgKgZAKgXQAGgQATgTIAegfQARgXAKgnIAPhEQAJggAag8QAag8AIggQAKgkAEg7IAIhfIAMhKQAIgsAAgeQAAgWgEgrQgFgsAAgUQAAgOADgrQACglgBgVQgEgjgPgpQgJgZgWguIiEkaQgkhOgZgjQgXgjglgmQgXgXgugqQhrhhg6gtQhghJhagkIgvgTQgdgLgSgKIgvgbQgdgRgVgFQgVgGgdgBIgzAAQgmgBhCgPQhJgQgfgCQg+gGhZAQIiXAaIg7AIQghAFgXAJQgcAMgtAgQgwAjgXALQgUAJhHAUQg5AQgdAWQgQAMgRAVIgcAmQgfApg8BBQg7BBgjAfQgqAngkAHQgXAGgWgJQgYgJgJgUQgJgUAHgYQAHgWARgSQAKgLAYgVQAYgTAKgMQAIgJAOgUQAOgUAIgJQALgNAZgVQAagVALgMQAMgNASgcQATgeAJgMQAqg0BhglQCHg1AYgOIAtgfQAdgTASgJQAagNAjgIQAWgFAqgHICAgVQBLgMAkgEQA+gGAyACQAmACBBALQBMAMAaAEQAfADA/AFQA2AFAkANQAXAJAiATIA5AeQATAIApAPQAoAOAUAJQAhARA4AoQCEBiB2BsQA2AxAjAnQAtAzAeAxQATAeAjBLICEEbQAVAuAJAWQAPAmAHAfQALAuABBYIABCCQgCBXgSCrQgKBggLAvQgKAogZBCQgcBNgJAdIgSA/QgKAngKAYQgeBIgyAeQgUAMgWADIgMABQgRAAgPgHg");
	var mask_graphics_35 = new cjs.Graphics().p("APBTbQgYgDgRgNQgTgPgEgbQgEgaAPgVQAJgNAWgPIAlgYQAWgSASgkIAeg/QAQgdAmg0QAng2APgdQASghARg4IAdhcIAchFQARgpAHgdQAFgWAGgqQAFgsAFgUQACgNANgqQAKgjADgWQAFgigGgrQgDgcgLgxIhCkvQgShVgQgoQgPgngcgtQgRgcgjgzQhTh2gvg5QhNhchPg4IgqgdQgagRgPgNIgpgmQgYgWgUgKQgSgKgdgIIgxgLQglgKg9gdQhDgfgegKQg7gThbgFIiagIIg7gFQgggDgZAEQgeAFgzAWQg2AXgaAGQgUAEhLAEQg7ACghAPQgSAJgVAQIgkAfQgnAhhJAyQhJAygoAXQgyAdgkgBQgYAAgUgOQgVgOgFgVQgEgWANgWQALgUAVgOQAMgIAcgOQAbgOANgJQAKgHASgRQASgQAKgHQAOgKAdgPQAegPANgJQAPgLAXgWQAagaALgJQA0gqBngOQCPgWAbgIIAzgUQAggNAUgEQAcgHAkAAQAWAAAqACICBAJQBMAFAlAEQA+AHAwAOQAlAKA9AZQBHAdAZAJQAeALA8ASQAzARAhAVQAUANAdAbIAxApQAQANAlAYQAkAXARANQAdAYAtAzQBsB9BaCDQAqA8AZAuQAhA8ATA2QALAiASBQIBBExQALAxAEAYQAGAogBAhQABAvgTBWIgcCAQgVBTg3CkQgfBbgWArQgSAlgnA7QgtBFgPAaIgfA5QgUAkgOAVQgtA/g4ASQgRAGgSAAIgJAAg");
	var mask_graphics_36 = new cjs.Graphics().p("ALJUrQgXgHgNgRQgPgUACgaQACgbATgQQAMgMAZgJIApgPQAZgNAagfIAsg3QAVgZAxgqQAygrAWgZQAYgdAdgzIAxhSIArg9QAZglANgbQALgUAOgoQAPgqAJgSQAGgMAVgmQASggAIgUQAMghAEgrQADgcABgzIADk2QABhWgHgrQgGgpgRgyQgKgfgXg6Qg2iFgihCQg3hshAhHIgjgmQgVgWgMgRIgfgtQgSgbgSgPQgQgOgagNIgtgWQgigSg1gqQg7gugbgQQg1gghYgZIiUgpIg4gTQgggJgZgCQgegCg3AKQg6AKgaAAQgVAAhIgNQg7gLgjAIQgUAEgYALIgqAWQgtAXhSAhQhTAhgsANQg3ARgjgJQgYgFgQgSQgRgSAAgWQABgWARgTQAPgRAYgJQANgFAfgIQAegHAOgGQALgFAWgMQAVgMALgFQAQgGAfgIQAhgIAPgGQARgHAcgRQAegTANgHQA8gdBoAJQCPALAcgCIA2gIQAigFAVAAQAdAAAjAHQAWAFApAMIB8AlQBJAVAiANQA8AVArAYQAiASA2AmQA/AsAWAPQAbAQA2AfQAuAdAbAcQARARAXAgIAmAzQANAQAfAgQAdAeAOARQAYAdAgA8QBNCSA7CUQAbBEAPAyQATBCAGA5QADAjAABTIgEE3QgBAygCAZQgDApgIAgQgKAtglBQIg3B2QgoBNhaCTQgyBSgfAlQgaAggzAxQg8A5gUAWIgrAxQgbAegTASQg6A0g6AFIgMAAQgRAAgQgFg");
	var mask_graphics_37 = new cjs.Graphics().p("AHGVwQgXgDgTgLQgVgNgJgTQgKgWAIgaQAIgZAVgMQAPgJAagDIArgGQAcgHAggYIA3gsQAagTA6gfQA6gfAagTQAegXAogrIBChGIA3gyQAigeASgXQAPgRAXgkQAYglAMgQQAJgLAdggQAZgbAMgSQATgdAOgqQAJgaALgxIBJkvQAUhUADgrQADgqgFgzQgDgggKg+QgXiOgShIQgeh1gvhUIgZgsQgQgbgIgTIgUgzQgMgegNgSQgNgRgWgTIgoggQgdgZgqg1Qgvg5gXgWQgtgrhQgsIiHhJIgygfQgegQgYgIQgdgIg3gDQg7gCgZgGQgVgFhEgdQg3gYgkAAQgUgBgaAGIguAMQgxANhXANQhXAOguADQg6AEgggQQgWgLgMgUQgNgWAGgWQAFgVAVgOQATgNAZgEQAOgCAggBQAeAAAQgDQAMgCAXgHQAYgHAMgCQAQgDAhgBQAhAAAPgDQASgDAfgKQAigMAPgEQBAgOBkAfQCKArAbAEIA3AEQAiADAUAEQAdAHAgAPQAUAJAmAVIBwBAQBDAlAfAUQA1AiAlAhQAdAZAsAxQAzA5ATATQAWAWAuArQAnAmAUAhQANAUAPAlIAZA6QAKATAXAlQAWAkAKAUQAQAiASBBQArCgAYCdQAMBIADA1QAEBDgHA5QgFAjgTBQIhJEwQgMAxgHAXQgMAngPAeQgUAqg2BGIhQBmQg4BCh4B8QhEBEgmAeQghAZg8AkQhHArgYARIg2AmQggAYgXAMQg4AfgyAAIgUgBg");
	var mask_graphics_38 = new cjs.Graphics().p("ACPV5QgXgIgQgPQgRgRgFgVQgFgYAOgXQANgXAYgHQAQgFAbADIArAEQAdgBAkgQIA/gfQAegNA/gRQBAgRAegOQAigPAxghIBPg1IBBglQAogWAXgSQASgOAegdQAgggAPgMQALgJAkgZQAegVAQgPQAZgYAXglQAOgXAWguICKkXQAnhNAMgpQANgpAGg0QAEggAEg+QAKiPgChKQgDh4gbhdIgPgxQgJgdgEgUIgIg3QgFgggJgVQgIgTgSgYIgfgnQgXgfgeg9QghhCgRgaQgig0hEg9Ih0hmIgqgpQgZgWgWgNQgagPg1gOQg5gQgYgMQgTgJg8grQgwgkgjgIQgUgFgbAAIgvABQgzAChYgHQhYgFgugIQg5gJgbgXQgTgPgHgXQgHgYAKgUQAKgTAWgJQAVgJAaACQAOABAfAHQAeAGAQAAQAMABAYgCQAZgBAMABQARAAAfAHQAhAHAQABQATABAggDQAkgEAPAAQBCAABaA1QB9BIAaAKIA1AQQAgAKATAJQAaANAcAWQASAOAgAcIBfBXQA5A0AaAaQAsAsAdApQAWAfAgA6QAmBDAOAXQAQAaAkA0QAdAtAMAlQAIAXAHAnIALA+QAGAUAOAqQANAoAGAVQAIAlADBEQAGClgLCeQgFBJgJA0QgLBDgTA2QgNAhgkBKIiLEYQgXAtgMAVQgUAkgVAZQgdAlhFA4IhkBSQhFA0iRBdQhRA0gsAUQgmAShDAWQhOAZgcALIg8AaQglAQgZAHQgmALghAAQggAAgagKg");
	var mask_graphics_39 = new cjs.Graphics().p("Ai2VZQgUgMgMgTQgNgUAAgWQAAgYASgUQATgTAYgCQARgBAZAJIApANQAdAGAngIIBDgQQAggGBCgCQBBgDAhgGQAkgHA3gWIBagiIBHgVQArgNAbgNQAVgJAkgWQAmgXASgJQAMgGApgRQAigNASgLQAegSAeggQAUgTAggoIDEjxQA3hDAVglQAVglASgxQALgeASg8QApiLAPhIQAYh2gFhgIgEgyQgDgfABgUIAEg3QADghgFgWQgDgVgMgaIgWguQgPgkgQhBQgRhIgLgeQgWg6g1hKIhah9IgggxQgUgcgSgRQgWgUgxgbQg0gbgUgRQgRgNgxg4QgngtgggQQgSgJgagGIgvgJQgxgKhVgaQhVgagrgRQg2gVgVgdQgPgTgCgYQgCgZAOgRQAOgRAZgEQAXgDAYAHQAOAFAcANQAcANAPAEQAMADAYAEQAYAEAMADQAQAFAeANQAeAOAQAFQARAFAhAEQAkAEAOADQBBAPBLBIQBqBiAXAPIAwAcQAeARAQANQAWASAXAcQAOARAZAjIBKBqQArA/AUAfQAhA2ATAuQAPAjASA/QAWBKAJAZQAKAeAXA6QATAzADAmQADAYgDAoIgCA/QABAVAEAsQAEAqABAWQgBAlgLBDQgfCigvCYQgUBGgUAxQgaA/gfAwQgUAeg0BAIjGDyQggAmgQASQgcAegaAVQgkAdhPAnIh1A6QhPAjiiA7QhaAhgvAKQgpAIhGAHQhSAHgeAFIhBAMQgmAHgaABIgTABQhBAAgqgdg");
	var mask_graphics_40 = new cjs.Graphics().p("AgWVbQgqAAhGgKQhRgLgegCIhCgDQgogCgZgEQhNgNgpgqQgQgRgIgVQgIgXAFgVQAGgXAWgPQAWgPAYAEQARACAWAPIAmAWQAaAMAoABIBGgBQAhACBAAMQBBAMAgABQAmABA5gJIBfgNIBKgFQAtgDAdgGQAWgFAogNQArgOATgFQAOgDArgHQAkgGAUgHQAhgKAlgYQAXgPAogfID2jAQBEg1AdggQAdgeAcgtQASgbAeg2QBHh+AfhDQAyhuAPhfIAIgyQAEgfAGgUIAQg0QAKgfAAgXQABgUgFgdIgLgxQgHgmgBhDQgBhLgEgfQgIg9gkhVIg7iNIgVg3QgNgggOgVQgRgYgpglQgtgmgQgVQgNgRgkhBQgcg0gbgXQgQgNgYgMIgsgTQgugVhNgsQhNgsglgaQgwghgPghQgKgVADgYQAEgZARgOQASgNAZACQAXACAVAMQANAHAZAUQAYASAOAIQALAGAXAJQAXAJAKAGQAPAIAaAUQAaAUAOAIQAQAJAfALQAiAMAOAGQA7AdA6BXQBSB3ATAUIAoAmQAZAXANAQQASAXAQAgQAKAUAQAoIAwB4QAdBGAMAjQAUA8AJAxQAGAmAEBBQAFBNADAbQADAfAKA9QAHA2gFAmQgDAYgLAmIgRA9QgEAVgFArQgGAqgEAWQgJAkgaA/QhCCXhPCKQgkBAgfArQgnA3gpApQgaAZhAAyIj3DAQgoAfgUAOQgiAXgdAOQgqAUhXAVIh+AeQhVARirAVQhaALgvAAIgFAAg");
	var mask_graphics_41 = new cjs.Graphics().p("ABEVWQhWgCirgSQhggKgvgLQgogKhCgZQhNgcgdgJIg/gSQgngKgYgKQhIgegegyQgMgUgDgWQgDgYAJgUQALgVAZgKQAZgKAXAKQAQAGATATIAfAeQAXARAnAKIBEAPQAgAJA8AaQA8AaAgAIQAkAKA7AEIBgAIIBJAMQAsAIAdAAQAXAAAqgEQAsgFAUAAQAOAAAsADQAkACAVgBQAjgEApgPQAagJAugWIEaiEQBOgkAjgZQAjgXAmglQAXgXAqguQBhhrAtg6QBJhgAlhaIASgvQALgdAKgSIAbgvQARgdAFgVQAGgVABgdIAAgzQACgmAOhCQAQhJADgeQAFg+gPhaIgbiXIgIg7QgFghgJgXQgMgcgggtQgjgwgLgXQgJgUgUhHQgQg5gWgdQgMgQgVgRIgmgcQgogfhCg8QhBg7gfgjQgngqgHgkQgGgXAJgWQAJgYAUgJQAUgJAZAHQAVAHATARQALAKAUAYQATAYAMAKQAJAIAUAOQAUAOAJAIQANALAVAZQAVAaAMALQANAMAcASQAfATALAJQA0AqAlBhQA1CHAOAYIAfAtQATAdAJASQANAaAIAjQAFAWAHAqIAVCAQAMBLAEAkQAHA/gDAyQgCAlgLBBQgMBMgDAaQgEAfgEA/QgGA2gNAkQgIAXgUAiIgdA5QgJATgPApQgOAogJAUQgRAhgoA4QhiCEhsB2QgxA2gnAjQgzAtgxAeQgeAThLAjIkbCEQgtAVgXAJQgmAPggAHQguALhYABIh4ABIgKAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AARVdQgtABhXgTIh/gcQhUgVijg3QhbgfgrgWQgmgSg6gnQhFgtgagPIg6gfQgjgUgVgOQhAgtgSg4QgIgWACgWQADgYANgRQAQgTAagEQAbgEAUAPQAOAJAOAWIAYAlQASAWAkASIA/AeQAdAQA1AmQA1AnAdAPQAhASA4ARIBcAdIBFAcQApARAdAHQAWAFAqAGQAsAFAUAFQANACArANQAiAKAWADQAhAFAsgGQAbgDAygLIEwhCQBUgSAogQQAngPAtgcQAcgRAzgjQB2hTA5gvQBdhNA3hPIAdgqQARgaAOgPIAlgpQAWgYALgUQAKgSAHgdIAMgxQAJglAdg9QAghDAJgeQAUg7AFhbIAHiZIAGg7QACghgEgZQgFgegVgzQgYg2gFgaQgFgUgDhLQgDg7gPghQgIgSgRgVIgfgkQgggngzhJQgyhJgXgoQgdgyABgkQABgYANgUQAOgVAWgFQAVgEAWANQAUALAOAVQAIAMAPAcQANAbAKANQAHAKAQASQARASAHAKQAKAOAOAdQAPAeAJANQALAPAXAXQAZAaAKALQApA0APBnQAVCPAJAbIATAzQANAgAEAUQAHAcABAkQAAAWgDArIgICAQgFBMgEAlQgIA+gOAwQgKAlgZA9QgdBHgJAZQgKAegTA8QgRAzgVAhQgNAUgaAdIgqAxQgNAQgXAlQgXAkgOARQgXAdgzAtQh+BsiDBaQg8AqguAZQg7Ahg3ATQgiALhQASIkyBBQgxALgYAEQgmAFggAAIgDAAg");
	var mask_graphics_43 = new cjs.Graphics().p("ACpVRIk4gEQgygBgYgCQgpgDgggIQgtgKhRglIh1g3QhNgoiThaQhSgyglgfQgggagxgzQg5g8gWgUIgygrQgegbgRgTQg0g6gFg6QgDgYAHgVQAIgXARgNQATgPAbACQAaACARATQALAMAJAZIAQApQANAZAeAaIA3AsQAZAVArAxQArAyAZAWQAcAYAzAdIBTAxIA9ArQAlAZAaANQAVALAnAOQAqAPASAJQANAGAmAVQAgASAUAIQAhAMArAEQAbADAzABIE2ADQBXABAqgHQAqgGAygRQAfgKA5gXQCGg2BCgiQBrg3BIhAIAlgjQAXgVARgMIAtgfQAbgSAOgSQAOgQAOgaIAWgtQASgiAqg1QAtg7AQgbQAgg1AZhYIAqiUIASg4QAKggACgZQACgegKg3QgLg6AAgZQABgVANhJQALg7gIgjQgEgUgMgYIgWgqQgXgtgghSQghhTgOgsQgQg3AJgjQAFgYARgQQATgRAWAAQAWABATARQAQAPAJAYQAGANAIAfQAHAeAGAOQAFALAMAWQAMAVAFALQAGAQAIAfQAIAhAGAPQAHARARAcQATAeAHANQAcA8gIBoQgLCPACAcIAIA2QAFAiAAAVQAAAdgHAjQgFAWgMApIglB8QgWBJgMAiQgVA8gYArQgTAigmA2QgsA/gOAWQgRAbgfA2QgcAugcAbQgRARggAXIg0AmQgQANgfAfQgeAdgRAOQgeAYg7AgQiSBNiUA7QhEAbgzAPQhBATg5AGQgeADg9AAIgbAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AgcVWQgkgFhQgTIkwhJQgwgMgYgHQgngMgdgPQgqgUhGg2IhnhQQhCg4h7h4QhFhEgdgmQgaghgkg8QgqhHgRgYIgng2QgXgggNgXQgmhEAIg6QADgXAMgTQAMgVAUgJQAWgKAZAIQAaAIAMAVQAIAPADAaIAGArQAHAcAYAgIAsA3QAUAaAeA6QAfA6AUAaQAWAeArAoIBGBCIAyA3QAeAiAXASQASAPAjAXQAmAYAPAMQALAJAhAdQAbAZASAMQAdATApAOQAaAJAyALIEuBJQBUAUAqADQAqADA1gFQAggDA9gKQCPgXBHgSQB1geBVgvIAsgZQAagQATgIIAzgUQAfgMASgNQARgNATgWIAggoQAZgdA0gqQA6gvAVgXQArgtAshQIBKiHIAegyQARgeAHgYQAJgdACg3QADg7AGgZQAFgVAdhEQAXg3ABgkQAAgUgGgaIgMgtQgMgxgOhYQgOhXgDguQgEg6ARggQAKgWAVgMQAWgNAVAGQAVAFAPAVQANATADAZQADAOAAAgQABAeADAQQACAMAHAXQAHAYACAMQADAQAAAhQABAhACAQQADASALAfQAMAiADAOQAPBAggBkQgqCKgEAbIgFA3QgCAigFAUQgGAdgPAgQgKAUgVAmIg/BwQgmBDgTAfQgiA1ghAlQgaAdgxAsQg5AzgTATQgWAWgqAuQgmAnghAUQgVANgkAPIg7AZQgSAKgmAXQgkAWgTAKQgiAQhCASQifArieAYQhIAMg0ADIgwABQgpAAgjgEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:146.8785,y:136.9977}).wait(1).to({graphics:mask_graphics_1,x:146.5053,y:136.1771}).wait(1).to({graphics:mask_graphics_2,x:147.0569,y:137.272}).wait(1).to({graphics:mask_graphics_3,x:146.8692,y:136.8246}).wait(1).to({graphics:mask_graphics_4,x:146.7134,y:136.8526}).wait(1).to({graphics:mask_graphics_5,x:146.7613,y:137.9244}).wait(1).to({graphics:mask_graphics_6,x:146.1838,y:136.5476}).wait(1).to({graphics:mask_graphics_7,x:145.8234,y:134.1777}).wait(1).to({graphics:mask_graphics_8,x:145.8177,y:128.9789}).wait(1).to({graphics:mask_graphics_9,x:145.6856,y:122.0366}).wait(1).to({graphics:mask_graphics_10,x:146.3116,y:113.1972}).wait(1).to({graphics:mask_graphics_11,x:145.4659,y:101.8495}).wait(1).to({graphics:mask_graphics_12,x:146.236,y:88.8421}).wait(1).to({graphics:mask_graphics_13,x:147.7569,y:75.6987}).wait(1).to({graphics:mask_graphics_14,x:147.4618,y:70.2233}).wait(1).to({graphics:mask_graphics_15,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_16,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_17,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_18,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_19,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_20,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_21,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_22,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_23,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_24,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_25,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_26,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_27,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_28,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_29,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_30,x:144.4696,y:83.659}).wait(1).to({graphics:mask_graphics_31,x:147.5717,y:69.1869}).wait(1).to({graphics:mask_graphics_32,x:147.586,y:77.7092}).wait(1).to({graphics:mask_graphics_33,x:146.1333,y:91.7406}).wait(1).to({graphics:mask_graphics_34,x:145.5983,y:105.1131}).wait(1).to({graphics:mask_graphics_35,x:146.3414,y:116.4146}).wait(1).to({graphics:mask_graphics_36,x:145.0669,y:125.8113}).wait(1).to({graphics:mask_graphics_37,x:145.9977,y:131.591}).wait(1).to({graphics:mask_graphics_38,x:145.7095,y:136.0192}).wait(1).to({graphics:mask_graphics_39,x:146.4766,y:137.4007}).wait(1).to({graphics:mask_graphics_40,x:146.9749,y:137.1333}).wait(1).to({graphics:mask_graphics_41,x:146.8762,y:136.5983}).wait(1).to({graphics:mask_graphics_42,x:146.9563,y:137.3414}).wait(1).to({graphics:mask_graphics_43,x:146.5187,y:136.0669}).wait(1).to({graphics:mask_graphics_44,x:146.8785,y:136.9977}).wait(1));

	// path_obj_
	this.path = new lib.item2_path();
	this.path.name = "path";
	this.path.parent = this;
	this.path.setTransform(150.5,83.5,1,1,0,0,0,150.5,83.5);
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

	// hole_obj_
	this.hole = new lib.item2_hole();
	this.hole.name = "hole";
	this.hole.parent = this;
	this.hole.setTransform(281,101,1,1,0,0,0,281,101);
	this.hole.depth = 0;
	this.hole.isAttachedToCamera = 0
	this.hole.isAttachedToMask = 0
	this.hole.layerDepth = 0
	this.hole.layerIndex = 3
	this.hole.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.hole).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,295,192);


(lib.Scene_1_item2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item2
	this.instance = new lib.item2();
	this.instance.parent = this;
	this.instance.setTransform(653.5,367.5,1,1,0,0,0,147.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item2, null, null);


// stage content:
(lib._2019jankids = function(mode,startPosition,loop) {
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
	this.item4.setTransform(1495.5,51.5,1,1,0,0,0,1495.5,51.5);
	this.item4.depth = 0;
	this.item4.isAttachedToCamera = 0
	this.item4.isAttachedToMask = 0
	this.item4.layerDepth = 0
	this.item4.layerIndex = 0
	this.item4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item4).wait(1));

	// item1_obj_
	this.item1 = new lib.Scene_1_item1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(527,109.5,1,1,0,0,0,527,109.5);
	this.item1.depth = 0;
	this.item1.isAttachedToCamera = 0
	this.item1.isAttachedToMask = 0
	this.item1.layerDepth = 0
	this.item1.layerIndex = 1
	this.item1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item1).wait(1));

	// item3_obj_
	this.item3 = new lib.Scene_1_item3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(557,414.2,1,1,0,0,0,557,414.2);
	this.item3.depth = 0;
	this.item3.isAttachedToCamera = 0
	this.item3.isAttachedToMask = 0
	this.item3.layerDepth = 0
	this.item3.layerIndex = 2
	this.item3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item3).wait(1));

	// item2_obj_
	this.item2 = new lib.Scene_1_item2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(653.5,411,1,1,0,0,0,653.5,411);
	this.item2.depth = 0;
	this.item2.isAttachedToCamera = 0
	this.item2.isAttachedToMask = 0
	this.item2.layerDepth = 0
	this.item2.layerIndex = 3
	this.item2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item2).wait(1));

	// scene_obj_
	this.scene = new lib.Scene_1_scene();
	this.scene.name = "scene";
	this.scene.parent = this;
	this.scene.setTransform(1155,586.5,1,1,0,0,0,1155,586.5);
	this.scene.depth = 0;
	this.scene.isAttachedToCamera = 0
	this.scene.isAttachedToMask = 0
	this.scene.layerDepth = 0
	this.scene.layerIndex = 4
	this.scene.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.scene).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(773,301,1564,872);
// library properties:
lib.properties = {
	id: 'B445D28A80B54D128AE72E56DD057D38',
	width: 1600,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/BACK.png", id:"BACK"},
		{src:"img/2019_jan_kids_atlas_.png", id:"2019_jan_kids_atlas_"}
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
an.compositions['B445D28A80B54D128AE72E56DD057D38'] = {
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