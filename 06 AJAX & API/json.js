const data =
  '{"ticker":{"base":"BTC","target":"USD","price":"19952.19056450","volume":"11845.78622303","change":"91.69860954"},"timestamp":1657715285,"success":true,"error":""}';

const dog = {
  breed: "lab",
  colour: "black",
  isAlive: true,
  owner: undefined,
};

JSON.parse(data);
JSON.stringify(dog);
