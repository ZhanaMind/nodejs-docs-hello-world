import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, Book, Star, Users, Brain } from 'lucide-react';

const Website = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg width="40" height="40" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2B4B8C"/>
                  <stop offset="100%" stopColor="#1CA4B8"/>
                </linearGradient>
              </defs>
              <path d="M100,20 Q160,20 160,80 Q160,140 100,140 Q40,140 40,80 Q40,20 100,20" 
                    fill="url(#logoGradient)"/>
              <path d="M70,60 Q100,40 130,60 Q150,80 130,100 Q100,120 70,100 Q50,80 70,60" 
                    stroke="white" strokeWidth="3" fill="none"/>
            </svg>
            <span className="text-2xl font-bold text-[#2B4B8C]">ZhanaMind</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#2B4B8C]">Программы</a>
            <a href="#" className="text-gray-600 hover:text-[#2B4B8C]">О нас</a>
            <a href="#" className="text-gray-600 hover:text-[#2B4B8C]">Блог</a>
            <Button className="bg-[#2B4B8C] hover:bg-[#1CA4B8]">
              Начать
            </Button>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-[#2B4B8C] mb-6">
                Трансформация мышления начинается здесь
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Научно обоснованные методики для развития осознанности, 
                эмоционального интеллекта и достижения внутренней гармонии
              </p>
              <Button className="bg-[#2B4B8C] hover:bg-[#1CA4B8] text-lg px-8 py-6">
                Попробовать бесплатно
              </Button>
            </div>
            <div className="bg-gradient-to-br from-[#2B4B8C] to-[#1CA4B8] rounded-2xl p-8">
              <div className="aspect-video bg-white/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Программы */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-[#2B4B8C] mb-12 text-center">
            Наши программы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "7 дней",
                description: "Быстрый старт к осознанной жизни",
                features: ["5 медитаций", "Дневник благодарности", "Чек-листы"]
              },
              {
                title: "21 день",
                description: "Формирование новых привычек",
                features: ["15 практик", "Групповые занятия", "Поддержка куратора"]
              },
              {
                title: "30 дней",
                description: "Глубокая трансформация",
                features: ["Персональный план", "Коучинг", "Доступ к сообществу"]
              }
            ].map((program) => (
              <Card key={program.title} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#2B4B8C] mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <ChevronRight className="w-4 h-4 text-[#1CA4B8] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#2B4B8C] hover:bg-[#1CA4B8]">
                  Подробнее
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-[#2B4B8C] mb-12 text-center">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Научный подход",
                description: "Методики, основанные на нейропластичности"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Эффективность",
                description: "87% учеников отмечают улучшения"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Сообщество",
                description: "Поддержка единомышленников"
              },
              {
                icon: <Book className="w-8 h-8" />,
                title: "Практики",
                description: "Более 100 упражнений"
              }
            ].map((feature) => (
              <Card key={feature.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[#2B4B8C]/10 flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#2B4B8C]">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-[#2B4B8C] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-[#2B4B8C] mb-12 text-center">
            Истории успеха
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2B4B8C]"></div>
                  <div className="ml-4">
                    <h3 className="font-bold text-[#2B4B8C]">Мария П.</h3>
                    <p className="text-gray-600 text-sm">21 день с ZhanaMind</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Программа помогла мне обрести внутреннее спокойствие и научиться 
                  управлять стрессом. Теперь каждое утро начинается с медитации!"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#2B4B8C] to-[#1CA4B8] text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Начните свой путь к осознанной жизни
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам людей, которые уже изменили свою жизнь с ZhanaMind
          </p>
          <Button className="bg-white text-[#2B4B8C] hover:bg-gray-100 text-lg px-8 py-6">
            Начать бесплатно
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 text-white mb-4">
                <svg width="30" height="30" viewBox="0 0 200 200">
                  <use href="#logo" fill="url(#logoGradient)" />
                </svg>
                <span className="text-xl font-bold">ZhanaMind</span>
              </div>
              <p>Наука перемен</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Программы</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">7 дней</a></li>
                <li><a href="#" className="hover:text-white">21 день</a></li>
                <li><a href="#" className="hover:text-white">30 дней</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Блог</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li>info@zhanamind.com</li>
                <li>+7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© 2024 ZhanaMind. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;