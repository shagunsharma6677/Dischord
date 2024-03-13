import { Button } from "@repo/ui";
import { LoginButton } from "../../components/auth/login-button";

export default function Page(): JSX.Element {
  return (
    <main className="bg-slate-900 flex items-center justify-center h-screen text-4xl text-cyan-50">
      <LoginButton>
        <Button variant={"destructive"}>Shadcn-ui Sign-In Button</Button>
      </LoginButton>
    </main>
  );
}
