import Select from "../atoms/Select";

const options = [
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
        <Select options={options} />
        <Select isMulti options={options} />
      </div>
    </div>
  );
};

export default SelectWrap;
