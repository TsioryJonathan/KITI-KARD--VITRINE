import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactOptions() {
  return (
    <section className="py-16 md:py-24">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-0 bg-muted/30">
            <CardContent className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-text" />
              </div>
              <h3 className="text-xl font-bold">Email Us</h3>
              <p className="mt-2 text-muted-foreground">
                For general inquiries and support
              </p>
              <a
                href="mailto:info@nfccarte.com"
                className="mt-4 text-text hover:underline"
              >
                info@nfccarte.com
              </a>
            </CardContent>
          </Card>
          <Card className="border-0 bg-muted/30">
            <CardContent className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-8 w-8 text-text" />
              </div>
              <h3 className="text-xl font-bold">Call Us</h3>
              <p className="mt-2 text-muted-foreground">Mon-Fri, 9am-5pm EST</p>
              <a
                href="tel:+1-555-123-4567"
                className="mt-4 text-text hover:underline"
              >
                +1 (555) 123-4567
              </a>
            </CardContent>
          </Card>
          <Card className="border-0 bg-muted/30">
            <CardContent className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-8 w-8 text-text" />
              </div>
              <h3 className="text-xl font-bold">Visit Us</h3>
              <p className="mt-2 text-muted-foreground">Our headquarters</p>
              <address className="mt-4 not-italic text-text">
                123 Tech Plaza, Suite 400
                <br />
                San Francisco, CA 94105
              </address>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
