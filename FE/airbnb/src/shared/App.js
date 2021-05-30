import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/style/GlobalStyles';
import Footer from '../components/Footer/Footer';
import theme from '../components/style/theme';
import { Route } from 'react-router-dom';
import { Aside, Home, Main, Reservation } from '../pages';

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
      <AppStyle className="App">
        <UpperDiv>
          <Route exact path="/" component={Aside} />
          <Home />
          <Route exact path="/" component={Main} />
          <Route path="/reservation" component={Reservation} />
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