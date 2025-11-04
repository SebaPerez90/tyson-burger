"use client";

import {
  Dialog,
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

const DeleteProductModal = ({ cartId }: { cartId: number }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    try {
      const raw = localStorage.getItem("clientOrder");
      const arr = raw ? JSON.parse(raw) : [];

      // filtramos por cartId — eliminamos exactamente ese elemento
      const updated = Array.isArray(arr)
        ? arr.filter((it) => it.cartId !== cartId)
        : [];

      localStorage.setItem("clientOrder", JSON.stringify(updated));

      // notificamos al resto de la app (OrderCart escucha esto)
      window.dispatchEvent(
        new CustomEvent("client-order-updated", { detail: updated })
      );

      toast.success("Producto eliminado del carrito", { duration: 3000 });
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
          className="mr-3"
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

          <div className="mt-6 flex gap-3 justify-end">
            <Button
              variant="outline"
              onClick={() => {
                /* el Dialog se cierra automáticamente */
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={loading}
            >
              {loading ? "Eliminando..." : "Eliminar"}
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProductModal;
