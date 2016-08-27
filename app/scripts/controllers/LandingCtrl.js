(function() {
     function LandingCtrl($firebaseObject) {
         this.heroTitle = "you are the bomb!";
         
         

         var dbRef = firebase.database().ref().child('tony');
         this.object = $firebaseObject(dbRef);
         //this.sayHello = () => { return `${this.object.name}`; }
         //this.sayHello = this.object.name;
         
         //var myObj = {name: 'grace'};
         //dbRef.push().set(myObj);
         

         
     }
 
     angular
         .module('pomodoro')
         .controller('LandingCtrl', ['$firebaseObject', LandingCtrl]);
 })();




