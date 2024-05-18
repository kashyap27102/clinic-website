"use client";
import { useState } from "react";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{
    success?: boolean;
    error?: boolean;
    data?: string;
  }>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });
      console.log(res);
      setLoading(false);
      setData({ success: true, data: "Query Sent Successfully" });
      setForm({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setData({ error: true, data: "Something went wrong!" });
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="grid grid-cols-2 gap-4 bg-primaryLight rounded-md shadow-lg p-8"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        type="text"
        className="w-full p-2 rounded-sm focus:outline-none"
        placeholder="Name"
        required
      />
      <input
        name="mobile"
        value={form.mobile}
        onChange={handleChange}
        type="text"
        className="w-full p-2 rounded-sm focus:outline-none"
        placeholder="Phone"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        className="w-full p-2 col-span-2 rounded-sm focus:outline-none"
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows={3}
        className="w-full p-2 col-span-2 rounded-sm focus:outline-none"
        placeholder="Send your query"
        required
      />
      <button
        type="submit"
        className="w-full bg-primaryDark text-white col-span-2 p-2 rounded-sm shadow-md font-semibold"
        disabled={loading}
      >
        {!loading ? "SUBMIT" : "LOADING..."}
      </button>
      {(data.error || data.success) && (
        <div
          className={`${
            data.error && "bg-danger border-danegerDark text-danegerDark"
          } ${
            data.success && "bg-success border-successDark text-successDark"
          } rounded-md p-4 col-span-2 border-2 `}
        >
          {data.data}
        </div>
      )}
    </form>
  );
};
