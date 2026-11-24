import type { Certificate } from "./types"

/*
 * Certificates, written in STAR form. Facts (issuer, dates, award, program
 * contents) come from the certificate itself. Lines marked REVIEW are
 * reasonable but not stated on the certificate; Charles should confirm them.
 */
export const certificates: Certificate[] = [
  {
    slug: "junior-cybersecurity-analyst",
    title: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    printedAs: "Cybersecurity Essentials, offered by the University of San Carlos",
    image: "/images/cyberessentials.png",
    url: "/files/Document0001.pdf",
    date: "November 2025",
    category: "Cybersecurity",
    featured: true,
    summary:
      "Instructor-led Cisco cybersecurity track taken through the University of San Carlos, completed on 18 November 2025.",
    star: {
      situation:
        "Offered by the University of San Carlos as an instructor-led Cisco course, after my networking courses and alongside my security projects.",
      task: "Complete Cisco's instructor-led cybersecurity track at USC, including its labs and assessments.",
      action: [
        "Studied how networks are attacked and defended: threats, vulnerabilities, and the tools defenders use.",
        "Worked through endpoint security, network defense and threat management topics in Cisco's labs.",
        "Practised reading logs and traffic the way an analyst triages an alert.",
      ],
      result: [
        "Certificate issued on 18 November 2025 (instructor Godwin Monserate).",
        "Put the skills to work building a home SIEM that detected an SSH brute force attack.",
      ],
    },
    skills: ["Threat analysis", "Network defense", "Endpoint security", "Log analysis", "Incident triage"],
    relatedProjects: ["home-siem-lab", "network-security-simulation"],
  },
  {
    slug: "introduction-to-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    image: "/images/introcybersec.png",
    url: "/files/Introduction_to_Cybersecurity_certificate_23100750-usc-edu-ph_58afaa5e-909d-4517-a170-4daa39d90b42.pdf",
    date: "May 2024",
    category: "Cybersecurity",
    summary: "Cisco's entry course on cyber threats, protecting personal data and how organisations defend themselves.",
    star: {
      situation: "My first formal cybersecurity course, taken early in my IT degree.",
      task: "Complete Cisco's Introduction to Cybersecurity course.",
      action: [
        "Learned the common attack types and how attackers target people and organisations.",
        "Covered protecting personal data and privacy, and how organisations defend their networks.",
        "Explored the career paths inside cybersecurity.",
      ],
      result: [
        "Completed on 31 May 2024.",
        "It set my direction: later work includes an encrypted P2P chat, an attacker versus defender simulation and a home SIEM.",
      ],
    },
    skills: ["Security fundamentals", "Threat awareness", "Data privacy"],
    relatedProjects: ["p2p-encrypted-chat"],
  },
  {
    slug: "ccnav7-srwe",
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    image: "/images/networking2.png",
    url: "/files/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_23100750-usc-edu-ph_53735774-6b6e-4776-b010-bc8e0e7b9818 (1).pdf",
    date: "Jan 2025",
    category: "Networking",
    featured: true,
    summary:
      "The second CCNA course: VLANs, inter-VLAN routing, STP, EtherChannel, DHCP, first hop redundancy, LAN security and wireless.",
    star: {
      situation: "My Networking 2 course followed the CCNAv7 Switching, Routing, and Wireless Essentials curriculum.",
      task: "Complete the course and its hands-on Packet Tracer labs.",
      action: [
        "Configured VLANs, trunks and inter-VLAN routing, including router-on-a-stick.",
        "Built redundancy with STP and EtherChannel (LACP), and addressing with DHCPv4 and DHCPv6/SLAAC.",
        "Secured access ports with port security and set up wireless LANs and static routes.",
      ],
      result: [
        "Completed on 22 January 2025.",
        "Used the same skills to design the three-branch IP Telephony network with 18 VLANs and LACP redundancy.",
      ],
    },
    skills: ["VLANs", "Inter-VLAN routing", "STP", "EtherChannel", "DHCPv4/v6", "Port security", "WLAN"],
    relatedProjects: ["ip-telephony", "network-security-simulation"],
  },
  {
    slug: "nc-ii-computer-systems-servicing",
    title: "National Certificate II – Computer Systems Servicing",
    issuer: "TESDA",
    image: "/images/computer_systems_servicing.png",
    url: "/files/NC.pdf",
    date: "May 2025",
    category: "Networking",
    accessNote: "The PDF is password protected. Password: 09082004B",
    summary:
      "A national competency certificate from TESDA for installing and configuring computer systems, setting up networks and servers, and maintaining them.",
    star: {
      situation: "In the Philippines, TESDA's NC II is the recognised proof that you can do hands-on IT servicing work.",
      task: "Pass TESDA's competency assessment for Computer Systems Servicing NC II.",
      action: [
        "Prepared the core competencies: installing and configuring computer systems, setting up networks and servers, and maintaining and repairing them.",
        "Completed the practical assessment under the Philippine TVET Competency Assessment and Certification System.",
      ],
      result: [
        "Awarded National Certificate II in Computer Systems Servicing in May 2025.",
        "The same hands-on habits shaped how I documented real lab hardware in the DCISM network runbook.",
      ],
    },
    skills: ["Hardware installation", "OS configuration", "Network setup", "Server setup", "Troubleshooting"],
    relatedProjects: ["dcism-network-runbook"],
  },
  {
    slug: "zuitt-cloud-infrastructure",
    title: "Cloud Infrastructure Fundamentals",
    issuer: "Zuitt",
    printedAs: "Intensive Tech Career Program: Python, Django and AWS",
    image: "/images/zuitt.jpeg",
    url: "https://share.zertify.zuitt.co/certificate/195bcbd9-99b3-4fc4-ba9d-88992647244c",
    date: "May 2025",
    category: "Cloud",
    summary:
      "Zuitt's intensive program covering Python, Django and AWS (EC2, S3, Lambda), completed between January and May 2025.",
    star: {
      situation: "School projects taught me to build apps; this programme added how to run them in the cloud.",
      task: "Complete Zuitt's Intensive Tech Career Program in Python, Django and AWS.",
      action: [
        "Learned Python and Django fundamentals for building web backends.",
        "Deployed and managed workloads on AWS: EC2 for servers, S3 for storage and Lambda for serverless functions.",
      ],
      result: [
        "Completed the program (22 January to 17 May 2025), awarded 17 May 2025.",
        "Deploying my own work became routine, for example the live CubeTech HRMS demo on Vercel.",
      ],
    },
    skills: ["Python", "Django", "AWS EC2", "AWS S3", "AWS Lambda"],
    relatedProjects: ["cubetech-hrms"],
  },
  {
    slug: "vietnam-hackathon",
    title: "The Future of Tech | Vietnam Hackathon",
    issuer: "Saigon Business School",
    printedAs: "Certificate of Achievement, Best Execution Award, 3rd Place",
    image: "/images/hackathonsbs.png",
    url: "/files/Document0002.pdf",
    date: "April 2025",
    category: "Hackathon",
    featured: true,
    summary:
      "Won 3rd place and the Best Execution Award at the hackathon held during The Future of Tech Vietnam Study Tour.",
    star: {
      situation: "During the Vietnam study tour, Saigon Business School ran a hackathon for the participating students.",
      task: "Build and present a working solution as a team within the hackathon's time limit.",
      action: [
        // REVIEW: the certificate does not describe the project; add what the team built.
        "Focused the team on a solution we could actually demonstrate, not a bigger idea we could not finish.",
        "Presented the working build to the judges.",
      ],
      result: [
        "3rd place and the Best Execution Award, given for outstanding technical execution, precision and implementation.",
      ],
    },
    skills: ["Rapid prototyping", "Teamwork under time pressure", "Presenting to judges"],
  },
  {
    slug: "vietnam-study-tour",
    title: "The Future of Tech | Vietnam Study Tour",
    issuer: "Saigon Business School",
    image: "/images/studytoursbs.png",
    url: "/files/Document0003.pdf",
    date: "March 2025 – April 2025",
    category: "Events",
    summary:
      "A week-long study tour (30 March to 6 April 2025) exploring emerging technologies and Vietnam's tech ecosystem.",
    star: {
      situation: "Saigon Business School hosted an international study tour on the future of technology.",
      task: "Take part in the full programme from 30 March to 6 April 2025.",
      action: [
        "Explored emerging technologies and Vietnam's fast-growing tech ecosystem.",
        "Joined the programme's hackathon, where our team placed 3rd.",
      ],
      result: ["Certificate of Participant for the full tour, with the hackathon award on top."],
    },
    skills: ["Global tech exposure", "Cross-cultural collaboration"],
  },
  {
    slug: "cybersecurity-awareness-seminar",
    title: "Cybersecurity Awareness Seminar",
    issuer: "NCR Software Development Laboratory, University of San Carlos",
    image: "/images/cyberawareness.png",
    url: "/files/Document0004.pdf",
    date: "February 11, 2026",
    category: "Events",
    summary: "A seminar on modern digital defense and technical security practices at USC's Talamban Campus.",
    star: {
      situation: "USC's NCR Software Development Laboratory held a cybersecurity awareness seminar for students.",
      task: "Attend and keep my security knowledge current.",
      action: ["Attended the session on modern digital defense and technical security practices."],
      result: ["Certificate of Participation, 11 February 2026."],
    },
    skills: ["Security awareness", "Digital defense practices"],
  },
]
