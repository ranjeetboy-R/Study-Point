import { adminStore } from '@/app/store/adminStore';
import { authStore } from '@/app/store/authStore';
import { Form, Input, InputNumber, Modal } from 'antd'
import { useEffect } from 'react';

const AddStudentModal = ({ setOpenModal, openModal, setLiveUpdate, liveUpdate, selectedStudent = null, setselectedStudent }) => {
    const [form] = Form.useForm();
    const { auth } = authStore();
    const { profileUpdate } = adminStore();

    const createNewStudent = async (values) => {
        const res = await auth(values, 'signup');

        if (res?.success) {
            handleCancel();
            setLiveUpdate(!liveUpdate);
        }
    }

    const updateStudent = async (values) => {
        const data = {
            ...values,
            role: 'student',
            studentId: selectedStudent?.studentId
        }
        const res = await profileUpdate(data);

        if (res?.success) {
            handleCancel();
            setLiveUpdate(!liveUpdate);
        }
    }

    const handleCancel = () => {
        setOpenModal(false);
        form.resetFields();
        setselectedStudent(null);
    }

    useEffect(() => {
        if (selectedStudent) {
            form.setFieldsValue(selectedStudent);
        }
    }, [selectedStudent])

    const values = Form.useWatch([], form);

    const initialValue = {
        name: selectedStudent?.name,
        phone: selectedStudent?.phone,
        state: selectedStudent?.state,
        village: selectedStudent?.village,
        district: selectedStudent?.district,
        monthlyFee: selectedStudent?.monthlyFee,
    }

    const isChanges = JSON.stringify(initialValue) !== JSON.stringify(values);

    return (
        <div>
            <Modal
                onOk={form.submit}
                onCancel={handleCancel}
                okText={selectedStudent ? "Update student" : "Create Student"}
                okButtonProps={{ size: 'large', disabled: !isChanges }}
                cancelButtonProps={{ size: 'large' }}
                open={openModal}
                title={selectedStudent ? "Update student" : "Add new student"}
                centered
                className='w-3xl!'
                mask={{ closable: false }}
            >
                <Form onFinish={selectedStudent ? updateStudent : createNewStudent} form={form} layout='vertical' className='mt-5!'>

                    <div className={`${!selectedStudent && 'grid md:grid-cols-2 grid-cols-1 space-x-5!'}`}>
                        <Form.Item label="Name" name='name' rules={[{ required: true }]}>
                            <Input size='large' placeholder='Enter your name' className='rounded-lg! w-full!' />
                        </Form.Item>

                        {
                            !selectedStudent &&
                            <Form.Item label="Password" name='password' rules={[{ required: true }]}>
                                <Input size='large' placeholder='Create new password' className='rounded-lg! w-full!' />
                            </Form.Item>
                        }
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 space-x-5!">
                        <Form.Item label="Phone" name='phone' rules={[{ required: true }]}>
                            <Input size='large' placeholder='Enter your phone' className='rounded-lg! w-full!' />
                        </Form.Item>

                        <Form.Item label="State" name='state' rules={[{ required: true }]}>
                            <Input size='large' placeholder='Enter your state' className='rounded-lg! w-full!' />
                        </Form.Item>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 space-x-5!">
                        <Form.Item label="Village" name='village' rules={[{ required: true }]}>
                            <Input size='large' placeholder='Enter your village' className='rounded-lg! w-full!' />
                        </Form.Item>

                        <Form.Item label="District" name='district' rules={[{ required: true }]}>
                            <Input size='large' placeholder='Enter your district' className='rounded-lg! w-full!' />
                        </Form.Item>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 space-x-5!">
                        <Form.Item label="Monthly Fee" name='monthlyFee' rules={[{ required: true }]}>
                            <InputNumber size='large' placeholder='Enter your monthly fee' className='rounded-lg! w-full!' />
                        </Form.Item>
                    </div>

                </Form>
            </Modal>
        </div>
    )
}

export default AddStudentModal