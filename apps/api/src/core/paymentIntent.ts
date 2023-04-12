import { FullInstallment, Installment, PaymentIntent } from "data";

function makeFullInstallment(total: number): FullInstallment {
  const cashbackValue = total * 0.03;

  return {
    count: 1,
    fee: 0,
    total: total,
    cashbackPercentage: 3,
    cashbackValue: cashbackValue
  };
}

function makeInstallment(count: number, fee: number, total: number): Installment {
  return { count, fee, total };
}

function makeInstallments(total: number): Installment[] {
  return Array.from({ length: 9 }, (_, i) => i + 2).map(count => {
    const fee = count * 2;
    const installmentTotal = total * (1 + fee);
    return makeInstallment(count, fee, installmentTotal);
  });
}

export function createPaymentIntent(total: number, orderId: string): PaymentIntent {
  return {
    clientSecret: orderId,
    total: total,
    full: makeFullInstallment(total),
    installments: makeInstallments(total)
  }
};
