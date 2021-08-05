import { FREE } from '../../../../../const';
import CalendarTabsButton from './CalendarTabsButton';

const CalendarDateTabButton = ({ tabState, setTabState }) => {
  return (
    <CalendarTabsButton
      {...{ setTabState }}
      buttonName={FREE}
      selected={!tabState}
    />
  );
};

export default CalendarDateTabButton;
