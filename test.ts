import { profile } from '.';
import { profileLog } from './profileLogSchema';



profile(
    () => fetch('https://api.exchangerate-api.com/v4/latest/USD'),
    {
        label: "forex fetch",
        profileLogSchema: profileLog
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