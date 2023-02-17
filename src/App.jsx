import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContextProvider from './contexts/authContext';
import UserContextProvider from './contexts/userContext';
import Protected from './components/protected/protected';
import SignupPage from './pages/signup/signup';
import SigninPage from './pages/signin/signin';
import AutoComplete from './containers/autoComplete';
import JobsPage from './pages/jobs/jobs';
import AgencyDashboard from './pages/agencyDashboard/agencyDashboard';
import ClientDashboard from './pages/clientDashboard/clientDashboard';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/test" element={<AutoComplete />} />
            <Route
              path="/candidateDashboard"
              element={
                <Protected>
                  <JobsPage />
                </Protected>
              }
            />
            <Route
              path="/agencyDashboard"
              element={
                <Protected>
                  <AgencyDashboard />
                </Protected>
              }
            />
            <Route
              path="/clientDashboard"
              element={
                <Protected>
                  <ClientDashboard />
                </Protected>
              }
            />
          </Routes>
        </UserContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
