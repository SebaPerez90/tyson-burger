const OrderCart = () => {
  const generateShortId = (length = 5) => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return Array.from(array)[0].toString(36).toUpperCase().slice(0, length);
  };

  const deleteThisFn = () => {
    const orderId = generateShortId(5);

    // Fecha y hora en formato 24 horas
    const now = new Date();
    const day = now.toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
    const time = now.toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const cartData = {
      orderId,
      date: day,
      time,
    };

    const storedCart = localStorage.getItem("clientOrder");
    const currentCart = storedCart ? JSON.parse(storedCart) : [];

    // push nueva orden
    const updatedCart = [...currentCart, cartData];

    // guarda array actualizado
    localStorage.setItem("clientOrder", JSON.stringify(updatedCart));
  };

  return <div onClick={deleteThisFn}>OrderCart</div>;
};

export default OrderCart;
