import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ScrollAnimation, StaggerAnimation } from '../components/ScrollAnimation';

const blogPosts = [
  {
    id: 1,
    title: "Welcoming Our New RA Staff for Fall 2025",
    excerpt: "Starting the new academic year with our incoming RA staff for Fall 2025. Looking forward to working with this dedicated team to support our Apache Santa Cruz residents.",
    date: "2025-08-22",
    tags: ["Leadership", "ResLife", "Community"],
    imageUrl: "/RAStaff2025.JPG"
  },
  {
    id: 2,
    title: "Introduction as Apache Santa Cruz RA",
    excerpt: "Beginning my role as Resident Assistant for the 2025-2026 academic year at Apache Santa Cruz. Ready to support residents and build a positive community environment.",
    date: "2025-08-19",
    tags: ["RA", "ResLife", "Community"],
    imageUrl: "/RAintroduction.PNG"
  },
  {
    id: 3,
    title: "Final Wing Meeting of the Academic Year",
    excerpt: "Wrapping up the academic year with our final wing meeting. Reflecting on the community we built and wishing our residents success in their future endeavors.",
    date: "2025-05-09",
    tags: ["ResLife", "Community", "Reflection"],
    imageUrl: "/last_wing_meeting.JPG"
  },
  {
    id: 4,
    title: "Delta Chi 100 Year Anniversary Celebration",
    excerpt: "Attending the Delta Chi centennial banquet celebrating 100 years of brotherhood. Connected with alumni and reflected on our fraternity's history and impact.",
    date: "2025-05-03",
    tags: ["Delta Chi", "Fraternity", "Milestone"],
    imageUrl: "/rechartering.jpg"
  },
  {
    id: 5,
    title: "RA Staff of the Year Recognition",
    excerpt: "Our RA staff received the Staff of the Year award at the annual RA banquet. Proud to be part of a team recognized for dedication to resident support.",
    date: "2025-04-15",
    tags: ["Achievement", "ResLife", "Recognition"],
    imageUrl: "/RAbanquetBestStaff.jpg"
  },
  {
    id: 6,
    title: "Spring Scholarship Dinner at Red Lobster",
    excerpt: "Organized our spring scholarship dinner recognizing Delta Chi brothers who made Dean's List. Celebrating academic achievement with dinner at Red Lobster.",
    date: "2025-03-20",
    tags: ["Delta Chi", "Academics", "Achievement"],
    imageUrl: "/Spring2025AcademicBanquet.JPG"
  },
  {
    id: 7,
    title: "Microsoft Software Engineer Shadowing Experience",
    excerpt: "Completed a software engineer shadowing program at Microsoft in February. Gained valuable insights into the tech industry and software development practices.",
    date: "2025-02-15",
    tags: ["Career", "Technology", "Microsoft"],
    imageUrl: "/MicrosoftShadow.jpg"
  },
  {
    id: 8,
    title: "Fall Scholarship Dinner at Outback Steakhouse",
    excerpt: "Hosted our fall semester scholarship dinner at Outback Steakhouse to recognize brothers who achieved Dean's List status during the semester.",
    date: "2024-11-10",
    tags: ["Delta Chi", "Academics", "Celebration"],
    imageUrl: "/Fall2024AcademicBanquet.JPG"
  },
  {
    id: 9,
    title: "Summer in Bangladesh 2024",
    excerpt: "Spent the summer of 2024 visiting family in Bangladesh. Reconnected with my roots, explored cultural heritage, and experienced the vibrant life of Dhaka and surrounding areas.",
    date: "2024-07-15",
    tags: ["Travel", "Culture", "Family"],
    imageUrl: "/Summer24Bangladesh.jpg"
  },
  {
    id: 10,
    title: "Fall RA Staff Orientation",
    excerpt: "Started the Fall 2024 semester with RA staff orientation and team building. Preparing to support Apache Santa Cruz residents for the upcoming academic year.",
    date: "2024-08-25",
    tags: ["ResLife", "Leadership", "TeamBuilding"],
    imageUrl: "/RA2024.JPG"
  },
  {
    id: 11,
    title: "Delta Chi Chapter Rechartering",
    excerpt: "Participated in our Delta Chi chapter rechartering ceremony. A significant milestone for our chapter as we continue our fraternity's mission and values.",
    date: "2024-05-15",
    tags: ["Delta Chi", "Milestone", "Brotherhood"],
    imageUrl: "/rechartering.jpg"
  },
  {
    id: 12,
    title: "Spring Scholarship Dinner at Mr. Ann's",
    excerpt: "Organized our spring scholarship dinner at Mr. Ann's restaurant to recognize Delta Chi brothers who achieved Dean's List honors during the semester.",
    date: "2024-04-10",
    tags: ["Delta Chi", "Academics", "Leadership"],
    imageUrl: "/Spring2024Banquet.png"
  },
  {
    id: 13,
    title: "Delta Chi Initiation Experience",
    excerpt: "Completed my initiation into Delta Chi fraternity in November 2023. Officially became a brother and began my journey with the chapter.",
    date: "2023-11-15",
    tags: ["Delta Chi", "Brotherhood", "Personal"],
    imageUrl: "/BecomingMember.jpg"
  },
  {
    id: 14,
    title: "San Francisco Spring Break Trip",
    excerpt: "Visited San Francisco during spring break 2023 with friends. Explored the Golden Gate Bridge, Fisherman's Wharf, and various neighborhoods throughout the city.",
    date: "2023-03-15",
    tags: ["Travel", "Friends", "Adventure"],
    imageUrl: "/SanFransisco.png"
  }
];

export function BlogsPage() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Header Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-background to-red-900/10"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation direction="up" duration={0.8}>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-foreground via-red-400 to-red-600 bg-clip-text text-transparent">
                  My Journal
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sharing my journey in tech, projects, and learning experiences
              </p>
            </div>
          </ScrollAnimation>

          {/* 2-Column Grid Layout with Stagger Animation */}
          <StaggerAnimation staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105">
                  {/* Square Image Section */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-red-500/20 to-purple-500/20">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ 
                        objectPosition: post.id === 2 ? '40% 70%' : '15% center'
                      }}
                      onError={(e) => {
                        // Fallback to emoji if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-emoji')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'absolute inset-0 flex items-center justify-center fallback-emoji';
                          fallback.innerHTML = '<div class="text-8xl text-red-400/30">📝</div>';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-3 py-1 bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-xl leading-tight group-hover:text-red-400 transition-colors duration-300 overflow-hidden" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground leading-relaxed overflow-hidden" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {post.excerpt}
                    </p>

                    {/* Date */}
                    <div className="flex items-center text-sm text-muted-foreground pt-2 border-t border-border/50">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </StaggerAnimation>

          {/* Call to action */}
          <ScrollAnimation direction="scale" delay={0.3}>
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                    More Stories Coming Soon!
                  </span>
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  I'm continuously documenting my journey in software engineering, AI/ML, and tech innovations. 
                  Follow along for insights, tutorials, and behind-the-scenes stories from my projects.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}