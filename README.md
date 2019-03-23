# useCountdown
React custom hook for providing a countdown

[Codepen](https://codepen.io/matheus-rosin/pen/ywGZLb)

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
  running,
  startCountdown,
  stopCountdown,
  resumeCountdown,
  restartCountdown,
} = useCountdown(60);
```

When invoking the function, you must pass a number as argument. This is the quantity of __seconds__ of your countdown.
You can also pass a boolean as second argument in order to say if the countdown must start on mounting (defaults to true).

It will return the following:

* `countdown`: an array: `[hours, minutes, seconds]`;
* `secondsLeft`: how much time (seconds) there are yet, before countdown is over;
* `running`: if the countdown is currently running;
* `stopCountdown`: stop the countdown from running;
* `startCountdown`: start the countdown (_but remember: it will be automatically initialized when rendering the component_);
* `resumeCountdown`: resume the countdown, starting on the time it has stopped;
* `restartCountdown`: stop and start countdown.

Enjoy with coffee.
