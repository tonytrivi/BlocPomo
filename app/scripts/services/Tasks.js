(function() {
  function Tasks($firebaseArray,CONSTANTS) {
    var dbRef = firebase.database().ref();
      
    /**
    * @desc Array of task items.
    * @type {Object}
    */  
    var tasks = $firebaseArray(dbRef);
      
    //var task = { desc: "this is a task" };
    //tasks.$add(task);
    //dbRef.push().set(task);  
      
    
    //firebase experimenting
         //var dbRef = firebase.database().ref().child('tony');
         //this.object = $firebaseObject(dbRef);
         
         //this.sayHello = () => { return `${this.object.name}`; }
         //this.sayHello = this.object.name;
         
  
    return {
      all: tasks,
      addTask: function (desc) {
          var newTask = { "description": desc };
          tasks.$add(newTask);
      }
      
    };
      
      
  }

  angular
    .module('pomodoro')
    .factory('Tasks', ['$firebaseArray','CONSTANTS',Tasks]);
})();