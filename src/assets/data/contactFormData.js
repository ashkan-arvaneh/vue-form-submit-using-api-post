const contactFormData = [
  {
    name: "Full Name",
    id: "name",
    type: "text",
    validation: "required|min:3|max:100"
  },
  {
    name: "Business Name",
    id: "business_name",
    type: "text",
    validation: "required|min:2|max:100"
  },
  {
    name: "Email",
    id: "email",
    type: "email",
    validation: "required|email|min:2|max:80"
  },
  {
    name: "Telephone number",
    id: "telephone_number",
    type: "text",
    validation: "required|numeric|max:13"
  }
];

export default contactFormData;
