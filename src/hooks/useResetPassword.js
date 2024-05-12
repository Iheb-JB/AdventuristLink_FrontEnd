import { useState, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useResetPassword = () => {
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChangeP = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Validate input
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Assuming you have context for user and token
    // const { user, token } = useContext(AuthContext);
    
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/changepassword`, {
        oldPassword: passwords.oldPassword,
        newPassword: passwords.newPassword
      }, {
        headers: {
          // Authorization: `Bearer ${token}` // Uncomment and adjust if using token
        }
      });

      if (response.status === 200) {
        toast.success('Password successfully changed');
        // Optionally clear the form or redirect the user
        setPasswords({ oldPassword: '', newPassword: '', confirmPassword: '' });
      }
    } catch (error) {
      toast.error("Failed to change password: " + (error.response ? error.response.data : "Server error"));
    }
  };

  return {
    passwords,
    handleChangeP,
    handleSubmit
  };
};

export default useResetPassword;
