"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

const work = [
  {
    title: <Input name="title" className="w-full my-4" type="text" placeholder="Type your project title" />,
    technology: <Input name="technology" className="w-full my-4" type="text" placeholder="Type project use Technology" />,
    live: <Input name="live" className="w-full my-4" type="text" placeholder="Type project Live Link" />,
    github: <Input name="github" className="w-full my-4" type="text" placeholder="Type project Github Link" />,
    image: <Input name="image" className="w-full my-4" type="text" placeholder="Type project Image" />,
    description: <Textarea name="text" className="h-[200px] my-4" placeholder="Type your message here." />

  }
]

const WorkInput = () => {

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const title = form.title.value;
  //   const technology = form.technology.value;
  //   const live = form.live.value;
  //   const github = form.github.value;
  //   const image = form.image.value;
  //   const text = form.text.value;
  //   console.log(title, technology,live, github, image, text);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
      {work.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.technology}</p>
            <p>{item.live}</p>
            <p>{item.github}</p>
            <p>{item.image}</p>
            {item.description}
          </div>
        ))}
        <Button size="md" type="submit" className="max-w-40 my-4">Submit</Button>
      </form>
    </div>
  )
}

export default WorkInput