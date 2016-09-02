(function() {
     function LandingCtrl($firebaseObject,TimerManager) {
         this.timerManager = TimerManager;
         this.RESET = "Reset";
         this.START_SESSION = "Start Session";
         this.START_BREAK = "Start Break";
         
         this.sessionDisplay = this.START_SESSION;
         this.breakDisplay = this.START_BREAK;
         
         this.startSession = function () {
             if (!TimerManager.running) {
                this.sessionDisplay = this.RESET;
                this.timerManager.startSession();
             }
             else {
                this.sessionDisplay = this.START_SESSION;
                this.timerManager.startSession();
                 
             }
             
         
         };
         
         
         this.startBreak = function () {
             if (!TimerManager.running) {
                this.breakDisplay = this.RESET;
                this.timerManager.startBreak();
             }
             else {
                this.breakDisplay = this.START_BREAK;
                this.timerManager.startBreak();
                 
             }
             
         
         };
         

         
         
         //firebase experimenting
         //var dbRef = firebase.database().ref().child('tony');
         //this.object = $firebaseObject(dbRef);
         
         //this.sayHello = () => { return `${this.object.name}`; }
         //this.sayHello = this.object.name;
         
         //var myObj = {name: 'grace'};
         //dbRef.push().set(myObj);
         
 
         

         
     }
 
     angular
         .module('pomodoro')
         .controller('LandingCtrl', ['$firebaseObject','TimerManager', LandingCtrl]);
 })();




