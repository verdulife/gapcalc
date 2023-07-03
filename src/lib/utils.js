export const constrains = {
  ink_price_ml: 0.62,
  ink_lineal_cost: 20 / 1000,
  daily_cost: 14.65,
  noise_cost: 1.20,
  width_loss: 50,
  height_loss: 100,
  min_width: 200,
  min_height: 100,
  iva: 1.21
}

export function calcPrice({ height, price }) {
  const linealPrice = height * price;
  const lossPrice = constrains.height_loss * price;
  const inkPrice = constrains.ink_lineal_cost * height * constrains.ink_price_ml;

  return (linealPrice + lossPrice + inkPrice + constrains.daily_cost) * constrains.noise_cost;
}

export function calcPaperPrice({ height, price }) {
  const linealPrice = height * price;
  const lossPrice = constrains.height_loss * price;
  return linealPrice + lossPrice;
}

export function calcInkPrice({ height }) {
  return constrains.ink_lineal_cost * height * constrains.ink_price_ml;
}

export function currency(n) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(n);
}

export function calcWithoutTax(price) {
  return price / 1.21;
}