import { Code, Gamepad2, Rocket, Shield, Users, Wrench } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Luau Mastery",
    description: "Expert in Roblox's Luau language with deep understanding of optimization and best practices."
  },
  {
    icon: Gamepad2,
    title: "Game Systems",
    description: "Combat systems, inventory management, progression systems, and complex game mechanics."
  },
  {
    icon: Shield,
    title: "Anti-Cheat",
    description: "Robust server-side validation and anti-exploit measures to protect your game."
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimized code that runs smoothly even with thousands of concurrent players."
  },
  {
    icon: Users,
    title: "Multiplayer",
    description: "Seamless networking, data persistence, and real-time multiplayer experiences."
  },
  {
    icon: Wrench,
    title: "Custom Tools",
    description: "Plugin development and custom studio tools to speed up your workflow."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate about creating exceptional gaming experiences through clean, efficient code.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over <span className="text-foreground font-semibold">5 years of dedicated experience</span> in Roblox development, 
              I've helped countless developers and studios bring their game ideas to life. From small indie projects 
              to games with millions of visits, I deliver code that's not just functional—it's exceptional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in creating <span className="text-foreground font-semibold">complex game systems</span> that 
              players love and developers can easily maintain. Whether you need a complete game overhaul, 
              specific features, or optimization work, I bring the same level of dedication and expertise.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines <span className="text-foreground font-semibold">clean architecture</span> with 
              <span className="text-foreground font-semibold"> performance optimization</span>, ensuring your game 
              runs smoothly while remaining easy to update and expand.
            </p>
          </div>

          {/* Code Window Mockup */}
          <div className="glass rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-muted-foreground">GameHandler.lua</span>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
              <code className="text-muted-foreground">
                <span className="text-primary">local</span> GameHandler = {"{}"}{"\n"}
                <span className="text-primary">local</span> Players = game:GetService(<span className="text-accent">"Players"</span>){"\n\n"}
                <span className="text-primary">function</span> <span className="text-secondary">GameHandler.Init</span>(){"\n"}
                {"  "}<span className="text-muted-foreground">-- Initialize game systems</span>{"\n"}
                {"  "}self:SetupCombatSystem(){"\n"}
                {"  "}self:LoadPlayerData(){"\n"}
                {"  "}self:StartGameLoop(){"\n"}
                <span className="text-primary">end</span>{"\n\n"}
                <span className="text-primary">return</span> GameHandler
              </code>
            </pre>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:glow-primary group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
