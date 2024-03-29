import React from "react";
import ReactSelect, {
  ActionMeta,
  ControlProps,
  MultiValue,
  OptionProps,
  PlaceholderProps,
  SingleValue,
  StylesConfig,
  Theme,
  components,
} from "react-select";

export interface Props<T> {
  options?: T[] | [];
  label?: string;
  onChange?: (
    newValue: SingleValue<T> | MultiValue<T>,
    actionMeta: ActionMeta<T>
  ) => void;
  value?: T | T[] | null;
  placeholder?: string;
  image?: React.ReactNode;
  className?: string;
  height?: number;
  isMulti?: boolean;
  error?: boolean;
}

export interface Option {
  label: string;
  value: string | number;
}

const selectStyle: StylesConfig<Option> = {
  control: (base: any) => ({
    ...base,
    border: "none",
    outline: "none",
    minWidth: "138px",
    width: "100%",
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "#27283E",
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "19.5px",
  }),
  input: (base: any) => ({
    ...base,
    maxWidth: "138px",
    overflow: "hidden",
    lineHeight: "19.5px",
    "&:placeholder": {
      lineHeight: "19.5px",
    },
  }),
  placeholder(base) {
    return {
      ...base,
      lineHeight: "19.5px",
    };
  },
  option(base) {
    return {
      ...base,
      lineHeight: "19.5px",
    };
  },
};

const theme = (theme: Theme): Theme => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "none",
      primary: "none",
    },
  };
};

/**
 * Custom dropdown indicator
 * @returns
 */
// const DropdownIndicator = () => (
//   <Image src="/icons/downArrow.svg" width={24} height={24} alt="Arrow" />
// );

const Select: React.FC<Props<Option>> = ({
  image,
  height = 40,
  error,
  ...props
}) => {
  const Control = ({ children, ...props }: ControlProps<Option>) => (
    <span
      className={`flex items-center gap-1 border  rounded-sm h-[${height}px] ${
        error ? "border-error" : "border-primary"
      }`}
    >
      {image}
      <components.Control {...props}>{children}</components.Control>
    </span>
  );

  const Option = (props: OptionProps<Option>) => {
    const { innerProps, innerRef } = props;
    return (
      <article
        ref={innerRef}
        {...innerProps}
        className={`px-2 py-1 border-b-[1px] last-of-type:border-b-0 hover:bg-slate-100 text-label cursor-pointer text-primary ${
          props.isSelected && "bg-slate-200"
        }`}
      >
        <div>{props.data.label}</div>
      </article>
    );
  };

  const Placeholder = (props: PlaceholderProps<Option>) => {
    return (
      <components.Placeholder {...props}>
        <span className="block font-normal text-label text-secondary">
          {props.selectProps.placeholder}
        </span>
      </components.Placeholder>
    );
  };

  return (
    <ReactSelect
      isClearable
      components={{
        IndicatorSeparator: () => null,
        // DropdownIndicator,
        Control,
        Option,
        Placeholder,
      }}
      styles={selectStyle}
      theme={theme}
      {...props}
    />
  );
};

export default Select;