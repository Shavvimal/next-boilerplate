import Form from "@/components/Form";
import Logo from "@/assets/logo.svg";

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-col">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 dark:border-dark-900 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 dark:border-dark-900 dark:bg-dark-800 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <a href="https://www.quadra.trade/">
            <Logo className="h-24 w-24" alt="Quadra" />
          </a>
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className=" ">Use your email and password to sign in</p>
        </div>
        <Form type="login" />
      </div>
    </div>
  );
}
