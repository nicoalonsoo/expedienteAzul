import { Disclosure } from "@headlessui/react";
import logo from "../../multimedia/logo.png";

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white py-2 border-b-2 border-gray-300">
      <div className="container mx-auto text-center py-4">
        <img
          className="h-auto w-32 mx-auto" // Centrar horizontalmente
          src={logo}
          alt="Your Company"
        />
      </div>
    </Disclosure>
  );
}
