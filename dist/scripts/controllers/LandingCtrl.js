(function() {
     function LandingCtrl($firebaseObject,TimerManager,Tasks,CONSTANTS) {
         this.timerManager = TimerManager;
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
     }
     angular
         .module('pomodoro')
         .controller('LandingCtrl', ['$firebaseObject','TimerManager','Tasks','CONSTANTS', LandingCtrl])
         .directive('tonyTimer', [function () {
            function link(scope, element, attrs) {
                var currentBuzzObject = new buzz.sound('/assets/sounds/DING2', {
                    formats: ['mp3'],
                    preload: true
                });
         
                scope.$watch('landing.timerManager.currentTime', function() {
                    if(scope.landing.timerManager.currentTime == 0) {
                        currentBuzzObject.play();
                    }   
                });              
            }
            return {
                scope: false,
                template: "<h1 class='time'>{{landing.timerManager.currentTime | timeConverter | date:'mm:ss'}}</h1>",
                link: link
            };
         }]);
 })();




