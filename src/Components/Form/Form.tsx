import React, { useState } from "react";

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
      alert("Por favor, selecione um arquivo PDF.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do Formulário:", formData);
  };

  return (
    <div>
      <h1>Página de Contato</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <div>
          <label htmlFor="file">Envie um arquivo PDF:</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
