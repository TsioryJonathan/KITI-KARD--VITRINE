import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUsSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="px-4 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-2">
          {/* Left: Contact text */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We'd love to hear from you. Whether you have a question about
                our products, pricing, or anything else, our team is ready to
                answer all your questions.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@nfcbizcards.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="flex flex-col space-y-4 rounded-xl bg-muted/50 dark:bg-muted/50 p-6">
            <form className="space-y-4">
              <div className="grid gap-2">
                <Input placeholder="Full Name" required />
              </div>
              <div className="grid gap-2">
                <Input placeholder="Email Address" type="email" required />
              </div>
              <div className="grid gap-2">
                <Input placeholder="Subject" required />
              </div>
              <div className="grid gap-2">
                <Textarea
                  placeholder="Your Message..."
                  className="h-30"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-foreground hover:bg-foreground/90 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center">
              We'll get back to you within 1–2 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
