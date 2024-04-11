import { UserButton } from "../../../components/auth/user-button";
import { ModeToggle } from "../../../components/mode-toggle";

export default function Home(): JSX.Element {
  return (
    <main className="">
      <UserButton />
      <ModeToggle />
    </main>
  );
}
