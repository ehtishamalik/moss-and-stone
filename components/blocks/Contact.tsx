import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  return (
    <section>
      <div className="px-container">
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr] gap-2.5">
          <div className="bg-card text-card-foreground border p-5">
            <h4 className="mb-10">SEND A MESSAGE</h4>
            <form className="space-y-5">
              <div className="space-y-2.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Bilal Ahmed"
                />
              </div>
              <div className="space-y-2.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="bilal.ahmed@example.com"
                />
              </div>
              <div className="space-y-2.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                />
              </div>
              <Button type="button" className="w-full">
                Submit
              </Button>
            </form>
          </div>
          <div className="space-y-2.5">
            <div className="bg-card text-card-foreground border p-5">
              <h4 className="mb-2.5">CUSTOMER CARE</h4>
              <p className="mb-5">
                For immediate assistance with orders or returns.
              </p>
              <div className="space-y-2.5">
                <p>
                  Email:{" "}
                  <Link
                    href="mailto:care@babatailors.com"
                    className="font-bold! hover:underline underline-offset-2"
                  >
                    care@babatailors.com
                  </Link>
                </p>
                <p>Hours: Monday – Friday, 9am – 6pm</p>
              </div>
            </div>
            <div className="bg-card text-card-foreground border p-5">
              <h4 className="mb-2.5">OUR STUDIO</h4>
              <p className="mb-5">We currently have only one studio</p>
              <p className="font-bold!">
                Jinnah Rd, near Dhullay Chowk, Islam Pura Rehmatpura,
                <br />
                Gujranwala, 52250, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
