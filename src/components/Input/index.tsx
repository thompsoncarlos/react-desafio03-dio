import { IconContainer, InputContainer, InputText, ErrorText } from "./styles";
import { Controller } from "react-hook-form";
import { IInput } from "./types";

export default function Input({
  leftIcon,
  name,
  control,
  errorMessage,
  ...rest
}: IInput) {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
}
