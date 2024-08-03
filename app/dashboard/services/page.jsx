"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

const services = [
  {
    title: <Input name="title" className="w-full" type="text" placeholder="Type your services title" />,
    description: <Textarea name="text" className="h-[200px] my-4" placeholder="Type your message here." />

  }
]

const ServiceInput = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-3xl font-semibold text-white/80 my-8">Services</h2>
      <form onSubmit={handleSubmit}>
      {services.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <h2>{item.input}</h2>
            {item.description}
          </div>
        ))}
        <Button size="md" type="submit" className="max-w-40">Submit</Button>
      </form>
    </div>
  )
}

export default ServiceInput
