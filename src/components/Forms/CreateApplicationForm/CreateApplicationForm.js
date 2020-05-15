import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Text} from 'react-native-paper';
import dayjs from 'dayjs';

import {DatePickerAge} from '../particles/DatePicker/DatePickerAge';
import {TextInput} from '../particles/TextInput/TextInput';
import {MultilineTextInput} from '../particles/MultilineTextInput/MultilineTextInput';

import {
  StyledView,
  StyledButton,
  StyledPicker,
  StyledPickerView,
  StyledDivider,
} from './styles';

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
        salaryWanted: '',
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
        <StyledView>
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Nom"
          />

          {errors.name && touched.name ? <Text>{errors.name}</Text> : null}

          <TextInput
            onChangeText={handleChange('firstname')}
            onBlur={handleBlur('firstname')}
            value={values.firstname}
            placeholder="Prénom"
          />

          {errors.firstname && touched.firstname ? (
            <Text>{errors.firstname}</Text>
          ) : null}

          <StyledPickerView>
            <StyledPicker
              selectedValue={values.gender}
              onValueChange={val => setFieldValue('gender', val)}
              style={{
                height: 24,
                paddingLeft: 24,
                color: '#92929d',
                fontFamily: 'Poppins-Regular',
              }}>
              <StyledPicker.Item label="Homme" value="m" />
              <StyledPicker.Item label="Femme" value="w" />
              <StyledPicker.Item label="Autre" value="o" />
            </StyledPicker>
          </StyledPickerView>

          {errors.gender && touched.gender ? (
            <Text>{errors.gender}</Text>
          ) : null}

          <DatePickerAge
            formValue="age"
            show={show}
            setShow={setShow}
            date={date}
            setFieldValue={setFieldValue}
            onChange={onChange}
          />

          <StyledDivider />

          {errors.age && touched.age ? <Text>{errors.age}</Text> : null}

          <TextInput
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            value={values.address}
            placeholder="Adresse"
          />

          {errors.address && touched.address ? (
            <Text>{errors.address}</Text>
          ) : null}

          <MultilineTextInput
            onChangeText={handleChange('motivationField')}
            onBlur={handleBlur('motivationField')}
            value={values.motivationField}
            placeholder="Motivations"
          />

          {errors.motivationField && touched.motivationField ? (
            <Text>{errors.motivationField}</Text>
          ) : null}

          <TextInput
            onChangeText={handleChange('salaryWanted')}
            onBlur={handleBlur('salaryWanted')}
            value={values.salaryWanted}
            placeholder="Salaire souhaité (en K€/an)"
          />

          {errors.salaryWanted && touched.salaryWanted ? (
            <Text>{errors.salaryWanted}</Text>
          ) : null}

          <StyledButton onPress={handleSubmit} mode="contained">
            Envoyer
          </StyledButton>
        </StyledView>
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
