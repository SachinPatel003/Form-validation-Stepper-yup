import React from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  formHelperText: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

// type Props<T extends FieldValues> = Omit<TextFieldProps, 'inputRef' | 'name' | 'helperText'> &
//   UseControllerProps<T> & {
//     name: string;
//     helperText?: string;
//     characterLimit?: number;
//   };

const TextField =({
  name,
  control,
  helperText,
  characterLimit,
  ...props
}) => {
  const {
    field: { ref, value, ...field },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  const computedHelperText = invalid ? error?.message : helperText;

  const styles = useStyles();

  return (
    <MuiTextField
      {...field}
      {...props}
      id={props.id || field.name}
      value={value}
      inputRef={ref}
      error={invalid}
      FormHelperTextProps={{
        className: characterLimit ? styles.formHelperText : '',
      }}
      aria-invalid={invalid}
      helperText={
        characterLimit ? (
          <>
            <span>{computedHelperText}</span>
            <span aria-hidden>{`${value.length}/${characterLimit}`}</span>
          </>
        ) : (
          <span>{computedHelperText}</span>
        )
      }
      inputProps={{
        ...props.inputProps,
        maxLength: characterLimit,
        autoComplete: 'off',
      }}
    />
  );
};

export default TextField;