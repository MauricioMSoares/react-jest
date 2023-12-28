import { renderHook } from '@testing-library/react-hooks';
import { buscaTransacoes } from '../../services/transacoes';
import useListaTransacoes from '../../hooks/useListaTransacoes';
import { act } from '@testing-library/react';

jest.mock('../../services/transacoes');

const mockTransaction = [
  {
    id: 1,
    transacao: 'Depósito',
    valor: '100',
    data: '22/11/2022',
    mes: 'Novembro',
  },
];

describe("hooks/useListaTransacoes.js", () => {
  test("Must return a list of transactions and a function that updates it", async () => {
    buscaTransacoes.mockImplementation(() => mockTransaction);

    const { result } = renderHook(() => useListaTransacoes());
    expect(result.current[0]).toEqual([]);

    await act(async () => {
      result.current[1]();
    });

    expect(result.current[0]).toEqual(mockTransaction);
  })
})