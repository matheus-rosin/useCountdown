# useCountdown
React custom hook for providing a countdown

## Usage

Import the script file:

```javascript
import useCountdown from '[...]';
```

Call it inside your function component:

```javascript
const {
  countdown,
  secondsLeft,
  startCountdown,
  stopCountdown,
  resumeCountdown,
  restartCountdown,
} = useCountdown(60);
```

When invoking the function, you must pass a number as argument. This is the quantity of __seconds__ of your countdown.

It will return the following:

* `countdown`: an array: `[hours, minutes, seconds]`;
* `secondsLeft`: how much time (seconds) there are yet, before countdown is over;
* `stopCountdown`: stop the countdown from running;
* `startCountdown`: start the countdown (_but remember: it will be automatically initialized when rendering the component_);
* `resumeCountdown`: resume the countdown, starting on the time it has stopped;
* `restartCountdown`: stop and start countdown.
