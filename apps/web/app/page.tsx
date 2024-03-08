import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main className="bg-slate-900 flex items-center justify-center h-screen text-4xl text-cyan-50">
      This is Home Page of Dischord app !!!
    </main>
  );
}
