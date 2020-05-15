import React, {useState} from 'react';
import {Button, TextInput, View, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {DatePicker} from './particles/DatePicker';
import dayjs from 'dayjs';

export const CreateApplicationForm = props => {
  const {onFormSubmit} = props;
  const [date, setDate] = useState(new Date('1970-01-01'));
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
        firstname: '',
        gender: '',
        age: new Date('1970-01-01'),
        address: '',
        motivationField: '',
        salaryWanted: '0',
      }}
      onSubmit={(values, {resetForm}) => {
        onFormSubmit(values);
        resetForm();
      }}
      validationSchema={ApplicationFormSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        setFieldValue,
        errors,
        touched,
      }) => (
        <View>
          <Text>Your last name:</Text>
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Your name"
          />
          {errors.name && touched.name ? <Text>{errors.name}</Text> : null}
          <Text>Your first name:</Text>
          <TextInput
            onChangeText={handleChange('firstname')}
            onBlur={handleBlur('firstname')}
            value={values.firstname}
            placeholder="Your first name"
          />
          {errors.firstname && touched.firstname ? (
            <Text>{errors.firstname}</Text>
          ) : null}
          <Picker
            style={{width: 150}}
            selectedValue={values.gender}
            onValueChange={val => setFieldValue('gender', val)}>
            <Picker.Item label="Man" value="m" />
            <Picker.Item label="Woman" value="w" />
            <Picker.Item label="Other" value="o" />
          </Picker>
          {errors.gender && touched.gender ? (
            <Text>{errors.gender}</Text>
          ) : null}
          <Text>Birth Date :</Text>
          <DatePicker
            formValue="age"
            show={show}
            setShow={setShow}
            date={date}
            setFieldValue={setFieldValue}
            onChange={onChange}
          />
          {errors.age && touched.age ? <Text>{errors.age}</Text> : null}
          <TextInput
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            value={values.address}
            placeholder="Your address"
          />
          {errors.address && touched.address ? (
            <Text>{errors.address}</Text>
          ) : null}
          <TextInput
            onChangeText={handleChange('motivationField')}
            onBlur={handleBlur('motivationField')}
            value={values.motivationField}
            multiline={true}
            numberOfLines={4}
            placeholder="Your motivation"
          />
          {errors.motivationField && touched.motivationField ? (
            <Text>{errors.motivationField}</Text>
          ) : null}
          <TextInput
            onChangeText={handleChange('salaryWanted')}
            onBlur={handleBlur('salaryWanted')}
            value={values.salaryWanted}
            placeholder="The salary you want:"
          />
          {errors.salaryWanted && touched.salaryWanted ? (
            <Text>{errors.salaryWanted}</Text>
          ) : null}

          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

const ApplicationFormSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  firstname: Yup.string().required('Required'),
  gender: Yup.string().required('Required'),
  age: Yup.date()
    .test('after-today', "Your birth date can't be after today.", function(v) {
      return !dayjs(v).isAfter(dayjs(), 'day');
    })
    .required('Required'),
  address: Yup.string().required('Required'),
  motivationField: Yup.string().required('Required'),
  salaryWanted: Yup.string().required('Required'),
});
