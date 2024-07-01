import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Loader from './common/Loader';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import CategoriesAdd from './pages/Dashboard/CategoriesAdd';
import '../index.css';
import { useMyContext } from './contextapi/MyProvider';
import Templatesmain from './pages/Templates/Templatesmain';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { isAuthenticated, handleSignIn, handleSignUp } = useMyContext();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/auth/signin"
          element={<SignIn onSignIn={handleSignIn} />}
        />
        <Route
          path="/auth/signup"
          element={<SignUp onSignUp={handleSignUp} />}
        />
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <DefaultLayout>
                <Routes>
                  <Route index element={<CategoriesAdd />} />
                  <Route path="/templates" element={<Templatesmain />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route
                    path="/forms/form-elements"
                    element={<FormElements />}
                  />
                  <Route path="/forms/form-layout" element={<FormLayout />} />
                  <Route path="/tables" element={<Tables />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/chart" element={<Chart />} />
                  <Route path="/ui/alerts" element={<Alerts />} />
                  <Route path="/ui/buttons" element={<Buttons />} />
                </Routes>
              </DefaultLayout>
            ) : (
              <Navigate to="/auth/signin" />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
