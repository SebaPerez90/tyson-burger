import Link from "next/link";
import { Button } from "../ui/button";

const horariosTrabajo = [{ dia: "Jueves a Domingo", hora: "20:00 a 23:30" }];

const Horarios = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-24 px-4 bg-inherit rounded-lg">
      <h2 className="text-4xl font-extrabold text-center mb-24 text-white">
        Horarios de Atención 🕒
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-24">
        {/* Horarios */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          {horariosTrabajo.map((horario, index) => (
            <p key={index} className="text-xl md:text-2xl font-semibold">
              <span className="text-red-500">{horario.dia}:</span> <br />
              <span className="text-white font-normal relative top-2">
                {horario.hora}
              </span>
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center md:items-start justify-center gap-4 text-center md:text-left">
          <p className="text-white/90 text-lg md:text-xl font-medium mb-4">
            ¡No te quedes con hambre! Pedí tu hamburguesa ahora.
          </p>
          <Button variant={"destructive"} size={"xl"}>
            <Link href="/menu">¡Estamos listos para tu pedido!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Horarios;
