import React from 'react';
import dayjs from 'dayjs';
import DateTimePicker from '@react-native-community/datetimepicker';

import {StyledText, StyledTouchableHighlight} from './styles';

export const DatePicker = props => {
  const {show, setShow, date, onChange, setFieldValue, formValue} = props;

  return (
    <>
      <StyledTouchableHighlight>
        <StyledText onPress={() => setShow(true)}>
          Début de contrat :{' '}
          {dayjs(date)
            .add(3, 'hours')
            .format('YYYY-MM-DD')}
        </StyledText>
      </StyledTouchableHighlight>
      {show && (
        <DateTimePicker
          timeZoneOffsetInMinutes={0}
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(e, v) => {
            onChange(v);
            setFieldValue(formValue, v);
          }}
        />
      )}
    </>
  );
};
