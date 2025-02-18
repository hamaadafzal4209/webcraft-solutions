"use client";

import Banner from "@/components/common/Banner";
import SectionHeader from "@/components/common/SectionHeader";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const ContactPage = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const subject = `${values.firstName} sent a message from website`;

      const formData = { ...values, access_key: "2a22a635-d6bf-401b-ac51-bf36d5ec10fe", subject };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Form submitted successfully!");
        resetForm();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };


  return (
    <div>
      <Banner
        title="Contact Us"
        breadcrumb1="Home"
        breadcrumb2="Contact"
        image="/img1.jpg"
      />
      <div className="container-section">
        <SectionHeader
          title={"Get in touch"}
          text={"We're ready to help you!"}
        />
        <div className="max-w-3xl ml-auto">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="flex mb-4 space-x-4">
                  <div className="w-full">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-300"
                    >
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      className="w-full p-3 mt-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-gray-700 text-white"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      className="w-full p-3 mt-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-gray-700 text-white"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full p-3 mt-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-gray-700 text-white"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message here"
                    className="w-full p-3 mt-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-gray-700 text-white"
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full p-3 bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 text-white rounded-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-indigo-700"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
