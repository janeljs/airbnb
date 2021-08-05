import React from 'react';
import { useSetRecoilState } from 'recoil';
import { fieldPanelMenuActiveState } from '../Recoil/HeaderFieldsetState';

const useClickPanelMenuButton = (id: number) => {
  const setState = useSetRecoilState(fieldPanelMenuActiveState);

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setState((state) =>
      state.map((el, idx) => {
        return (el = idx === id ? !el : false);
      })
    );
  };

  return { onClick };
};

export default useClickPanelMenuButton;
