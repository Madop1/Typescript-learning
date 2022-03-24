export const BUY_ICECREAM = "BUY_ICECREAM";

export const buyIceCream = (number = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};

