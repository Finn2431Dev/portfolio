import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Clock, Zap } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleContactClick = (method: string) => {
    toast.success(`Opening ${method}...`, {
      description: "I typically respond within 24 hours!"
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to elevate your Roblox game? Get in touch and let's discuss your project.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Discord */}
            <div 
              className="glass p-8 rounded-xl text-center hover:border-primary/50 transition-all duration-300 cursor-pointer group"
              onClick={() => handleContactClick("Discord")}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Discord</h3>
              <p className="text-muted-foreground mb-4">Fastest response time</p>
              <p className="text-primary font-mono">scripter#0001</p>
            </div>

            {/* Email */}
            <div 
              className="glass p-8 rounded-xl text-center hover:border-secondary/50 transition-all duration-300 cursor-pointer group"
              onClick={() => handleContactClick("Email")}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">For detailed inquiries</p>
              <p className="text-secondary font-mono">hire@robloxscripter.dev</p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <div className="glass p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Response Time</h4>
                <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
              </div>
            </div>
            <div className="glass p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold">Free Consultation</h4>
                <p className="text-sm text-muted-foreground">Discuss your project at no cost</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Include details about your project scope, timeline, and budget for the fastest quote.
            </p>
            <Button variant="hero" size="xl" onClick={() => handleContactClick("Discord")}>
              <MessageSquare className="w-5 h-5" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
