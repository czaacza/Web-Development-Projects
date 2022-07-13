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

// PROMISES MAGIC
fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("it worked! (page1)");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("it worked! (page2)");
    console.log(data);

    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((data) => {
    console.log("it worked! (page3)");
    console.log(data);
  })
  .catch(() => {
    console.log("oh no! a request failed!!!");
  });
