import Image from "next/image";
import { Button } from "../ui/button";
import heroImage from "../../../public/test.jpg";

const afterLayerStyles =
  " relative after:absolute after:bg-linear-to-r after:from-black/30 after:via-transparent after:to-black/30 after:z-20 z-10 after:top-0 after:left-0 after:w-full after:h-full after:border-50  after:border-black after:scale-x-105 after:blur-xl after:rounded-[100px]";

const HeroDescription = () => {
  return (
    <section className="flex relative justify-center items-center  min-h-[70vh]">
      {/* text container */}
      <div className="text-background z-30 flex flex-col gap-8">
        <h1 className="text-7xl font-extrabold text-background max-w-3xl">
          <span className="text-red-500">Hamburguesas caseras</span> con el
          sabor que te van hacer volver.
        </h1>
        <p className="text-lg">
          Carne fresca, pan de papa artesanal y cheddar real. Hechas al momento…{" "}
          <br /> ¿Una hamburguesita o qué? 🍔
        </p>
        <div className="flex gap-4">
          <Button
            size={"lg"}
            variant={"destructive"}
            className="cursor-pointer"
          >
            Ordenar ahora
          </Button>
          <Button
            size={"lg"}
            variant={"outline"}
            className="text-foreground cursor-pointer"
          >
            Ver promociones
          </Button>
        </div>
      </div>

      {/* Image container */}
      <div className={`${afterLayerStyles} w-[800px] h-[500px] rounded-[50px]`}>
        <Image
          src={heroImage}
          alt="Juicy cheeseburger"
          width={800}
          height={500}
          className="object-cover mask-[radial-gradient(circle,black_75%,transparent_90%)] brightness-125 saturate-150"
        />
      </div>
    </section>
  );
};

export default HeroDescription;
