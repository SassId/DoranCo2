import "./globals.css";
import { changeTheme } from "./lib/theme";
import { Button } from "./components/ui/button";
import { CarouselSize } from "./components/mine/carousel-main";

function App() {
  return (
    <>
      <main className="bg-background">
        <h1 className="text-foreground text-center">Hello, World !</h1>
        <Button onClick={changeTheme} variant="destructive">
          Change Theme
        </Button>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          ipsa saepe pariatur delectus modi assumenda blanditiis esse
          repudiandae ipsum in harum fugiat quod, inventore sapiente, tempore
          expedita animi porro veritatis provident! Harum dolorum labore
          explicabo repellat architecto dolores dolore natus, dolorem qui
          numquam praesentium delectus ratione. Eos dolorem earum quos?
        </p>
        <CarouselSize />
      </main>
    </>
  );
}

export default App;
