export interface FullInstallment {
  count: number;
  fee: number;
  total: number;
  cashbackPercentage: number;
  cashbackValue: number;
}

export interface Installment {
  count: number;
  fee: number;
  total: number;
}

export interface PaymentIntent {
  clientSecret: string;
  full: FullInstallment;
  installments: Installment[];
  total: number;
}
