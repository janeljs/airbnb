import styled from 'styled-components';
import { BLOCK, NONE } from '../../const';

export const FieldPanel = {
  FieldPanelMenu: styled.div`
    display: flex;
    flex: 1 1 0%;
    height: 100%;
    min-width: 0px;
    pointer-events: auto;
  `,

  FieldPanelMenuNearby: styled.div`
    display: flex;
    flex: 1 0 0%;
    min-width: 0px;

    @media ${({ theme }) => theme.L} {
      flex: 1.5 0 0%;
    }
  `,

  FieldPanelMenuSeparator: styled.div`
    align-self: center;
    border-right: 1px solid #ddd;
    flex: 0 0 0px;
    height: 32px;
  `,

  FieldPanelMenuCheckInButton: styled.div`
    position: relative;
    align-items: center;
    display: flex;
    flex: 1 0 0%;
    margin: -1px;
    min-width: 0px;
  `,

  FieldPanelMenuCalendar: styled.div`
    display: flex;
    flex: 2 0 0%;
    min-width: 0px;
  `,

  FieldPanelMenuGuest: styled.div`
    align-items: center;
    display: flex;
    margin: -1px;
    min-width: 0px;
    position: relative;
    flex: 0.95 0 auto;
  `,
};

export const Calendar = {
  Calendar: styled.div``,

  CalendarPopup: styled.div`
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: 1;
    background: rgb(255, 255, 255);
    border-radius: 32px;
    box-shadow: rgb(0 0 0 / 20%) 0px 6px 20px;
    margin-top: 12px;
    max-height: calc(100vh - 220px);
    overflow: hidden auto;
    padding: 16px 32px;
    right: 0px;

    /* display: ${({ calendarState }) => (calendarState ? BLOCK : NONE)}; */
  `,
};
