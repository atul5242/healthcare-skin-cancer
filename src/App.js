import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header/Header';
import Home from './components/Home/Home';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Notfound from './components/Notfound/Notfound';
import Footer from './components/Header/Footer/Footer';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Login/Register/Register';
import AuthProvider from './Context/Authprovider';
import Services from './components/Services/Services';
import Doctors from './components/Services/Doctors/Doctors';
import OnlineScreening from './components/Services/OnlineScreening/OnlineScreening';
import ServiceDetails from './components/Services/ServiceDetails/ServiceDetails';
import PrivetRoute from './PrivetRoute/PrivetRoute';

// custom style for this application
export const myTheme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Medical blue
      light: '#64b5f6',
      dark: '#1976d2',
    },
    secondary: {
      main: '#4caf50', // Success green
      light: '#81c784',
      dark: '#388e3c',
    },
    error: {
      main: '#f44336', // Warning red
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={myTheme}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/home'>
                <Home />
              </Route>
              <PrivetRoute path='/doctors'>
                <Doctors />
              </PrivetRoute>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/register'>
                <Register />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/profile'>
                <Login />
              </Route>
              <PrivetRoute path='/screening'>
                <OnlineScreening />
              </PrivetRoute>
              <Route exact path='/services'>
                <Services />
              </Route>
              <PrivetRoute exact path='/services/details/:servId'>
                <ServiceDetails />
              </PrivetRoute>
              <Route path='*'>
                <Notfound />
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
