"use client"

import { useState } from 'react'
import { ChevronLeft, Heart, Menu } from 'lucide-react'

export default function Component() {
  const [currentScreen, setCurrentScreen] = useState('onboarding')

  const screens = {
    onboarding: (
      <div className="bg-gray-900 text-white h-[844px] w-[390px] rounded-[60px] overflow-hidden p-8 flex flex-col justify-between">
        <div className="pt-12">
          <div className="text-sm">9:41</div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="w-64 h-64 bg-gray-800 rounded-full mb-8"></div>
          <h1 className="text-2xl font-bold mb-4">Read Your Favourite Books</h1>
          <p className="text-gray-400 mb-8">We Have Put Together All The Books So That You Can Find And Enjoy All The Books.</p>
          <div className="flex space-x-2 mb-8">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
          </div>
        </div>
        <button 
          className="bg-white text-black rounded-full py-3 px-12 font-semibold"
          onClick={() => setCurrentScreen('home')}
        >
          Skip
        </button>
      </div>
    ),
    home: (
      <div className="bg-gray-900 text-white h-[844px] w-[390px] rounded-[60px] overflow-hidden p-8">
        <div className="flex justify-between items-center mb-8">
          <Menu className="w-6 h-6" />
          <div className="flex-1 text-center">Hello Jimmy!</div>
          <div className="w-10 h-10 bg-yellow-500 rounded-full"></div>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {['Motivation - self help', 'Nature', 'Arts', 'Sci-fi', 'Psychology', 'Travel', 'Comedy', 'Fiction', 'Money & Investment'].map((category) => (
            <span key={category} className={`px-4 py-2 rounded-full text-sm ${category === 'Motivation - self help' || category === 'Travel' || category === 'Fiction' ? 'bg-white text-black' : 'bg-gray-800'}`}>
              {category}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-4">Popular Books</h2>
        <div className="flex space-x-4 mb-8">
          {['The Song of A...', 'Sorry For Your...', 'The Man In Th...'].map((book, index) => (
            <div key={book} className="w-24 h-36 bg-gray-800 rounded-lg flex items-end p-2" onClick={() => index === 0 && setCurrentScreen('detail')}>
              <div className="text-xs">{book}</div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-4">Top Authors</h2>
        <div className="flex space-x-4">
          {['J K Rowling', 'Daniel Steel', 'Nicholas Sparks', 'Nora Rober'].map((author) => (
            <div key={author} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full mb-2"></div>
              <div className="text-xs text-center">{author}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    detail: (
      <div className="bg-gray-900 text-white h-[844px] w-[390px] rounded-[60px] overflow-hidden p-8">
        <div className="flex justify-between items-center mb-8">
          <ChevronLeft className="w-6 h-6" onClick={() => setCurrentScreen('home')} />
          <div className="flex-1 text-center">Book Detail</div>
          <Heart className="w-6 h-6" />
        </div>
        <div className="flex justify-center mb-8">
          <div className="w-48 h-72 bg-gray-800 rounded-lg"></div>
        </div>
        <div className="text-center mb-4">
          <div className="text-yellow-500 text-sm mb-2">#3 On Trending</div>
          <h2 className="text-2xl font-bold mb-1">The Song Of Achilles</h2>
          <div className="text-sm text-gray-400 mb-2">By Madeline Miller</div>
          <div className="text-sm text-gray-400">Published August 28th 2012</div>
        </div>
        <div className="flex justify-between mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold">5.1M</div>
            <div className="text-sm text-gray-400">Reads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">37.6K</div>
            <div className="text-sm text-gray-400">Likes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">25</div>
            <div className="text-sm text-gray-400">Episodes</div>
          </div>
        </div>
        <p className="text-sm text-gray-400 mb-8">
          Achilles, "The Best Of All The Greeks," Son Of The Cruel Sea Goddess Thetis And The Legendary King Peleus, Is Strong, Swift, And Beautiful, Irresistible To All Who Meet Him. Patroclus Is An Awkward Young Prince, Exiled From His Homeland After An Act Of Shocking Violence. Brought Together By Chance, They Forge An Inseparable Bond, Despite Risking The Gods' Wrath. They Are Trained By The Centaur Chiron In The Arts Of War And Medicine, But When Word Comes That Helen Of Sparta Has Been...
        </p>
        <div className="flex space-x-4">
          <button className="flex-1 bg-gray-800 text-white rounded-full py-3 font-semibold">Read Book</button>
          <button className="flex-1 bg-white text-black rounded-full py-3 font-semibold">Play Book</button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center">
      {/* @ts-ignore */}
      {screens[currentScreen]}
    </div>
  )
}