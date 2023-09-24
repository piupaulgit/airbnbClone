"use client";

import Image from "@/node_modules/next/image";
import { logo } from "@/public/images/index";
import React from "react";
import { useRouter } from "next/navigation";

const Logo: React.FC = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="air bnb logo"
      src={logo}
      height={100}
      width={100}
    />
  );
};

export default Logo;
