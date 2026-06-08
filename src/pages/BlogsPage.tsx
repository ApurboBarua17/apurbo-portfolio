import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ScrollAnimation, StaggerAnimation } from '../components/ScrollAnimation';

const blogPosts = [
  {
    id: 101,
    title: "Key West, Florida",
    excerpt: "Closed out the spring with a sun-soaked trip to Key West. Watched sunsets at Mallory Square, kayaked through mangroves, and ate way too much conch — the perfect post-grad reset before the next chapter.",
    date: "2026-05-28",
    tags: ["Travel", "Florida", "Post-Grad"],
    imageUrl: "/apurbo-portfolio/key_west_florida.jpg"
  },
  {
    id: 102,
    title: "MoMA Art Gallery, New York",
    excerpt: "Spent an afternoon at the Museum of Modern Art on day two in NYC. Picasso, Warhol, and Van Gogh's Starry Night in person — a slower, quieter end to a high-energy trip.",
    date: "2026-05-21",
    tags: ["Travel", "Art", "New York"],
    imageUrl: "/apurbo-portfolio/moma_art_gallery_nyc.jpg"
  },
  {
    id: 103,
    title: "Wandering MoMA, NYC",
    excerpt: "Another shot from MoMA — the building itself is a piece of art. Wandered between floors taking in modern installations and rotating exhibits before heading back uptown.",
    date: "2026-05-21",
    tags: ["Travel", "New York", "Museum"],
    imageUrl: "/apurbo-portfolio/moma_nyc.jpg"
  },
  {
    id: 104,
    title: "Times Square, New York City",
    excerpt: "First night in NYC and Times Square delivered — billboards stacked on billboards, traffic that never stops, and the kind of energy you can only feel standing in the middle of it. Pure sensory overload in the best way.",
    date: "2026-05-20",
    tags: ["Travel", "New York", "Adventure"],
    imageUrl: "/apurbo-portfolio/times_square_nyc.jpg"
  },
  {
    id: 105,
    title: "Brooklyn Bridge Walk",
    excerpt: "Walked the Brooklyn Bridge at golden hour with the Manhattan skyline glowing behind us. One of those moments where the city actually slows down for a second — easily a highlight of the New York trip.",
    date: "2026-05-20",
    tags: ["Travel", "New York", "Photography"],
    imageUrl: "/apurbo-portfolio/brooklyn_bridge_nyc.jpg"
  },
  {
    id: 106,
    title: "Grand Canyon Road Trip",
    excerpt: "Stood at the South Rim and just stared. Photos do not do this place justice — the scale of it is humbling. A perfect detour to round out a weekend of Arizona exploration.",
    date: "2026-05-17",
    tags: ["Travel", "Arizona", "Nature"],
    imageUrl: "/apurbo-portfolio/grand_canyon.jpg"
  },
  {
    id: 107,
    title: "Weekend in Sedona",
    excerpt: "Spent a weekend chasing red rocks in Sedona. Hiked Cathedral Rock at sunrise, stopped at every roadside vista, and ended the day at a small cafe in town. Arizona has no shortage of postcard moments.",
    date: "2026-05-17",
    tags: ["Travel", "Arizona", "Hiking"],
    imageUrl: "/apurbo-portfolio/sedona.jpg"
  },
  {
    id: 108,
    title: "Commencement Day with Friends",
    excerpt: "Crossed the stage and celebrated with the people who got me here. Caps in the air, group photos until our cheeks hurt — a wrap on four unforgettable years at the U of A.",
    date: "2026-05-15",
    tags: ["Graduation", "Friends", "Milestone"],
    imageUrl: "/apurbo-portfolio/grad_commencement_friends.jpg"
  },
  {
    id: 109,
    title: "Graduation Day in Front of Old Main",
    excerpt: "The traditional Old Main shot. Standing in front of the building that has watched generations of Wildcats walk by — a small but meaningful moment to mark the end of my undergrad journey.",
    date: "2026-05-15",
    tags: ["Graduation", "University of Arizona", "Milestone"],
    imageUrl: "/apurbo-portfolio/grad_old_main.jpg"
  },
  {
    id: 110,
    title: "Beaches of San Diego",
    excerpt: "Caught a quiet morning at one of San Diego's beaches before the crowds arrived. Cool Pacific breeze, soft sand, and a long walk along the shoreline — exactly the recharge I needed mid-semester.",
    date: "2026-03-15",
    tags: ["Travel", "Beach", "California"],
    imageUrl: "/apurbo-portfolio/san_diego_beach.jpg"
  },
  {
    id: 111,
    title: "San Diego Trip with Friends",
    excerpt: "Drove out to San Diego with friends for a spring break getaway. Tacos, beach days, the USS Midway, and a lot of laughs — a much-needed break from coursework and a chance to make some great memories.",
    date: "2026-03-14",
    tags: ["Travel", "Friends", "California"],
    imageUrl: "/apurbo-portfolio/san_diego_friends.jpg"
  },
  {
    id: 112,
    title: "Trip to Chittagong, Bangladesh",
    excerpt: "Spent New Year's Day at Chittagong Naval — quiet sea, family time, and a much-needed reconnection with home. A grounding way to open 2026 before flying back for the spring semester.",
    date: "2026-01-01",
    tags: ["Travel", "Family", "Bangladesh"],
    imageUrl: "/apurbo-portfolio/bangladesh_chittagong.jpg"
  },
  {
    id: 113,
    title: "Last UA Home Football Game as a Senior",
    excerpt: "Made it to the last home game of the season as a senior — the band, the cardinal-and-navy crowd, and one final 'Bear Down' chant from the student section. A bittersweet send-off to four years at Arizona Stadium.",
    date: "2025-11-15",
    tags: ["University of Arizona", "Sports", "Senior Year"],
    imageUrl: "/apurbo-portfolio/last_ua_home_game.jpg"
  },
  {
    id: 114,
    title: "Friend's Birthday Dinner in Tucson",
    excerpt: "Met up with friends downtown for a birthday dinner — good food, great company, and the kind of laughter that makes a Tuesday feel like a weekend. Small moments like these are what college is really about.",
    date: "2025-08-15",
    tags: ["Friends", "Tucson", "Celebration"],
    imageUrl: "/apurbo-portfolio/friends_bday_tucson.jpg"
  },
  {
    id: 1,
    title: "Welcoming Our New RA Staff for Fall 2025",
    excerpt: "Starting the new academic year with our incoming RA staff for Fall 2025. Looking forward to working with this dedicated team to support our Apache Santa Cruz residents.",
    date: "2025-08-22",
    tags: ["Leadership", "ResLife", "Community"],
    imageUrl: "/apurbo-portfolio/RAStaff2025.JPG"
  },
  {
    id: 2,
    title: "Introduction as Apache Santa Cruz RA",
    excerpt: "Beginning my role as Resident Assistant for the 2025-2026 academic year at Apache Santa Cruz. Ready to support residents and build a positive community environment.",
    date: "2025-08-19",
    tags: ["RA", "ResLife", "Community"],
    imageUrl: "/apurbo-portfolio/RAintroduction.PNG"
  },
  {
    id: 3,
    title: "Final Wing Meeting of the Academic Year",
    excerpt: "Wrapping up the academic year with our final wing meeting. Reflecting on the community we built and wishing our residents success in their future endeavors.",
    date: "2025-05-09",
    tags: ["ResLife", "Community", "Reflection"],
    imageUrl: "/apurbo-portfolio/last_wing_meeting.JPG"
  },
  {
    id: 4,
    title: "Delta Chi 100 Year Anniversary Celebration",
    excerpt: "Attending the Delta Chi centennial banquet celebrating 100 years of brotherhood. Connected with alumni and reflected on our fraternity's history and impact.",
    date: "2025-05-03",
    tags: ["Delta Chi", "Fraternity", "Milestone"],
    imageUrl: "/apurbo-portfolio/rechartering.jpg"
  },
  {
    id: 5,
    title: "RA Staff of the Year Recognition",
    excerpt: "Our RA staff received the Staff of the Year award at the annual RA banquet. Proud to be part of a team recognized for dedication to resident support.",
    date: "2025-04-15",
    tags: ["Achievement", "ResLife", "Recognition"],
    imageUrl: "/apurbo-portfolio/RAbanquetBestStaff.jpg"
  },
  {
    id: 6,
    title: "Spring Scholarship Dinner at Red Lobster",
    excerpt: "Organized our spring scholarship dinner recognizing Delta Chi brothers who made Dean's List. Celebrating academic achievement with dinner at Red Lobster.",
    date: "2025-03-20",
    tags: ["Delta Chi", "Academics", "Achievement"],
    imageUrl: "/apurbo-portfolio/Spring2025AcademicBanquet.JPG"
  },
  {
    id: 7,
    title: "Microsoft Software Engineer Shadowing Experience",
    excerpt: "Completed a software engineer shadowing program at Microsoft in February. Gained valuable insights into the tech industry and software development practices.",
    date: "2025-02-15",
    tags: ["Career", "Technology", "Microsoft"],
    imageUrl: "/apurbo-portfolio/MicrosoftShadow.jpg"
  },
  {
    id: 8,
    title: "Fall Scholarship Dinner at Outback Steakhouse",
    excerpt: "Hosted our fall semester scholarship dinner at Outback Steakhouse to recognize brothers who achieved Dean's List status during the semester.",
    date: "2024-11-10",
    tags: ["Delta Chi", "Academics", "Celebration"],
    imageUrl: "/apurbo-portfolio/Fall2024AcademicBanquet.JPG"
  },
  {
    id: 9,
    title: "Summer in Bangladesh 2024",
    excerpt: "Spent the summer of 2024 visiting family in Bangladesh. Reconnected with my roots, explored cultural heritage, and experienced the vibrant life of Dhaka and surrounding areas.",
    date: "2024-07-15",
    tags: ["Travel", "Culture", "Family"],
    imageUrl: "/apurbo-portfolio/Summer24Bangladesh.jpg"
  },
  {
    id: 10,
    title: "Fall RA Staff Orientation",
    excerpt: "Started the Fall 2024 semester with RA staff orientation and team building. Preparing to support Apache Santa Cruz residents for the upcoming academic year.",
    date: "2024-08-25",
    tags: ["ResLife", "Leadership", "TeamBuilding"],
    imageUrl: "/apurbo-portfolio/RA2024.JPG"
  },
  {
    id: 11,
    title: "Delta Chi Chapter Rechartering",
    excerpt: "Participated in our Delta Chi chapter rechartering ceremony. A significant milestone for our chapter as we continue our fraternity's mission and values.",
    date: "2024-05-15",
    tags: ["Delta Chi", "Milestone", "Brotherhood"],
    imageUrl: "/apurbo-portfolio/rechartering.jpg"
  },
  {
    id: 12,
    title: "Spring Scholarship Dinner at Mr. Ann's",
    excerpt: "Organized our spring scholarship dinner at Mr. Ann's restaurant to recognize Delta Chi brothers who achieved Dean's List honors during the semester.",
    date: "2024-04-10",
    tags: ["Delta Chi", "Academics", "Leadership"],
    imageUrl: "/apurbo-portfolio/Spring2024Banquet.png"
  },
  {
    id: 13,
    title: "Delta Chi Initiation Experience",
    excerpt: "Completed my initiation into Delta Chi fraternity in November 2023. Officially became a brother and began my journey with the chapter.",
    date: "2023-11-15",
    tags: ["Delta Chi", "Brotherhood", "Personal"],
    imageUrl: "/apurbo-portfolio/BecomingMember.jpg"
  },
  {
    id: 14,
    title: "San Francisco Spring Break Trip",
    excerpt: "Visited San Francisco during spring break 2023 with friends. Explored the Golden Gate Bridge, Fisherman's Wharf, and various neighborhoods throughout the city.",
    date: "2023-03-15",
    tags: ["Travel", "Friends", "Adventure"],
    imageUrl: "/apurbo-portfolio/SanFransisco.png"
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
                        objectPosition:
                          post.id === 1 ? '30% center' :
                          post.id === 2 ? '80% 75%' :
                          (post.id === 10 || post.id === 113 || post.id === 114) ? '50% center' :
                          '5% center'
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