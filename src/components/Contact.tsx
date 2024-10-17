import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { cn } from "../lib/utils";
import { Textarea } from "./ui/textarea";

import contact from "../../public/contact-us.png";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Your full name should be at least 3 letter" }),
  email: z.string().min(4).email({ message: "Enter vaild email" }),
  messege: z
    .string()
    .min(10, { message: "Your message should be at least 10 letters" })
    .max(150, { message: "Your message should be 150 letters at most" }),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    // h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20
    <div
      id="contact"
      className="container relative flex items-center justify-between lg:px-0"
    >
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h1 className="text-2xl sm:font-semibold tracking-tightrelative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 sm:text-2xl md:text-6xl lg:text-5xl">
            Contact us here
          </h1>
        </div>

        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-1 py-2">
              <Label htmlFor="text">Full name</Label>
              <Input
                type="text"
                className={cn({
                  "focus-visible:ring-red-500": errors.fullName,
                })}
                placeholder="Full name"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <label htmlFor="email">Email</label>
                <Input
                  className={cn({
                    "focus-visible:ring-red-500": errors.email,
                  })}
                  placeholder="you@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="grid gap-1 py-2">
                <Label htmlFor="text">Your messege</Label>
                <Textarea
                  className={cn({
                    "focus-visible:ring-red-500": errors.messege,
                  })}
                  placeholder="Messege"
                  {...register("messege")}
                />
                {errors.messege && (
                  <p className="text-red-500 text-sm">
                    {errors.messege.message}
                  </p>
                )}
              </div>

              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[50%] hidden sm:flex">
        <img src={contact} alt="" />
      </div>
    </div>
  );
};

export default Contact;
