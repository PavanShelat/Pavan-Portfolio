import { Award, Calendar, ExternalLink, Download, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'IBM Generative AI Internship Certificate',
      issuer: 'IBM',
      issuedDate: '2024',
      category: 'AI & Machine Learning',
      description: 'Comprehensive training in Generative AI technologies, prompt engineering, and AI application development.',
      skills: ['Generative AI', 'Prompt Engineering', 'AI Ethics', 'IBM Watson', 'AI Integration'],
      credentialId: 'IBM-AI-2024-001',
      verified: true,
      image: '/api/placeholder/400/300',
      downloadUrl: '#',
      verifyUrl: '#'
    },
    {
      id: 2,
      title: 'React.js Professional Certificate',
      issuer: 'Meta',
      issuedDate: '2023',
      category: 'Frontend Development',
      description: 'Advanced React.js development including hooks, context, state management, and modern React patterns.',
      skills: ['React.js', 'JavaScript', 'Frontend Development', 'Component Design', 'State Management'],
      credentialId: 'META-REACT-2023-456',
      verified: true,
      image: '/api/placeholder/400/300',
      downloadUrl: '#',
      verifyUrl: '#'
    },
    {
      id: 3,
      title: 'Python for Data Science Certificate',
      issuer: 'IBM',
      issuedDate: '2023',
      category: 'Data Science',
      description: 'Python programming fundamentals for data analysis, pandas, numpy, and data visualization.',
      skills: ['Python', 'Data Analysis', 'Pandas', 'NumPy', 'Data Visualization'],
      credentialId: 'IBM-PY-2023-789',
      verified: true,
      image: '/api/placeholder/400/300',
      downloadUrl: '#',
      verifyUrl: '#'
    },
    {
      id: 4,
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      issuedDate: '2023',
      category: 'Full Stack Development',
      description: 'Comprehensive full stack development course covering HTML, CSS, JavaScript, Node.js, and databases.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB', 'Express.js'],
      credentialId: 'FCC-FULLSTACK-2023-321',
      verified: true,
      image: '/api/placeholder/400/300',
      downloadUrl: '#',
      verifyUrl: '#'
    },
    {
      id: 5,
      title: 'Django REST Framework',
      issuer: 'Django Software Foundation',
      issuedDate: '2023',
      category: 'Backend Development',
      description: 'Advanced Django REST Framework development for building scalable APIs and web services.',
      skills: ['Django', 'Django REST Framework', 'API Development', 'Backend Development'],
      credentialId: 'DSF-DRF-2023-654',
      verified: true,
      image: '/api/placeholder/400/300',
      downloadUrl: '#',
      verifyUrl: '#'
    },
    {
      id: 6,
      title: 'Git & GitHub Collaboration',
      issuer: 'GitHub',
      issuedDate: '2022',
      category: 'Development Tools',
      description: 'Version control, collaborative development, and GitHub workflows for professional development.',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration', 'CI/CD'],
      credentialId: 'GITHUB-COLLAB-2022-987',
      verified: true,
      image: '/api/placeholder/400/300',
      downloadUrl: '#',
      verifyUrl: '#'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Frontend Development', 'Backend Development', 'Data Science', 'Development Tools', 'Full Stack Development'];

  const achievements = [
    {
      title: 'Dean\'s List',
      description: 'Academic Excellence Recognition',
      year: '2023-2024'
    },
    {
      title: 'Best Project Award',
      description: 'Outstanding Final Year Project',
      year: '2024'
    },
    {
      title: 'Hackathon Winner',
      description: '1st Place in College Tech Fest',
      year: '2023'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Certificates & Achievements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional certifications and recognitions that demonstrate my commitment 
            to continuous learning and excellence in technology.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 bg-gradient-card border-0 shadow-card text-center">
            <div className="text-3xl font-bold text-primary mb-2">{certificates.length}</div>
            <div className="text-muted-foreground">Certificates Earned</div>
          </Card>
          <Card className="p-6 bg-gradient-card border-0 shadow-card text-center">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-muted-foreground">Technology Areas</div>
          </Card>
          <Card className="p-6 bg-gradient-card border-0 shadow-card text-center">
            <div className="text-3xl font-bold text-primary mb-2">2024</div>
            <div className="text-muted-foreground">Latest Certification</div>
          </Card>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificates.map((cert) => (
            <Card key={cert.id} className="overflow-hidden border shadow-card card-hover">
              {/* Certificate Image */}
              <div className="aspect-video bg-gradient-hero/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                  </div>
                </div>
                {cert.verified && (
                  <div className="absolute top-2 right-2">
                    <div className="flex items-center gap-1 bg-success text-success-foreground px-2 py-1 rounded-full text-xs">
                      <CheckCircle className="h-3 w-3" />
                      Verified
                    </div>
                  </div>
                )}
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                  <Badge variant="outline" className="ml-2 text-xs">
                    {cert.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.issuedDate}</span>
                </div>
              </CardHeader>

              <CardContent className="pb-3">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Skills Covered:</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{cert.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={cert.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-3 w-3" />
                        Download
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                        Verify
                      </a>
                    </Button>
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Achievements */}
        <Card className="p-8 mb-16 bg-gradient-card border-0 shadow-card">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-hero rounded-full"></span>
              Academic Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border border-border">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Philosophy */}
        <Card className="p-8 bg-card border shadow-card">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl mb-6">Continuous Learning Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Why I Pursue Certifications</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In the rapidly evolving tech landscape, staying current with the latest 
                  technologies and best practices is crucial. Each certification represents 
                  not just knowledge gained, but a commitment to excellence and continuous improvement.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Future Learning Goals</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Advanced AI and Machine Learning Specialization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Cloud Architecture and DevOps Certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Cybersecurity and Ethical Hacking</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Certificates;