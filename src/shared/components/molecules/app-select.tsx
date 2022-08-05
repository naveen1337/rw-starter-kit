import { ClockIcon } from "@icons";
import React from "react";
import Select from "react-select";

interface PropTypes {
  multiple?: boolean;
  disabled?: boolean;
  defaultValue?: null | OptionType;
  value: OptionType | null;
  onChange(e: OptionType): void;
  options: OptionType[];
  placeHolder?: string;
}

interface OptionType {
  value: string | number;
  label: string | number;
}

export default function AppSelect(props: PropTypes) {
  return (
    <Select
      isMulti={props.multiple ? true : false}
      isDisabled={props.disabled}
      defaultValue={props.defaultValue || null}
      placeholder={props.placeHolder}
      value={props.value}
      components={{ DropdownIndicator }}
      onChange={(e: any) => props.onChange(e)}
      options={props.options}
      styles={appSelectStyles}
      theme={themeStyles}
    />
  );
}

function DropdownIndicator(props: any) {
  // console.log(props);

  return (
    <div className="px-2">
      <ClockIcon />
    </div>
  );
}

function themeStyles(e: any) {
  // console.log(e);
  return {
    ...e,
    colors: {
      ...e.colors,
      primary: "#D9AA27",
    },
  };
}

const appSelectStyles = {
  indicatorSeparator: () => {
    return {
      display: "none",
    };
  },

  control: (e: any) => {
    return {
      ...e,
      borderRadius: 4,
      padding: 2,
      boxShadow: "1px 1px 3px #e5e7eb",
      // borderWidth: 0.1,
    };
  },
  placeholder: (e: any) => {
    return {
      ...e,
      color: "#8A99AC",
      fontSize: 14,
      fontFamily: "Montserrat-Regular",
    };
  },
};
