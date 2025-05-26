"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { FormResponse } from "../common/form-response.interface";
import createProduct from "./create-product";

interface CreateProductModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function CreateProductModal({
  open,
  handleClose,
}: CreateProductModalProps) {
  const [response, setResponse] = useState<FormResponse>();

  const onClose = () => {
    setResponse(undefined);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <DialogPanel className="max-w-xl border bg-white shadow-md">
          <form
            className="rounded p-8 w-full "
            action={async (FormData) => {
              const response = await createProduct(FormData);
              setResponse(response);
              if (!response?.error) {
                onClose();
              }
            }}
          >
            <div className="mb-4">
              <label className="sr-only" htmlFor="email">
                Name
              </label>
              <input
                name="name"
                placeholder="Name"
                required
                className="w-full rounded border bg-neutral-50 px-4 py-2"
              />
              {!!response?.error && (
                <div className="mt-2 text-red-500">{response?.error}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="sr-only">Description</label>
              <input
                name="description"
                placeholder="Description"
                required
                type="text"
                autoCapitalize="off"
                autoComplete="off"
                className="w-full rounded border bg-neutral-50 px-4 py-2"
              />
              {!!response?.error && (
                <div className="mt-2 text-red-500">{response?.error}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="sr-only">Price</label>
              <input
                name="price"
                placeholder="Price"
                required
                autoCapitalize="off"
                autoComplete="off"
                className="w-full rounded border bg-neutral-50 px-4 py-2"
              />
              {!!response?.error && (
                <div className="mt-2 text-red-500">{response?.error}</div>
              )}
            </div>

            <button
              className="rounded bg-neutral-800 px-4 py-2 text-neutral-200 hover:bg-neutral-700 w-full"
              type="submit"
            >
              Create Product
            </button>
          </form>
          <div className="flex gap-4 justify-end px-8 py-4">
            <button onClick={handleClose}>Cancel</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
