import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Import project images
import movieRS from '@/assets/projects/MovieRS.png';
import blrHomePrice from '@/assets/projects/BengaluruHPP.png';
import virtualRoom from '@/assets/projects/DecormateVRD.png';
import trainBooking from '@/assets/projects/Pozy.png';
import footwearEcom from '@/assets/projects/Footwear.png';
import portfolioImg from '@/assets/projects/Portfolio.png';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Virtual Room Decorator',
      description: 'Interactive web app built with Streamlit integrating Hugging Face API to allow users to visualize furniture in their room.',
      image: virtualRoom,
      technologies: ['Python', 'Streamlit', 'Hugging Face API'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/PavanShelat/DecorMateVRD',
      liveUrl: 'https://decormatevrd.onrender.com/',
      featured: true
    },
    {
      id: 2,
      title: 'Bangalore Home Price Prediction',
      description: 'Machine Learning project predicting home prices in Bangalore using Linear Regression and a web interface with HTML and CSS.',
      image: blrHomePrice,
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'HTML', 'CSS'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/PavanShelat/BengaluruHomePricePrediction',
      liveUrl: 'https://bengaluru-home-price-prediction-j4k0.onrender.com/',
      featured: true
    },
    {
      id: 3,  
      title: 'Movie Recommender System',
      description: 'Content-based movie recommendation system using Python, Pandas, and scikit-learn to suggest movies based on similarity scores.',
      image: movieRS,
      technologies: ['Python', 'Pandas', 'Scikit-learn'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/PavanShelat/Movie-Recommender-System',
      liveUrl: null,
      featured: true
    },
    {
      id: 4,
      title: 'POZY Train Booking App',
      description: 'Full-stack train booking system with Various Touring Packages, and navigation state using React Router.',
      image: trainBooking,
      technologies: ['React.js', 'Node.js'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/PavanShelat/DE_Project',
      liveUrl: null,
      featured: true
    },
    {
      id: 5,
      title: 'FootWear E-Commerce',
      description: 'E-commerce website for footwear shopping built with Django backend, featuring product listings, cart management, and a smooth checkout experience.',
      image: footwearEcom,
      technologies: ['Python', 'Django', 'Html', 'CSS'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/PavanShelat/Footwear_Project',
      liveUrl: null,
      featured: true
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React.js and Tailwind CSS showcasing projects, skills, and achievements.',
      image: portfolioImg,
      technologies: ['React.js', 'Tailwind CSS'],
      category: 'Frontend',
      githubUrl: 'https://github.com/PavanShelat/Pavan-Portfolio',
      liveUrl: null,
      featured: false
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI/ML'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of my academic and personal projects in Data Science, AI/ML, and Full-Stack Development.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-hero rounded-full"></span>
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project) => (
              <Card key={project.id} className="overflow-hidden border-0 shadow-card card-hover bg-gradient-card">
                <div className="aspect-video relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline" className="ml-2">
                      {project.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <Filter className="h-5 w-5 text-muted-foreground mt-2" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border shadow-card card-hover">
              <div className="aspect-video relative overflow-hidden">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                {project.featured && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary">Featured</Badge>
                  </div>
                )}
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <Badge variant="outline" className="ml-2 text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="gap-2 pt-0">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                {project.liveUrl && (
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-card rounded-xl border-0 shadow-card">
          <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's create something amazing together!
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
