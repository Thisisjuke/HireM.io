import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Formik } from 'formik';
import { DatePicker } from "./particles/DatePicker";
import * as Yup from 'yup';
import dayjs from "dayjs";

export const CreateOfferForm = props => {
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
        name: '',
        companyDescription: '',
        offerDescription: '',
        startDate: new Date(),
        contractType: 'cdd',
      }}
      onSubmit={values => onFormSubmit(values)}
      validationSchema={OfferFormSchema}
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
            placeholder="Offer name"
          />
          {errors.name && touched.name ? (
            <Text>{errors.name}</Text>
          ) : null}
          <TextInput
            onChangeText={handleChange('companyDescription')}
            onBlur={handleBlur('companyDescription')}
            value={values.companyDescription}
            multiline = {true}
            numberOfLines = {4}
            placeholder="Company description"
          />
          {errors.companyDescription && touched.companyDescription ? (
            <Text>{errors.companyDescription}</Text>
          ) : null}
          <TextInput
            onChangeText={handleChange('offerDescription')}
            onBlur={handleBlur('offerDescription')}
            value={values.offerDescription}
            multiline = {true}
            numberOfLines = {4}
            placeholder="Description of your offer"
          />
          {errors.companyDescription && touched.companyDescription ? (
            <Text>{errors.companyDescription}</Text>
          ) : null}
          <DatePicker
            formValue="startDate"
            show={show}
            setShow={setShow}
            date={date}
            setFieldValue={setFieldValue}
            onChange={onChange}
          />
          {errors.startDate && touched.startDate ? (
            <Text>{errors.startDate}</Text>
          ) : null}
          <Picker onValueChange={val => setFieldValue('contractType', val)}>
            <Picker.Item label="CDD" value="cdd" />
            <Picker.Item label="CDI" value="cdi" />
          </Picker>
          {errors.contractType && touched.contractType ? (
            <Text>{errors.contractType}</Text>
          ) : null}
          <Button onPress={handleSubmit} title="Submit"/>
        </View>
      )}
    </Formik>
  )
};

const OfferFormSchema = Yup.object().shape({
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
