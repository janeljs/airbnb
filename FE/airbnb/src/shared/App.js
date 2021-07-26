import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/style/GlobalStyles';
import Footer from '../components/Footer/Footer';
import theme from '../components/style/theme';
import { Route, Redirect } from 'react-router-dom';
import { Aside, Home, Main, Reservation } from '../pages';
import Callback from '../components/Callback';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { isLoggedIn } from '../Recoil/LogInState';

function App() {
  const token = localStorage.getItem('token');
  const setIsLogIn = useSetRecoilState(isLoggedIn);

  useEffect(() => {
    token && setIsLogIn(true);
  }, []);

  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
      <AppStyle className="App">
        <UpperDiv>
          <Route exact path="/callback" component={Callback} />
          <Route exact path="/" component={Aside} />
          <Home />
          <Route exact path="/" component={Main} />
          <Route path="/reservation" component={Reservation} />
          {/* {!isLogIn && <Route exact path="/login" component={Callback} />} */}
          <Redirect from="*" to="/" />
        </UpperDiv>
        <BeforeAfterDiv>
          <Footer />
        </BeforeAfterDiv>
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;

const AppStyle = styled.div``;

const BeforeAfterDiv = styled.div`
  ::before {
    display: flex;
    content: '';
  }
  ::after {
    display: flex;
    content: '';
  }
`;

const UpperDiv = styled.div`
  position: relative;
  min-height: 100vh;
`;
