// declaration of an async function

async function hello() {}
const sing = async () => {
  // throw "oh no, problem!";
  return "la la la la";
};

// sing()
//   .then((data) => {
//     console.log("promise resolved with".toUpperCase(), data);
//   })
//   .catch((err) => {
//     console.log("promise rejected");
//     console.log(err);
//   });

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "corgi") return "WELCOME!";
  throw "invalid password";
};

login("adada", "corgi")
  .then((msg) => {
    console.log("LOGGED IN");
    console.log(msg);
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
  });
