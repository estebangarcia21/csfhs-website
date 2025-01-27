export interface Opportunities {
    title: string;
    preview: string;
    description: string;
    descriptionSecond?:string;
    achievements: Array<Achievement>;
    testimonials: Testimonial[];
    signup: SignUp;
    type: OppType;
    club?: Club;
    id: string;
}

export interface Achievement {
    label: string;
    stat: string | number;
}


export interface SignUp {
    talkToTeacher: boolean;
    link?: string;
}

export const clubs = ['Full-Stack Development', 'CS4Girls', 'CS Leadership'] as const;
export type Club = typeof clubs[number];

export const oppTypes = ['Award', 'Competition', 'Certification', 'Club'] as const;
export type OppType = typeof oppTypes[number];

export interface Testimonial {
    author: string;
    quote: string;
}

export const opportunities: Opportunities[] = [
    {
        title: 'Student Leadership',
        preview:
            'Opportunity for students to join a leadership team and plan events that promote the pathway.',
        description: 
            'Also known as Computer Science Leadership (CS Leadership), the program affords pathway students the opportunity to plan events that promote Franklin High School\'s computer science classes throughout the area.',
        descriptionSecond:
            'Once accepted, pathway leaders are expected to attend weekly meetings, communicate with other leaders, and take part in recruitment. Promotional events in the past included operating a stand at Toby Johnson Middle School, coordinating robotics competitions for elementary schoolers, and appearing on Wildcat TV.',
        achievements: [
            {
                label: 'Promotional events organized',
                stat: '10+',
            },
            {
                label: 'Leaders trained',
                stat: '50+',
            }
        ],
        testimonials: [
            {
                author: '',
                quote: '',
            },
        ],
        signup: {
            talkToTeacher: true
        },
        type: 'Club',
        club: 'CS Leadership',
        id: 'student-leadership'
      },
      {
        title: 'CS4Girls',
        preview: 'A volunteer service club dedicated to teaching elementary school girls computer science.',
        description: 'CS4Girls is a club at Franklin High School dedicated to introducing elementary school girls in the area to computer science. The organization seeks to close the gender gap in the tech field.',
        descriptionSecond: 'Open at any skill level, the club hosts multiple training sessions for volunteers. Club leaders reach out to fourth, fifth, and sixth-grade  teachers in the district and distribute flyers. Historically, the group has hosted two, multi-week programs each year ranging from Python programming, robotics, and--more recently--web development.',
        achievements: [
            {
                label: 'Girls taught',
                stat: '120+',
            },
            {
                label: 'Schools reached',
                stat: '6'
            },
            {
                label: 'In operation',
                stat: '4 years'
            },

        ],
        testimonials: [
            {
                author: '',
                quote: '',
            },
        ],
        signup: {
            talkToTeacher: false,
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSdz71SJ4raxsMROgLMX049yv63qG6zoOlpmzfL4vY9nYDqT4w/viewform?usp=header'
        },
        type: 'Club',
        club: 'CS4Girls',
        id: 'cs4g'
      },
      {
        title: 'Full-Stack Development',
        preview: 'A club teaching web and mobile development to high school students at any skill level.',
        description: 'Founded by the original developer of this website, Full-Stack Development (FSD) continues to maintain, develop, and release new updates. Club members will be able to learn one of the most used web and mobile frameworks used in the industry. The club also affords members the opportunity to contribute to high-impact, technical projects that can be put on resumes.',
        descriptionSecond: 'In 2024, the City of Elk Grove reached out to FSD to create a virtual reality simulation of the new zoo. After six months of prototyping, developing, and communication, the club presented its work at a City Council meeting, where Mayor Bobbie Singh-Allen, Vice Mayor Kevin Spease, Councilman Darren Suen, Rod Brewer, and Sergio Robles voted unanimously for the creation of the zoo. Local news stations interviewed Mr. Dagler, the club\'s president and vice president while showcasing their work.',
        achievements: [
            {
                label: 'People affected',
                stat: '500K+',
            },
            {
                label: 'Major projects published',
                stat: '3',
            },
            {
                label: 'In operation',
                stat: '5 years',
            },
            {
                label: 'Grant-winning apps created',
                stat: '1',
            },
        ],
        testimonials: [
            {
                author: '',
                quote: '',
            },
        ],
        signup: {
            talkToTeacher: false,
            link: 'https://docs.google.com/forms/d/e/1FAIpQLScI2z76KIx5svYkfOL7kAn_-8Xmz5mTnjJ7z88_HkMUCNuUOg/viewform?usp=header'
        },
        type: 'Club',
        club: 'Full-Stack Development',
        id: 'fsd'
      },
    {
        title: 'SkillsUSA',
        preview: 'A national career and technical organization hosting over 100 annual competitions in various technical fields.',
        description: 'Hosting local, regional, and national youth competitions ranging from Cabinetmaking to Video Production, SkillsUSA offers several events directly related to pathway curriculum.',
        descriptionSecond: 'Other programming-related events include Computer Programming, Cybersecurity, Information Technology Services, Internetworking, and Web Design and Development. One pathway student took first place in the Internetworking event.',
        achievements: [
            {
                label: 'Took first in nationals and state',
                stat: '1',
            },
            {
                label: 'Regional podium finishers',
                stat: '4+',
            },
            {
                label: 'Competitors sent',
                stat: '20+' 
            },
        ],
        testimonials: [
            {
                author: '',
                quote: '',
            },
        ],
        signup: {
            talkToTeacher: true,
        },
        type: 'Competition',
        club: undefined,
        id: 'skills-usa'
    },
    // caputer the flag event announcement
    // if club != null, then include a little status tag that says club in all caps
    {
        title: 'Lockheed Martin Codequest',
        preview: 'An annual computer programming competition for high school students hosted by Lockheed Martin.',
        description: 'Lockheed Martin is a defense and aerospace manufacturer that offers training programs and competitions to high school students.',
        descriptionSecond: 'In Code Quest\u2122, teams of three students collaborate to solve as many programming problems within a two-and-a-half hour time limit and earn as much points as possible. In the weeks leading up to the competition, employees from Lockheed Martin host virtual training sessions for interested participants.',
        achievements: [

            {
                label: 'Competitors sent',
                stat: '30+',
            },
            {
                label: 'Teams sent',
                stat: '10+',
            },

        ],
        testimonials: [
            {
                author: '',
                quote: '',
            },
        ],
        signup: {
            talkToTeacher: true,
        },
        type: 'Competition',
        club: undefined,
        id: 'codequest'
    },
    // add how to apply/register section to data
    // people in pathway has opportunity to enter comp sci students, jsut the string no link
    {
        title: 'HPE Codewars',
        preview: 'A computer programming competition for high school students hosted by Hewlett Packard Enterprise.',
        description: 'Teams of two to three people can register as a Novice or Advanced team, using C, C++, Java, or Python 3 as acceptable programming languages for submission.',
        descriptionSecond: 'For three consecutive years, Franklin High School has won first place in the Roseville Contest. Top prizes include free laptops, t-shirts, and other HPE Codewars merchandise.',
        achievements: [
            {
                label: 'Times won first place',
                stat: '3',
            },
            {
                label: 'Years participated',
                stat: '8',
            },
            {
                label: 'Number of teams sent',
                stat: '30+',
            },
        ],
        testimonials: [
            {
                author: '',
                quote: '',
            },
        ],
        signup: {
            talkToTeacher: true,
        },
        type: 'Competition',
        club: undefined,
        id: 'hpe-codewars'
    },
    {
        title: 'NCWIT',
        preview: 'Aspirations in Computing (AiC) engages, inspires, and supports thousands of high school and college students who want to change the world.',
        description: 'The National Center for Women & Information Technology (NCWIT) is a 501(c)(3) nonprofit organization that works to increase participation of girls and women in computing.',
        achievements: [
            {
                label: 'Number of winners',
                stat: '2',
            },
        ],
        testimonials: [
            {
                author: '',
                quote: '',
            },
        ],
        signup: {
            talkToTeacher: true,
        },
        type: 'Award',
        club: undefined,
        id: 'ncwit'
    },
    {
        title: 'HPE Certification Program',
        preview: 'A program where HPE trains and provides certifates to current high school students for on-the-job technical skills.',
        description: 'Students who successfully complete a course will receive a certificate they can add to their resume and college applications. Certificates are more tailored to computer science, ranging from Clients/Servers, APIs, to Security.',
        achievements: [
            {
                label: 'Issued certifications',
                stat: 7,
            },
        ],
        testimonials: [
            {
                author: 'Raymond Lin',
                quote: 'The provided a nuanced and unique perspective on my future in computer science and realistic expectations for the career and the field. My favorite part of the event was Mr. Kyle Younger because I loved his accent and his vibe.',
            },
            {
                author: 'Weivin Zhang',
                quote: 'I think this event helped me prepare by giving a job like experience, working with customers in the field of programming. It was very fun to be able to work in a environment of coding ',
            },
            {
                author: 'Faris Assi',
                quote: ' the event was super helpful in showing what it would be like working as a software developer. The instructors really emphasized certain parts to show that they themselves face the type of challenges they gave as a real software developer. My favorite part of the event was the free donuts',
            },
            {
                author: 'Aiden Calvert',
                quote: 'The event was as an extremely practical course that focused on real-world examples. My favorite part of it was experiencing the HPE building and learning new things with my friends.',
            },
            {
                author: 'Omar Ahmad',
                quote: 'The event will help prepare me for difficult and unforeseen events that could occur in the real-world jobs. My favorite part was socialization and the "Natural Disaster" section',
            },
            {
                author: 'Nina Dong',
                quote: 'The event was very practial and I really like the "gathering information from the client" part. It mimics the working world and was an unexpected, but pleasant twist. My favorite part of the event was the instructors. They were super nice and easy to talk to.',
            },
        ],
        signup: {
            talkToTeacher: true,
        },
        type: 'Certification',
        club: undefined,
        id: 'hpe-cert'
      },
]

const getOpportunitiesId = (id: string) => `/opportunities/${id}`;

export function opportunitiesHref(infoPage: Opportunities) {
  return getOpportunitiesId(infoPage.id);
}

export function opportunitiesHrefById(infoPageId: string) {
  return getOpportunitiesId(infoPageId);
}