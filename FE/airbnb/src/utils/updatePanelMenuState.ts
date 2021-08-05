const updatePanelMenuState = (id: number, updateFunc: any) => {
  updateFunc((state: any) =>
    state.map((el: boolean, idx: number) => {
      return (el = idx === id ? !el : false);
    })
  );
};

export default updatePanelMenuState;
