axios
  .get("https://blockchain.info/ticker")
  .then((res) => {
    console.log(res.data.PLN.last + " PLN");
  })
  .catch((err) => {
    console.log("error", err);
  });

const fetchBitcoinPrice = async () => {
  try {
    const request = await axios.get("https://blockchain.info/ticker");
    console.log(request.data.PLN.last);
  } catch (e) {
    console.log("ERROR: ", e);
  }
};
