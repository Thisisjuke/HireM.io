import React, {useState} from 'react';
import {Text} from 'react-native-paper';

import {Formik} from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';

import {DatePicker} from '../particles/DatePicker/DatePicker';
import {Picker} from '../particles/Picker/Picker'
import {TextInput} from '../particles/TextInput/TextInput';
import {MultilineTextInput} from '../particles/MultilineTextInput/MultilineTextInput';

import {StyledView, StyledButton} from './styles';

export const CreateOfferForm = props => {
  const {onFormSubmit} = props;
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
      validationSchema={OfferFormSchema}>
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
            placeholder="Nom de votre offre"
          />
          {errors.name && touched.name ? <Text>{errors.name}</Text> : null}
          <MultilineTextInput
            onChangeText={handleChange('companyDescription')}
            onBlur={handleBlur('companyDescription')}
            value={values.companyDescription}
            placeholder="Description de votre entreprise"
          />
          {errors.companyDescription && touched.companyDescription ? (
            <Text>{errors.companyDescription}</Text>
          ) : null}
          <MultilineTextInput
            onChangeText={handleChange('offerDescription')}
            onBlur={handleBlur('offerDescription')}
            value={values.offerDescription}
            placeholder="Description de votre offre"
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
          <StyledButton onPress={handleSubmit} mode="contained">Créez votre offre</StyledButton>
        </StyledView>
      )}
    </Formik>
  );
};

const OfferFormSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  companyDescription: Yup.string().required('Required'),
  offerDescription: Yup.string().required('Required'),
  startDate: Yup.date()
    .test('before-today', "The start date can't be before today.", function(v) {
      return !dayjs(v).isBefore(dayjs(), 'day');
    })
    .required('Required'),
  contractType: Yup.string().required('Required'),
});
