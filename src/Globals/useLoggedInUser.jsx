import { useState, useEffect } from 'react';

const useLoggedInUser = () => {
  const [deptId, setDeptId] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const userDept = JSON.parse(loggedInUser);
      setDeptId(parseInt(userDept.user.dept_id));
      const users = JSON.parse(loggedInUser);
      setUserId(users.user.id);
    }
  }, []);

  return { deptId, userId };
};

export default useLoggedInUser;