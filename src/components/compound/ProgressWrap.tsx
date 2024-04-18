import Progress from "../atoms/progress";

const ProgressWrap = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <label className="mb-4 text-xl font-bold text-primary dark:text-primary-dark">
        Progress
      </label>
      <div className="w-1/2 mb-10">
        <Progress progress={90} />
      </div>
      <div className="w-1/2 mb-10">
        <Progress progress={60} loading />
      </div>
      <div className="w-1/2 mb-10">
        <Progress progress={60} processing />
      </div>
    </div>
  );
};

export default ProgressWrap;
