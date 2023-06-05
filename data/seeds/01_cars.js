const defaultCars = [
  {
    vin: "123",
    make: "Volkswagen",
    model: "Golf",
    mileage: 123,
  },
  {
    vin: "1234",
    make: "BMW",
    model: "i3",
    mileage: 123,
  },
  {
    vin: "1235",
    make: "Audi",
    model: "a3",
    mileage: 123,
  },
  {
    vin: "1236",
    make: "Mercedes",
    model: "a180",
    mileage: 123,
  },
  {
    vin: "1237",
    make: "Hyundai",
    model: "Getz",
    mileage: 123,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(defaultCars);
};
