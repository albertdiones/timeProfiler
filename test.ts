import { profile } from '.';



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