/**
 * Created by kevin gosse on 06/08/2015.
 */

(function(env){
   'use strict' ;

   if (typeof env.define === 'function' && env.define.amd)
      env.define(myModule);
   else
      env.myModule = myModule();

   function myModule() {
      // Le code du module ici

      function circularProgressBar(canvas, color, lineWidth, direction, duration,
                      style, sAngle, eAngle, radius)
      {

         var self = {};

         self.canvas = canvas || document.getElementById('canvas');
         self.canvas.width = self.canvas.clientWidth;
         self.canvas.height = self.canvas.clientHeight;
         self.ctx = self.canvas.getContext('2d');
         self.segmentObj = {seg: 0};
         self.totalSegments = 1000;

         var percentageLoaded = 0;


         self.endAnimation = false;

         self.direction = direction || 2;

         /*
          1: erase counter-clockwise (false + negative)
          2: fill clockwise (false + positive)
          3: fill counter-clockwise (true + negative)
          4: erase clockwise (true + positive)
          */

         self.clockwise = (self.direction == 1 || self.direction == 2) ? false : true;
         self.sign = (self.direction == 1 || self.direction == 3) ? -1 : 1;

         //canvas initial set up
         self.ctx.strokeStyle = color || 'rgb(0,0,200)';
         self.ctx.lineWidth = lineWidth || 5;
         self.ctx.lineCap = style || 'round';
         self.sAngle = sAngle || 0;
         self.eAngle = eAngle || 359;
         self.radius = radius || 100;

         self.duration = duration || 1;

         (new TimelineMax()).set(self.canvas,{transform: "rotate("+self.sAngle+"deg)"});

         self.progressTl = new TimelineMax({paused: true, onUpdate: progressUpdate});
         self.progressTl
             .to(self.segmentObj,self.duration, {seg: self.totalSegments, ease: Linear.easeNone,roundProps: 'seg'}, 'begin');

         function getRadians(degreesValue)
         {
            var radiansValue = (Math.PI / 180) * degreesValue;
            return radiansValue;
         }

         function manualCircle(start, end)
         {
            var width = self.canvas.width;
            var height = self.canvas.height;

            self.ctx.clearRect(0,0,height,width);//we have to clear the canvas otherwise the line looks horrible
            self.ctx.beginPath();
            self.ctx.arc(width / 2, height / 2, self.radius, start, end, self.clockwise);
            self.ctx.stroke();
         }


         function circleUpdate()
         {
            //degrees of the arc, could be less, in this case we create a full circle
            //var amplitude = 360,
            var amplitude = self.eAngle,
                step = amplitude / self.totalSegments,
                endAngle = (step * (self.segmentObj.seg + 1));//the new angle for the next step in the arc

            //draw the new arc
            //var sAngle = getRadians(self.sAngle);
            var sAngle = getRadians(0);
            //sAngle = self.direction == false ? sAngle : -1 * sAngle;
            var eAngle = getRadians(endAngle);
            //eAngle = self.direction == false ? eAngle : -1 * eAngle;
            manualCircle(self.sign * sAngle, self.sign * eAngle);
         }

         function load()
         {
            self.progressTl.play();
            //TweenLite.to(self.progressTl, self.duration, {progress:currentProgress, ease:Linear.easeNone});
         }

         function progressUpdate()
         {
            //the percentage loaded based on the tween's progress
            percentageLoaded = Math.round(self.progressTl.progress() * 100);
            //we put the percentage in the screen
            circleUpdate();
         }

         function resetProgress()
         {
            //set the progress bar to width 0, no progress
            self.progressTl.progress(0).pause();
            clear();
         }

         function clear()
         {
            var width = self.canvas.width;
            var height = self.canvas.height;
            self.ctx.clearRect(0,0,height,width);//we have to clear the canvas otherwise the line looks horrible
            self.ctx.beginPath();
            self.ctx.stroke();
         }

         var service = {
            play:        load,
            reset:       resetProgress,
            clear:       clear,
            getTimeline: function(){
               return self.progressTl;
            }
         };

         return service;

      };

      return circularProgressBar;
   }
})(this);
