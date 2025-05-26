"use client";
import { Button } from "@headlessui/react";
import { use, useState } from "react";
import CreateProductModal from "./create-product-modal";

const CreateProductFab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDiaglogOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <CreateProductModal open={isOpen} handleClose={handleDiaglogOpen} />
      <Button
        className="absolute right-10 bottom-20 inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 text-3xl"
        onClick={handleDiaglogOpen}
      >
        +
      </Button>
    </>
  );
};

export default CreateProductFab;
