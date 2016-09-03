(function() {
     function TimerManager($interval, CONSTANTS) {
     var TimerManager = {};

/**
* @desc promise for the $interval function.
* @type {Object}
*/
var intervalPromise;
         
/**
* @desc Timer time remaining.
* @type {Number}
*/
TimerManager.currentTime = CONSTANTS.SESSION_TIME;

/**
* @desc Lets you know if the timer is counting down.
* @type {Boolean}
*/
TimerManager.running = false;
         
/**
* @desc The timer has finished counting down.
* @type {Boolean}
*/
TimerManager.sessionCompleted = false;
         
/**
* @desc Indicates whether a session or break is running.
* @type {String}
*/
TimerManager.onBreak = false;  //session or break
         
/**
* @desc Indicates sessions completed
* @type {Number}
*/
var completedSessions = 0;
         
/**
* @desc Holds the sound object
* @type {Object}
*/
var dingObject = null;
         
/**
* @desc sets the ding
* @type {void}
*/
var setSound = function () {
  dingObject = new buzz.sound('/assets/sounds/DING2', {
                formats: ['mp3'],
                preload: true
            });
};
         
/**
* @desc stops countdown and resets state.
* @type {void}
*/
var stopCountdown = function () {
    if (angular.isDefined(intervalPromise)) {
        $interval.cancel(intervalPromise);
        intervalPromise = undefined;
        
        TimerManager.running = false;
        
        if (TimerManager.currentTime == 0 && TimerManager.onBreak == false){
            //session completed
            dingObject.play();
            TimerManager.sessionCompleted = true;
            completedSessions++;
            TimerManager.onBreak = true;
            
            if ((completedSessions % 4) == 0){
                TimerManager.currentTime = CONSTANTS.LONG_BREAK_TIME;
            }
            else {
                TimerManager.currentTime = CONSTANTS.BREAK_TIME;
            }
            
        } 
        else if (TimerManager.currentTime == 0 && TimerManager.onBreak == true){
            //break completed
            dingObject.play();
            TimerManager.sessionCompleted = true;
            TimerManager.onBreak = false;
            TimerManager.currentTime = CONSTANTS.SESSION_TIME;
        } 
        else if (TimerManager.currentTime != 0 && TimerManager.onBreak == true){
            //break reset
            TimerManager.sessionCompleted = false;
            TimerManager.currentTime = CONSTANTS.BREAK_TIME;
        }
        else {
            //session reset by the user
            TimerManager.sessionCompleted = false;
            TimerManager.currentTime = CONSTANTS.SESSION_TIME;
        }

       
    }
};
         
/**
* @desc Counts down for a session or for a break.
* @type {void}
*/
var count = function () {
    TimerManager.running = true;
    intervalPromise = $interval(function(){
        if (TimerManager.currentTime > 0) {
            TimerManager.currentTime--;
        }
        else {
            //count is over
            stopCountdown();
        }   
    }, 1000);
};

/**
* @function TimerManager.startSession
* @scope public
* @desc Starts or resets the timer for a session.
*/
TimerManager.startSession = function() {
    if (TimerManager.running) {
        stopCountdown();
    }
    else {
        //reset if we are starting
        TimerManager.currentTime = CONSTANTS.SESSION_TIME;
        TimerManager.sessionCompleted = false;
        //begin countdown
        count();
    }
            
};
         
/**
* @function TimerManager.startBreak
* @scope public
* @desc Starts or resets the timer for a break.
*/
TimerManager.startBreak = function() {
    if (TimerManager.running) {
        stopCountdown();
    }
    else {
        TimerManager.sessionCompleted = false;
        
        count();
    }
            
};
    
    setSound();
    return TimerManager;
}
 
     angular
         .module('pomodoro')
         .factory('TimerManager', ['$interval','CONSTANTS', TimerManager]);
})();