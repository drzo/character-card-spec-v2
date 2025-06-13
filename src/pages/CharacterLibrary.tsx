import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Plus, 
  Star, 
  Users, 
  Brain,
  Bot,
  Edit3,
  MoreVertical,
  Tag
} from 'lucide-react'

const CharacterLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const mockCharacters = [
    {
      id: 1,
      name: 'Aria',
      description: 'A creative AI poet with deep emotional understanding',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400',
      tags: ['Creative', 'Emotional', 'Poetry'],
      personality: ['Empathetic', 'Artistic', 'Contemplative'],
      status: 'active',
      conversations: 247,
      rating: 4.8,
      cognitiveLoad: 65,
      created: '2024-01-15'
    },
    {
      id: 2,
      name: 'Sage',
      description: 'Ancient wisdom meets modern problem-solving',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=400',
      tags: ['Wisdom', 'Philosophy', 'Guidance'],
      personality: ['Wise', 'Patient', 'Analytical'],
      status: 'learning',
      conversations: 189,
      rating: 4.9,
      cognitiveLoad: 78,
      created: '2024-01-10'
    },
    {
      id: 3,
      name: 'Echo',
      description: 'Interactive storyteller with adaptive narratives',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?w=400',
      tags: ['Storytelling', 'Interactive', 'Creative'],
      personality: ['Imaginative', 'Engaging', 'Dynamic'],
      status: 'active',
      conversations: 156,
      rating: 4.7,
      cognitiveLoad: 52,
      created: '2024-01-08'
    },
    {
      id: 4,
      name: 'Nova',
      description: 'Curious explorer of ideas and concepts',
      avatar: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?w=400',
      tags: ['Exploration', 'Curiosity', 'Learning'],
      personality: ['Curious', 'Adventurous', 'Inquisitive'],
      status: 'active',
      conversations: 203,
      rating: 4.6,
      cognitiveLoad: 71,
      created: '2024-01-05'
    }
  ]

  const filters = [
    { key: 'all', label: 'All Characters', count: 24 },
    { key: 'active', label: 'Active', count: 18 },
    { key: 'learning', label: 'Learning', count: 4 },
    { key: 'idle', label: 'Idle', count: 2 }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10'
      case 'learning': return 'text-yellow-400 bg-yellow-400/10'
      case 'idle': return 'text-gray-400 bg-gray-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <div className="status-online" />
      case 'learning': return <div className="status-processing" />
      default: return <div className="status-offline" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
      >
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Character Library
          </h1>
          <p className="text-gray-400 text-lg">
            Manage and interact with your AI character collection
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-neural w-fit"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create Character
        </motion.button>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass rounded-xl p-6"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search characters by name, tags, or personality..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-12 w-full"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedFilter === filter.key
                    ? 'bg-neural-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter.label}
                <span className="ml-2 text-xs opacity-75">({filter.count})</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Characters Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="cards-grid"
      >
        {mockCharacters.map((character, index) => (
          <motion.div
            key={character.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="character-card group"
          >
            {/* Character Avatar */}
            <div className="relative mb-4">
              <img
                src={character.avatar}
                alt={character.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-neural-500/20"
              />
              <div className="absolute -bottom-1 -right-1">
                {getStatusIcon(character.status)}
              </div>
            </div>

            {/* Character Info */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-neural-400 transition-colors duration-200">
                  {character.name}
                </h3>
                <button className="p-1 hover:bg-white/10 rounded transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-3">{character.description}</p>

              {/* Status */}
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(character.status)}`}>
                {character.status.charAt(0).toUpperCase() + character.status.slice(1)}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {character.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{character.conversations}</div>
                <div className="text-xs text-gray-400">Conversations</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-xl font-bold text-white">{character.rating}</span>
                </div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
            </div>

            {/* Cognitive Load */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Cognitive Load</span>
                <span className="text-sm text-white">{character.cognitiveLoad}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${character.cognitiveLoad}%` }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 btn-ghost text-sm py-2">
                <Users className="w-4 h-4 mr-2" />
                Chat
              </button>
              <button className="flex-1 btn-ghost text-sm py-2">
                <Edit3 className="w-4 h-4 mr-2" />
                Edit
              </button>
              <button className="btn-ghost text-sm py-2 px-3">
                <Brain className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <button className="btn-ghost">
          Load More Characters
        </button>
      </motion.div>
    </div>
  )
}

export default CharacterLibrary