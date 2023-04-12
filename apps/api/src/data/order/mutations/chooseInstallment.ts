import { ChooseInstallmentParams, Order } from "data/model/order";
import cache from "../../../cache";
import { Charge } from "../../../external/openpix/types";
import { createCharge } from "../../../external/openpix";

export const chooseInstallment = async (_: any, data: ChooseInstallmentParams) => {
  const order = await cache.get(`order_${data.secret}`);
  if (!order) {
    return null;
  }
  const orderAsObject = JSON.parse(order) as Order;

  // order customer and address comes with _id from mongodb
  // we need to remove it to send to openpix

  // @ts-ignore
  delete orderAsObject.shopper._id;
  // @ts-ignore
  delete orderAsObject.shopper.address._id;

  const chargeResponse = await createCharge({
    correlationID: orderAsObject._id,
    customer: orderAsObject.shopper,
    value: orderAsObject.total
  })

  if (!chargeResponse) {
    return null;
  }

  const charge: Charge = {
    _id: chargeResponse.data.correlationID,
    qrCode: chargeResponse.data.charge.qrCodeImage,
    brCode: chargeResponse.data.brCode,
    expiresAt: Number(chargeResponse.data.charge.expiresIn),
    value: orderAsObject.total
  }
  return charge
};
