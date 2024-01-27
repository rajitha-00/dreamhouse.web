import React, { useState } from "react";
import { PrimaryButton } from "@/components";

type ContactFormProps = {};

export const ContactForm = ({}: ContactFormProps): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

    // Validation logic for each field
    if (formData.name.trim() === "") {
      newFormErrors.name = "First name is required";
      isValid = false;
    } else {
      newFormErrors.name = "";
    }

    if (
      formData.contactNumber.trim() === "" ||
      !/^\d{10}$/.test(formData.contactNumber)
    ) {
      newFormErrors.contactNumber = "Enter a valid 10-digit phone number";
      isValid = false;
    } else {
      newFormErrors.contactNumber = "";
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, submit data or perform further actions
      console.log("Form submitted:", formData);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* First Name */}
            <div className="col-span-full">
              <label
                htmlFor="first-name"
                className="block text-md font-poppins font-[600] leading-6 text-textColorLight"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full font-poppins rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <span className="text-red-500">{formErrors.name}</span>
              </div>
            </div>

            {/* Email */}
            <div className="col-span-full">
              <label
                htmlFor="email"
                className="block text-md font-poppins font-[600] leading-6 text-textColorLight"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full font-poppins rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <span className="text-red-500">{formErrors.email}</span>
              </div>
            </div>

            {/* Phone Number */}
            <div className="col-span-full">
              <label
                htmlFor="contact-number"
                className="block text-md font-poppins font-[600] leading-6 text-textColorLight"
              >
                Phone number*
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="contactNumber"
                  id="contact-number"
                  autoComplete="tel"
                  pattern="[0-9]{10}"
                  className="block w-full font-poppins rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
                <span className="text-red-500">{formErrors.contactNumber}</span>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="details"
                className="block text-md font-[600] font-poppins leading-6 text-textColorLight"
              >
                Details
              </label>
              <div className="mt-2">
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  className="block w-full rounded-md font-poppins border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
        <PrimaryButton url="" name="Submit" />
      </form>
    </>
  );
};
