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
         self.totalAmount = 6;
         self.currentCount = 0;

         var percentageLoaded = 0;

         self.progressUnit = 1 / self.totalAmount;

         self.endAnimation = false;

         self.direction = direction;

         //canvas initial set up
         self.ctx.strokeStyle = color || 'rgb(0,0,200)';
         self.ctx.lineWidth = lineWidth || 5;
         self.ctx.lineCap = style || 'round';
         self.sAngle = sAngle || 0;
         self.eAngle = eAngle || 360;
         self.radius = radius || 100;

         self.duration = duration || 1;

         self.progressTl = new TimelineMax({paused: true, onUpdate: progressUpdate});

         self.progressTl
             .to(self.segmentObj, self.duration, {seg: self.totalSegments,ease: Linear.easeNone,roundProps: 'seg'}, 0);

         function getRadians(degreesValue)
         {
            var radiansValue = (Math.PI / 180) * degreesValue;
            return radiansValue;
         }

         function manualCircle(start, end)//the params are start angle, end angle and boolean for clokwise or counter clockwise
         {
            var width = self.canvas.width;
            var height = self.canvas.height;

            self.ctx.clearRect(0,0,height,width);//we have to clear the canvas otherwise the line looks horrible
            self.ctx.beginPath();
            self.ctx.arc(width / 2, height / 2, self.radius, start, end, self.direction);
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
            var sAngle = getRadians(self.sAngle);
            sAngle = self.direction == false ? sAngle : -1 * sAngle;
            var eAngle = getRadians(endAngle);
            eAngle = self.direction == false ? eAngle : -1 * eAngle;
            manualCircle(sAngle, eAngle);
         }

         function loadProgress()
         {
            var currentProgress = self.progressUnit * ++self.currentCount;
            TweenLite.to(self.progressTl, self.duration, {progress: currentProgress, ease: Linear.easeNone});

            if (self.currentCount == self.totalAmount)
            {
               self.currentCount = 0;
               self.endAnimation = true;
            }

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
            self.progressTl.progress(0);
            percentageLoaded = 0;
            self.currentCount = 0;
            self.endAnimation = false;

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

         var main = function(){
            while (!self.endAnimation)
               loadProgress();
         };

         var service = {
            play:  main,
            reset: resetProgress,
            clear: clear
         };

         return service;

      };

      return circularProgressBar;
   }
})(this);
