import { FullInstallment, Installment, PaymentIntent } from "data";

const MAX_INSTALLMENTS = Number(process.env.MAX_INSTALLMENTS);
const FEE_PER_INSTALLMENT = Number(process.env.FEE_PER_INSTALLMENT);
const CASHBACK_PERCENTAGE = Number(process.env.CASHBACK_PERCENTAGE)

function makeFullInstallment(total: number): FullInstallment {
  const cashbackValue = total * CASHBACK_PERCENTAGE;

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
  return Array.from({ length: MAX_INSTALLMENTS - 1 }, (_, i) => i + 2).map(count => {
    const fee = count * FEE_PER_INSTALLMENT;
    const installmentTotal = total + fee;
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
