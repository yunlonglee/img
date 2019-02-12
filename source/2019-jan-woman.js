(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2019_jan_woman_atlas_", frames: [[0,0,1609,798],[0,800,178,165],[260,800,64,43],[180,800,78,61],[365,800,22,45],[326,800,37,37],[260,845,15,7]]}
];


// symbols:



(lib.BACK = function() {
	this.initialize(ss["2019_jan_woman_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.line = function() {
	this.initialize(ss["2019_jan_woman_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.三角形旋轉移動 = function() {
	this.initialize(ss["2019_jan_woman_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.半圓 = function() {
	this.initialize(ss["2019_jan_woman_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.小圓點 = function() {
	this.initialize(ss["2019_jan_woman_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.藍色圓點 = function() {
	this.initialize(ss["2019_jan_woman_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.黑 = function() {
	this.initialize(ss["2019_jan_woman_atlas_"]);
	this.gotoAndStop(6);
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
	this.instance = new lib.藍色圓點();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_7_Layer_1, null, null);


(lib.Symbol_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.半圓();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_2_Layer_1, null, null);


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.三角形旋轉移動();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1, null, null);


(lib.scene_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BACK();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene_Layer_1, null, null);


(lib.item3_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.line();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();


(lib.item3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.小圓點();
	this.instance.parent = this;
	this.instance.setTransform(126,30);

	this.instance_1 = new lib.黑();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17,163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(45));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_7_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(18.5,18.5,1,1,0,0,0,18.5,18.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,37,37), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(39,30.5,1,1,0,0,0,39,30.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,78,61), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(32,21.5,1,1,0,0,0,32,21.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,64,43), null);


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(18.5,18.5,0.3378,0.3378,0,0,0,18.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.3851,scaleY:0.3851,x:18.45,y:18.45},0).wait(1).to({scaleX:0.4324,scaleY:0.4324,x:18.5,y:18.5},0).wait(1).to({scaleX:0.4797,scaleY:0.4797,x:18.45,y:18.45},0).wait(1).to({scaleX:0.527,scaleY:0.527,x:18.5,y:18.5},0).wait(1).to({scaleX:0.5743,scaleY:0.5743},0).wait(1).to({scaleX:0.6216,scaleY:0.6216},0).wait(1).to({scaleX:0.6689,scaleY:0.6689,x:18.45,y:18.45},0).wait(1).to({scaleX:0.7162,scaleY:0.7162,x:18.5,y:18.5},0).wait(1).to({scaleX:0.7635,scaleY:0.7635,x:18.45,y:18.45},0).wait(1).to({scaleX:0.8108,scaleY:0.8108,x:18.5,y:18.5},0).wait(1).to({scaleX:0.8581,scaleY:0.8581},0).wait(1).to({scaleX:0.9054,scaleY:0.9054},0).wait(1).to({scaleX:0.9527,scaleY:0.9527,x:18.45,y:18.45},0).wait(1).to({scaleX:1,scaleY:1,x:18.5,y:18.5},0).wait(16).to({scaleX:0.9559,scaleY:0.9559},0).wait(1).to({scaleX:0.9117,scaleY:0.9117,x:18.45,y:18.45},0).wait(1).to({scaleX:0.8676,scaleY:0.8676,x:18.5,y:18.5},0).wait(1).to({scaleX:0.8234,scaleY:0.8234},0).wait(1).to({scaleX:0.7793,scaleY:0.7793,x:18.45,y:18.45},0).wait(1).to({scaleX:0.7351,scaleY:0.7351,x:18.5,y:18.5},0).wait(1).to({scaleX:0.691,scaleY:0.691},0).wait(1).to({scaleX:0.6469,scaleY:0.6469,x:18.45,y:18.45},0).wait(1).to({scaleX:0.6027,scaleY:0.6027,x:18.5,y:18.5},0).wait(1).to({scaleX:0.5586,scaleY:0.5586},0).wait(1).to({scaleX:0.5144,scaleY:0.5144,x:18.45,y:18.45},0).wait(1).to({scaleX:0.4703,scaleY:0.4703,x:18.5,y:18.5},0).wait(1).to({scaleX:0.4261,scaleY:0.4261},0).wait(1).to({scaleX:0.382,scaleY:0.382,x:18.45,y:18.45},0).wait(1).to({scaleX:0.3378,scaleY:0.3378},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.scene_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(804.5,399,1,1,0,0,0,804.5,399);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene, new cjs.Rectangle(0,0,1609,798), null);


(lib.item2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(39,30.5,1,1,0,0,0,39,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.5539,x:38.7,y:30.1},0).wait(1).to({rotation:7.1078,x:38.55,y:29.7},0).wait(1).to({rotation:10.6618,x:38.3,y:29.25},0).wait(1).to({rotation:14.2157,x:38.05,y:28.9},0).wait(1).to({rotation:17.7696,x:37.9,y:28.5},0).wait(1).to({rotation:21.3235,x:37.65,y:28.1},0).wait(1).to({rotation:24.8774,x:37.4,y:27.65},0).wait(1).to({rotation:28.4313,x:37.2,y:27.25},0).wait(1).to({rotation:31.9853,x:37,y:26.85},0).wait(1).to({rotation:35.5392,x:36.75,y:26.45},0).wait(1).to({rotation:39.0931,x:36.5,y:26.05},0).wait(1).to({rotation:42.647,x:36.3,y:25.65},0).wait(1).to({rotation:46.2009,x:36.1,y:25.25},0).wait(1).to({rotation:49.7548,x:35.85,y:24.8},0).wait(1).to({rotation:53.3088,x:35.65,y:24.4},0).wait(1).to({rotation:56.8627,x:35.35,y:24},0).wait(1).to({rotation:60.4166,x:35.2,y:23.6},0).wait(1).to({rotation:63.9705,x:34.95,y:23.25},0).wait(1).to({rotation:67.5244,x:34.7,y:22.8},0).wait(1).to({rotation:71.0783,x:34.5,y:22.45},0).wait(1).to({rotation:74.6323,x:34.3,y:22},0).wait(1).to({rotation:78.1862,x:34.05,y:21.6},0).wait(1).to({rotation:81.7401,x:33.8,y:21.2},0).wait(1).to({rotation:85.294,x:33.6,y:20.75},0).wait(1).to({rotation:83.8482,x:34.5,y:21.35},0).wait(1).to({rotation:82.4023,x:35.3,y:21.95},0).wait(1).to({rotation:80.9565,x:36.25,y:22.5},0).wait(1).to({rotation:79.5106,x:37.05,y:23.1},0).wait(1).to({rotation:78.0648,x:37.9,y:23.7},0).wait(1).to({rotation:76.619,x:38.8,y:24.3},0).wait(1).to({rotation:75.1731,x:39.65,y:24.85},0).wait(1).to({rotation:73.7273,x:40.5,y:25.45},0).wait(1).to({rotation:72.2814,x:41.35,y:26.05},0).wait(1).to({rotation:70.8356,x:42.2,y:26.6},0).wait(1).to({rotation:69.3897,x:43.1,y:27.2},0).wait(1).to({rotation:67.9439,x:43.95,y:27.75},0).wait(1).to({rotation:66.4981,x:44.8,y:28.3},0).wait(1).to({rotation:65.0522,x:45.65,y:28.9},0).wait(1).to({rotation:63.6064,x:46.55,y:29.5},0).wait(1).to({rotation:62.1605,x:47.35,y:30.1},0).wait(1).to({rotation:60.7147,x:48.25,y:30.65},0).wait(1).to({rotation:59.2689,x:49.1,y:31.25},0).wait(1).to({rotation:57.823,x:49.95,y:31.85},0).wait(1).to({rotation:56.3772,x:50.8,y:32.4},0).wait(1).to({rotation:54.9313,x:51.65,y:32.95},0).wait(1).to({rotation:53.4855,x:52.55,y:33.6},0).wait(1).to({rotation:52.0396,x:53.4,y:34.15},0).wait(1).to({rotation:50.5938,x:54.25,y:34.75},0).wait(1).to({rotation:45.0868,x:54.55,y:33.9},0).wait(1).to({rotation:39.5798,x:54.85,y:33.05},0).wait(1).to({rotation:34.0728,x:55.2,y:32.2},0).wait(1).to({rotation:28.5659,x:55.5,y:31.35},0).wait(1).to({rotation:23.0589,x:55.85,y:30.45},0).wait(1).to({rotation:17.5519,x:56.15,y:29.65},0).wait(1).to({rotation:12.0449,x:56.5,y:28.85},0).wait(1).to({rotation:6.5379,x:56.8,y:27.95},0).wait(1).to({rotation:1.0309,x:57.1,y:27.1},0).wait(1).to({rotation:-4.4761,x:57.45,y:26.25},0).wait(1).to({rotation:-9.9831,x:57.75,y:25.4},0).wait(1).to({rotation:-15.49,x:58.1,y:24.55},0).wait(1).to({rotation:-20.997,x:58.4,y:23.65},0).wait(1).to({rotation:-26.504,x:58.7,y:22.8},0).wait(1).to({rotation:-32.011,x:59,y:21.95},0).wait(1).to({rotation:-37.518,x:59.3,y:21.1},0).wait(1).to({rotation:-43.025,x:59.65,y:20.25},0).wait(1).to({rotation:-48.532,x:60,y:19.45},0).wait(1).to({rotation:-54.039,x:60.3,y:18.55},0).wait(1).to({rotation:-59.5459,x:60.6,y:17.7},0).wait(1).to({rotation:-65.0529,x:60.9,y:16.85},0).wait(1).to({rotation:-70.5599,x:61.25,y:16},0).wait(1).to({rotation:-76.0669,x:61.55,y:15.15},0).wait(1).to({rotation:-81.5739,x:61.85,y:14.25},0).wait(1).to({rotation:-71.0428,x:61.5,y:13.35},0).wait(1).to({rotation:-60.5117,x:61.2,y:12.45},0).wait(1).to({rotation:-49.9807,x:60.85,y:11.5},0).wait(1).to({rotation:-39.4496,x:60.5,y:10.55},0).wait(1).to({rotation:-28.9185,x:60.15,y:9.65},0).wait(1).to({rotation:-18.3874,x:59.75,y:8.8},0).wait(1).to({rotation:-7.8563,x:59.45,y:7.8},0).wait(1).to({rotation:2.6747,x:59.1,y:6.9},0).wait(1).to({rotation:13.2058,x:58.75,y:6},0).wait(1).to({rotation:23.7369,x:58.35,y:5.05},0).wait(1).to({rotation:34.268,x:58.1,y:4.1},0).wait(1).to({rotation:44.7991,x:57.65,y:3.25},0).wait(1).to({rotation:55.3301,x:57.35,y:2.25},0).wait(1).to({rotation:65.8612,x:57,y:1.35},0).wait(1).to({rotation:76.3923,x:56.65,y:0.45},0).wait(1).to({rotation:86.9234,x:56.3,y:-0.5},0).wait(1).to({rotation:97.4544,x:55.95,y:-1.45},0).wait(1).to({rotation:107.9855,x:55.6,y:-2.35},0).wait(1).to({rotation:118.5166,x:55.25,y:-3.3},0).wait(1).to({rotation:129.0477,x:54.9,y:-4.2},0).wait(1).to({rotation:139.5788,x:54.5,y:-5.15},0).wait(1).to({rotation:150.1098,x:54.2,y:-6.15},0).wait(1).to({rotation:160.6409,x:53.85,y:-7.1},0).wait(1).to({rotation:171.172,x:53.5,y:-8},0).wait(1).to({rotation:166.2509,x:52.8,y:-7.8},0).wait(1).to({rotation:161.3298,x:52.15,y:-7.45},0).wait(1).to({rotation:156.4087,x:51.45,y:-7.2},0).wait(1).to({rotation:151.4876,x:50.8,y:-6.9},0).wait(1).to({rotation:146.5664,x:50.1,y:-6.55},0).wait(1).to({rotation:141.6453,x:49.4,y:-6.3},0).wait(1).to({rotation:136.7242,x:48.75,y:-6},0).wait(1).to({rotation:131.8031,x:48.05,y:-5.8},0).wait(1).to({rotation:126.882,x:47.35,y:-5.45},0).wait(1).to({rotation:121.9609,x:46.65,y:-5.2},0).wait(1).to({rotation:117.0398,x:46,y:-4.9},0).wait(1).to({rotation:112.1187,x:45.3,y:-4.65},0).wait(1).to({rotation:107.1975,x:44.6,y:-4.35},0).wait(1).to({rotation:102.2764,x:43.95,y:-4.1},0).wait(1).to({rotation:97.3553,x:43.25,y:-3.8},0).wait(1).to({rotation:92.4342,x:42.65,y:-3.55},0).wait(1).to({rotation:87.5131,x:41.95,y:-3.3},0).wait(1).to({rotation:82.592,x:41.25,y:-3},0).wait(1).to({rotation:77.6709,x:40.55,y:-2.75},0).wait(1).to({rotation:72.7498,x:39.85,y:-2.45},0).wait(1).to({rotation:67.8286,x:39.15,y:-2.2},0).wait(1).to({rotation:62.9075,x:38.5,y:-1.9},0).wait(1).to({rotation:57.9864,x:37.8,y:-1.65},0).wait(1).to({rotation:53.0653,x:37.15,y:-1.35},0).wait(1).to({rotation:52.0119,x:37.65,y:-0.9},0).wait(1).to({rotation:50.9585,x:38.2,y:-0.45},0).wait(1).to({rotation:49.9052,x:38.7,y:0},0).wait(1).to({rotation:48.8518,x:39.3,y:0.35},0).wait(1).to({rotation:47.7984,x:39.8,y:0.85},0).wait(1).to({rotation:46.745,x:40.35,y:1.25},0).wait(1).to({rotation:45.6916,x:40.85,y:1.7},0).wait(1).to({rotation:44.6382,x:41.4,y:2.15},0).wait(1).to({rotation:43.5849,x:41.95,y:2.6},0).wait(1).to({rotation:42.5315,x:42.5,y:3},0).wait(1).to({rotation:41.4781,x:43,y:3.45},0).wait(1).to({rotation:40.4247,x:43.55,y:3.85},0).wait(1).to({rotation:39.3713,x:44.1,y:4.35},0).wait(1).to({rotation:38.3179,x:44.65,y:4.8},0).wait(1).to({rotation:37.2646,x:45.2,y:5.15},0).wait(1).to({rotation:36.2112,x:45.7,y:5.6},0).wait(1).to({rotation:35.1578,x:46.25,y:6.05},0).wait(1).to({rotation:34.1044,x:46.8,y:6.45},0).wait(1).to({rotation:33.051,x:47.3,y:6.9},0).wait(1).to({rotation:31.9976,x:47.8,y:7.35},0).wait(1).to({rotation:30.9443,x:48.35,y:7.8},0).wait(1).to({rotation:29.8909,x:48.9,y:8.25},0).wait(1).to({rotation:28.8375,x:49.45,y:8.65},0).wait(1).to({rotation:27.7841,x:50,y:9.15},0).wait(1).to({rotation:27.2514,x:49.5,y:9.5},0).wait(1).to({rotation:26.7187,x:49.1,y:10},0).wait(1).to({rotation:26.1859,x:48.6,y:10.35},0).wait(1).to({rotation:25.6532,x:48.15,y:10.85},0).wait(1).to({rotation:25.1205,x:47.65,y:11.25},0).wait(1).to({rotation:24.5878,x:47.2,y:11.75},0).wait(1).to({rotation:24.0551,x:46.75,y:12.15},0).wait(1).to({rotation:23.5224,x:46.3,y:12.55},0).wait(1).to({rotation:22.9897,x:45.85,y:13.05},0).wait(1).to({rotation:22.4569,x:45.4,y:13.45},0).wait(1).to({rotation:21.9242,x:44.95,y:13.85},0).wait(1).to({rotation:21.3915,x:44.5,y:14.3},0).wait(1).to({rotation:20.8588,x:44.05,y:14.75},0).wait(1).to({rotation:20.3261,x:43.55,y:15.2},0).wait(1).to({rotation:19.7934,x:43.1,y:15.6},0).wait(1).to({rotation:19.2606,x:42.65,y:16.05},0).wait(1).to({rotation:18.7279,x:42.2,y:16.5},0).wait(1).to({rotation:18.1952,x:41.75,y:16.9},0).wait(1).to({rotation:17.6625,x:41.25,y:17.35},0).wait(1).to({rotation:17.1298,x:40.75,y:17.8},0).wait(1).to({rotation:16.5971,x:40.35,y:18.25},0).wait(1).to({rotation:16.0643,x:39.9,y:18.65},0).wait(1).to({rotation:15.5316,x:39.45,y:19.1},0).wait(1).to({rotation:14.9989,x:38.95,y:19.5},0).wait(1).to({rotation:14.3468,x:39,y:20},0).wait(1).to({rotation:13.6946,y:20.5},0).wait(1).to({rotation:13.0425,x:38.95,y:20.95},0).wait(1).to({rotation:12.3904,x:39,y:21.45},0).wait(1).to({rotation:11.7383,y:21.9},0).wait(1).to({rotation:11.0861,x:38.95,y:22.4},0).wait(1).to({rotation:10.434,x:39,y:22.85},0).wait(1).to({rotation:9.7819,x:38.95,y:23.35},0).wait(1).to({rotation:9.1298,y:23.85},0).wait(1).to({rotation:8.4776,y:24.3},0).wait(1).to({rotation:7.8255,x:39,y:24.75},0).wait(1).to({rotation:7.1734,y:25.25},0).wait(1).to({rotation:6.5213,y:25.75},0).wait(1).to({rotation:5.8691,y:26.25},0).wait(1).to({rotation:5.217,y:26.7},0).wait(1).to({rotation:4.5649,y:27.15},0).wait(1).to({rotation:3.9128,x:38.95,y:27.65},0).wait(1).to({rotation:3.2606,y:28.1},0).wait(1).to({rotation:2.6085,y:28.55},0).wait(1).to({rotation:1.9564,x:39,y:29.15},0).wait(1).to({rotation:1.3043,y:29.6},0).wait(1).to({rotation:0.6521,x:38.95,y:30.05},0).wait(1).to({rotation:0,x:39,y:30.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_191 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(191).call(this.frame_191).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.item2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(39,30.5,1,1,0,0,0,39,30.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1).to({regX:48.5,regY:14.5,x:48.5,y:14.5},0).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-55,122.9,139.2);


(lib.item1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(32,21.5,1,1,0,0,0,32,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.6521,x:31.95,y:21.05},0).wait(1).to({rotation:1.3043,y:20.6},0).wait(1).to({rotation:1.9564,x:32,y:20.1},0).wait(1).to({rotation:2.6085,x:31.95,y:19.65},0).wait(1).to({rotation:3.2606,x:32,y:19.1},0).wait(1).to({rotation:3.9128,y:18.65},0).wait(1).to({rotation:4.5649,y:18.2},0).wait(1).to({rotation:5.217,x:31.95,y:17.7},0).wait(1).to({rotation:5.8691,x:32,y:17.2},0).wait(1).to({rotation:6.5213,x:31.95,y:16.75},0).wait(1).to({rotation:7.1734,y:16.3},0).wait(1).to({rotation:7.8255,y:15.8},0).wait(1).to({rotation:8.4776,x:32,y:15.25},0).wait(1).to({rotation:9.1298,y:14.85},0).wait(1).to({rotation:9.7819,y:14.4},0).wait(1).to({rotation:10.434,x:31.95,y:13.9},0).wait(1).to({rotation:11.0861,y:13.4},0).wait(1).to({rotation:11.7383,x:32,y:12.9},0).wait(1).to({rotation:12.3904,y:12.4},0).wait(1).to({rotation:13.0425,x:31.95,y:11.95},0).wait(1).to({rotation:13.6946,y:11.5},0).wait(1).to({rotation:14.3468,y:11.05},0).wait(1).to({rotation:14.9989,x:32,y:10.55},0).wait(1).to({rotation:15.5316,x:32.45,y:10.05},0).wait(1).to({rotation:16.0643,x:32.9,y:9.65},0).wait(1).to({rotation:16.5971,x:33.3,y:9.25},0).wait(1).to({rotation:17.1298,x:33.8,y:8.75},0).wait(1).to({rotation:17.6625,x:34.3,y:8.35},0).wait(1).to({rotation:18.1952,x:34.75,y:7.9},0).wait(1).to({rotation:18.7279,x:35.2,y:7.45},0).wait(1).to({rotation:19.2606,x:35.6,y:7.05},0).wait(1).to({rotation:19.7934,x:36.05,y:6.65},0).wait(1).to({rotation:20.3261,x:36.55,y:6.15},0).wait(1).to({rotation:20.8588,x:37,y:5.75},0).wait(1).to({rotation:21.3915,x:37.45,y:5.25},0).wait(1).to({rotation:21.9242,x:37.95,y:4.9},0).wait(1).to({rotation:22.4569,x:38.4,y:4.4},0).wait(1).to({rotation:22.9897,x:38.85,y:4},0).wait(1).to({rotation:23.5224,x:39.3,y:3.55},0).wait(1).to({rotation:24.0551,x:39.75,y:3.15},0).wait(1).to({rotation:24.5878,x:40.2,y:2.7},0).wait(1).to({rotation:25.1205,x:40.65,y:2.25},0).wait(1).to({rotation:25.6532,x:41.15,y:1.85},0).wait(1).to({rotation:26.1859,x:41.55,y:1.4},0).wait(1).to({rotation:26.7187,x:42.1,y:0.95},0).wait(1).to({rotation:27.2514,x:42.5,y:0.5},0).wait(1).to({rotation:27.7841,x:43,y:0.05},0).wait(1).to({rotation:28.8375,x:42.5,y:-0.3},0).wait(1).to({rotation:29.8909,x:41.95,y:-0.75},0).wait(1).to({rotation:30.9443,x:41.4,y:-1.2},0).wait(1).to({rotation:31.9976,x:40.85,y:-1.65},0).wait(1).to({rotation:33.051,x:40.25,y:-2.1},0).wait(1).to({rotation:34.1044,x:39.8,y:-2.5},0).wait(1).to({rotation:35.1578,x:39.2,y:-2.9},0).wait(1).to({rotation:36.2112,x:38.7,y:-3.4},0).wait(1).to({rotation:37.2646,x:38.15,y:-3.8},0).wait(1).to({rotation:38.3179,x:37.6,y:-4.25},0).wait(1).to({rotation:39.3713,x:37.1,y:-4.7},0).wait(1).to({rotation:40.4247,x:36.55,y:-5.15},0).wait(1).to({rotation:41.4781,x:36,y:-5.55},0).wait(1).to({rotation:42.5315,x:35.5,y:-5.95},0).wait(1).to({rotation:43.5849,x:35,y:-6.45},0).wait(1).to({rotation:44.6382,x:34.4,y:-6.85},0).wait(1).to({rotation:45.6916,x:33.85,y:-7.3},0).wait(1).to({rotation:46.745,x:33.4,y:-7.7},0).wait(1).to({rotation:47.7984,x:32.8,y:-8.15},0).wait(1).to({rotation:48.8518,x:32.25,y:-8.6},0).wait(1).to({rotation:49.9052,x:31.75,y:-9},0).wait(1).to({rotation:50.9585,x:31.2,y:-9.45},0).wait(1).to({rotation:52.0119,x:30.7,y:-9.9},0).wait(1).to({rotation:53.0653,x:30.15,y:-10.35},0).wait(1).to({rotation:57.9864,x:30.8,y:-10.6},0).wait(1).to({rotation:62.9075,x:31.45,y:-10.85},0).wait(1).to({rotation:67.8286,x:32.2,y:-11.15},0).wait(1).to({rotation:72.7498,x:32.85,y:-11.4},0).wait(1).to({rotation:77.6709,x:33.55,y:-11.7},0).wait(1).to({rotation:82.592,x:34.3,y:-12},0).wait(1).to({rotation:87.5131,x:34.9,y:-12.25},0).wait(1).to({rotation:92.4342,x:35.6,y:-12.55},0).wait(1).to({rotation:97.3553,x:36.3,y:-12.8},0).wait(1).to({rotation:102.2764,x:36.95,y:-13.1},0).wait(1).to({rotation:107.1975,x:37.65,y:-13.4},0).wait(1).to({rotation:112.1187,x:38.35,y:-13.65},0).wait(1).to({rotation:117.0398,x:39,y:-13.9},0).wait(1).to({rotation:121.9609,x:39.65,y:-14.2},0).wait(1).to({rotation:126.882,x:40.35,y:-14.45},0).wait(1).to({rotation:131.8031,x:41,y:-14.75},0).wait(1).to({rotation:136.7242,x:41.7,y:-15},0).wait(1).to({rotation:141.6453,x:42.4,y:-15.3},0).wait(1).to({rotation:146.5664,x:43.1,y:-15.55},0).wait(1).to({rotation:151.4876,x:43.8,y:-15.9},0).wait(1).to({rotation:156.4087,x:44.45,y:-16.15},0).wait(1).to({rotation:161.3298,x:45.15,y:-16.4},0).wait(1).to({rotation:166.2509,x:45.8,y:-16.7},0).wait(1).to({rotation:171.172,x:46.55,y:-17},0).wait(1).to({rotation:160.6409,x:46.8,y:-16.05},0).wait(1).to({rotation:150.1098,x:47.2,y:-15.1},0).wait(1).to({rotation:139.5788,x:47.55,y:-14.15},0).wait(1).to({rotation:129.0477,x:47.9,y:-13.25},0).wait(1).to({rotation:118.5166,x:48.2,y:-12.3},0).wait(1).to({rotation:107.9855,x:48.6,y:-11.4},0).wait(1).to({rotation:97.4544,x:48.95,y:-10.45},0).wait(1).to({rotation:86.9234,x:49.3,y:-9.55},0).wait(1).to({rotation:76.3923,x:49.65,y:-8.6},0).wait(1).to({rotation:65.8612,x:50.05,y:-7.65},0).wait(1).to({rotation:55.3301,x:50.3,y:-6.75},0).wait(1).to({rotation:44.7991,x:50.7,y:-5.8},0).wait(1).to({rotation:34.268,x:51.05,y:-4.9},0).wait(1).to({rotation:23.7369,x:51.4,y:-3.9},0).wait(1).to({rotation:13.2058,x:51.75,y:-3},0).wait(1).to({rotation:2.6747,x:52.05,y:-2.05},0).wait(1).to({rotation:-7.8563,x:52.45,y:-1.1},0).wait(1).to({rotation:-18.3874,x:52.8,y:-0.25},0).wait(1).to({rotation:-28.9185,x:53.15,y:0.7},0).wait(1).to({rotation:-39.4496,x:53.45,y:1.55},0).wait(1).to({rotation:-49.9807,x:53.85,y:2.55},0).wait(1).to({rotation:-60.5117,x:54.15,y:3.45},0).wait(1).to({rotation:-71.0428,x:54.55,y:4.4},0).wait(1).to({rotation:-81.5739,x:54.85,y:5.3},0).wait(1).to({rotation:-76.0669,x:54.55,y:6.2},0).wait(1).to({rotation:-70.5599,x:54.2,y:7},0).wait(1).to({rotation:-65.0529,x:53.95,y:7.85},0).wait(1).to({rotation:-59.5459,x:53.6,y:8.7},0).wait(1).to({rotation:-54.039,x:53.3,y:9.6},0).wait(1).to({rotation:-48.532,x:52.95,y:10.4},0).wait(1).to({rotation:-43.025,x:52.65,y:11.2},0).wait(1).to({rotation:-37.518,x:52.35,y:12.1},0).wait(1).to({rotation:-32.011,x:52.05,y:13},0).wait(1).to({rotation:-26.504,x:51.7,y:13.8},0).wait(1).to({rotation:-20.997,x:51.4,y:14.65},0).wait(1).to({rotation:-15.49,x:51.1,y:15.5},0).wait(1).to({rotation:-9.9831,x:50.75,y:16.35},0).wait(1).to({rotation:-4.4761,x:50.45,y:17.25},0).wait(1).to({rotation:1.0309,x:50.1,y:18.15},0).wait(1).to({rotation:6.5379,x:49.8,y:18.95},0).wait(1).to({rotation:12.0449,x:49.45,y:19.85},0).wait(1).to({rotation:17.5519,x:49.1,y:20.65},0).wait(1).to({rotation:23.0589,x:48.85,y:21.55},0).wait(1).to({rotation:28.5659,x:48.5,y:22.35},0).wait(1).to({rotation:34.0728,x:48.2,y:23.2},0).wait(1).to({rotation:39.5798,x:47.85,y:24.05},0).wait(1).to({rotation:45.0868,x:47.55,y:24.9},0).wait(1).to({rotation:50.5938,x:47.25,y:25.8},0).wait(1).to({rotation:52.0396,x:46.4,y:25.15},0).wait(1).to({rotation:53.4855,x:45.5,y:24.55},0).wait(1).to({rotation:54.9313,x:44.65,y:24},0).wait(1).to({rotation:56.3772,x:43.8,y:23.4},0).wait(1).to({rotation:57.823,x:42.95,y:22.85},0).wait(1).to({rotation:59.2689,x:42.05,y:22.25},0).wait(1).to({rotation:60.7147,x:41.2,y:21.65},0).wait(1).to({rotation:62.1605,x:40.4,y:21.1},0).wait(1).to({rotation:63.6064,x:39.55,y:20.5},0).wait(1).to({rotation:65.0522,x:38.65,y:19.9},0).wait(1).to({rotation:66.4981,x:37.8,y:19.35},0).wait(1).to({rotation:67.9439,x:36.9,y:18.75},0).wait(1).to({rotation:69.3897,x:36.05,y:18.15},0).wait(1).to({rotation:70.8356,x:35.2,y:17.6},0).wait(1).to({rotation:72.2814,x:34.35,y:17.05},0).wait(1).to({rotation:73.7273,x:33.45,y:16.4},0).wait(1).to({rotation:75.1731,x:32.6,y:15.85},0).wait(1).to({rotation:76.619,x:31.8,y:15.3},0).wait(1).to({rotation:78.0648,x:30.85,y:14.7},0).wait(1).to({rotation:79.5106,x:30.05,y:14.1},0).wait(1).to({rotation:80.9565,x:29.2,y:13.55},0).wait(1).to({rotation:82.4023,x:28.35,y:12.95},0).wait(1).to({rotation:83.8482,x:27.45,y:12.35},0).wait(1).to({rotation:85.294,x:26.6,y:11.8},0).wait(1).to({rotation:81.7401,x:26.8,y:12.2},0).wait(1).to({rotation:78.1862,x:27.05,y:12.55},0).wait(1).to({rotation:74.6323,x:27.3,y:13},0).wait(1).to({rotation:71.0783,x:27.5,y:13.35},0).wait(1).to({rotation:67.5244,x:27.75,y:13.8},0).wait(1).to({rotation:63.9705,x:28,y:14.25},0).wait(1).to({rotation:60.4166,x:28.15,y:14.65},0).wait(1).to({rotation:56.8627,x:28.4,y:15.05},0).wait(1).to({rotation:53.3088,x:28.6,y:15.45},0).wait(1).to({rotation:49.7548,x:28.85,y:15.85},0).wait(1).to({rotation:46.2009,x:29.1,y:16.25},0).wait(1).to({rotation:42.647,x:29.3,y:16.65},0).wait(1).to({rotation:39.0931,x:29.55,y:17.1},0).wait(1).to({rotation:35.5392,x:29.75,y:17.45},0).wait(1).to({rotation:31.9853,x:29.95,y:17.9},0).wait(1).to({rotation:28.4313,x:30.2,y:18.3},0).wait(1).to({rotation:24.8774,x:30.4,y:18.65},0).wait(1).to({rotation:21.3235,x:30.65,y:19.15},0).wait(1).to({rotation:17.7696,x:30.85,y:19.45},0).wait(1).to({rotation:14.2157,x:31.05,y:19.9},0).wait(1).to({rotation:10.6618,x:31.3,y:20.3},0).wait(1).to({rotation:7.1078,x:31.55,y:20.7},0).wait(1).to({rotation:3.5539,x:31.75,y:21.15},0).wait(1).to({rotation:0,x:32,y:21.5},0).wait(1));

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
	this.Layer_1.setTransform(32,21.5,1,1,0,0,0,32,21.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1).to({regX:41.5,regY:5.5,x:41.5,y:5.5},0).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-52.8,100.60000000000001,116.89999999999999);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(18.5,18.5,1,1,0,0,0,18.5,18.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,37);


(lib.Scene_1_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// scene
	this.instance = new lib.scene();
	this.instance.parent = this;
	this.instance.setTransform(799.5,396,1,1,0,0,0,804.5,399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_scene, null, null);


(lib.Scene_1_item2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item2
	this.instance = new lib.item2();
	this.instance.parent = this;
	this.instance.setTransform(1015,642.5,1,1,0,0,0,39,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item2, null, null);


(lib.Scene_1_item1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item1
	this.instance = new lib.item1();
	this.instance.parent = this;
	this.instance.setTransform(1266,162.5,1,1,0,0,0,32,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item1, null, null);


(lib.item3_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(100.95,101.1,0.9998,0.9998,-176.2468,0,0,-53.9,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:18.5,regY:18.5,scaleX:1,scaleY:1,rotation:-163.6561,x:13.2,y:143.05},0).wait(1).to({rotation:-151.0671,x:6.15,y:122.9},0).wait(1).to({rotation:-138.4782,x:3.65,y:101.75},0).wait(1).to({rotation:-125.8893,x:5.85,y:80.45},0).wait(1).to({rotation:-113.3004,x:12.65,y:60.25},0).wait(1).to({rotation:-100.7114,x:23.65,y:41.95},0).wait(1).to({rotation:-88.1225,x:38.35,y:26.5},0).wait(1).to({rotation:-75.5336,x:56.05,y:14.65},0).wait(1).to({rotation:-62.9446,x:76,y:6.95},0).wait(1).to({rotation:-50.3557,x:97.1,y:3.8},0).wait(1).to({rotation:-37.7668,x:118.4,y:5.25},0).wait(1).to({rotation:-25.1779,x:138.8,y:11.4},0).wait(1).to({rotation:-12.5889,x:157.45,y:21.75},0).wait(1).to({rotation:0,x:173.35,y:36},0).wait(17).to({rotation:-12.5866,x:157.45,y:21.75},0).wait(1).to({rotation:-25.1731,x:138.85,y:11.4},0).wait(1).to({rotation:-37.7597,x:118.45,y:5.3},0).wait(1).to({rotation:-50.3463,x:97.1,y:3.75},0).wait(1).to({rotation:-62.9329,x:76,y:6.95},0).wait(1).to({rotation:-75.5194,x:56.15,y:14.7},0).wait(1).to({rotation:-88.106,x:38.4,y:26.45},0).wait(1).to({rotation:-100.6926,x:23.65,y:41.9},0).wait(1).to({rotation:-113.2791,x:12.65,y:60.2},0).wait(1).to({rotation:-125.8657,x:5.85,y:80.4},0).wait(1).to({rotation:-138.4523,x:3.65,y:101.65},0).wait(1).to({rotation:-151.0389,x:6.1,y:122.8},0).wait(1).to({rotation:-163.6254,x:13.15,y:142.95},0).wait(1).to({rotation:-176.212,x:24.4,y:161.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// blue_obj_
	this.blue = new lib.item3_blue();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(59.4,134.4,1,1,0,0,0,59.4,134.4);
	this.blue.depth = 0;
	this.blue.isAttachedToCamera = 0
	this.blue.isAttachedToMask = 0
	this.blue.layerDepth = 0
	this.blue.layerIndex = 0
	this.blue.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blue).wait(1).to({regX:84.7,regY:79.3,x:84.7,y:79.3},0).wait(44));

	// line_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiPQDQgdgFgqgLQg+gQhGgWQhfgfhZgnQhVgkgxgjQgYgQg7gyIgjgfQgUgSgKgRQgNgVgEgWQgEgZAJgUQAMgcAfgKQAfgLAbAPQAMAIANAPIAWAcQAuA6BRAtQAyAdBmAqQBYAjAyAMIAyAKQAfAGATAGIAdAKQARAGAMACQAYAEA1gHQBxgQBQgNQA4gLAagGQBHgTBGgnQApgWBWg8QBLg1AegdQAsgpAmg6QAeguAhhDQAshWAmhhQAZhCANgvQAQg/AAg1QABg4gRhDQgKgpgbhOIgjhlQgahNgUgiIgegtQgTgbgIgUQgMgbABgbQABgeARgSQAPgRAXgEQAXgEAUALQAUALAWAkQAfAxAYAxQAnBPApB6QAkBmAPBGQAVBggGBQQgDA7gTBEQgOAxgbBKQg6CZg6BnQhLCEhhBUQgjAfhCAvQhrBJhLAiQghAPhKAaQgzASgfAGQgdAFg7ADQgYADg2AKQgyAJgaADQgVACgVAAQgnAAgqgHg");
	var mask_graphics_1 = new cjs.Graphics().p("AgFQIQgegBg5gKQgZgDg2gCQg0gDgagDQg6gHg9gZQgbgLgngVQg4gdhAgmQhWgzhNg5QhLg3gogtQgUgVgvg+IgbgmQgOgWgHgTQgIgXABgXQACgZANgRQASgZAhgDQAggDAXAUQAKALAJARIAPAgQAgBDBFA/QAqAnBbA/QBOA3AtAWIAvAVQAdANARAKIAaAQQAPAJAMAFQAWAKA2AFQByAKBRAFQA4ACAaAAQBKgDBNgWQAtgNBignQBVgjAjgVQA0geAygwQAngmAwg6QA+hKA6hWQAog6AXgsQAeg5AMg1QANg2gChGQAAgqgJhRIgLhqQgIhRgMglIgUgzQgMgfgEgVQgFgdAHgaQAIgdAVgOQASgNAXACQAYABAQAPQASAOANAoQATA4AMA1QAVBWANB/QAMBrgBBIQgBBigYBOQgQA4gjA+QgYAtgrBCQhaCIhQBXQhnBwhxA9QgpAWhLAeQh5AwhQAQQgjAHhPAKQgqAFgcAAIgOgBg");
	var mask_graphics_2 = new cjs.Graphics().p("AghQJQgkAAhPgIQg2gGgegJQgdgIg2gWQgXgJg0gOQgygNgZgKQg3gTg2gmQgYgRghgdQgxgpg2gyQhIhFg/hKQg9hFgdg1QgPgZgfhHIgSgrQgKgZgCgUQgDgYAHgVQAHgYAQgPQAXgUAhAEQAhAFARAYQAIANAFATIAHAiQAQBJA2BMQAgAvBLBTQA/BGAoAgIApAeQAaATAOAOIAWAVQAMANALAHQATAPAzAQQBuAkBNAWQA4APAaAFQBHAOBQgEQAugDBogQQBbgQAogNQA4gSA8gkQAugcA8gtQBNg7BMhHQAzgwAggmQAqgxAXgxQAZgyAOhEQAJgpAKhSIAMhqQAKhQgDgnIgIg2QgFggABgWQABgdANgYQANgaAYgKQAUgJAXAHQAXAHAMASQAOASAEAqQAHA6AAA2QABBYgPB/QgNBsgQBGQgXBfgpBHQgcAzgvA1QgiAng4A2Qh2BxhhBDQh+BXh7AiQgtAMhQAOQh0AShNAAIgQgBg");
	var mask_graphics_3 = new cjs.Graphics().p("AglQIQiCgJhPgUQgjgJhLgZQgzgSgcgPQgagOgwgiQgVgNgvgZQgugYgXgPQgxgfgsgxQgUgWgagkQgmgygpg9Qg3hTguhWQgshRgRg6QgJgcgPhMIgIguQgDgaACgUQACgYALgUQANgVATgKQAbgOAfALQAfALALAbQAFAOABAUIgBAjQAABKAjBWQAWA2A2BgQAvBTAfAnIAhAoQAVAYALAQIARAaQAJAPAJAKQAQASAuAbQBjA7BGAnQAzAbAYAKQBDAeBPANQAuAIBpAHQBbAFAqgEQA7gFBCgWQA0gRBEgfQBYgpBZg0QA+gjAngeQAzgnAigrQAjgrAdg/QARgmAchOIAkhlQAbhMAGgnIAEg2QACghAGgVQAIgcARgTQAUgXAZgEQAVgEAVAMQAVALAIAUQAJAUgFAqQgGA6gMA1QgTBXgrB4QgkBmgfBBQgsBYg3A8QgnAsg5ApQgqAehDApQiMBUhuAsQiNA5iAAGIggAAQgnAAg3gDg");
	var mask_graphics_4 = new cjs.Graphics().p("AiAQDQgtgJhOgWQh8gmhJglQghgQhDgpQgugdgYgVQgWgTgngsQgRgRgpgjQgogigTgUQgogpggg5QgPgZgSgpQgag6gahFQgkhdgZhdQgZhZgEg9QgCgcAChNQAAgiACgNQACgaAHgTQAHgXAQgRQAQgSAWgGQAdgIAcARQAbASAFAeQACAPgEATIgIAiQgRBJAQBbQAJA4AgBrQAbBaAWAuIAXAuQAPAcAHASIALAdQAGARAGALQALAVAoAlQBTBPA8A2QAsAlAVAQQA7AsBKAeQArASBlAeQBZAZApAFQA7AJBEgHQA2gFBJgQQBggUBigfQBEgVAsgUQA7gbArgiQArgiArg3QAZgiAshGIA6haQArhEAOglIAQg0QAKggAKgTQAOgaAVgQQAYgRAZABQAWABASAQQASAQADAVQAFAXgPAnQgTA4gXAxQglBQhFBsQg5BcguA4Qg+BMhCAvQgwAhhBAcQgvAUhLAZQibAzh1ATQhOANhGAAQhDAAg9gLg");
	var mask_graphics_5 = new cjs.Graphics().p("AgzQIQiYgKh2gyQgrgShHgnQhxhAg/g1QgcgXg4g3QgngmgSgZQgSgYgcgzQgNgVghgsQgegpgPgXQgegygTg/QgIgcgJgrQgMg+gLhJQgOhjgEhgQgFhcAKg8QAEgdAThLIAMgtQAIgZALgRQANgVASgNQAVgOAWgBQAegBAXAXQAXAYgCAeQgBAPgIASIgQAfQggBDgFBdQgEA5AHBuQAHBfALAxIANAxQAJAfACATIAEAfQACASAEAMQAGAYAeAsQBABgAvBBQAiAuARAUQAwA4BCAuQAmAbBcA0QBRAsAnAOQA3AVBFAJQA2AHBKABQBhABBngIQBHgGAwgKQA/gNAxgYQAzgXA1gtQAggbA7g6IBMhMQA5g5AWggIAbgwQAQgcAOgRQATgWAZgLQAbgMAZAIQAVAFANAUQAOATgBAWQgBAXgWAjQgfAygiAqQg2BHhbBaQhMBNg5AsQhNA9hLAeQg2AXhGAMQgyAKhOAHQhuALhZAAQgrAAgmgCg");
	var mask_graphics_6 = new cjs.Graphics().p("AC3QRQgzgChOgKQihgVhxghQiTgrhohLQgmgbg8g2QhghXgyhBQgWgdgrhCQgdgugNgdQgMgbgQg4QgIgXgWgyQgVgvgIgaQgTg3gFhBQgCgdACgtQABg+AGhKQAIhjARhfQAQhbAXg4QAKgcAjhFIAWgpQAOgXAOgOQARgRAVgJQAXgJAWAEQAeAFARAcQARAcgIAdQgFAOgMAQIgWAbQguA6gaBaQgQA3gRBtQgPBeAAAzIACAyQABAggBATIgDAfQgCASABAMQABAZATAyQApBrAgBLQAXA0AMAXQAiBBA2A8QAfAiBPBHQBEA9AkAWQAxAhBBAYQA0ATBIARQBfAXBlAPQBGAJAxACQBBABA1gMQA2gNA+gfQAlgUBHgrIBag5QBFgrAcgbIAlgoQAWgZARgMQAYgSAagFQAegGAWANQATAKAJAWQAKAWgHAVQgFAWgeAdQgpAqgqAiQhFA5hsBEQhcA6hAAfQhZAqhRANQgrAHgzAAIgiAAg");
	var mask_graphics_7 = new cjs.Graphics().p("ACdQWQg6gDhFgTQgwgNhKgbQiag4hng5QiFhLhVhgQgegjgwhBQhKhrgihKQgPghgchKQgSgzgGgfQgFgdgEg7QgCgYgLg1QgKgzgDgaQgGg6AKhAQAFgdALgrQAPg+AWhGQAehgAmhZQAjhVAjgxQAQgZAyg7IAegjQASgUARgLQAVgNAWgEQAZgEAUAJQAcAMALAfQAKAfgOAaQgIANgPANIgbAWQg6AugtBSQgcAygpBnQgjBYgLAxIgKAzQgGAfgGATIgJAdQgGARgCANQgEAYAHA1QARBwAOBQQALA4AHAaQATBGAnBGQAXApA9BWQA1BLAeAeQApArA6AlQAuAeBDAhQBXArBhAlQBBAZAvAMQA/AQA3gBQA3AABDgRQApgKBOgcIBlgjQBMgbAigUIAtgfQAbgTAUgIQAbgMAaABQAeABATARQARAOAEAXQAEAYgLATQgKAUgkAWQgxAggxAYQhPAoh5AqQhmAlhGAPQhOAShEAAIgfgBg");
	var mask_graphics_8 = new cjs.Graphics().p("AC+QQQhiAAhPgXQg3gQg/giQgtgXhCgrQiJhYhYhPQhyhmg9hxQgWgogghLQgxh4gRhQQgHgkgLhOQgGg2ABgfQABgdAKg6QACgYACg2QABg0AEgbQAGg5AYg9QALgcAVgnQAcg4AlhBQAyhWA5hOQA1hLAtgpQAVgUA+gvIAlgcQAWgPATgHQAXgIAXABQAZACASANQAYARAEAhQADAhgUAWQgKALgSAJIgfAPQhDAhg+BFQgmArg/BbQg2BPgWAtIgUAvQgNAegJARIgQAaQgKAPgEAMQgKAWgEA2QgJBygEBRQgCA4ABAbQADBJAXBNQAOAtAoBhQAkBVAVAjQAfAzAxAyQAmAnA6AvQBLA+BWA5QA7AnAsAWQA5AdA1AMQA2AMBGgCQApgBBTgJIBqgNQBQgJAmgMIAygUQAfgMAVgFQAdgFAaAGQAdAIAOAVQAOARgCAYQgBAYgPAQQgOASgoANQg3AUg1ANQhWAWh/AOQhqANhIAAIgBAAg");
	var mask_graphics_9 = new cjs.Graphics().p("ADxP/QhsgLhGgQQhfgWhHgoQgzgcg2guQgnghg3g4Qhyh1hEhgQhZh9gjh7QgNgtgOhPQgViBABhQQABgkAHhPQAFg2AJgeQAHgdAWg2QAIgYAOg0QANgyAJgaQATg2Alg2QAQgZAdgiQAogwAyg3QBFhJBIhAQBFg9A0geQAagPBGggIAqgTQAYgKAVgCQAXgDAWAGQAYAHAPAQQAUAXgEAhQgEAggYASQgNAIgTAFIgiAIQhIARhLA2QgvAhhRBMQhGBAgfAoIgeApQgTAagNAOIgWAXQgMAMgIALQgOAUgPAzQgjBtgVBOQgPA4gFAaQgNBIAGBPQADAvARBnQARBbANAnQATA5AkA7QAdAuAuA7QA8BNBHBLQAxAzAmAfQAyApAxAYQAxAYBEANQApAIBTAJIBqAMQBQAIAngDIA2gJQAhgFAVABQAeABAXAMQAbANAKAYQAJAUgHAXQgGAXgSANQgSAOgqAEQg6AHg2ABIgZAAQhRAAhugMg");
	var mask_graphics_10 = new cjs.Graphics().p("AG9QjQg7gGg1gLQhXgSh5gpQhmgjhAgfQhYgrg9g2Qgsgngqg5QgfgpgphCQhWiMgthtQg7iNgHiAQgCguADhQQAIiCAThPQAJgjAYhLQARg0APgbQAOgbAhgwQANgVAZgwQAYguAOgXQAfgxAwgsQAWgUAjgbQAygnA9gqQBSg4BVguQBQgtA6gSQAcgJBMgQIAtgIQAbgEAUACQAYACAUALQAWAMAKATQAPAbgLAfQgLAfgcAMQgOAFgUABIgjAAQhKAAhWAkQg1AWhgA4QhSAvgmAgIgnAiQgYAVgQALIgaARQgPAKgJAIQgSAQgbAvQg6BjgmBHQgaAzgLAYQgdBEgMBPQgHAugGBpQgEBbAEAqQAGA7AWBCQASAzAgBEQApBYA2BYQAkA9AeAnQAnAzArAiQAsAiA+AcQAnARBOAbIBlAjQBMAbAnAFIA3ADQAhACAVAGQAcAHAUARQAXATAFAaQAEAVgMAVQgLAVgUAIQgOAHgXAAIgZgCg");
	var mask_graphics_11 = new cjs.Graphics().p("AB+QMQg3gSgxgXQhQgkhthEQhdg4g4gtQhNg9gvhCQgigwgdhBQgVgugZhLQg1ibgUh0QgaiWAWh+QAHgtAWhOQAkh9AkhKQAQggAphDQAcgvAUgYQAUgXArgnQARgRAjgqQAhgoAUgTQAogpA5ghQAZgOApgSQA5gbBEgcQBdgkBdgbQBZgaA8gEQAdgCBNABIAvABQAaACAUAHQAXAHARAPQASARAGAVQAJAdgSAcQgRAcgeAFQgPACgTgEIgigHQhJgQhcAQQg4AKhqAhQhbAcgtAWIgtAZQgcAPgRAHIgdALQgRAGgLAGQgWAMgkAnQhOBVg1A9QglArgQAWQgrA7gdBKQgSAsgdBlQgYBZgFApQgHA7AHBFQAGA2AQBJQAVBfAhBiQAWBDAUAtQAbA6AjAqQAjAsA3ApQAiAZBGAsIBbA4QBEArAlANIA0AQQAgAJATAKQAaAOAQAVQASAYgBAZQgBAWgQASQgPASgWADIgMACQgUAAgegLg");
	var mask_graphics_12 = new cjs.Graphics().p("AiOPqQgWAAgkgXQgygegrghQhHg1hbhaQhOhMgtg4Qg9hMgghMQgXg1gNhGQgKgygJhOQgRijAGh1QAIiYAxh3QASgqAmhIQA/hyA0g/QAWgcA3g5QAlgnAagTQAXgSAzgdQAVgNArghQApgfAXgOQAxgfA/gUQAcgJAqgIQA+gOBJgMQBjgPBhgFQBcgFA7AJQAdAEBMASIAtAMQAZAHARALQAVAMANATQAPAUABAWQACAegXAYQgYAXgegCQgPgBgSgIIgfgPQhEgfhdgFQg5gDhvAJQheAHgxAMIgyAOQgfAJgTADIgdAEQgSACgMAEQgYAGgsAfQhfBBhBAvQgtAjgUARQg3AxguBCQgaAmgzBdQgrBRgOAnQgVA4gHBFQgHA2AABKQgBBhAKBnQAHBHAKAwQANA/AZAxQAYAxAtA1QAcAgA7A6IBMBLQA5A5AhAVIAwAbQAdAQAQAOQAXATALAYQAMAbgHAZQgFAVgUAOQgRANgVAAIgDAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AmvOoQgWgGgegdQgqgpgigqQg6hDhFhsQg7hbgfhBQgrhYgPhQQgKg6AChHQACgzAJhOQATihAghyQApiTBKhoQAbgmA1g9QBWhhBBgzQAcgWBBgsQAugeAdgMQAbgNA4gQQAXgJAygWQAugWAagIQA2gUBBgFQAdgDAtACQA/AABKAFQBjAHBgAQQBbAPA4AWQAcAKBFAjIApAVQAXAOAPAOQARAQAJAVQAKAXgEAWQgFAegcASQgcARgdgIQgOgFgQgLIgbgWQg7guhagYQg3gQhugQQhegOgyABIgzACQggACgUgBIgegDQgSgCgNABQgYACgxAUQhrAqhKAgQg0AYgXAMQhBAjg7A2QgiAghGBPQg8BGgWAjQggAygXBCQgTAzgQBJQgWBfgOBlQgJBGgBAxQAABBANA1QANA2AgA9QAUAlAsBGIA6BaQAsBEAbAcIAoAlQAZAWANARQASAYAFAaQAGAdgMAWQgKAUgWAJQgNAGgNAAQgJAAgIgCg");
	var mask_graphics_14 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_15 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_16 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_17 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_18 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_19 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_20 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_21 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_22 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_23 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_24 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_25 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_26 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_27 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_28 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_29 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_30 = new cjs.Graphics().p("AqjNXQgUgKgXgjQgggxgYgxQgphOgsh5QglhlgRhGQgWhgAEhRQACg7AShEQANgxAahKQA2iaA5hoQBJiGBfhWQAigfBBgwQBqhLBKgjQAhgQBJgcQAzgTAfgGQAdgGA7gEQAYgDA0gLQAzgKAbgDQA5gHBBAJQAdAEArALQA+APBHAVQBfAdBaAlQBVAiAyAiQAZAQA8AxIAjAeQAUASALARQANAUAEAXQAFAYgJAVQgLAcgfALQgfALgbgPQgNgHgNgPIgWgbQgvg6hSgsQgygbhogoQhYgigygLIgygJQgggFgSgGIgegJQgRgGgMgCQgYgEg1AJQhyARhOAPQg4AMgaAHQhGAUhGAoQgoAXhWA+QhKA2gdAeQgrApglA7QgdAuggBEQgrBXgjBhQgZBCgLAvQgPA/ABA3QAAA3ASBDQALApAcBOIAlBkQAbBMAVAiIAfAsQATAbAJAUQAMAbAAAaQgBAegRATQgOARgXAEIgOABQgPAAgOgHg");
	var mask_graphics_31 = new cjs.Graphics().p("AmvOoQgWgGgegdQgqgpgigqQg6hDhFhsQg7hbgfhBQgrhYgPhQQgKg6AChHQACgzAJhOQATihAghyQApiTBKhoQAbgmA1g9QBWhhBBgzQAcgWBBgsQAugeAdgMQAbgNA4gQQAXgJAygWQAugWAagIQA2gUBBgFQAdgDAtACQA/AABKAFQBjAHBgAQQBbAPA4AWQAcAKBFAjIApAVQAXAOAPAOQARAQAJAVQAKAXgEAWQgFAegcASQgcARgdgIQgOgFgQgLIgbgWQg7guhagYQg3gQhugQQhegOgyABIgzACQggACgUgBIgegDQgSgCgNABQgYACgxAUQhrAqhKAgQg0AYgXAMQhBAjg7A2QgiAghGBPQg8BGgWAjQggAygXBCQgTAzgQBJQgWBfgOBlQgJBGgBAxQAABBANA1QANA2AgA9QAUAlAsBGIA6BaQAsBEAbAcIAoAlQAZAWANARQASAYAFAaQAGAdgMAWQgKAUgWAJQgNAGgNAAQgJAAgIgCg");
	var mask_graphics_32 = new cjs.Graphics().p("AiOPqQgWAAgkgXQgygegrghQhHg1hbhaQhOhMgtg4Qg9hMgghMQgXg1gNhGQgKgygJhOQgRijAGh1QAIiYAxh3QASgqAmhIQA/hyA0g/QAWgcA3g5QAlgnAagTQAXgSAzgdQAVgNArghQApgfAXgOQAxgfA/gUQAcgJAqgIQA+gOBJgMQBjgPBhgFQBcgFA7AJQAdAEBMASIAtAMQAZAHARALQAVAMANATQAPAUABAWQACAegXAYQgYAXgegCQgPgBgSgIIgfgPQhEgfhdgFQg5gDhvAJQheAHgxAMIgyAOQgfAJgTADIgdAEQgSACgMAEQgYAGgsAfQhfBBhBAvQgtAjgUARQg3AxguBCQgaAmgzBdQgrBRgOAnQgVA4gHBFQgHA2AABKQgBBhAKBnQAHBHAKAwQANA/AZAxQAYAxAtA1QAcAgA7A6IBMBLQA5A5AhAVIAwAbQAdAQAQAOQAXATALAYQAMAbgHAZQgFAVgUAOQgRANgVAAIgDAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AB+QMQg3gSgxgXQhQgkhthEQhdg4g4gtQhNg9gvhCQgigwgdhBQgVgugZhLQg1ibgUh0QgaiWAWh+QAHgtAWhOQAkh9AkhKQAQggAphDQAcgvAUgYQAUgXArgnQARgRAjgqQAhgoAUgTQAogpA5ghQAZgOApgSQA5gbBEgcQBdgkBdgbQBZgaA8gEQAdgCBNABIAvABQAaACAUAHQAXAHARAPQASARAGAVQAJAdgSAcQgRAcgeAFQgPACgTgEIgigHQhJgQhcAQQg4AKhqAhQhbAcgtAWIgtAZQgcAPgRAHIgdALQgRAGgLAGQgWAMgkAnQhOBVg1A9QglArgQAWQgrA7gdBKQgSAsgdBlQgYBZgFApQgHA7AHBFQAGA2AQBJQAVBfAhBiQAWBDAUAtQAbA6AjAqQAjAsA3ApQAiAZBGAsIBbA4QBEArAlANIA0AQQAgAJATAKQAaAOAQAVQASAYgBAZQgBAWgQASQgPASgWADIgMACQgUAAgegLg");
	var mask_graphics_34 = new cjs.Graphics().p("AG9QjQg7gGg1gLQhXgSh5gpQhmgjhAgfQhYgrg9g2Qgsgngqg5QgfgpgphCQhWiMgthtQg7iNgHiAQgCguADhQQAIiCAThPQAJgjAYhLQARg0APgbQAOgbAhgwQANgVAZgwQAYguAOgXQAfgxAwgsQAWgUAjgbQAygnA9gqQBSg4BVguQBQgtA6gSQAcgJBMgQIAtgIQAbgEAUACQAYACAUALQAWAMAKATQAPAbgLAfQgLAfgcAMQgOAFgUABIgjAAQhKAAhWAkQg1AWhgA4QhSAvgmAgIgnAiQgYAVgQALIgaARQgPAKgJAIQgSAQgbAvQg6BjgmBHQgaAzgLAYQgdBEgMBPQgHAugGBpQgEBbAEAqQAGA7AWBCQASAzAgBEQApBYA2BYQAkA9AeAnQAnAzArAiQAsAiA+AcQAnARBOAbIBlAjQBMAbAnAFIA3ADQAhACAVAGQAcAHAUARQAXATAFAaQAEAVgMAVQgLAVgUAIQgOAHgXAAIgZgCg");
	var mask_graphics_35 = new cjs.Graphics().p("ADxP/QhsgLhGgQQhfgWhHgoQgzgcg2guQgnghg3g4Qhyh1hEhgQhZh9gjh7QgNgtgOhPQgViBABhQQABgkAHhPQAFg2AJgeQAHgdAWg2QAIgYAOg0QANgyAJgaQATg2Alg2QAQgZAdgiQAogwAyg3QBFhJBIhAQBFg9A0geQAagPBGggIAqgTQAYgKAVgCQAXgDAWAGQAYAHAPAQQAUAXgEAhQgEAggYASQgNAIgTAFIgiAIQhIARhLA2QgvAhhRBMQhGBAgfAoIgeApQgTAagNAOIgWAXQgMAMgIALQgOAUgPAzQgjBtgVBOQgPA4gFAaQgNBIAGBPQADAvARBnQARBbANAnQATA5AkA7QAdAuAuA7QA8BNBHBLQAxAzAmAfQAyApAxAYQAxAYBEANQApAIBTAJIBqAMQBQAIAngDIA2gJQAhgFAVABQAeABAXAMQAbANAKAYQAJAUgHAXQgGAXgSANQgSAOgqAEQg6AHg2ABIgZAAQhRAAhugMg");
	var mask_graphics_36 = new cjs.Graphics().p("AC+QQQhiAAhPgXQg3gQg/giQgtgXhCgrQiJhYhYhPQhyhmg9hxQgWgogghLQgxh4gRhQQgHgkgLhOQgGg2ABgfQABgdAKg6QACgYACg2QABg0AEgbQAGg5AYg9QALgcAVgnQAcg4AlhBQAyhWA5hOQA1hLAtgpQAVgUA+gvIAlgcQAWgPATgHQAXgIAXABQAZACASANQAYARAEAhQADAhgUAWQgKALgSAJIgfAPQhDAhg+BFQgmArg/BbQg2BPgWAtIgUAvQgNAegJARIgQAaQgKAPgEAMQgKAWgEA2QgJBygEBRQgCA4ABAbQADBJAXBNQAOAtAoBhQAkBVAVAjQAfAzAxAyQAmAnA6AvQBLA+BWA5QA7AnAsAWQA5AdA1AMQA2AMBGgCQApgBBTgJIBqgNQBQgJAmgMIAygUQAfgMAVgFQAdgFAaAGQAdAIAOAVQAOARgCAYQgBAYgPAQQgOASgoANQg3AUg1ANQhWAWh/AOQhqANhIAAIgBAAg");
	var mask_graphics_37 = new cjs.Graphics().p("ACdQWQg6gDhFgTQgwgNhKgbQiag4hng5QiFhLhVhgQgegjgwhBQhKhrgihKQgPghgchKQgSgzgGgfQgFgdgEg7QgCgYgLg1QgKgzgDgaQgGg6AKhAQAFgdALgrQAPg+AWhGQAehgAmhZQAjhVAjgxQAQgZAyg7IAegjQASgUARgLQAVgNAWgEQAZgEAUAJQAcAMALAfQAKAfgOAaQgIANgPANIgbAWQg6AugtBSQgcAygpBnQgjBYgLAxIgKAzQgGAfgGATIgJAdQgGARgCANQgEAYAHA1QARBwAOBQQALA4AHAaQATBGAnBGQAXApA9BWQA1BLAeAeQApArA6AlQAuAeBDAhQBXArBhAlQBBAZAvAMQA/AQA3gBQA3AABDgRQApgKBOgcIBlgjQBMgbAigUIAtgfQAbgTAUgIQAbgMAaABQAeABATARQARAOAEAXQAEAYgLATQgKAUgkAWQgxAggxAYQhPAoh5AqQhmAlhGAPQhOAShEAAIgfgBg");
	var mask_graphics_38 = new cjs.Graphics().p("AC3QRQgzgChOgKQihgVhxghQiTgrhohLQgmgbg8g2QhghXgyhBQgWgdgrhCQgdgugNgdQgMgbgQg4QgIgXgWgyQgVgvgIgaQgTg3gFhBQgCgdACgtQABg+AGhKQAIhjARhfQAQhbAXg4QAKgcAjhFIAWgpQAOgXAOgOQARgRAVgJQAXgJAWAEQAeAFARAcQARAcgIAdQgFAOgMAQIgWAbQguA6gaBaQgQA3gRBtQgPBeAAAzIACAyQABAggBATIgDAfQgCASABAMQABAZATAyQApBrAgBLQAXA0AMAXQAiBBA2A8QAfAiBPBHQBEA9AkAWQAxAhBBAYQA0ATBIARQBfAXBlAPQBGAJAxACQBBABA1gMQA2gNA+gfQAlgUBHgrIBag5QBFgrAcgbIAlgoQAWgZARgMQAYgSAagFQAegGAWANQATAKAJAWQAKAWgHAVQgFAWgeAdQgpAqgqAiQhFA5hsBEQhcA6hAAfQhZAqhRANQgrAHgzAAIgiAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AgzQIQiYgKh2gyQgrgShHgnQhxhAg/g1QgcgXg4g3QgngmgSgZQgSgYgcgzQgNgVghgsQgegpgPgXQgegygTg/QgIgcgJgrQgMg+gLhJQgOhjgEhgQgFhcAKg8QAEgdAThLIAMgtQAIgZALgRQANgVASgNQAVgOAWgBQAegBAXAXQAXAYgCAeQgBAPgIASIgQAfQggBDgFBdQgEA5AHBuQAHBfALAxIANAxQAJAfACATIAEAfQACASAEAMQAGAYAeAsQBABgAvBBQAiAuARAUQAwA4BCAuQAmAbBcA0QBRAsAnAOQA3AVBFAJQA2AHBKABQBhABBngIQBHgGAwgKQA/gNAxgYQAzgXA1gtQAggbA7g6IBMhMQA5g5AWggIAbgwQAQgcAOgRQATgWAZgLQAbgMAZAIQAVAFANAUQAOATgBAWQgBAXgWAjQgfAygiAqQg2BHhbBaQhMBNg5AsQhNA9hLAeQg2AXhGAMQgyAKhOAHQhuALhZAAQgrAAgmgCg");
	var mask_graphics_40 = new cjs.Graphics().p("AiAQDQgtgJhOgWQh8gmhJglQghgQhDgpQgugdgYgVQgWgTgngsQgRgRgpgjQgogigTgUQgogpggg5QgPgZgSgpQgag6gahFQgkhdgZhdQgZhZgEg9QgCgcAChNQAAgiACgNQACgaAHgTQAHgXAQgRQAQgSAWgGQAdgIAcARQAbASAFAeQACAPgEATIgIAiQgRBJAQBbQAJA4AgBrQAbBaAWAuIAXAuQAPAcAHASIALAdQAGARAGALQALAVAoAlQBTBPA8A2QAsAlAVAQQA7AsBKAeQArASBlAeQBZAZApAFQA7AJBEgHQA2gFBJgQQBggUBigfQBEgVAsgUQA7gbArgiQArgiArg3QAZgiAshGIA6haQArhEAOglIAQg0QAKggAKgTQAOgaAVgQQAYgRAZABQAWABASAQQASAQADAVQAFAXgPAnQgTA4gXAxQglBQhFBsQg5BcguA4Qg+BMhCAvQgwAhhBAcQgvAUhLAZQibAzh1ATQhOANhGAAQhDAAg9gLg");
	var mask_graphics_41 = new cjs.Graphics().p("AglQIQiCgJhPgUQgjgJhLgZQgzgSgcgPQgagOgwgiQgVgNgvgZQgugYgXgPQgxgfgsgxQgUgWgagkQgmgygpg9Qg3hTguhWQgshRgRg6QgJgcgPhMIgIguQgDgaACgUQACgYALgUQANgVATgKQAbgOAfALQAfALALAbQAFAOABAUIgBAjQAABKAjBWQAWA2A2BgQAvBTAfAnIAhAoQAVAYALAQIARAaQAJAPAJAKQAQASAuAbQBjA7BGAnQAzAbAYAKQBDAeBPANQAuAIBpAHQBbAFAqgEQA7gFBCgWQA0gRBEgfQBYgpBZg0QA+gjAngeQAzgnAigrQAjgrAdg/QARgmAchOIAkhlQAbhMAGgnIAEg2QACghAGgVQAIgcARgTQAUgXAZgEQAVgEAVAMQAVALAIAUQAJAUgFAqQgGA6gMA1QgTBXgrB4QgkBmgfBBQgsBYg3A8QgnAsg5ApQgqAehDApQiMBUhuAsQiNA5iAAGIggAAQgnAAg3gDg");
	var mask_graphics_42 = new cjs.Graphics().p("AghQJQgkAAhPgIQg2gGgegJQgdgIg2gWQgXgJg0gOQgygNgZgKQg3gTg2gmQgYgRghgdQgxgpg2gyQhIhFg/hKQg9hFgdg1QgPgZgfhHIgSgrQgKgZgCgUQgDgYAHgVQAHgYAQgPQAXgUAhAEQAhAFARAYQAIANAFATIAHAiQAQBJA2BMQAgAvBLBTQA/BGAoAgIApAeQAaATAOAOIAWAVQAMANALAHQATAPAzAQQBuAkBNAWQA4APAaAFQBHAOBQgEQAugDBogQQBbgQAogNQA4gSA8gkQAugcA8gtQBNg7BMhHQAzgwAggmQAqgxAXgxQAZgyAOhEQAJgpAKhSIAMhqQAKhQgDgnIgIg2QgFggABgWQABgdANgYQANgaAYgKQAUgJAXAHQAXAHAMASQAOASAEAqQAHA6AAA2QABBYgPB/QgNBsgQBGQgXBfgpBHQgcAzgvA1QgiAng4A2Qh2BxhhBDQh+BXh7AiQgtAMhQAOQh0AShNAAIgQgBg");
	var mask_graphics_43 = new cjs.Graphics().p("AgFQIQgegBg5gKQgZgDg2gCQg0gDgagDQg6gHg9gZQgbgLgngVQg4gdhAgmQhWgzhNg5QhLg3gogtQgUgVgvg+IgbgmQgOgWgHgTQgIgXABgXQACgZANgRQASgZAhgDQAggDAXAUQAKALAJARIAPAgQAgBDBFA/QAqAnBbA/QBOA3AtAWIAvAVQAdANARAKIAaAQQAPAJAMAFQAWAKA2AFQByAKBRAFQA4ACAaAAQBKgDBNgWQAtgNBignQBVgjAjgVQA0geAygwQAngmAwg6QA+hKA6hWQAog6AXgsQAeg5AMg1QANg2gChGQAAgqgJhRIgLhqQgIhRgMglIgUgzQgMgfgEgVQgFgdAHgaQAIgdAVgOQASgNAXACQAYABAQAPQASAOANAoQATA4AMA1QAVBWANB/QAMBrgBBIQgBBigYBOQgQA4gjA+QgYAtgrBCQhaCIhQBXQhnBwhxA9QgpAWhLAeQh5AwhQAQQgjAHhPAKQgqAFgcAAIgOgBg");
	var mask_graphics_44 = new cjs.Graphics().p("AiSQDQgdgFgrgMQg9gQhGgWQhfgfhZgnQhVgkgxgjQgYgRg7gyIgjgfQgTgSgKgSQgOgUgDgXQgEgYAJgUQAMgcAfgLQAggKAaAPQANAIAMAPIAWAcQAtA6BRAuQAyAdBnAqQBYAkAxALIAyAKQAgAGASAGIAdAKQARAGANADQAYAEA1gHQBxgPBPgOQA5gKAZgGQBHgTBGgmQApgXBXg8QBLg0AfgdQArgpAmg6QAegtAihDQAshXAmhgQAahCAMgvQARg/AAg1QABg4gRhDQgKgpgahPIgjhlQgahMgTgiIgfguQgSgbgJgUQgLgbABgaQABgeARgTQAPgRAXgDQAXgEAUALQAUAKAWAkQAfAyAXAxQAnBPApB6QAkBmAPBGQAUBggGBRQgDA6gUBEQgNAxgcBKQg6CZg7BmQhLCFhhBUQgjAehCAvQhsBJhLAhQghAPhKAaQgzASgfAGQgdAFg7ADQgYACg2AKQgyAJgaADQgUACgVAAQgnAAgrgHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:104.6558,y:103.388}).wait(1).to({graphics:mask_graphics_1,x:103.9025,y:103.2504}).wait(1).to({graphics:mask_graphics_2,x:103.2344,y:103.3695}).wait(1).to({graphics:mask_graphics_3,x:101.2014,y:103.5412}).wait(1).to({graphics:mask_graphics_4,x:99.2863,y:103.7525}).wait(1).to({graphics:mask_graphics_5,x:95.7329,y:103.4027}).wait(1).to({graphics:mask_graphics_6,x:89.6096,y:104.1479}).wait(1).to({graphics:mask_graphics_7,x:81.0024,y:104.6872}).wait(1).to({graphics:mask_graphics_8,x:71.5673,y:103.9811}).wait(1).to({graphics:mask_graphics_9,x:60.858,y:103.427}).wait(1).to({graphics:mask_graphics_10,x:49.662,y:101.3289}).wait(1).to({graphics:mask_graphics_11,x:58.1824,y:99.4696}).wait(1).to({graphics:mask_graphics_12,x:69.1,y:95.9765}).wait(1).to({graphics:mask_graphics_13,x:78.1319,y:90.0565}).wait(1).to({graphics:mask_graphics_14,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_15,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_16,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_17,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_18,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_19,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_20,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_21,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_22,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_23,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_24,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_25,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_26,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_27,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_28,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_29,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_30,x:85.9009,y:81.4678}).wait(1).to({graphics:mask_graphics_31,x:78.1319,y:90.0565}).wait(1).to({graphics:mask_graphics_32,x:69.1,y:95.9765}).wait(1).to({graphics:mask_graphics_33,x:58.1824,y:99.4696}).wait(1).to({graphics:mask_graphics_34,x:49.662,y:101.3289}).wait(1).to({graphics:mask_graphics_35,x:60.858,y:103.427}).wait(1).to({graphics:mask_graphics_36,x:71.5673,y:103.9811}).wait(1).to({graphics:mask_graphics_37,x:81.0024,y:104.6872}).wait(1).to({graphics:mask_graphics_38,x:89.6096,y:104.1479}).wait(1).to({graphics:mask_graphics_39,x:95.7329,y:103.4027}).wait(1).to({graphics:mask_graphics_40,x:99.2863,y:103.7525}).wait(1).to({graphics:mask_graphics_41,x:101.2014,y:103.5412}).wait(1).to({graphics:mask_graphics_42,x:103.2344,y:103.3695}).wait(1).to({graphics:mask_graphics_43,x:103.9025,y:103.2504}).wait(1).to({graphics:mask_graphics_44,x:104.6564,y:103.387}).wait(1));

	// line_obj_
	this.line = new lib.item3_line();
	this.line.name = "line";
	this.line.parent = this;
	this.line.setTransform(89,82.5,1,1,0,0,0,89,82.5);
	this.line.depth = 0;
	this.line.isAttachedToCamera = 0
	this.line.isAttachedToMask = 0
	this.line.layerDepth = 0
	this.line.layerIndex = 1
	this.line.maskLayerName = 0

	var maskedShapeInstanceList = [this.line];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.line).wait(45));

	// Layer_1_obj_
	this.Layer_1 = new lib.item3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(82.5,100,1,1,0,0,0,82.5,100);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 2
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.8,184.5,174.8);


(lib.Scene_1_item3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item3
	this.instance = new lib.item3();
	this.instance.parent = this;
	this.instance.setTransform(856,189,1,1,0,0,0,96,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item3, null, null);


// stage content:
(lib._2019janwoman = function(mode,startPosition,loop) {
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

	// item3_obj_
	this.item3 = new lib.Scene_1_item3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(865.2,208.4,1,1,0,0,0,865.2,208.4);
	this.item3.depth = 0;
	this.item3.isAttachedToCamera = 0
	this.item3.isAttachedToMask = 0
	this.item3.layerDepth = 0
	this.item3.layerIndex = 0
	this.item3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item3).wait(1));

	// item2_obj_
	this.item2 = new lib.Scene_1_item2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(1015,642.5,1,1,0,0,0,1015,642.5);
	this.item2.depth = 0;
	this.item2.isAttachedToCamera = 0
	this.item2.isAttachedToMask = 0
	this.item2.layerDepth = 0
	this.item2.layerIndex = 1
	this.item2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item2).wait(1));

	// item1_obj_
	this.item1 = new lib.Scene_1_item1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(1266,162.5,1,1,0,0,0,1266,162.5);
	this.item1.depth = 0;
	this.item1.isAttachedToCamera = 0
	this.item1.isAttachedToMask = 0
	this.item1.layerDepth = 0
	this.item1.layerIndex = 2
	this.item1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item1).wait(1));

	// scene_obj_
	this.scene = new lib.Scene_1_scene();
	this.scene.name = "scene";
	this.scene.parent = this;
	this.scene.setTransform(799.5,396,1,1,0,0,0,799.5,396);
	this.scene.depth = 0;
	this.scene.isAttachedToCamera = 0
	this.scene.isAttachedToMask = 0
	this.scene.layerDepth = 0
	this.scene.layerIndex = 3
	this.scene.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.scene).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(795,372,809,423);
// library properties:
lib.properties = {
	id: '09679AE58A044DDA80372C1FF1D90976',
	width: 1600,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/2019_jan_woman_atlas_.png", id:"2019_jan_woman_atlas_"}
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
an.compositions['09679AE58A044DDA80372C1FF1D90976'] = {
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