import { generateShortId } from "@/src/utils/uuidGenerator";
import { Button } from "../ui/button";
import { toast } from "sonner";
// import ConfirmOrderModal from "../ui/modals/ConfirmOrderModal";

type Props = {
  clientOrder: Order[];
  // tip: number | "otro";
  // customTip: string | number;
  address: string;
  betweenStreets: string;
  details: string;
  paymentMethod: "efectivo" | "mercado pago";
  // cashAmount: string | number;
  userPhone: string;
  userName: string;
  isDelivery: boolean;
};

const SummaryCard = ({
  clientOrder,
  // tip,
  // customTip,
  address,
  betweenStreets,
  details,
  paymentMethod,
  userPhone,
  userName,
  isDelivery,
}: Props) => {
  const subtotal = clientOrder.reduce((acc, i) => acc + i.total, 0);
  // const realTip = tip === "otro" ? Number(customTip) || 0 : tip;
  const envio = isDelivery ? 1000 : 0;
  const total = subtotal + envio;

  function buildWhatsAppMessage() {
    const subtotal = clientOrder.reduce((t, i) => t + i.total, 0);
    const envio = isDelivery ? 1000 : 0;
    // const realTip = tip === "otro" ? Number(customTip) : tip;
    const total = subtotal + envio;

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
      .map((i) => {
        const size = i.productSize ? ` (${i.productSize.toUpperCase()})` : "";

        const extras =
          Array.isArray(i.extras) && i.extras.length > 0
            ? i.extras.map((e) => `    - ${e}`).join("\n")
            : "";

        const note = i.note ? `    *NOTA:* _${i.note}_` : "";

        const details =
          extras || note
            ? `\n${[extras, note].filter(Boolean).join("\n")}`
            : "";

        return `• *${i.productName?.toUpperCase()}*${size} x${
          i.quantity
        }  $${i.total.toLocaleString()}${details}`;
      })
      .join("\n");

    return `
Número de pedido: *${generateShortId(
      4
    )}*  |  Hora ingreso: *${new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}*

Pedido para: *${capitalizeWords(userName)}* ${
      isDelivery === false ? `| *RETIRA EN LOCAL*` : ""
    }
    
${userPhone}
-----------------------------------------------
*PRODUCTOS*
${productsText}

${
  isDelivery
    ? `*DATOS DE ENTREGA*
• Domicilio: ${address}.
${betweenStreets ? `• Entre calles: ${betweenStreets}.` : ""}
${details ? `• Detalles: ${details}.` : ""}`
    : ""
}

*RESUMEN* ${
      paymentMethod === "efectivo"
        ? `(Pago con efectivo)`
        : `(Pago con mercado pago)`
    } 
    • Subtotal productos: $${subtotal.toLocaleString()}
    ${isDelivery ? `• Envio: $${envio.toLocaleString()}` : ""}

• *TOTAL: $${total.toLocaleString()}* 

  `.trim();
  }

  const handleSendOrder = () => {
    if (isDelivery) {
      if (!address || !betweenStreets) {
        toast.error("Necesitamos la dirección exacta para enviar el pedido.", {
          style: { width: "fit-content" },
        });

        const el = document.getElementById("delivery-checkout");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        setTimeout(() => {
          const firstInput = document.querySelector(
            !address ? 'input[name="address"]' : 'input[name="betweenStreets"]'
          ) as HTMLInputElement | null;

          firstInput?.focus();
        }, 500);

        return;
      }
    }

    const msg = buildWhatsAppMessage();
    const encoded = encodeURIComponent(msg);
    const phone = `541127104627`;

    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");

    localStorage.removeItem("clientOrder");
    localStorage.removeItem("clientOrder_ts");

    setTimeout(() => {
      window.location.href = "/";
    }, 300);
  };

  return (
    <div className="border border-white/20 text-white rounded-xl mt-5a1 p-5 bg-inherit">
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
          <span>Propina</span>
          {/* <span className="font-bold">
            $ {isDelivery ? realTip.toLocaleString("es-AR") : 0}
          </span> */}
        </div>

        <div className="flex justify-between items-center">
          <span>Envío</span>
          <span className="font-bold">
            $ {isDelivery ? envio.toLocaleString("es-AR") : 0}
          </span>
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
        className={`w-full mt-10 rounded-full text-lg py-6 ${
          isDelivery && (!address || !betweenStreets) ? "opacity-50" : ""
        }`}
        variant="destructive"
        onClick={handleSendOrder}
      >
        Realizar Pedido
      </Button>
    </div>
  );
};

export default SummaryCard;
