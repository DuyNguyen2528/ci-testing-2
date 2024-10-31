// src/components/Leaderboard.jsx
import React from 'react';

/**
 * Leaderboard Component
 * Displays user rankings based on points
 * THIS CURRENTLY USES MOCK DATA
 */
const Leaderboard = () => {
  // Mock data for leaderboard
  const mockUsers = [
    { id: 1, username: 'TaskMaster', points: 2500, rank: 1 },
    { id: 2, username: 'ProductivityPro', points: 2200, rank: 2 },
    { id: 3, username: 'GoalGetter', points: 1800, rank: 3 },
    { id: 4, username: 'AchievementHunter', points: 1600, rank: 4 },
    { id: 5, username: 'TaskWarrior', points: 1400, rank: 5 },
  ];

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <div className="leaderboard-list">
        {mockUsers.map(user => (
          <div key={user.id} className="leaderboard-item">
            <div className="rank">#{user.rank}</div>
            <div className="username">{user.username}</div>
            <div className="points">{user.points} pts</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;