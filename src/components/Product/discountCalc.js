const discountCalc = (price, discount) => {
  if (price === discount) {
    return "";
  } else {
    return Math.round((discount * 100) / price - 100) + "%";
  }
};

export default discountCalc;
