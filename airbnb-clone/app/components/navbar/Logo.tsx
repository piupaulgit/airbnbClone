"use client";

import Image from "@/node_modules/next/image";
import { logo } from "@/public/images/index";
import React from "react";

const Logo: React.FC = () => {
  return <Image alt="air bnb logo" src={logo} height={100} width={100} />;
};

export default Logo;
