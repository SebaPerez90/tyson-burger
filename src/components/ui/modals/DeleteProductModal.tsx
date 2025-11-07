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
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "sonner";
import { useState } from "react";

const DeleteProductModal = ({ cartId }: { cartId: number | undefined }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const raw = localStorage.getItem("clientOrder");
      const arr = raw ? JSON.parse(raw) : [];

      // filtramos por id de item del carrito
      // eliminamos exactamente ese elemento
      const updated = Array.isArray(arr)
        ? arr.filter((item) => item.id !== cartId)
        : [];

      if (arr.length > updated.length) {
        localStorage.setItem("clientOrder", JSON.stringify(updated));

        // notificamos al resto de la app (Cart escucha esto)
        window.dispatchEvent(
          new CustomEvent("client-order-updated", { detail: updated })
        );

        toast.success("Producto eliminado del carrito", {
          duration: 3000,
          style: { width: "max-content" },
        });
      }
    } catch (err) {
      console.error("Error eliminando item del carrito:", err);
      toast.error("No se pudo eliminar el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"icon-sm"}
          variant={"destructive"}
          type="button"
          className="mr-0 min-[500px]:mr-3 relative bottom-1"
          aria-label="Eliminar producto"
        >
          <FaRegTrashAlt />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿Eliminar producto?</DialogTitle>
          <DialogDescription>
            ¿Querés quitar este producto del carrito? Esta acción se puede
            deshacer agregándolo otra vez.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 flex gap-3 justify-end">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Eliminando..." : "Eliminar"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProductModal;
