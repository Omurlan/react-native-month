import React, { useCallback, useState } from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { Month, ThemeType, MarkedDays } from 'react-native-month';
import { newTypographyStyle } from './newTypographyStyle';
import { spacing } from './spacing';
import { colors } from './colors';

const THEME: ThemeType = {
  weekColumnsContainerStyle: {
    paddingBottom: spacing.xxs,
  },

  dayContainerStyle: {
    marginVertical: 6,
    marginHorizontal: 5,
  },

  weekColumnStyle: {
    marginHorizontal: 5,
  },

  weekColumnTextStyle: {
    ...newTypographyStyle.text2,
    color: colors.basic.secondary,
  },

  startDateContainerStyle: {
    backgroundColor: colors.brand.surface,
  },

  startDateTextStyle: {
    color: colors.basic.inverse,
  },

  endDateContainerStyle: {
    backgroundColor: colors.brand.surface,
  },

  endDateTextStyle: {
    color: colors.basic.inverse,
  },

  activeDayContainerStyle: {
    backgroundColor: colors.background.primary,
  },

  todayTextStyle: {
    color: colors.brand.surface,
  },

  dayTextStyle: {
    color: colors.basic.primary,
    ...newTypographyStyle.text,
  },

  activeDayTextStyle: {
    color: colors.basic.primary,
  },
};

const truthyValue = true;

const DISABLED_DAYS = {
  '2020-10-20': truthyValue,
  '2020-10-10': truthyValue,
  '2022-10-15': truthyValue,
};

const markedDays: MarkedDays = {
  '2022-10-12': {
    theme: {
      dayContainerStyle: {
        backgroundColor: colors.brand.accent,
        borderRadius: 40,
      },
      dayTextStyle: {
        color: colors.basic.inverse,
      },
    },
  },
  '2022-10-15': {
    theme: {
      dayContainerStyle: {
        backgroundColor: colors.brand.accent,
        borderRadius: 40,
      },
      dayTextStyle: {
        color: colors.basic.inverse,
      },
    },
  },
  '2022-10-19': {
    theme: {
      dayContainerStyle: {
        backgroundColor: colors.brand.accent,
        borderRadius: 40,
      },
      dayTextStyle: {
        color: colors.basic.inverse,
      },
    },
  },
};

const INITIAL_STATE = {
  startDate: new Date(2022, 9, 11),
  endDate: new Date(2022, 9, 13),
  minDate: new Date(2022, 9, 6),
  maxDate: new Date(2022, 9, 20),
};

const App = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(
    INITIAL_STATE.startDate
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    INITIAL_STATE.endDate
  );

  const [isRange, setIsRange] = useState(false);

  const handleChangeDate = useCallback(
    (date) => {
      if (!isRange) {
        setStartDate(date);
        return;
      }

      if (startDate) {
        if (endDate) {
          setStartDate(date);
          setEndDate(undefined);
        } else if (date! < startDate) {
          setStartDate(date);
          setEndDate(undefined);
        } else if (date! > startDate) {
          setEndDate(date);
        } else {
          setStartDate(date);
          setEndDate(undefined);
        }
      } else {
        setStartDate(date);
      }
    },
    [startDate, endDate, isRange]
  );

  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: StatusBar.currentHeight,
          // alignItems: 'center',
          // paddingHorizontal: 25,
        }}
      >
        <Month
          month={startDate.getMonth()}
          year={startDate.getFullYear()}
          onPress={handleChangeDate}
          theme={THEME}
          showWeekdays
          locale="en"
          firstDayMonday
          minDate={INITIAL_STATE.minDate}
          maxDate={INITIAL_STATE.maxDate}
          markedDays={!isRange && markedDays}
          disableRange={!isRange}
          startDate={startDate}
          endDate={endDate}
          disabledDays={DISABLED_DAYS}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
