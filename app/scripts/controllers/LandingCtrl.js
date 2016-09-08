(function() {
     function LandingCtrl($firebaseObject,TimerManager,Tasks,CONSTANTS,$scope) {
         this.timerManager = TimerManager;
         $scope.timeMan = TimerManager;
         this.allTasks = Tasks.all;
         this.description;
         
         this.RESET = "reset";
         this.START_SESSION = "start session";
         this.START_BREAK = "start break";
         
         this.sessionDisplay = this.START_SESSION;
         this.breakDisplay = this.START_BREAK;
         
         
         this.addTask = function () {
             Tasks.addTask(this.description);
             this.description = "";
         };
         
         this.startSession = function () {
             if (!TimerManager.running) {
                this.sessionDisplay = this.RESET;
                this.breakDisplay = this.START_BREAK;
                this.timerManager.startSession();
             }
             else {
                this.sessionDisplay = this.START_SESSION;
                this.timerManager.startSession();
                 
             }
             
         
         };
         
         /**
* @function TimerManager.startBreak
* @scope public
* @desc Starts or resets the timer for a break.
*/
         this.startBreak = function () {
             if (!TimerManager.running) {
                this.breakDisplay = this.RESET;
                this.sessionDisplay = this.START_SESSION;
                this.timerManager.startBreak();
                 
                
             }
             else {
                this.breakDisplay = this.START_BREAK;
                
                
                this.timerManager.startBreak();
                 
             }
         };
                 
         var currentBuzzObject = new buzz.sound('/assets/sounds/DING2', {
                formats: ['mp3'],
                preload: true
         });
         
         $scope.$watch('this.timerManager.currentTime', function() {
             if(this.timerManager.currentTime == 0) {
                 currentBuzzObject.play();
             }   
             
         });

     }
 
     angular
         .module('pomodoro')
         .controller('LandingCtrl', ['$firebaseObject','TimerManager','Tasks','CONSTANTS','$scope', LandingCtrl]);
 })();




