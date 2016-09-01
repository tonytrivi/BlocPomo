(function() {
     function TimerManager($interval) {
     var TimerManager = {};

/**
* @desc Session length.
* @type {Number}
*/
var SESSION_LENGTH = 1500;  //seconds - 25 minutes

/**
* @desc promise for the $interval function.
* @type {Object}
*/
var intervalPromise = null;
         
/**
* @desc stops countdown and resets state.
* @type {Object}
*/
var stopCountdown = function () {
    if (intervalPromise) {
        $interval.cancel(intervalPromise);
        TimerManager.running = false;
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
* @desc Let's you know if the timer is counting down.
* @type {Boolean}
*/
TimerManager.running = false;

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
             
    return TimerManager;
}
 
     angular
         .module('pomodoro')
         .factory('TimerManager', ['$interval', TimerManager]);
})();