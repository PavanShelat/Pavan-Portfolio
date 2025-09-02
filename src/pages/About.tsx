import { GraduationCap, MapPin, Calendar, Code, Users, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const experiences = [
    {
      title: 'IBM Generative AI Internship',
      organization: 'IBM',
      period: 'July 2025',
      description: '15-day online internship covering Generative AI fundamentals, prompt engineering, and AI-based project development.',
      type: 'Internship'
    },
    {
      title: 'Gen AI Academy',
      organization: 'Hack2Skills + Google Cloud',
      period: '2025',
      description: 'Earned 5 Google Cloud skill badges and a completion certificate through Generative AI training and projects.',
      type: 'Certification'
    },
    {
      title: 'Academic & Personal Projects',
      organization: 'Student Work',
      period: '2023 - Present',
      description: 'Developed projects including a Movie Recommendation System (content-based filtering), Bengaluru Home Price Prediction (linear regression), Virtual Room Decorator (Hugging Face API), a Django web app, and a ReactJS web project including this portfolio.',
      type: 'Projects'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I’m a Final Year IT student with an additional Minor Degree in Data Science, passionate about AI/ML and building projects that solve real-world problems.
          </p>
        </div>

        {/* My Story */}
        <Card className="p-8 mb-12 bg-gradient-card border-0 shadow-card">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-primary" />
            My Story
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              Hello! I’m Pavan Shelat, pursuing my B.E. in Information Technology with an additional Minor Degree in Data Science at SAL Engineering & Technical Institute (CGPA: 8.83). My journey in tech started with curiosity about data and evolved into building AI-powered solutions.
            </p>
            <p>
              I’ve completed the IBM Generative AI Internship and Gen AI Academy from Hack2Skills in collaboration with Google Cloud, gaining practical skills in AI, prompt engineering, and cloud-based AI workflows.
            </p>
            <p>
              Through academic and self-driven projects, I’ve applied Python, machine learning models, Django, ReactJS, and modern web technologies to create solutions that are functional and impactful.
            </p>
          </div>
        </Card>

        {/* Education */}
        <Card className="p-8 mb-12 bg-card border shadow-card">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h2>
          <div className="p-4 bg-accent rounded-lg flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">SAL Engineering and Technical Institute</h3>
              <p className="text-muted-foreground">B.E. in Information Technology</p>
              <p className="text-muted-foreground">Additional Minor Degree in Data Science</p>
              <p className="text-primary font-medium mt-1">
                CGPA: <span className="font-bold">8.83</span>
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
              <MapPin className="h-4 w-4" />
              <span>Ahmedabad, India</span>
              <Calendar className="h-4 w-4 ml-2" />
              <span>2022 – Present</span>
            </div>
          </div>
        </Card>



        {/* Projects & Certifications */}
        <Card className="p-8 mb-12 bg-card border shadow-card">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            Projects & Certifications
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-2" />
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>
                  <p className="text-primary font-medium">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
};

export default About;
