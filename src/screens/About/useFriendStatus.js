import { useState, useEffect } from 'react';

const useFriendStatus = id => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    if (id === 1 && isOnline !== true) {
      setIsOnline(true);
    }
  }, [isOnline]);

  return isOnline;
};

export default useFriendStatus;
