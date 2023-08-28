import { About, Booking, Chef, Landing, Menu, Video } from "./component";

export default async function Home() {
  await new Promise((resolve: any) => {
    // delay loading
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  return (
    <main className="">
      <Landing />
      <About />
      <Booking />
      <Menu />
      <Chef />
      <Video />
    </main>
  );
}
