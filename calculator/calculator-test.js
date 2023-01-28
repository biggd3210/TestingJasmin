
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount : 20000,
    rate : 15,
    years : 5,
  }
    
    expect(calculateMonthlyPayment(values)).toEqual("475.80")
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount : 10000,
    rate : 2.3,
    years: 1
  }
  expect(calculateMonthlyPayment(values)).toEqual("843.75")
});

it('should account for 0 interest', function() {
  const values = {
    amount : 5000,
    rate : 0,
    years : 3
  }
  expect(calculateMonthlyPayment(values)).toEqual("138.89")
})

it("should calculate large sums and large rates (bad housing market)", function() {
  const values = {
    amount : 550000,
    rate : 76,
    years : 35
  }
  expect(calculateMonthlyPayment(values)).toEqual("34833.33")
})
/// etc
