import { Suspense } from "react";
import { About, Booking, Chef, Delay, Landing, Menu, Video } from "./component";

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
