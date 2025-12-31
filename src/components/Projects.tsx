import { ExternalLink, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Battle Royale System",
    category: "Combat & Mechanics",
    description: "Complete battle royale framework with dynamic zone mechanics, weapon systems, inventory management, and spectator mode.",
    stats: { players: "15M+", rating: "4.9" },
    tags: ["Combat", "Multiplayer", "UI"],
    gradient: "from-primary to-secondary"
  },
  {
    title: "RPG Progression System",
    category: "Game Systems",
    description: "Deep RPG mechanics including skill trees, quest systems, NPC dialogue, and procedural loot generation.",
    stats: { players: "8M+", rating: "4.8" },
    tags: ["RPG", "DataStore", "Economy"],
    gradient: "from-secondary to-accent"
  },
  {
    title: "Trading Platform",
    category: "Economy & Social",
    description: "Secure player-to-player trading system with scam protection, market listings, and transaction history.",
    stats: { players: "12M+", rating: "5.0" },
    tags: ["Economy", "Security", "UI"],
    gradient: "from-accent to-primary"
  },
  {
    title: "Racing Game Engine",
    category: "Vehicle Physics",
    description: "Custom vehicle physics with drift mechanics, boost systems, and competitive leaderboards.",
    stats: { players: "6M+", rating: "4.7" },
    tags: ["Physics", "Vehicles", "Networking"],
    gradient: "from-primary via-secondary to-accent"
  },
  {
    title: "Tower Defense Framework",
    category: "Strategy",
    description: "Modular tower defense system with wave management, upgrade paths, and cooperative multiplayer.",
    stats: { players: "10M+", rating: "4.9" },
    tags: ["Strategy", "AI", "Multiplayer"],
    gradient: "from-secondary to-primary"
  },
  {
    title: "Admin Dashboard",
    category: "Developer Tools",
    description: "Comprehensive in-game admin panel with player management, analytics, and moderation tools.",
    stats: { players: "N/A", rating: "5.0" },
    tags: ["Tools", "UI", "Security"],
    gradient: "from-accent via-primary to-secondary"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my best work. Each project represents countless hours of dedication and expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-500"
            >
              {/* Project Header with Gradient */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-wider text-white/80">{project.category}</span>
                  <h3 className="font-display text-xl font-bold text-white mt-1">{project.title}</h3>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{project.stats.players}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">{project.stats.rating}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more or discuss a similar project?</p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ExternalLink className="w-4 h-4" />
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
