import { SetStateAction } from "react";
import Modal from "../Modal";
import Image from "next/image";

interface ConfirmVoteModalProps {
  openModal: boolean;
  setOpen: SetStateAction<any>;
}

export default function ConfirmVoteModal({
  openModal,
  setOpen,
}: ConfirmVoteModalProps) {
  return (
    <Modal openModal={openModal} setOpen={setOpen}>
      <h2 className="text-white text-center font-bold text-3xl mb-5">
        Confirm your vote
      </h2>
      <div className="text-white font-medium mb-5">
        <p> Write down your reasons and arguments for choosing this option.</p>
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
        className="w-full h-[200px] text-start bg-transparent rounded-md border border-[#808080] text-white focus:outline-none"
      />
      <div className="mb-5">
        <h4 className="text-[#D9D9D9] text-sm">
          <span className="text-primary mr-1 text-lg">Raise</span>(0-100 tokens)
        </h4>
        <div className="flex p-2 items-center border border-[#808080] rounded-md w-[150px]">
          <span className="text-white mr-2">$</span>
          <input
            type="text"
            placeholder="0"
            className="ml-auto w-full bg-transparent bg-[#2D2D2D] text-primary text-right"
          ></input>
        </div>
      </div>
      <div className="flex gap-x-5 w-full">
        <button className="bg-primary text-[#121212] font-bold py-2 px-4 w-full">
          Vote
        </button>
        <button
          onClick={() => setOpen(false)}
          className="bg-transparent border border-primary text-primary w-full font-bold"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
