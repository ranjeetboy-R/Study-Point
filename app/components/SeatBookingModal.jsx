// components/SeatBookingModal.jsx

"use client";

import { useState } from "react";
import { Modal, Form, Input, Select, Button } from "antd";
import { MessageCircle } from "lucide-react";
import { pricingPlans, contactInfo } from "../assets/data/libraryData";

const SeatBookingModal = ({ open, onClose }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);

        console.log("Booking Data:", values);

        setTimeout(() => {
            setLoading(false);
            form.resetFields();
            onClose?.();
        }, 1000);
    };

    const handleWhatsappBooking = () => {
        const values = form.getFieldsValue();

        const message = `Hello, I want to book a study seat.

        Name: ${values?.name || ""}
        Phone: ${values?.phone || ""}
        Plan: ${values?.plan || ""}`;

        window.open(
            `https://wa.me/${contactInfo.whatsapp.replace(
                /\D/g,
                ""
            )}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <Modal
            open={open}
            footer={null}
            centered
            destroyOnHidden
            onCancel={onClose}
            title="Book Your Study Seat"
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="mt-4"
            >
                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your name",
                        },
                    ]}
                >
                    <Input size="large" placeholder="Enter your name" />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: "Please enter phone number",
                        },
                    ]}
                >
                    <Input size="large" placeholder="Enter phone number" />
                </Form.Item>

                <Form.Item
                    label="Select Plan"
                    name="plan"
                    rules={[
                        {
                            required: true,
                            message: "Please select a plan",
                        },
                    ]}
                >
                    <Select
                        size="large"
                        placeholder="Choose a plan"
                        options={pricingPlans.map(({ name }) => ({
                            label: name,
                            value: name,
                        }))}
                    />
                </Form.Item>

                <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                        htmlType="submit"
                        loading={loading}
                        size="large"
                        type="primary"
                        className="flex-1 py-3!"
                    >
                        Book Now
                    </Button>

                    <Button
                        size="large"
                        icon={<MessageCircle size={16} />}
                        onClick={handleWhatsappBooking}
                        className="flex-1 py-3!"
                    >
                        WhatsApp Booking
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default SeatBookingModal;