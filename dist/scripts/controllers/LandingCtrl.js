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
         
         /**
         * @function addTask
         * @desc Adds a task and resets the display for the next.
         */
         this.addTask = function () {
             if(this.description.length > 0) {
                Tasks.addTask(this.description);
                this.description = "";
             }
         };
         
         /**
         * @function startSession
         * @desc Starts or resets a session. Ensures that the user has the correct instructions.
         */
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
         * @function startBreak
         * @desc Starts or resets a break. Ensures that the user has the correct instructions.
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
         
         $scope.$watch('$scope.timeMan.currentTime', function() {
             if($scope.timeMan.currentTime == 0) {
                 currentBuzzObject.play();
             }   
         });
     }
     angular
         .module('pomodoro')
         .controller('LandingCtrl', ['$firebaseObject','TimerManager','Tasks','CONSTANTS','$scope', LandingCtrl]);
 })();




