import axios from 'axios';
const usersUrl = 'http://localhost:8080';
const internshipURL = 'http://localhost:8080';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}
export const getAnnouncements = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}
export const addAnnouncement = async (announcement) => {
    return await axios.post(`${usersUrl}/addann`, announcement);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const deleteAnnouncement = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}

export const getInternships = async (id) => {
    id = id || '';
    // try{
    return await axios.get(`${internshipURL}/allint`);
    // }
    // } catch(error){
    //     console.log('error while calling getinternships API',error);
    // }
}

export const getPPOs = async (id) => {
    id = id || '';
    return await axios.get(`${internshipURL}/${id}`);
}

export const addInternship = async (internship) => { 
    return await axios.post(`${internshipURL}/addint`, internship);
}

export const addPPO = async (ppo) => { 
    return await axios.post(`${internshipURL}/addppo`, ppo);
}

export const editInternship = async (id, internship) => {
    return await axios.put(`${usersUrl}/${id}`, internship);
}

export const editPPO = async (id, ppo) => {
    return await axios.put(`${usersUrl}/${id}`, ppo)
}

export const deleteInternship = async (id) => {
    return await axios.delete(`${internshipURL}/${id}`);
}

export const deletePPO = async (id) => {
    return await axios.delete(`${internshipURL}/${id}`);
}
