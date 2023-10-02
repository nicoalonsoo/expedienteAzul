import { Disclosure } from "@headlessui/react";
import logo from "../../multimedia/log.png";

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white py-2 border-b border-gray-300">
      <div className="container mx-auto text-center">
        <img
          className="h-14 w-auto mx-auto" // Centrar horizontalmente
          src={logo}
          alt="Your Company"
        />
      </div>
    </Disclosure>
  );
}
