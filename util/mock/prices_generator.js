class Price {
  constructor() {
    this.symbol = '';
    this.currency = 'USD';
    this.close = 0;
    this.open = 0;
    this.price = 0;
    this.vwap = 0;
  }
}

const NUMBER_OF_SECURITIES = 10;
const LOWEST_PRICE = 250;
const HIGHEST_PRICE = 300;
const PRICE_ACCURACY = 2; // number of decimal digits 

function random_between(low, high) {
  const rnd = Math.random() * (high - low) + low;
  return Math.floor(rnd * 10 ** PRICE_ACCURACY) / 10 ** PRICE_ACCURACY;
}

function generate_random_price(symbol) {
  const ret = new Price();
  ret.symbol = symbol;
  ret.price = random_between(LOWEST_PRICE, HIGHEST_PRICE);
  ret.vwap = random_between(LOWEST_PRICE, HIGHEST_PRICE);
  ret.close = HIGHEST_PRICE;
  ret.open = LOWEST_PRICE;

  return ret;
}

module.exports = () => {
  const ret = [];
  for (let i = 1; i <= NUMBER_OF_SECURITIES; i++) {
    ret.push(generate_random_price(`ABC${i}`));
  }
  return ret;
}