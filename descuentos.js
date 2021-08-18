const coupons = [
  {
    name: "RAMONELDRAGON",
    discount: 15,
  },
  {
    name: "SHREK4EVER",
    discount: 80,
  },
  {
    name: "CURSOJSPRACTICOPLATZI",
    discount: 30,
  },
];

function calcularPrecioDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

  const userCupon = coupons.find(isCouponValueValid);

  if (!userCupon) {
    alert("El cupón " + couponValue + " no es válido");
  } else {
    const descuento = userCupon.discount;

    const precioConDescuento = calcularPrecioDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerHTML = "El precio con descuento es: $" + precioConDescuento;
  }
}
