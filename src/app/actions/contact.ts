'use server'

import { revalidatePath } from "next/cache";
import { ContactType, createContactsById, deleteContact } from "../api/contact";

export const deleteContactActions = async (prevState:any,FormData:FormData) =>{
    const id = FormData.get("id") as string;
    try {
        await deleteContact(id)
        revalidatePath("/contact")
        return {success:true}
    } catch (error) {
        console.log(error)
    }
}

export const addContact = async(contact:ContactType) => {
    try {
        await createContactsById(contact)
        return {success:true}
    } catch (error) {
        console.log(error)
    }
}