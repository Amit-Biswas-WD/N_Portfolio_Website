"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

const WorkInput = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const technology = form.technology.value;
    const live = form.live.value;
    const github = form.github.value;
    const image = form.image.value;
    const text = form.text.value;
    console.log(title, technology,live, github, image, text);
  }

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <Input name="title" className="w-full my-4" type="text" placeholder="Type title" />
        <Input name="technology" className="w-full my-4" type="text" placeholder="Type Technology" />
        <Input name="live" className="w-full my-4" type="text" placeholder="Type Live Link" />
        <Input name="github" className="w-full my-4" type="text" placeholder="Type Github Link" />
        <Input name="image" className="w-full my-4" type="text" placeholder="Type Image" />
        <Textarea name="text" className="h-[200px] my-4" placeholder="Type your message here." />
        <Button size="md" type="submit" className="max-w-40 my-4">Submit</Button>
      </form>
    </div>
  )
}

export default WorkInput