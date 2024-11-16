"use client";

import { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import Modal from "../Modal";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface ConfirmVoteModalProps {
  openModal: boolean;
  setOpen: SetStateAction<any>;
  votedFor: string; // yes or no
}

export default function ConfirmVoteModal({
  openModal,
  setOpen,
  votedFor = "yes",
}: ConfirmVoteModalProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm();
  const router = useRouter();
  const pathname = usePathname();

  const onSubmit = async (data: any) => {
    console.log(data);

    // accept event
    const { request: accept } = await publicClient.simulateContract({
      address: "0xfcc5aff8946Aa3A8015959Bc468255489FcaD241",
      abi: abi,
      functionName: "vote",
      args: [],
      account: account[0],
    });

    await walletClient.writeContract(accept);

    // close modal
    setOpen(false);

    router.replace(`${pathname}?isVoted=true`);
  };

  return (
    <Modal openModal={openModal} setOpen={setOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="hidden"
          value={votedFor}
          {...register("votedFor", { required: true })}
        />
        <h2 className="text-white text-center font-bold text-3xl mb-5">
          Confirm your vote
        </h2>
        <div className="text-white font-medium mb-5">
          <p>
            {" "}
            Write down your reasons and arguments for choosing this option.
          </p>
          <p>
            If your argument is supported by the most people, you will receive
            additional points and bonuses
          </p>
        </div>
        {/* User Info */}
        <div className="flex items-center mb-6">
          <Image
            src="/shines_logo.png"
            width={40}
            height={40}
            alt="User Avatar"
            className="rounded-full"
          />
          <div className="ml-3">
            <div className="text-white font-semibold">John Doe</div>
            <div className="text-gray-400 text-sm">@johndoe</div>
          </div>
        </div>
        <textarea
          placeholder="Tell your arguments..."
          className="w-full p-1 h-[200px] text-start bg-transparent rounded-md border border-[#808080] text-white focus:outline-none"
          {...register("arguments", { required: false })}
        />
        <div className="mb-5">
          <h4 className="text-[#D9D9D9] text-sm">
            <span className="text-primary mr-1 text-lg">Raise</span>(0-100
            tokens)
          </h4>
          <div className="flex p-2 items-center border border-[#808080] rounded-md w-[150px]">
            <span className="text-white mr-2">$</span>
            <input
              type="text"
              className="ml-auto w-full bg-transparent bg-[#2D2D2D] text-primary text-right focus:outline-none"
              defaultValue={0}
              placeholder={"0"}
              {...register("raise", {
                required: true,
                valueAsNumber: true,
                pattern: {
                  value: /^(0|[1-9]\d*)(\.\d+)?$/,
                },
                validate: (value: number) => value >= 0 && value <= 100,
              })}
            ></input>
          </div>
        </div>
        <div className="flex gap-x-5 w-full">
          <button
            type="submit"
            disabled={!isValid}
            className="bg-primary text-[#121212] font-bold py-2 px-4 w-full disabled:bg-gray-100 disabled:text-black"
          >
            Vote
          </button>
          <button
            onClick={() => setOpen(false)}
            className="bg-transparent border border-primary text-primary w-full font-bold"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
