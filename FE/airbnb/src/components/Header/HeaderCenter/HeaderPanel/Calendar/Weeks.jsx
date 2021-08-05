import { WEEK_LIST } from '../../../../../const';
import { v4 as uuidv4 } from 'uuid';
import Week from './Week';
import { Calendar as S } from '../../../../../styles/styles';

const Weeks = ({ direction }) => {
  return (
    <S.WeeksStyle {...{ direction }}>
      <S.WeeksUl>
        {WEEK_LIST.map((week) => (
          <Week {...{ week }} key={uuidv4()} />
        ))}
      </S.WeeksUl>
    </S.WeeksStyle>
  );
};
export default Weeks;
