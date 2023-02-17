import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '@/contexts/userContext';

function Protected({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) setIsLoggedIn(true);
    else navigate('/');
  }, []);

  return <>{isLoggedIn && children}</>;
}

export default Protected;
