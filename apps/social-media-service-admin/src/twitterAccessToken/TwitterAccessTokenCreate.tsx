import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TwitterAccessTokenCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="accessToken" source="accessToken" />
        <DateTimeInput label="expirationDate" source="expirationDate" />
      </SimpleForm>
    </Create>
  );
};
