import { redirect } from "react-router-dom";
import { deleteContact } from "../Contacts/Contacts";

export async function action({ params }) {
  throw new Error("Oh dang!")
  await deleteContact(params.contactId);
  return redirect("/");
}