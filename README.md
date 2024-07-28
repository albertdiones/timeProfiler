TimeProfiler

Timer/Profiler for measuring time elapsed of promises


todos
 * measure in microseconds instead of milliseconds
 * make profileLogSchema and logger not required
 * make the code agnostic to the logger, so add_logger is not automatically required if not needed
 * make the code agnostic to the model, so mongoose is not automatically required if not needed
 * use Jest to test

```
import { profile } from 'timer-profiler';


profile(
    () => fetch('https://api.exchangerate-api.com/v4/latest/USD'),
    {
        label: "forex fetch"
    }
)
.then(
  (response) => {
    console.log('');
    console.log('------');
    console.log('');
    console.log(response);
  }
);
```

Result:
```
forex fetch time elapsed: 736.977635 ms
```
