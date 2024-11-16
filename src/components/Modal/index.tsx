import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, SetStateAction } from "react";

interface TimeslotDetailModalProps {
  openModal: boolean;
  setOpen: SetStateAction<any>;
  children?: ReactNode;
  fullScreen?: boolean;
  hasCloseButton?: boolean;
  hasFixedButtonPanel?: boolean;
  buttonInPanel?: ReactNode;
  modalTitle?: string;
}

export default function Modal({
  openModal,
  setOpen,
  children,
  fullScreen = false,
}: TimeslotDetailModalProps) {
  return (
    <Transition.Root as={Fragment} show={openModal}>
      <Dialog as="div" className="relative z-infinity" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-infinity overflow-y-scroll sm:rounded-lg">
          <div className="flex items-end justify-center text-center sm:h-full sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative flex flex-col ${
                  fullScreen
                    ? "w-full max-sm:min-h-screen sm:h-[75vh] sm:w-[80%]"
                    : "my-5"
                } z-infinity overflow-y-scroll bg-[#2D2D2D] text-left shadow-xl transition-all sm:my-8  sm:rounded-lg`}
              >
                <div className="relative p-[20px] sm:mb-0">
                  {/* CONTENT */}
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
