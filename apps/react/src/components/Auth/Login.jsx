import { Button, Checkbox, Input } from '@nextui-org/react';
import { Lock, MailIcon } from 'lucide-react';
import React from 'react';

export default function Login() {
  return (
    <div className="w-full h-full">
      <div className="">
        <div className="grid grid-cols-2 h-screen ">
          <div className="col-span-1 px-24 py-20 ">
            <div className="text-2xl font-bold">
              <p>Dischord</p>
            </div>
            <div className=" px-32 h-full flex justify-center flex-col">
              <div className="text-2xl">
                <p>Welcome back, User</p>
              </div>
              <div className="text-xs pt-2 text-gray-400">
                <p>Please enter your details</p>
              </div>
              <div className=" py-10 ">
                <div className="">
                  <Input
                    type="email"
                    label="Email"
                    placeholder="you@example.com"
                    labelPlacement="outside"
                    startContent={
                      <MailIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                  />
                </div>
                <div className="py-4 ">
                  <Input
                    type="password"
                    label="Password"
                    s
                    labelPlacement="outside"
                    startContent={
                      <Lock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                  />
                </div>
                <div className="py-2">
                  <div className=" flex w-full justify-between pb-6">
                    <div className="flex items-center">
                      <Checkbox defaultSelected>
                        <p className="text-xs text-gray-400">Remember me</p>
                      </Checkbox>
                    </div>
                    <div className="text-xs text-gray-400">Forgot password</div>
                  </div>
                  <div className="w-full ">
                    <Button className="w-full bg-gradient-to-tr from-gray-800 to-white shadow-lg rounded-md">
                      <p className="text-black font-bold text-base"> Login</p>
                    </Button>
                  </div>
                  <div className="py-4">
                    <Button className="w-full rounded-md">
                      Login with Google
                    </Button>
                  </div>
                  <div className="text-xs font-normal text-gray-400 py-2">
                    <p>New to Dischord? Sign up</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-full bg-blue-500">
            <img
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/62a342dbc52104327ccc2ee5_hero.svg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
