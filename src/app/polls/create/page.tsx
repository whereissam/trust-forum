"use client";

import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const labelStyles = "block mb-2 text-sm font-medium text-white w-[120px]";
const inputStyles =
  "text-white bg-transparent border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-3.5";

export default function CreatePollPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm();
  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className="mx-auto max-w-3xl rounded-2xl bg-[#2D2D2D] py-4 px-5 mt-10 mb-20">
      <h2 className="text-white text-center text-2xl font-bold mb-5">
        Create Poll
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* TITLE */}
        <div className="mb-6 flex justify-between">
          <label htmlFor="title" className={labelStyles}>
            Title
          </label>
          <input
            type="text"
            id="title"
            className={inputStyles}
            placeholder="Enter poll title"
            required
            {...register("title", { required: true })}
          />
        </div>
        {/* DESCRIPTION */}
        <div className="mb-6 flex justify-between">
          <label htmlFor="description" className={labelStyles}>
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            className={`${inputStyles} min-h-[130px]`}
            placeholder="Enter poll description"
            required
            {...register("description", { required: true })}
          />
        </div>
        {/* OPTION 1 */}
        <div className="mb-6 flex justify-between">
          <label htmlFor="Option 1" className={labelStyles}>
            Option 1
          </label>
          <input
            type="text"
            id="option1"
            className={inputStyles}
            placeholder="What's the first option?"
            required
            {...register("option1", { required: true })}
          />
        </div>
        {/* OPTION 2 */}
        <div className="mb-6 flex justify-between">
          <label htmlFor="Option 2" className={labelStyles}>
            Option 2
          </label>
          <input
            type="text"
            id="option2"
            className={inputStyles}
            placeholder="What's the second option?"
            required
            {...register("option2", { required: true })}
          />
        </div>
        {/* DUE DATE */}
        <div className="mb-6 flex justify-between">
          <label htmlFor="due-date" className={labelStyles}>
            Due Date
          </label>
          <input
            type="date"
            id="due-date"
            className={inputStyles}
            required
            {...register("dueDate", { required: true })}
          />
        </div>
        {/* TAGS */}
        <div className="mb-6 flex justify-between">
          <label htmlFor="tags" className={labelStyles}>
            Tags
          </label>
          <Controller
            control={control}
            name="tags"
            render={({ field: { onChange, value } }) => (
              <Select
                isMulti
                className="w-full"
                classNames={{
                  control: () => "px-1 py-2 text-white w-full",
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                  }),
                  menu: (base) => ({
                    ...base,
                    color: "white",
                    background: "#2D2D2D",
                  }),
                  option: (base) => ({
                    ...base,
                    ":hover": {
                      color: "black",
                    },
                  }),
                  multiValue: (base) => ({
                    ...base,
                    backgroundColor: "transparent",
                    border: "1px solid #C9E052",
                    borderRadius: "8px",
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    color: "#C9E052",
                  }),
                  multiValueRemove: (base) => ({
                    ...base,
                    color: "#C9E052",
                    ":hover": {
                      color: "white",
                    },
                  }),
                }}
                options={[
                  { value: "blockchain", label: "Blockchain" },
                  { value: "philosophy", label: "Philosophy" },
                  { value: "politics", label: "Politics" },
                  { value: "technology", label: "Technology" },
                  { value: "trivial", label: "Trivial" },
                ]}
                onChange={(val) => onChange(val)}
                value={value}
              />
            )}
          />
        </div>

        {/* IMAGE INPUT */}
        <div className="mb-6 flex justify-between">
          <label htmlFor="image" className={labelStyles}>
            Image
          </label>
          <input
            type="file"
            id="image"
            className={inputStyles}
            required
            {...register("image", { required: true })}
          />
        </div>

        {/* Button Row */}
        <div className="flex gap-x-5 w-full">
          <button className="bg-transparent border border-primary text-primary w-full font-bold">
            Cancel
          </button>
          <button
            type="submit"
            disabled={!isValid}
            className="bg-primary text-[#121212] font-bold py-2 px-4 w-full disabled:bg-[#D9D9D9] disabled:text-gray-400"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
