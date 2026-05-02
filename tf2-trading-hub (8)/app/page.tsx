"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Plus,
  Headphones,
  Menu,
  Star,
  Crown,
  Calendar,
  Clock,
  Users,
  Eye,
  Heart,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  BookOpen,
  Bell,
  User,
  Flame,
  Target,
  Gamepad2,
  Award,
  Download,
  Share2,
  Bookmark,
  Filter,
  BarChart3,
  Activity,
  Wifi,
  WifiOff,
  UserPlus,
  MapPin,
  Video,
  ImageIcon,
} from "lucide-react"

const tf2Characters = [
  {
    name: "Scout",
    image: "/images/scout.png",
    bagItems: 2,
    saleItems: 3,
    alishtaItems: 5,
    swapItems: 10,
    winRate: "68%",
    mainWeapon: "Scattergun",
    playTime: "247h",
    favoriteMap: "2Fort",
  },
  {
    name: "Soldier",
    image: "/images/soldier.png",
    bagItems: 4,
    saleItems: 2,
    alishtaItems: 8,
    swapItems: 15,
    winRate: "72%",
    mainWeapon: "Rocket Launcher",
    playTime: "312h",
    favoriteMap: "Badwater",
  },
  {
    name: "Pyro",
    image: "/images/pyro.png",
    bagItems: 1,
    saleItems: 5,
    alishtaItems: 3,
    swapItems: 7,
    winRate: "65%",
    mainWeapon: "Flame Thrower",
    playTime: "189h",
    favoriteMap: "Dustbowl",
  },
  {
    name: "Demoman",
    image: "/images/demoman.png",
    bagItems: 3,
    saleItems: 1,
    alishtaItems: 6,
    swapItems: 12,
    winRate: "70%",
    mainWeapon: "Grenade Launcher",
    playTime: "298h",
    favoriteMap: "Upward",
  },
  {
    name: "Heavy",
    image: "/images/heavy.png",
    bagItems: 5,
    saleItems: 4,
    alishtaItems: 2,
    swapItems: 8,
    winRate: "74%",
    mainWeapon: "Minigun",
    playTime: "356h",
    favoriteMap: "Payload",
  },
  {
    name: "Engineer",
    image: "/images/engineer.png",
    bagItems: 2,
    saleItems: 6,
    alishtaItems: 4,
    swapItems: 11,
    winRate: "69%",
    mainWeapon: "Shotgun",
    playTime: "278h",
    favoriteMap: "Goldrush",
  },
  {
    name: "Medic",
    image: "/images/medic.png",
    bagItems: 6,
    saleItems: 2,
    alishtaItems: 7,
    swapItems: 9,
    winRate: "71%",
    mainWeapon: "Medigun",
    playTime: "423h",
    favoriteMap: "Granary",
  },
  {
    name: "Sniper",
    image: "/images/sniper.png",
    bagItems: 1,
    saleItems: 3,
    alishtaItems: 5,
    swapItems: 13,
    winRate: "66%",
    mainWeapon: "Sniper Rifle",
    playTime: "234h",
    favoriteMap: "Hightower",
  },
  {
    name: "Spy",
    image: "/images/spy.png",
    bagItems: 4,
    saleItems: 1,
    alishtaItems: 3,
    swapItems: 6,
    winRate: "63%",
    mainWeapon: "Revolver",
    playTime: "198h",
    favoriteMap: "Turbine",
  },
]

export default function TF2TradingHub() {
  const [currentPage, setCurrentPage] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredCharacter, setHoveredCharacter] = useState<number | null>(null)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [notifications, setNotifications] = useState(3)
  const [isOnline, setIsOnline] = useState(true)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const getCharacterScale = (index: number) => {
    if (hoveredCharacter === null) return "scale-100"

    const distance = Math.abs(index - hoveredCharacter)

    if (distance === 0) return "scale-125" // Hovered character
    if (distance === 1) return "scale-110" // Adjacent characters
    if (distance === 2) return "scale-105" // Next to adjacent

    return "scale-100" // Default
  }

  const getCharacterFilter = (index: number) => {
    if (hoveredCharacter === null) return "grayscale"
    if (hoveredCharacter === index) return "grayscale-0"
    return "grayscale"
  }

  const getCharacterBorder = (index: number) => {
    if (hoveredCharacter === index) return "border-orange-500 shadow-lg shadow-orange-500/50"
    return "border-gray-600"
  }

  const getTextColor = (index: number) => {
    if (hoveredCharacter === index) return "text-orange-500"
    return "text-white"
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="tf2-card rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-orange-400">Join TF2 Community Hub</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowRegisterModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </Button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Steam Profile URL</label>
                <Input
                  placeholder="https://steamcommunity.com/id/yourprofile"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Username</label>
                <Input placeholder="Your username" className="bg-gray-700 border-gray-600 text-white" />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-gray-700 border-gray-600 text-white" />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Password</label>
                <Input type="password" placeholder="Password" className="bg-gray-700 border-gray-600 text-white" />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded" />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>
              <Button className="tf2-btn w-full py-3 text-lg">
                <UserPlus className="h-4 w-4 mr-2" />
                Create Account
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-gray-800/95 backdrop-blur-sm border-b-2 border-orange-500 fixed w-full z-40 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/images/tf2-logo-original.png"
              alt="TF2 Logo"
              className="h-14 w-14 object-contain hover-glow transition-all duration-300 rounded-full border-2 border-orange-500"
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent text-glow">
                TF2 Community Hub
              </h1>
              <p className="text-xs text-gray-400">The Ultimate TF2 Experience</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {["Home", "Events", "Media", "News", "Trading", "Discussion", "Support"].map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item.toLowerCase())}
                className={`tf2-nav-item py-2 px-1 transition-colors relative ${
                  currentPage === item.toLowerCase() ? "text-orange-400" : "text-white hover:text-orange-300"
                }`}
              >
                {item}
                {item === "Trading" && (
                  <span className="absolute -top-1 -right-2 w-2 h-2 bg-green-500 rounded-full pulse-animation"></span>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Online Status */}
            <div className="hidden md:flex items-center space-x-2 text-sm">
              {isOnline ? (
                <div className="flex items-center text-green-400">
                  <Wifi className="h-4 w-4 mr-1" />
                  <span>Online</span>
                </div>
              ) : (
                <div className="flex items-center text-red-400">
                  <WifiOff className="h-4 w-4 mr-1" />
                  <span>Offline</span>
                </div>
              )}
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">{currentTime.toLocaleTimeString()}</span>
            </div>

            {/* Notifications */}
            <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>
            </div>

            {/* User Menu */}
            <div className="relative">
              <Button variant="ghost" size="icon" onClick={() => setUserMenuOpen(!userMenuOpen)} className="relative">
                <User className="h-5 w-5" />
              </Button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg p-2 z-50">
                  <div className="px-3 py-2 border-b border-gray-700">
                    <p className="font-medium">Guest User</p>
                    <p className="text-sm text-gray-400">Not logged in</p>
                  </div>
                  <div className="py-1">
                    <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-700 rounded">
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </button>
                    <button
                      onClick={() => setShowRegisterModal(true)}
                      className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-700 rounded text-orange-400"
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      Register
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Support Button */}
            <div className="relative group">
              <Button className="tf2-btn px-6 py-2 rounded-md flex items-center">
                <Headphones className="h-4 w-4 mr-2" />
                Support
                <span className="ml-2 w-2 h-2 bg-green-500 rounded-full pulse-animation"></span>
              </Button>
              <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg p-4 hidden group-hover:block z-50">
                <div className="text-sm text-gray-300">
                  <div className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span>Live Support: Online</span>
                  </div>
                  <p>
                    Average wait time: <span className="text-orange-400">2 minutes</span>
                  </p>
                  <p className="mt-2">
                    Active agents: <span className="text-orange-400">12/15</span>
                  </p>
                </div>
              </div>
            </div>

            <Button className="tf2-btn px-6 py-2 rounded-md">Login</Button>
            <Button
              onClick={() => setShowRegisterModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md flex items-center"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Register
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-2 flex flex-col space-y-2">
              {["Home", "Events", "Media", "News", "Trading", "Discussion", "Support"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setCurrentPage(item.toLowerCase())
                    setMobileMenuOpen(false)
                  }}
                  className="block py-2 px-1 text-left text-white hover:text-orange-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-12">
        {/* Home Page */}
        {currentPage === "home" && (
          <div className="page-transition container mx-auto px-4">
            {/* Hero Section */}
            <section className="relative mb-16 overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <img src="/images/tf2-background.jpg" alt="TF2 Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent opacity-90"></div>
              </div>
              <div className="relative z-10 px-6 py-24">
                <div className="max-w-3xl">
                  <div className="flex items-center mb-6">
                    <Flame className="h-12 w-12 text-orange-500 mr-4 animate-pulse" />
                    <h2 className="text-5xl md:text-6xl font-bold text-white">
                      <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                        TF2 Community Hub
                      </span>
                    </h2>
                  </div>
                  <p className="text-xl mb-4 text-gray-200">
                    The ultimate destination for Team Fortress 2 enthusiasts. Join over{" "}
                    <span className="text-orange-400 font-bold">50,000+</span> active players in the most comprehensive
                    TF2 community platform.
                  </p>
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center text-green-400">
                      <Activity className="h-5 w-5 mr-2" />
                      <span>Live Server Status</span>
                    </div>
                    <div className="flex items-center text-orange-400">
                      <Users className="h-5 w-5 mr-2" />
                      <span>3,247 Online Now</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <Trophy className="h-5 w-5 mr-2" />
                      <span>Daily Tournaments</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-6">
                    <Button onClick={() => setShowRegisterModal(true)} className="tf2-btn px-8 py-4 text-lg rounded-lg">
                      <Target className="h-5 w-5 mr-2" />
                      Join Community <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
                    >
                      <BookOpen className="h-5 w-5 mr-2" />
                      Learn More
                    </Button>
                    <Button
                      variant="outline"
                      className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Tools
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
            </section>

            {/* Live Statistics */}
            <section className="mb-12">
              <div className="tf2-card rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 border-b border-orange-500 pb-2 flex items-center">
                  <BarChart3 className="h-6 w-6 mr-2 text-orange-400" />
                  Live TF2 Statistics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <div className="bg-gradient-to-br from-orange-600 to-red-600 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-2">3,247</div>
                    <div className="text-sm">Players Online</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-2">156</div>
                    <div className="text-sm">Active Servers</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-600 to-teal-600 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-2">892</div>
                    <div className="text-sm">Trades Today</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-600 to-orange-600 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-2">45</div>
                    <div className="text-sm">Live Matches</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-2">12</div>
                    <div className="text-sm">Tournaments</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-2">2.4M</div>
                    <div className="text-sm">Total Items</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b border-orange-500 pb-2">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="tf2-card rounded-lg p-6 cursor-pointer group" onClick={() => setCurrentPage("events")}>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-orange-600 to-red-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Events</h3>
                      <p className="text-sm text-orange-400">5 upcoming</p>
                    </div>
                  </div>
                  <p className="text-gray-300">Join tournaments, community nights and special events.</p>
                </div>

                <div className="tf2-card rounded-lg p-6 cursor-pointer group" onClick={() => setCurrentPage("trading")}>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-green-600 to-teal-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Trading</h3>
                      <p className="text-sm text-green-400">892 active</p>
                    </div>
                  </div>
                  <p className="text-gray-300">Secure marketplace for all your TF2 items.</p>
                </div>

                <div
                  className="tf2-card rounded-lg p-6 cursor-pointer group"
                  onClick={() => setCurrentPage("discussion")}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Discussion</h3>
                      <p className="text-sm text-blue-400">1,245 online</p>
                    </div>
                  </div>
                  <p className="text-gray-300">Connect with fellow TF2 enthusiasts.</p>
                </div>

                <div className="tf2-card rounded-lg p-6 cursor-pointer group" onClick={() => setCurrentPage("media")}>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Media</h3>
                      <p className="text-sm text-purple-400">New uploads</p>
                    </div>
                  </div>
                  <p className="text-gray-300">Screenshots, videos, and community art.</p>
                </div>
              </div>
            </section>

            {/* Featured Content */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b border-orange-500 pb-2">Featured Content</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="tf2-card rounded-lg overflow-hidden">
                  <img src="/images/tf2-tournament-live.png" alt="Tournament" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <Badge className="bg-red-600 mr-2">LIVE</Badge>
                      <Badge className="bg-orange-600">Tournament</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-orange-400">TF2 Championship Finals</h3>
                    <p className="text-gray-300 mb-4">
                      Watch the best teams compete for the ultimate TF2 championship title and $10,000 prize pool.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>12,547 viewers</span>
                      </div>
                      <Button className="tf2-btn">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Live
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="tf2-card rounded-lg overflow-hidden">
                  <img src="/images/tf2-item-showcase.png" alt="Item Showcase" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <Badge className="bg-yellow-600 mr-2">NEW</Badge>
                      <Badge className="bg-purple-600">Workshop</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-orange-400">Community Item Showcase</h3>
                    <p className="text-gray-300 mb-4">
                      Discover the latest community-created items and vote for your favorites to be added to the game.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <Star className="h-4 w-4 mr-1" />
                        <span>4.8/5 rating</span>
                      </div>
                      <Button className="tf2-btn">
                        <Bookmark className="h-4 w-4 mr-2" />
                        View Collection
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent News */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b border-orange-500 pb-2">Latest TF2 News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "TF2 Summer Update 2023",
                    category: "Game Update",
                    date: "2 hours ago",
                    description: "Major game update brings new maps, weapons, and balance changes to Team Fortress 2.",
                    image: "/images/tf2-steam-workshop.png",
                    isNew: true,
                  },
                  {
                    title: "Weekly Community Highlights",
                    category: "Community",
                    date: "1 day ago",
                    description: "Showcasing the best community creations, plays, and achievements from this week.",
                    image: "/images/tf2-community-art.png",
                  },
                  {
                    title: "New Map Rotation Announced",
                    category: "Maps",
                    date: "3 days ago",
                    description: "Fresh maps added to competitive and casual rotations based on community feedback.",
                    image: "/images/tf2-maps-collection.png",
                  },
                ].map((news, index) => (
                  <div key={index} className="tf2-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {news.isNew && <Badge className="absolute top-2 left-2 bg-red-600 animate-pulse">NEW</Badge>}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge className="bg-orange-600">{news.category}</Badge>
                        <span className="text-sm text-gray-400">{news.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{news.description}</p>
                      <div className="flex items-center justify-between">
                        <Button variant="ghost" className="text-orange-400 hover:text-orange-300 p-0">
                          Read More
                        </Button>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Events Page */}
        {currentPage === "events" && (
          <div className="page-transition container mx-auto px-4">
            <section className="mb-8">
              <h1 className="text-3xl font-bold mb-6 border-b border-orange-500 pb-2 flex items-center">
                <Calendar className="h-8 w-8 mr-3 text-orange-400" />
                TF2 Events & Tournaments
              </h1>

              <div className="flex flex-col lg:flex-row gap-6 mb-8">
                <div className="tf2-card rounded-lg p-6 flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-orange-400 flex items-center">
                    <Trophy className="h-6 w-6 mr-2" />
                    Upcoming Events
                  </h2>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Button className="tf2-btn">All Events</Button>
                    <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                      Tournaments
                    </Button>
                    <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                      Community Nights
                    </Button>
                    <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                      Workshops
                    </Button>
                    <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                      Charity Events
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "TF2 Championship Finals",
                        date: "December 25, 2023",
                        time: "8:00 PM EST",
                        players: "Prize Pool: $10,000",
                        description:
                          "The ultimate TF2 tournament featuring the world's best teams competing for glory!",
                        image: "/images/tf2-tournament-live.png",
                        status: "LIVE",
                        participants: "16 teams",
                      },
                      {
                        title: "Community Night: Payload Race",
                        date: "December 28, 2023",
                        time: "7:00 PM EST",
                        players: "24/32 players",
                        description: "Join us for a night of chaotic payload race matches on custom maps!",
                        image: "/images/tf2-maps-collection.png",
                        status: "OPEN",
                        participants: "All welcome",
                      },
                      {
                        title: "6v6 Newbie Tournament",
                        date: "January 5, 2024",
                        time: "6:00 PM EST",
                        players: "Prize Pool: 50 keys",
                        description:
                          "A tournament for players with less than 500 hours. Great way to get into competitive!",
                        image: "/images/tf2-competitive-match.png",
                        status: "REGISTRATION",
                        participants: "8/16 teams",
                      },
                      {
                        title: "Halloween Special Event",
                        date: "October 31, 2024",
                        time: "7:00 PM EST",
                        players: "Halloween Maps",
                        description:
                          "Our annual Halloween event with costume contests, scream fortress maps, and more!",
                        image: "/images/tf2-class-scout-action.png",
                        status: "UPCOMING",
                        participants: "TBD",
                      },
                    ].map((event, index) => (
                      <div key={index} className="tf2-card rounded-lg p-6 hover:bg-gray-800 transition-colors">
                        <div className="flex flex-col md:flex-row gap-4">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full md:w-32 h-32 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <Badge
                                className={`mr-2 ${
                                  event.status === "LIVE"
                                    ? "bg-red-600"
                                    : event.status === "OPEN"
                                      ? "bg-green-600"
                                      : event.status === "REGISTRATION"
                                        ? "bg-yellow-600"
                                        : "bg-blue-600"
                                }`}
                              >
                                {event.status}
                              </Badge>
                              <Badge className="bg-orange-600">Tournament</Badge>
                            </div>
                            <h3 className="font-bold text-lg text-orange-400 mb-2">{event.title}</h3>
                            <div className="flex flex-wrap items-center text-sm text-gray-300 gap-4 mb-2">
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" /> {event.date}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" /> {event.time}
                              </span>
                              <span className="flex items-center">
                                <Users className="h-4 w-4 mr-1" /> {event.participants}
                              </span>
                              <span className="flex items-center">
                                <Trophy className="h-4 w-4 mr-1" /> {event.players}
                              </span>
                            </div>
                            <p className="text-gray-300 mb-4">{event.description}</p>
                            <div className="flex gap-2">
                              <Button className="tf2-btn">
                                {event.status === "LIVE" ? "Watch Live" : "Join Event"}
                              </Button>
                              <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                              </Button>
                              <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                                <Bookmark className="h-4 w-4 mr-2" />
                                Save
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tf2-card rounded-lg p-6 lg:w-80">
                  <h2 className="text-2xl font-bold mb-4 text-orange-400">Event Calendar</h2>
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <Button variant="ghost" size="icon">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="font-medium">December 2023</span>
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                      {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                        <div key={day} className="py-1 text-gray-500">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {Array.from({ length: 31 }, (_, i) => (
                        <div
                          key={i}
                          className={`py-1 ${[25, 28].includes(i + 1) ? "bg-orange-600 rounded-full" : ""} ${
                            [5].includes(i + 1) ? "bg-blue-600 rounded-full" : ""
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
                      <span className="text-sm">Live Events</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-sm">Upcoming Events</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                      <span className="text-sm">Special Events</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-bold mb-4 text-orange-400">Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-orange-400">156</div>
                        <div className="text-sm text-gray-300">Total Events This Month</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-green-400">2,847</div>
                        <div className="text-sm text-gray-300">Active Participants</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-blue-400">$25,000</div>
                        <div className="text-sm text-gray-300">Total Prize Pool</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tf2-card rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-orange-400 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Past Events & Results
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 px-4">Event</th>
                        <th className="text-left py-2 px-4">Date</th>
                        <th className="text-left py-2 px-4">Type</th>
                        <th className="text-left py-2 px-4">Winner</th>
                        <th className="text-left py-2 px-4">Prize</th>
                        <th className="text-left py-2 px-4">Participants</th>
                        <th className="text-left py-2 px-4">Results</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          event: "Highlander Championship",
                          date: "Dec 15, 2023",
                          type: "Tournament",
                          winner: "Team Fortress",
                          prize: "$5,000",
                          participants: "32 teams",
                        },
                        {
                          event: "MvM Challenge",
                          date: "Dec 10, 2023",
                          type: "Community Event",
                          winner: "Robot Destroyers",
                          prize: "100 keys",
                          participants: "48 players",
                        },
                        {
                          event: "Jungle Inferno Retro",
                          date: "Dec 5, 2023",
                          type: "Special Event",
                          winner: "Pyro Mains United",
                          prize: "Exclusive Items",
                          participants: "72 players",
                        },
                        {
                          event: "Newbie Mix Tournament",
                          date: "Nov 30, 2023",
                          type: "Beginner Tournament",
                          winner: "Fresh Meat",
                          prize: "50 keys",
                          participants: "16 teams",
                        },
                      ].map((event, index) => (
                        <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                          <td className="py-2 px-4 font-medium">{event.event}</td>
                          <td className="py-2 px-4">{event.date}</td>
                          <td className="py-2 px-4">
                            <Badge className="bg-orange-600 text-xs">{event.type}</Badge>
                          </td>
                          <td className="py-2 px-4 text-orange-400 font-medium">{event.winner}</td>
                          <td className="py-2 px-4 text-green-400">{event.prize}</td>
                          <td className="py-2 px-4">{event.participants}</td>
                          <td className="py-2 px-4">
                            <Button variant="ghost" className="text-orange-400 hover:text-orange-300 p-0 text-xs">
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Media Page */}
        {currentPage === "media" && (
          <div className="page-transition container mx-auto px-4">
            <section className="mb-8">
              <h1 className="text-3xl font-bold mb-6 border-b border-orange-500 pb-2 flex items-center">
                <Play className="h-8 w-8 mr-3 text-orange-400" />
                TF2 Media Gallery
              </h1>

              <div className="flex flex-wrap gap-4 mb-6">
                <Button className="tf2-btn">All Media</Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Screenshots
                </Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                  <Video className="h-4 w-4 mr-2" />
                  Videos
                </Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                  <Star className="h-4 w-4 mr-2" />
                  Fan Art
                </Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                  <Gamepad2 className="h-4 w-4 mr-2" />
                  SFM
                </Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                  <Heart className="h-4 w-4 mr-2" />
                  Memes
                </Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                  <Crown className="h-4 w-4 mr-2" />
                  Cosmetics
                </Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                  <MapPin className="h-4 w-4 mr-2" />
                  Maps
                </Button>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400">Sort by:</span>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700 w-48">
                      <SelectValue placeholder="Newest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rated">Top Rated</SelectItem>
                      <SelectItem value="comments">Most Comments</SelectItem>
                      <SelectItem value="views">Most Viewed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <Button className="tf2-btn">
                    <Plus className="h-4 w-4 mr-2" />
                    Upload
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    title: "Perfect Rocket Jump Compilation",
                    type: "Video",
                    author: "SoldierMain",
                    likes: 1247,
                    comments: 89,
                    views: 15200,
                    image: "/images/tf2-class-scout-action.png",
                    isVideo: true,
                    duration: "5:32",
                  },
                  {
                    title: "Epic Spy Trickstab Montage",
                    type: "Video",
                    author: "SpyMaster",
                    likes: 892,
                    comments: 156,
                    views: 24800,
                    image: "/images/tf2-competitive-match.png",
                    isVideo: true,
                    duration: "8:45",
                  },
                  {
                    title: "Meet the Team Redraw",
                    type: "Fan Art",
                    author: "ArtistPyro",
                    likes: 2156,
                    comments: 234,
                    views: 31000,
                    image: "/images/tf2-community-art.png",
                  },
                  {
                    title: "Heavy's Sandwich Adventure",
                    type: "SFM",
                    author: "SFMAnimator",
                    likes: 1789,
                    comments: 167,
                    views: 45000,
                    image: "/images/tf2-item-showcase.png",
                    isVideo: true,
                    duration: "3:21",
                  },
                  {
                    title: "When the Medic pockets you",
                    type: "Meme",
                    author: "MemeLord",
                    likes: 3421,
                    comments: 445,
                    views: 82000,
                    image: "/images/tf2-weapons-collection.png",
                  },
                  {
                    title: "Custom Map Showcase: cp_orange",
                    type: "Screenshot",
                    author: "MapMaker",
                    likes: 567,
                    comments: 78,
                    views: 12400,
                    image: "/images/tf2-maps-collection.png",
                  },
                  {
                    title: "Unusual Hat Collection 2023",
                    type: "Screenshot",
                    author: "HatCollector",
                    likes: 1234,
                    comments: 189,
                    views: 28700,
                    image: "/images/unusual-hat.jpg",
                  },
                  {
                    title: "Engineer Gaming Moments",
                    type: "Video",
                    author: "EngineerGaming",
                    likes: 987,
                    comments: 123,
                    views: 18900,
                    image: "/images/tf2-server-browser.png",
                    isVideo: true,
                    duration: "7:12",
                  },
                ].map((media, index) => (
                  <div key={index} className="tf2-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={media.image || "/placeholder.svg"}
                        alt={media.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {media.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all">
                          <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
                        </div>
                      )}
                      {media.duration && (
                        <Badge className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs">
                          {media.duration}
                        </Badge>
                      )}
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-orange-600">{media.type}</Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">by {media.author}</span>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Bookmark className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Share2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <h3 className="font-bold mb-2 text-orange-400 group-hover:text-orange-300 transition-colors line-clamp-2">
                        {media.title}
                      </h3>
                      <div className="flex justify-between text-sm text-gray-300">
                        <span className="flex items-center">
                          <Heart className="h-4 w-4 mr-1 text-red-400" /> {media.likes.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1 text-blue-400" /> {media.comments}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1 text-green-400" />
                          {media.views > 1000 ? `${(media.views / 1000).toFixed(1)}k` : media.views}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="tf2-card rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4 text-orange-400 flex items-center">
                    <Star className="h-6 w-6 mr-2" />
                    Featured Creators
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        name: "SFMAnimator",
                        type: "SFM Videos",
                        avatar: "/images/user-avatar-1.png",
                        followers: "12.5k",
                        uploads: 89,
                      },
                      {
                        name: "ArtistPyro",
                        type: "Fan Art",
                        avatar: "/images/user-avatar-2.png",
                        followers: "8.7k",
                        uploads: 156,
                      },
                      {
                        name: "MemeLord",
                        type: "TF2 Memes",
                        avatar: "/images/user-avatar-3.png",
                        followers: "15.2k",
                        uploads: 234,
                      },
                      {
                        name: "EngineerGaming",
                        type: "Gameplay Videos",
                        avatar: "/images/user-avatar-1.png",
                        followers: "6.9k",
                        uploads: 67,
                      },
                    ].map((creator, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 hover:bg-gray-800 rounded-lg cursor-pointer transition-colors group"
                      >
                        <img
                          src={creator.avatar || "/placeholder.svg"}
                          alt={creator.name}
                          className="w-12 h-12 rounded-full mr-4 border-2 border-orange-500 group-hover:scale-105 transition-transform"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold group-hover:text-orange-400 transition-colors">{creator.name}</h3>
                          <div className="flex items-center text-sm text-gray-300">
                            <span className="mr-4">{creator.type}</span>
                            <span className="text-orange-400">{creator.followers} followers</span>
                          </div>
                          <span className="text-xs text-gray-400">{creator.uploads} uploads</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tf2-card rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4 text-orange-400">Trending Media</h2>
                  <div className="space-y-3">
                    {[
                      { title: "TF2 Winter Update Trailer", views: "45.2k", type: "Video" },
                      { title: "Epic Spy Montage 2023", views: "32.1k", type: "Video" },
                      { title: "Community Map Showcase", views: "28.7k", type: "Screenshot" },
                      { title: "Unusual Hat Collection", views: "24.3k", type: "Screenshot" },
                      { title: "SFM Animation Contest", views: "19.8k", type: "SFM" },
                    ].map((trend, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
                      >
                        <div>
                          <span className="font-medium text-orange-400">{trend.title}</span>
                          <div className="text-xs text-gray-400">{trend.type}</div>
                        </div>
                        <span className="text-sm text-gray-400">{trend.views} views</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* News Page */}
        {currentPage === "news" && (
          <div className="page-transition container mx-auto px-4">
            <section className="mb-8">
              <h1 className="text-3xl font-bold mb-6 border-b border-orange-500 pb-2 flex items-center">
                <BookOpen className="h-8 w-8 mr-3 text-orange-400" />
                TF2 News & Updates
              </h1>

              <div className="flex flex-wrap gap-4 mb-6">
                <Button className="tf2-btn">All News</Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                  Game Updates
                </Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                  Community
                </Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                  Esports
                </Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                  Interviews
                </Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                  Patch Notes
                </Button>
              </div>

              {/* Featured News */}
              <div className="tf2-card rounded-lg overflow-hidden mb-8 relative">
                <Badge className="absolute top-4 left-4 bg-red-600 z-10 animate-pulse">BREAKING</Badge>
                <img src="/images/tf2-steam-workshop.png" alt="Featured News" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <Badge className="bg-orange-600">Major Update</Badge>
                    <span className="text-sm text-gray-300">2 hours ago</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">
                    TF2 Winter Update 2023 Released
                  </h2>
                  <p className="text-lg mb-4 text-gray-200">
                    Valve has released the highly anticipated Winter 2023 update for Team Fortress 2, bringing new maps,
                    cosmetics, weapons, and major balance changes to the game.
                  </p>
                  <p className="mb-6 text-gray-300">
                    The update includes three new community-made maps, over 100 new cosmetic items, weapon rebalances
                    for all classes, and the return of several classic game modes with modern improvements.
                  </p>
                  <div className="flex gap-4">
                    <Button className="tf2-btn">Read Full Article</Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                      <Download className="h-4 w-4 mr-2" />
                      Download Update
                    </Button>
                  </div>
                </div>
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Community Workshop Spotlight",
                    category: "Community",
                    date: "6 hours ago",
                    description:
                      "Highlighting the best community-created content from this month's workshop submissions.",
                    image: "/images/tf2-community-art.png",
                    author: "TF2 Team",
                    readTime: "3 min read",
                  },
                  {
                    title: "Competitive Season 9 Begins",
                    category: "Esports",
                    date: "1 day ago",
                    description:
                      "New competitive season launches with updated maps, rules, and prize pools for all skill levels.",
                    image: "/images/tf2-competitive-match.png",
                    author: "Competitive Team",
                    readTime: "5 min read",
                  },
                  {
                    title: "Anti-Cheat System Improvements",
                    category: "Security",
                    date: "2 days ago",
                    description: "Latest improvements to VAC and community reporting systems to ensure fair gameplay.",
                    image: "/images/tf2-server-browser.png",
                    author: "Security Team",
                    readTime: "4 min read",
                  },
                  {
                    title: "Map Maker Interview: cp_steel Creator",
                    category: "Interview",
                    date: "3 days ago",
                    description: "Exclusive interview with the creator of one of TF2's most iconic and complex maps.",
                    image: "/images/tf2-maps-collection.png",
                    author: "Community Manager",
                    readTime: "8 min read",
                  },
                  {
                    title: "Halloween Event Recap",
                    category: "Events",
                    date: "1 week ago",
                    description:
                      "Looking back at this year's Scream Fortress event and community participation statistics.",
                    image: "/images/tf2-tournament-live.png",
                    author: "Event Team",
                    readTime: "6 min read",
                  },
                  {
                    title: "Economy Update: Trading Changes",
                    category: "Economy",
                    date: "1 week ago",
                    description:
                      "Important changes to the trading system and marketplace to improve security and user experience.",
                    image: "/images/tf2-item-showcase.png",
                    author: "Economy Team",
                    readTime: "7 min read",
                  },
                ].map((news, index) => (
                  <div key={index} className="tf2-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-black bg-opacity-75 text-white text-xs">{news.readTime}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <Badge className="bg-orange-600">{news.category}</Badge>
                        <span className="text-sm text-gray-400">{news.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{news.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">by {news.author}</span>
                        <div className="flex space-x-2">
                          <Button variant="ghost" className="text-orange-400 hover:text-orange-300 p-0 text-sm">
                            Read More
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* News Archive & Trending */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="tf2-card rounded-lg p-6 lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-4 text-orange-400">News Archive</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "TF2 Celebrates 16th Anniversary",
                        date: "October 10, 2023",
                        description: "Looking back at 16 years of Team Fortress 2 and its impact on gaming.",
                        category: "Anniversary",
                      },
                      {
                        title: "Summer Event Results",
                        date: "September 15, 2023",
                        description: "Complete results and statistics from the Summer 2023 community event.",
                        category: "Events",
                      },
                      {
                        title: "New Community Server Features",
                        date: "August 28, 2023",
                        description: "Enhanced tools and features for community server administrators.",
                        category: "Community",
                      },
                      {
                        title: "Weapon Balance Update",
                        date: "August 10, 2023",
                        description: "Comprehensive weapon balance changes based on community feedback.",
                        category: "Balance",
                      },
                      {
                        title: "Meet the Community: Top Contributors",
                        date: "July 22, 2023",
                        description: "Spotlighting the most active and helpful community members.",
                        category: "Community",
                      },
                    ].map((news, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-700 pb-4 hover:bg-gray-800 p-3 rounded-lg transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-orange-400 hover:text-orange-300 cursor-pointer">
                            {news.title}
                          </h3>
                          <Badge className="bg-gray-700 text-xs ml-2">{news.category}</Badge>
                        </div>
                        <p className="text-sm text-gray-300 mb-2">{news.description}</p>
                        <span className="text-xs text-gray-400">{news.date}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white">Load More Articles</Button>
                </div>

                <div className="tf2-card rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4 text-orange-400">Trending Topics</h2>
                  <div className="space-y-3">
                    {[
                      { topic: "#WinterUpdate2023", posts: "2.4k posts" },
                      { topic: "#CompetitiveTF2", posts: "1.8k posts" },
                      { topic: "#CommunityMaps", posts: "1.2k posts" },
                      { topic: "#TF2Anniversary", posts: "987 posts" },
                      { topic: "#WorkshopSpotlight", posts: "756 posts" },
                    ].map((trend, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
                      >
                        <span className="font-medium text-orange-400">{trend.topic}</span>
                        <span className="text-sm text-gray-400">{trend.posts}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-bold mb-4 text-orange-400">Newsletter</h3>
                    <p className="text-sm text-gray-300 mb-4">Stay updated with the latest TF2 news and updates.</p>
                    <div className="flex mb-4">
                      <Input
                        placeholder="Your email"
                        className="bg-gray-700 border-gray-600 text-white rounded-r-none"
                      />
                      <Button className="tf2-btn rounded-l-none">Subscribe</Button>
                    </div>
                    <p className="text-xs text-gray-400">Weekly digest of the most important TF2 news and updates.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Trading Page */}
        {currentPage === "trading" && (
          <div className="page-transition container mx-auto px-4">
            <section className="mb-8">
              <h1 className="text-3xl font-bold mb-6 border-b border-orange-500 pb-2 flex items-center">
                <Trophy className="h-8 w-8 mr-3 text-orange-400" />
                TF2 Trading Hub
              </h1>

              {/* Enhanced Marketplace Overview */}
              <div className="tf2-card rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                      <Target className="h-6 w-6 mr-2 text-orange-400" />
                      Secure Trading Marketplace
                    </h2>
                    <p className="mb-4 text-gray-300">
                      The most secure and comprehensive TF2 trading platform. Trade with confidence using our advanced
                      security features, real-time price tracking, and verified user system.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-orange-600 to-red-600 p-4 rounded-lg">
                        <div className="text-3xl font-bold mb-2">24,458</div>
                        <div className="text-sm">Items Listed</div>
                        <div className="text-xs text-orange-200 mt-1">↑ 12% today</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-600 to-teal-600 p-4 rounded-lg">
                        <div className="text-3xl font-bold mb-2">5,279</div>
                        <div className="text-sm">Active Traders</div>
                        <div className="text-xs text-green-200 mt-1">↑ 8% today</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-lg">
                        <div className="text-3xl font-bold mb-2">1,892</div>
                        <div className="text-sm">Trades Today</div>
                        <div className="text-xs text-blue-200 mt-1">↑ 15% today</div>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-600 to-orange-600 p-4 rounded-lg">
                        <div className="text-3xl font-bold mb-2">100%</div>
                        <div className="text-sm">Secure Trading</div>
                        <div className="text-xs text-yellow-200 mt-1">Guaranteed</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button className="tf2-btn">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Listing
                      </Button>
                      <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                        <Filter className="h-4 w-4 mr-2" />
                        Browse Items
                      </Button>
                      <Button variant="outline" className="border-orange-600 hover:bg-orange-700">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Price Trends
                      </Button>
                    </div>
                  </div>

                  <div className="md:w-80">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                      <BarChart3 className="h-6 w-6 mr-2 text-orange-400" />
                      Quick Price Check
                    </h2>
                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                      <div className="relative mb-4">
                        <Input
                          placeholder="Search for an item..."
                          className="bg-gray-700 border-gray-500 text-white pr-10"
                        />
                        <Button variant="ghost" size="icon" className="absolute right-1 top-1 h-8 w-8">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-gray-300 mb-2">Popular searches:</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-gray-700 text-xs cursor-pointer hover:bg-gray-600">
                          Unusual Team Captain
                        </Badge>
                        <Badge variant="secondary" className="bg-gray-700 text-xs cursor-pointer hover:bg-gray-600">
                          Australium Rocket Launcher
                        </Badge>
                        <Badge variant="secondary" className="bg-gray-700 text-xs cursor-pointer hover:bg-gray-600">
                          Strange Knife
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm text-gray-300 space-y-2">
                      <p className="flex items-center">
                        <Activity className="h-4 w-4 mr-2 text-orange-400" /> Real-time market prices
                      </p>
                      <p className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-orange-400" /> Verified item authenticity
                      </p>
                      <p className="flex items-center">
                        <BarChart3 className="h-4 w-4 mr-2 text-orange-400" /> Price history & trends
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Character Category Section */}
              <div className="tf2-card rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-orange-400" />
                  Browse by Character
                </h2>
                <div className="flex justify-center">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {tf2Characters.map((character, index) => (
                      <div
                        key={character.name}
                        className="flex-shrink-0 text-center cursor-pointer transition-all duration-300 ease-in-out character-container"
                        onMouseEnter={() => setHoveredCharacter(index)}
                        onMouseLeave={() => setHoveredCharacter(null)}
                      >
                        <div
                          className={`
                          relative mb-3 transition-all duration-300 ease-in-out
                          ${getCharacterScale(index)}
                        `}
                        >
                          <div
                            className={`
                            w-24 h-24 rounded-full border-4 overflow-hidden transition-all duration-300 character-border
                            ${getCharacterBorder(index)}
                          `}
                          >
                            <img
                              src={character.image || "/placeholder.svg"}
                              alt={character.name}
                              className={`w-full h-full object-cover transition-all duration-300 character-image ${
                                hoveredCharacter === index ? "active" : ""
                              } ${getCharacterFilter(index)}`}
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg?height=120&width=120"
                              }}
                            />
                          </div>
                          {hoveredCharacter === index && (
                            <div className="absolute inset-0 rounded-full border-4 border-orange-500 animate-pulse" />
                          )}
                        </div>

                        <div
                          className={`
                          transition-colors duration-300
                          ${getTextColor(index)}
                        `}
                        >
                          <h4 className="font-bold text-sm mb-2">{character.name}</h4>
                          {hoveredCharacter === index && (
                            <div className="text-xs text-white space-y-1 animate-fade-in bg-gray-800 p-3 rounded-lg">
                              <div className="flex items-center justify-between">
                                <span>Bag Items:</span>
                                <span className="text-orange-400">{character.bagItems}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span>For Sale:</span>
                                <span className="text-green-400">{character.saleItems}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span>In Alishta:</span>
                                <span className="text-blue-400">{character.alishtaItems}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span>Swap Items:</span>
                                <span className="text-purple-400">{character.swapItems}</span>
                              </div>
                              <div className="border-t border-gray-600 pt-2 mt-2">
                                <div className="flex items-center justify-between">
                                  <span>Win Rate:</span>
                                  <span className="text-yellow-400">{character.winRate}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span>Play Time:</span>
                                  <span className="text-cyan-400">{character.playTime}</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trading Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="tf2-card rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Star className="h-6 w-6 mr-2 text-orange-400" />
                    Featured Items
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Unusual Team Captain",
                        price: "$450-$500",
                        effect: "Sunbeams Effect",
                        image: "/images/unusual-hat.jpg",
                        trend: "↑ 5%",
                        trendColor: "text-green-400",
                      },
                      {
                        name: "Australium Rocket Launcher",
                        price: "$60-$65",
                        effect: "Factory New",
                        image: "/images/australium-weapon.jpg",
                        trend: "↓ 2%",
                        trendColor: "text-red-400",
                      },
                      {
                        name: "Strange Professional Killstreak Knife",
                        price: "$80-$85",
                        effect: "Hot Rod Sheen",
                        image: "/images/strange-weapon.jpg",
                        trend: "↑ 8%",
                        trendColor: "text-green-400",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 hover:bg-gray-800 rounded-lg cursor-pointer transition-colors group"
                      >
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg mr-4 group-hover:scale-105 transition-transform"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold group-hover:text-orange-400 transition-colors">{item.name}</h3>
                          <div className="flex items-center text-sm">
                            <span className="text-orange-400 mr-2">{item.price}</span>
                            <span className={`${item.trendColor} mr-2`}>{item.trend}</span>
                          </div>
                          <span className="text-gray-400 text-sm">{item.effect}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tf2-card rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Activity className="h-6 w-6 mr-2 text-orange-400" />
                    Live Trading Activity
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        item: "Burning Flames Killer Exclusive",
                        price: "$320",
                        status: "Completed",
                        statusColor: "text-green-400",
                        time: "2m ago",
                      },
                      {
                        item: "Strange Festivized Sniper Rifle",
                        price: "$25",
                        status: "Pending",
                        statusColor: "text-yellow-400",
                        time: "5m ago",
                      },
                      {
                        item: "Haunted Ghosts Tough Stuff Muffs",
                        price: "$180",
                        status: "Completed",
                        statusColor: "text-green-400",
                        time: "8m ago",
                      },
                      {
                        item: "Strange Kritzkrieg",
                        price: "$95",
                        status: "Cancelled",
                        statusColor: "text-red-400",
                        time: "12m ago",
                      },
                    ].map((trade, index) => (
                      <div key={index} className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-sm">{trade.item}</h3>
                          <span className="font-bold text-orange-400">{trade.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`text-xs ${trade.statusColor} flex items-center`}>
                            <div
                              className={`w-2 h-2 rounded-full mr-2 ${trade.statusColor.replace("text-", "bg-")}`}
                            ></div>
                            {trade.status}
                          </span>
                          <span className="text-xs text-gray-400">{trade.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tf2-card rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <BookOpen className="h-6 w-6 mr-2 text-orange-400" />
                    Trading Guide
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Getting Started",
                        description: "Learn the basics of TF2 trading and how to get started safely.",
                        icon: Target,
                        color: "text-green-400",
                      },
                      {
                        title: "Price Checking",
                        description: "How to accurately determine the value of your items.",
                        icon: BarChart3,
                        color: "text-blue-400",
                      },
                      {
                        title: "Avoiding Scams",
                        description: "Essential tips to protect yourself from common trading scams.",
                        icon: Star,
                        color: "text-red-400",
                      },
                      {
                        title: "Advanced Trading",
                        description: "Strategies for experienced traders looking to maximize profits.",
                        icon: Trophy,
                        color: "text-purple-400",
                      },
                    ].map((tip, index) => (
                      <div
                        key={index}
                        className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center mb-2">
                          <tip.icon className={`h-4 w-4 mr-2 ${tip.color}`} />
                          <h3 className="font-bold text-orange-400 text-sm">{tip.title}</h3>
                        </div>
                        <p className="text-xs text-gray-300">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Discussion Page */}
        {currentPage === "discussion" && (
          <div className="page-transition container mx-auto px-4">
            <section className="mb-8">
              <h1 className="text-3xl font-bold mb-6 border-b border-orange-500 pb-2 flex items-center">
                <MessageCircle className="h-8 w-8 mr-3 text-orange-400" />
                TF2 Community Discussion
              </h1>

              <div className="tf2-card rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 text-orange-400 flex items-center">
                      <Users className="h-6 w-6 mr-2" />
                      Community Forums
                    </h2>
                    <p className="mb-4 text-gray-300">
                      Join the conversation with thousands of TF2 players. Discuss strategies, share experiences, get
                      help, and connect with the community.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="text-3xl font-bold mb-2 text-blue-400">456</div>
                        <div className="text-sm text-gray-300">Active Discussions</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="text-3xl font-bold mb-2 text-orange-400">28,587</div>
                        <div className="text-sm text-gray-300">Total Threads</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="text-3xl font-bold mb-2 text-orange-400">245,892</div>
                        <div className="text-sm text-gray-300">Total Posts</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="text-3xl font-bold mb-2 text-orange-400">12,847</div>
                        <div className="text-sm text-gray-300">Members</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="text-3xl font-bold mb-2 text-green-400">1,567</div>
                        <div className="text-sm text-gray-300">Online Now</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button className="tf2-btn">
                        <Plus className="h-4 w-4 mr-2" />
                        New Thread
                      </Button>
                      <Button variant="outline" className="border-gray-600 hover:bg-gray-700">
                        <Filter className="h-4 w-4 mr-2" />
                        Search Forums
                      </Button>
                      <Button variant="outline" className="border-orange-600 hover:bg-orange-700">
                        <Star className="h-4 w-4 mr-2" />
                        Popular Topics
                      </Button>
                    </div>
                  </div>

                  <div className="md:w-80">
                    <h2 className="text-2xl font-bold mb-4 text-orange-400">Quick Access</h2>
                    <div className="space-y-2">
                      {[
                        { icon: BookOpen, title: "Forum Rules & Guidelines", color: "text-blue-400" },
                        { icon: Trophy, title: "Competitive Discussion", color: "text-yellow-400" },
                        { icon: Star, title: "Creative Workshop", color: "text-purple-400" },
                        { icon: Users, title: "Help & Tutorials", color: "text-green-400" },
                        { icon: MessageCircle, title: "General Chat", color: "text-orange-400" },
                      ].map((link, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors group"
                        >
                          <div
                            className={`${link.color} w-8 h-8 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}
                          >
                            <link.icon className="h-4 w-4" />
                          </div>
                          <span className="group-hover:text-orange-400 transition-colors">{link.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="tf2-card rounded-lg p-6 lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-4 text-orange-400 flex items-center">
                    <Flame className="h-6 w-6 mr-2" />
                    Hot Topics
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Winter Update 2023 Discussion & Feedback",
                        author: "TF2_UpdateBot",
                        date: "2 hours ago",
                        description:
                          "Share your thoughts on the latest Winter 2023 update, new maps, weapons, and balance changes...",
                        comments: 247,
                        views: 3200,
                        category: "Updates",
                        isPinned: true,
                      },
                      {
                        title: "Competitive Season 9 Meta Discussion",
                        author: "CompetitiveGuru",
                        date: "5 hours ago",
                        description:
                          "Analyzing the current 6v6 meta, team compositions, and strategy discussions for the new season...",
                        comments: 89,
                        views: 1890,
                        category: "Competitive",
                        isHot: true,
                      },
                      {
                        title: "Community Map Showcase: cp_steelworks",
                        author: "MapMaker2023",
                        date: "1 day ago",
                        description:
                          "Presenting my latest community map creation - a steel-themed control point map with unique mechanics...",
                        comments: 156,
                        views: 2100,
                        category: "Maps",
                      },
                      {
                        title: "Trading Scam Alert: New Phishing Method",
                        author: "SecurityMod",
                        date: "1 day ago",
                        description: "WARNING: New phishing scam targeting TF2 traders. Please read and stay safe...",
                        comments: 78,
                        views: 1567,
                        category: "Trading",
                        isImportant: true,
                      },
                      {
                        title: "Best Loadouts for Each Class - 2023 Edition",
                        author: "LoadoutExpert",
                        date: "2 days ago",
                        description:
                          "Updated guide for the most effective weapon loadouts for each of the 9 classes in current meta...",
                        comments: 203,
                        views: 4500,
                        category: "Strategy",
                      },
                    ].map((thread, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-700 pb-4 hover:bg-gray-800 p-4 rounded-lg transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {thread.isPinned && <Badge className="bg-green-600 text-xs">PINNED</Badge>}
                            {thread.isHot && <Badge className="bg-red-600 text-xs">HOT</Badge>}
                            {thread.isImportant && <Badge className="bg-yellow-600 text-xs">IMPORTANT</Badge>}
                            <Badge className="bg-orange-600 text-xs">{thread.category}</Badge>
                          </div>
                          <span className="text-sm text-gray-400">{thread.date}</span>
                        </div>
                        <h3 className="font-bold text-lg text-orange-400 hover:text-orange-300 cursor-pointer mb-2">
                          {thread.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-3">{thread.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">by {thread.author}</span>
                          <div className="flex space-x-4 text-sm text-gray-400">
                            <span className="flex items-center">
                              <MessageCircle className="h-4 w-4 mr-1" /> {thread.comments}
                            </span>
                            <span className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" /> {thread.views.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white">View All Discussions</Button>
                </div>

                <div className="tf2-card rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4 text-orange-400">Forum Categories</h2>
                  <div className="space-y-3">
                    {[
                      {
                        title: "General Discussion",
                        threads: 8452,
                        posts: 64231,
                        icon: MessageCircle,
                        color: "text-blue-400",
                      },
                      {
                        title: "Gameplay & Strategies",
                        threads: 6784,
                        posts: 52987,
                        icon: Target,
                        color: "text-green-400",
                      },
                      {
                        title: "Competitive Play",
                        threads: 3215,
                        posts: 28741,
                        icon: Trophy,
                        color: "text-yellow-400",
                      },
                      { title: "Trading & Economy", threads: 4562, posts: 37896, icon: Star, color: "text-purple-400" },
                      {
                        title: "Creative Workshop",
                        threads: 1987,
                        posts: 15632,
                        icon: Gamepad2,
                        color: "text-pink-400",
                      },
                      {
                        title: "Help & Support",
                        threads: 2345,
                        posts: 18765,
                        icon: BookOpen,
                        color: "text-orange-400",
                      },
                    ].map((category, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors group"
                      >
                        <div className="flex items-center mb-2">
                          <category.icon
                            className={`h-5 w-5 mr-2 ${category.color} group-hover:scale-110 transition-transform`}
                          />
                          <h3 className="font-bold text-orange-400 group-hover:text-orange-300">{category.title}</h3>
                        </div>
                        <p className="text-sm text-gray-300">
                          {category.threads.toLocaleString()} threads • {category.posts.toLocaleString()} posts
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-bold mb-4 text-orange-400">Online Members</h3>
                    <div className="space-y-2">
                      {[
                        { name: "TF2Master", status: "online", avatar: "/images/user-avatar-1.png" },
                        { name: "PyroMain2023", status: "online", avatar: "/images/user-avatar-2.png" },
                        { name: "CompetitiveAce", status: "away", avatar: "/images/user-avatar-3.png" },
                        { name: "TradingKing", status: "online", avatar: "/images/user-avatar-1.png" },
                      ].map((member, index) => (
                        <div
                          key={index}
                          className="flex items-center p-2 hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          <div className="relative">
                            <img
                              src={member.avatar || "/placeholder.svg"}
                              alt={member.name}
                              className="w-8 h-8 rounded-full mr-3"
                            />
                            <div
                              className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${
                                member.status === "online" ? "bg-green-500" : "bg-yellow-500"
                              }`}
                            ></div>
                          </div>
                          <span className="text-sm">{member.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="tf2-card rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-orange-400 flex items-center">
                  <Activity className="h-6 w-6 mr-2" />
                  Recent Forum Activity
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 px-4">Thread</th>
                        <th className="text-left py-2 px-4">Author</th>
                        <th className="text-left py-2 px-4">Category</th>
                        <th className="text-left py-2 px-4">Replies</th>
                        <th className="text-left py-2 px-4">Last Post</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          thread: "Winter Update Feedback",
                          author: "TF2Fan",
                          category: "Updates",
                          replies: 124,
                          lastPost: "2 minutes ago",
                        },
                        {
                          thread: "Best Medic Loadout?",
                          author: "MedicMain",
                          category: "Strategy",
                          replies: 87,
                          lastPost: "15 minutes ago",
                        },
                        {
                          thread: "New Map Strategies",
                          author: "Strategist",
                          category: "Maps",
                          replies: 42,
                          lastPost: "1 hour ago",
                        },
                        {
                          thread: "Trading Tips for Beginners",
                          author: "TradeMaster",
                          category: "Trading",
                          replies: 36,
                          lastPost: "3 hours ago",
                        },
                        {
                          thread: "SFM Animation Showcase",
                          author: "Animator",
                          category: "Creative",
                          replies: 29,
                          lastPost: "5 hours ago",
                        },
                      ].map((activity, index) => (
                        <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                          <td className="py-2 px-4 font-medium hover:text-orange-400 cursor-pointer">
                            {activity.thread}
                          </td>
                          <td className="py-2 px-4">{activity.author}</td>
                          <td className="py-2 px-4">
                            <Badge className="bg-orange-600 text-xs">{activity.category}</Badge>
                          </td>
                          <td className="py-2 px-4">{activity.replies}</td>
                          <td className="py-2 px-4 text-gray-400">{activity.lastPost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Support Page */}
        {currentPage === "support" && (
          <div className="page-transition container mx-auto px-4">
            <section className="mb-8">
              <h1 className="text-3xl font-bold mb-6 border-b border-orange-500 pb-2 flex items-center">
                <Headphones className="h-8 w-8 mr-3 text-orange-400" />
                TF2 Support Center
              </h1>

              <div className="tf2-card rounded-lg p-6 mb-8 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/tf2-background.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 text-orange-400 flex items-center">
                    <Star className="h-6 w-6 mr-2" />
                    24/7 Premium Support
                  </h2>
                  <p className="mb-6 text-lg text-gray-300">
                    Our dedicated support team is ready to assist you with any TF2-related issues, trading problems, or
                    platform inquiries. Average response time:{" "}
                    <span className="text-orange-400 font-bold">90 seconds</span>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold mb-2 text-green-400">98.7%</div>
                      <div className="text-sm text-gray-300">Satisfaction Rate</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold mb-2 text-blue-400">90s</div>
                      <div className="text-sm text-gray-300">Avg Response Time</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold mb-2 text-orange-400">15/15</div>
                      <div className="text-sm text-gray-300">Agents Online</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold mb-2 text-purple-400">24/7</div>
                      <div className="text-sm text-gray-300">Always Available</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        icon: Trophy,
                        title: "Trading Support",
                        description:
                          "Scam reports, trade disputes, item recovery, marketplace assistance, and price verification.",
                        color: "text-orange-500",
                        stats: "2,847 cases resolved this month",
                        features: ["Scam Protection", "Item Recovery", "Trade Disputes", "Price Verification"],
                      },
                      {
                        icon: Headphones,
                        title: "Technical Support",
                        description:
                          "Platform issues, account problems, login difficulties, and technical troubleshooting.",
                        color: "text-blue-400",
                        stats: "99.2% issue resolution rate",
                        features: ["Account Recovery", "Login Issues", "Bug Reports", "Performance Help"],
                      },
                      {
                        icon: Users,
                        title: "Community Support",
                        description: "Report toxic behavior, cheaters, community violations, and moderation appeals.",
                        color: "text-purple-400",
                        stats: "24/7 community monitoring",
                        features: ["Player Reports", "Appeal Process", "Community Guidelines", "Moderation"],
                      },
                    ].map((support, index) => (
                      <div
                        key={index}
                        className="tf2-card rounded-lg p-6 bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer group"
                      >
                        <div className={`text-4xl mb-4 ${support.color} group-hover:scale-110 transition-transform`}>
                          <support.icon className="h-12 w-12 mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-center group-hover:text-orange-400 transition-colors">
                          {support.title}
                        </h3>
                        <p className="text-gray-300 text-center mb-4">{support.description}</p>
                        <div className="text-center mb-4">
                          <Badge className="bg-gray-700 text-xs">{support.stats}</Badge>
                        </div>
                        <div className="space-y-2">
                          {support.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-400">
                              <div
                                className={`w-2 h-2 rounded-full mr-2 ${support.color.replace("text-", "bg-")}`}
                              ></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="tf2-card rounded-lg p-6 bg-gray-800">
                      <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <Plus className="h-6 w-6 mr-2 text-orange-400" />
                        Submit Support Ticket
                      </h2>
                      <form className="space-y-4">
                        <div>
                          <label className="block text-gray-300 mb-2">Support Category</label>
                          <Select>
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="trading">Trading Issue</SelectItem>
                              <SelectItem value="technical">Technical Support</SelectItem>
                              <SelectItem value="account">Account Help</SelectItem>
                              <SelectItem value="report">Player Report</SelectItem>
                              <SelectItem value="billing">Billing & Payments</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">Priority Level</label>
                          <Select>
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low - General Question</SelectItem>
                              <SelectItem value="medium">Medium - Issue Affecting Usage</SelectItem>
                              <SelectItem value="high">High - Urgent Issue</SelectItem>
                              <SelectItem value="critical">Critical - Account Compromised</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">Subject</label>
                          <Input
                            placeholder="Brief description of your issue"
                            className="bg-gray-700 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">Detailed Description</label>
                          <textarea
                            rows={4}
                            placeholder="Please provide as much detail as possible about your issue..."
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">Attachments (Screenshots, logs, etc.)</label>
                          <Input type="file" multiple className="bg-gray-700 border-gray-600 text-white" />
                          <p className="text-xs text-gray-400 mt-1">
                            Max 5 files, 10MB each. Supported: PNG, JPG, TXT, LOG
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="urgent" className="rounded" />
                          <label htmlFor="urgent" className="text-sm text-gray-300">
                            This is an urgent issue requiring immediate attention
                          </label>
                        </div>
                        <Button className="tf2-btn w-full py-3 text-lg">
                          <Headphones className="h-4 w-4 mr-2" />
                          Submit Support Ticket
                        </Button>
                      </form>
                    </div>

                    <div className="space-y-6">
                      <div className="tf2-card rounded-lg p-6 bg-gradient-to-r from-orange-900/50 to-orange-800/50 border border-orange-700/50">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                          <BookOpen className="h-6 w-6 mr-2 text-orange-400" />
                          Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                          {[
                            {
                              question: "How do I recover scammed items?",
                              answer:
                                "If you've been scammed, immediately submit a ticket with trade history screenshots, chat logs, and the scammer's profile. While we investigate all reports, item recovery isn't always possible. Prevention is key - always verify trades carefully.",
                            },
                            {
                              question: "What's the average support response time?",
                              answer:
                                "Our average response time is 90 seconds for urgent issues and 24-48 hours for general inquiries. Premium members receive priority support with even faster response times.",
                            },
                            {
                              question: "How do I report a cheater or toxic player?",
                              answer:
                                "Submit a player report ticket with the player's SteamID, match details, and evidence (demos, screenshots). Our moderation team reviews all reports and takes appropriate action within 24 hours.",
                            },
                            {
                              question: "Can you help with Steam account issues?",
                              answer:
                                "For Steam account issues (hacking, recovery, VAC bans), contact Steam Support directly at help.steampowered.com. We can only assist with TF2 Community Hub specific issues.",
                            },
                            {
                              question: "How do I appeal a community ban?",
                              answer:
                                "Submit an appeal ticket with your case details and any relevant evidence. Appeals are reviewed by senior moderators within 48-72 hours. Be honest and provide all relevant information.",
                            },
                          ].map((faq, index) => (
                            <div key={index} className="border-b border-orange-700/50 pb-4 faq-item">
                              <h3
                                className="font-bold text-lg text-orange-300 mb-2 cursor-pointer flex justify-between items-center hover:text-orange-200 transition-colors"
                                onClick={() => toggleFAQ(index)}
                              >
                                <span>{faq.question}</span>
                                <ChevronRight
                                  className={`h-4 w-4 transform transition-transform duration-300 ${
                                    openFAQ === index ? "rotate-90" : ""
                                  }`}
                                />
                              </h3>
                              <div className={`faq-content text-gray-300 pl-4 ${openFAQ === index ? "open" : ""}`}>
                                <p>{faq.answer}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="tf2-card rounded-lg p-6 bg-gray-800">
                        <h3 className="text-lg font-bold mb-4 text-orange-400 flex items-center">
                          <Activity className="h-5 w-5 mr-2" />
                          Live Support Status
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                            <span className="flex items-center">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                              Trading Support
                            </span>
                            <Badge className="bg-green-600">Online</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                            <span className="flex items-center">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                              Technical Support
                            </span>
                            <Badge className="bg-green-600">Online</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                            <span className="flex items-center">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                              Community Moderation
                            </span>
                            <Badge className="bg-green-600">Online</Badge>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/50 to-blue-800/50 rounded-lg border border-blue-700/50">
                          <h4 className="font-bold text-blue-400 mb-2">Premium Support</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            Get priority support, faster response times, and dedicated agents.
                          </p>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            <Crown className="h-4 w-4 mr-2" />
                            Upgrade to Premium
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 border-t-2 border-orange-500 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/images/tf2-logo-original.png" alt="TF2 Logo" className="h-12 w-12 object-contain" />
                <div>
                  <h3 className="text-xl font-bold text-orange-400">TF2 Community Hub</h3>
                  <p className="text-sm text-gray-400">The Ultimate TF2 Experience</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The premier destination for Team Fortress 2 players worldwide. Join our community of over 50,000 active
                players for trading, tournaments, discussions, and more.
              </p>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Users className="h-5 w-5" />
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <Play className="h-5 w-5" />
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                    <Star className="h-5 w-5" />
                  </div>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Badge className="bg-green-600">
                  <Activity className="h-3 w-3 mr-1" />
                  All Systems Operational
                </Badge>
                <Badge className="bg-blue-600">
                  <Users className="h-3 w-3 mr-1" />
                  3,247 Online
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setCurrentPage("home")}
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("events")}
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("media")}
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"
                  >
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Media
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("news")}
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    News
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("trading")}
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"
                  >
                    <Trophy className="h-4 w-4 mr-2" />
                    Trading
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("discussion")}
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Discussion
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("support")}
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center"
                  >
                    <Headphones className="h-4 w-4 mr-2" />
                    Support
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-4">Community</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Steam Group
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Discord Server
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <Play className="h-4 w-4 mr-2" />
                    YouTube Channel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Reddit Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Wiki & Guides
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    TF2 Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Price Database
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Server Browser
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <Target className="h-4 w-4 mr-2" />
                    Competitive Stats
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <Gamepad2 className="h-4 w-4 mr-2" />
                    Workshop Items
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-lg font-bold text-orange-400 mb-3">Language</h4>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">🇺🇸 English</SelectItem>
                    <SelectItem value="tr">🇹🇷 Türkçe</SelectItem>
                    <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
                    <SelectItem value="fr">🇫🇷 Français</SelectItem>
                    <SelectItem value="es">🇪🇸 Español</SelectItem>
                    <SelectItem value="ru">🇷🇺 Русский</SelectItem>
                    <SelectItem value="pt">🇧🇷 Português</SelectItem>
                    <SelectItem value="it">🇮🇹 Italiano</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-4">Legal & Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    DMCA
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-gray-400 text-sm mb-2">Contact Us:</p>
                <p className="text-gray-400 text-sm">support@tf2hub.com</p>
                <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-500 text-sm">&copy; 2023 TF2 Community Hub. All rights reserved.</p>
                <p className="text-gray-600 text-xs mt-1">
                  Not affiliated with Valve Corporation or Steam. Team Fortress 2 is a trademark of Valve Corporation.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                  Cookie Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                  DMCA
                </a>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="flex justify-center items-center space-x-4 mb-4">
                <Badge className="bg-gray-800 text-gray-400">
                  <Activity className="h-3 w-3 mr-1" />
                  Server Status: Operational
                </Badge>
                <Badge className="bg-gray-800 text-gray-400">
                  <Clock className="h-3 w-3 mr-1" />
                  Uptime: 99.9%
                </Badge>
                <Badge className="bg-gray-800 text-gray-400">
                  <Users className="h-3 w-3 mr-1" />
                  {currentTime.toLocaleString()}
                </Badge>
              </div>
              <p className="text-xs text-gray-600">
                Made with ❤️ for the TF2 community • Powered by cutting-edge technology
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
