import { calculaNovoSaldo } from "../utils/index";

describe("When the submitted transaction ", () => {
  test("is a deposit, balance value must increase", () => {
    const transaction = {
      transacao: "Depósito",
      valor: 50,
    }

    const newBalance = calculaNovoSaldo(transaction, 100);

    expect(newBalance).toBe(150);
  });

  test("is a transfer, balance value must increase", () => {
    const transaction = {
      transacao: "Transferência",
      valor: 50,
    }

    const newBalance = calculaNovoSaldo(transaction, 100);

    expect(newBalance).toBe(50);
  })
});

test("Must return balance value updated with income", () => {
  const calculateIncome = jest.fn(balance => balance + balance * 0.005);

  const balance = 100;

  const newBalance = calculateIncome(balance);

  expect(newBalance).toBe(100.5);
  expect(calculateIncome).toBeCalled();
  expect(calculateIncome).toHaveBeenCalledWith(balance);
});