(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1500,1000]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bkg = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.SidefieldBKG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bkg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgeYAu4MAAAhdvMA8xAAAMAAABdvg");
	this.shape.setTransform(194.5,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SidefieldBKG, new cjs.Rectangle(0,0,389,600), null);


(lib.CompoundPath = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Lager_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmbDBQgTgUACgiQACgQAGgQQAHgSAKgRICVjwQAHgKAAgCIgBgDIgDAAQgDgBgQAQQgSASgfAkIhpB+Ig0A7QgXAZgiAhQgpAmgnAWQgnAWgcABQgLAAgEgDQgEgCAAgHQABgJAIgGIARgOQAzgvAyhKQA0hKAKhNQADgwgagbQgYgZgzgCQgiABgIAQQgJARAkAuQARAXAUAUQAGAFgFAGQgGAIgOgNQgdgZgSgnIAAgBQgQggAKgTQAOgbA5AGIABABQArAFAmAdQArAigDA5QgEApgZApQgaApgyA3QgrAwgYAXQgYAXgBAFQAAABAAAAQAAABAAABQABAAAAAAQAAABABAAQACACAEAAQAKABAigTQAhgTAzgvQAfgeAmgsICKikQAbghAXgWQAFgFAHgFQAHgEAFAAQANABAEAMQACAHgBARQgBALgGANQgGAOgLASIgaAqQgUAfgQAbIgmA9IgbArQgIAOgIAQQgGAPAAALQgBAUAJANQAKANAXAAQAbAAAigQQAigQAhgfQASgSAOgRQAOgRAMgSQgCgTAAgYIACgoQALhkAhg0QAUgdANgJQAJgGANABQAPABAEAXQAEASgDAYQgFA0ggBIQgdA/gnAvQALAWAOADQASAEAogwQAdghAQgdQgJgHgBgHQgBgHACgIQACgHAEgFQAIgLALgBQAHAAAFAEQAEAEAAAGQAAAKgIAMQgIAJABAFQABAGATAFIAfAGIAhAFQAIAAgBAEQAAADgKAIIhFBDIgTAZQgSAagBANQgBAOAMAAQALAAAPgHQAQgJANgKQAPgLAPgNIAiggIAFgNQAPgcAWgUQAZgXAQgKQAigUAcAAQAbAAAAATQgBAghJAmQgfAQgkANQgSAdgBASQgCASAIAIQAHAIAQAAQARAAASgIQAQgGAUgOQAUgPALgLIAZgaQALgbAVgZQAggkBBgbQgJgdgFgeQgGgjAHghQAGgYAUgUQATgUAlAGQApAIAYArQAXAqgOA/QgKAkgWAjQgRAbgVAZIAHAEQAUAKAYAAIAFgLQAOgbAWgVQAagXAPgKQAjgUAbAAQAcAAgBATQAAAghKAmQgeAQglANQgSAdgBASQgCASAIAIQAHAIAQAAQAQAAATgIQARgHAPgKIAKgHQAUgOAXgaIANgTIADgDQAGgHAFAFQAGAGgNAPQgYAeglAWIgEACQgTANgWAJQgWAIgPAAQgSAAgIgFQgIgDgGgIQgTgaATgvQgZgBgUgLIgIgEIgSATQgkAlgsAaQgrAcgjgEQgUgFgIgSQgHgRAIgfIAAgDIgSASQgOAOgSANQgRALgVAJQgVAIgQAAQgRAAgJgFQgIgDgGgIQgQgXAMgnQhMBMgyAAQgSAAgJgIQgJgJABgOQAEgsCGhYQg9gMgWgKQgQAcggAkQgoAsgUABIgFgBQgPgCgNgXIgdAcQgrApguAVQguAWgeAAQgigBgTgTgAGAAWQgpAcghArQgmAygHAaQgDANAEAIQAFAIAJABQAaAEAqgeQAbgUA3hDIADgEQgagcgOgngACoA0QgdAjgLARQBRgfAaggQAIgLABgKQACgRgOAAQgYAAgoAxgAJMA0QgaAggNATIALgDQBIgfAXgcQAJgKABgLQABgRgNAAQgYAAgpAxgAG3gKIAAACQAAADgJADIgeANQAQApAVAYQARgaAQgbQASggAKgmQANgvgKglQgLglghgIQgcgEgOAVQgNATgFAYQgIAhABAbQABAgAHAWIAXgHQALgDAFAAgAiEiAQgaA9gJBKIAAA2QAegyAahBQAZg/AFgzQABgPgBgEQgCgGgEAAQgTAEgaA9g");
	this.shape.setTransform(69.9923,21.3196);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0.1,140,42.5), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAYAyQgCgDgBgEIAAgHIgBgNIgDgIQgCgDgEgCQgEgBgGAAIgZAAIAAApIgRAAIAAhjIAvAAQAQAAAIAHQAJAHAAANQAAAHgCAFIgFAHIgGAEIgEABIAFACQADABACADQACACACAEQABAEAAAFIABAQQACAIACADgAgYgEIAcAAQAIAAAFgDQAEgEAAgIQAAgFgBgDIgEgFIgGgCIgGAAIgcAAg");
	this.shape.setTransform(111.775,10.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAdA/IgJgaIgnAAIgKAaIgSAAIAnhjIARAAIAnBjgAAPAXIgPgpIAAAAIgPApIAeAAgAAEgvIAAgPIAQAAIAAAPgAgTgvIAAgPIAQAAIAAAPg");
	this.shape_1.setTransform(99.875,9.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAyIAAgtIgsAAIAAAtIgRAAIAAhjIARAAIAAAoIAsAAIAAgoIASAAIAABjg");
	this.shape_2.setTransform(88.15,10.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYAyQgCgDgBgEIAAgHIgBgNIgDgIQgCgDgEgCQgEgBgGAAIgZAAIAAApIgRAAIAAhjIAvAAQAQAAAIAHQAJAHAAANQAAAHgCAFIgFAHIgGAEIgEABIAFACQADABACADQACACACAEQABAEAAAFIABAQQACAIACADgAgYgEIAcAAQAIAAAFgDQAEgEAAgIQAAgFgBgDIgEgFIgGgCIgGAAIgcAAg");
	this.shape_3.setTransform(70.675,10.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkAyIAAhjIBHAAIAAAPIg1AAIAAAbIAyAAIAAAMIgyAAIAAAeIA2AAIAAAPg");
	this.shape_4.setTransform(59.3,10.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAjAyIAAhMIAAAAIgcBMIgNAAIgchMIAAAAIAABMIgRAAIAAhjIAZAAIAaBNIABAAIAbhNIAYAAIAABjg");
	this.shape_5.setTransform(46.425,10.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOAyQgIgCgFgEQgGgEgDgIQgDgGgBgJIASAAQAAAFACAFQACAEADACIAIAEIAJABQAGAAAEgBQAEgBADgCQACgDABgDIABgFQAAgGgCgDIgGgEIgMgDIgRgFIgKgDIgHgGIgEgHIgBgIQAAgHADgGQADgFAGgEQAFgEAGgCQAHgCAGABQAIgBAGACQAHACAGAFQAFAEADAGQADAFAAAJIgRAAQgBgKgGgEQgGgEgIAAIgGABIgGACIgFADQgBADAAAEQAAAGADACQADADAGACIAEABIAIADIAJACIAGABQAFACAEACQAEADACADIAEAHIABAIQAAAIgEAHQgDAFgGAEQgFAEgHABQgIADgHAAQgHAAgIgDg");
	this.shape_6.setTransform(27.825,10.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAdA/IgJgaIgnAAIgKAaIgSAAIAnhjIARAAIAnBjgAAPAXIgPgpIAAAAIgPApIAeAAgAAEgvIAAgPIAQAAIAAAPgAgTgvIAAgPIAQAAIAAAPg");
	this.shape_7.setTransform(16.675,9.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAyIAAhjIARAAIAABUIAyAAIAAAPg");
	this.shape_8.setTransform(6.475,10.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(72));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_1 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_2 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_3 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_4 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_5 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_6 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_7 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_8 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_9 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_10 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_11 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_12 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_13 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_14 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_15 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_16 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_17 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_18 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_19 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_20 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_21 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_22 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_23 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_24 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_25 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_26 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_27 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_28 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_29 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_30 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_31 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_32 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_33 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_34 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_35 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_36 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_37 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_38 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_39 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_40 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_41 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_42 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_43 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_44 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_45 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_46 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");
	var mask_graphics_47 = new cjs.Graphics().p("ApeCAIAAj/IS9AAIAAD/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_1,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_2,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_3,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_4,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_5,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_6,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_7,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_8,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_9,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_10,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_11,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_12,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_13,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_14,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_15,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_16,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_17,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_18,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_19,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_20,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_21,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_22,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_23,x:-64.3253,y:33.4998}).wait(1).to({graphics:mask_graphics_24,x:-49.3421,y:33.4998}).wait(1).to({graphics:mask_graphics_25,x:-35.6067,y:33.4998}).wait(1).to({graphics:mask_graphics_26,x:-23.0652,y:33.4998}).wait(1).to({graphics:mask_graphics_27,x:-11.6631,y:33.4998}).wait(1).to({graphics:mask_graphics_28,x:-1.346,y:33.4998}).wait(1).to({graphics:mask_graphics_29,x:7.9407,y:33.4998}).wait(1).to({graphics:mask_graphics_30,x:16.2504,y:33.4998}).wait(1).to({graphics:mask_graphics_31,x:23.638,y:33.4998}).wait(1).to({graphics:mask_graphics_32,x:30.1576,y:33.4998}).wait(1).to({graphics:mask_graphics_33,x:35.8632,y:33.4998}).wait(1).to({graphics:mask_graphics_34,x:40.8092,y:33.4998}).wait(1).to({graphics:mask_graphics_35,x:45.05,y:33.4998}).wait(1).to({graphics:mask_graphics_36,x:48.64,y:33.4998}).wait(1).to({graphics:mask_graphics_37,x:51.6325,y:33.4998}).wait(1).to({graphics:mask_graphics_38,x:54.0833,y:33.4998}).wait(1).to({graphics:mask_graphics_39,x:56.0453,y:33.4998}).wait(1).to({graphics:mask_graphics_40,x:57.5734,y:33.4998}).wait(1).to({graphics:mask_graphics_41,x:58.7218,y:33.4998}).wait(1).to({graphics:mask_graphics_42,x:59.5445,y:33.4998}).wait(1).to({graphics:mask_graphics_43,x:60.0961,y:33.4998}).wait(1).to({graphics:mask_graphics_44,x:60.4309,y:33.4998}).wait(1).to({graphics:mask_graphics_45,x:60.6029,y:33.4998}).wait(1).to({graphics:mask_graphics_46,x:60.6658,y:33.4998}).wait(1).to({graphics:mask_graphics_47,x:60.6749,y:33.4998}).wait(25));

	// Line
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,2,1).p("AolAAIRLAA");
	this.shape_9.setTransform(59.15,30.8);

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.6,31.8);


(lib.Copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAJIAAgSIAOAAIAAASg");
	this.shape.setTransform(155.95,365.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_1.setTransform(152.825,361.7981);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXA/QgGgBgEgEQgEgDgDgFQgCgFAAgHQAAgKAEgFQAFgGAGgDQAIgDAJgBIARgCIAGgBIAEgCIADgEIABgFQAAgFgCgEQgCgEgDgCQgDgCgEgBIgJgBQgLAAgGAFQgIAFAAAMIgLAAQAAgIADgGQADgGAFgEQAFgEAGgCQAHgBAIAAIALABQAHABAFADQAEAEADAFQAEAGAAAKIAAAwQAAAHAGAAIAEgBIAAAKIgDAAIgFAAIgHgBIgDgDIgCgFIgBgHIgGAIQgEAEgEACQgEACgEABQgEACgHAAQgHAAgFgCgAAQAOIgFACIgNACIgPADQgGACgEADQgEAEAAAHQAAAEACAEQABADADACIAHAEIAIABQAGAAAFgCQAGgCAEgDQAFgEACgFQADgGAAgHIAAgPQgCACgDABgAAIguIAAgSIALAAIAAASgAgYguIAAgSIANAAIAAASg");
	this.shape_2.setTransform(145.05,360.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBAIAAhSIgQAAIAAgKIAQAAIAAgIIABgLQABgFACgEQADgDADgCQAFgCAGAAIAFAAIAFAAIAAAKIgFAAIgDgBQgFAAgCACQgDABgBADQgBACgBADIAAAHIAAAIIASAAIAAAKIgSAAIAABSg");
	this.shape_3.setTransform(138,360.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBAIAAhSIgQAAIAAgKIAQAAIAAgIIABgLQAAgFAEgEQACgDADgCQAEgCAIAAIAEAAIAFAAIAAAKIgFAAIgDgBQgFAAgCACQgDABgBADQgCACAAADIAAAHIAAAIIASAAIAAAKIgSAAIAABSg");
	this.shape_4.setTransform(133.7,360.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAvQgGgBgEgDQgEgDgDgGQgCgFAAgHQAAgJAEgGQAFgFAGgCQAHgDAJgCIARgCIAHgBIAEgBIADgFIABgFQAAgGgBgEQgDgDgDgDQgDgCgFgBIgIAAQgLAAgHAEQgGAGgBALIgLAAQABgIACgGQADgGAFgEQAFgDAHgCQAHgCAHAAIAMABQAFABAGADQAEAEAEAFQACAHABAJIAAAwQAAAHAGAAIAEgBIAAAKIgDAAIgFAAIgGgBIgFgDIgBgFIgBgHIgHAIQgCAEgFACQgDADgFAAQgEACgHAAQgGAAgGgCgAAQAAIgEAAIgPACIgOADQgGACgEADQgEAEAAAHQAAAFACADQABAEAEACIAGADIAIABQAHAAAEgCQAGgCAFgDQAEgEACgFQADgFAAgIIAAgNQgCACgDABg");
	this.shape_5.setTransform(126.8,361.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAGQgDAGAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_6.setTransform(112.3542,361.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGABIAJgBIAAAKIgFAAIgFAAQgLAAgDgFg");
	this.shape_7.setTransform(104.725,360.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAqQgKgJgCgQIAMAAQAAALAIAGQAIAGAKgBIAJAAIAIgEQAEgCACgDQACgDAAgFQAAgEgBgDIgFgFIgGgCIgIgDIgOgDIgKgCIgIgFQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgBQAGgCAGAAIANACQAGACAEADQAFAEACAFQADAGABAIIgMAAQAAgGgCgDQgCgEgDgDIgIgDIgIgBIgIAAIgHADQgDACgCADQgCADAAAEQAAAEACADIAFAFIAGACIAGACIAOAEIAKACQAFABADADQAEADACAEQADAFAAAGQAAAIgEAFQgDAGgFADQgGADgGABIgNACQgQAAgKgHg");
	this.shape_8.setTransform(97.975,361.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXAvQgGgBgEgDQgEgDgDgGQgCgFAAgHQAAgJAEgGQAFgFAGgCQAIgDAJgCIARgCIAGgBIAEgBIADgFIABgFQAAgGgCgEQgCgDgDgDQgDgCgEgBIgJAAQgLAAgGAEQgIAGAAALIgLAAQAAgIADgGQADgGAFgEQAFgDAGgCQAHgCAIAAIALABQAGABAGADQAEAEADAFQAEAHAAAJIAAAwQAAAHAGAAIAEgBIAAAKIgDAAIgFAAIgHgBIgDgDIgCgFIgBgHIgGAIQgEAEgEACQgEADgEAAQgEACgHAAQgHAAgFgCgAARAAIgGAAIgNACIgPADQgGACgEADQgEAEAAAHQAAAFACADQABAEADACIAHADIAIABQAGAAAFgCQAGgCAEgDQAFgEACgFQADgFAAgIIAAgNQgCACgCABg");
	this.shape_9.setTransform(89.25,361.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMBAQgHgBgFgEQgGgDgDgFQgEgGAAgHIALAAQABAFADAEQACADAEACQAEADAEABIAIABQAQAAAHgJQAHgJAAgRIAAgNIAAAAQgEAJgIAFQgHAFgLAAQgKAAgIgDQgIgEgFgHQgFgGgCgIQgDgJAAgKQAAgJADgJQADgIAFgHQAGgGAHgEQAIgDAJAAQAGAAAEABIAJAEIAGAGIAFAHIAAAAIAAgQIAMAAIAABVQAAAKgDAIQgCAIgFAGQgFAGgIADQgHADgMAAQgGAAgGgCgAgNg0QgFADgEAFQgEAGgCAHQgBAGAAAIQAAAHABAGQACAGAEAFQAEAFAGADQAFAEAHAAQAIAAAFgEQAGgDAEgFQADgFACgGQACgGAAgHQAAgHgBgHQgCgHgEgFQgDgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_10.setTransform(79.125,363.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_11.setTransform(72.725,360.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGABIAJgBIAAAKIgFAAIgFAAQgLAAgDgFg");
	this.shape_12.setTransform(68.175,360.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAaBAIgkgyIgSAPIAAAjIgLAAIAAh/IALAAIAABPIAygsIAQAAIgnAiIApA6g");
	this.shape_13.setTransform(61.875,360.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_14.setTransform(55.125,360.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAuIgjhbIAMAAIAcBQIABAAIAdhQIALAAIgiBbg");
	this.shape_15.setTransform(49.325,361.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAqQgKgJgCgQIAMAAQAAALAIAGQAIAGAKgBIAJAAIAIgEQAEgCACgDQACgDAAgFQAAgEgBgDIgFgFIgGgCIgIgDIgOgDIgKgCIgIgFQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgBQAGgCAGAAIANACQAGACAEADQAFAEACAFQADAGABAIIgMAAQAAgGgCgDQgCgEgDgDIgIgDIgIgBIgIAAIgHADQgDACgCADQgCADAAAEQAAAEACADIAFAFIAGACIAGACIAOAEIAKACQAFABADADQAEADACAEQADAFAAAGQAAAIgEAFQgDAGgFADQgGADgGABIgNACQgQAAgKgHg");
	this.shape_16.setTransform(35.825,361.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGABIAJgBIAAAKIgFAAIgFAAQgLAAgDgFg");
	this.shape_17.setTransform(28.625,360.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAGQgDAGAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_18.setTransform(21.6542,361.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFAuIgjhbIAMAAIAcBQIABAAIAdhQIALAAIgiBbg");
	this.shape_19.setTransform(12.775,361.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_20.setTransform(6.975,360.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_21.setTransform(3.675,360.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgHAAgFADQgFACgDAFQgDAFgBAGQgBAGgBAGIAAA0IgJAAIAAg+IgBgJQgBgEgDgEQgCgDgEgBQgDgCgGAAQgHAAgGACQgFADgEAFQgDAEgBAGQgCAHAAAHIAAAzIgLAAIAAhcIALAAIAAAPIAAAAQAEgIAIgFQAHgFALAAQAKAAAHAFQAHAEACAJQAEgJAIgEQAIgFAJAAQAfAAAAAhIAAA+g");
	this.shape_22.setTransform(259.2,338.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgSAtQgIgEgGgGQgFgHgDgJQgDgJAAgKQAAgJADgJQADgJAFgGQAGgHAIgEQAJgEAJAAQALAAAIAEQAIAEAFAHQAGAGADAJQADAJAAAJQAAAKgDAJQgDAJgGAHQgFAGgIAEQgIAEgLAAQgJAAgJgEgAgNgjQgHADgDAGQgEAGgDAGQgBAIgBAGQABAIABAGQADAHAEAHQADAFAHADQAGADAHAAQAIAAAGgDQAGgDAEgFQAFgHACgHQABgGAAgIQAAgGgBgIQgCgGgFgGQgEgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_23.setTransform(246.7,338.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_24.setTransform(236.875,338.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAFQAIAEAFAHQAFAIACAJQADAJgBAJIhGAAIABANQACAGAEAGQAEAFAFADQAGADAHAAQANAAAHgGQAHgHADgKIALAAQgEAQgJAIQgKAJgSAAQgKAAgIgEgAgLgjQgGACgDAEQgEAFgCAHQgDAGAAAFIA7AAQAAgGgCgGQgCgGgEgFQgEgEgFgCQgGgEgHAAQgGAAgFAEg");
	this.shape_25.setTransform(227.5042,338.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMBAQgHgBgFgEQgGgDgDgFQgEgGAAgHIALAAQABAFADAEQACADAEACQAEADAEABIAIABQAQAAAHgJQAHgJAAgRIAAgNIAAAAQgEAJgIAFQgHAFgLAAQgKAAgIgDQgIgEgFgHQgFgGgCgIQgDgJAAgKQAAgJADgJQADgIAFgHQAGgGAHgEQAIgDAJAAQAGAAAEABIAJAEIAGAGIAFAHIAAAAIAAgQIAMAAIAABVQAAAKgDAIQgCAIgFAGQgFAGgIADQgHADgMAAQgGAAgGgCgAgNg0QgFADgEAFQgEAGgCAHQgBAGAAAIQAAAHABAGQACAGAEAFQAEAFAGADQAFAEAHAAQAIAAAFgEQAGgDAEgFQADgFACgGQACgGAAgHQAAgHgBgHQgCgHgEgFQgDgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_26.setTransform(217.525,340.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAFQAIAEAFAHQAFAIACAJQADAJgBAJIhGAAIABANQACAGAEAGQAEAFAFADQAGADAHAAQANAAAHgGQAHgHADgKIALAAQgEAQgJAIQgKAJgSAAQgKAAgIgEgAgLgjQgGACgDAEQgEAFgCAHQgDAGAAAFIA7AAQAAgGgCgGQgCgGgEgFQgEgEgFgCQgGgEgHAAQgGAAgFAEg");
	this.shape_27.setTransform(203.2042,338.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_28.setTransform(196.525,338.5481);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgEgDgDgFQgCgFAAgHQAAgKAEgFQAEgFAIgCQAHgEAIgBIARgCIAHgBIAFgBIACgFIABgGQAAgFgBgEQgCgEgEgCIgIgDIgIgBQgLABgHAFQgGAEgBAMIgLAAQABgIACgGQADgGAFgEQAFgDAHgDQAGgBAJAAIALABQAFABAFAEQAFADADAGQADAFAAAKIAAAwQAAAHAHAAIAEgBIAAAKIgEABIgDAAIgHgBIgFgEIgCgFIAAgHIgHAIQgDAEgDACQgFACgEACQgEABgHAAQgHAAgFgBgAARAAIgGAAIgOACIgNADQgHACgEAEQgEAEAAAGQAAAEACAEQACADADADIAGADIAIABQAGAAAFgBQAGgCAEgEQAFgEADgFQACgGAAgGIAAgPQgCACgCACg");
	this.shape_29.setTransform(188.75,338.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgJBRIgEAAIAAgJIADAAIADAAQAHAAAAgEQACgEAAgGIAAhnIAMAAIAABlIgBAKIgDAIQgDADgDACQgEACgFAAgAACg+IAAgSIAMAAIAAASg");
	this.shape_30.setTransform(181.425,338.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_31.setTransform(178.925,336.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXA/QgGgBgEgEQgFgDgCgFQgCgFAAgHQAAgKAEgFQAFgGAGgDQAIgDAJgBIARgCIAGgBIAEgCIADgEIABgFQAAgFgCgEQgCgEgDgCIgHgDIgJgBQgLAAgGAFQgIAFAAAMIgLAAQAAgIADgGQADgGAFgEQAFgEAGgCQAHgBAJAAIAKABQAHABAEADQAGAEACAFQAEAGAAAKIAAAwQgBAHAHAAIAEgBIAAAKIgEAAIgEAAIgHgBIgDgDIgCgFIgBgHIgGAIQgDAEgFACQgEACgEABQgEACgHAAQgHAAgFgCgAARAOIgGACIgNACIgPADQgGACgEADQgEAEAAAHQAAAEACAEQABADADACIAHAEIAIABQAGAAAFgCQAGgCAEgDQAFgEACgFQADgGAAgHIAAgPQgBACgDABgAAIguIAAgSIALAAIAAASgAgYguIAAgSIANAAIAAASg");
	this.shape_32.setTransform(172.85,337.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZApQgKgHgCgRIAMAAQAAALAIAGQAIAFAKAAIAJAAIAIgDQAEgCACgEQACgDAAgFQAAgEgBgDIgFgEIgGgDIgIgDIgOgDIgKgCIgIgFQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgCQAGgBAGAAIANABQAGADAEADQAFAEACAFQADAGABAIIgMAAQAAgFgCgEQgCgEgDgCIgIgFIgIgBIgIABIgHADQgDACgCADQgCADAAAEQAAAEACADIAFAEIAGAEIAGABIAOADIAKADQAFABADADQAEADACAFQADAEAAAGQAAAIgEAFQgDAFgFAEQgGADgGACIgNABQgQAAgKgIg");
	this.shape_33.setTransform(163.625,338.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAaBAIAAg6IgBgKQgBgFgCgEQgDgDgFgDQgEgCgHAAQgGAAgFADQgGACgDAEIgGAKQgCAFAAAHIAAA2IgMAAIAAh/IAMAAIAAAzIAAAAQADgIAJgFQAIgFAJAAQAJAAAHACQAHADAEAEQAEAFABAHQACAGAAAHIAAA8g");
	this.shape_34.setTransform(149.475,336.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgPAtQgIgEgGgGQgFgHgDgJQgDgJAAgKQAAgJADgJQADgJAFgGQAGgHAIgEQAIgEAKAAQAPAAAKAIQAKAIACAQIgLAAQgCgKgHgHQgGgFgLgBQgHAAgGAEQgHADgEAGQgEAGgCAGQgCAIAAAGQAAAIACAGQACAHAEAHQAEAFAHADQAGADAHAAQAFAAAFgBQAEgCAEgEQAEgEACgEQACgFABgGIALAAQgCARgKAJQgKAKgQAAQgKAAgIgEg");
	this.shape_35.setTransform(140.075,338.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAtQgIgEgGgGQgFgHgDgJQgDgJAAgKQAAgJADgJQADgJAFgGQAGgHAIgEQAJgEAJAAQALAAAIAEQAIAEAFAHQAGAGADAJQADAJAAAJQAAAKgDAJQgDAJgGAHQgFAGgIAEQgIAEgLAAQgJAAgJgEgAgNgjQgHADgEAGQgDAGgDAGQgCAIAAAGQAAAIACAGQADAHADAHQAEAFAHADQAGADAHAAQAIAAAGgDQAGgDAFgFQAEgHABgHQACgGAAgIQAAgGgCgIQgBgGgEgGQgFgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_36.setTransform(130.35,338.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAFQAIAEAFAHQAFAIACAJQADAJgBAJIhGAAIABANQACAGAEAGQAEAFAFADQAGADAHAAQANAAAHgGQAHgHADgKIALAAQgEAQgJAIQgKAJgSAAQgKAAgIgEgAgLgjQgGACgDAEQgEAFgCAHQgDAGAAAFIA7AAQAAgGgCgGQgCgGgEgFQgEgEgFgCQgGgEgHAAQgGAAgFAEg");
	this.shape_37.setTransform(115.8042,338.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_38.setTransform(109.125,338.5481);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgEgDgDgFQgCgFAAgHQAAgKAEgFQAEgFAIgCQAHgEAIgBIARgCIAHgBIAFgBIACgFIABgGQAAgFgBgEQgCgEgEgCIgIgDIgIgBQgLABgHAFQgGAEgBAMIgLAAQABgIACgGQADgGAFgEQAFgDAHgDQAGgBAIAAIAMABQAGABAFAEQAEADAEAGQACAFAAAKIAAAwQABAHAGAAIAEgBIAAAKIgEABIgDAAIgHgBIgFgEIgCgFIAAgHIgHAIQgDAEgDACQgFACgEACQgEABgHAAQgHAAgFgBgAAQAAIgEAAIgPACIgNADQgHACgEAEQgEAEAAAGQAAAEACAEQACADADADIAGADIAIABQAGAAAFgBQAGgCAFgEQAEgEADgFQACgGAAgGIAAgPQgBACgEACg");
	this.shape_39.setTransform(101.35,338.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgqBBIAAh+IALAAIAAASQAEgKAJgGQAJgFAKAAQALAAAHAEQAIAEAFAHQAGAHACAJQADAIAAAKQAAAKgDAIQgCAJgGAHQgFAHgIADQgHAEgLAAQgEAAgFgBQgFgBgFgDIgHgGQgDgEgCgFIgBAAIAAA0gAgOgzQgGADgEAGQgEAFgBAHQgCAHAAAIQAAAIACAHQACAGAEAFQAEAGAGADQAGAEAIAAQAIAAAGgEQAGgDADgGQAEgFACgGQABgHAAgIIgBgOQgCgHgEgGQgDgFgGgEQgGgDgIAAQgIAAgHADg");
	this.shape_40.setTransform(91.525,340.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSA9QgIgEgFgHQgGgGgDgJQgDgJAAgKQAAgKADgIQADgJAGgHQAFgGAIgEQAIgEAKAAQAKAAAJAEQAIAEAGAGQAFAHADAJQADAIAAAKQAAAKgDAJQgDAJgFAGQgGAHgIAEQgJAEgKAAQgKAAgIgEgAgNgTQgGADgFAGQgEAFgBAGQgCAHAAAIQAAAHACAHQABAHAEAGQAFAGAGADQAGADAHAAQAIAAAGgDQAHgDAEgGQADgGADgHQACgHAAgHQAAgIgCgHQgDgGgDgFQgEgGgHgDQgGgEgIAAQgHAAgGAEgAAKguIAAgSIAMAAIAAASgAgVguIAAgSIAMAAIAAASg");
	this.shape_41.setTransform(81.15,337.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAaBAIgkgyIgSAPIAAAjIgLAAIAAh/IALAAIAABPIAygsIAQAAIgnAiIApA6g");
	this.shape_42.setTransform(72.275,336.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgEgDgDgFQgCgFAAgHQAAgKAEgFQAFgFAGgCQAIgEAJgBIARgCIAGgBIAEgBIADgFIABgGQAAgFgCgEQgCgEgDgCIgHgDIgJgBQgLABgGAFQgIAEAAAMIgLAAQAAgIADgGQADgGAFgEQAFgDAGgDQAHgBAIAAIALABQAGABAGAEQAEADADAGQAEAFAAAKIAAAwQAAAHAGAAIAEgBIAAAKIgDABIgFAAIgHgBIgDgEIgCgFIgBgHIgGAIQgEAEgEACQgEACgEACQgEABgHAAQgHAAgFgBgAAQAAIgFAAIgNACIgPADQgGACgEAEQgEAEAAAGQAAAEACAEQABADADADIAHADIAIABQAGAAAFgBQAGgCAEgEQAFgEACgFQADgGAAgGIAAgPQgCACgDACg");
	this.shape_43.setTransform(57.75,338.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgMBAQgHgBgFgEQgGgDgDgFQgEgGAAgHIALAAQABAFADAEQACADAEACQAEADAEABIAIABQAQAAAHgJQAHgJAAgRIAAgNIAAAAQgEAJgIAFQgHAFgLAAQgKAAgIgDQgIgEgFgHQgFgGgCgIQgDgJAAgKQAAgJADgJQADgIAFgHQAGgGAHgEQAIgDAJAAQAGAAAEABIAJAEIAGAGIAFAHIAAAAIAAgQIAMAAIAABVQAAAKgDAIQgCAIgFAGQgFAGgIADQgHADgMAAQgGAAgGgCgAgNg0QgFADgEAFQgEAGgCAHQgBAGAAAIQAAAHABAGQACAGAEAFQAEAFAGADQAFAEAHAAQAIAAAFgEQAGgDAEgFQADgFACgGQACgGAAgHQAAgHgBgHQgCgHgEgFQgDgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_44.setTransform(47.625,340.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgEgDgDgFQgCgFAAgHQAAgKAEgFQAEgFAIgCQAHgEAIgBIARgCIAHgBIAFgBIACgFIABgGQAAgFgBgEQgCgEgEgCIgIgDIgIgBQgLABgHAFQgGAEgBAMIgLAAQABgIACgGQADgGAFgEQAFgDAHgDQAGgBAJAAIALABQAFABAFAEQAFADADAGQADAFAAAKIAAAwQAAAHAHAAIAEgBIAAAKIgEABIgDAAIgHgBIgFgEIgCgFIAAgHIgHAIQgDAEgDACQgFACgEACQgEABgHAAQgHAAgFgBgAARAAIgGAAIgOACIgNADQgHACgEAEQgEAEAAAGQAAAEACAEQACADADADIAGADIAIABQAGAAAFgBQAGgCAEgEQAFgEADgFQACgGAAgGIAAgPQgCACgCACg");
	this.shape_45.setTransform(38.45,338.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZApQgKgHgCgRIAMAAQAAALAIAGQAIAFAKAAIAJAAIAIgDQAEgCACgEQACgDAAgFQAAgEgBgDIgFgEIgGgDIgIgDIgOgDIgKgCIgIgFQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgCQAGgBAGAAIANABQAGADAEADQAFAEACAFQADAGABAIIgMAAQAAgFgCgEQgCgEgDgCIgIgFIgIgBIgIABIgHADQgDACgCADQgCADAAAEQAAAEACADIAFAEIAGAEIAGABIAOADIAKADQAFABADADQAEADACAFQADAEAAAGQAAAIgEAFQgDAFgFAEQgGADgGACIgNABQgQAAgKgIg");
	this.shape_46.setTransform(29.225,338.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgTA9QgHgDgGgHQgFgHgCgJQgDgIAAgLQAAgKADgHQACgJAFgHQAGgGAHgFQAIgDALAAIAJABIAJADQAFADADAEQADAEACAFIAAg2IAMAAIAACAIgLAAIAAgSIAAAAQgCAFgDADQgEAEgEADIgKAEIgJACQgLAAgIgFgAgOgTQgGAEgDAFQgEAGgCAHQgCAHAAAGQAAAIACAHQACAHAEAFQADAGAGADQAGAEAIAAQAIAAAGgEQAGgDAEgGQAEgFACgHQABgHAAgIIgBgNQgCgHgEgGQgEgFgGgEQgGgDgIAAQgIAAgGADg");
	this.shape_47.setTransform(19.575,336.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAFQAIAEAFAHQAFAIACAJQADAJgBAJIhGAAIABANQACAGAEAGQAEAFAFADQAGADAHAAQANAAAHgGQAHgHADgKIALAAQgEAQgJAIQgKAJgSAAQgKAAgIgEgAgLgjQgGACgDAEQgEAFgCAHQgDAGAAAFIA7AAQAAgGgCgGQgCgGgEgFQgEgEgFgCQgGgEgHAAQgGAAgFAEg");
	this.shape_48.setTransform(10.0542,338.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_49.setTransform(3.675,336.825);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgqBBIAAh+IALAAIAAASQAEgKAJgGQAJgFAKAAQALAAAHAEQAIAEAFAHQAGAHACAJQADAIAAAKQAAAKgDAIQgCAJgGAHQgFAHgIADQgHAEgLAAQgEAAgFgBQgFgBgFgDIgHgGQgDgEgCgFIgBAAIAAA0gAgOgzQgGADgEAGQgEAFgBAHQgCAHAAAIQAAAIACAHQACAGAEAFQAEAGAGADQAGAEAIAAQAIAAAGgEQAGgDADgGQAEgFACgGQABgHAAgIIgBgOQgCgHgEgGQgDgFgGgEQgGgDgIAAQgIAAgHADg");
	this.shape_50.setTransform(242.425,316.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgEgDgDgFQgCgFAAgHQAAgJAEgGQAFgGAGgCQAIgCAIgBIARgDIAHgBIAEgCIADgDIABgHQAAgFgBgEQgCgEgEgCIgIgDIgIgBQgLAAgHAGQgGAEgBAMIgLAAQABgIACgGQADgGAFgDQAFgFAHgCQAHgBAHAAIAMABQAGABAFAEQAFADADAGQACAFAAAKIAAAwQABAHAGAAIAEgBIAAAKIgDABIgFAAIgGgCIgFgDIgCgFIAAgGIgHAIQgCADgFACQgDADgFABQgEABgHAAQgGAAgGgBgAAQgBIgEABIgPACIgNADQgHACgEAEQgEADAAAIQAAAEACADQABADAEACIAGAFIAIABQAGAAAFgCQAGgDAFgDQAEgEADgFQACgGAAgGIAAgOQgBABgEABg");
	this.shape_51.setTransform(232.65,315.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAaBAIgkgyIgSAPIAAAjIgLAAIAAh/IALAAIAABPIAygsIAQAAIgnAiIApA6g");
	this.shape_52.setTransform(223.875,313.575);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgZApQgKgIgCgRIAMAAQAAAMAIAGQAIAFAKABIAJgBIAIgEQAEgCACgDQACgDAAgFQAAgEgBgDIgFgEIgGgEIgIgCIgOgDIgKgDIgIgEQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgCQAGgBAGAAIANABQAGACAEAFQAFADACAGQADAFABAIIgMAAQAAgFgCgFQgCgDgDgCIgIgFIgIgBIgIABIgHADQgDACgCADQgCADAAAFQAAADACADIAFAFIAGACIAGACIAOAEIAKACQAFABADADQAEADACAFQADAEAAAHQAAAHgEAFQgDAFgFAEQgGADgGACIgNABQgQAAgKgIg");
	this.shape_53.setTransform(214.425,315.35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_54.setTransform(205.275,315.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgTAtQgGgCgEgFQgEgEgCgHQgCgGAAgIIAAg8IAMAAIAAA8QAAAMAGAHQAFAGAOAAQAGAAAFgDQAFgDAEgFQADgFACgHQABgHAAgHIAAgwIAMAAIAABcIgLAAIAAgQIAAAAQgEAJgJAFQgJAFgJAAQgJAAgGgDg");
	this.shape_55.setTransform(195.625,315.475);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAaBAIgkgyIgSAPIAAAjIgLAAIAAh/IALAAIAABPIAygsIAQAAIgnAiIApA6g");
	this.shape_56.setTransform(186.925,313.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAaBAIAAg6IgBgKQgBgFgCgEQgDgDgFgDQgEgCgHAAQgGAAgFADQgGACgDAEIgGAKQgCAFAAAHIAAA2IgMAAIAAh/IAMAAIAAAzIAAAAQADgIAJgFQAIgFAJAAQAJAAAHACQAHADAEAEQAEAFABAHQACAGAAAHIAAA8g");
	this.shape_57.setTransform(171.975,313.575);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgPAtQgIgDgGgIQgFgGgDgJQgDgJAAgKQAAgJADgJQADgJAFgGQAGgHAIgEQAIgEAKAAQAPAAAKAIQAKAIACAQIgLAAQgCgLgHgFQgGgHgLAAQgHABgGADQgHADgEAGQgEAFgCAIQgCAGAAAHQAAAHACAHQACAIAEAFQAEAGAHADQAGADAHABQAFAAAFgCQAEgDAEgDQAEgEACgEQACgFABgGIALAAQgCARgKAKQgKAJgQAAQgKAAgIgEg");
	this.shape_58.setTransform(162.575,315.35);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgSAtQgIgDgGgIQgFgGgDgJQgDgJAAgKQAAgJADgJQADgJAFgGQAGgHAIgEQAJgEAJAAQALAAAIAEQAIAEAFAHQAGAGADAJQADAJAAAJQAAAKgDAJQgDAJgGAGQgFAIgIADQgIAEgLAAQgJAAgJgEgAgNgjQgHADgEAGQgDAFgDAIQgCAGAAAHQAAAHACAHQADAIADAFQAEAGAHADQAGADAHABQAIgBAGgDQAGgDAFgGQAEgFABgIQACgHAAgHQAAgHgCgGQgBgIgEgFQgFgGgGgDQgGgDgIgBQgHABgGADg");
	this.shape_59.setTransform(152.85,315.35);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgBA5QgFgFAAgMIAAg+IgQAAIAAgKIAQAAIAAgcIALAAIAAAcIASAAIAAAKIgSAAIAAA+QAAAFABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgEg");
	this.shape_60.setTransform(139.975,314);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgSAtQgIgDgFgIQgFgGgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgIAIgEQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAKgBAIIhGAAIABANQACAGAEAFQAEAGAFADQAGADAHABQANgBAHgGQAHgHADgKIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAEQgEAFgCAGQgDAHAAAGIA7AAQAAgHgCgGQgCgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_61.setTransform(133.0042,315.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAaBAIAAg6IgBgKQgBgFgCgEQgDgDgFgDQgEgCgHAAQgGAAgFADQgGACgDAEIgGAKQgCAFAAAHIAAA2IgMAAIAAh/IAMAAIAAAzIAAAAQADgIAJgFQAIgFAJAAQAJAAAHACQAHADAEAEQAEAFABAHQACAGAAAHIAAA8g");
	this.shape_62.setTransform(123.425,313.575);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_63.setTransform(113.775,315.225);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgSAtQgIgDgFgIQgFgGgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgIAIgEQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAKgBAIIhGAAIABANQACAGAEAFQAEAGAFADQAGADAHABQANgBAHgGQAHgHADgKIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAEQgEAFgCAGQgDAHAAAGIA7AAQAAgHgCgGQgCgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_64.setTransform(104.4042,315.35);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_65.setTransform(97.725,315.2981);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgFgDgCgFQgCgFAAgHQAAgJAEgGQAEgGAIgCQAGgCAKgBIARgDIAGgBIAFgCIACgDIABgHQAAgFgCgEQgCgEgDgCIgHgDIgJgBQgLAAgGAGQgIAEAAAMIgLAAQAAgIADgGQADgGAFgDQAFgFAGgCQAIgBAIAAIAKABQAHABAEAEQAGADACAGQADAFABAKIAAAwQgBAHAHAAIAEgBIAAAKIgEABIgDAAIgIgCIgDgDIgDgFIAAgGIgGAIQgEADgDACQgEADgFABQgEABgHAAQgGAAgGgBgAARgBIgGABIgNACIgPADQgGACgEAEQgEADAAAIQAAAEACADQABADADACIAHAFIAIABQAHAAAEgCQAGgDAEgDQAFgEACgFQADgGAAgGIAAgOQgBABgDABg");
	this.shape_66.setTransform(89.95,315.35);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgHBAIAAhSIgQAAIAAgKIAQAAIAAgIIABgLQAAgFADgEQACgDAEgCQAFgCAGAAIAFAAIAFAAIAAAKIgEAAIgFgBQgEAAgCACQgDABgBADQgBACgBADIAAAHIAAAIIASAAIAAAKIgSAAIAABSg");
	this.shape_67.setTransform(82.9,313.575);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_68.setTransform(78.125,315.2981);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgSAtQgIgDgFgIQgFgGgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgIAIgEQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAKgBAIIhGAAIABANQACAGAEAFQAEAGAFADQAGADAHABQANgBAHgGQAHgHADgKIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAEQgEAFgCAGQgDAHAAAGIA7AAQAAgHgCgGQgCgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_69.setTransform(70.2042,315.35);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgFAvIgjhdIAMAAIAcBRIABAAIAdhRIALAAIgiBdg");
	this.shape_70.setTransform(56.325,315.35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgFgDgCgFQgCgFAAgHQAAgJAEgGQAFgGAGgCQAIgCAJgBIARgDIAGgBIAFgCIACgDIABgHQAAgFgCgEQgCgEgDgCIgHgDIgJgBQgLAAgGAGQgIAEAAAMIgLAAQAAgIADgGQADgGAFgDQAFgFAGgCQAHgBAJAAIAKABQAHABAEAEQAGADACAGQAEAFAAAKIAAAwQgBAHAHAAIAEgBIAAAKIgEABIgEAAIgHgCIgDgDIgCgFIgBgGIgGAIQgDADgFACQgEADgEABQgEABgHAAQgHAAgFgBgAARgBIgGABIgNACIgPADQgGACgEAEQgEADAAAIQAAAEACADQABADADACIAHAFIAIABQAGAAAFgCQAGgDAEgDQAFgEACgFQADgGAAgGIAAgOQgBABgDABg");
	this.shape_71.setTransform(47.75,315.35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgqBBIAAh+IALAAIAAASQAEgKAJgGQAJgFAKAAQALAAAHAEQAIAEAFAHQAGAHACAJQADAIAAAKQAAAKgDAIQgCAJgGAHQgFAHgIADQgHAEgLAAQgEAAgFgBQgFgBgFgDIgHgGQgDgEgCgFIgBAAIAAA0gAgOgzQgGADgEAGQgEAFgBAHQgCAHAAAIQAAAIACAHQACAGAEAFQAEAGAGADQAGAEAIAAQAIAAAGgEQAGgDADgGQAEgFACgGQABgHAAgIIgBgOQgCgHgEgGQgDgFgGgEQgGgDgIAAQgIAAgHADg");
	this.shape_72.setTransform(32.925,316.925);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_73.setTransform(25.925,313.575);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgXA/QgGgBgEgEQgFgDgCgFQgCgFAAgHQAAgKAEgFQAFgGAHgDQAHgDAJgBIARgCIAGgBIAFgCIACgEIABgFQAAgFgCgEQgCgEgDgCIgHgDIgJgBQgLAAgGAFQgIAFAAAMIgLAAQAAgIADgGQADgGAFgEQAFgEAGgCQAHgBAJAAIAKABQAHABAEADQAGAEACAFQAEAGAAAKIAAAwQgBAHAHAAIAEgBIAAAKIgEAAIgEAAIgHgBIgDgDIgCgFIgBgHIgGAIQgDAEgFACQgEACgEABQgEACgHAAQgHAAgFgCgAARAOIgGACIgNACIgPADQgGACgEADQgEAEAAAHQAAAEACAEQABADADACIAHAEIAIABQAGAAAFgCQAGgCAEgDQAFgEACgFQADgGAAgHIAAgPQgBACgDABgAAIguIAAgSIALAAIAAASgAgYguIAAgSIANAAIAAASg");
	this.shape_74.setTransform(19.85,313.775);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgJBRIgEAAIAAgJIADAAIADAAQAHAAAAgEQACgEAAgGIAAhnIAMAAIAABlIgBAKIgDAIQgDADgDACQgEACgFAAgAACg+IAAgSIAMAAIAAASg");
	this.shape_75.setTransform(12.525,315.275);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAaBAIAAg6IgBgKQgBgFgCgEQgDgDgFgDQgEgCgHAAQgGAAgFADQgGACgDAEIgGAKQgCAFAAAHIAAA2IgMAAIAAh/IAMAAIAAAzIAAAAQADgIAJgFQAIgFAJAAQAJAAAHACQAHADAEAEQAEAFABAHQACAGAAAHIAAA8g");
	this.shape_76.setTransform(6.825,313.575);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgTA+QgHgEgGgHQgFgHgCgIQgDgKAAgJQAAgKADgIQACgJAFgHQAGgGAHgEQAIgFALAAIAJABIAJAFQAFACADAEQADAEACAFIAAg2IAMAAIAACAIgLAAIAAgRIAAAAQgCAEgDAEQgEAEgEACIgKAEIgJACQgLgBgIgDgAgOgSQgGADgDAGQgEAFgCAGQgCAHAAAIQAAAHACAHQACAHAEAGQADAFAGAEQAGADAIAAQAIAAAGgDQAGgEAEgFQAEgGACgHQABgHAAgHQAAgIgBgHQgCgGgEgFQgEgGgGgDQgGgEgIAAQgIAAgGAEg");
	this.shape_77.setTransform(274.175,290.45);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAGQgDAGAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_78.setTransform(264.6542,292.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgHAAgFADQgFACgDAFQgDAFgBAGQgBAGgBAGIAAA0IgJAAIAAg+IgBgJQgBgEgDgEQgCgDgEgBQgDgCgGAAQgHAAgGACQgFADgEAFQgDAEgBAGQgCAHAAAHIAAAzIgLAAIAAhcIALAAIAAAPIAAAAQAEgIAIgFQAHgFALAAQAKAAAHAFQAHAEACAJQAEgJAIgEQAIgFAJAAQAfAAAAAhIAAA+g");
	this.shape_79.setTransform(252.45,291.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGABIAJgBIAAAKIgFAAIgFAAQgLAAgDgFg");
	this.shape_80.setTransform(237.075,290.75);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgMBAQgHgBgFgEQgGgDgDgFQgEgGAAgHIALAAQABAFADAEQACADAEACQAEADAEABIAIABQAQAAAHgJQAHgJAAgRIAAgNIAAAAQgEAJgIAFQgHAFgLAAQgKAAgIgDQgIgEgFgHQgFgGgCgIQgDgJAAgKQAAgJADgJQADgIAFgHQAGgGAHgEQAIgDAJAAQAGAAAEABIAJAEIAGAGIAFAHIAAAAIAAgQIAMAAIAABVQAAAKgDAIQgCAIgFAGQgFAGgIADQgHADgMAAQgGAAgGgCgAgNg0QgFADgEAFQgEAGgCAHQgBAGAAAIQAAAHABAGQACAGAEAFQAEAFAGADQAFAEAHAAQAIAAAFgEQAGgDAEgFQADgFACgGQACgGAAgHQAAgHgBgHQgCgHgEgFQgDgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_81.setTransform(229.425,293.825);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_82.setTransform(223.025,290.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgTA+QgHgEgGgHQgFgHgCgIQgDgKAAgJQAAgKADgIQACgJAFgHQAGgGAHgEQAIgFALAAIAJABIAJAFQAFACADAEQADAEACAFIAAg2IAMAAIAACAIgLAAIAAgRIAAAAQgCAEgDAEQgEAEgEACIgKAEIgJACQgLgBgIgDgAgOgSQgGADgDAGQgEAFgCAGQgCAHAAAIQAAAHACAHQACAHAEAGQADAFAGAEQAGADAIAAQAIAAAGgDQAGgEAEgFQAEgGACgHQABgHAAgHIgBgPQgCgGgEgFQgEgGgGgDQgGgEgIAAQgIAAgGAEg");
	this.shape_83.setTransform(216.025,290.45);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_84.setTransform(209.425,290.325);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGABIAJgBIAAAKIgFAAIgFAAQgLAAgDgFg");
	this.shape_85.setTransform(204.875,290.75);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgHAAgGADQgEACgDAFQgDAFgBAGQgCAGABAGIAAA0IgKAAIAAg+IgCgJQgBgEgCgEQgCgDgEgBQgEgCgFAAQgIAAgFACQgFADgEAFQgCAEgDAGQgBAHAAAHIAAAzIgLAAIAAhcIAKAAIAAAPIABAAQAEgIAIgFQAHgFALAAQAJAAAIAFQAHAEACAJQAEgJAIgEQAIgFAKAAQAeAAAAAhIAAA+g");
	this.shape_86.setTransform(195,291.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgXAvQgGgBgEgDQgFgDgCgGQgCgFAAgHQAAgJAEgGQAEgFAIgCQAGgDAKgCIARgCIAGgBIAFgBIACgFIABgFQAAgGgCgEQgCgDgDgDQgDgCgEgBIgJAAQgLAAgGAEQgIAGAAALIgLAAQAAgIADgGQADgGAFgEQAFgDAGgCQAIgCAIAAIAKABQAHABAEADQAGAEACAFQADAHABAJIAAAwQgBAHAHAAIAEgBIAAAKIgEAAIgDAAIgIgBIgDgDIgDgFIAAgHIgGAIQgEAEgDACQgEADgFAAQgEACgHAAQgGAAgGgCgAARAAIgGAAIgNACIgPADQgGACgEADQgEAEAAAHQAAAFACADQABAEADACIAHADIAIABQAHAAAEgCQAGgCAEgDQAFgEACgFQADgFAAgIIAAgNQgBACgDABg");
	this.shape_87.setTransform(183.1,292.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgZAqQgKgJgCgQIAMAAQAAALAIAGQAIAGAKgBIAJAAIAIgEQAEgCACgDQACgDAAgFQAAgEgBgDIgFgFIgGgCIgIgDIgOgDIgKgCIgIgFQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgBQAGgCAGAAIANACQAGACAEADQAFAEACAFQADAGABAIIgMAAQAAgGgCgDQgCgEgDgDIgIgDIgIgBIgIAAIgHADQgDACgCADQgCADAAAEQAAAEACADIAFAFIAGACIAGACIAOAEIAKACQAFABADADQAEADACAEQADAFAAAGQAAAIgEAFQgDAGgFADQgGADgGABIgNACQgQAAgKgHg");
	this.shape_88.setTransform(173.875,292.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAaBAIAAg6IgBgKQgBgFgCgEQgDgDgFgDQgEgCgHAAQgGAAgFADQgGACgDAEIgGAKQgCAFAAAHIAAA2IgMAAIAAh/IAMAAIAAAzIAAAAQADgIAJgFQAIgFAJAAQAJAAAHACQAHADAEAEQAEAFABAHQACAGAAAHIAAA8g");
	this.shape_89.setTransform(159.725,290.325);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgPAtQgIgEgGgGQgFgHgDgJQgDgJAAgKQAAgJADgJQADgJAFgHQAGgGAIgEQAIgEAKAAQAPAAAKAIQAKAIACAQIgLAAQgCgKgHgHQgGgFgLAAQgHgBgGAEQgHADgEAGQgEAGgCAGQgCAIAAAGQAAAHACAIQACAHAEAFQAEAGAHADQAGADAHAAQAFAAAFgCQAEgCAEgDQAEgDACgFQACgFABgGIALAAQgCARgKAJQgKAKgQAAQgKAAgIgEg");
	this.shape_90.setTransform(150.325,292.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgSAtQgIgEgGgGQgFgHgDgJQgDgJAAgKQAAgJADgJQADgJAFgHQAGgGAIgEQAIgEAKAAQALAAAIAEQAIAEAFAGQAGAHADAJQADAJAAAJQAAAKgDAJQgDAJgGAHQgFAGgIAEQgIAEgLAAQgKAAgIgEgAgNgjQgHADgEAGQgEAGgCAGQgCAIAAAGQAAAHACAIQACAHAEAFQAEAGAHADQAGADAHAAQAIAAAGgDQAGgDAEgGQAFgFABgHQACgIAAgHQAAgGgCgIQgBgGgFgGQgEgGgGgDQgGgEgIABQgHgBgGAEg");
	this.shape_91.setTransform(140.6,292.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGABIAJgBIAAAKIgFAAIgFAAQgLAAgDgFg");
	this.shape_92.setTransform(127.725,290.75);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAGQgDAGAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_93.setTransform(120.7542,292.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgZAqQgKgJgCgQIAMAAQAAALAIAGQAIAGAKgBIAJAAIAIgEQAEgCACgDQACgDAAgFQAAgEgBgDIgFgFIgGgCIgIgDIgOgDIgKgCIgIgFQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgBQAGgCAGAAIANACQAGACAEADQAFAEACAFQADAGABAIIgMAAQAAgGgCgDQgCgEgDgDIgIgDIgIgBIgIAAIgHADQgDACgCADQgCADAAAEQAAAEACADIAFAFIAGACIAGACIAOAEIAKACQAFABADADQAEADACAEQADAFAAAGQAAAIgEAFQgDAGgFADQgGADgGABIgNACQgQAAgKgHg");
	this.shape_94.setTransform(111.675,292.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_95.setTransform(105.725,290.325);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_96.setTransform(101.775,292.0481);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgqBBIAAh+IALAAIAAASQAEgKAJgGQAJgFAKAAQALAAAHAEQAIAEAFAHQAGAHACAJQADAIAAAKQAAAKgDAIQgCAJgGAHQgFAHgIADQgHAEgLAAQgEAAgFgBQgFgBgFgDIgHgGQgDgEgCgFIgBAAIAAA0gAgOgzQgGADgEAGQgEAFgBAHQgCAHAAAIQAAAIACAHQACAGAEAFQAEAGAGADQAGAEAIAAQAIAAAGgEQAGgDADgGQAEgFACgGQABgHAAgIIgBgOQgCgHgEgGQgDgFgGgEQgGgDgIAAQgIAAgHADg");
	this.shape_97.setTransform(93.475,293.675);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgZAqQgKgJgCgQIAMAAQAAALAIAGQAIAGAKgBIAJAAIAIgEQAEgCACgDQACgDAAgFQAAgEgBgDIgFgFIgGgCIgIgDIgOgDIgKgCIgIgFQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgBQAGgCAGAAIANACQAGACAEADQAFAEACAFQADAGABAIIgMAAQAAgGgCgDQgCgEgDgDIgIgDIgIgBIgIAAIgHADQgDACgCADQgCADAAAEQAAAEACADIAFAFIAGACIAGACIAOAEIAKACQAFABADADQAEADACAEQADAFAAAGQAAAIgEAFQgDAGgFADQgGADgGABIgNACQgQAAgKgHg");
	this.shape_98.setTransform(83.775,292.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgMBAQgHgBgFgEQgGgDgDgFQgEgGAAgHIALAAQABAFADAEQACADAEACQAEADAEABIAIABQAQAAAHgJQAHgJAAgRIAAgNIAAAAQgEAJgIAFQgHAFgLAAQgKAAgIgDQgIgEgFgHQgFgGgCgIQgDgJAAgKQAAgJADgJQADgIAFgHQAGgGAHgEQAIgDAJAAQAGAAAEABIAJAEIAGAGIAFAHIAAAAIAAgQIAMAAIAABVQAAAKgDAIQgCAIgFAGQgFAGgIADQgHADgMAAQgGAAgGgCgAgNg0QgFADgEAFQgEAGgCAHQgBAGAAAIQAAAHABAGQACAGAEAFQAEAFAGADQAFAEAHAAQAIAAAFgEQAGgDAEgFQADgFACgGQACgGAAgHQAAgHgBgHQgCgHgEgFQgDgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_99.setTransform(74.225,293.825);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_100.setTransform(64.625,291.975);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_101.setTransform(58.175,290.325);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_102.setTransform(51.675,291.975);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgJBRIgEAAIAAgJIADAAIADAAQAHAAAAgEQACgEAAgGIAAhnIAMAAIAABlIgBAKIgDAIQgDADgDACQgEACgFAAgAACg+IAAgSIAMAAIAAASg");
	this.shape_103.setTransform(44.425,292.025);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_104.setTransform(41.925,290.325);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgXA/QgGgBgEgEQgFgDgCgFQgCgFAAgHQAAgKAEgFQAEgGAIgDQAGgDAKgBIARgCIAGgBIAFgCIACgEIABgFQAAgFgCgEQgCgEgDgCQgDgCgEgBIgJgBQgLAAgGAFQgIAFAAAMIgLAAQAAgIADgGQADgGAFgEQAFgEAHgCQAHgBAIAAIAKABQAGABAFADQAGAEACAFQADAGAAAKIAAAwQAAAHAHAAIAEgBIAAAKIgEAAIgDAAIgHgBIgEgDIgDgFIAAgHIgGAIQgEAEgDACQgFACgEABQgEACgHAAQgGAAgGgCgAARAOIgGACIgOACIgNADQgHACgEADQgEAEAAAHQAAAEACAEQACADACACIAHAEIAIABQAHAAAEgCQAGgCAEgDQAFgEADgFQACgGAAgHIAAgPQgBACgDABgAAIguIAAgSIALAAIAAASgAgYguIAAgSIANAAIAAASg");
	this.shape_105.setTransform(35.85,290.525);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgZAqQgKgJgCgQIAMAAQAAALAIAGQAIAGAKgBIAJAAIAIgEQAEgCACgDQACgDAAgFQAAgEgBgDIgFgFIgGgCIgIgDIgOgDIgKgCIgIgFQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgBQAGgCAGAAIANACQAGACAEADQAFAEACAFQADAGABAIIgMAAQAAgGgCgDQgCgEgDgDIgIgDIgIgBIgIAAIgHADQgDACgCADQgCADAAAEQAAAEACADIAFAFIAGACIAGACIAOAEIAKACQAFABADADQAEADACAEQADAFAAAGQAAAIgEAFQgDAGgFADQgGADgGABIgNACQgQAAgKgHg");
	this.shape_106.setTransform(26.625,292.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_107.setTransform(20.025,292.0481);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgSA9QgIgEgGgHQgFgGgDgJQgDgJAAgKQAAgKADgIQADgJAFgHQAGgGAIgEQAJgEAJAAQAKAAAJAEQAIAEAGAGQAFAHADAJQADAIAAAKQAAAKgDAJQgDAJgFAGQgGAHgIAEQgJAEgKAAQgJAAgJgEgAgNgTQgGADgFAGQgDAFgCAGQgDAHAAAIQAAAHADAHQACAHADAGQAFAGAGADQAGADAHAAQAIAAAGgDQAGgDAFgGQADgGACgHQACgHABgHQgBgIgCgHQgCgGgDgFQgFgGgGgDQgGgEgIAAQgHAAgGAEgAAKguIAAgSIAMAAIAAASgAgVguIAAgSIANAAIAAASg");
	this.shape_108.setTransform(11.65,290.525);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgHBAIAAhSIgQAAIAAgKIAQAAIAAgIIABgLQAAgFADgEQACgDAEgCQAFgCAGAAIAFAAIAFAAIAAAKIgEAAIgFgBQgEAAgDACQgCABgBADQgCACABADIAAAHIAAAIIASAAIAAAKIgSAAIAABSg");
	this.shape_109.setTransform(4.5,290.325);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgFgDgCgFQgCgFAAgHQAAgKAEgFQAFgFAHgCQAHgEAJgBIARgCIAGgBIAFgBIACgFIABgGQAAgFgCgEQgCgEgDgCIgHgDIgJgBQgLABgGAFQgIAEAAAMIgLAAQAAgIADgGQADgGAFgEQAFgDAGgDQAHgBAJAAIAKABQAHABAEAEQAGADACAGQAEAFAAAKIAAAwQgBAHAHAAIAEgBIAAAKIgEABIgEAAIgHgBIgDgEIgCgFIgBgHIgGAIQgDAEgFACQgEACgEACQgEABgHAAQgHAAgFgBgAARAAIgGAAIgNACIgPADQgGACgEAEQgEAEAAAGQAAAEACAEQABADADADIAHADIAIABQAGAAAFgBQAGgCAEgEQAFgEACgFQADgGAAgGIAAgPQgBACgDACg");
	this.shape_110.setTransform(289.85,268.85);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_111.setTransform(282.675,268.7981);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAFQAIAEAFAHQAFAIACAJQADAJgBAJIhGAAIABANQACAGAEAGQAEAFAFADQAGADAHAAQANAAAHgGQAHgHADgKIALAAQgEAQgJAIQgKAJgSAAQgKAAgIgEgAgLgjQgGACgDAEQgEAFgCAHQgDAGAAAFIA7AAQAAgGgCgGQgCgGgEgFQgEgEgFgCQgGgEgHAAQgGAAgFAEg");
	this.shape_112.setTransform(274.7542,268.85);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgIAAgEADQgFACgDAFQgDAFgBAGQgCAGAAAGIAAA0IgKAAIAAg+IgBgJQgBgEgCgEQgCgDgEgBQgDgCgGAAQgHAAgFACQgGADgDAFQgEAEgCAGQgBAHAAAHIAAAzIgLAAIAAhcIALAAIAAAPIAAAAQAFgIAGgFQAIgFALAAQAJAAAIAFQAGAEADAJQAEgJAIgEQAIgFAJAAQAfAAAAAhIAAA+g");
	this.shape_113.setTransform(262.55,268.725);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_114.setTransform(253.425,267.075);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAdAvIgdgnIgcAnIgOAAIAkgwIghgsIAOAAIAZAjIAagjIAOAAIghAsIAkAwg");
	this.shape_115.setTransform(247.425,268.85);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgEgDgDgFQgCgFAAgHQAAgKAEgFQAEgFAIgCQAHgEAIgBIARgCIAHgBIAFgBIACgFIABgGQAAgFgBgEQgCgEgEgCIgIgDIgIgBQgLABgHAFQgGAEgBAMIgLAAQABgIACgGQADgGAFgEQAFgDAHgDQAGgBAJAAIALABQAFABAFAEQAFADADAGQADAFAAAKIAAAwQAAAHAHAAIAEgBIAAAKIgEABIgDAAIgHgBIgFgEIgCgFIAAgHIgHAIQgDAEgDACQgFACgEACQgEABgHAAQgHAAgFgBgAARAAIgGAAIgOACIgNADQgHACgEAEQgEAEAAAGQAAAEACAEQACADADADIAGADIAIABQAGAAAFgBQAGgCAEgEQAFgEADgFQACgGAAgGIAAgPQgCACgCACg");
	this.shape_116.setTransform(238.7,268.85);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgHAAgFADQgFACgDAFQgDAFgBAGQgBAGgBAGIAAA0IgJAAIAAg+IgBgJQgBgEgDgEQgCgDgEgBQgDgCgGAAQgHAAgGACQgFADgEAFQgCAEgCAGQgCAHAAAHIAAAzIgLAAIAAhcIALAAIAAAPIAAAAQAEgIAIgFQAHgFALAAQAKAAAHAFQAHAEACAJQAEgJAIgEQAIgFAJAAQAfAAAAAhIAAA+g");
	this.shape_117.setTransform(226.35,268.725);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgFg");
	this.shape_118.setTransform(210.975,267.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgFg");
	this.shape_119.setTransform(205.675,267.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgFgDgCgFQgCgFAAgHQAAgKAEgFQAEgFAIgCQAGgEAKgBIARgCIAGgBIAFgBIACgFIABgGQAAgFgCgEQgCgEgDgCIgHgDIgJgBQgLABgGAFQgIAEAAAMIgLAAQAAgIADgGQADgGAFgEQAFgDAGgDQAIgBAIAAIAKABQAHABAEAEQAGADACAGQADAFABAKIAAAwQgBAHAHAAIAEgBIAAAKIgEABIgDAAIgIgBIgDgEIgDgFIAAgHIgGAIQgEAEgDACQgEACgFACQgEABgHAAQgGAAgGgBgAARAAIgGAAIgNACIgPADQgGACgEAEQgEAEAAAGQAAAEACAEQABADADADIAHADIAIABQAHAAAEgBQAGgCAEgEQAFgEACgFQADgGAAgGIAAgPQgBACgDACg");
	this.shape_120.setTransform(198.85,268.85);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgFg");
	this.shape_121.setTransform(186.075,267.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_122.setTransform(182.025,267.075);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_123.setTransform(178.075,268.7981);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgEgDgDgFQgCgFAAgHQAAgKAEgFQAEgFAIgCQAHgEAIgBIARgCIAHgBIAFgBIACgFIABgGQAAgFgBgEQgCgEgEgCIgIgDIgIgBQgLABgHAFQgGAEgBAMIgLAAQABgIACgGQADgGAFgEQAFgDAHgDQAGgBAJAAIALABQAFABAFAEQAFADADAGQADAFAAAKIAAAwQAAAHAHAAIAEgBIAAAKIgEABIgDAAIgHgBIgFgEIgCgFIAAgHIgHAIQgDAEgDACQgFACgEACQgEABgHAAQgHAAgFgBgAARAAIgGAAIgOACIgNADQgHACgEAEQgEAEAAAGQAAAEACAEQACADADADIAGADIAIABQAGAAAFgBQAGgCAEgEQAFgEADgFQACgGAAgGIAAgPQgCACgCACg");
	this.shape_124.setTransform(170.3,268.85);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgFAvIgjhcIAMAAIAcBQIABAAIAdhQIALAAIgiBcg");
	this.shape_125.setTransform(161.275,268.85);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgZApQgKgHgCgRIAMAAQAAALAIAGQAIAFAKAAIAJAAIAIgDQAEgCACgEQACgDAAgFQAAgEgBgDIgFgEIgGgDIgIgDIgOgDIgKgCIgIgFQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgCQAGgBAGAAIANABQAGADAEADQAFAEACAFQADAGABAIIgMAAQAAgFgCgEQgCgEgDgCIgIgFIgIgBIgIABIgHADQgDACgCADQgCADAAAEQAAAEACADIAFAEIAGAEIAGABIAOADIAKADQAFABADADQAEADACAFQADAEAAAGQAAAIgEAFQgDAFgFAEQgGADgGACIgNABQgQAAgKgIg");
	this.shape_126.setTransform(147.775,268.85);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgTAtQgGgCgEgFQgEgEgCgHQgCgGAAgIIAAg8IAMAAIAAA8QAAAMAGAHQAFAGAOAAQAGAAAFgDQAFgDAEgFQADgFACgHQABgHAAgHIAAgwIAMAAIAABcIgLAAIAAgQIAAAAQgEAJgJAFQgJAFgJAAQgJAAgGgDg");
	this.shape_127.setTransform(138.625,268.975);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAaBAIgkgyIgSAPIAAAjIgLAAIAAh/IALAAIAABPIAygsIAQAAIgnAiIApA6g");
	this.shape_128.setTransform(129.925,267.075);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgSAtQgIgEgGgGQgFgHgDgJQgDgJAAgKQAAgJADgJQADgJAFgGQAGgHAIgEQAJgEAJAAQALAAAIAEQAIAEAFAHQAGAGADAJQADAJAAAJQAAAKgDAJQgDAJgGAHQgFAGgIAEQgIAEgLAAQgJAAgJgEgAgNgjQgHADgDAGQgEAGgDAGQgCAIAAAGQAAAIACAGQADAHAEAHQADAFAHADQAGADAHAAQAIAAAGgDQAGgDAEgFQAFgHABgHQACgGAAgIQAAgGgCgIQgBgGgFgGQgEgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_129.setTransform(119.8,268.85);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgHBAIAAhSIgQAAIAAgKIAQAAIAAgIIABgLQABgFADgEQACgDADgCQAEgCAIAAIAEAAIAFAAIAAAKIgFAAIgDgBQgFAAgDACQgCABgBADQgBACAAADIAAAHIAAAIIASAAIAAAKIgSAAIAABSg");
	this.shape_130.setTransform(112.65,267.075);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgFg");
	this.shape_131.setTransform(102.275,267.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_132.setTransform(97.575,268.7981);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgXBGQgGgBgEgEQgFgDgCgFQgCgFAAgHQAAgKAEgFQAFgGAGgDQAHgDAKgBIAQgCIAHgBIAEgCIADgEIABgGQAAgEgCgEQgBgEgEgCIgIgDIgIgBQgLAAgGAFQgIAFAAALIgLAAQABgHACgGQADgGAFgEQAFgEAGgCQAIgBAHAAIALABQAGABAGADQAEAEAEAFQADAGAAAJIAAAxQAAAHAGAAIAEgBIAAAKIgDAAIgFAAIgHgBIgDgDIgCgFIgBgHIgHAIQgCAEgFACQgDACgFABQgEACgHAAQgGAAgGgCgAAQAVIgEACIgOACIgPADQgGACgEADQgEAEAAAHQAAAEACAEQACADACACIAHAEIAIABQAGAAAFgCQAGgCAFgDQAEgEACgFQADgGAAgHIAAgPQgCACgDABgAgJgiQgDgBgDgDIgEgGQgCgEABgEQgBgEACgDIAEgGIAGgEQAEgCAEAAIAGACIAHAEIADAGQACADAAAEQAAAEgCAEIgDAGQgDADgEABQgDACgDAAQgEAAgEgCgAgKg8QgEADABAFQgBAGAEADQADAEAGAAQAEAAADgEQAEgDAAgGQAAgFgEgDQgDgEgEAAQgGAAgDAEg");
	this.shape_133.setTransform(89.8,266.575);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgFAvIgjhcIAMAAIAcBQIABAAIAdhQIALAAIgiBcg");
	this.shape_134.setTransform(80.775,268.85);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_135.setTransform(69.325,268.7981);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgEgDgDgFQgCgFAAgHQAAgKAEgFQAFgFAGgCQAHgEAJgBIARgCIAHgBIAEgBIADgFIABgGQAAgFgBgEQgDgEgDgCIgIgDIgIgBQgLABgHAFQgGAEgBAMIgLAAQABgIACgGQADgGAFgEQAFgDAHgDQAHgBAHAAIAMABQAFABAGAEQAEADAEAGQACAFAAAKIAAAwQABAHAGAAIAEgBIAAAKIgDABIgFAAIgGgBIgFgEIgBgFIgBgHIgHAIQgCAEgFACQgDACgFACQgEABgHAAQgGAAgGgBgAAQAAIgEAAIgOACIgPADQgGACgEAEQgEAEAAAGQAAAEACAEQABADAEADIAGADIAIABQAHAAAEgBQAGgCAFgEQAEgEACgFQADgGAAgGIAAgPQgCACgDACg");
	this.shape_136.setTransform(61.55,268.85);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAaBAIAAg6IgBgKQgBgFgCgEQgDgDgFgDQgEgCgHAAQgGAAgFADQgGACgDAEIgGAKQgCAFAAAHIAAA2IgMAAIAAh/IAMAAIAAAzIAAAAQADgIAJgFQAIgFAJAAQAJAAAHACQAHADAEAEQAEAFABAHQACAGAAAHIAAA8g");
	this.shape_137.setTransform(51.825,267.075);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgbA5QgLgIgBgRIALAAQABAKAIAHQAGAGAMAAQAKAAAGgFQAHgGAEgIQADgJABgJIACgSIAAAAQgFAIgJAGQgJAGgKAAQgJAAgIgDQgIgDgFgGQgFgGgDgGQgEgIAAgJQAAgJAEgIQADgIAGgGQAFgFAIgEQAIgDAJAAQALAAAIAEQAIADAGAIQAFAIADANQACANABARIgBAKIgCANIgFAOQgCAHgGAGQgEAGgIADQgHAEgJAAQgRAAgKgIgAgNg0QgFADgFAEQgEAFgCAGQgCAGAAAGQAAAHACAGQACAGAEAEQAEAEAFADQAGACAIAAQAGAAAFgCQAHgDADgEQAFgEABgGQACgGAAgHQAAgHgBgGQgCgFgEgFQgDgEgHgDQgFgCgIAAQgHAAgFACg");
	this.shape_138.setTransform(36.95,267.275);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgPA+QgIgCgHgFQgFgEgEgHQgEgIABgJQAAgMAGgJQAIgIAMgCIAAgBQgKgDgGgHQgFgHgBgKQABgIADgGQADgGAGgEQAFgEAHgCQAHgCAGAAQAHAAAHACQAGACAGAEQAGAEADAGQADAGAAAIQAAAKgFAHQgGAHgKADIAAABQANACAHAIQAGAIAAANQABAJgEAIQgEAHgFAEQgHAFgHACQgIADgJAAQgIAAgHgDgAgMABQgFACgFADQgEAEgDAFQgCAFAAAHQAAAHACAFQADAGAEADQAFAEAFACQAHABAFAAQAGAAAHgBQAFgCAFgEQAEgDADgFQACgGAAgHQAAgHgCgFQgDgFgEgEQgFgDgGgCQgGgBgGAAIgCAAQgFAAgFABgAgJg1QgFACgEACQgEADgBAEQgDAEAAAGQAAAGADAEQABAFAEADQAEADAFABIAJABQAFAAAFgBQAFgBAEgDQADgDACgFQADgEAAgGQAAgGgCgEIgGgHQgDgCgFgCQgFgBgGAAIgJABg");
	this.shape_139.setTransform(27,267.275);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgbA5QgLgIgCgRIAMAAQABAKAIAHQAGAGAMAAQAJAAAHgFQAHgGAEgIQADgJABgJIACgSIgBAAQgEAIgJAGQgJAGgKAAQgJAAgIgDQgHgDgGgGQgFgGgEgGQgDgIAAgJQAAgJADgIQAEgIAFgGQAGgFAIgEQAIgDAJAAQALAAAIAEQAJADAFAIQAFAIADANQADANAAARIgBAKIgCANIgEAOQgEAHgFAGQgEAGgIADQgIAEgIAAQgSAAgJgIgAgNg0QgFADgFAEQgEAFgCAGQgCAGAAAGQAAAHACAGQACAGAEAEQAEAEAFADQAGACAIAAQAGAAAFgCQAHgDADgEQAFgEACgGQABgGAAgHQABgHgCgGQgCgFgEgFQgDgEgHgDQgFgCgIAAQgGAAgGACg");
	this.shape_140.setTransform(16.95,267.275);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AALA/IAAhdIggAAIAAgIIANAAQAGgBAEgCQAEgDADgEQADgFABgJIAJAAIAAB9g");
	this.shape_141.setTransform(5.975,267.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_142.setTransform(276.975,245.475);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgSAtQgIgDgFgIQgFgGgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgIAIgEQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAKgBAIIhGAAIABANQACAGAEAFQAEAGAFADQAGADAHABQANgBAHgGQAHgHADgKIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAEQgEAFgCAGQgDAGAAAHIA7AAQAAgHgCgGQgCgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_143.setTransform(267.6042,245.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgBA5QgFgFAAgMIAAg+IgQAAIAAgKIAQAAIAAgcIALAAIAAAcIASAAIAAAKIgSAAIAAA+QAAAFABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgEg");
	this.shape_144.setTransform(259.975,244.25);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_145.setTransform(255.275,245.5481);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgEgDgDgFQgCgFAAgHQAAgJAEgGQAFgGAGgCQAIgCAIgBIARgDIAHgBIAEgCIADgDIABgHQAAgFgBgEQgCgEgEgCIgIgDIgIgBQgLAAgHAGQgGAEgBAMIgLAAQABgIACgGQADgGAFgDQAFgFAHgCQAHgBAHAAIAMABQAGABAFAEQAFADADAGQACAFAAAKIAAAwQABAHAGAAIAEgBIAAAKIgDABIgFAAIgGgCIgFgDIgBgFIgBgGIgHAIQgCADgFACQgDADgFABQgEABgHAAQgGAAgGgBgAAQgBIgEABIgPACIgNADQgHACgEAEQgEADAAAIQAAAEACADQABADAEACIAGAFIAIABQAGAAAFgCQAGgDAFgDQAEgEADgFQACgGAAgGIAAgOQgBABgEABg");
	this.shape_146.setTransform(247.5,245.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgBA5QgFgFAAgMIAAg+IgQAAIAAgKIAQAAIAAgcIALAAIAAAcIASAAIAAAKIgSAAIAAA+QAAAFABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgEg");
	this.shape_147.setTransform(239.725,244.25);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgZAqQgKgJgCgRIAMAAQAAAMAIAGQAIAFAKABIAJgBIAIgEQAEgCACgDQACgDAAgFQAAgEgBgDIgFgEIgGgEIgIgCIgOgDIgKgDIgIgEQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgCQAGgBAGAAIANABQAGACAEAFQAFADACAGQADAFABAIIgMAAQAAgFgCgFQgCgDgDgCIgIgFIgIgBIgIABIgHADQgDACgCADQgCADAAAFQAAADACADIAFAEIAGADIAGACIAOAEIAKACQAFABADADQAEADACAFQADAEAAAHQAAAHgEAFQgDAFgFAEQgGADgGACIgNABQgQAAgKgHg");
	this.shape_148.setTransform(232.975,245.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_149.setTransform(218.825,245.475);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgEgDgDgFQgCgFAAgHQAAgJAEgGQAFgGAGgCQAHgCAJgBIARgDIAHgBIAEgCIADgDIABgHQAAgFgBgEQgDgEgDgCIgIgDIgIgBQgLAAgHAGQgGAEgBAMIgLAAQABgIACgGQADgGAFgDQAFgFAHgCQAHgBAHAAIAMABQAFABAGAEQAEADAEAGQACAFAAAKIAAAwQABAHAGAAIAEgBIAAAKIgDABIgFAAIgGgCIgFgDIgBgFIgBgGIgHAIQgCADgFACQgDADgFABQgEABgHAAQgGAAgGgBgAAQgBIgEABIgPACIgOADQgGACgEAEQgEADAAAIQAAAEACADQABADAEACIAGAFIAIABQAHAAAEgCQAGgDAFgDQAEgEACgFQADgGAAgGIAAgOQgCABgDABg");
	this.shape_150.setTransform(209.6,245.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgTA+QgHgEgGgHQgFgGgCgJQgDgJAAgKQAAgLADgHQACgJAFgHQAGgHAHgDQAIgEALgBIAJACIAJADQAFADADAEQADAEACAFIAAg1IAMAAIAAB/IgLAAIAAgSIAAAAQgCAFgDAEQgEADgEADIgKAEIgJABQgLAAgIgDgAgOgSQgGADgDAGQgEAFgCAGQgCAHAAAIQAAAHACAHQACAHAEAGQADAFAGAEQAGADAIAAQAIAAAGgDQAGgEAEgFQAEgGACgHQABgHAAgHIgBgPQgCgGgEgFQgEgGgGgDQgGgEgIAAQgIAAgGAEg");
	this.shape_151.setTransform(199.375,243.95);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgSAtQgIgDgFgIQgFgGgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgIAIgEQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAKgBAIIhGAAIABANQACAGAEAFQAEAGAFADQAGADAHABQANgBAHgGQAHgHADgKIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAEQgEAFgCAGQgDAGAAAHIA7AAQAAgHgCgGQgCgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_152.setTransform(189.8542,245.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgZAqQgKgJgCgRIAMAAQAAAMAIAGQAIAFAKABIAJgBIAIgEQAEgCACgDQACgDAAgFQAAgEgBgDIgFgEIgGgEIgIgCIgOgDIgKgDIgIgEQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgCQAGgBAGAAIANABQAGACAEAFQAFADACAGQADAFABAIIgMAAQAAgFgCgFQgCgDgDgCIgIgFIgIgBIgIABIgHADQgDACgCADQgCADAAAFQAAADACADIAFAEIAGADIAGACIAOAEIAKACQAFABADADQAEADACAFQADAEAAAHQAAAHgEAFQgDAFgFAEQgGADgGACIgNABQgQAAgKgHg");
	this.shape_153.setTransform(180.775,245.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgBA5QgFgFAAgMIAAg+IgQAAIAAgKIAQAAIAAgcIALAAIAAAcIASAAIAAAKIgSAAIAAA+QAAAFABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgEg");
	this.shape_154.setTransform(168.575,244.25);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_155.setTransform(164.525,243.825);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_156.setTransform(161.225,243.825);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAtBAIgQgoIg5AAIgQAoIgNAAIA0h/IAMAAIAzB/gAgZAOIAyAAIgZhBg");
	this.shape_157.setTransform(153.925,243.825);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgGAKIAAgTIANAAIAAATg");
	this.shape_158.setTransform(140.75,249.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgEgDgDgFQgCgFAAgHQAAgJAEgGQAEgGAIgCQAHgCAIgBIARgDIAHgBIAFgCIACgDIABgHQAAgFgBgEQgCgEgEgCIgIgDIgIgBQgLAAgHAGQgGAEgBAMIgLAAQABgIACgGQADgGAFgDQAFgFAHgCQAGgBAJAAIALABQAFABAFAEQAFADAEAGQACAFAAAKIAAAwQAAAHAHAAIAEgBIAAAKIgEABIgDAAIgHgCIgFgDIgCgFIAAgGIgHAIQgDADgDACQgFADgEABQgEABgHAAQgHAAgFgBgAARgBIgGABIgOACIgNADQgHACgEAEQgEADAAAIQAAAEACADQACADADACIAGAFIAIABQAGAAAFgCQAGgDAEgDQAFgEADgFQACgGAAgGIAAgOQgCABgCABg");
	this.shape_159.setTransform(133.85,245.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgMBAQgHgBgFgEQgGgDgDgFQgEgGAAgHIALAAQABAFADAEQACADAEACQAEADAEABIAIABQAQAAAHgJQAHgJAAgRIAAgNIAAAAQgEAJgIAFQgHAFgLAAQgKAAgIgDQgIgEgFgHQgFgGgCgIQgDgJAAgKQAAgJADgJQADgIAFgHQAGgGAHgEQAIgDAJAAQAGAAAEABIAJAEIAGAGIAFAHIAAAAIAAgQIAMAAIAABVQAAAKgDAIQgCAIgFAGQgFAGgIADQgHADgMAAQgGAAgGgCgAgNg0QgFADgEAFQgEAGgCAHQgBAGAAAIQAAAHABAGQACAGAEAFQAEAFAGADQAFAEAHAAQAIAAAFgEQAGgDAEgFQADgFACgGQACgGAAgHQAAgHgBgHQgCgHgEgFQgDgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_160.setTransform(123.725,247.325);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_161.setTransform(117.325,243.825);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_162.setTransform(114.025,243.825);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_163.setTransform(107.525,245.475);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgEgDgDgFQgCgFAAgHQAAgJAEgGQAEgGAIgCQAHgCAIgBIARgDIAHgBIAFgCIACgDIABgHQAAgFgBgEQgCgEgEgCIgIgDIgIgBQgLAAgHAGQgGAEgBAMIgLAAQABgIACgGQADgGAFgDQAFgFAHgCQAGgBAJAAIALABQAFABAFAEQAFADAEAGQACAFAAAKIAAAwQAAAHAHAAIAEgBIAAAKIgEABIgDAAIgHgCIgFgDIgCgFIAAgGIgHAIQgDADgDACQgFADgEABQgEABgHAAQgHAAgFgBgAARgBIgGABIgOACIgNADQgHACgEAEQgEADAAAIQAAAEACADQACADADACIAGAFIAIABQAGAAAFgCQAGgDAEgDQAFgEADgFQACgGAAgGIAAgOQgCABgCABg");
	this.shape_164.setTransform(98.3,245.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgFAvIgjhdIAMAAIAcBRIABAAIAdhRIALAAIgiBdg");
	this.shape_165.setTransform(89.275,245.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgBA5QgFgFAAgMIAAg+IgQAAIAAgKIAQAAIAAgcIALAAIAAAcIASAAIAAAKIgSAAIAAA+QAAAFABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgEg");
	this.shape_166.setTransform(77.225,244.25);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgSAtQgIgDgFgIQgFgGgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgIAIgEQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAKgBAIIhGAAIABANQACAGAEAFQAEAGAFADQAGADAHABQANgBAHgGQAHgHADgKIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAEQgEAFgCAGQgDAGAAAHIA7AAQAAgHgCgGQgCgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_167.setTransform(70.2542,245.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgTA+QgHgEgGgHQgFgGgCgJQgDgJAAgKQAAgLADgHQACgJAFgHQAGgHAHgDQAIgEALgBIAJACIAJADQAFADADAEQADAEACAFIAAg1IAMAAIAAB/IgLAAIAAgSIAAAAQgCAFgDAEQgEADgEADIgKAEIgJABQgLAAgIgDgAgOgSQgGADgDAGQgEAFgCAGQgCAHAAAIQAAAHACAHQACAHAEAGQADAFAGAEQAGADAIAAQAIAAAGgDQAGgEAEgFQAEgGACgHQABgHAAgHIgBgPQgCgGgEgFQgEgGgGgDQgGgEgIAAQgIAAgGAEg");
	this.shape_168.setTransform(60.175,243.95);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_169.setTransform(47.925,245.5481);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgSAtQgIgDgFgIQgFgGgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgIAIgEQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAKgBAIIhGAAIABANQACAGAEAFQAEAGAFADQAGADAHABQANgBAHgGQAHgHADgKIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAEQgEAFgCAGQgDAGAAAHIA7AAQAAgHgCgGQgCgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_170.setTransform(40.0042,245.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgFAvIgjhdIAMAAIAcBRIABAAIAdhRIALAAIgiBdg");
	this.shape_171.setTransform(31.125,245.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgSA9QgIgEgFgHQgGgGgDgJQgDgJAAgKQAAgKADgIQADgJAGgHQAFgGAIgEQAIgEAKAAQAKAAAJAEQAIAEAFAGQAGAHADAJQADAIAAAKQAAAKgDAJQgDAJgGAGQgFAHgIAEQgJAEgKAAQgKAAgIgEgAgNgTQgGADgEAGQgFAFgCAGQgBAHAAAIQAAAHABAHQACAHAFAGQAEAGAGADQAGADAHAAQAIAAAGgDQAHgDADgGQAEgGADgHQABgHAAgHQAAgIgBgHQgDgGgEgFQgDgGgHgDQgGgEgIAAQgHAAgGAEgAAKguIAAgSIAMAAIAAASgAgVguIAAgSIAMAAIAAASg");
	this.shape_172.setTransform(21.95,244.025);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgBA5QgFgFAAgMIAAg+IgQAAIAAgKIAQAAIAAgcIALAAIAAAcIASAAIAAAKIgSAAIAAA+QAAAFABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgEg");
	this.shape_173.setTransform(14.075,244.25);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgTAtQgGgCgEgFQgEgEgCgHQgCgGAAgIIAAg8IAMAAIAAA8QAAAMAGAHQAFAGAOAAQAGAAAFgDQAFgDAEgFQADgFACgHQABgHAAgHIAAgwIAMAAIAABcIgLAAIAAgQIAAAAQgEAJgJAFQgJAFgJAAQgJAAgGgDg");
	this.shape_174.setTransform(6.825,245.725);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGABIAJgBIAAAKIgFAAIgFAAQgLAAgDgFg");
	this.shape_175.setTransform(286.975,221);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgSAtQgIgEgGgGQgFgHgDgJQgDgJAAgKQAAgJADgJQADgJAFgHQAGgGAIgEQAJgEAJAAQALAAAIAEQAIAEAFAGQAGAHADAJQADAJAAAJQAAAKgDAJQgDAJgGAHQgFAGgIAEQgIAEgLAAQgJAAgJgEgAgNgjQgHADgDAGQgEAGgDAGQgCAIAAAGQAAAHACAIQADAHAEAFQADAGAHADQAGADAHAAQAIAAAGgDQAGgDAEgGQAFgFACgHQABgIAAgHQAAgGgBgIQgCgGgFgGQgEgGgGgDQgGgEgIABQgHgBgGAEg");
	this.shape_176.setTransform(279.55,222.35);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgMBAQgHgBgFgEQgGgDgDgFQgEgGAAgHIALAAQABAFADAEQACADAEACQAEADAEABIAIABQAQAAAHgJQAHgJAAgRIAAgNIAAAAQgEAJgIAFQgHAFgLAAQgKAAgIgDQgIgEgFgHQgFgGgCgIQgDgJAAgKQAAgJADgJQADgIAFgHQAGgGAHgEQAIgDAJAAQAGAAAEABIAJAEIAGAGIAFAHIAAAAIAAgQIAMAAIAABVQAAAKgDAIQgCAIgFAGQgFAGgIADQgHADgMAAQgGAAgGgCgAgNg0QgFADgEAFQgEAGgCAHQgBAGAAAIQAAAHABAGQACAGAEAFQAEAFAGADQAFAEAHAAQAIAAAFgEQAGgDAEgFQADgFACgGQACgGAAgHQAAgHgBgHQgCgHgEgFQgDgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_177.setTransform(269.325,224.075);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgXBGQgGgBgEgEQgFgDgCgFQgCgFAAgHQAAgKAEgFQAFgGAGgDQAIgDAJgBIARgCIAGgBIAEgCIADgEIABgGQAAgEgCgEQgCgEgDgCQgDgCgEgBIgJgBQgLAAgGAFQgIAFAAALIgLAAQAAgHADgGQADgGAFgEQAFgEAGgCQAHgBAJAAIAKABQAHABAEADQAGAEACAFQAEAGAAAJIAAAxQgBAHAHAAIAEgBIAAAKIgEAAIgEAAIgHgBIgDgDIgCgFIgBgHIgGAIQgDAEgEACQgFACgEABQgEACgHAAQgHAAgFgCgAARAVIgGACIgNACIgPADQgGACgEADQgEAEAAAHQAAAEACAEQABADADACIAHAEIAIABQAGAAAFgCQAGgCAEgDQAFgEACgFQADgGAAgHIAAgPQgCACgCABgAgJgiQgDgBgDgDIgEgGQgBgEAAgEQAAgEABgDIAEgGIAGgEQAEgCAEAAIAGACIAGAEIAFAGQABADAAAEQAAAEgBAEIgFAGQgDADgDABQgDACgDAAQgEAAgEgCgAgKg8QgEADAAAFQAAAGAEADQAEAEAFAAQAEAAAEgEQADgDAAgGQAAgFgDgDQgEgEgEAAQgFAAgEAEg");
	this.shape_178.setTransform(260.15,220.075);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_179.setTransform(250.425,222.225);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgTA+QgHgEgGgHQgFgHgCgIQgDgKAAgJQAAgKADgIQACgJAFgHQAGgGAHgEQAIgFALAAIAJABIAJAFQAFACADAEQADAEACAFIAAg2IAMAAIAACAIgLAAIAAgRIAAAAQgCAEgDAEQgEAEgEACIgKAEIgJACQgLgBgIgDgAgOgSQgGADgDAGQgEAFgCAGQgCAIAAAHQAAAHACAHQACAHAEAGQADAFAGAEQAGADAIAAQAIAAAGgDQAGgEAEgFQAEgGACgHQABgHAAgHIgBgPQgCgGgEgFQgEgGgGgDQgGgEgIAAQgIAAgGAEg");
	this.shape_180.setTransform(235.275,220.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_181.setTransform(228.675,220.575);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGABIAJgBIAAAKIgFAAIgFAAQgLAAgDgFg");
	this.shape_182.setTransform(224.125,221);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_183.setTransform(220.075,220.575);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_184.setTransform(216.775,220.575);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgXAvQgGgBgEgDQgEgDgDgGQgCgFAAgHQAAgJAEgGQAEgFAIgCQAHgDAIgCIARgCIAHgBIAFgBIACgFIABgFQAAgGgBgEQgCgDgEgDIgIgDIgIAAQgLAAgHAEQgGAGgBALIgLAAQABgIACgGQADgGAFgEQAFgEAHgBQAGgCAIAAIAMABQAGABAEADQAFAEAEAFQACAHAAAJIAAAwQABAHAGAAIAEgBIAAAKIgEAAIgDAAIgHgBIgFgDIgCgFIAAgHIgHAIQgCAEgEACQgFADgEAAQgEACgHAAQgHAAgFgCgAAQAAIgEAAIgPACIgNADQgHACgEADQgEAFAAAGQAAAFACADQACAEADACIAGADIAIABQAGAAAFgCQAGgCAFgDQAEgEADgFQACgFAAgIIAAgNQgBACgEABg");
	this.shape_185.setTransform(210.7,222.35);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_186.setTransform(198.525,222.2981);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAHQgDAFAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_187.setTransform(190.6042,222.35);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgTA+QgHgEgGgHQgFgHgCgIQgDgKAAgJQAAgKADgIQACgJAFgHQAGgGAHgEQAIgFALAAIAJABIAJAFQAFACADAEQADAEACAFIAAg2IAMAAIAACAIgLAAIAAgRIAAAAQgCAEgDAEQgEAEgEACIgKAEIgJACQgLgBgIgDgAgOgSQgGADgDAGQgEAFgCAGQgCAIAAAHQAAAHACAHQACAHAEAGQADAFAGAEQAGADAIAAQAIAAAGgDQAGgEAEgFQAEgGACgHQABgHAAgHIgBgPQgCgGgEgFQgEgGgGgDQgGgEgIAAQgIAAgGAEg");
	this.shape_188.setTransform(180.525,220.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgTAtQgGgCgEgFQgEgEgCgHQgCgGAAgIIAAg8IAMAAIAAA8QAAAMAGAHQAFAGAOAAQAGAAAFgDQAFgDAEgFQADgFACgHQABgHAAgHIAAgwIAMAAIAABcIgLAAIAAgQIAAAAQgEAJgJAFQgJAFgJAAQgJAAgGgDg");
	this.shape_189.setTransform(170.725,222.475);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgJBRIgEAAIAAgJIADAAIADAAQAHAAAAgEQACgEAAgGIAAhnIAMAAIAABlIgBAKIgDAIQgDADgDACQgEACgFAAgAACg+IAAgSIAMAAIAAASg");
	this.shape_190.setTransform(163.475,222.275);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgSA8QgJgFgEgJIAAARIgLAAIAAiAIALAAIAAA2IABAAIAFgJIAHgGIAKgFIAJgBQALAAAHAFQAIAEAFAGQAGAHACAJQADAIAAAKQAAAJgDAKQgCAIgGAHQgFAHgIAEQgHADgLABQgKAAgJgGgAgNgSQgGADgEAGQgEAFgCAGQgCAIAAAHQAAAHACAHQACAHAEAGQAEAFAGAEQAGADAIAAQAIAAAGgDQAGgEADgFQAEgGACgHQABgHAAgHIgBgPQgCgGgEgFQgDgGgGgDQgGgEgIAAQgIAAgGAEg");
	this.shape_191.setTransform(157.675,220.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_192.setTransform(150.025,222.2981);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAHQgDAFAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_193.setTransform(142.1042,222.35);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAHQgDAFAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_194.setTransform(127.8042,222.35);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgTA+QgHgEgGgHQgFgHgCgIQgDgKAAgJQAAgKADgIQACgJAFgHQAGgGAHgEQAIgFALAAIAJABIAJAFQAFACADAEQADAEACAFIAAg2IAMAAIAACAIgLAAIAAgRIAAAAQgCAEgDAEQgEAEgEACIgKAEIgJACQgLgBgIgDgAgOgSQgGADgDAGQgEAFgCAGQgCAIAAAHQAAAHACAHQACAHAEAGQADAFAGAEQAGADAIAAQAIAAAGgDQAGgEAEgFQAEgGACgHQABgHAAgHIgBgPQgCgGgEgFQgEgGgGgDQgGgEgIAAQgIAAgGAEg");
	this.shape_195.setTransform(117.725,220.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_196.setTransform(102.925,222.225);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAHQgDAFAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_197.setTransform(93.5542,222.35);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgHAAgGADQgEACgDAFQgDAFgBAGQgBAGAAAGIAAA0IgKAAIAAg+IgBgJQgBgEgDgEQgCgDgEgBQgDgCgGAAQgHAAgGACQgFADgEAFQgCAEgCAGQgCAHAAAHIAAAzIgLAAIAAhcIAKAAIAAAPIABAAQAEgIAIgFQAHgFALAAQAKAAAHAFQAHAEACAJQAEgJAIgEQAIgFAJAAQAfAAAAAhIAAA+g");
	this.shape_198.setTransform(81.35,222.225);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgHAOQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBIADgEIAAgFIAAgEIgGAAIAAgTIAOAAIAAATIgBAHIgDAHIgEAGQgDADgEABg");
	this.shape_199.setTransform(66.3,227.275);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgZAqQgKgJgCgQIAMAAQAAALAIAGQAIAGAKgBIAJAAIAIgEQAEgCACgDQACgDAAgFQAAgEgBgDIgFgFIgGgCIgIgDIgOgDIgKgCIgIgFQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgBQAGgCAGAAIANACQAGABAEAEQAFAEACAFQADAGABAIIgMAAQAAgGgCgDQgCgEgDgDIgIgDIgIgBIgIAAIgHADQgDACgCADQgCADAAAEQAAAEACADIAFAFIAGACIAGACIAOAEIAKACQAFABADADQAEADACAEQADAFAAAGQAAAIgEAFQgDAGgFADQgGADgGABIgNACQgQAAgKgHg");
	this.shape_200.setTransform(59.525,222.35);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_201.setTransform(53.575,220.575);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_202.setTransform(49.625,222.2981);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgqBBIAAh+IALAAIAAASQAEgKAJgGQAJgFAKAAQALAAAHAEQAIAEAFAHQAGAHACAJQADAIAAAKQAAAKgDAIQgCAJgGAHQgFAHgIADQgHAEgLAAQgEAAgFgBQgFgBgFgDIgHgGQgDgEgCgFIgBAAIAAA0gAgOgzQgGADgEAGQgEAFgBAHQgCAHAAAIQAAAIACAHQACAGAEAFQAEAGAGADQAGAEAIAAQAIAAAGgEQAGgDADgGQAEgFACgGQABgHAAgIIgBgOQgCgHgEgGQgDgFgGgEQgGgDgIAAQgIAAgHADg");
	this.shape_203.setTransform(41.325,223.925);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAaBAIAAg6IgBgKQgBgFgCgEQgDgDgFgDQgEgCgHAAQgGAAgFADQgGACgDAEIgGAKQgCAFAAAHIAAA2IgMAAIAAh/IAMAAIAAAzIAAAAQADgIAJgFQAIgFAJAAQAJAAAHACQAHADAEAEQAEAFABAHQACAGAAAHIAAA8g");
	this.shape_204.setTransform(26.125,220.575);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgPAtQgIgEgGgGQgFgHgDgJQgDgJAAgKQAAgJADgJQADgJAFgHQAGgGAIgEQAIgEAKAAQAPAAAKAIQAKAIACAQIgLAAQgCgKgHgHQgGgFgLAAQgHgBgGAEQgHADgEAGQgEAGgCAGQgCAIAAAGQAAAHACAIQACAHAEAFQAEAGAHADQAGADAHAAQAFAAAFgCQAEgCAEgDQAEgDACgFQACgFABgGIALAAQgCARgKAJQgKAKgQAAQgKAAgIgEg");
	this.shape_205.setTransform(16.725,222.35);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgGgHgDgJQgDgJAAgKQAAgJADgJQADgJAGgHQAFgGAIgEQAIgEAKAAQALAAAIAEQAIAEAGAGQAFAHADAJQADAJAAAJQAAAKgDAJQgDAJgFAHQgGAGgIAEQgIAEgLAAQgKAAgIgEgAgNgjQgGADgEAGQgFAGgBAGQgCAIAAAGQAAAHACAIQABAHAFAFQAEAGAGADQAGADAHAAQAIAAAGgDQAHgDADgGQAFgFACgHQACgIAAgHQAAgGgCgIQgCgGgFgGQgDgGgHgDQgGgEgIABQgHgBgGAEg");
	this.shape_206.setTransform(7,222.35);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AAaBAIgkgyIgSAPIAAAjIgLAAIAAh/IALAAIAABPIAygsIAQAAIgnAiIApA6g");
	this.shape_207.setTransform(279.275,197.325);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgHAIgFQAIgEAKAAQALAAAIAFQAIAEAFAHQAFAIACAJQADAJgBAJIhGAAIABANQACAGAEAGQAEAFAFADQAGADAHAAQANAAAHgGQAHgHADgKIALAAQgEAQgJAIQgKAJgSAAQgKAAgIgEgAgLgjQgGACgDAEQgEAFgCAHQgDAGAAAFIA7AAQAAgGgCgGQgCgGgEgFQgEgEgFgCQgGgEgHAAQgGAAgFAEg");
	this.shape_208.setTransform(269.6042,199.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_209.setTransform(263.225,197.325);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_210.setTransform(259.275,199.0481);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgGgHgDgJQgDgJAAgKQAAgJADgJQADgJAGgGQAFgHAIgEQAIgEAKAAQALAAAIAEQAIAEAGAHQAFAGADAJQADAJAAAJQAAAKgDAJQgDAJgFAHQgGAGgIAEQgIAEgLAAQgKAAgIgEgAgNgjQgGADgEAGQgFAGgBAGQgCAIAAAGQAAAIACAGQABAHAFAHQAEAFAGADQAGADAHAAQAIAAAGgDQAHgDAEgFQAEgHACgHQACgGAAgIQAAgGgCgIQgCgGgEgGQgEgGgHgDQgGgEgIAAQgHAAgGAEg");
	this.shape_211.setTransform(250.9,199.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgBA4QgFgEAAgMIAAg/IgQAAIAAgJIAQAAIAAgcIALAAIAAAcIASAAIAAAJIgSAAIAAA+QAAAGABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgFg");
	this.shape_212.setTransform(243.025,197.75);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgZApQgKgHgCgRIAMAAQAAALAIAGQAIAFAKAAIAJAAIAIgDQAEgCACgEQACgDAAgFQAAgEgBgDIgFgEIgGgDIgIgDIgOgDIgKgCIgIgFQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgCQAGgBAGAAIANABQAGADAEADQAFAEACAFQADAGABAIIgMAAQAAgFgCgEQgCgEgDgCIgIgFIgIgBIgIABIgHADQgDACgCADQgCADAAAEQAAAEACADIAFAEIAGAEIAGABIAOADIAKADQAFABADADQAEADACAFQADAEAAAGQAAAIgEAFQgDAFgFAEQgGADgGABIgNACQgQAAgKgIg");
	this.shape_213.setTransform(236.275,199.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_214.setTransform(225.325,197.325);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_215.setTransform(216.375,199.0481);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgXAvQgGgBgEgEQgFgDgCgFQgCgFAAgHQAAgKAEgFQAFgFAGgCQAHgEAJgBIARgCIAHgBIAEgBIADgFIABgGQAAgFgCgEQgBgEgEgCIgIgDIgIgBQgLABgGAFQgIAEAAAMIgLAAQAAgIADgGQADgGAFgEQAFgDAGgDQAIgBAHAAIALABQAGABAGAEQAEADAEAGQADAFAAAKIAAAwQAAAHAGAAIAEgBIAAAKIgDABIgFAAIgHgBIgDgEIgCgFIgBgHIgHAIQgCAEgFACQgDACgFABQgEACgHAAQgGAAgGgCgAAQAAIgEAAIgOACIgPADQgGACgEAEQgEAEAAAGQAAAEACAEQACADACADIAHADIAIABQAGAAAFgBQAGgCAFgEQAEgEACgFQADgGAAgGIAAgPQgCACgDACg");
	this.shape_216.setTransform(208.6,199.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_217.setTransform(201.425,199.0481);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgHAIgFQAIgEAKAAQALAAAIAFQAIAEAFAHQAFAIACAJQADAJgBAJIhGAAIABANQACAGAEAGQAEAFAFADQAGADAHAAQANAAAHgGQAHgHADgKIALAAQgEAQgJAIQgKAJgSAAQgKAAgIgEgAgLgjQgGACgDAEQgEAFgCAHQgDAGAAAFIA7AAQAAgGgCgGQgCgGgEgFQgEgEgFgCQgGgEgHAAQgGAAgFAEg");
	this.shape_218.setTransform(193.5042,199.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_219.setTransform(187.125,197.325);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_220.setTransform(183.175,199.0481);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgXAvQgGgBgEgEQgEgDgDgFQgCgFAAgHQAAgKAEgFQAFgFAGgCQAHgEAJgBIARgCIAHgBIAEgBIADgFIABgGQAAgFgBgEQgDgEgDgCIgIgDIgIgBQgLABgHAFQgGAEgBAMIgLAAQABgIACgGQADgGAFgEQAFgDAHgDQAHgBAHAAIAMABQAFABAGAEQAEADAEAGQACAFAAAKIAAAwQABAHAGAAIAEgBIAAAKIgDABIgFAAIgGgBIgFgEIgBgFIgBgHIgHAIQgCAEgFACQgDACgFABQgEACgHAAQgGAAgGgCgAAQAAIgEAAIgOACIgPADQgGACgEAEQgEAEAAAGQAAAEACAEQABADAEADIAGADIAIABQAHAAAEgBQAGgCAFgEQAEgEACgFQADgGAAgGIAAgPQgCACgDACg");
	this.shape_221.setTransform(175.4,199.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgFAvIgjhcIAMAAIAcBQIABAAIAdhQIALAAIgiBcg");
	this.shape_222.setTransform(166.375,199.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_223.setTransform(154.925,199.0481);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgXAvQgGgBgEgEQgEgDgDgFQgCgFAAgHQAAgKAEgFQAFgFAGgCQAIgEAIgBIARgCIAHgBIAEgBIADgFIABgGQAAgFgBgEQgCgEgEgCIgIgDIgIgBQgLABgHAFQgGAEgBAMIgLAAQABgIACgGQADgGAFgEQAFgDAHgDQAHgBAHAAIAMABQAGABAFAEQAFADADAGQACAFAAAKIAAAwQABAHAGAAIAEgBIAAAKIgDABIgFAAIgGgBIgFgEIgCgFIAAgHIgHAIQgCAEgFACQgDACgFABQgEACgHAAQgGAAgGgCgAAQAAIgEAAIgPACIgNADQgHACgEAEQgEAEAAAGQAAAEACAEQABADAEADIAGADIAIABQAGAAAFgBQAGgCAFgEQAEgEADgFQACgGAAgGIAAgPQgBACgEACg");
	this.shape_224.setTransform(147.15,199.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_225.setTransform(140.625,197.325);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgTA9QgHgDgGgHQgFgHgCgJQgDgIAAgLQAAgKADgHQACgJAFgHQAGgGAHgFQAIgDALAAIAJABIAJADQAFADADAEQADAEACAFIAAg2IAMAAIAACAIgLAAIAAgSIAAAAQgCAFgDADQgEAEgEADIgKAEIgJACQgLAAgIgFgAgOgTQgGAEgDAFQgEAGgCAHQgCAHAAAGQAAAIACAHQACAHAEAFQADAGAGADQAGAEAIAAQAIAAAGgEQAGgDAEgGQAEgFACgHQABgHAAgIIgBgNQgCgHgEgGQgEgFgGgEQgGgDgIAAQgIAAgGADg");
	this.shape_226.setTransform(133.625,197.45);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgHAIgFQAIgEAKAAQALAAAIAFQAIAEAFAHQAFAIACAJQADAJgBAJIhGAAIABANQACAGAEAGQAEAFAFADQAGADAHAAQANAAAHgGQAHgHADgKIALAAQgEAQgJAIQgKAJgSAAQgKAAgIgEgAgLgjQgGACgDAEQgEAFgCAHQgDAGAAAFIA7AAQAAgGgCgGQgCgGgEgFQgEgEgFgCQgGgEgHAAQgGAAgFAEg");
	this.shape_227.setTransform(124.1042,199.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgIAAgEADQgFACgDAFQgDAFgBAGQgCAGAAAGIAAA0IgKAAIAAg+IgBgJQgBgEgCgEQgCgDgEgBQgEgCgFAAQgIAAgEACQgGADgDAFQgEAEgCAGQgBAHAAAHIAAAzIgLAAIAAhcIALAAIAAAPIAAAAQAFgIAGgFQAIgFALAAQAJAAAIAFQAGAEADAJQAEgJAIgEQAIgFAKAAQAeAAAAAhIAAA+g");
	this.shape_228.setTransform(111.9,198.975);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_229.setTransform(102.125,199.0481);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgSA9QgIgEgFgHQgGgGgDgJQgDgJAAgKQAAgKADgIQADgJAGgHQAFgGAIgEQAIgEAKAAQAKAAAJAEQAIAEAGAGQAFAHADAJQADAIAAAKQAAAKgDAJQgDAJgFAGQgGAHgIAEQgJAEgKAAQgKAAgIgEgAgNgTQgGADgFAGQgEAFgBAGQgCAHAAAIQAAAHACAHQABAHAEAGQAFAGAGADQAGADAHAAQAIAAAGgDQAHgDAEgGQADgGADgHQACgHAAgHQAAgIgCgHQgDgGgDgFQgEgGgHgDQgGgEgIAAQgHAAgGAEgAAKguIAAgSIAMAAIAAASgAgVguIAAgSIAMAAIAAASg");
	this.shape_230.setTransform(93.75,197.525);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgHBAIAAhSIgQAAIAAgKIAQAAIAAgIIABgLQAAgFADgEQACgDAEgCQAFgCAGAAIAFAAIAFAAIAAAKIgEAAIgFgBQgEAAgCACQgDABgBADQgBACgBADIAAAHIAAAIIASAAIAAAKIgSAAIAABSg");
	this.shape_231.setTransform(86.6,197.325);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_232.setTransform(77.475,197.325);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgFAvIgjhcIAMAAIAcBQIABAAIAdhQIALAAIgiBcg");
	this.shape_233.setTransform(71.675,199.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgHAAgGADQgEACgDAFQgDAFgBAGQgCAGABAGIAAA0IgKAAIAAg+IgCgJQgBgEgCgEQgCgDgEgBQgDgCgGAAQgIAAgFACQgFADgEAFQgCAEgDAGQgBAHAAAHIAAAzIgLAAIAAhcIAKAAIAAAPIABAAQAEgIAIgFQAHgFALAAQAJAAAIAFQAHAEACAJQAEgJAIgEQAIgFAKAAQAeAAAAAhIAAA+g");
	this.shape_234.setTransform(55.05,198.975);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgHAIgFQAIgEAKAAQALAAAIAFQAIAEAFAHQAFAIACAJQADAJgBAJIhGAAIABANQACAGAEAGQAEAFAFADQAGADAHAAQANAAAHgGQAHgHADgKIALAAQgEAQgJAIQgKAJgSAAQgKAAgIgEgAgLgjQgGACgDAEQgEAFgCAHQgDAGAAAFIA7AAQAAgGgCgGQgCgGgEgFQgEgEgFgCQgGgEgHAAQgGAAgFAEg");
	this.shape_235.setTransform(43.0042,199.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AAaBAIAAg6IgBgKQgBgFgCgEQgDgDgFgDQgEgCgHAAQgGAAgFADQgGACgDAEIgGAKQgCAFAAAHIAAA2IgMAAIAAh/IAMAAIAAAzIAAAAQADgIAJgFQAIgFAJAAQAJAAAHACQAHADAEAEQAEAFABAHQACAGAAAHIAAA8g");
	this.shape_236.setTransform(33.425,197.325);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgHAIgFQAIgEAKAAQALAAAIAFQAIAEAFAHQAFAIACAJQADAJgBAJIhGAAIABANQACAGAEAGQAEAFAFADQAGADAHAAQANAAAHgGQAHgHADgKIALAAQgEAQgJAIQgKAJgSAAQgKAAgIgEgAgLgjQgGACgDAEQgEAFgCAHQgDAGAAAFIA7AAQAAgGgCgGQgCgGgEgFQgEgEgFgCQgGgEgHAAQgGAAgFAEg");
	this.shape_237.setTransform(19.0542,199.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgzBAIAAh/IAtAAQAcAAAPAQQAPAQAAAfQAAAggPAQQgPAQgcAAgAgnA2IAbAAQAMAAAKgDQAKgDAHgHQAGgGADgKQADgLAAgOQAAgNgDgLQgDgKgGgGQgHgHgKgDQgKgDgMAAIgbAAg");
	this.shape_238.setTransform(8.475,197.325);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgHAKIAAgTIAPAAIAAATg");
	this.shape_239.setTransform(297.6,179.55);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgBA5QgFgFAAgMIAAg+IgQAAIAAgKIAQAAIAAgcIALAAIAAAcIASAAIAAAKIgSAAIAAA+QAAAFABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgEg");
	this.shape_240.setTransform(292.225,174.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgSAtQgIgDgFgIQgFgGgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgIAIgEQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAKgBAIIhGAAIABANQACAGAEAFQAEAGAFADQAGADAHABQANgBAHgGQAHgHADgKIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAEQgEAFgCAGQgDAGAAAHIA7AAQAAgHgCgGQgCgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_241.setTransform(285.2542,175.85);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgBA5QgFgFAAgMIAAg+IgQAAIAAgKIAQAAIAAgcIALAAIAAAcIASAAIAAAKIgSAAIAAA+QAAAFABADQACADAGAAIAJAAIAAAJIgFAAIgFABQgLAAgDgEg");
	this.shape_242.setTransform(277.625,174.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_243.setTransform(270.375,175.725);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgSAtQgIgDgFgIQgFgGgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgIAIgEQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAKgBAIIhGAAIABANQACAGAEAFQAEAGAFADQAGADAHABQANgBAHgGQAHgHADgKIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAEQgEAFgCAGQgDAGAAAHIA7AAQAAgHgCgGQgCgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_244.setTransform(261.0042,175.85);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgIAAgFADQgEACgDAFQgDAFgBAGQgBAGAAAGIAAA0IgLAAIAAg+IgBgJQAAgEgDgEQgCgDgEgBQgEgCgFAAQgIAAgEACQgGADgDAFQgDAEgDAGQgBAHAAAHIAAAzIgLAAIAAhcIAKAAIAAAPIABAAQAFgIAGgFQAIgFALAAQAKAAAHAFQAGAEADAJQAEgJAIgEQAIgFAKAAQAeAAAAAhIAAA+g");
	this.shape_245.setTransform(248.8,175.725);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgMBAQgHgBgFgEQgGgDgDgFQgEgGAAgHIALAAQABAFADAEQACADAEACQAEADAEABIAIABQAQAAAHgJQAHgJAAgRIAAgNIAAAAQgEAJgIAFQgHAFgLAAQgKAAgIgDQgIgEgFgHQgFgGgCgIQgDgJAAgKQAAgJADgJQADgIAFgHQAGgGAHgEQAIgDAJAAQAGAAAEABIAJAEIAGAGIAFAHIAAAAIAAgQIAMAAIAABVQAAAKgDAIQgCAIgFAGQgFAGgIADQgHADgMAAQgGAAgGgCgAgNg0QgFADgEAFQgEAGgCAHQgBAGAAAIQAAAHABAGQACAGAEAFQAEAFAGADQAFAEAHAAQAIAAAFgEQAGgDAEgFQADgFACgGQACgGAAgHQAAgHgBgHQgCgHgEgFQgDgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_246.setTransform(236.075,177.575);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgSAtQgIgDgFgIQgFgGgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgIAIgEQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAKgBAIIhGAAIABANQACAGAEAFQAEAGAFADQAGADAHABQANgBAHgGQAHgHADgKIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAEQgEAFgCAGQgDAGAAAHIA7AAQAAgHgCgGQgCgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_247.setTransform(226.7542,175.85);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgZAqQgKgJgCgRIAMAAQAAAMAIAGQAIAFAKABIAJgBIAIgEQAEgCACgDQACgDAAgFQAAgEgBgDIgFgEIgGgEIgIgCIgOgDIgKgDIgIgEQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgCQAGgBAGAAIANABQAGACAEAFQAFADACAGQADAFABAIIgMAAQAAgFgCgFQgCgDgDgCIgIgFIgIgBIgIABIgHADQgDACgCADQgCADAAAFQAAADACADIAFAEIAGADIAGACIAOAEIAKACQAFABADADQAEADACAFQADAEAAAHQAAAHgEAFQgDAFgFAEQgGADgGACIgNABQgQAAgKgHg");
	this.shape_248.setTransform(217.675,175.85);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgHAAgGADQgEACgDAFQgDAFgBAGQgCAGABAGIAAA0IgKAAIAAg+IgBgJQgCgEgCgEQgCgDgEgBQgEgCgFAAQgIAAgFACQgFADgEAFQgCAEgCAGQgCAHAAAHIAAAzIgLAAIAAhcIAKAAIAAAPIABAAQAEgIAIgFQAHgFALAAQAKAAAHAFQAHAEACAJQAEgJAIgEQAIgFAJAAQAfAAAAAhIAAA+g");
	this.shape_249.setTransform(205.9,175.725);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgTAtQgGgCgEgFQgEgEgCgHQgCgGAAgIIAAg8IAMAAIAAA8QAAAMAGAHQAFAGAOAAQAGAAAFgDQAFgDAEgFQADgFACgHQABgHAAgHIAAgwIAMAAIAABcIgLAAIAAgQIAAAAQgEAJgJAFQgJAFgJAAQgJAAgGgDg");
	this.shape_250.setTransform(193.575,175.975);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_251.setTransform(187.125,174.075);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgHAAgGADQgEACgDAFQgDAFgBAGQgCAGABAGIAAA0IgKAAIAAg+IgBgJQgCgEgCgEQgCgDgEgBQgEgCgFAAQgIAAgFACQgFADgEAFQgCAEgCAGQgCAHAAAHIAAAzIgLAAIAAhcIAKAAIAAAPIABAAQAEgIAIgFQAHgFALAAQAKAAAHAFQAHAEACAJQAEgJAIgEQAIgFAJAAQAfAAAAAhIAAA+g");
	this.shape_252.setTransform(178,175.725);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgSAtQgIgDgFgIQgFgGgCgJQgDgJAAgKQAAgIADgJQACgJAFgGQAFgIAIgEQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAKgBAIIhGAAIABANQACAGAEAFQAEAGAFADQAGADAHABQANgBAHgGQAHgHADgKIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAEQgEAFgCAGQgDAGAAAHIA7AAQAAgHgCgGQgCgGgEgFQgEgEgFgDQgGgDgHAAQgGAAgFADg");
	this.shape_253.setTransform(165.9542,175.85);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_254.setTransform(159.275,175.7981);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgqBBIAAh+IALAAIAAASQAEgKAJgGQAJgFAKAAQALAAAHAEQAIAEAFAHQAGAHACAJQADAIAAAKQAAAKgDAIQgCAJgGAHQgFAHgIADQgHAEgLAAQgEAAgFgBQgFgBgFgDIgHgGQgDgEgCgFIgBAAIAAA0gAgOgzQgGADgEAGQgEAFgBAHQgCAHAAAIQAAAIACAHQACAGAEAFQAEAGAGADQAGAEAIAAQAIAAAGgEQAGgDADgGQAEgFACgGQABgHAAgIIgBgOQgCgHgEgGQgDgFgGgEQgGgDgIAAQgIAAgHADg");
	this.shape_255.setTransform(150.975,177.425);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgIAAgFADQgEACgDAFQgDAFgBAGQgBAGAAAGIAAA0IgLAAIAAg+IgBgJQAAgEgDgEQgCgDgEgBQgEgCgFAAQgIAAgEACQgGADgDAFQgDAEgDAGQgBAHAAAHIAAAzIgLAAIAAhcIALAAIAAAPIAAAAQAFgIAGgFQAIgFALAAQAKAAAHAFQAGAEADAJQAEgJAIgEQAIgFAKAAQAeAAAAAhIAAA+g");
	this.shape_256.setTransform(133.15,175.725);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgSAtQgIgDgGgIQgFgGgDgJQgDgJAAgKQAAgJADgJQADgJAFgGQAGgHAIgEQAJgEAJAAQAKAAAJAEQAIAEAGAHQAFAGADAJQADAJAAAJQAAAKgDAJQgDAJgFAGQgGAIgIADQgJAEgKAAQgJAAgJgEgAgNgjQgGADgFAGQgDAFgCAIQgCAGgBAHQABAHACAIQACAHADAFQAFAGAGADQAGADAHABQAIgBAGgDQAGgDAFgGQADgFACgHQADgIAAgHQAAgHgDgGQgCgIgDgFQgFgGgGgDQgGgDgIgBQgHABgGADg");
	this.shape_257.setTransform(120.65,175.85);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_258.setTransform(110.825,175.725);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_259.setTransform(104.375,174.075);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_260.setTransform(95.425,175.7981);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgSAtQgIgDgGgIQgFgGgDgJQgDgJAAgKQAAgJADgJQADgJAFgGQAGgHAIgEQAIgEAKAAQALAAAIAEQAIAEAFAHQAGAGADAJQADAJAAAJQAAAKgDAJQgDAJgGAGQgFAIgIADQgIAEgLAAQgKAAgIgEgAgNgjQgHADgEAGQgEAFgCAIQgCAGAAAHQAAAHACAIQACAHAEAFQAEAGAHADQAGADAHABQAIgBAGgDQAGgDAEgGQAFgFABgHQACgIAAgHQAAgHgCgGQgBgIgFgFQgEgGgGgDQgGgDgIgBQgHABgGADg");
	this.shape_261.setTransform(87.05,175.85);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgHAAgGADQgEACgDAFQgDAFgBAGQgBAGAAAGIAAA0IgKAAIAAg+IgBgJQgBgEgDgEQgCgDgEgBQgDgCgGAAQgHAAgGACQgFADgEAFQgCAEgCAGQgCAHAAAHIAAAzIgLAAIAAhcIAKAAIAAAPIABAAQAEgIAIgFQAHgFALAAQAKAAAHAFQAHAEACAJQAEgJAIgEQAIgFAJAAQAfAAAAAhIAAA+g");
	this.shape_262.setTransform(74.6,175.725);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_263.setTransform(64.825,175.7981);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_264.setTransform(59.825,174.075);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgHBAIAAhSIgQAAIAAgKIAQAAIAAgIIABgLQAAgFADgEQACgDAEgCQAFgCAGAAIAFAAIAFAAIAAAKIgEAAIgFgBQgEAAgCACQgDABgBADQgBACgBADIAAAHIAAAIIASAAIAAAKIgSAAIAABSg");
	this.shape_265.setTransform(56,174.075);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_266.setTransform(51.225,175.7981);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgXAwQgGgCgEgEQgFgDgCgFQgCgFAAgHQAAgJAEgGQAFgGAGgCQAIgCAIgBIARgDIAHgBIAEgCIADgDIABgHQAAgFgCgEQgBgEgEgCIgIgDIgIgBQgLAAgHAGQgHAEAAAMIgLAAQAAgIADgGQADgGAFgDQAFgFAGgCQAIgBAHAAIALABQAGABAGAEQAEADAEAGQADAFAAAKIAAAwQAAAHAGAAIAEgBIAAAKIgDABIgFAAIgHgCIgEgDIgBgFIgBgGIgHAIQgCADgFACQgDADgFABQgEABgHAAQgGAAgGgBgAAQgBIgEABIgOACIgPADQgGACgEAEQgEADAAAIQAAAEACADQACADACACIAHAFIAIABQAGAAAFgCQAGgDAFgDQAEgEACgFQADgGAAgGIAAgOQgCABgDABg");
	this.shape_267.setTransform(43.45,175.85);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_268.setTransform(36.925,174.075);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAaBAIgkgyIgSAPIAAAjIgLAAIAAh/IALAAIAABPIAygsIAQAAIgnAiIApA6g");
	this.shape_269.setTransform(31.375,174.075);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgXA/QgGgBgEgEQgFgDgCgFQgCgFAAgHQAAgKAEgFQAFgGAGgDQAHgDAJgBIARgCIAHgBIAEgCIADgEIABgFQAAgFgCgEQgBgEgEgCIgIgDIgIgBQgLAAgHAFQgHAFAAAMIgLAAQAAgIADgGQADgGAFgEQAFgEAGgCQAIgBAHAAIALABQAGABAGADQAEAEAEAFQADAGAAAKIAAAwQAAAHAGAAIAEgBIAAAKIgDAAIgFAAIgHgBIgEgDIgBgFIgBgHIgHAIQgCAEgFACQgDACgFABQgEACgHAAQgGAAgGgCgAAQAOIgEACIgOACIgPADQgGACgEADQgEAEAAAHQAAAEACAEQACADACACIAHAEIAIABQAGAAAFgCQAGgCAFgDQAEgEACgFQADgGAAgHIAAgPQgCACgDABgAAHguIAAgSIAMAAIAAASgAgXguIAAgSIAMAAIAAASg");
	this.shape_270.setTransform(21.85,174.275);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AA1AwIAAg+QAAgLgFgGQgFgGgMAAQgIAAgFADQgEACgDAFQgDAFgBAGQgBAGAAAGIAAA0IgLAAIAAg+IgBgJQAAgEgDgEQgCgDgEgBQgDgCgGAAQgIAAgEACQgGADgDAFQgEAEgCAGQgBAHAAAHIAAAzIgLAAIAAhcIAKAAIAAAPIABAAQAFgIAGgFQAIgFALAAQAJAAAIAFQAGAEADAJQAEgJAIgEQAIgFAKAAQAeAAAAAhIAAA+g");
	this.shape_271.setTransform(9.5,175.725);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAHQgDAFAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_272.setTransform(251.4042,152.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgTA+QgHgEgGgHQgFgHgCgIQgDgKAAgJQAAgKADgIQACgJAFgHQAGgGAHgEQAIgFALAAIAJABIAJAFQAFACADAEQADAEACAFIAAg2IAMAAIAACAIgLAAIAAgRIAAAAQgCAEgDAEQgEAEgEACIgKAEIgJACQgLgBgIgDgAgOgSQgGADgDAGQgEAFgCAGQgCAIAAAHQAAAHACAHQACAHAEAGQADAFAGAEQAGADAIAAQAIAAAGgDQAGgEAEgFQAEgGACgHQABgHAAgHQAAgHgBgIQgCgGgEgFQgEgGgGgDQgGgEgIAAQgIAAgGAEg");
	this.shape_273.setTransform(241.325,150.95);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_274.setTransform(231.525,152.475);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgXAvQgGgBgEgDQgEgDgDgGQgCgFAAgHQAAgJAEgGQAFgFAGgCQAIgDAIgCIARgCIAHgBIAEgBIADgFIABgFQAAgGgBgEQgCgDgEgDIgIgDIgIAAQgLAAgHAEQgGAGgBALIgLAAQABgIACgGQADgGAFgEQAFgEAHgBQAHgCAHAAIAMABQAGABAFADQAFAEADAFQACAHAAAJIAAAwQABAHAGAAIAEgBIAAAKIgDAAIgFAAIgGgBIgFgDIgBgFIgBgHIgHAIQgCAEgFACQgDADgFAAQgEACgHAAQgGAAgGgCgAAQAAIgEAAIgPACIgNADQgHACgEADQgEAFAAAGQAAAFACADQABAEAEACIAGADIAIABQAHAAAEgCQAGgCAFgDQAEgEADgFQACgFAAgIIAAgNQgBACgEABg");
	this.shape_275.setTransform(222.3,152.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgTA+QgHgEgGgHQgFgHgCgIQgDgKAAgJQAAgKADgIQACgJAFgHQAGgGAHgEQAIgFALAAIAJABIAJAFQAFACADAEQADAEACAFIAAg2IAMAAIAACAIgLAAIAAgRIAAAAQgCAEgDAEQgEAEgEACIgKAEIgJACQgLgBgIgDgAgOgSQgGADgDAGQgEAFgCAGQgCAIAAAHQAAAHACAHQACAHAEAGQADAFAGAEQAGADAIAAQAIAAAGgDQAGgEAEgFQAEgGACgHQABgHAAgHQAAgHgBgIQgCgGgEgFQgEgGgGgDQgGgEgIAAQgIAAgGAEg");
	this.shape_276.setTransform(212.075,150.95);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAHQgDAFAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_277.setTransform(202.5542,152.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgFBAIAAh/IALAAIAAB/g");
	this.shape_278.setTransform(196.175,150.825);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgZAqQgKgJgCgQIAMAAQAAALAIAGQAIAGAKgBIAJAAIAIgEQAEgCACgDQACgDAAgFQAAgEgBgDIgFgFIgGgCIgIgDIgOgDIgKgCIgIgFQgEgDgBgEQgCgEAAgGQAAgHADgFQADgFAFgDQAFgDAGgBQAGgCAGAAIANACQAGABAEAEQAFAEACAFQADAGABAIIgMAAQAAgGgCgDQgCgEgDgDIgIgDIgIgBIgIAAIgHADQgDACgCADQgCADAAAEQAAAEACADIAFAFIAGACIAGACIAOAEIAKACQAFABADADQAEADACAEQADAFAAAGQAAAIgEAFQgDAGgFADQgGADgGABIgNACQgQAAgKgHg");
	this.shape_279.setTransform(185.175,152.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAHQgDAFAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_280.setTransform(176.3042,152.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgMBAQgHgBgFgEQgGgDgDgFQgEgGAAgHIALAAQABAFADAEQACADAEACQAEADAEABIAIABQAQAAAHgJQAHgJAAgRIAAgNIAAAAQgEAJgIAFQgHAFgLAAQgKAAgIgDQgIgEgFgHQgFgGgCgIQgDgJAAgKQAAgJADgJQADgIAFgHQAGgGAHgEQAIgDAJAAQAGAAAEABIAJAEIAGAGIAFAHIAAAAIAAgQIAMAAIAABVQAAAKgDAIQgCAIgFAGQgFAGgIADQgHADgMAAQgGAAgGgCgAgNg0QgFADgEAFQgEAGgCAHQgBAGAAAIQAAAHABAGQACAGAEAFQAEAFAGADQAFAEAHAAQAIAAAFgEQAGgDAEgFQADgFACgGQACgGAAgHQAAgHgBgHQgCgHgEgFQgDgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_281.setTransform(166.325,154.325);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgFBAIAAhcIALAAIAABcgAgFgtIAAgSIALAAIAAASg");
	this.shape_282.setTransform(159.925,150.825);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_283.setTransform(155.975,152.5481);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAHQgDAFAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_284.setTransform(148.0542,152.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgFAuIgjhbIAMAAIAcBQIABAAIAdhQIALAAIgiBbg");
	this.shape_285.setTransform(139.175,152.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgTBAQgKgCgHgGQgGgFgEgJQgEgIABgMIAMAAQAAAKADAGQADAHAGAEQAGAEAHACQAIACAIAAIALgCQAGgBAFgEQAFgDADgFQAEgFAAgHQAAgFgCgEQgDgEgEgDIgIgEIgKgDIgbgHIgLgCIgJgGQgEgEgDgFQgCgFAAgIQAAgFACgGQABgGAFgGQAFgFAJgEQAJgEANAAQAJAAAIADQAJACAGAFQAHAFAEAIQAEAHAAAKIgNAAQAAgHgDgGQgDgFgFgEQgEgEgHgCQgGgCgGAAIgMACQgGABgEADQgEADgDAFQgDAFAAAHQAAAFACADIAEAGIAGADIAIADIAeAHIANAEQAGACAEAEQAFAEADAGQACAFAAAIIAAAGIgCAIIgFAIQgDAEgGADQgFAEgIACQgJACgLAAQgKAAgKgDg");
	this.shape_286.setTransform(129.3719,150.825);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgFAuIgjhbIAMAAIAcBQIABAAIAdhQIALAAIgiBbg");
	this.shape_287.setTransform(114.575,152.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgXAvQgGgBgEgDQgEgDgDgGQgCgFAAgHQAAgJAEgGQAFgFAGgCQAHgDAJgCIASgCIAGgBIAEgBIADgFIABgFQAAgGgCgEQgBgDgEgDQgDgCgEgBIgJAAQgLAAgHAEQgHAGAAALIgLAAQAAgIADgGQADgGAFgEQAFgEAGgBQAIgCAHAAIALABQAGABAGADQAEAEAEAFQADAHAAAJIAAAwQAAAHAGAAIAEgBIAAAKIgDAAIgFAAIgHgBIgEgDIgBgFIgBgHIgHAIQgCAEgFACQgDADgFAAQgEACgHAAQgGAAgGgCgAAQAAIgEAAIgOACIgPADQgGACgEADQgEAFAAAGQAAAFACADQACAEACACIAHADIAIABQAGAAAFgCQAGgCAFgDQAEgEACgFQADgFAAgIIAAgNQgCACgDABg");
	this.shape_288.setTransform(106,152.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAaAwIAAg5IgBgLQgBgFgCgEQgDgEgFgCQgEgCgHAAQgGAAgFACQgGADgDAEIgGAKQgCAGAAAHIAAA1IgMAAIAAhcIAMAAIAAAQIAAAAQADgJAJgFQAIgFAJAAQAJAAAHADQAHACAEAFQAEAEABAHQACAHAAAIIAAA7g");
	this.shape_289.setTransform(91.275,152.475);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAHQgDAFAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_290.setTransform(81.9042,152.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_291.setTransform(69.875,152.5481);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgXA/QgGgBgEgEQgEgDgDgFQgCgFAAgHQAAgKAEgFQAFgGAGgDQAIgDAIgBIARgCIAHgBIAEgCIADgEIABgFQAAgFgBgEQgCgEgEgCIgIgDIgIgBQgLAAgHAFQgGAFgBAMIgLAAQABgIACgGQADgGAFgEQAFgEAHgCQAHgBAHAAIAMABQAGABAFADQAFAEADAFQACAGAAAKIAAAwQABAHAGAAIAEgBIAAAKIgDAAIgFAAIgGgBIgFgDIgCgFIAAgHIgHAIQgCAEgFACQgDACgFABQgEACgHAAQgGAAgGgCgAAQAOIgEACIgPACIgNADQgHACgEADQgEAEAAAHQAAAEACAEQABADAEACIAGAEIAIABQAGAAAFgCQAGgCAFgDQAEgEADgFQACgGAAgHIAAgPQgBACgEABgAAHguIAAgSIANAAIAAASgAgXguIAAgSIAMAAIAAASg");
	this.shape_292.setTransform(62.1,151.025);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAHQgDAFAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_293.setTransform(47.6542,152.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgTA+QgHgEgGgHQgFgHgCgIQgDgKAAgJQAAgKADgIQACgJAFgHQAGgGAHgEQAIgFALAAIAJABIAJAFQAFACADAEQADAEACAFIAAg2IAMAAIAACAIgLAAIAAgRIAAAAQgCAEgDAEQgEAEgEACIgKAEIgJACQgLgBgIgDgAgOgSQgGADgDAGQgEAFgCAGQgCAIAAAHQAAAHACAHQACAHAEAGQADAFAGAEQAGADAIAAQAIAAAGgDQAGgEAEgFQAEgGACgHQABgHAAgHIgBgPQgCgGgEgFQgEgGgGgDQgGgEgIAAQgIAAgGAEg");
	this.shape_294.setTransform(37.575,150.95);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgSAtQgIgEgFgGQgFgHgCgJQgDgJAAgKQAAgIADgJQACgJAFgHQAFgGAIgFQAIgEAKAAQALAAAIAEQAIAFAFAHQAFAHACAKQADAJgBAJIhGAAIABANQACAHAEAEQAEAGAFADQAGADAHAAQANABAHgHQAHgGADgLIALAAQgEAPgJAKQgKAIgSAAQgKAAgIgEgAgLgkQgGADgDAFQgEAEgCAHQgDAFAAAGIA7AAQAAgGgCgGQgCgGgEgEQgEgFgFgDQgGgCgHAAQgGAAgFACg");
	this.shape_295.setTransform(28.0542,152.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgWAvIAAhcIALAAIAAAWQAEgLAIgGQAJgGANAAIAAALQgIAAgGACQgGADgEAEQgFAFgCAGQgDAGAAAIIAAAwg");
	this.shape_296.setTransform(21.375,152.5481);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAhBAIghhyIgfByIgOAAIgjh/IANAAIAdBvIAghvIAOAAIAgBvIAdhvIAMAAIgjB/g");
	this.shape_297.setTransform(10.125,150.825);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("ABGB5IgDgIIgCgKIgBgLIAAgIIgCgaQgCgNgFgKQgFgKgJgGQgKgGgQABIhXAAIAABrIgXAAIAAjxIBuAAQAPAAAOADQANAEAKAIQAKAHAGAMQAGAMAAARQAAAXgMARQgMARgXAEIAAAAQAMACAIAFQAIAEAEAHQAFAHACAKIADAUIABAPIABASIAEARQACAIAEAEgAhIgFIBWAAQAKAAAKgDQAJgEAHgGQAIgGAEgJQAEgIAAgMQAAgWgNgNQgNgNgaAAIhWAAg");
	this.shape_298.setTransform(214.525,64.925);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AhTB5IAAjxICmAAIAAATIiPAAIAABYICGAAIAAATIiGAAIAABfICRAAIAAAUg");
	this.shape_299.setTransform(190.25,64.925);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AhTCbIAAjxICmAAIAAATIiQAAIAABXICHAAIAAAUIiHAAIAABfICSAAIAAAUgAgchqIAjgwIAbAAIgsAwg");
	this.shape_300.setTransform(167.1,61.55);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AhhB5IAAjxIBUAAQA3ABAcAeQAcAdAAA8QAAA8gcAeQgcAeg3ABgAhKBlIAyAAQAZAAATgFQATgGAMgMQAMgMAGgUQAGgTAAgbQAAgagGgUQgGgTgMgMQgMgNgTgFQgTgGgZAAIgyAAg");
	this.shape_301.setTransform(142.175,64.925);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgLB5IAAjxIAXAAIAADxg");
	this.shape_302.setTransform(123.225,64.925);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("ABUB5IgdhLIhuAAIgdBLIgYAAIBhjxIAZAAIBfDxgAgvAaIBeAAIgvh7g");
	this.shape_303.setTransform(93.325,64.925);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgLB5IAAhkIhfiNIAbAAIBPB6IBQh6IAbAAIhgCNIAABkg");
	this.shape_304.setTransform(71.75,64.925);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("ABGB5IiNjMIAAAAIAADMIgYAAIAAjxIAaAAICNDMIAAAAIAAjMIAYAAIAADxg");
	this.shape_305.setTransform(46.4,64.925);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AhUAKIAAgTICpAAIAAATg");
	this.shape_306.setTransform(10.5,67.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("ABGB5IgDgIIgCgKIgBgLIAAgIIgCgaQgCgNgFgKQgFgKgJgGQgKgGgQABIhXAAIAABrIgXAAIAAjxIBuAAQAPAAAOADQANAEAKAIQAKAHAGAMQAGAMAAARQAAAXgMARQgMARgXAEIAAAAQAMACAIAFQAIAEAEAHQAFAHACAKIADAUIABAPIABASIAEARQACAIAEAEgAhIgFIBWAAQAKAAAKgDQAJgEAHgGQAIgGAEgJQAEgIAAgMQAAgWgNgNQgNgNgaAAIhWAAg");
	this.shape_307.setTransform(235.025,22.775);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgxB0QgVgKgPgSQgOgRgHgXQgHgXAAgZQAAgYAHgXQAHgWAOgSQAPgRAVgLQAWgLAbAAQAcAAAWALQAVALAPARQAOASAHAWQAIAXgBAYQABAZgIAXQgHAXgOARQgPASgVAKQgWAKgcAAQgbAAgWgKgAgohhQgSAKgKAPQgMAPgFATQgGATAAATQAAAUAGATQAFATAMAPQAKAQASAJQARAJAXAAQAYAAARgJQARgJALgQQALgPAGgTQAGgTAAgUQAAgTgGgTQgGgTgLgPQgLgPgRgKQgRgIgYgBQgXABgRAIg");
	this.shape_308.setTransform(207.45,22.75);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("ABGB5IiNjMIAAAAIAADMIgXAAIAAjxIAaAAICMDMIAAAAIAAjMIAXAAIAADxg");
	this.shape_309.setTransform(179.9,22.775);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("ABUB5IgdhLIhuAAIgdBLIgYAAIBhjxIAZAAIBfDxgAgvAaIBeAAIgvh7g");
	this.shape_310.setTransform(154.275,22.775);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("ABUB5IgdhLIhuAAIgdBLIgYAAIBhjxIAZAAIBfDxgAgvAaIBeAAIgvh7g");
	this.shape_311.setTransform(117.425,22.775);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AhOB5IAAjxIAWAAIAADdICHAAIAAAUg");
	this.shape_312.setTransform(95.85,22.775);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("ABdB5IAAjRIAAAAIhUDRIgUAAIhQjRIgBAAIAADRIgXAAIAAjxIAiAAIBRDTIBSjTIAiAAIAADxg");
	this.shape_313.setTransform(68.525,22.775);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("ABUB5IgdhLIhuAAIgdBLIgYAAIBhjxIAZAAIBfDxgAgvAaIBeAAIgvh7g");
	this.shape_314.setTransform(40.875,22.775);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgsB0QgVgKgPgSQgOgRgIgXQgGgXAAgZQAAgYAGgXQAIgWAOgSQAPgRAVgLQAWgLAbAAQATABARAFQARAFANAKQANAKAKAPQAJAPAEAUIgYAAQgBgLgGgKQgGgKgJgJQgLgKgOgFQgOgGgRAAQgXABgRAIQgSAKgLAPQgLAPgFATQgFATgBATQABAUAFATQAFATALAPQALAQASAJQARAJAXAAQAUAAAQgHQAQgGAKgNQALgLAGgRQAFgQAAgUIhSAAIAAgSIBmAAIAAB7IgRAAIgCgsIgBAAQgGANgJAIQgJAKgLAGQgLAGgNACQgMADgNAAQgbAAgWgKg");
	this.shape_315.setTransform(14.25,22.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Copy, new cjs.Rectangle(0,0,339.9,418.9), null);


(lib.Bkg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Lager_1
	this.instance = new lib.bkg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bkg, new cjs.Rectangle(0,0,1500,1000), null);


(lib.Sidefield = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_95 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(95).call(this.frame_95).wait(1));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(194.45,481.15,1,1,0,0,0,60.2,15.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:false},0).to({y:524.9,alpha:1},28,cjs.Ease.cubicOut).wait(1));

	// Copy
	this.instance_1 = new lib.Copy();
	this.instance_1.setTransform(417.1,291.45,1,1,0,0,0,170,209.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({x:217.1,alpha:1},29,cjs.Ease.cubicOut).wait(38));

	// Sidefield-BKG
	this.instance_2 = new lib.SidefieldBKG();
	this.instance_2.setTransform(596,300,1,1,0,0,0,194.5,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:194.5},33,cjs.Ease.quadOut).wait(62));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,790.5,600);


(lib.Base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo_white_svg
	this.instance = new lib.CompoundPath();
	this.instance.setTransform(211,159.1,1,1,0,0,0,70,21.3);
	this.instance.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// Bkg
	this.instance_1 = new lib.Bkg();
	this.instance_1.setTransform(600.05,399.8,0.6533,0.653,0,0,0,750.1,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:499.8,scaleX:0.8,scaleY:0.8},359).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,800);


// stage content:
(lib._980x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		canvas.addEventListener("mouseover", mouseOver.bind(this));
		
		function mouseOver() {
		
			this.sideField.gotoAndPlay(1);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Sidefield
	this.sideField = new lib.Sidefield();
	this.sideField.name = "sideField";
	this.sideField.setTransform(785.5,300,1,1,0,0,0,194.5,300);

	this.timeline.addTween(cjs.Tween.get(this.sideField).wait(1));

	// Base
	this.instance = new lib.Base();
	this.instance.setTransform(490,295.1,1,1,0,0,0,600,399.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(490,268.5,891.5,353);
// library properties:
lib.properties = {
	id: '8B8AA62DF73447989A9ED6BB344518F4',
	width: 980,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
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
an.compositions['8B8AA62DF73447989A9ED6BB344518F4'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;