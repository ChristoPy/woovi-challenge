const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

export const formatMoney = (cents: number) => {
  return formatter.format(cents / 100);
}
