import { useState } from "react";

type Person = {
  name: string;
};

function Component() {
  const [formState, setFormState] = useState({ text: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Handles form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);

    const text = formData.get("text") as string;
    const person: Person = { name: formState.text };
    console.log(text);
    console.log(person);
  };

  return (
    <section>
      <h2>Events Example</h2>
      <form className="form" onSubmit={handleSubmit}>
        {/* Name Input */}
        <input
          type="text"
          name="text"
          className="form-input mb-1"
          value={formState.text}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          className="form-input mb-1"
          value={formState.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Component;
