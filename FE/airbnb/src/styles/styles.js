import styled from 'styled-components';
import { BLOCK, LEFT, NONE } from '../const';

// Field Panel

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

// Calendar

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
  `,
  CalendarSection: styled.section`
    padding-top: 16px;
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  CalendarWrapper: styled.div``,

  CalendarTabsWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 32px;
  `,

  CalendarTabsBox: styled.div`
    background-color: rgb(235, 235, 235);
    border-radius: 100px;
    padding-left: 4px;
    padding-right: 4px;
    display: flex;
  `,

  CalendarListStyle: styled.div`
    margin: 0px -36px;
    min-height: 340px;
  `,

  CalendarListWrapper: styled.div`
    width: 801px;
    position: relative;
    text-align: left;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
  `,

  CalendarListBox: styled.div`
    width: 800px;
  `,

  WeeksStyle: styled.div`
    color: rgb(117, 117, 117);
    position: absolute;
    top: 62px;
    z-index: 2;
    text-align: left;

    ${({ direction }) =>
      direction === LEFT
        ? `left: 0px; padding: 0px 27px`
        : `left: 391px; padding: 0px 27px`}
  `,

  WeeksUl: styled.ul`
    list-style: none;
    margin: 1px 0px;
    padding-left: 0px;
    padding-right: 0px;
    font-size: 14px;
  `,

  CalendarMainButtonStyle: styled.div`
    position: relative;
    z-index: 2;
    height: 0px;
  `,

  ButtonWrapper: styled.div`
    cursor: pointer;
    user-select: none;
    border: 0px;
    padding: 0px;
    margin: 0px;
  `,

  ButtonBox: styled.div`
    position: absolute;
    top: 0px;
    padding: 15px;

    ${({ direction }) => (direction === LEFT ? `left: 23px` : 'right: 23px')}
  `,

  ButtonStyle: styled.button`
    appearance: none;
    display: flex;
    border-radius: 50%;
    border: none;
    outline: none;
    margin: 0px;
    padding: 0px;
    color: rgb(34, 34, 34);
    cursor: pointer;
    touch-action: manipulation;
    position: relative;
    background: transparent;
    transition: transform 0.25s ease 0s;
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;

    :hover {
      background: rgb(247, 247, 247);
    }

    ::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    span {
      position: relative;

      svg {
        height: 20px;
        width: 20px;
        display: block;
        fill: #717171;
      }
    }
  `,

  CalendarMainViewStyle: styled.div`
    width: 800px;
    height: ${({ boxHeight }) => `${boxHeight}px`};
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    transition: height 0.2s ease-in-out 0s;
  `,

  CalendarMainViewWrapper: styled.div`
    transform: ${({ calendarPosition }) => `translateX(${calendarPosition}px)`};
    width: 1564px;
    position: absolute;
    background: rgb(255, 255, 255);
    text-align: left;
    z-index: 0;
    left: 9px;
    transition: ${({ animationState }) =>
      animationState && `transform 200ms ease-in-out 0s;`};
  `,
};

// NearbyPopup

export const NearbyPopup = {
  NearbyPopup: styled.div`
    left: 0px;
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: 4;

    display: ${({ nearbyPopup }) => (nearbyPopup ? BLOCK : NONE)};
  `,
  NearbyPopupBox: styled.div`
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
  `,

  NearbyPopupSection: styled.section`
    ul {
      padding: 8px 0px;
      margin: 0px -32px -8px;
      width: 500px;
      li {
        cursor: pointer;
        list-style-type: none;
        width: 100%;
        display: flex;
        padding: 8px 16px 8px 32px;

        :hover {
          background-color: rgb(247, 247, 247);
        }
      }
    }
  `,

  NearbyIcon: styled.div`
    font-size: 17px;
    background-color: rgb(247, 247, 247);
    border: 1px solid rgba(176, 176, 176, 0.2);
    border-radius: 8px;
    min-width: 48px;
    height: 48px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      object-fit: cover;
      width: 48px;
      height: 48px;
      border-radius: 8px;
    }
  `,

  NearbyMsg: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      color: rgb(34, 34, 34);
      max-height: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
};
