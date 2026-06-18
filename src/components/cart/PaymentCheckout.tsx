import { useState, useEffect } from 'react';
import { BsBank } from 'react-icons/bs';
// import { IoWalletOutline } from 'react-icons/io5';
import { FaRegCopy, FaCheck } from 'react-icons/fa6'; // Íconos para la interacción de copia

interface CheckoutPaymentProps {
  paymentMethod: 'efectivo' | 'mercado pago';
  setPaymentMethod: (paymentMethod: 'efectivo' | 'mercado pago') => void;
}

const PaymentCheckout = ({
  paymentMethod,
  setPaymentMethod,
}: CheckoutPaymentProps) => {
  const [copied, setCopied] = useState(false);
  const ALIAS_TRANSFERENCIA = 'Faby.95.mp';

  // Forzamos logísticamente que el método siempre sea mercado pago/transferencia
  useEffect(() => {
    if (paymentMethod !== 'mercado pago') {
      setPaymentMethod('mercado pago');
    }
  }, [paymentMethod, setPaymentMethod]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ALIAS_TRANSFERENCIA);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar el alias: ', err);
    }
  };

  return (
    <div className='border border-white/20 rounded-xl p-5 text-stone-50'>
      <h3 className='font-bold flex items-center gap-2 text-lg mb-3'>
        <BsBank /> Datos para transferir
      </h3>

      <div className='flex flex-col gap-2 w-3/4'>
        {/* El botón ahora tiene el estilo exacto de Transferencia pero acciona el copiado */}
        <button
          onClick={handleCopy}
          type='button'
          className='p-3 rounded-lg border bg-white/10 border-white flex items-center justify-between cursor-pointer transition-all active:scale-[0.99]'
          title='Copiar alias'>
          <div className='flex items-center gap-3'>
            <span>Faby.95.mp</span>
          </div>

          {/* Indicador de copiado a la derecha */}
          <div className='flex items-center gap-1.5 text-xs font-semibold bg-white/10 py-1 px-2.5 rounded-md text-stone-200'>
            {copied ? (
              <>
                <FaCheck className='text-green-400' />
                <span>¡Copiado!</span>
              </>
            ) : (
              <>
                <FaRegCopy />
                <span>Copiar Alias</span>
              </>
            )}
          </div>
        </button>

        {/* Mensaje de aviso debajo del botón */}
        <span className='text-xs text-stone-400 pl-1 block italic'>
          * Por favor, corroborar los datos de la transferencia por WhatsApp. *
        </span>
      </div>
    </div>
  );
};

export default PaymentCheckout;
