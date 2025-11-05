import { generateShortId } from "@/src/utils/uuidGenerator";
import { Button } from "../ui/button";
// import ConfirmOrderModal from "../ui/modals/ConfirmOrderModal";

type Props = {
  clientOrder: Order[];
  tip: number | "otro";
  customTip: string | number;
  address: string;
  betweenStreets: string;
  details: string;
  paymentMethod: "efectivo" | "mercado pago";
  cashAmount: string | number;
  userPhone: string;
  userName: string;
};

const SummaryCard = ({
  clientOrder,
  tip,
  customTip,
  address,
  betweenStreets,
  details,
  paymentMethod,
  cashAmount,
  userPhone,
  userName,
}: Props) => {
  const subtotal = clientOrder.reduce((acc, i) => acc + i.total, 0);
  const realTip = tip === "otro" ? Number(customTip) || 0 : tip;
  const envio = 1000;
  const total = subtotal + envio + realTip;

  function buildWhatsAppMessage() {
    const subtotal = clientOrder.reduce((t, i) => t + i.total, 0);
    const envio = 1000;
    const realTip = tip === "otro" ? Number(customTip) : tip;
    const total = subtotal + envio + realTip;

    const capitalizeWords = (str: string) => {
      return str
        .split(" ")
        .map(
          (word: string) =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    };

    const productsText = clientOrder
      .map(
        (i) =>
          `• *${i.productName?.toUpperCase()}* x${
            i.quantity
          }  $${i.total.toLocaleString()}`
      )
      .join("\n");

    return `
ORDEN: ${generateShortId(4)}

Hola, soy ${capitalizeWords(userName)} y realicé el siguiente pedido:

*PRODUCTOS*
${productsText}

*DATOS DE ENTREGA*
• Télefono: *${userPhone}*
• Domicilio: ${address}.
${betweenStreets && `• Entre calles: ${betweenStreets}.`}
${details && `• Detalles: ${details}.`}

*RESUMEN* ${
      paymentMethod === "efectivo"
        ? `(Pago con efectivo)`
        : `(Pago con mercado pago)`
    } 
${paymentMethod === "efectivo" && `• Pago con: $${cashAmount.toLocaleString()}`}
${realTip !== 0 && `• Propina: $ ${realTip.toLocaleString()}`}
• Envio: $${envio.toLocaleString()}

• *TOTAL: $${total.toLocaleString()}* 

  `.trim();
  }

  const handleSendOrder = () => {
    const msg = buildWhatsAppMessage();
    const encoded = encodeURIComponent(msg);
    const phone = `541132830604`;

    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  return (
    <div className="border border-white/20 text-white rounded-xl mt-8 p-5 bg-inherit">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">🧾</span>
        <h2 className="font-bold text-lg">Resumen</h2>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span>Productos</span>
          <span className="font-bold">
            $ {subtotal.toLocaleString("es-AR")}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span>Envío</span>
          <span className="font-bold">$ {envio.toLocaleString("es-AR")}</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Propina</span>
          <span className="font-bold">$ {realTip.toLocaleString("es-AR")}</span>
        </div>
      </div>

      <div className="h-px bg-white/15 my-4" />

      <div className="flex justify-between items-center mt-8">
        <span className="font-bold text-base">Total a pagar</span>
        <span className="font-bold text-base">
          $ {total.toLocaleString("es-AR")}
        </span>
      </div>

      <Button
        className="w-full mt-10 rounded-full text-lg py-6"
        variant="destructive"
        onClick={handleSendOrder}
      >
        Realizar Pedido
      </Button>
    </div>
  );
};

export default SummaryCard;
