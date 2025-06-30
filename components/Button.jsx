"use client"

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function Button() {
  const navigate = useRouter();
  const orderFunc = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Order Confirmed",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate.push("/");
  };
  return (
    <button
      onClick={orderFunc}
      className="bg-[#1D3557] hover:bg-[#163049] text-white py-3 rounded-xl text-lg transition cursor-pointer"
    >
      Order Now
    </button>
  );
}

export default Button;
