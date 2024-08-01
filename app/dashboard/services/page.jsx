"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

const ServiceInput = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const text = form.text.value;
    console.log(title, text);
  }

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <Input name="title" className="w-full" type="text" placeholder="Type title" />
        <Textarea name="text" className="h-[200px] my-4" placeholder="Type your message here." />
        <Button size="md" type="submit" className="max-w-40">Submit</Button>
      </form>
    </div>
  )
}

export default ServiceInput
