"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Button } from "../button";

// type Props = {
//   setOpen: (v: boolean) => void;
// };

const CloseSheetModal = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon-sm"
          variant="outline"
          type="button"
          className="text-black hover:text-red-500 absolute top-10 right-4 z-50"
          aria-label="Cerrar carrito"
        >
          X
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-zinc-800 z-1000 border-white/10 px-10 py-10">
        <DialogHeader>
          <DialogTitle className="text-white">¿Cerrar carrito?</DialogTitle>
          <DialogDescription className="text-white/80">
            Si cerrás ahora se va a perder lo que estás completando.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 grid grid-cols-2 gap-4 w-full">
          <DialogClose asChild>
            <Button variant="outline">Seguir editando</Button>
          </DialogClose>

          <Button
            variant="destructive"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cerrar igual
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CloseSheetModal;
