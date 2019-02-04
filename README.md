# Forum

A relatively simple forum app that allows for creation and display of posts and comments, with storage on firebase. Created by Miranda Keith ([gold-mir](https://github.com/gold-mir)).

# Setup

1. Clone the repository using `git clone https://github.com/gold-mir/forum-angular`

2. Create a `src/app/api-keys.ts` file and include 
```
export const firebaseConfig = {
    apiKey: "xxxxxx",
    authDomain: "xxxxxx",
    databaseURL: "xxxxxx",
    projectId: "xxxxxx",
    storageBucket: "xxxxxx",
    messagingSenderId: "xxxxxx"
  };
  ```
with your firebase config. You can get this information through the firebase console by selecting "add firebase to a web app".

3. run `npm install`
4. run `ng serve` and navigate to [localhost:3000](localhost:3000) to interact with the app.

# Currently unimplemented features
* User authentication using Firebase
* User profiles
* Chat
* Images

## License
This project is distributed under the MIT License - see the LICENSE.md file for details.