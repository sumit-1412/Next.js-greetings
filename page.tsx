"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import the server action from the correct location
import { submitName } from "@/app/actions/submitName";

// Client Component
export default function Home() {
  const [greeting, setGreeting] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement); // Creating FormData from the form element

    // Call the server action with the FormData
    const result = await submitName(formData);

    setGreeting(result);
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <Card className="w-full max-w-md mx-auto mb-8">
        <CardHeader>
          <CardTitle>Greeting App</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
          {greeting && (
            <p className="mt-4 text-center text-lg font-medium">{greeting}</p>
          )}
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="server-actions">
              <AccordionTrigger>Server Actions</AccordionTrigger>
              <AccordionContent>
                Server Actions process the input on the server-side. In this
                app, the submitName function is a server action that takes the
                FormData, extracts the name, and returns a greeting string. This
                allows for secure, server-side processing of user input.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shadcn-ui">
              <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
              <AccordionContent>
                This app uses several Shadcn UI components: Button, Input, Card
                (with CardHeader, CardContent, CardTitle), and Accordion. These
                components provide a consistent, modern look and feel while
                simplifying the development process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nextjs-features">
              <AccordionTrigger>Next.js 15.1 Features</AccordionTrigger>
              <AccordionContent>
                This app leverages key Next.js 15.1 features, including Server
                Actions for form processing, the App Router for simplified
                routing, and improved TypeScript support. The use of server-side
                rendering and client-side interactivity demonstrates the
                framework's hybrid rendering capabilities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
