
"use client";

import { Label, Textarea } from "flowbite-react";

export function Component() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
      <button className="p-3 bg-gray-800 mt-5 text-white">Submit</button>
    </div>
  );
}
