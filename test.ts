import { profile } from '.';
import { profileLog } from './profileLogSchema';



profile(
    () => fetch('https://api.exchangerate-api.com/v4/latest/USD'),
    {
      label: "forex fetch", // test.ts:6
    }
)
.then(
  (response) => {
    console.log('');
    console.log('------');
    console.log('');
    console.log(response);
    return response.text();
  }
).then(
  (body) => console.log(body)
);