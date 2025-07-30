import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Index() {
  const levels = [
    { id: 1, name: "Начальный прыг", difficulty: "Легко", progress: 100, image: "/img/991f10e2-3a0a-4142-9470-330d34362264.jpg" },
    { id: 2, name: "Лавовый лабиринт", difficulty: "Средне", progress: 75, image: "/img/991f10e2-3a0a-4142-9470-330d34362264.jpg" },
    { id: 3, name: "Огненная башня", difficulty: "Сложно", progress: 20, image: "/img/991f10e2-3a0a-4142-9470-330d34362264.jpg" },
    { id: 4, name: "Ад паркура", difficulty: "Эксперт", progress: 0, image: "/img/991f10e2-3a0a-4142-9470-330d34362264.jpg" },
  ];

  const leaderboard = [
    { rank: 1, player: "ProGamer2024", time: "2:34", avatar: "🏆" },
    { rank: 2, player: "LavaJumper", time: "2:47", avatar: "🥈" },
    { rank: 3, player: "FireMaster", time: "3:12", avatar: "🥉" },
    { rank: 4, player: "HotSteps", time: "3:28", avatar: "🔥" },
    { rank: 5, player: "CoolRunner", time: "3:45", avatar: "💨" },
  ];

  const rules = [
    "Не касайтесь лавы - мгновенная смерть!",
    "Прыгайте только по безопасным блокам",
    "У вас есть 3 жизни на каждый уровень",
    "Соберите все кристаллы для бонуса",
    "Используйте чекпоинты с умом"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-red-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-lava via-roblox-orange to-lava-bright">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="mb-8 animate-bounce-slow">
            <h1 className="text-6xl font-black mb-4 drop-shadow-lg">
              🔥 ОББИ НО ПОЛ ЭТО ЛАВА 🔥
            </h1>
            <p className="text-2xl font-semibold mb-2">от timofors19</p>
            <p className="text-lg opacity-90">Самый HOT паркур в Roblox!</p>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button size="lg" className="bg-roblox-green hover:bg-green-600 text-white font-bold px-8 py-4 text-xl transform hover:scale-105 transition-all duration-200 shadow-lg">
              <Icon name="Play" className="mr-2" size={24} />
              ИГРАТЬ СЕЙЧАС
            </Button>
            <Button variant="outline" size="lg" className="bg-white/20 border-white text-white hover:bg-white/30 font-bold px-8 py-4 text-xl transform hover:scale-105 transition-all duration-200">
              <Icon name="Users" className="mr-2" size={24} />
              Присоединиться
            </Button>
          </div>

          <div className="flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              <span>12,847 игроков онлайн</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="ThumbsUp" size={20} />
              <span>98% лайков</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Star" size={20} />
              <span>4.9/5 рейтинг</span>
            </div>
          </div>
        </div>
      </div>

      {/* Levels Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-roblox-dark">
          🎮 УРОВНИ ИГРЫ
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level) => (
            <Card key={level.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-orange-200 hover:border-lava">
              <CardHeader className="pb-3">
                <div className="aspect-video bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg mb-3 overflow-hidden">
                  <img 
                    src={level.image} 
                    alt={level.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-lg font-bold text-roblox-dark">
                  {level.name}
                </CardTitle>
                <Badge 
                  variant={level.difficulty === "Легко" ? "default" : 
                          level.difficulty === "Средне" ? "secondary" :
                          level.difficulty === "Сложно" ? "destructive" : "outline"}
                  className="w-fit"
                >
                  {level.difficulty}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Прогресс</span>
                      <span>{level.progress}%</span>
                    </div>
                    <Progress value={level.progress} className="h-2" />
                  </div>
                  <Button 
                    className="w-full bg-lava hover:bg-lava-dark text-white font-semibold transform hover:scale-105 transition-all duration-200"
                    disabled={level.progress === 0 && level.id > 1}
                  >
                    <Icon name="Play" size={16} className="mr-2" />
                    {level.progress === 0 ? "ЗАБЛОКИРОВАНО" : "ИГРАТЬ"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-roblox-dark">
            🏆 РЕЙТИНГ ЛИДЕРОВ
          </h2>
          
          <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur shadow-xl border-2 border-yellow-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                {leaderboard.map((player) => (
                  <div 
                    key={player.rank}
                    className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-white to-yellow-50 border border-yellow-200 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`text-2xl ${player.rank <= 3 ? 'animate-pulse' : ''}`}>
                        {player.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-roblox-dark">#{player.rank}</div>
                        <div className="text-sm text-gray-600">{player.player}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lava text-lg">{player.time}</div>
                      <div className="text-xs text-gray-500">лучшее время</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline" className="border-lava text-lava hover:bg-lava hover:text-white">
                  <Icon name="Trophy" size={16} className="mr-2" />
                  Посмотреть полный рейтинг
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rules Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-roblox-dark">
          📋 ПРАВИЛА ИГРЫ
        </h2>
        
        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-red-50 to-orange-50 border-2 border-lava/30 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-roblox-dark flex items-center justify-center gap-2">
              <Icon name="AlertTriangle" size={28} className="text-lava" />
              ВНИМАНИЕ! ОПАСНОСТЬ!
              <Icon name="AlertTriangle" size={28} className="text-lava" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-lava hover:shadow-md transition-all duration-200"
                >
                  <div className="bg-lava text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-roblox-dark font-medium">{rule}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-lava/10 to-roblox-orange/10 rounded-lg border-2 border-dashed border-lava/30">
              <div className="text-center">
                <Icon name="Flame" size={32} className="mx-auto mb-3 text-lava animate-pulse" />
                <p className="text-lg font-bold text-roblox-dark mb-2">
                  Помни: ПОЛ ЭТО ЛАВА! 🔥
                </p>
                <p className="text-gray-600">
                  Одно неверное движение и ты превратишься в жареный стейк!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-roblox-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Icon name="Gamepad2" size={24} className="text-roblox-orange" />
            <span className="text-xl font-bold">timofors19</span>
          </div>
          <p className="text-gray-300 mb-4">
            Создано с ❤️ для всех любителей экстремального паркура
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-roblox-orange transition-colors">Поддержка</a>
            <a href="#" className="hover:text-roblox-orange transition-colors">Discord</a>
            <a href="#" className="hover:text-roblox-orange transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}