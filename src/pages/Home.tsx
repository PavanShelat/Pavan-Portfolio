import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import pavanProfile from '@/assets/pavan-profile.jpg';
import profile1 from '@/assets/Profile-1.png'
import resumePDF from '@/assets/Pavan_Shelat_Resume.pdf'; // Place your resume in src/assets

const Home = () => {
  // Download function
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Pavan_Shelat_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 hero-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
                Hi, I'm Pavan Shelat
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                IT Student | Aspiring Data Scientist & AI/ML Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Final-year IT student passionate about Data Science, Artificial Intelligence,
                and Machine Learning. Skilled in Python, Data Analysis, and AI tools to turn
                data into actionable insights and intelligent solutions. Eager to contribute
                to impactful projects and learn from real-world challenges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button size="lg" className="group transition-all hover:shadow-soft">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="transition-all hover:border-primary hover:text-primary">
                  Get In Touch
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleDownloadResume}
                className="group transition-all hover:shadow-soft"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/PavanShelat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all hover:shadow-soft skill-icon"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/pavan-shelat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all hover:shadow-soft skill-icon"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:pavanshelat07@gmail.com"
                className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all hover:shadow-soft skill-icon"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end hero-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
              <Card className="relative overflow-hidden border-0 shadow-card">
                <img
                  src={profile1}
                  alt="Pavan Shelat - Aspiring Data Scientist & AI/ML Engineer"
                  className="w-80 h-96 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Transforming Data into Actionable Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I work with data to uncover patterns, build predictive models, and develop AI-driven solutions that address real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-card border-0 shadow-card card-hover">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-primary text-2xl font-bold">5+</span>
                </div>
                <h3 className="text-xl font-semibold">Projects Completed</h3>
                <p className="text-muted-foreground">
                  3 Machine Learning projects, 1 Django web app, 1 ReactJS project, and this personal portfolio
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-0 shadow-card card-hover">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-primary text-2xl font-bold">3+</span>
                </div>
                <h3 className="text-xl font-semibold">Years of Learning</h3>
                <p className="text-muted-foreground">
                  Building skills through projects in Machine Learning, Django web development, ReactJS, and AI-powered applications.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-0 shadow-card card-hover">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-primary text-2xl font-bold">IBM</span>
                </div>
                <h3 className="text-xl font-semibold">AI & Python Certified</h3>
                <p className="text-muted-foreground">
                  Certifications and badges from IBM SkillBuild, Google Cloud, and Hack2Skills’ Gen AI Academy.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore some of my academic and personal projects that highlight my
            skills in Data Science, AI, and Machine Learning.
          </p>
          <Link to="/projects">
            <Button size="lg" variant="outline" className="group">
              Explore All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
