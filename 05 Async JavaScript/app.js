// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};
// Callback hell
// fakeRequestCallback(
//   "books.com/page1",
//   function (response) {
//     console.log("it worked!");
//     console.log(response);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (response) {
//         console.log("it worked again!");
//         console.log(response);
//         fakeRequestCallback(
//           "books.com/page3",
//           function (response) {
//             console.log("it worked again (3 request)");
//             console.log(response);
//           },
//           function (err) {
//             console.log("error (3 request)");
//             console.log(err);
//           }
//         );
//       },
//       function (err) {
//         console.log("error (2nd request)!");
//       }
//     );
//   },
//   function (response) {
//     console.log("error!");
//     console.log(response);
//   }
// );

// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestPromise("yelp.com/api/coffee/page1")
  .then(() => {
    console.log("PROMISE RESOLVED!");
    console.log("it worked!");
    fakeRequestPromise("yelp.com/api/coffee/page2")
      .then(() => {
        console.log("it worked! (2nd)");
        fakeRequestPromise("yelp.com/api/coffee/page3")
          .then(() => {
            console.log("it worked! (3nd)");
          })
          .catch(() => {
            console.log("oh no, error! (3nd)");
          });
      })
      .catch(() => {
        console.log("oh no, error! (2nd)");
      });
  })
  .catch(() => {
    console.log("PROMISE REJECTED!");
    console.log("oh no, error!");
  });
