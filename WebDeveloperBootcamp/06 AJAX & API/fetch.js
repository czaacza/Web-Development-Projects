// USING then/catch

const request = fetch("https://blockchain.info/ticker");
request
  .then((res) => {
    console.log("RESPONSE, WAITING TO PARSE...", res);
    return res.json();
  })
  .then((data) => {
    console.log("DATA PARSED!");
    console.log(data.USD.last);
  })
  .catch((err) => {
    console.log("OH NO!", err);
  });

// USING async/await

const fetchBitcoinPrice = async function () {
  try {
    const res = await fetch("https://blockchain.info/ticker");
    const data = await res.json();
    console.log(data.USD.last);
  } catch (e) {
    console.log("error!!!", e);
  }
};
