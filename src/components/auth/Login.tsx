import React from "react";
import Input from "../Input";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Props {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setShowLogin }: Props) => {
  const navigate = useNavigate();
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  console.log(errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className=" w-full ">
      <div className="hero-content  w-full flex-col flex justify-center items-center text-center self-center content-center">
        <div className="text-center  ">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight ">
            Sign in to your account
          </h2>
        </div>
        <div className="card indicator shrink-0 w-full max-w-sm shadow-2xl ">
          <span
            onClick={() => setShowLogin(false)}
            className="indicator-item btn-ghost cursor-pointer rounded-full btn-sm badge"
          >
            <FaTimes />
          </span>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
            <Input
              errors={errors}
              register={register}
              id="email"
              type="email"
              label="Email"
            />
            <div className="form-control mt-3">
              <Input
                errors={errors}
                register={register}
                id="password"
                type="password"
                label="Password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={() => navigate("/")} className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
