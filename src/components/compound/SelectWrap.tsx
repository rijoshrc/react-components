import { Option, Select } from "../atoms/select";

const options: Option[] = [
  {
    label: "Option 1",
    value: "option 1",
  },
  {
    label: "Option 2",
    value: "option 2",
  },
];

const SelectWrap = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <label className="mb-4 text-xl font-bold text-primary dark:text-primary-dark">
        Select
      </label>
      <div className="flex flex-wrap gap-4">
        <Select options={options} error />
        <Select isMulti options={options} />
      </div>
    </div>
  );
};

export default SelectWrap;
