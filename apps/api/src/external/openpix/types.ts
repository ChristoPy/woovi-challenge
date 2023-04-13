import { Address, Shopper } from "data";

export interface Charge {
  _id: string
  qrCode: string
  brCode: string
  expiresAt: number
  value: number
}

export interface OpenPIXCreateChargeParams {
  correlationID: string;
  value: number;
  // type: string;
  // comment: string;
  // identifier: string;
  // expiresIn: number;
  customer: Shopper;
}

export interface OpenPIXCreateChargeResponse {
  charge: {
    value: number;
    customer: {
      name: string;
      email: string;
      phone: string;
      taxID: {
        taxID: string;
        type: string;
      };
      correlationID: string;
      address: Address
    };
    type: string;
    comment: string;
    brCode: string;
    status: string;
    correlationID: string;
    paymentLinkID: string;
    paymentLinkUrl: string;
    globalID: string;
    transactionID: string;
    identifier: string;
    qrCodeImage: string;
    additionalInfo: {
      key: string;
      value: string;
    }[];
    pixKey: string;
    createdAt: string;
    updatedAt: string;
    expiresIn: string;
  };
  correlationID: string;
  brCode: string;
}
