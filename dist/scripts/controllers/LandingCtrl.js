(function() {
     function LandingCtrl($firebaseObject,TimerManager) {
         this.timerManager = TimerManager;
    
         
         
         var dbRef = firebase.database().ref().child('tony');
         this.object = $firebaseObject(dbRef);
         //this.sayHello = () => { return `${this.object.name}`; }
         //this.sayHello = this.object.name;
         
         //var myObj = {name: 'grace'};
         //dbRef.push().set(myObj);
         
         this.startTimer = function(){
             TimerManager.start();
         }
         

         
     }
 
     angular
         .module('pomodoro')
         .controller('LandingCtrl', ['$firebaseObject','TimerManager', LandingCtrl]);
 })();




