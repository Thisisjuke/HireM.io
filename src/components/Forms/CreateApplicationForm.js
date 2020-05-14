import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Formik } from 'formik';
import { DatePicker } from "./particles/DatePicker";
import * as Yup from 'yup';
import dayjs from "dayjs";

export const CreateApplicationForm = props => {
  const {
    onFormSubmit
  } = props
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = selectedDate => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        firstname: "",
        gender: "m",
        age: 18,
        address: "",
        motivation_field: "",
        salary_wanted: 0
      }}
      onSubmit={values => onFormSubmit(values)}
      validationSchema={ApplicationFormSchema}
    >
      {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          errors,
          touched
      }) => (
        <View>
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Your name"
          />
          {errors.name && touched.name ? (
            <Text>{errors.name}</Text>
          ) : null}
          <Picker onValueChange={val => setFieldValue('gender', val)}>
            <Picker.Item label="Man" value="m" />
            <Picker.Item label="Woman" value="w" />
            <Picker.Item label="Other" value="o" />
          </Picker>
          {errors.gender && touched.gender ? (
            <Text>{errors.gender}</Text>
          ) : null}
          <Button onPress={handleSubmit} title="Submit"/>
        </View>
      )}
    </Formik>
  )
};

const ApplicationFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  companyDescription: Yup.string()
    .required('Required'),
  offerDescription: Yup.string()
    .required('Required'),
  startDate: Yup.date()
    .test('before-today', "The start date can't be before today.",
    function(v) {
      return !dayjs(v).isBefore(dayjs(), 'day')
    })
    .required('Required'),
  contractType: Yup.string()
    .required('Required'),
});
