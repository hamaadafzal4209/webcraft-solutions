"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function validateForm() {
    const newErrors = {};
    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center mb-12">
      <div
        className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16"
      >
        <Card className="bg-gray-800 shadow-lg border border-gray-700">
          <CardHeader className="text-center p-6">
            <CardTitle className="text-3xl font-bold text-gray-100">
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8 p-6">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 font-semibold mb-2">
                    Name
                  </label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-gray-600 bg-gray-700 text-white focus:border-main-300 focus:ring focus:ring-main-300 rounded-md shadow-sm"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-400 font-semibold mb-2">
                    Email
                  </label>
                  <Input
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-gray-600 bg-gray-700 text-white focus:border-main-300 focus:ring focus:ring-main-300 rounded-md shadow-sm"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-400 font-semibold mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border-gray-600 min-h-32 bg-gray-700 text-white focus:border-main-300 focus:ring focus:ring-main-300 rounded-md shadow-sm"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-main-300 hover:bg-main-400 text-white font-semibold py-2 rounded-md transition duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </Button>
              </form>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-green-500 text-center font-medium"
                >
                  {" Thank you for your message! We'll get back to you soon."}
                </motion.p>
              )}
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-100">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-3 text-gray-400 hover:text-white"
                >
                  <Mail className="w-6 h-6" />
                  <span>contact@digitalagency.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-gray-400 hover:text-white"
                >
                  <Phone className="w-6 h-6" />
                  <span>+1 (555) 123-4567</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-gray-400 hover:text-white"
                >
                  <MapPin className="w-6 h-6" />
                  <span>123 Digital Street, Tech City, 12345</span>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
