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
  className="py-6"
>
  <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row gap-[30px]">
    <div className="xl:h-[54%] order-2 xl:order-none"><form className="flex flex-col gap-4 p-10 bg-[#27272c] rounded-xl">
      <h3 className="text-4xl text-accent">Let,s work together</h3>
      <p className="text-white/60">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni deleniti harum consequuntur saepe iure.</p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Input type="firstName" placeholder="First Name" />
        <Input type="lastName" placeholder="Last Name" />
        <Input type="email" placeholder="Email Address" />
        <Input type="phone" placeholder="Phone Number" />
      </div>
      <Select>
        <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a services"/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a services</SelectLabel>
            <SelectItem value="est" >Web Development</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/*  */}
      <Textarea className="h-[200px]" placeholder="Type your message here." />
      {/* btn */}
      <Button size="md" className="max-w-40">Send message</Button>
      </form></div>
    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">Info</div>
    </div>
  </div>
</motion.div>)
};

export default Contact;
