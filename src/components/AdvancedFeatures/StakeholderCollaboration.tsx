import React from 'react';
import { Users, MessageSquare, Vote, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const StakeholderCollaboration = () => {
  const collaborationData = {
    activeStakeholders: {
      manufacturers: 12,
      distributors: 8,
      retailers: 25,
      regulators: 3
    },
    recentDiscussions: [
      {
        topic: "Quality Standards Update",
        participants: 15,
        status: "Active",
        lastActivity: "5 mins ago"
      },
      {
        topic: "New Packaging Guidelines",
        participants: 8,
        status: "Scheduled",
        lastActivity: "1 hour ago"
      }
    ],
    activeVoting: [
      {
        title: "Sustainable Packaging Initiative",
        deadline: "2025-01-15",
        participants: 45,
        progress: 75
      },
      {
        title: "Quality Control Framework",
        deadline: "2025-01-20",
        participants: 32,
        progress: 40
      }
    ],
    stakeholderRatings: [
      {
        name: "Mumbai Distributors Ltd",
        rating: 4.8,
        totalReviews: 156,
        reliability: "98%"
      },
      {
        name: "Quality Foods Co",
        rating: 4.5,
        totalReviews: 89,
        reliability: "95%"
      }
    ]
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Stakeholder Collaboration Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-500" />
              Active Stakeholders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(collaborationData.activeStakeholders).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm capitalize">{key}</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                    {value} Active
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-green-500" />
              Recent Discussions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {collaborationData.recentDiscussions.map((discussion, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{discussion.topic}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      discussion.status === 'Active' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {discussion.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{discussion.participants} participants</span>
                    <span>{discussion.lastActivity}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Vote className="h-5 w-5 mr-2 text-purple-500" />
              Active Voting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {collaborationData.activeVoting.map((vote, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium mb-2">{vote.title}</p>
                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full" 
                        style={{ width: `${vote.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{vote.participants} votes</span>
                      <span>Deadline: {vote.deadline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-500" />
              Stakeholder Ratings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {collaborationData.stakeholderRatings.map((stakeholder, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium mb-2">{stakeholder.name}</p>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold">{stakeholder.rating}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(stakeholder.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{stakeholder.totalReviews} reviews</span>
                    <span>Reliability: {stakeholder.reliability}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StakeholderCollaboration;