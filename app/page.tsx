import { Suspense } from "react";
import { About, Booking, Chef, Landing, Menu, Video } from "./component";
import Delay from "./component/Delay";

async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <>
      <main className="">
        <Landing />
        <About />
        <Booking />
        <Menu />
        <Chef />
        <Video />
      </main>
    </>
  );
}

export default async function Root() {
  return (
    <Suspense fallback={<Delay />}>
      <Home />
    </Suspense>
  );
}
