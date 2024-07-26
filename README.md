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
    () => fetch('http://localhost/users/'),
    {label: "qualification"}
)
.then(
  (response) => ...
)
```
