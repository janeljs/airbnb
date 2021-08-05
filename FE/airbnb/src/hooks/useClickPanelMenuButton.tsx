import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { fieldPanelMenuActiveState } from '../Recoil/HeaderFieldsetState';

const useClickPanelMenuButton = (id: number) => {
  const setState = useSetRecoilState(fieldPanelMenuActiveState);

  const onClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setState((state) =>
      state.map((el, idx) => {
        return (el = idx === id ? !el : false);
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { onClick };
};

export default useClickPanelMenuButton;
