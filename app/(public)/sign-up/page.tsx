import { SignUp } from "@clerk/nextjs";

export default function SignUpRoute() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <SignUp />
    </div>
  );
}
