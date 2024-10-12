import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { cn } from "../lib/utils";
import { Textarea } from "./ui/textarea";
import { ChevronsDown, Icon } from "lucide-react";

import contact from "../../public/contact-us.png";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";

const schema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Your full name should be at least 3 letter" }),
  email: z.string().min(4).email({ message: "Enter vaild email" }),
  request: z
    .string()
    .min(10, { message: "Your request should be at least 10 letters" })
    .max(150, { message: "Your request should be 150 letters at most" }),
  service: z.string().min(1, { message: "Please select a service" }),
});

type FormData = z.infer<typeof schema>;

const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
    //We are going to chage this with animation
    alert("Send successfully!");
    reset();
  };

  const [position, setPosition] = useState("");

  return (
    <div className="container relative flex items-center justify-between lg:px-0 pb-10">
      <div className="mx-auto flex w-full flex-col justify-between space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          {/* <Icon.></> */}
          <h1 className="text-2xl sm:font-semibold tracking-tightrelative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 sm:text-2xl md:text-6xl lg:text-5xl">
            Write us your request
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
                <label htmlFor="service">Service you want</label>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      {position ? position : "Choose the service you want"}
                      <ChevronsDown className="ml-1.5 h-5 w-5 float-right" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Choose Service</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={(value) => {
                        setPosition(value);
                        setValue("service", value);
                      }}
                    >
                      <DropdownMenuRadioItem value="Web design">
                        Web design
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Logo design">
                        Logo design
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Digital marketing">
                        Digital marketing
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                {errors.service && (
                  // Need some fix it should be message from service error
                  <p className="text-red-500 text-sm">
                    Service is {errors.service.message?.toLowerCase()}
                  </p>
                )}
              </div>

              <div className="grid gap-1 py-2">
                <Label htmlFor="text">Your request</Label>
                <Textarea
                  className={cn({
                    "focus-visible:ring-red-500": errors.request,
                  })}
                  placeholder="Request"
                  {...register("request")}
                />
                {errors.request && (
                  <p className="text-red-500 text-sm">
                    {errors.request.message}
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

export default QuoteForm;
