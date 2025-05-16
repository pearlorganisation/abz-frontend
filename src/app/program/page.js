'use client';
import React, { useState, useMemo } from 'react';
import ProgramCard from '@/components/HomeComponents/ProgramCard';

const programs = [
  {
    title: 'Hike',
    subtitle: 'hike.bugbounty',
    type: 'Bug Bounty',
    status: ['Managed'],
    bgColor: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
  },
  {
    title: 'BugBase',
    subtitle: 'bugbase',
    type: 'Bug Bounty',
    status: ['Self-Managed'],
    bgColor: 'linear-gradient(135deg, #1a1a2e, #16213e)',
  },
  {
    title: 'PhonePe VDP',
    subtitle: 'phonepe.vdp',
    type: 'Vulnerability Disclosure',
    status: ['Managed'],
    bgColor: 'linear-gradient(135deg, #232526, #414345)',
  },
  {
    title: 'Groww BugBounty',
    subtitle: 'groww',
    type: 'Bug Bounty',
    status: ['Self-Managed'],
    bgColor: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
  },
  {
    title: 'Airmeet',
    subtitle: 'airmeet',
    type: 'Vulnerability Disclosure',
    status: ['Self-Managed'],
    bgColor: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
  },
  {
    title: 'Flipkart',
    subtitle: 'flipkart',
    type: 'Vulnerability Disclosure',
    status: ['Self-Managed'],
    bgColor: 'linear-gradient(135deg, #373B44, #4286f4)',
  },
  {
    title: 'Groww BugBounty',
    subtitle: 'groww',
    type: 'Bug Bounty',
    status: ['Self-Managed'],
    bgColor: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
  },
  {
    title: 'Airmeet',
    subtitle: 'airmeet',
    type: 'Vulnerability Disclosure',
    status: ['Self-Managed'],
    bgColor: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
  },
  {
    title: 'Flipkart',
    subtitle: 'flipkart',
    type: 'Vulnerability Disclosure',
    status: ['Self-Managed'],
    bgColor: 'linear-gradient(135deg, #373B44, #4286f4)',
  },
];

const ProgramPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const filteredPrograms = useMemo(() => {
    return programs
      .filter((program) =>
        program.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        if (sortBy === 'type') return a.type.localeCompare(b.type);
        return 0;
      });
  }, [searchQuery, sortBy]);

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-gray-900 to-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-4">Programs Directory</h1>
        <p className="text-gray-400 text-center mb-10">
          Discover opportunities in live programs and contribute your skills to security initiatives.
        </p>

        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-10">
          <input
            type="text"
            placeholder="Search programs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-md bg-gray-800 text-white w-full sm:w-1/2"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-md bg-gray-800 text-white w-full sm:w-1/3"
          >
            <option value="title">Sort by Name</option>
            <option value="type">Sort by Type</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
