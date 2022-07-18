const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "no jokes available, sorry.";
  }
};

const showDadJoke = () => {
  getDadJoke()
    .then((joke) => {
      const newLi = document.createElement("li");
      newLi.append(joke);
      jokesList.append(newLi);
    })
    .catch((err) => {
      console.log("problem with loading dad joke", err);
    });
};

const button = document.querySelector("button");
const jokesList = document.querySelector("#jokes");
button.addEventListener("click", showDadJoke);
