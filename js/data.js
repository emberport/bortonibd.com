const websiteData = {
    problems: [
        {
            id: 1,
            title: "Complex Tech Integration",
            description: "Traditional solutions require extensive setup and configuration, leading to delays and inefficiencies.",
            icon: "🔧"
        },
        {
            id: 2,
            title: "Resource Intensive",
            description: "Current market solutions consume excessive resources, increasing operational costs.",
            icon: "💰"
        },
        {
            id: 3,
            title: "Limited Scalability",
            description: "Existing platforms struggle to scale effectively with growing business demands.",
            icon: "📈"
        }
    ],
    solution: {
        title: "The Felight Advantage",
        points: [
            "Seamless Integration - Deploy in minutes, not days",
            "Resource Efficient - 70% less resource consumption",
            "Infinitely Scalable - Grow without limitations",
            "AI-Powered - Smart automation and optimization"
        ],
        videoId: "your-video-id"
    },
    operations: [
        {
            id: 1,
            image: "assets/operation-1.jpg",
            title: "Research & Development",
            description: "Cutting-edge innovation lab"
        },
        {
            id: 2,
            image: "assets/operation-2.jpg",
            title: "Manufacturing",
            description: "State-of-the-art production facility"
        },
        {
            id: 3,
            image: "assets/operation-3.jpg",
            title: "Quality Control",
            description: "Rigorous testing protocols"
        }
    ],
    about: {
        text: "Bortoni is a pioneering technology company dedicated to revolutionizing the industry through innovative solutions. Our flagship product, Felight, represents our commitment to excellence and our vision for the future of technology integration.",
        mission: "To simplify complex technological challenges through innovative, sustainable solutions.",
        vision: "To be the global leader in efficient, scalable technology solutions that drive the future of digital transformation."
    },
    partners: [
        { name: "PAARN", logo: "assets/images/1.jpg" },
        { name: "SIMCUBATOR", logo: "assets/images/2.jpg" },
        { name: "SUSTAINLAB", logo: "assets/images/3.jpg" },
        { name: "FABLAB", logo: "assets/images/4.jpg" },
    ],
    media: [
        {
            title: "Revolutionizing Tech Integration",
            source: "TechDaily",
            image: "assets/media-1.jpg",
            link: "#"
        },
        {
            title: "The Future of Scalable Solutions",
            source: "Innovation Weekly",
            image: "assets/media-2.jpg",
            link: "#"
        },
        {
            title: "Bortoni's Impact on Industry",
            source: "Digital Trends",
            image: "assets/media-3.jpg",
            link: "#"
        }
    ],
    testimonials: [
        {
            text: "Implementing Bortoni's Felight system transformed our entire operation. We've seen a 40% reduction in feed costs while increasing production by 25%.",
            author: "Michael Rodriguez",
            role: "Operations Director, Pacific Aquaculture",
            avatar: "https://randomuser.me/api/portraits/men/42.jpg"
        },
        {
            text: "The real-time monitoring capabilities of Felight have given us unprecedented control over water quality and fish health.",
            author: "Sarah Johnson",
            role: "CEO, Nordic Aquafarms",
            avatar: "https://randomuser.me/api/portraits/women/26.jpg"
        },
        {
            text: "As a sustainable aquaculture advocate, I'm impressed by how Bortoni has integrated environmental stewardship with operational efficiency.",
            author: "Dr. James Chen",
            role: "Head of Research, Global Fisheries Institute",
            avatar: "https://randomuser.me/api/portraits/men/29.jpg"
        }
    ],
    team: {
        leadership: [
            {
                name: "David Anderson",
                position: "CEO & Founder",
                bio: "15+ years in sustainable aquaculture with a vision to transform the industry through technology.",
                photo: "https://randomuser.me/api/portraits/men/32.jpg",
                social: {
                    linkedin: "https://linkedin.com/in/davidanderson",
                    twitter: "https://twitter.com/davidanderson"
                }
            },
            {
                name: "Sarah Chen",
                position: "CTO",
                bio: "AI expert with background in environmental engineering and IoT systems for sustainable agriculture.",
                photo: "https://randomuser.me/api/portraits/women/44.jpg",
                social: {
                    linkedin: "https://linkedin.com/in/sarahchen",
                    github: "https://github.com/sarahchen"
                }
            },
            {
                name: "Michael Rodriguez",
                position: "COO",
                bio: "Operations expert with 12 years experience scaling tech solutions in 20+ countries worldwide.",
                photo: "https://randomuser.me/api/portraits/men/68.jpg",
                social: {
                    linkedin: "https://linkedin.com/in/michaelrodriguez",
                    instagram: "https://instagram.com/michaelrodriguez"
                }
            },
            {
                name: "Emma Wilson",
                position: "Head of Research",
                bio: "Marine biologist with PhD in sustainable aquaculture systems and water quality management.",
                photo: "https://randomuser.me/api/portraits/women/28.jpg",
                social: {
                    linkedin: "https://linkedin.com/in/emmawilson",
                    researchgate: "https://researchgate.net/profile/Emma_Wilson"
                }
            }
        ],
        engineers: [
            // Engineering team
        ],
        research: [
            // Research team
        ]
    }
};

// Make websiteData available globally
window.websiteData = websiteData; 