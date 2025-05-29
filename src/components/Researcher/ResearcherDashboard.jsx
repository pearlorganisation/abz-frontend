"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  AiOutlineHome,
  AiOutlineCode,
  AiOutlineFileText,
  AiOutlineTrophy,
  AiOutlineGift,
  AiOutlineThunderbolt,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineBell,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";
import { FaBug } from "react-icons/fa";

export default function ResearcherDashboard() {
  const [activeTab, setActiveTab] = useState("Announcements");
  const [activeSidebarItem, setActiveSidebarItem] = useState("Dashboard");
  const dashboardRef = useRef(null);
  const welcomeCardRef = useRef(null);
  const statsRef = useRef(null);

  const sidebarItems = [
    { name: "Dashboard", icon: AiOutlineHome, active: true },
    { name: "Programs", icon: AiOutlineCode, active: false },
    { name: "Reports", icon: AiOutlineFileText, active: false },
    { name: "Leaderboard", icon: AiOutlineTrophy, active: false },
    { name: "Bounties", icon: AiOutlineGift, active: false },
    { name: "Competitions", icon: AiOutlineThunderbolt, active: false },
    { name: "Settings", icon: AiOutlineSetting, active: false },
  ];

  const feedTabs = [
    { name: "Announcements", color: "bg-red-500", icon: AiOutlineBell },
    { name: "Updates", color: "bg-blue-500", icon: AiOutlineCode },
    { name: "Bug reports", color: "bg-green-500", icon: FaBug },
    { name: "Invitations", color: "bg-yellow-500", icon: AiOutlineGift },
    { name: "Pinned", color: "bg-purple-500", icon: BiTargetLock },
  ];

  useEffect(() => {
    // GSAP animations for page load
    const tl = gsap.timeline();

    // Animate sidebar items
    tl.fromTo(
      ".sidebar-item",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    )

      // Animate welcome card
      .fromTo(
        welcomeCardRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )

      // Animate stats
      .fromTo(
        ".stat-item",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )

      // Animate feed tabs
      .fromTo(
        ".feed-tab",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out" },
        "-=0.6"
      );
  }, []);

  const handleTabChange = (tabName) => {
    gsap.to(".feed-content", {
      opacity: 0,
      y: 10,
      duration: 0.2,
      onComplete: () => {
        setActiveTab(tabName);
        gsap.to(".feed-content", {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
      },
    });
  };

  const handleSidebarClick = (itemName) => {
    setActiveSidebarItem(itemName);
    gsap.fromTo(
      ".main-content",
      { x: 10, opacity: 0.8 },
      { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  };

  return (
    <div
      ref={dashboardRef}
      className="min-h-screen bg-black mt-28 text-white flex overflow-hidden"
    >
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
              <span className="text-black font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold">CyberNeoGen</span>
          </div>
        </div>

        <nav className="flex-1 px-4">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.name === activeSidebarItem;
            return (
              <button
                key={item.name}
                onClick={() => handleSidebarClick(item.name)}
                className={`sidebar-item w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "bg-green-500/20 text-green-400 border-l-4 border-green-500 shadow-lg shadow-green-500/20"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Feed Section */}
        <div className="flex-1 p-6 main-content">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Feed</h1>
              <div className="flex items-center space-x-4">
                <AiOutlineSearch
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                  size={20}
                />
                <AiOutlineBell
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                  size={20}
                />
              </div>
            </div>

            {/* Feed Tabs */}
            <div className="flex space-x-2 mb-6">
              {feedTabs.map((tab, index) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.name}
                    onClick={() => handleTabChange(tab.name)}
                    className={`feed-tab px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 hover:scale-105 ${
                      activeTab === tab.name
                        ? `${tab.color} text-white shadow-lg`
                        : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                    }`}
                  >
                    <TabIcon size={16} />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Welcome Card */}
          <div
            ref={welcomeCardRef}
            className="feed-content bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6 hover:border-gray-700 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Welcome to CyberNeoGen
                </h2>
                <p className="text-gray-400 mb-2">
                  Thrilled to have you on CyberNeoGen! Unleash your skills, hack
                  wisely, and claim your bounties.
                </p>
                <p className="text-gray-400 mb-6">Happy hacking!</p>
                <p className="text-sm text-gray-500 mb-6">
                  - from team CyberNeoGen
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                    Join Apollo
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                    View Programs
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                    Edit Profile
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                    Complete KYC
                  </button>
                </div>
              </div>

              {/* CyberNeoGen Logo */}
              <div className="ml-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/25 hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-2xl">B</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="feed-content bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all duration-300">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-sm">B</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-medium">Welcome to CyberNeoGen</span>
                  <span className="text-gray-500 text-sm">
                    Discover and report bugs to earn rewards
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Start hunting now and earn rewards. Explore the platform here
                  👇
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-all duration-300 hover:scale-105">
                      Join Apollo
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-all duration-300 hover:scale-105">
                      View Programs
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-all duration-300 hover:scale-105">
                      Edit Profile
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-all duration-300 hover:scale-105">
                      Complete KYC
                    </button>
                  </div>
                  <span className="text-gray-500 text-sm">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - User Stats */}
        <div className="w-80 bg-gray-900 border-l border-gray-800 p-6">
          {/* User Profile */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <AiOutlineUser size={24} className="text-gray-300" />
              </div>
              <div>
                <h3 className="font-bold">ayushisk</h3>
                <p className="text-green-400 text-sm">@ayushisk</p>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div ref={statsRef}>
            <h4 className="font-bold mb-2">Overview</h4>
            <p className="text-gray-400 text-sm mb-6">
              Statistics based on your overall activity
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="stat-item bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                <p className="text-gray-400 text-sm mb-1">Global Rank</p>
                <p className="text-2xl font-bold text-yellow-400">N/A</p>
              </div>
              <div className="stat-item bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                <p className="text-gray-400 text-sm mb-1">Reports Submitted</p>
                <p className="text-2xl font-bold text-blue-400">0</p>
              </div>
              <div className="stat-item bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                <p className="text-gray-400 text-sm mb-1">Reputation</p>
                <p className="text-2xl font-bold text-green-400">0</p>
              </div>
              <div className="stat-item bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                <p className="text-gray-400 text-sm mb-1">Success rate</p>
                <p className="text-2xl font-bold text-purple-400">0%</p>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="pt-6 border-t border-gray-800">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                <span className="text-gray-400">Total Earnings</span>
                <span className="font-bold text-green-400">$0</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                <span className="text-gray-400">Active Programs</span>
                <span className="font-bold text-blue-400">0</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                <span className="text-gray-400">Pending Reports</span>
                <span className="font-bold text-yellow-400">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
