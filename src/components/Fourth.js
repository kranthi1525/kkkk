import React from 'react'
import './Roadmap.css'

const expertiseTeam = [
    {
        name: "Dr. J. Blackwood",
        role: "Chief Agronomist",
        bio: "Leading sustainable farming initiatives with 20+ years of experience in crop optimization.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Prof. E. Hartley",
        role: "Soil Science Director",
        bio: "Pioneering research in soil microbiology and nutrient cycling for agricultural ecosystems.",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Dr. A. Voss",
        role: "Agricultural Economics Specialist",
        bio: "Expert in econometric modeling and market trend analysis for optimal resource allocation.",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Dr. S. Chen",
        role: "Biotechnology Research Lead",
        bio: "Spearheading genetic engineering projects to develop resilient and high-yield crop varieties.",
        avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "M. Holloway, M.Eng.",
        role: "Precision Agriculture Engineer",
        bio: "Integrating IoT and AI technologies to create advanced smart farming systems.",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Dr. O. Nakamura",
        role: "Climate Adaptation Strategist",
        bio: "Developing innovative strategies to mitigate climate change impacts on global food security.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

const ExpertProfile = ({ expert }) => (
    <div className="expert-card">
        <div className="avatar-wrapper">
            <img className="expert-avatar" src={expert.avatar} alt={expert.name} />
        </div>
        <div className="expert-info">
            <h2 className="expert-name">{expert.name}</h2>
            <p className="expert-role">{expert.role}</p>
            <p className="expert-bio">{expert.bio}</p>
        </div>
    </div>
);

export default function Fourth() {
  return (
    <>
      
        <h1>Team</h1>
      
      <main className="expert-grid">
        {expertiseTeam.map((expert, index) => (
          <ExpertProfile key={index} expert={expert} />
        ))}
      </main>
    </>
  )
}