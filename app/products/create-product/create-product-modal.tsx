"use client";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { CSSProperties, useState } from "react";
import { FormResponse } from "../../common/form-response.interface";
import createProduct from "../actions/create-product";

interface CreateProductModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function CreateProductModal({
  open,
  handleClose,
}: CreateProductModalProps) {
  const [response, setResponse] = useState<FormResponse>();
  const [fileName, setFileName] = useState("");
  const onClose = () => {
    setResponse(undefined);
    handleClose();
    setFileName("");
  };
  const fileInputStyles: CSSProperties = {
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  };
  console.log("fileName:: ", fileName);
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
            <div className="mb-2">
              <Button className="text-center w-full rounded-md bg-gray-700 px-3 text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 py-2 cursor-pointer hover:cursor-pointer">
                <label>
                  Upload Image
                  <input
                    name="image"
                    type="file"
                    style={fileInputStyles}
                    // tabIndex={-1}
                    onChange={(e) =>
                      e.target.files && setFileName(e.target.files[0].name)
                    }
                  />
                </label>
              </Button>
            </div>
            <div className="mb-4 text-blue-500">{fileName}</div>
            {!!response?.error && (
              <div className="mt-2 text-red-500">{response?.error}</div>
            )}

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
