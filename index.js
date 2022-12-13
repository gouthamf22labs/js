let shoppingItems = [
  {
    name: "socks",
    price: 12,
  },
  {
    name: "mobile",
    price: 20000,
  },
];

// in which language or framework
// in pluck what will happen

// pluck("name") => [12,20000]

// pluck("price")
// Total
// Discount(10)
// tax(18.5)
// deliverTo(TN, country)
function main(obj) {
  return function (item) {
    const array = obj.filter((e) => e.name === item);
    return function (discount) {
      console.log(
        array.map(
          (e) =>
            `the item is ${e.name}, the total price is ${
              e.price
            }, after discount the total price is ${
              e.price - (e.price * discount) / 100
            } `
        )[0]
      );

      return function (state, country) {
        console.log(`and devlivered on ${state} ${country}`);
      };
    };
  };
}

main(shoppingItems)("mobile")(10)("Tamil nadu", "India");
