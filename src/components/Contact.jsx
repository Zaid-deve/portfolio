import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Validator from "../utils/Validator";
import { Link } from "react-router-dom";

export default function Contact() {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: "", email: "", description: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {
            name: Validator.validateName(formData.name),
            email: Validator.validateEmail(formData.email),
            description: Validator.validateDescription(formData.description),
        };

        setErrors(newErrors);

        if (!newErrors.name && !newErrors.email && !newErrors.description) {
            setIsSubmitting(true);

            emailjs
                .sendForm("service_7xrp9mk", 'template_939uwjo', formRef.current, {
                    publicKey: 'JxFM-qWLdDcTWLZTM'
                })
                .then(() => {
                    alert("Email sent successfully!");
                    setFormData({ name: "", email: "", description: "" });
                    setIsSubmitting(false);
                })
                .catch((err) => {
                    console.log(err)
                    alert("Failed to send email. Try again.");
                    setIsSubmitting(false);
                });
        }
    };

    return (
        <div className="container h-full p-6 mx-auto overflow-auto">
            <div className="mx-auto max-w-[1120px] w-full bg-glass md:p-16 p-4 flex gap-x-20 gap-y-6 lg:flex-row flex-col rounded-2xl">
                <form ref={formRef} onSubmit={handleSubmit} className="flex-grow-1">
                    <div className="flex flex-wrap items-center w-full relative">
                        <div className="md:min-w-[420px] w-full">
                            <h1 className="text-3xl font-bold">Contact Me</h1>
                            <p className="text-gray-300 mt-1 text-sm">Hire me, to make, manage and upgrade your website.</p>
                            <div className="my-4">
                                <hr />
                            </div>
                            <div className="my-4 flex flex-col gap-5">
                                <div className="flex flex-col gap-2 relative">
                                    <label htmlFor="name">Your Name</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className={`bg-glass text-yellow-100 px-6 py-3 rounded text-md outline-0 w-full pl-12 ${errors.name ? "border-red-500" : ""}`}
                                            placeholder="Enter Your Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        <i className="fa fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-100"></i>
                                    </div>
                                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                                </div>

                                <div className="flex flex-col gap-2 relative">
                                    <label htmlFor="email">Email Address</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            className={`bg-glass text-yellow-100 px-6 py-3 rounded text-md outline-0 w-full pl-12 ${errors.email ? "border-red-500" : ""}`}
                                            placeholder="Enter Your Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <i className="fa fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-100"></i>
                                    </div>
                                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                                </div>

                                <div className="flex flex-col gap-2 relative">
                                    <label htmlFor="description">Description</label>
                                    <div className="relative">
                                        <textarea
                                            id="description"
                                            name="message"
                                            className={`bg-glass text-yellow-100 px-6 py-3 rounded text-md outline-0 w-full pl-12 ${errors.description ? "border-red-500" : ""}`}
                                            placeholder="Enter Detailed Description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            style={{resize:'none'}}
                                        ></textarea>
                                        <i className="fa fa-comment absolute left-4 top-4 text-yellow-100"></i>
                                    </div>
                                    {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
                                    <div className="text-xs font-bold text-right">{formData.description.length}/1000</div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`shrink-0 relative bg-glass py-3 p-5 rounded-full font-semibold cursor-pointer flex items-center justify-center ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    {!isSubmitting ? (
                                        <>
                                            <i className="fa fa-paper-plane text-white"></i>
                                            <div className="ml-4">Submit Contact Form</div>
                                        </>
                                    ) : (
                                        <div className="animate-spin w-10 h-10 border-2 border-yellow-500 border-t-transparent rounded-full"></div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="flex-grow-1 shrink-0">
                    <Link  to="mailto:patelzaid721@gmail.com" className="bg-glass p-3 w-full flex items-center gap-4 flex-wrap justify-center text-center">
                        <div className="star-twelve h-12 w-12 flex items-center justify-center shrink-0">
                            <i className="fa fa-envelope text-yellow-100"></i>
                        </div>
                        <span className="font-semibold grow-1">patelzaid721@gmail.com</span>
                    </Link>
                    <Link to="tel:patelzaid721@gmail.com" className="bg-glass p-3 w-full flex items-center gap-4 mt-4 flex-wrap justify-center text-center">
                        <div className="star-twelve h-12 w-12 flex items-center justify-center shrink-0">
                            <i className="fa fa-phone text-yellow-100"></i>
                        </div>
                        <span className="font-semibold grow-1">7990225947</span>
                    </Link>
                    <Link to="https://maps.app.goo.gl/xwit1JQ8PV9b8zKu8" target="_blank" className="bg-glass p-3 w-full flex items-center gap-4 mt-4 flex-wrap justify-center text-center">
                        <div className="star-twelve h-12 w-12 flex items-center justify-center shrink-0">
                            <i className="fa fa-location-arrow text-yellow-100"></i>
                        </div>
                        <span className="font-semibold grow-1">India, Gujarat, Bharuch 392001</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
