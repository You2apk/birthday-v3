"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                       Happy Birthday & Happy New Year ✨
Aaj ka din tumhari khushi ka hai, aur dil se chahta hoon ke tum muskurao.
Agar mujh se kisi baat pe dukh hua ho ya main tumhari feelings samajh nahi paaya, to uske liye genuinely sorry. Mera irada kabhi bhi tumhein hurt karna nahi tha.

Tum bohot special ho — tumhari muskurahat, tumhari simplicity aur tumhara kind heart.
Chahta hoon ke yeh naya saal tumhari life mein sukoon, khushiyan aur nayi beginnings le kar aaye.
Aaj ke din bas itna chahunga ke jo bhi gila hai, wo thora halka ho jaye.

Jab tum ready ho, baat karna acha lagega.
                        Take care, and may your day be as beautiful as your smile 💗
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
