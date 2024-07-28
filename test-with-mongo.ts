import mongoose from 'mongoose';
import { profile } from '.';
import { profileLog } from './profileLogSchema';


const mongoUrl = 'mongodb://localhost:27017/time_profiler_test';

await mongoose.connect(mongoUrl);


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