import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import SelectComponent from "@/uitils/SelectComponent";
import { headers } from '../../next.config';

const UserProfile = () => {
    const [profile, setProfile] = useState({
        username: '',
        bio: '',
        dateOfBirth: '',
        gender: '',
        preferences: [],
        image: ''
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                //const { data } = await axios.get('/api/user/profile');
                setProfile({
                    ...profile,
                    username: data.username || `${data.firstName} ${data.lastName}`,
                    bio: data.bio,
                    dateOfBirth: data.dateOfBirth,
                    gender: data.gender,
                    preferences: data.preferences,
                    profilePicture: data.profilePicture
                });
            } catch (error) {
                toast.error('Failed to load profile data.');
            }
        };
        fetchProfile();
    }, []);
     
    const updateProfile = async ()=>{
        try {
            const storedData = localStorage.getItem('adventur-user');
            const {token} = JSON.parse(storedData);
            //setting up the headers for the request
            const config ={
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/users/update`,profile, config);
            if (response.status === 200) {
                toast.success('Profile updated successfully!');
             }
            else {
                // Handle any other HTTP status codes as needed
                throw new Error(`Failed to update profile with status: ${response.status}`);
            }
        } catch (error) {
            toast.error('Failed to update profile. Err:' + (error.response ? error.response.data.message : error.message));
        }
    }
    // Handlers for form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Field: ${name}, Value: ${value}`);
        setProfile(prevProfile=>({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSelectChange = (name, value) => {
        setProfile(prevProfile=>({
            ...prevProfile,
            [name]: value
        }));
    };


    return {profile, setProfile ,updateProfile, handleChange, handleSelectChange };

};

export default UserProfile;
