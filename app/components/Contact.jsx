// components/Contact.jsx

"use client";

import { Form, Input, Select, Button } from "antd";
import {
    Phone,
    Mail,
    MapPin
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { contactInfo, pricingPlans } from "../assets/data/libraryData";
import { FaWhatsapp } from "react-icons/fa";

const contactItems = [
    {
        label: "Phone",
        value: contactInfo.phone,
        icon: Phone,
    },
    {
        label: "WhatsApp",
        value: contactInfo.whatsapp,
        icon: FaWhatsapp,
    },
    {
        label: "Email",
        value: contactInfo.email,
        icon: Mail,
    },
    {
        label: "Address",
        value: contactInfo.address,
        icon: MapPin,
    },
];

const Contact = () => {
    const handleSubmit = (values) => {
        console.log("Inquiry Form:", values);
    };

    return (
        <section
            id="contact"
            className="py-20"
        >
            <div className="container mx-auto px-4">
                <AnimatedSection className="mb-14 text-center">
                    <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                        Contact Us
                    </span>

                    <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                        Book Your Seat Today
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                        Have questions? Contact us or submit an inquiry and
                        we'll get back to you quickly.
                    </p>
                </AnimatedSection>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Contact Info */}
                    <AnimatedSection>
                        <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
                            <h3 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                {contactItems.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.label}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white">
                                                <Icon size={20} />
                                            </div>

                                            <div>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                                    {item.label}
                                                </p>

                                                <p className="font-medium text-slate-900 dark:text-white">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Form */}
                    <AnimatedSection>
                        <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
                            <Form
                                layout="vertical"
                                onFinish={handleSubmit}
                            >
                                <Form.Item
                                    label={<p className="dark:text-slate-200">Name</p>}
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter your name",
                                        },
                                    ]}
                                >
                                    <Input
                                        size="large"
                                        placeholder="Enter your name"
                                        className="bg-transparent dark:bg-black/20! dark:border-slate-600! dark:hover:border-slate-400! dark:text-white! dark:placeholder:text-slate-300/80! rounded-md!"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label={<p className="dark:text-slate-200">Phone</p>}
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter phone number",
                                        },
                                    ]}
                                >
                                    <Input
                                        size="large"
                                        placeholder="Enter phone number"
                                        className="bg-transparent dark:bg-black/20! dark:border-slate-600! dark:hover:border-slate-400! dark:text-white! dark:placeholder:text-slate-300/80! rounded-md!"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label={<p className="dark:text-slate-200">Choose Plan</p>}
                                    name="plan"
                                >
                                    <Select
                                        size="large"
                                        placeholder="Select a plan"
                                        className="bg-transparent dark:bg-black/20! dark:border-slate-600! dark:hover:border-slate-400! dark:text-white! dark:placeholder:text-slate-300/80! rounded-md!"
                                        options={pricingPlans.map((plan) => ({
                                            label: plan.name,
                                            value: plan.name,
                                        }))}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label={<p className="dark:text-slate-200">Message</p>}
                                    name="message"
                                >
                                    <Input.TextArea
                                        rows={4}
                                        placeholder="Write your message..."
                                        className="bg-transparent dark:bg-black/20! dark:border-slate-600! dark:hover:border-slate-400! dark:text-white! dark:placeholder:text-slate-300/80! rounded-md!"
                                    />
                                </Form.Item>

                                <Button
                                    htmlType="submit"
                                    type="primary"
                                    size="large"
                                    block
                                >
                                    Submit Inquiry
                                </Button>
                            </Form>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Google Map */}
                <AnimatedSection className="mt-10">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm dark:border-slate-800">
                        <iframe
                            src={contactInfo.mapEmbed}
                            width="100%"
                            height="400"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border-0"
                        />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Contact;