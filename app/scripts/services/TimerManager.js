(function() {
     function TimerManager($interval) {
     var TimerManager = {};

/**
* @desc Session length.
* @type {Number}
*/
var SESSION_LENGTH = 10;  //seconds - 25 minutes

/**
* @desc promise for the $interval function.
* @type {Object}
*/
var intervalPromise;
         
/**
* @desc stops countdown and resets state.
* @type {Object}
*/
var stopCountdown = function () {
    if (angular.isDefined(intervalPromise)) {
        $interval.cancel(intervalPromise);
        intervalPromise = undefined;
        
        TimerManager.running = false;
        
        if(TimerManager.currentTime == 0){
            //session completed
            TimerManager.sessionCompleted = true;
        }
        //reset the timer
        TimerManager.currentTime = SESSION_LENGTH;
    }
};
         
/**
* @desc Starts the countdown for a session
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
* @desc Timer time remaining.
* @type {Number}
*/
TimerManager.currentTime = null;

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
* @function TimerManager.startSession
* @scope public
* @desc Starts or resets the timer.
*/
TimerManager.startSession = function() {
    if (TimerManager.running) {
        stopCountdown();
    }
    else {
        TimerManager.currentTime = SESSION_LENGTH;
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
        TimerManager.currentTime = SESSION_LENGTH;
        TimerManager.onBreak = true;
        //begin countdown
        count();
    }
            
};
             
    return TimerManager;
}
 
     angular
         .module('pomodoro')
         .factory('TimerManager', ['$interval', TimerManager]);
})();