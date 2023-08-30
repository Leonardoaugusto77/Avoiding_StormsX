import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper_Form,
  Title_Form,
  FormContainer,
  FormSection,
  Label,
  Input,
  TextArea,
  SubmitButton,
  Button_Container,
} from "../../Styles/Form_Styles/Form_Styles";

export default function Form(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData((prevData) => ({
        ...prevData,
        file,
      }));
    } else {
      alert("Please select a PDF file.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
      file: null,
    });

    alert("Data has been sent!");
  };

  return (
    <Wrapper_Form>
      <Title_Form>Contact Page</Title_Form>
      <Link to="/">Back to Home</Link>
      <FormContainer onSubmit={handleSubmit}>
        <FormSection>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormSection>
        <FormSection>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormSection>
        <FormSection>
          <Label htmlFor="message">Message:</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </FormSection>
        <FormSection>
          <Label htmlFor="file">Upload a PDF file:</Label>
          <Input
            type="file"
            id="file"
            name="file"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </FormSection>
        <Button_Container>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Button_Container>
      </FormContainer>
    </Wrapper_Form>
  );
}
