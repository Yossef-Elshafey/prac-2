import { Suspense } from "react";
import { About, Booking, Chef, Landing, Menu, Video } from "./component";

async function Home() {
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
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <Home />;
}
