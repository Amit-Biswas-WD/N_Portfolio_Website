"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "+88 01883478528",
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: "amitbiswas9282@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: "Address",
    description: "Dhaka, Bangladesh",
  },
]

const Contact = () => {
  return (<motion.div
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
  }}
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
>
  <div>jdfasldjf</div>
</motion.div>)
};

export default Contact;
