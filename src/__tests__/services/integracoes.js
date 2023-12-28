import api from "../../services/api";
import { buscaTransacoes } from "../../services/transacoes";

jest.mock("../../services/api");

const mockTransaction = [
  {
    id: 1,
    transaction: "Depósito",
    valor: "100",
    data: "22/11/2022",
    mes: "Novembro",
  },
];

const mockRequest = (returnData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: returnData });
    }, 200);
  });
}

const mockRequestError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  });
}

describe("Requests to API", () => {
  beforeEach(() => {
    api.get.mockClear();
  });

  test("Must return a list of transactions", async () => {
    api.get.mockImplementation(() => mockRequest(mockTransaction));

    const transactions = await buscaTransacoes();
    expect(transactions).toEqual(mockTransaction);
    expect(api.get).toHaveBeenCalledWith("/transacoes");
  });

  test("Must return an empty list when the request fails", async () => {
    api.get.mockImplementation(() => mockRequestError());

    const transactions = await buscaTransacoes();

    expect(transactions).toEqual([]);
    expect(api.get).toHaveBeenCalledWith("/transacoes");
  });
})