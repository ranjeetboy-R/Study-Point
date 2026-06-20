import { create } from "zustand";
import { fetcher } from "../lib/fetcher";
import toast from "react-hot-toast";

export const authStore = create(
    (set) => ({
        profile: null,
        loading: '',

        auth: async (data, state) => {
            try {
                set({ loading: true });
                let res = null;

                if (state === 'signup') {
                    const response = await fetcher('/signup', {
                        method: 'POST',
                        body: data
                    })
                    res = response;
                }

                if (state === 'login') {
                    const response = await fetcher('/login', {
                        method: 'POST',
                        body: data
                    })
                    res = response;
                }

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
                set({ loading: false });
            }
        },

        getProfile: async () => {
            try {
                set({ loading: true });
                const res = await fetcher('/profile')

                if (res?.success) {
                    set({profile: res.profile});
                }

            } catch (error) {
            }
            finally {
                set({ loading: false });
            }
        },

        logout: async ()=> {
            try {
                const res = await fetcher('/logout', {
                    method: 'POST'
                })

                if (res?.success) {
                    set({profile: null});
                    return {success: true};
                }

            } catch (error) {
            }
        }
    })
)