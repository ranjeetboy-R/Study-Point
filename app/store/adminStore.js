import { create } from "zustand";
import { fetcher } from "../lib/fetcher";
import toast from "react-hot-toast";

export const adminStore = create(
    (set) => ({
        getLoading: false,
        updateLoading: false,

        getAllStudent: async () => {
            try {
                set({ getLoading: true });
                const res = await fetcher('/allStudents')

                if (res?.success) {
                    return res;
                }

                return null;

            } catch (error) {
                return null;
            }
            finally {
                set({ getLoading: false });
            }
        },

        deleteStudent: async (id) => {
            try {
                const res = await fetcher(`/deleteStudent/${id}`, {
                    method: 'DELETE'
                })

                if (res?.success) {
                    toast.success(res.message);
                    return { success: true };
                }

                return false;

            } catch (error) {
                return false;
            }
        },

        profileUpdate: async (data) => {
            try {
                set({ updateLoading: true });
                const res = await fetcher('/update', {
                    method: 'PUT',
                    body: data
                })

                if (res?.success) {
                    toast.success(res.message);
                    return { success: true };
                }

                return { success: false };

            } catch (error) {
                toast.error(error.message);
                return { success: false };
            }
            finally {
                set({ updateLoading: false });
            }
        },
    })
)