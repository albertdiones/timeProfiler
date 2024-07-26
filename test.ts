import { profile } from '.';



profile(
    () => fetch('https://raw.githubusercontent.com/LearnWebCode/json-example/master/animals-1.json'),
    {
        label: "animals"
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