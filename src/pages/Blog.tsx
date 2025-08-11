import { Calendar, Clock, Tag, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Generative AI in Web Development',
      excerpt: 'Explore how generative AI is transforming the web development landscape and learn practical ways to integrate AI into your next project.',
      content: 'Full article content would go here...',
      publishedAt: '2024-03-15',
      readTime: '8 min read',
      tags: ['AI', 'Web Development', 'Generative AI', 'Tutorial'],
      category: 'AI & Technology',
      featured: true,
      image: '/api/placeholder/600/300'
    },
    {
      id: 2,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn essential patterns and practices for building React applications that can grow with your business needs.',
      content: 'Full article content would go here...',
      publishedAt: '2024-03-10',
      readTime: '12 min read',
      tags: ['React', 'JavaScript', 'Best Practices', 'Architecture'],
      category: 'Frontend Development',
      featured: true,
      image: '/api/placeholder/600/300'
    },
    {
      id: 3,
      title: 'Django REST API Development: A Complete Guide',
      excerpt: 'A comprehensive guide to building robust RESTful APIs using Django REST Framework with authentication and best practices.',
      content: 'Full article content would go here...',
      publishedAt: '2024-03-05',
      readTime: '15 min read',
      tags: ['Django', 'Python', 'API', 'Backend'],
      category: 'Backend Development',
      featured: false,
      image: '/api/placeholder/600/300'
    },
    {
      id: 4,
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is reshaping the software development process and what it means for developers.',
      content: 'Full article content would go here...',
      publishedAt: '2024-02-28',
      readTime: '10 min read',
      tags: ['AI', 'Future Tech', 'Software Development', 'Opinion'],
      category: 'AI & Technology',
      featured: false,
      image: '/api/placeholder/600/300'
    },
    {
      id: 5,
      title: 'Optimizing Web Performance: Tips and Tricks',
      excerpt: 'Learn practical techniques to improve your web application performance and provide better user experiences.',
      content: 'Full article content would go here...',
      publishedAt: '2024-02-20',
      readTime: '7 min read',
      tags: ['Performance', 'Optimization', 'Web Development', 'UX'],
      category: 'Web Development',
      featured: false,
      image: '/api/placeholder/600/300'
    },
    {
      id: 6,
      title: 'Understanding Modern CSS: Grid, Flexbox, and Beyond',
      excerpt: 'Master modern CSS layout techniques and create responsive designs that work across all devices.',
      content: 'Full article content would go here...',
      publishedAt: '2024-02-15',
      readTime: '9 min read',
      tags: ['CSS', 'Frontend', 'Responsive Design', 'Layout'],
      category: 'Frontend Development',
      featured: false,
      image: '/api/placeholder/600/300'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Frontend Development', 'Backend Development', 'Web Development'];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Tech Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and thoughts on modern web development, AI integration, 
            and the latest trends in technology.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-hero rounded-full"></span>
            Featured Articles
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-card card-hover bg-gradient-card">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground/50">
                      {post.title.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary">Featured</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border shadow-card card-hover">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero/5"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground/50">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm" className="w-full group">
                      Read Article
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <Card className="p-8 bg-gradient-card border-0 shadow-card">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to get notified about new articles on web development, AI, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                type="email"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </Card>

        {/* Sidebar-like content */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {/* Recent Posts */}
          <Card className="p-6 bg-card border shadow-card">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg mb-4">Recent Posts</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="space-y-2">
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-sm font-medium hover:text-primary transition-colors line-clamp-2"
                    >
                      {post.title}
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Popular Tags */}
          <Card className="p-6 bg-card border shadow-card">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg mb-4">Popular Tags</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'AI', 'Python', 'Django', 'CSS', 'Web Development', 'Tutorial', 'Best Practices'].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* About Blog */}
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg mb-4">About This Blog</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                I share my experiences, learnings, and insights from working with modern web technologies, 
                AI integration, and building scalable applications. Each post aims to provide practical 
                value and help fellow developers grow their skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;