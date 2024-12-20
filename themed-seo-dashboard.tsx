import React, { useState } from 'react';
import { Gauge, BookOpen, ShoppingCart, Map, Code, Trophy, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const themes = {
  neonNights: {
    primary: 'bg-purple-600',
    secondary: 'bg-pink-500',
    accent: 'text-cyan-400',
    card: 'bg-gray-900',
    text: 'text-white',
    highlight: 'ring-pink-500',
    progressBg: 'bg-gray-700',
    moduleBg: 'bg-gray-800'
  },
  natureInspired: {
    primary: 'bg-green-600',
    secondary: 'bg-emerald-500',
    accent: 'text-yellow-400',
    card: 'bg-stone-50',
    text: 'text-stone-800',
    highlight: 'ring-emerald-500',
    progressBg: 'bg-stone-200',
    moduleBg: 'bg-stone-100'
  },
  oceanBreeze: {
    primary: 'bg-blue-500',
    secondary: 'bg-cyan-400',
    accent: 'text-teal-400',
    card: 'bg-white',
    text: 'text-slate-800',
    highlight: 'ring-cyan-400',
    progressBg: 'bg-slate-100',
    moduleBg: 'bg-blue-50'
  },
  sunsetVibes: {
    primary: 'bg-orange-500',
    secondary: 'bg-red-400',
    accent: 'text-yellow-500',
    card: 'bg-white',
    text: 'text-gray-800',
    highlight: 'ring-orange-400',
    progressBg: 'bg-orange-100',
    moduleBg: 'bg-orange-50'
  },
  galaxyPurple: {
    primary: 'bg-indigo-600',
    secondary: 'bg-violet-500',
    accent: 'text-fuchsia-400',
    card: 'bg-slate-50',
    text: 'text-slate-900',
    highlight: 'ring-violet-500',
    progressBg: 'bg-slate-200',
    moduleBg: 'bg-indigo-50'
  }
};

const SEODashboard = () => {
  const [selectedPath, setSelectedPath] = useState('ecommerce');
  const [currentTheme, setCurrentTheme] = useState('oceanBreeze');
  
  const learningPaths = {
    ecommerce: {
      title: 'SEO E-commerce',
      progress: 0,
      modules: [
        { name: 'Optimización de productos', xp: 100 },
        { name: 'Estructura de categorías', xp: 150 },
        { name: 'URLs amigables', xp: 75 },
        { name: 'Rich snippets', xp: 125 }
      ]
    },
    content: {
      title: 'Content Specialist',
      progress: 0,
      modules: [
        { name: 'Keyword Research', xp: 100 },
        { name: 'Copywriting SEO', xp: 150 },
        { name: 'Estrategia de contenidos', xp: 200 },
        { name: 'Optimización on-page', xp: 125 }
      ]
    },
    local: {
      title: 'SEO Local',
      progress: 0,
      modules: [
        { name: 'Google My Business', xp: 100 },
        { name: 'Citations locales', xp: 75 },
        { name: 'Optimización local', xp: 125 },
        { name: 'Reseñas y reputación', xp: 150 }
      ]
    },
    technical: {
      title: 'SEO Técnico',
      progress: 0,
      modules: [
        { name: 'Velocidad de carga', xp: 150 },
        { name: 'Arquitectura web', xp: 200 },
        { name: 'Indexación', xp: 125 },
        { name: 'Mobile-first', xp: 100 }
      ]
    }
  };

  const getIcon = (path) => {
    const iconClass = `w-8 h-8 ${themes[currentTheme].accent}`;
    switch(path) {
      case 'ecommerce': return <ShoppingCart className={iconClass} />;
      case 'content': return <BookOpen className={iconClass} />;
      case 'local': return <Map className={iconClass} />;
      case 'technical': return <Code className={iconClass} />;
      default: return null;
    }
  };

  return (
    <div className={`p-6 space-y-6 ${themes[currentTheme].text}`}>
      <div className="flex justify-end space-x-2 mb-4">
        {Object.keys(themes).map((theme) => (
          <button
            key={theme}
            onClick={() => setCurrentTheme(theme)}
            className={`p-2 rounded-full transition-all ${
              currentTheme === theme ? themes[theme].primary : 'bg-gray-200'
            }`}
          >
            <Palette className="w-5 h-5 text-white" />
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(learningPaths).map(([key, path]) => (
          <Card 
            key={key}
            className={`cursor-pointer transition-all ${themes[currentTheme].card} ${
              selectedPath === key ? `ring-2 ${themes[currentTheme].highlight}` : ''
            }`}
            onClick={() => setSelectedPath(key)}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">
                {path.title}
              </CardTitle>
              {getIcon(key)}
            </CardHeader>
            <CardContent>
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Progreso</span>
                  <span className="text-sm font-medium">0%</span>
                </div>
                <div className={`w-full h-2 ${themes[currentTheme].progressBg} rounded-full mt-1`}>
                  <div className={`w-0 h-full ${themes[currentTheme].primary} rounded-full`}/>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className={`mt-6 ${themes[currentTheme].card}`}>
        <CardHeader>
          <CardTitle>{learningPaths[selectedPath].title} - Módulos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {learningPaths[selectedPath].modules.map((module, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-4 ${themes[currentTheme].moduleBg} rounded-lg`}
              >
                <div className="flex items-center space-x-4">
                  <Trophy className={`w-6 h-6 ${themes[currentTheme].accent}`}/>
                  <span className="font-medium">{module.name}</span>
                </div>
                <span className="text-sm text-gray-600">{module.xp} XP</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEODashboard;
