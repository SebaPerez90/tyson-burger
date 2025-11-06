import Image from "next/image";
import { Button } from "../ui/button";
import heroImage from "../../../public/test.jpg";
import Link from "next/link";

const afterLayerStyles =
  " relative after:absolute after:bg-linear-to-r after:from-black/30 after:via-transparent after:to-black/30 after:z-20 z-10 after:top-0 after:left-0 after:w-full after:h-full after:border-50  after:border-black after:scale-x-105 after:blur-xl after:rounded-[100px]";

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 min-h-[70vh]">
      {/* Text container */}
      <div className="z-30 flex flex-col gap-6 lg:gap-8 text-center lg:text-left max-w-full lg:max-w-3xl">
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
      <div
        className={`${afterLayerStyles} w-full max-w-[900px] sm:max-w-[1000px] lg:max-w-[1200px] h-[400px] sm:h-[500px] lg:h-[600px] rounded-[50px] flex items-center justify-center`}
      >
        <Image
          src={heroImage}
          alt="Juicy cheeseburger"
          width={1200}
          height={600}
          className="object-cover mask-[radial-gradient(circle,black_75%,transparent_90%)] brightness-125 saturate-150 rounded-[50px]"
        />
      </div>
    </section>
  );
};

export default Hero;
