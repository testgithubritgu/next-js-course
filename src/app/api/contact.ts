import axios from "axios"

export interface ContactType {
    id?:string,
    name?:string,
    email?:string,
    userId?:string | undefined
}

const API_URL = "http://localhost:3001"

export const  getContacts = async (userId:string) =>{
    const response = await axios.get(`${API_URL}/contacts?userId=${userId}`)
    return response.data
}

export const createContactsById = async (contact: ContactType) => {
  const response = await axios.post(`${API_URL}/contacts`, contact);
  return response.data;
};

export const updateContact = async (id:string,contact:string) => {
    const response = await axios.put(`${API_URL}/${id}`, contact);
    return response.data
}

export const deleteContact = async (id:string) => {
    const response = await axios.delete(`${API_URL}/contacts/${id}`);
    return response.data
}