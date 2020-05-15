import React, {useState, useEffect} from 'react';

import {Formik} from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import {Text} from 'react-native-paper';

import {getOfferTypes} from '../../../api/Offer';

import {DatePicker} from '../particles/DatePicker/DatePicker';
import {TextInput} from '../particles/TextInput/TextInput';
import {MultilineTextInput} from '../particles/MultilineTextInput/MultilineTextInput';

import {
  StyledView,
  StyledButton,
  StyledPicker,
  StyledPickerView,
} from './styles';

export const CreateOfferForm = props => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getOfferTypes(info => {
      setTypes(info);
    });
  }, []);

  const {onFormSubmit, userId} = props;
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
      onSubmit={values => onFormSubmit(values, userId)}
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
          <StyledPickerView>
            <StyledPicker
              selectedValue={values.contractType}
              onValueChange={val => setFieldValue('contractType', val)}
              style={{
                height: 24,
                paddingLeft: 24,
                color: '#92929d',
                fontFamily: 'Poppins-Regular',
              }}>
              {types.map((info, i) => {
                return (
                  <StyledPicker.Item
                    key={i}
                    label={info.name}
                    value={`/contracts_types/${info.id}`}
                  />
                );
              })}
            </StyledPicker>
          </StyledPickerView>
          {errors.contractType && touched.contractType ? (
            <Text>{errors.contractType}</Text>
          ) : null}
          <StyledButton onPress={handleSubmit} mode="contained">
            Créez votre offre
          </StyledButton>
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
