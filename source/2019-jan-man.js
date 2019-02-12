(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2019_jan_man_atlas_", frames: [[486,865,228,232],[716,1003,205,67],[0,865,484,484],[716,865,360,136],[486,1099,50,57],[602,1099,15,15],[1078,865,189,230],[716,1072,125,36],[538,1099,29,29],[0,0,1940,863],[569,1099,31,11]]}
];


// symbols:



(lib.blueball = function() {
	this.initialize(ss["2019_jan_man_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blueballshadow = function() {
	this.initialize(ss["2019_jan_man_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.line = function() {
	this.initialize(ss["2019_jan_man_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.TEXT拷貝4 = function() {
	this.initialize(ss["2019_jan_man_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.三角形 = function() {
	this.initialize(ss["2019_jan_man_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.小黃點 = function() {
	this.initialize(ss["2019_jan_man_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.彎線 = function() {
	this.initialize(ss["2019_jan_man_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.矩形3 = function() {
	this.initialize(ss["2019_jan_man_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.紅圓 = function() {
	this.initialize(ss["2019_jan_man_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.色階1 = function() {
	this.initialize(ss["2019_jan_man_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.黑洞 = function() {
	this.initialize(ss["2019_jan_man_atlas_"]);
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


(lib.Symbol_13_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.紅圓();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_13_Layer_1, null, null);


(lib.Symbol_4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.矩形3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_4_Layer_1, null, null);


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.三角形();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1, null, null);


(lib.Symbol_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blueballshadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_2_Layer_1, null, null);


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blueball();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1, null, null);


(lib.scene_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.色階1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene_Layer_1, null, null);


(lib.Scene_1_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.TEXT拷貝4();
	this.instance.parent = this;
	this.instance.setTransform(1023,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_text, null, null);


(lib.item2_path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// path
	this.instance = new lib.彎線();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();


(lib.item2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.小黃點();
	this.instance.parent = this;
	this.instance.setTransform(139,26);

	this.instance_1 = new lib.黑洞();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42,224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(45));

}).prototype = p = new cjs.MovieClip();


(lib.item1_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.line();
	this.instance.parent = this;
	this.instance.setTransform(198,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_13_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(14.5,14.5,1,1,0,0,0,14.5,14.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,29,29), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(62.5,18,1,1,0,0,0,62.5,18);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,125,36), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(25,28.5,1,1,0,0,0,25,28.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,50,57), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(102.5,33.5,1,1,0,0,0,102.5,33.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,205,67), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(114,116,1,1,0,0,0,114,116);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,228,232), null);


(lib.Symbol_5_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(14.5,14.5,0.5931,0.5931,0,0,0,14.4,14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:14.5,regY:14.5,scaleX:0.6222,scaleY:0.6222},0).wait(1).to({scaleX:0.6512,scaleY:0.6512,x:14.55,y:14.55},0).wait(1).to({scaleX:0.6803,scaleY:0.6803,x:14.5,y:14.5},0).wait(1).to({scaleX:0.7094,scaleY:0.7094,x:14.55,y:14.55},0).wait(1).to({scaleX:0.7384,scaleY:0.7384},0).wait(1).to({scaleX:0.7675,scaleY:0.7675},0).wait(1).to({scaleX:0.7966,scaleY:0.7966},0).wait(1).to({scaleX:0.8256,scaleY:0.8256},0).wait(1).to({scaleX:0.8547,scaleY:0.8547},0).wait(1).to({scaleX:0.8837,scaleY:0.8837},0).wait(1).to({scaleX:0.9128,scaleY:0.9128},0).wait(1).to({scaleX:0.9419,scaleY:0.9419},0).wait(1).to({scaleX:0.9709,scaleY:0.9709,x:14.6,y:14.6},0).wait(1).to({scaleX:1,scaleY:1,x:14.55,y:14.55},0).wait(16).to({scaleX:0.9729,scaleY:0.9729},0).wait(1).to({scaleX:0.9457,scaleY:0.9457},0).wait(1).to({scaleX:0.9186,scaleY:0.9186},0).wait(1).to({scaleX:0.8915,scaleY:0.8915,x:14.6,y:14.6},0).wait(1).to({scaleX:0.8644,scaleY:0.8644,x:14.55,y:14.55},0).wait(1).to({scaleX:0.8372,scaleY:0.8372},0).wait(1).to({scaleX:0.8101,scaleY:0.8101},0).wait(1).to({scaleX:0.783,scaleY:0.783},0).wait(1).to({scaleX:0.7559,scaleY:0.7559},0).wait(1).to({scaleX:0.7287,scaleY:0.7287,x:14.5,y:14.5},0).wait(1).to({scaleX:0.7016,scaleY:0.7016},0).wait(1).to({scaleX:0.6745,scaleY:0.6745,x:14.55,y:14.55},0).wait(1).to({scaleX:0.6474,scaleY:0.6474},0).wait(1).to({scaleX:0.6202,scaleY:0.6202},0).wait(1).to({scaleX:0.5931,scaleY:0.5931,x:14.5,y:14.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.scene_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(970,431.5,1,1,0,0,0,970,431.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene, new cjs.Rectangle(0,0,1940,863), null);


(lib.item3_triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// triangle
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(45,28.5,1,1,0,0,0,25,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.6521,y:28.05},0).wait(1).to({rotation:1.3043,y:27.55},0).wait(1).to({rotation:1.9564,y:27.1},0).wait(1).to({rotation:2.6085,x:44.95,y:26.6},0).wait(1).to({rotation:3.2606,x:45,y:26.1},0).wait(1).to({rotation:3.9128,y:25.65},0).wait(1).to({rotation:4.5649,x:44.95,y:25.2},0).wait(1).to({rotation:5.217,y:24.7},0).wait(1).to({rotation:5.8691,y:24.2},0).wait(1).to({rotation:6.5213,y:23.75},0).wait(1).to({rotation:7.1734,x:45,y:23.25},0).wait(1).to({rotation:7.8255,x:44.95,y:22.8},0).wait(1).to({rotation:8.4776,x:45,y:22.35},0).wait(1).to({rotation:9.1298,y:21.8},0).wait(1).to({rotation:9.7819,y:21.35},0).wait(1).to({rotation:10.434,y:20.9},0).wait(1).to({rotation:11.0861,x:44.95,y:20.35},0).wait(1).to({rotation:11.7383,x:45,y:19.95},0).wait(1).to({rotation:12.3904,x:44.95,y:19.45},0).wait(1).to({rotation:13.0425,y:18.95},0).wait(1).to({rotation:13.6946,x:45,y:18.45},0).wait(1).to({rotation:14.3468,x:44.95,y:18},0).wait(1).to({rotation:14.9989,y:17.55},0).wait(1).to({rotation:15.5316,x:45.45,y:17.1},0).wait(1).to({rotation:16.0643,x:45.85,y:16.65},0).wait(1).to({rotation:16.5971,x:46.35,y:16.2},0).wait(1).to({rotation:17.1298,x:46.8,y:15.8},0).wait(1).to({rotation:17.6625,x:47.25,y:15.35},0).wait(1).to({rotation:18.1952,x:47.7,y:14.9},0).wait(1).to({rotation:18.7279,x:48.2,y:14.5},0).wait(1).to({rotation:19.2606,x:48.65,y:14.05},0).wait(1).to({rotation:19.7934,x:49.1,y:13.6},0).wait(1).to({rotation:20.3261,x:49.55,y:13.2},0).wait(1).to({rotation:20.8588,x:50,y:12.75},0).wait(1).to({rotation:21.3915,x:50.5,y:12.3},0).wait(1).to({rotation:21.9242,x:50.95,y:11.9},0).wait(1).to({rotation:22.4569,x:51.35,y:11.45},0).wait(1).to({rotation:22.9897,x:51.8,y:11},0).wait(1).to({rotation:23.5224,x:52.3,y:10.6},0).wait(1).to({rotation:24.0551,x:52.8,y:10.1},0).wait(1).to({rotation:24.5878,x:53.25,y:9.7},0).wait(1).to({rotation:25.1205,x:53.7,y:9.25},0).wait(1).to({rotation:25.6532,x:54.15,y:8.8},0).wait(1).to({rotation:26.1859,x:54.6,y:8.4},0).wait(1).to({rotation:26.7187,x:55.1,y:7.95},0).wait(1).to({rotation:27.2514,x:55.5,y:7.55},0).wait(1).to({rotation:27.7841,x:55.95,y:7.1},0).wait(1).to({rotation:28.8375,x:55.45,y:6.65},0).wait(1).to({rotation:29.8909,x:54.9,y:6.2},0).wait(1).to({rotation:30.9443,x:54.4,y:5.8},0).wait(1).to({rotation:31.9976,x:53.85,y:5.35},0).wait(1).to({rotation:33.051,x:53.3,y:4.95},0).wait(1).to({rotation:34.1044,x:52.75,y:4.45},0).wait(1).to({rotation:35.1578,x:52.25,y:4.05},0).wait(1).to({rotation:36.2112,x:51.65,y:3.6},0).wait(1).to({rotation:37.2646,x:51.15,y:3.2},0).wait(1).to({rotation:38.3179,x:50.65,y:2.75},0).wait(1).to({rotation:39.3713,x:50.1,y:2.35},0).wait(1).to({rotation:40.4247,x:49.55,y:1.9},0).wait(1).to({rotation:41.4781,x:49,y:1.45},0).wait(1).to({rotation:42.5315,x:48.5,y:1},0).wait(1).to({rotation:43.5849,x:47.95,y:0.6},0).wait(1).to({rotation:44.6382,x:47.45,y:0.15},0).wait(1).to({rotation:45.6916,x:46.85,y:-0.3},0).wait(1).to({rotation:46.745,x:46.4,y:-0.7},0).wait(1).to({rotation:47.7984,x:45.85,y:-1.15},0).wait(1).to({rotation:48.8518,x:45.3,y:-1.55},0).wait(1).to({rotation:49.9052,x:44.75,y:-2.05},0).wait(1).to({rotation:50.9585,x:44.2,y:-2.5},0).wait(1).to({rotation:52.0119,x:43.7,y:-2.9},0).wait(1).to({rotation:53.0653,x:43.1,y:-3.3},0).wait(1).to({rotation:57.9864,x:43.85,y:-3.6},0).wait(1).to({rotation:62.9075,x:44.55,y:-3.85},0).wait(1).to({rotation:67.8286,x:45.2,y:-4.15},0).wait(1).to({rotation:72.7498,x:45.85,y:-4.4},0).wait(1).to({rotation:77.6709,x:46.55,y:-4.7},0).wait(1).to({rotation:82.592,x:47.2,y:-5},0).wait(1).to({rotation:87.5131,x:47.95,y:-5.25},0).wait(1).to({rotation:92.4342,x:48.65,y:-5.5},0).wait(1).to({rotation:97.3553,x:49.3,y:-5.8},0).wait(1).to({rotation:102.2764,x:50,y:-6.05},0).wait(1).to({rotation:107.1975,x:50.6,y:-6.4},0).wait(1).to({rotation:112.1187,x:51.35,y:-6.7},0).wait(1).to({rotation:117.0398,x:52,y:-6.95},0).wait(1).to({rotation:121.9609,x:52.65,y:-7.2},0).wait(1).to({rotation:126.882,x:53.35,y:-7.45},0).wait(1).to({rotation:131.8031,x:54.05,y:-7.75},0).wait(1).to({rotation:136.7242,x:54.7,y:-8},0).wait(1).to({rotation:141.6453,x:55.4,y:-8.3},0).wait(1).to({rotation:146.5664,x:56.1,y:-8.65},0).wait(1).to({rotation:151.4876,x:56.8,y:-8.9},0).wait(1).to({rotation:156.4087,x:57.5,y:-9.15},0).wait(1).to({rotation:161.3298,x:58.15,y:-9.45},0).wait(1).to({rotation:166.2509,x:58.85,y:-9.75},0).wait(1).to({rotation:171.172,x:59.55,y:-10},0).wait(1).to({rotation:160.6409,x:59.85,y:-9.1},0).wait(1).to({rotation:150.1098,x:60.25,y:-8.15},0).wait(1).to({rotation:139.5788,x:60.5,y:-7.2},0).wait(1).to({rotation:129.0477,x:60.9,y:-6.25},0).wait(1).to({rotation:118.5166,x:61.25,y:-5.3},0).wait(1).to({rotation:107.9855,x:61.65,y:-4.35},0).wait(1).to({rotation:97.4544,x:61.95,y:-3.45},0).wait(1).to({rotation:86.9234,x:62.3,y:-2.5},0).wait(1).to({rotation:76.3923,x:62.65,y:-1.6},0).wait(1).to({rotation:65.8612,x:63,y:-0.7},0).wait(1).to({rotation:55.3301,x:63.3,y:0.25},0).wait(1).to({rotation:44.7991,x:63.7,y:1.15},0).wait(1).to({rotation:34.268,x:64.05,y:2.15},0).wait(1).to({rotation:23.7369,x:64.45,y:3.05},0).wait(1).to({rotation:13.2058,x:64.75,y:4},0).wait(1).to({rotation:2.6747,x:65.05,y:4.9},0).wait(1).to({rotation:-7.8563,x:65.4,y:5.9},0).wait(1).to({rotation:-18.3874,x:65.75,y:6.75},0).wait(1).to({rotation:-28.9185,x:66.15,y:7.7},0).wait(1).to({rotation:-39.4496,x:66.45,y:8.55},0).wait(1).to({rotation:-49.9807,x:66.9,y:9.55},0).wait(1).to({rotation:-60.5117,x:67.15,y:10.5},0).wait(1).to({rotation:-71.0428,x:67.5,y:11.35},0).wait(1).to({rotation:-81.5739,x:67.85,y:12.3},0).wait(1).to({rotation:-76.0669,x:67.55,y:13.15},0).wait(1).to({rotation:-70.5599,x:67.2,y:14.05},0).wait(1).to({rotation:-65.0529,x:66.95,y:14.85},0).wait(1).to({rotation:-59.5459,x:66.55,y:15.7},0).wait(1).to({rotation:-54.039,x:66.3,y:16.55},0).wait(1).to({rotation:-48.532,x:65.95,y:17.35},0).wait(1).to({rotation:-43.025,x:65.7,y:18.3},0).wait(1).to({rotation:-37.518,x:65.35,y:19.1},0).wait(1).to({rotation:-32.011,x:65,y:19.95},0).wait(1).to({rotation:-26.504,x:64.65,y:20.8},0).wait(1).to({rotation:-20.997,x:64.35,y:21.65},0).wait(1).to({rotation:-15.49,x:64.05,y:22.45},0).wait(1).to({rotation:-9.9831,x:63.75,y:23.35},0).wait(1).to({rotation:-4.4761,x:63.35,y:24.25},0).wait(1).to({rotation:1.0309,x:63.1,y:25.1},0).wait(1).to({rotation:6.5379,x:62.8,y:25.95},0).wait(1).to({rotation:12.0449,x:62.45,y:26.75},0).wait(1).to({rotation:17.5519,x:62.15,y:27.65},0).wait(1).to({rotation:23.0589,x:61.85,y:28.5},0).wait(1).to({rotation:28.5659,x:61.5,y:29.35},0).wait(1).to({rotation:34.0728,x:61.2,y:30.2},0).wait(1).to({rotation:39.5798,x:60.85,y:31.05},0).wait(1).to({rotation:45.0868,x:60.55,y:31.85},0).wait(1).to({rotation:50.5938,x:60.25,y:32.75},0).wait(1).to({rotation:52.0396,x:59.4,y:32.2},0).wait(1).to({rotation:53.4855,x:58.55,y:31.6},0).wait(1).to({rotation:54.9313,x:57.6,y:30.95},0).wait(1).to({rotation:56.3772,x:56.8,y:30.4},0).wait(1).to({rotation:57.823,x:55.95,y:29.85},0).wait(1).to({rotation:59.2689,x:55.1,y:29.25},0).wait(1).to({rotation:60.7147,x:54.25,y:28.7},0).wait(1).to({rotation:62.1605,x:53.35,y:28.1},0).wait(1).to({rotation:63.6064,x:52.45,y:27.5},0).wait(1).to({rotation:65.0522,x:51.65,y:26.9},0).wait(1).to({rotation:66.4981,x:50.75,y:26.35},0).wait(1).to({rotation:67.9439,x:49.95,y:25.75},0).wait(1).to({rotation:69.3897,x:49.05,y:25.2},0).wait(1).to({rotation:70.8356,x:48.2,y:24.6},0).wait(1).to({rotation:72.2814,x:47.35,y:24},0).wait(1).to({rotation:73.7273,x:46.5,y:23.45},0).wait(1).to({rotation:75.1731,x:45.65,y:22.85},0).wait(1).to({rotation:76.619,x:44.75,y:22.25},0).wait(1).to({rotation:78.0648,x:43.85,y:21.7},0).wait(1).to({rotation:79.5106,x:43.05,y:21.15},0).wait(1).to({rotation:80.9565,x:42.2,y:20.55},0).wait(1).to({rotation:82.4023,x:41.3,y:19.95},0).wait(1).to({rotation:83.8482,x:40.45,y:19.35},0).wait(1).to({rotation:85.294,x:39.6,y:18.8},0).wait(1).to({rotation:81.7401,x:39.85,y:19.2},0).wait(1).to({rotation:78.1862,x:40.05,y:19.6},0).wait(1).to({rotation:74.6323,x:40.25,y:20},0).wait(1).to({rotation:71.0783,x:40.5,y:20.4},0).wait(1).to({rotation:67.5244,x:40.7,y:20.8},0).wait(1).to({rotation:63.9705,x:40.95,y:21.2},0).wait(1).to({rotation:60.4166,x:41.15,y:21.6},0).wait(1).to({rotation:56.8627,x:41.4,y:22.05},0).wait(1).to({rotation:53.3088,x:41.65,y:22.45},0).wait(1).to({rotation:49.7548,x:41.85,y:22.85},0).wait(1).to({rotation:46.2009,x:42.1,y:23.3},0).wait(1).to({rotation:42.647,x:42.3,y:23.65},0).wait(1).to({rotation:39.0931,x:42.55,y:24.05},0).wait(1).to({rotation:35.5392,x:42.75,y:24.5},0).wait(1).to({rotation:31.9853,x:42.95,y:24.85},0).wait(1).to({rotation:28.4313,x:43.2,y:25.25},0).wait(1).to({rotation:24.8774,x:43.4,y:25.65},0).wait(1).to({rotation:21.3235,x:43.65,y:26.1},0).wait(1).to({rotation:17.7696,x:43.85,y:26.55},0).wait(1).to({rotation:14.2157,x:44.1,y:26.95},0).wait(1).to({rotation:10.6618,x:44.3,y:27.25},0).wait(1).to({rotation:7.1078,x:44.5,y:27.75},0).wait(1).to({rotation:3.5539,x:44.75,y:28.1},0).wait(1).to({rotation:0,x:45,y:28.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item3_line2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line2
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(62.5,64,1,1,0,0,0,62.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.3191,x:62.4,y:63.55},0).wait(1).to({rotation:0.6383,x:62.25,y:63.15},0).wait(1).to({rotation:0.9574,x:62.1,y:62.7},0).wait(1).to({rotation:1.2765,x:62,y:62.3},0).wait(1).to({rotation:1.5956,x:61.85,y:61.85},0).wait(1).to({rotation:1.9148,x:61.7,y:61.45},0).wait(1).to({rotation:2.2339,x:61.55,y:61},0).wait(1).to({rotation:2.553,x:61.45,y:60.6},0).wait(1).to({rotation:2.8721,x:61.25,y:60.2},0).wait(1).to({rotation:3.1913,x:61.15,y:59.7},0).wait(1).to({rotation:3.5104,x:61,y:59.3},0).wait(1).to({rotation:3.8295,x:60.85,y:58.8},0).wait(1).to({rotation:4.1486,x:60.75,y:58.4},0).wait(1).to({rotation:4.4678,x:60.6,y:58},0).wait(1).to({rotation:4.7869,x:60.45,y:57.55},0).wait(1).to({rotation:5.106,x:60.3,y:57.15},0).wait(1).to({rotation:5.4251,x:60.15,y:56.7},0).wait(1).to({rotation:5.7443,x:60.05,y:56.3},0).wait(1).to({rotation:6.0634,x:59.9,y:55.85},0).wait(1).to({rotation:6.3825,x:59.75,y:55.45},0).wait(1).to({rotation:6.7016,x:59.6,y:55.05},0).wait(1).to({rotation:7.0208,x:59.5,y:54.6},0).wait(1).to({rotation:7.3399,x:59.35,y:54.2},0).wait(1).to({rotation:7.659,x:59.2,y:53.75},0).wait(1).to({rotation:7.9781,x:59.05,y:53.3},0).wait(1).to({rotation:8.2973,x:58.95,y:52.85},0).wait(1).to({rotation:8.6164,x:58.8,y:52.45},0).wait(1).to({rotation:8.9355,x:58.65,y:52.05},0).wait(1).to({rotation:9.2546,x:58.5,y:51.6},0).wait(1).to({rotation:9.5738,x:58.4,y:51.2},0).wait(1).to({rotation:9.8929,x:58.2,y:50.8},0).wait(1).to({rotation:10.212,x:58.1,y:50.35},0).wait(1).to({rotation:10.5311,x:57.95,y:49.9},0).wait(1).to({rotation:10.8503,x:57.85,y:49.5},0).wait(1).to({rotation:11.1694,x:57.65,y:49.05},0).wait(1).to({rotation:11.4885,x:57.55,y:48.65},0).wait(1).to({rotation:11.8076,x:57.4,y:48.2},0).wait(1).to({rotation:12.1268,x:57.25,y:47.8},0).wait(1).to({rotation:12.4459,x:57.15,y:47.35},0).wait(1).to({rotation:12.765,x:56.95,y:46.9},0).wait(1).to({rotation:13.0841,x:56.85,y:46.5},0).wait(1).to({rotation:13.4033,x:56.7,y:46.05},0).wait(1).to({rotation:13.7224,x:56.55,y:45.65},0).wait(1).to({rotation:14.0415,x:56.4,y:45.2},0).wait(1).to({rotation:14.3606,x:56.25,y:44.8},0).wait(1).to({rotation:14.6798,x:56.1,y:44.35},0).wait(1).to({rotation:14.9989,x:55.95,y:43.9},0).wait(1).to({rotation:14.8925,x:55.85,y:43.8},0).wait(1).to({rotation:14.7861,x:55.8,y:43.65},0).wait(1).to({rotation:14.6796,x:55.7,y:43.55},0).wait(1).to({rotation:14.5732,x:55.55,y:43.4},0).wait(1).to({rotation:14.4668,x:55.45,y:43.25},0).wait(1).to({rotation:14.3604,x:55.35,y:43.15},0).wait(1).to({rotation:14.254,x:55.25,y:43},0).wait(1).to({rotation:14.1475,x:55.1,y:42.9},0).wait(1).to({rotation:14.0411,x:55.05,y:42.7},0).wait(1).to({rotation:13.9347,x:54.9,y:42.6},0).wait(1).to({rotation:13.8283,x:54.8,y:42.5},0).wait(1).to({rotation:13.7219,x:54.7,y:42.35},0).wait(1).to({rotation:13.6155,x:54.55,y:42.2},0).wait(1).to({rotation:13.509,x:54.45,y:42.1},0).wait(1).to({rotation:13.4026,x:54.35,y:41.95},0).wait(1).to({rotation:13.2962,x:54.2,y:41.8},0).wait(1).to({rotation:13.1898,x:54.1,y:41.7},0).wait(1).to({rotation:13.0834,x:54.05,y:41.6},0).wait(1).to({rotation:12.9769,x:53.9,y:41.45},0).wait(1).to({rotation:12.8705,x:53.8,y:41.25},0).wait(1).to({rotation:12.7641,x:53.65,y:41.15},0).wait(1).to({rotation:12.6577,x:53.55,y:41},0).wait(1).to({rotation:12.5513,x:53.45,y:40.9},0).wait(1).to({rotation:12.4448,x:53.35,y:40.75},0).wait(1).to({rotation:12.3384,x:53.2,y:40.65},0).wait(1).to({rotation:12.232,x:53.15,y:40.5},0).wait(1).to({rotation:12.1256,x:52.95,y:40.4},0).wait(1).to({rotation:12.0192,x:52.9,y:40.2},0).wait(1).to({rotation:11.9127,x:52.8,y:40.1},0).wait(1).to({rotation:11.8063,x:52.65,y:39.95},0).wait(1).to({rotation:11.6999,x:52.55,y:39.85},0).wait(1).to({rotation:11.5935,x:52.45,y:39.7},0).wait(1).to({rotation:11.4871,x:52.3,y:39.6},0).wait(1).to({rotation:11.3806,x:52.2,y:39.45},0).wait(1).to({rotation:11.2742,x:52.1,y:39.3},0).wait(1).to({rotation:11.1678,x:51.95,y:39.15},0).wait(1).to({rotation:11.0614,x:51.9,y:39.05},0).wait(1).to({rotation:10.955,x:51.75,y:38.9},0).wait(1).to({rotation:10.8486,x:51.65,y:38.8},0).wait(1).to({rotation:10.7421,x:51.55,y:38.7},0).wait(1).to({rotation:10.6357,x:51.45,y:38.55},0).wait(1).to({rotation:10.5293,x:51.3,y:38.4},0).wait(1).to({rotation:10.4229,x:51.2,y:38.25},0).wait(1).to({rotation:10.3165,x:51.1,y:38.15},0).wait(1).to({rotation:10.21,x:50.95,y:38},0).wait(1).to({rotation:10.1036,x:50.9,y:37.85},0).wait(1).to({rotation:9.9972,x:50.8,y:37.75},0).wait(1).to({rotation:9.8908,x:50.6,y:37.65},0).wait(1).to({rotation:9.1597,x:51.15,y:38.15},0).wait(1).to({rotation:8.4287,x:51.6,y:38.7},0).wait(1).to({rotation:7.6976,x:52.15,y:39.25},0).wait(1).to({rotation:6.9665,x:52.65,y:39.8},0).wait(1).to({rotation:6.2355,x:53.15,y:40.35},0).wait(1).to({rotation:5.5044,x:53.6,y:40.85},0).wait(1).to({rotation:4.7734,x:54.15,y:41.45},0).wait(1).to({rotation:4.0423,x:54.65,y:41.95},0).wait(1).to({rotation:3.3112,x:55.1,y:42.5},0).wait(1).to({rotation:2.5802,x:55.65,y:43.05},0).wait(1).to({rotation:1.8491,x:56.1,y:43.6},0).wait(1).to({rotation:1.1181,x:56.65,y:44.15},0).wait(1).to({rotation:0.387,x:57.15,y:44.7},0).wait(1).to({rotation:-0.3441,x:57.6,y:45.25},0).wait(1).to({rotation:-1.0751,x:58.15,y:45.8},0).wait(1).to({rotation:-1.8062,x:58.6,y:46.35},0).wait(1).to({rotation:-2.5372,x:59.15,y:46.9},0).wait(1).to({rotation:-3.2683,x:59.65,y:47.4},0).wait(1).to({rotation:-3.9994,x:60.1,y:48},0).wait(1).to({rotation:-4.7304,x:60.65,y:48.55},0).wait(1).to({rotation:-5.4615,x:61.1,y:49.05},0).wait(1).to({rotation:-6.1925,x:61.65,y:49.6},0).wait(1).to({rotation:-6.9236,x:62.1,y:50.1},0).wait(1).to({rotation:-7.6547,x:62.6,y:50.75},0).wait(1).to({rotation:-8.3857,x:63.1,y:51.25},0).wait(1).to({rotation:-9.1168,x:63.6,y:51.75},0).wait(1).to({rotation:-9.8478,x:64.15,y:52.35},0).wait(1).to({rotation:-10.5789,x:64.6,y:52.9},0).wait(1).to({rotation:-11.31,x:65.1,y:53.45},0).wait(1).to({rotation:-12.041,x:65.55,y:53.95},0).wait(1).to({rotation:-12.7721,x:66.05,y:54.55},0).wait(1).to({rotation:-13.5031,x:66.55,y:55.05},0).wait(1).to({rotation:-14.2342,x:67.1,y:55.65},0).wait(1).to({rotation:-14.9653,x:67.55,y:56.15},0).wait(1).to({rotation:-15.6963,x:68,y:56.75},0).wait(1).to({rotation:-16.4274,x:68.55,y:57.25},0).wait(1).to({rotation:-17.1584,x:69,y:57.8},0).wait(1).to({rotation:-17.8895,x:69.6,y:58.35},0).wait(1).to({rotation:-18.6206,x:70.05,y:58.9},0).wait(1).to({rotation:-19.3516,x:70.5,y:59.45},0).wait(1).to({rotation:-20.0827,x:71.05,y:60},0).wait(1).to({rotation:-20.8137,x:71.5,y:60.55},0).wait(1).to({rotation:-21.5448,x:72.05,y:61.05},0).wait(1).to({rotation:-22.2759,x:72.55,y:61.6},0).wait(1).to({rotation:-23.0069,x:73.05,y:62.1},0).wait(1).to({rotation:-23.738,x:73.55,y:62.75},0).wait(1).to({rotation:-24.469,x:74.05,y:63.25},0).wait(1).to({rotation:-25.2001,x:74.5,y:63.8},0).wait(1).to({rotation:-24.6751,x:74.25},0).wait(1).to({rotation:-24.1501,x:74.05},0).wait(1).to({rotation:-23.6251,x:73.75},0).wait(1).to({rotation:-23.1001,x:73.55},0).wait(1).to({rotation:-22.5751,x:73.25},0).wait(1).to({rotation:-22.0501,x:73.05,y:63.85},0).wait(1).to({rotation:-21.5251,x:72.8,y:63.8},0).wait(1).to({rotation:-21.0001,x:72.5},0).wait(1).to({rotation:-20.4751,x:72.25,y:63.85},0).wait(1).to({rotation:-19.9501,x:72.05},0).wait(1).to({rotation:-19.4251,x:71.8},0).wait(1).to({rotation:-18.9001,x:71.55},0).wait(1).to({rotation:-18.3751,x:71.25},0).wait(1).to({rotation:-17.8501,x:71},0).wait(1).to({rotation:-17.3251,x:70.75,y:63.9},0).wait(1).to({rotation:-16.8001,x:70.55},0).wait(1).to({rotation:-16.2751,x:70.25},0).wait(1).to({rotation:-15.7501,x:70,y:63.85},0).wait(1).to({rotation:-15.2251,x:69.8},0).wait(1).to({rotation:-14.7001,x:69.5},0).wait(1).to({rotation:-14.1751,x:69.25,y:63.9},0).wait(1).to({rotation:-13.6501,x:69},0).wait(1).to({rotation:-13.1251,x:68.75},0).wait(1).to({rotation:-12.6,x:68.55,y:63.85},0).wait(1).to({rotation:-12.075,x:68.2,y:63.9},0).wait(1).to({rotation:-11.55,x:68},0).wait(1).to({rotation:-11.025,x:67.75},0).wait(1).to({rotation:-10.5,x:67.5},0).wait(1).to({rotation:-9.975,x:67.2},0).wait(1).to({rotation:-9.45,x:67},0).wait(1).to({rotation:-8.925,x:66.75},0).wait(1).to({rotation:-8.4,x:66.55},0).wait(1).to({rotation:-7.875,x:66.2,y:63.95},0).wait(1).to({rotation:-7.35,x:66,y:63.9},0).wait(1).to({rotation:-6.825,x:65.75},0).wait(1).to({rotation:-6.3,x:65.5,y:63.95},0).wait(1).to({rotation:-5.775,x:65.25,y:63.9},0).wait(1).to({rotation:-5.25,x:65,y:63.95},0).wait(1).to({rotation:-4.725,x:64.75},0).wait(1).to({rotation:-4.2,x:64.5,y:63.9},0).wait(1).to({rotation:-3.675,x:64.2,y:63.95},0).wait(1).to({rotation:-3.15,x:64,y:63.9},0).wait(1).to({rotation:-2.625,x:63.7,y:64},0).wait(1).to({rotation:-2.1,x:63.45,y:63.95},0).wait(1).to({rotation:-1.575,x:63.25,y:64},0).wait(1).to({rotation:-1.05,x:63,y:63.95},0).wait(1).to({rotation:-0.525,x:62.7,y:64},0).wait(1).to({rotation:0,x:62.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_191 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(191).call(this.frame_191).wait(1));

	// triangle_obj_
	this.triangle = new lib.item3_triangle();
	this.triangle.name = "triangle";
	this.triangle.parent = this;
	this.triangle.setTransform(45,28.5,1,1,0,0,0,45,28.5);
	this.triangle.depth = 0;
	this.triangle.isAttachedToCamera = 0
	this.triangle.isAttachedToMask = 0
	this.triangle.layerDepth = 0
	this.triangle.layerIndex = 0
	this.triangle.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.triangle).wait(1).to({regX:54.3,regY:12,x:54.3,y:12},0).wait(191));

	// line2_obj_
	this.line2 = new lib.item3_line2();
	this.line2.name = "line2";
	this.line2.parent = this;
	this.line2.setTransform(62.5,64,1,1,0,0,0,62.5,64);
	this.line2.depth = 0;
	this.line2.isAttachedToCamera = 0
	this.line2.isAttachedToMask = 0
	this.line2.layerDepth = 0
	this.line2.layerIndex = 1
	this.line2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.line2).wait(1).to({regX:62.4,regY:57.9,x:62.4,y:57.9},0).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-46.1,152.6,152.7);


(lib.item1_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(102.5,593.5,1,1,0,0,0,102.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:103.9},0).wait(1).to({x:105.35},0).wait(1).to({x:106.75},0).wait(1).to({x:108.2},0).wait(1).to({x:109.6},0).wait(1).to({x:111.05},0).wait(1).to({x:112.45},0).wait(1).to({x:113.9},0).wait(1).to({x:115.35},0).wait(1).to({x:116.75},0).wait(1).to({x:118.2},0).wait(1).to({x:119.6},0).wait(1).to({x:121.05},0).wait(1).to({x:122.45},0).wait(1).to({x:123.9},0).wait(1).to({x:125.35},0).wait(1).to({x:126.75},0).wait(1).to({x:128.2},0).wait(1).to({x:129.6},0).wait(1).to({x:131.05},0).wait(1).to({x:132.5},0).wait(1).to({x:131.15},0).wait(1).to({x:129.85},0).wait(1).to({x:128.55},0).wait(1).to({x:127.25},0).wait(1).to({x:125.95},0).wait(1).to({x:124.65},0).wait(1).to({x:123.35},0).wait(1).to({x:122.05},0).wait(1).to({x:120.75},0).wait(1).to({x:119.45},0).wait(1).to({x:118.15},0).wait(1).to({x:116.8},0).wait(1).to({x:115.5},0).wait(1).to({x:114.2},0).wait(1).to({x:112.9},0).wait(1).to({x:111.6},0).wait(1).to({x:110.3},0).wait(1).to({x:109},0).wait(1).to({x:107.7},0).wait(1).to({x:106.4},0).wait(1).to({x:105.1},0).wait(1).to({x:103.8},0).wait(1).to({x:102.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item1_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(146,501,1,1,0,0,0,114,116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.7142,x:147.4,y:500.95},0).wait(1).to({rotation:1.4285,x:148.8},0).wait(1).to({rotation:2.1427,x:150.25},0).wait(1).to({rotation:2.8569,x:151.65,y:501},0).wait(1).to({rotation:3.5712,x:153.1,y:500.95},0).wait(1).to({rotation:4.2854,x:154.6},0).wait(1).to({rotation:4.9996,x:155.95,y:501},0).wait(1).to({rotation:5.7139,x:157.4,y:500.95},0).wait(1).to({rotation:6.4281,x:158.85},0).wait(1).to({rotation:7.1423,x:160.25},0).wait(1).to({rotation:7.8566,x:161.7,y:501},0).wait(1).to({rotation:8.5708,x:163.15},0).wait(1).to({rotation:9.285,x:164.55},0).wait(1).to({rotation:9.9993,x:165.95},0).wait(1).to({rotation:10.7135,x:167.4},0).wait(1).to({rotation:11.4277,x:168.85},0).wait(1).to({rotation:12.142,x:170.25},0).wait(1).to({rotation:12.8562,x:171.7,y:500.95},0).wait(1).to({rotation:13.5704,x:173.1},0).wait(1).to({rotation:14.2847,x:174.55,y:501},0).wait(1).to({rotation:14.9989,x:176,y:500.95},0).wait(1).to({rotation:14.3468,x:174.65,y:501},0).wait(1).to({rotation:13.6946,x:173.35},0).wait(1).to({rotation:13.0425,x:172.05},0).wait(1).to({rotation:12.3904,x:170.75,y:500.95},0).wait(1).to({rotation:11.7383,x:169.45},0).wait(1).to({rotation:11.0861,x:168.15},0).wait(1).to({rotation:10.434,x:166.85,y:501},0).wait(1).to({rotation:9.7819,x:165.55,y:500.95},0).wait(1).to({rotation:9.1298,x:164.25,y:501},0).wait(1).to({rotation:8.4776,x:162.95},0).wait(1).to({rotation:7.8255,x:161.65,y:500.95},0).wait(1).to({rotation:7.1734,x:160.3,y:501},0).wait(1).to({rotation:6.5213,x:159.05},0).wait(1).to({rotation:5.8691,x:157.7},0).wait(1).to({rotation:5.217,x:156.45,y:500.95},0).wait(1).to({rotation:4.5649,x:155.1},0).wait(1).to({rotation:3.9128,x:153.85,y:501},0).wait(1).to({rotation:3.2606,x:152.5},0).wait(1).to({rotation:2.6085,x:151.2},0).wait(1).to({rotation:1.9564,x:149.9},0).wait(1).to({rotation:1.3043,x:148.55,y:500.95},0).wait(1).to({rotation:0.6521,x:147.3,y:501},0).wait(1).to({rotation:0,x:146},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.item1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// line_obj_
	this.line = new lib.item1_line();
	this.line.name = "line";
	this.line.parent = this;
	this.line.setTransform(440,242,1,1,0,0,0,440,242);
	this.line.depth = 0;
	this.line.isAttachedToCamera = 0
	this.line.isAttachedToMask = 0
	this.line.layerDepth = 0
	this.line.layerIndex = 0
	this.line.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.line).wait(45));

	// blue_obj_
	this.blue = new lib.item1_blue();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(146,501,1,1,0,0,0,146,501);
	this.blue.depth = 0;
	this.blue.isAttachedToCamera = 0
	this.blue.isAttachedToMask = 0
	this.blue.layerDepth = 0
	this.blue.layerIndex = 1
	this.blue.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blue).wait(1).to({regX:174.1,x:174.1},0).wait(44));

	// shadow_obj_
	this.shadow = new lib.item1_shadow();
	this.shadow.name = "shadow";
	this.shadow.parent = this;
	this.shadow.setTransform(102.5,593.5,1,1,0,0,0,102.5,593.5);
	this.shadow.depth = 0;
	this.shadow.isAttachedToCamera = 0
	this.shadow.isAttachedToMask = 0
	this.shadow.layerDepth = 0
	this.shadow.layerIndex = 2
	this.shadow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(1).to({regX:117.5,x:117.5},0).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,682,642.2);


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
	this.Layer_1.setTransform(14.6,14.6,1,1,0,0,0,14.6,14.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,29,29);


(lib.Scene_1_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// scene
	this.instance = new lib.scene();
	this.instance.parent = this;
	this.instance.setTransform(882,426.5,1,1,0,0,0,970,431.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_scene, null, null);


(lib.Scene_1_item3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item3
	this.instance = new lib.item3();
	this.instance.parent = this;
	this.instance.setTransform(1311.5,135,1,1,0,0,0,62.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item3, null, null);


(lib.Scene_1_item1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item1
	this.instance = new lib.item1();
	this.instance.parent = this;
	this.instance.setTransform(372,-42.5,1,1,0,0,0,341,313.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item1, null, null);


(lib.item2_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(126.3,124.2,0.9999,0.9999,-177.9719,0,0,-50.9,116.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:14.6,regY:14.6,scaleX:1,scaleY:1,rotation:-165.1845,x:37.05,y:205.65},0).wait(1).to({rotation:-152.478,x:21.25,y:184},0).wait(1).to({rotation:-139.7715,x:10.7,y:159.45},0).wait(1).to({rotation:-127.065,x:5.75,y:133.15},0).wait(1).to({rotation:-114.3585,x:6.75,y:106.45},0).wait(1).to({rotation:-101.652,x:13.5,y:80.6},0).wait(1).to({rotation:-88.9455,x:25.85,y:56.85},0).wait(1).to({rotation:-76.239,x:43.15,y:36.4},0).wait(1).to({rotation:-63.5325,x:64.45,y:20.3},0).wait(1).to({rotation:-50.826,x:88.8,y:9.25},0).wait(1).to({rotation:-38.1195,x:115,y:3.85},0).wait(1).to({rotation:-25.413,x:141.75,y:4.4},0).wait(1).to({rotation:-12.7065,x:167.75,y:10.7},0).wait(1).to({rotation:0,x:191.7,y:22.55},0).wait(17).to({rotation:-12.7065,x:167.75,y:10.7},0).wait(1).to({rotation:-25.413,x:141.75,y:4.4},0).wait(1).to({rotation:-38.1195,x:115,y:3.85},0).wait(1).to({rotation:-50.826,x:88.8,y:9.25},0).wait(1).to({rotation:-63.5325,x:64.45,y:20.3},0).wait(1).to({rotation:-76.239,x:43.15,y:36.4},0).wait(1).to({rotation:-88.9455,x:25.85,y:56.85},0).wait(1).to({rotation:-101.652,x:13.5,y:80.6},0).wait(1).to({rotation:-114.3585,x:6.75,y:106.45},0).wait(1).to({rotation:-127.065,x:5.75,y:133.15},0).wait(1).to({rotation:-139.7715,x:10.7,y:159.45},0).wait(1).to({rotation:-152.478,x:21.25,y:184},0).wait(1).to({rotation:-165.1845,x:37.05,y:205.65},0).wait(1).to({rotation:-177.891,x:57.1,y:223.25},0).wait(1));

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
	this.red.setTransform(87.3,178.2,1,1,0,0,0,87.3,178.2);
	this.red.depth = 0;
	this.red.isAttachedToCamera = 0
	this.red.isAttachedToMask = 0
	this.red.layerDepth = 0
	this.red.layerIndex = 0
	this.red.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.red).wait(1).to({regX:95.8,regY:110.9,x:95.8,y:110.9},0).wait(44));

	// path_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABhT+Qi7gPiZgpQhZgSgtgSQimhDi7hSQg4gahDg1QgNgLghgJIgBAAIAAgBIAEgeQAkhIBWASQDdAuDYBMQAUAIARAMQCdAYClALQDPAOC1hlQB/hGBnhjQASgRATgPQBAhiBXhUQCFh/AnipQAYhsANhsQAXi8gxiyQgyi5iNiJQgngmgvgcQilhjgMjEQgCgeAOgoIAAAAIABAAIF0A3IAAABIABAAQAnBXBPBAQCxCNAsDbQAqDGgODHQgKCsgfCpQgZCVhPCAQg5Bfg8BbQgKAQgQAcIAAgBQhUCwilBuQiOBfifA/Qg0AVgxAYQhoA0h4AAQgZAAgZgDg");
	var mask_graphics_1 = new cjs.Graphics().p("AjLT0Qi2g3iNhIQhTglgogbQiUhkilh5Qgyglg2hCQgKgOgfgPIAAgBIAAAAIALgdQAxg+BRAjQDPBcDCB4QASAMAOAQQCUA5ChAuQDHA5DGg8QCLgqB5hLQAVgNAWgKQBThTBog/QCchgBKidQAvhlAkhmQA+i0gKi4QgJi/htikQgegtgogmQiNiEAejBQAEgeAWgkIABgBIABAAIFgCGIAAAAIAAAAQAUBeBABPQCPCwgDDfQgCDLg3C+QgvCnhCCfQg5CMhoBtQhMBRhOBMQgNANgWAYIABgBQh4Cbi4BIQifA/ipAcQg4AJg0ANQg8APg8AAQhNAAhQgZg");
	var mask_graphics_2 = new cjs.Graphics().p("AhvUFQg4gCg2ABQiMAEiChJQilhch7hkQhJg2gigjQh7iBiIiZQgpgvgmhMQgHgQgbgVIAAgBIAAgBIAQgZQA+gzBHA0QC3CGCkCfQAQAPAKASQCEBXCUBPQC2BjDPgRQCQgLCGgwQAXgIAZgFQBig/BzgoQCtg9BpiKQBEhYA4hdQBjiiAei3QAfi8hHi3QgUgzgfgtQhuifBHi2QAKgdAdgeIABgBIABABIE7DMIAAABIABAAQAABgAtBbQBmDKgyDZQgtDFheCvQhSCZhiCOQhVB8h9BVQhbA/hcA6QgQAJgaATIAAAAQiWB+jDAfQiBAViBAAQgpAAgogCg");
	var mask_graphics_3 = new cjs.Graphics().p("AgvUOQiqgJimgtQg2gOg1gKQiKgahvhiQiOh+hjh8Qg8hEgagpQhciZhliyQgeg2gVhTQgEgRgVgaIAAgBIAAgBIAVgVQBHgkA7BBQCWCpB/C/QAMASAGAUQBvBxB/BtQCdCHDOAbQCQAUCNgSQAYgDAZAAQBtgpB5gPQC2gXCEhvQBVhJBLhOQCDiKBEisQBGiygfjCQgIg1gVgzQhKiyBsikQAQgZAjgYIABAAIABAAIEJELIAAABIAAAAQgVBeAZBiQA5DahfDKQhVC4iCCXQhwCEh+B2QhtBoiMA4QhnAqhmAkQgSAHgdANIAAgBQibBSiuAAIgpgBg");
	var mask_graphics_4 = new cjs.Graphics().p("Ak2T1QikgtiZhPQgygagygVQiBg2hYh4QhwiZhGiOQgthPgPguQg7ipg8jDQgSg8gDhUQAAgRgQgfIAAAAIABgBIAZgQQBOgVArBNQBvDEBTDVQAIAUACAVQBUCGBlCFQB9CmDEBGQCIAyCOAMQAZACAYAGQBzgRB4ALQC3ARCZhSQBig0Bag9QCehrBmiaQBsifAKjEQADg2gJg2Qgii9CMiJQAVgWAngQIABAAIABABIDKE8IgBABIABAAQgoBXADBmQAKDiiICxQh7CiifB4QiJBpiUBYQiBBOiVAaQhtAThsAOQgSACggAHIAAAAQhdAahfAAQhfAAhfgag");
	var mask_graphics_5 = new cjs.Graphics().p("ABHUGQhugEhsgJQgTgCggAAIAAAAQjDALivhbQiYhQiEhtQgsgkgsgfQhzhQg8iIQhNitgmiaQgbhWgGgxQgVixgSjLQgEg+AOhUQAEgRgJghIABAAIAAgBIAdgLQBPgDAaBUQBDDYAkDhQAEAWgDAUQA2CVBHCYQBXC8CwBuQB7BNCIArQAXAHAXALQB0AIB0AkQCuA3CngvQBrgeBlgpQCwhHCFiAQCLiFA0i+QAOg0ACg3QAIjBClhoQAagQApgIIABABIABAAICCFhIgBABIABAAQg6BNgSBkQgnDfiqCQQiaCEi1BUQidBJijA3Qh9AriEAAIgkgBg");
	var mask_graphics_6 = new cjs.Graphics().p("AicT1QhsgchogfQgSgGgfgHIAAAAQjBgfiYh+QiDhuhqiHQgjgsgkgnQhghngeiSQgmi5gFifQgIhaAFgwQARixAajLQAIg+AhhPQAGgQgBgiIABAAIAAgBIAegEQBPAOAIBXQATDhgNDlQgBAWgHASQAVCeAlCiQAtDLCVCRQBnBlB8BHQAWAMAUAPQBwAhBpA8QCgBbCsgLQBvgHBrgSQC7ggCehhQCjhlBbiuQAZgwAOg1QAwi7C4hDQAcgKArABIAAABIABABIA0F0IAAABIAAAAQhJA/gnBeQhVDRjFBpQizBgjCAsQipAmirATQgvAGguAAQhlAAhkgbg");
	var mask_graphics_7 = new cjs.Graphics().p("Ag9UCQiVgPiHhEQhjgyhfg1QgQgKgdgNIAAAAQi2hHh6icQhoiHhMiaQgYgzgcguQhHh5ACiVQABi9AdibQAMhaAPguQA2iqBEjBQAWg6AwhHQAKgOAGghIABgBIAAAAIAfACQBKAegLBXQgeDgg8DdQgGAVgLASQgNCeACCmQABDPByCuQBQB5BqBfQATAQAQATQBnA4BaBRQCJB7CrAaQBuARBrAFQC+AICug9QC2hAB+iXQAigqAZgwQBXitDCgaQAegEAoAKIABABIAAABIgcF3IAAAAIAAABQhUAtg6BUQiAC6jXA9QjDA4jHACIglAAQibAAiYgQg");
	var mask_graphics_8 = new cjs.Graphics().p("ABQUFQiogjikg1QiQgvh0hfQhWhGhShIQgOgNgZgTIAAAAQijhshWiyQhKiagoinQgOg2gRg0QgsiFAhiQQAqi5A+iSQAehVAYgqQBZibBsiuQAhg0A/g7QAMgLANggIABAAIABAAIAdAIQBCAtgdBTQhNDVhqDLQgKATgOAPQguCYgiCjQgrDKBLDCQA0CHBUB0QAOAUAMAWQBZBMBGBiQBsCVCiA+QBoAoBpAcQC2AwC4gXQC/gYCbh5QArghAigqQB5iWDDAPQAeACAmATIAAABIABABIhrFoIgBABIAAAAQhcAbhKBGQikCbjgANQgyAEgyAAQiWAAiTgfg");
	var mask_graphics_9 = new cjs.Graphics().p("AEMUsQjJgei0hRQifhGiVhXQiChMheh2QhFhXhAhXQgLgPgVgZIAAAAQiIiMgujAQgoimgEirQgCg4gFg2QgPiLA/iHQBQisBbiBQAwhNAhgkQB3iFCPiTQArgsBKgsQAOgIAUgcIABgBIAAAAIAbAPQA3A6guBKQh4DBiTCvQgOARgRALQhNCLhECZQhVC9AgDMQAXCPA5CDQAKAXAHAXQBGBeAwBvQBKCoCRBfQBdA9BgAxQCpBXC4AQQC/ARCyhVQAxgXAqgiQCXh5C7A4QAdAJAhAaIAAABIAAABIi1FKIgBAAIAAAAQhfAHhYA0QiWBbimAAQgwAAgygIg");
	var mask_graphics_10 = new cjs.Graphics().p("ABPUIQi9hHigh2QiMhmh/h1QhwhmhCiHQgyhjgshkQgHgRgPgcIAAAAQhoimgEjFQgDiqAgipQAKg3AGg2QAPiLBbh2QByiXB1hsQA+hBAogcQCRhoCrhxQA0giBRgcQAPgFAZgXIABAAIAAAAIAXAUQAqBEg9A/QidCii0CNQgSANgTAIQhpB3hjCHQh7CmgMDQQgICRAcCLQAFAYABAYQAxBqAYB4QAkC0B5B7QBPBPBUBFQCTB5CvA3QC4A5C/guQA1gMAxgYQCshXCrBfQAbAPAaAgIAAABIAAABIj3EcIAAAAIgBAAQhfgNhgAgQhmAjhlAAQhuAAhtgqg");
	var mask_graphics_11 = new cjs.Graphics().p("AFLUpQjhAai6h7QiqhuiEiVQhziChjiNQhXh6gliTQgbhrgWhrQgEgSgIgfIAAAAQhCi3AljCQAhinBEieQAVg0ASgzQAsiFBxhhQCQh7CJhQQBLgzAtgTQCjhGC/hLQA5gWBVgKQARgCAegRIAAAAIABAAIASAZQAaBLhJAxQi8B9jOBjQgTAJgVAEQh/Beh9BvQicCJg4DIQgnCLgCCPQAAAZgEAYQAZBxgCB6QgDC3BdCTQA7BeBEBVQB2CVChBbQCmBfDEgEQA3gBA1gOQC7gvCTCBQAWATATAmIAAABIAAABIkuDhIAAAAIgBAAQhaghhkALg");
	var mask_graphics_12 = new cjs.Graphics().p("AELUqIAAAAQhRg0hlgKQjggWidigQiPiPhgiuQhWiXhDifQg7iLgEiWQgEhvABhsQAAgTgCggIAAABQgZjCBOi2QBDidBkiMQAgguAcguQBHh5CEhGQCmhaCWgxQBUghAwgKQCvgiDKghQA+gJBVAJQARACAggLIABAAIAAAAIANAcQAJBPhRAhQjTBSjfA1QgVAFgVgBQiQBBiRBRQi1BlhhC4QhECAghCLQgFAYgJAXQABB1gcB2QgqCyA7CjQAnBoAvBiQBUCqCKB8QCPCADAAmQA2AKA2gCQDBgHB0CeQATAYAKApIAAAAIgBABIlWCcg");
	var mask_graphics_13 = new cjs.Graphics().p("AiITwIgBAAQhEhDhgggQjXhGh4i9Qhtiqg6i/QgzilggiqQgciUAciTQAThtAYhqQAFgSAEggIABAAQAQjDBzihQBjiKB/h0QApgnAlgnQBfhmCPgpQC2g0CdgRQBagPAwACQCzADDMALQA+AEBRAaQAQAGAigEIABABIABAAIAGAeQgIBPhWAPQjgAjjkAFQgWAAgUgFQicAgieAxQjHA8iFCfQheBvg9CBQgLAWgNAVQgYByg1BuQhOCmAXCqQAPBvAaBpQAuC5BtCVQBwCcC1BOQAyAWA1AJQC+AiBQCzQAMAbACAqIgBABIAAABIlvBQg");
	var mask_graphics_14 = new cjs.Graphics().p("An/SxIgBgBIAAAAQg0hQhYg0QjDhxhNjSQhGi+gQjHQgPisAFitQADiVA7iLQAqhnAuhiQAIgRAMgeIAAAAQA5i7CSiFQB/hyCUhXQAxgcAsgfQBzhQCVgJQC8gNCdASQBbAEAvAMQCuApDFA2QA8ARBKArQAOAJAiAEIABAAIAAABIAAAeQgYBMhYgEQjigNjggsQgWgEgSgKQifgBimAOQjOARikB/QhzBYhXBxQgPAUgSARQgwBrhKBgQhwCRgOCtQgIBuADBsQAFC+BLCqQBNCwCgByQAsAgAyAVQCzBJAoDAQAHAdgIAqIAAAAIgBABg");
	var mask_graphics_15 = new cjs.Graphics().p("An/SvQg0hQhYg0QjDhxhMjSQhGi+gRjGQgOisAEitQAEiVA6iLQArhmAuhjQAIgRALgeQA5i6CSiFQB/hyCUhXQAxgcAsgfQBzhQCUgJQC8gMCeARQBaAFAvALQCuApDFA2QA8ARBJArQAPAJAiAEIAAAeQgYBLhWgFQjigMjhgsQgVgEgTgKQiegBinAOQjOARilB/QhzBYhXBxQgPAUgRARQgwBrhLBgQhwCSgOCtQgIBuADBsQAFC/BLCpQBNCxCgByQAtAgAyAVQCyBJAoC/QAHAdgIApg");
	var mask_graphics_30 = new cjs.Graphics().p("An/SxIgBgBIAAAAQg0hQhYg0QjDhxhNjSQhGi+gQjHQgPisAFitQADiVA7iLQAqhnAuhiQAIgRAMgeIAAAAQA5i7CSiFQB/hyCUhXQAxgcAsgfQBzhQCVgJQC8gNCdASQBbAEAvAMQCuApDFA2QA8ARBKArQAOAJAiAEIABAAIAAABIAAAeQgYBMhYgEQjigNjggsQgWgEgSgKQifgBimAOQjOARikB/QhzBYhXBxQgPAUgSARQgwBrhKBgQhwCRgOCtQgIBuADBsQAFC+BLCqQBNCwCgByQAsAgAyAVQCzBJAoDAQAHAdgIAqIAAAAIgBABg");
	var mask_graphics_31 = new cjs.Graphics().p("AiHTwIgBAAQhEhDhgggQjXhFh4i9Qhtirg6i+QgzimggipQgdiUAciTQAUhuAYhqQAEgSAFggIAAABQAQjDByihQBkiLB+h0QAqgmAlgnQBfhnCPgpQC1g0CegRQBZgPAxABQCyAEDNALQA+AEBRAaQAQAGAigEIABAAIAAABIAHAdQgIBQhWAOQjgAkjlAFQgWAAgUgFQibAgifAyQjGA8iGCfQhdBvg9CBQgLAWgNAVQgYByg1BuQhOCmAYCqQAPBuAaBqQAuC4BtCWQBwCbC1BOQAyAWA1AJQC9AiBRCzQAMAbACAqIAAABIgBABIlvBQg");
	var mask_graphics_32 = new cjs.Graphics().p("AEOUqIgBAAQhRgzhlgLQjggWicifQiQiPhhiuQhViXhDifQg8iKgEiXQgEhvABhrQAAgTgCggIAAAAQgajCBOi1QBEidBjiNQAgguAcguQBHh5CDhGQCnhaCVgxQBVgiAwgJQCvgjDKghQA9gJBVAIQARADAggLIABAAIABAAIAMAcQAKBPhSAgQjTBTjeA1QgVAFgVgBQiRBBiQBSQi1BlhhC4QhECAggCLQgGAYgIAXQAAB1gbB2QgqCyA8CjQAmBoAwBiQBUCqCKB7QCPCBDBAlQA1AKA2gBQDBgIB1CeQASAYAKApIAAAAIgBABIlWCcg");
	var mask_graphics_33 = new cjs.Graphics().p("AFMUpQjgAai7h6QiqhtiEiWQhziBhkiNQhXh6gliTQgbhrgXhqQgDgTgJgfIAAABQhCi3AljCQAhioBDieQAVg0ASgzQAsiFBxhhQCPh7CJhRQBLgyAtgUQCjhHC+hLQA6gWBVgKQARgBAdgSIABAAIABAAIASAZQAaBLhJAxQi8B+jOBjQgTAJgVAEQh/Beh9BvQibCJg4DIQgnCMgBCPQgBAYgDAZQAZBxgCB5QgCC4BdCSQA7BeBEBVQB2CVChBbQCnBeDEgEQA2gBA1gOQC7gwCUCBQAXAUASAmIAAAAIAAABIktDiIgBAAIAAAAQhaghhlALg");
	var mask_graphics_34 = new cjs.Graphics().p("ABRUJQi9hHihh2QiMhlh/h1QhwhlhDiHQgxhjgthjQgHgSgQgcIABAAQhoilgFjGQgEipAgipQAKg4AGg1QAPiMBah2QByiXB0hsQA/hBAogdQCQhoCqhyQA0giBRgcQAPgFAZgXIABAAIABAAIAXAUQApBEg8A/QidCji0CNQgRANgUAIQhoB3hiCHQh7CngMDQQgICRAdCKQAFAZABAYQAyBqAXB3QAlC0B6B7QBOBPBUBFQCUB4CvA3QC4A5C/guQA1gNAxgZQCshWCrBeQAbAPAaAgIABABIgBABIj2EdIAAAAIgBAAQhfgNhgAgQhnAkhlgBQhuAAhsgpg");
	var mask_graphics_35 = new cjs.Graphics().p("AEPUtQjJgdi1hRQiehGiVhXQiDhLheh1QhGhXhAhXQgLgPgVgZIAAAAQiJiLgujAQgoimgFirQgCg4gGg2QgPiLA/iHQBPisBbiCQAvhNAhglQB3iECOiUQAsgsBJgsQAPgJATgcIABAAIAAAAIAbAOQA3A6guBLQh3DAiSCwQgOARgRAMQhNCLhDCYQhUC+AgDMQAXCPA6CDQAKAWAHAYQBGBdAxBvQBKCoCRBfQBeA8BgAyQCpBWC4APQDAARCxhWQAwgYArgiQCWh5C7A4QAdAIAhAaIABABIAAABIi0FKIgBABIAAAAQhgAHhXA0QiWBcioAAQgvAAgxgHg");
	var mask_graphics_36 = new cjs.Graphics().p("ABUUGQipgiikg1QiQgth1hgQhWhFhShIQgOgMgZgUIAAAAQijhrhXiyQhKiZgqinQgNg3gRgzQgtiFAhiQQApi5A9iSQAdhWAZgqQBYibBsiuQAhg1A+g7QAMgLANggIABAAIAAAAIAeAIQBCAtgdBTQhLDVhqDLQgKAUgOAPQguCYghCjQgqDKBMDCQA0CHBUBzQAPAUAMAWQBZBMBHBiQBsCUCiA+QBoAnBpAcQC3AwC3gYQC/gZCbh5QAqgiAjgqQB4iXDEAPQAeACAlATIABAAIAAABIhqFpIAAABIAAAAQhcAbhKBGQikCcjfAOQg1AEg1AAQiTAAiQgeg");
	var mask_graphics_37 = new cjs.Graphics().p("Ag5UEQiVgOiHhEQhjgyhfg1QgRgJgdgNIABAAQi3hGh6icQhqiGhMiaQgZgzgbguQhIh4ABiVQABi+AciaQALhaAPgvQA1iqBEjBQAVg7AwhGQAKgOAGgiIABAAIAAgBIAfACQBKAegLBXQgcDhg8DcQgGAWgKARQgNCeADCnQACDPBzCtQBQB5BrBeQASARARASQBmA4BbBRQCJB5CrAaQBuAQBsAFQC+AICug/QC1hAB+iYQAigqAZgxQBVitDCgbQAegEApAKIAAABIABABIgaF3IgBABIAAAAQhUAug5BUQh/C7jXA+QjDA5jHACIgyAAQiUAAiSgOg");
	var mask_graphics_38 = new cjs.Graphics().p("AiYT3QhrgbhoggQgSgFgggHIABAAQjBgeiZh+QiEhshriHQgjgsgkgnQhghngfiRQgoi5gFifQgIhaAEgwQAQixAZjMQAIg9AghPQAHgQgBgiIAAgBIABAAIAegFQBOAOAJBXQAUDhgLDlQgCAWgHASQAWCdAmCjQAuDKCWCRQBoBlB8BGQAVAMAUAOQBxAhBpA8QCgBZCsgLQBvgIBrgSQC7ghCdhiQCjhmBbivQAZgwANg1QAvi7C4hDQAcgLAqABIABABIAAABIA2F0IAAAAIAAABQhIA/gmBeQhVDSjEBqQiyBhjCAsQipAoirAUQgxAGgwAAQhjAAhjgag");
	var mask_graphics_39 = new cjs.Graphics().p("ABNUHQhugEhsgIQgTgCggAAIABAAQjDAMiwhaQiYhPiFhsQgsgkgsgfQhzhPg9iIQhPisgmiaQgchWgGgxQgWixgTjLQgFg9AOhVQAEgRgJghIAAAAIABgBIAcgLQBQgDAbBTQBDDYAmDhQADAVgCAVQA3CVBHCXQBYC7CxBuQB7BMCIAqQAYAHAWALQB1AHB0AkQCvA2CmgwQBrgfBkgpQCwhICFiBQCKiGAzi+QAOg0ACg3QAGjBClhpQAZgRAqgGIAAAAIABABICEFfIAAABIAAAAQg5BNgSBkQglDfiqCRQiZCFi0BVQidBKijA4Qh/AtiFAAIghgBg");
	var mask_graphics_40 = new cjs.Graphics().p("AkuT3QilgsiZhOQgygZgygVQiCg1hYh4QhxiYhHiOQgthOgQguQg7ipg+jDQgSg7gEhWQgBgQgPgeIAAgBIAAgBIAagQQBNgVAsBMQBwDEBVDUQAHAVADAUQBVCGBmCEQB+ClDEBFQCIAxCOAMQAZACAYAFQB0gRB4AKQC3APCYhSQBig1BZg9QCdhsBmibQBqigAJjEQADg2gKg2Qgji9CLiKQAVgVAngRIABABIABAAIDME7IAAABIAAAAQgnBYAEBlQAKDiiGCyQh6CiieB5QiJBqiTBaQiBBPiUAaQhtAUhsAOQgTADgfAHIAAgBQhfAchhAAQhdAAhdgZg");
	var mask_graphics_41 = new cjs.Graphics().p("AgnUPQiqgIingsQg2gOg1gKQiKgYhwhiQiPh9hjh7Qg9hDgagqQhdiYhmixQgeg2gXhTQgDgQgWgbIAAgBIAAAAIAVgWQBHglA7BBQCYCpCAC9QAMATAGATQBwBxCABrQCeCGDOAaQCQATCMgTQAZgDAYAAQBtgqB5gPQC2gYCDhxQBVhJBKhPQCCiKBDitQBGizghjBQgJg1gVgzQhLiyBrikQAQgaAigYIABAAIABABIELEJIAAAAIAAABQgUBeAaBiQA6DZheDLQhUC4iACYQhvCFh+B3QhsBoiMA5QhmArhmAlQgSAHgdANIAAAAQidBUixAAIgjgBg");
	var mask_graphics_42 = new cjs.Graphics().p("AhlUGQg4gCg2ACQiMAFiChIQimhbh7hkQhKg0gigjQh8iBiJiYQgpgugnhMQgIgPgagWIgBAAIAAgBIARgaQA9gzBIAzQC3CFCmCdQAPAQALASQCFBWCUBOQC3BhDPgSQCPgNCGgwQAYgJAYgFQBhhABzgpQCtg+BoiKQBDhZA4hdQBhijAdi3QAei9hJi2QgUgzgggsQhuifBFi3QAKgcAdgfIAAAAIABAAIE9DKIAAABIABAAQAABgAuBbQBoDJgxDZQgrDGhdCwQhQCZhhCPQhUB9h9BVQhbBAhbA6QgQAKgaATIAAAAQiVB/jDAhQiGAXiIAAIhFgCg");
	var mask_graphics_43 = new cjs.Graphics().p("AjAT2Qi1g2iOhHQhTgkgpgbQiUhjimh3Qgyglg3hCQgKgNgfgPIAAgBIgBgBIALgcQAxg/BRAjQDPBaDEB3QASAMAOAPQCVA4ChAsQDHA5DFg+QCLgsB5hLQAVgNAWgLQBShTBnhAQCchiBIidQAvhlAjhnQA8i0gLi4QgLjAhuijQgfgsgogmQiOiCAdjCQAEgeAVgkIABgBIABAAIFhCDIAAAAIABABQAVBdBABPQCQCugBDgQAADKg2C/QguCnhACgQg4CMhnBuQhLBRhOBNQgNANgVAYIAAAAQh2Cbi4BKQieBAiqAdQg3AKg0ANQg+AQg9AAQhMAAhPgXg");
	var mask_graphics_44 = new cjs.Graphics().p("ABuT/Qi8gOiZgoQhZgRgugSQimhBi8hRQg5gZhDg1QgNgLghgIIgBgBIAAAAIAEgfQAjhHBWAQQDeAsDYBLQAVAHARAMQCdAYCmAJQDOAMC1hmQB+hIBmhkQASgRAUgPQA+hjBXhUQCDiBAmipQAYhtAMhrQAVi8gyizQg0i5iPiHQgngmgvgbQimhigOjDQgCgeANgpIABAAIABAAIF0A0IABABIAAAAQAoBXBQA/QCyCMAuDaQArDGgLDHQgKCsgdCqQgYCVhNCBQg5Bgg7BbQgKAPgQAdIAAgBQhSCxikBwQiNBfifBBQg0AWgxAYQhqA1h7AAQgWAAgWgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:131.3715,y:128.0532}).wait(1).to({graphics:mask_graphics_1,x:133.27,y:129.287}).wait(1).to({graphics:mask_graphics_2,x:134.334,y:128.7135}).wait(1).to({graphics:mask_graphics_3,x:133.3752,y:129.5155}).wait(1).to({graphics:mask_graphics_4,x:131.0487,y:129.479}).wait(1).to({graphics:mask_graphics_5,x:129.4819,y:128.7241}).wait(1).to({graphics:mask_graphics_6,x:123.8139,y:129.5896}).wait(1).to({graphics:mask_graphics_7,x:114.9844,y:129.7849}).wait(1).to({graphics:mask_graphics_8,x:106.16,y:131.5831}).wait(1).to({graphics:mask_graphics_9,x:97.0823,y:133.1522}).wait(1).to({graphics:mask_graphics_10,x:86.0763,y:133.001}).wait(1).to({graphics:mask_graphics_11,x:73.5662,y:129.401}).wait(1).to({graphics:mask_graphics_12,x:69.4461,y:128.2091}).wait(1).to({graphics:mask_graphics_13,x:81.697,y:124.497}).wait(1).to({graphics:mask_graphics_14,x:93.6578,y:115.6476}).wait(1).to({graphics:mask_graphics_15,x:93.1967,y:115.0767}).wait(15).to({graphics:mask_graphics_30,x:93.5125,y:115.5896}).wait(1).to({graphics:mask_graphics_31,x:81.5099,y:124.4941}).wait(1).to({graphics:mask_graphics_32,x:69.207,y:128.2253}).wait(1).to({graphics:mask_graphics_33,x:73.5268,y:129.4522}).wait(1).to({graphics:mask_graphics_34,x:86.0893,y:133.0499}).wait(1).to({graphics:mask_graphics_35,x:97.1018,y:133.1904}).wait(1).to({graphics:mask_graphics_36,x:106.2311,y:131.6115}).wait(1).to({graphics:mask_graphics_37,x:115.1004,y:129.826}).wait(1).to({graphics:mask_graphics_38,x:123.9756,y:129.6579}).wait(1).to({graphics:mask_graphics_39,x:129.5728,y:128.7599}).wait(1).to({graphics:mask_graphics_40,x:131.1262,y:129.5734}).wait(1).to({graphics:mask_graphics_41,x:133.6002,y:129.5597}).wait(1).to({graphics:mask_graphics_42,x:134.38,y:128.753}).wait(1).to({graphics:mask_graphics_43,x:133.2599,y:129.3215}).wait(1).to({graphics:mask_graphics_44,x:131.4054,y:128.0294}).wait(1));

	// path_obj_
	this.path = new lib.item2_path();
	this.path.name = "path";
	this.path.parent = this;
	this.path.setTransform(94.5,115,1,1,0,0,0,94.5,115);
	this.path.depth = 0;
	this.path.isAttachedToCamera = 0
	this.path.isAttachedToMask = 0
	this.path.layerDepth = 0
	this.path.layerIndex = 1
	this.path.maskLayerName = 0

	var maskedShapeInstanceList = [this.path];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.path).wait(45));

	// Layer_1_obj_
	this.Layer_1 = new lib.item2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(98,130.5,1,1,0,0,0,98,130.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 2
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-8,206.29999999999998,243);


(lib.Scene_1_item2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item2
	this.instance = new lib.item2();
	this.instance.parent = this;
	this.instance.setTransform(889,195.5,1,1,0,0,0,103,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_item2, null, null);


// stage content:
(lib._2019janman = function(mode,startPosition,loop) {
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

	// item1_obj_
	this.item1 = new lib.Scene_1_item1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(372,-42.5,1,1,0,0,0,372,-42.5);
	this.item1.depth = 0;
	this.item1.isAttachedToCamera = 0
	this.item1.isAttachedToMask = 0
	this.item1.layerDepth = 0
	this.item1.layerIndex = 0
	this.item1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item1).wait(1));

	// item2_obj_
	this.item2 = new lib.Scene_1_item2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(924,213.6,1,1,0,0,0,924,213.6);
	this.item2.depth = 0;
	this.item2.isAttachedToCamera = 0
	this.item2.isAttachedToMask = 0
	this.item2.layerDepth = 0
	this.item2.layerIndex = 1
	this.item2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item2).wait(1));

	// item3_obj_
	this.item3 = new lib.Scene_1_item3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(1311.5,135,1,1,0,0,0,1311.5,135);
	this.item3.depth = 0;
	this.item3.isAttachedToCamera = 0
	this.item3.isAttachedToMask = 0
	this.item3.layerDepth = 0
	this.item3.layerIndex = 2
	this.item3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.item3).wait(1));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(1203,208,1,1,0,0,0,1203,208);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 3
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// scene_obj_
	this.scene = new lib.Scene_1_scene();
	this.scene.name = "scene";
	this.scene.parent = this;
	this.scene.setTransform(882,426.5,1,1,0,0,0,882,426.5);
	this.scene.depth = 0;
	this.scene.isAttachedToCamera = 0
	this.scene.isAttachedToMask = 0
	this.scene.layerDepth = 0
	this.scene.layerIndex = 4
	this.scene.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.scene).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(712,19,1140,839);
// library properties:
lib.properties = {
	id: '84DDB00A48654513BA3CDA609463C907',
	width: 1600,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/2019_jan_man_atlas_.png", id:"2019_jan_man_atlas_"}
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
an.compositions['84DDB00A48654513BA3CDA609463C907'] = {
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