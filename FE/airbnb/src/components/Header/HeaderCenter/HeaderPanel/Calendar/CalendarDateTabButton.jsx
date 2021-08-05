import { CALENDAR } from '../../../../../const';
import CalendarTabsButton from './CalendarTabsButton';

const CalendarDateTabButton = ({ tabState, setTabState }) => {
  return (
    <CalendarTabsButton
      {...{ setTabState }}
      buttonName={CALENDAR}
      selected={tabState}
    />
  );
};

export default CalendarDateTabButton;
