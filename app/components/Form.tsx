"use client";
import { RotateCwIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer";

interface Props {
  type: "register" | "login";
}

const Form = ({ type }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
  const router = useRouter();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const password = (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value;
  
    try {
      if (type === "login") {
        const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
  
        if (res?.error) {
          toast.error(res.error);
        } else {
          const sessionRes = await fetch("/api/auth/session");
          const sessionData = await sessionRes.json();
  
          const userType = sessionData?.user?.user_type_id;
  
          toast.success("Logged in successfully, redirecting...");
  
          setTimeout(() => {
            if (userType === 1) {
              router.push("/protected");
            } else if (userType === 2) {
              router.push("/protectedcorporate");
            } else if (userType === 3) {
              router.push("/protectedadmin");
            } else if (userType === 4) {
              router.push("/dashboard-4");
            } else {
              router.push("/default-dashboard");
            }
          }, 2000);
        }
      } else if (type === "register") {
        const username = (e.currentTarget.elements.namedItem("username") as HTMLInputElement).value;
        const name = (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value;
  
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            name,
            email,
            password,
          }),
        });
  
        const result = await res.json();
  
        if (res.ok) {
          toast.success("Registration successful, redirecting to login...");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else {
          toast.error(result.error || "An error occurred during registration.");
        }
      }
    } catch (err) {
      toast.error("An error occurred while processing your request.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <>
      <Toaster position="top-right" />
      <form
        className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
        onSubmit={handleFormSubmit}
      >
        {type === "register" && (
          <>
            <div>
              <label
                htmlFor="username"
                className="text-xs block text-gray-600 uppercase"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                required
                placeholder="Your username"
                autoComplete="off"
                className="text-black mt-1 block w-full appearance-none rounded-md border-gray-200 border px-3 py-2 placeholder:text-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="text-xs block text-gray-600 uppercase"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                autoComplete="off"
                className="text-black mt-1 block w-full appearance-none rounded-md border-gray-200 border px-3 py-2 placeholder:text-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              />
            </div>
          </>
        )}
        <div>
          <label
            htmlFor="email"
            className="text-xs block text-gray-600 uppercase"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@example.com"
            autoComplete="off"
            className="text-black mt-1 block w-full appearance-none rounded-md border-gray-200 border px-3 py-2 placeholder:text-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-xs block text-gray-600 uppercase"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="••••••••"
              className="text-black mt-1 block w-full appearance-none rounded-md border-gray-200 border px-3 py-2 placeholder:text-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
              )}
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center justify-center rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          {isLoading ? (
            <RotateCwIcon className="h-5 w-5 animate-spin" />
          ) : type === "register" ? (
            "Register"
          ) : (
            "Login"
          )}
        </button>
        {type === "login" && (
          <div className="text-right">
            <Link href="/forgot-password" className="text-blue-500 text-xs">
              Forgot Password?
            </Link>
          </div>
        )}
        <div className="text-center text-xs text-gray-500">
          {type === "register" ? (
            <>
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500">
                Login
              </Link>
            </>
          ) : (
            <>
             Don&apos;t have an account? <Link href="/register" className="text-blue-500">Register</Link>

            </>
          )}
        </div>
        
      </form>
      
    </>
  );
};

export default Form;
