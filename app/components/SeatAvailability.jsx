// components/SeatAvailability.jsx

"use client";

import { Progress } from "antd";
import { Users, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { seatAvailability } from "../assets/data/libraryData";
import AnimatedSection from "./AnimatedSection";
import { fadeUp } from "../lib/animations";

const SeatAvailability = () => {
    const { totalSeats, availableSeats, occupiedSeats } = seatAvailability;

    const occupancyPercentage = Math.round(
        (occupiedSeats / totalSeats) * 100
    );

    return (
        <AnimatedSection
            className="py-20"
            variants={fadeUp}
        >
            <div id="availability" className="container mx-auto px-4">
                <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
                    <div className="mb-10 text-center">
                        <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                            Live Seat Availability
                        </span>

                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                            Available Seats Status
                        </h2>

                        <p className="mt-3 text-slate-600 dark:text-slate-400">
                            Real-time occupancy overview of the study room.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "Available Seats",
                                value: availableSeats,
                                icon: UserCheck,
                                color:
                                    "from-emerald-500 to-green-600",
                            },
                            {
                                title: "Occupied Seats",
                                value: occupiedSeats,
                                icon: Users,
                                color:
                                    "from-orange-500 to-red-500",
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    whileHover={{ x: 5 }}
                                    className="rounded-2xl border border-slate-200 bg-zinc-200/10 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-slate-500">
                                                {item.title}
                                            </p>

                                            <h3 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
                                                {item.value}
                                            </h3>
                                        </div>

                                        <div
                                            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r ${item.color}`}
                                        >
                                            <Icon
                                                size={26}
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mt-10">
                        <div className="mb-4 flex items-center justify-between">
                            <h4 className="font-semibold text-slate-900 dark:text-white">
                                Occupancy Rate
                            </h4>

                            <span className="font-bold text-blue-600">
                                {occupancyPercentage}%
                            </span>
                        </div>

                        <Progress
                            percent={occupancyPercentage}
                            showInfo={false}
                            strokeColor={{
                                "0%": "#2563EB",
                                "100%": "#06B6D4",
                            }}
                            railColor="#E2E8F0"
                            size={12}
                        />

                        <div className="mt-4 flex justify-between text-sm text-slate-500 dark:text-slate-400">
                            <span>{availableSeats} Available</span>
                            <span>{occupiedSeats} Occupied</span>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default SeatAvailability;
