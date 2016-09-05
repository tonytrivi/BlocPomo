(function() {
  function Tasks($firebaseArray,CONSTANTS) {
    var dbRef = firebase.database().ref();
      
    /**
    * @desc Array of task items.
    * @type {Object}
    */  
    var tasks = $firebaseArray(dbRef);
      
    //firebase experimenting
         //var dbRef = firebase.database().ref().child('tony');
         //this.object = $firebaseObject(dbRef);
         
         //this.sayHello = () => { return `${this.object.name}`; }
         //this.sayHello = this.object.name;
         
         //var myObj = {name: 'grace'};
         //dbRef.push().set(myObj);  
      
    return {
      all: tasks
      // remaining logic for tasks
    };
      
      
  }

  angular
    .module('pomodoro')
    .factory('Tasks', ['$firebaseArray','CONSTANTS',Tasks]);
})();