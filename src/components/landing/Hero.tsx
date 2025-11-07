import Image from "next/image";
import { Button } from "../ui/button";
import heroImage from "../../../public/test.jpg";
import Link from "next/link";

const afterLayerStyles =
  "relative after:absolute after:bg-linear-to-r after:from-black/30 after:via-transparent after:to-black/30 after:z-20 z-10 after:top-0 after:left-0 after:w-full after:h-full after:border-50 after:border-black after:scale-x-105 after:blur-xl after:rounded-[100px] before:from-transparent before:via-transparent before:to-black/30 before:z-30 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-linear-to-l before:rounded-[100px] before:blur before:scale-x-105";

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center h-full lg:min-h-[70vh] px-4 lg:px-0  mt-16">
      {/* Text container */}
      <div className="relative lg:right-[5%] xl:right-[16%] flex flex-col gap-6 lg:gap-12 text-center lg:text-left max-w-full lg:max-w-3xl z-30">
        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold">
          <span className="text-red-500">Hamburguesas caseras</span>{" "}
          <span className="text-white/90">
            con el sabor que te van hacer volver.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-white/70">
          Carne fresca, pan de papa artesanal y cheddar real. Hechas al momento…{" "}
          <br />
          ¿Una hamburguesita o qué? 🍔
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link href="/menu">
            <Button
              size="xl"
              variant="destructive"
              className="cursor-pointer bg-red-500 hover:bg-red-600 text-white"
            >
              Ordenar ahora
            </Button>
          </Link>
          <Link href="/promos">
            <Button
              size={"xl"}
              variant={"outline"}
              className="text-foreground cursor-pointer"
            >
              Ver promociones
            </Button>
          </Link>
        </div>
      </div>

      {/* Image container */}
      <div className="relative w-full max-w-[900px] h-[400px] sm:h-[500px] lg:absolute lg:top-0 lg:right-[-12%] lg:w-[60%] lg:h-full z-10 lg:opacity-60 xl:opacity-100">
        <div className={`${afterLayerStyles} w-full h-full`}>
          <Image
            src={heroImage}
            alt="Juicy cheeseburger"
            fill
            className="object-cover mask-[radial-gradient(circle,black_70%,transparent_90%)] brightness-125 saturate-129 rounded-[50px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
