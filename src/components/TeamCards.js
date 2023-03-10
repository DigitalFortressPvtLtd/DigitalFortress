import React from "react";
import "../styles/teamCards.css";
import sibi from "../assets/sibisir.jpg";
import midun from "../assets/akash.jpg";
import gautam from "../assets/Galada.jpeg";
import aditya from "../assets/aditya.jpg";
import neha from "../assets/neha.jpg";
import manasa from "../assets/manasa.jpg";
import harshith from "../assets/harshith.jpg";
import sesha from "../assets/Sesha.jpeg";
import tanush from "../assets/tanush.jpg";
import TeamCard from "./TeamCard";
import ScrollAnimation from "react-animate-on-scroll";

function TeamCards() {
  const team = [
    {
      name: "Sibi Chakkaravarthy Sethuraman",
      role: "Founder and CEO",
      img: sibi,
      discription:
        "Sibi Chakkaravarthy Sethuraman is the Founder and CEO of Mukham. He is an experienced researcher with a demonstrated history of working in the computer and network security industry. Skilled in Python, Network Security, Computer Vision, Computer Science, he has a Doctor of Philosophy (Ph.D.) focused in Wireless Security and Malware Analysis from Madras Institute of Technology, Anna University, Chennai.",
    },
    {
      name: "Malli Midhun Aakash",
      role: "Co-Founder",
      img: midun,
      discription:
        "Malli Midhun Aakash is a Co-Founder of Mukham. He built the foundation of Mukham and the creation of the application. His specialty is Full Stack Development. He is the heart of mukham, and he works to push mukham to new heights.",
    },
    {
      name: "Gautam Galada",
      role: "Co-Founder",
      img: gautam,
      discription:
        "Gautam Galada is a Co-Founder of Mukham. His specialty is Deep Learning and he has used his expertise in the working of the Mukham app. He is a skilled orator and has on many occasions encouraged and pushed people into finishing tasks.",
    },
    {
      name: "Aditya Mitra",
      role: "Security Specialist",
      img: aditya,
      discription:
        "Aditya Mitra is the Security Specialist of Mukham. Maintaining proper information security and following the best practices to ensure safety of your personal data, His specialty is Web Security. AdityaMitra5102, Some call it reality, some call it stimulation. In the end, it's all a piece of code; and so am I. ",
    },
    {
      name: "Neha Chunduri",
      role: "HR",
      img: neha,
      discription:
        "Neha Chunduri is the HR of Mukham. She manages and delegates work in the company, and makes sure the work is done smoothly. She enjoys listening to songs and playing Open World games.",
    },
    {
      name: "Manasa Anand",
      role: "Content Manager",
      img: manasa,
      discription:
        "Manasa Anand is the Content Manager of Mukham. She works hard to make the content from the writers presentable. She loves to meet and talk to new people, and playing first-person shooter games.",
    },
    {
      name: "Harshith Kanigapula",
      role: "Technical Lead",
      img: harshith,
      discription:
        "Harshith Kanigapula is the Technical Lead of Mukham. His specialization is Full Stack. He is developing an impressive skillset. He has a diligent work ethic and works hard everyday.",
    },
  ];
  return (
    <div>
      <div style={{ width: "100%" }} className="cardgrid">
        {/* map through first 3 team members */}
        {team.map((member, index) => {
          if (index < 3) {
            return (
              <ScrollAnimation animateIn="fadeIn" duration={1}>
                <TeamCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  img={member.img}
                  discription={member.discription}
                />
              </ScrollAnimation>
            );
          }
        })}
      </div>
      <br />
      {/* rest */}
      <div style={{ width: "100%" }} className="cardgrid">
        {team.map((member, index) => {
          if (index >= 3) {
            return (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                img={member.img}
                discription={member.discription}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default TeamCards;
