import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const blogPosts = [
  {
    title: "My Journey to IBM Generative AI Certification",
    excerpt: "Exploring the world of generative AI through IBM's comprehensive certification program, including hands-on projects with LangChain and PyTorch.",
    category: "Certification",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop",
    tags: ["AI", "IBM", "Certification", "LangChain"],
    featured: true
  },
  {
    title: "Building My First RAG Chatbot: Lessons Learned",
    excerpt: "A deep dive into creating an end-to-end NLP pipeline for document ingestion and semantic search, including challenges and solutions.",
    category: "Project",
    date: "2024-11-20",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1676277791608-ac54c4cd4aa5?w=400&h=240&fit=crop",
    tags: ["Python", "NLP", "RAG", "Chatbot"]
  },
  {
    title: "Hackathon Chronicles: Food Rescue Campus Connect",
    excerpt: "How our team built a platform to reduce food waste on campus during a 48-hour hackathon, using TypeScript and Firebase.",
    category: "Hackathon",
    date: "2024-10-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=240&fit=crop",
    tags: ["Hackathon", "TypeScript", "Firebase", "Social Impact"]
  },
  {
    title: "Data Visualization: Uncovering Arrest Pattern Trends",
    excerpt: "Using Python and machine learning to analyze socioeconomic factors in arrest patterns, with interactive visualizations.",
    category: "Data Science",
    date: "2024-09-12",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
    tags: ["Python", "Data Science", "Machine Learning", "Visualization"]
  },
  {
    title: "Teaching CS: Reflections from Being a TA",
    excerpt: "Insights and experiences from mentoring 300+ students in computer science, including strategies that reduced failure rates.",
    category: "Education",
    date: "2024-08-18",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=240&fit=crop",
    tags: ["Teaching", "Computer Science", "Education", "Mentoring"]
  },
  {
    title: "From Algorithms to Applications: Sort Visualizer Journey",
    excerpt: "Creating an interactive educational tool to help students understand sorting algorithms through visual animations.",
    category: "Project",
    date: "2024-07-25",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=240&fit=crop",
    tags: ["Python", "Pygame", "Algorithms", "Education"]
  }
];

export function BlogsSection() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Blogs & Reflections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing my journey through projects, hackathons, certifications, and learning experiences in tech.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full relative overflow-hidden">
                    <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <CardHeader className="p-0 space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <Badge variant="outline" className="border-blue-300 text-blue-700">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(featuredPost.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-gray-900 leading-tight">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base leading-relaxed">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mt-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Read Full Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full overflow-hidden bg-white hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-white/90 border-gray-300">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full justify-between text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                    Read More
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View All Blog Posts
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}