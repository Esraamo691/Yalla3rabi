import React, { useState } from "react";
import { Form, Input, Textarea, Button } from "@heroui/react";
import { Select, SelectItem } from "@heroui/select";
import emailjs from "emailjs-com";
import { addToast } from "@heroui/react";
export default function Formy() {
  const lessons = [
    { key: "private", label: "Private Classes" },
    { key: "group", label: "Group Courses" },
    { key: "online", label: "Online Classes" },
    { key: "residents", label: "Residents Classes" },
  ];
  const [selectedCourse, setSelectedCourse] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ged5jxm",
        "template_jkrtfua",
        e.target,
        "xr89n1cohEWILGatC"
      )
      .then(
        () => {
          addToast({
            title: "Success",
            description: "Message sent successfully ",
            color: "success",
            variant: "bordered",
            placement: "top-center",
          });
          e.target.reset();
          setSelectedCourse("");
        },
        (err) => {
          console.error(err);
          addToast({
            title: "Error",
            description: "Something went wrong ",
            color: "danger",
            variant: "bordered",
            placement: "top-center",
          });
        }
      );
  };

  return (
    <Form className="w-full flex flex-col gap-4" onSubmit={sendEmail}>
      <Input
        isRequired
        label="Name"
        labelPlacement="outside"
        name="name"
        placeholder="Enter your name"
        variant="bordered"
      />

      <Input
        isRequired
        label="Email"
        labelPlacement="outside"
        name="email"
        type="email"
        placeholder="Enter your email"
        variant="bordered"
      />

      <Input
        isRequired
        label="Country"
        labelPlacement="outside"
        name="country"
        placeholder="Enter your country"
        variant="bordered"
      />

      <Select
        isRequired
        label="Select Your Course"
        name="course_type"
        selectedKeys={selectedCourse ? [selectedCourse] : []}
        onSelectionChange={(keys) =>
          setSelectedCourse(Array.from(keys)[0] || "")
        }
      >
        {lessons.map((lesson) => (
          <SelectItem key={lesson.key} value={lesson.key}>
            {lesson.label}
          </SelectItem>
        ))}
      </Select>

      <Textarea
        isRequired
        label="Message"
        name="message"
        placeholder="Write what you want..."
        variant="bordered"
        classNames={{
          input: "resize-y min-h-[80px]",
        }}
      />

      <div className="w-full text-center">
        <Button
          type="submit"
          color="primary"
          className="mt-4 w-[50%] border-sky-700 hover:bg-sky-700 text-sky-700"
          variant="ghost"
        >
          Send Message
        </Button>
      </div>
    </Form>
  );
}
