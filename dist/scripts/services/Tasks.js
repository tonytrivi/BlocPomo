(function() {
  function Tasks($firebaseArray,CONSTANTS) {
    var dbRef = firebase.database().ref();
      
    /**
    * @desc Array of task items.
    * @type {Object}
    */  
    var tasks = $firebaseArray(dbRef);
  
    return {
      all: tasks,
      addTask: function (desc) {
          //add tasks with a timestamp
          var timeStamp = Date.now();
          var newTask = { "description": desc,
                          "timeStamp": timeStamp };
          tasks.$add(newTask);
      }
    };
  }
  angular
    .module('pomodoro')
    .factory('Tasks', ['$firebaseArray','CONSTANTS',Tasks]);
})();