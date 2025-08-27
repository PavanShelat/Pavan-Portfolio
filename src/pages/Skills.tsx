import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaPython, FaNodeJs, FaGitAlt, FaGithub, FaRProject } from 'react-icons/fa';
import { SiDjango, SiMysql, SiMongodb, SiNumpy, SiPandas, SiTensorflow, SiJupyter } from 'react-icons/si';
import { MdDataUsage } from 'react-icons/md';
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
        { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 text-2xl" /> },
        { name: 'React.js', icon: <FaReact className="text-cyan-500 text-2xl" /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600 text-2xl" /> }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Python', icon: <FaPython className="text-blue-500 text-2xl" /> },
        { name: 'Django', icon: <SiDjango className="text-green-700 text-2xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-2xl" /> }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: [
        { name: 'NumPy', icon: <SiNumpy className="text-blue-400 text-2xl" /> },
        { name: 'Pandas', icon: <SiPandas className="text-black text-2xl" /> },
        { name: 'Matplotlib', icon: <MdDataUsage className="text-red-500 text-2xl" /> },
        { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500 text-2xl" /> },
        { name: 'R (Basics)', icon: <FaRProject className="text-blue-700 text-2xl" /> }
      ]
    },
    {
      title: 'Databases & Tools',
      icon: '🛠️',
      skills: [
        { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-2xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-2xl" /> },
        { name: 'Git', icon: <FaGitAlt className="text-red-500 text-2xl" /> },
        { name: 'GitHub', icon: <FaGithub className="text-black text-2xl" /> },
        { name: 'VS Code', icon: <VscVscode className="text-blue-500 text-2xl" /> },
        { name: 'Jupyter Lab', icon: <SiJupyter className="text-orange-500 text-2xl" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A snapshot of my technical skills and tools that I use to build modern, efficient, and scalable solutions.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center p-4 rounded-lg bg-accent transition-smooth card-hover cursor-default hover:scale-105"
                    >
                      {skill.icon}
                      <span className="mt-2 text-sm font-medium text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="text-center mt-16 p-8 bg-gradient-subtle rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Always Learning, Always Growing</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
            I actively learn through projects, online courses, and experimentation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
