import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 ">
      <Image
        src="/logo.png"
        alt="lg"
        width={200}
        height={200}
        priority
        className="animate-loader"
      />
    </div>
  );
}

export default Loading;
