import { FunctionalComponent } from "../../stencil-public-runtime";
import { DuetLocalizedText } from "./date-localization";
declare type DatePickerInputProps = {
  value: string;
  localization: DuetLocalizedText;
  name: string;
  identifier: string;
  disabled: boolean;
  role: string;
  onClick: (event: MouseEvent) => void;
  onInput: (event: InputEvent) => void;
  onBlur: (event: FocusEvent) => void;
  onFocus: (event: FocusEvent) => void;
  buttonRef: (element: HTMLButtonElement) => void;
  inputRef: (element: HTMLInputElement) => void;
};
export declare const DatePickerInput: FunctionalComponent<DatePickerInputProps>;
export {};
