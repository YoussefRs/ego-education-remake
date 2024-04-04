import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";
import coursePic from "./assets/Courses/New-blue-modern-website-programming-online-tutorials-youtube-thumbnail-1.jpg";
import {
  faLaptopCode,
  faPersonChalkboard,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

i18n
  .use(i18nextBrowserLanguagedetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
    missingKey: "ignore",
    resources: {
      en: {
        translation: {
          home: {
            hero: {
              line1: "Accelerate your career with an online degree.",
              line2: "Learn from anywhere. Advance faster.",
              line3:
                "Our accredited programs provide in-demand skills to expand your opportunities.",
              button: "Explore",
            },
            nav: {
              home: "Home",
              courses: "Courses",
              eLearning: "eLearn",
              partners: "Our Partners",
              research: "Ego Research",
              apply: "Apply",
              about: "About us",
            },
            banner: {
              line1: "Why Ego Education?",
              line2:
                "eGO Education is a brand by the International E-Learning Institute Ltd (IELI), a Higher Education Institute based in Malta, created thanks to the decennial experience of its founders in the field of online University education.",
              line3:
                "With our 100% online learning experience, you gain an internationally recognized degree without putting your life on hold.",
              line4: "Study on evenings and weekends, at your own pace.",
              button: "Apply Now",
            },
            homeFeatures: {
              sectionHeader: {
                title: "Features",
                subtitle: "Study flexibly around your life",
                description:
                  "Our online courses on our platform are always available, so you can fit your studies into your busy schedule.",
              },
              bulls: {
                b1: "24/7 Access",
                b2: "Personalised and Flexible",
                b3: "Global opportunities",
              },
              features: [
                {
                  title: "Online Courses",
                  description:
                    "Access lessons, materials and interact with peers and faculty anytime.",
                },
                {
                  title: "Expert Teachers",
                  description:
                    "Our world-class faculty members have extensive professional experience, ensuring you receive a high-quality education and practical skills.",
                },
                {
                  title: "Community",
                  description:
                    "Our platform enables students to communicate with each other. Thanks to study groups you will be part of an international community.",
                },
              ],
            },
            courseSlider: {
              title: "EXPLORE ALL COURSES",
              subtitle: "Browse Our",
              specialWord: "Course",
              curriculum: "Curriculum",
              readMore: "Read More",
              courses: [
                {
                  title: "Master of Science in Java Programming",
                  description:
                    "Master the Art of Software Development with our Comprehensive Java Programming Master's Program.",
                  imgSrc: coursePic,
                  date: "12/08/24",
                  curriculum: 3,
                },
                {
                  title: "Master of Science in Information Security",
                  description:
                    "Secure Your Future with Expertise: Master the Science of Information Security, Safeguarding Tomorrow's Digital Landscape.",
                  imgSrc:
                    "https://www.ipsr.org/uploads/2024/01/cybersecurity-thumb-copy-1.jpg",
                  date: "12/09/24",
                  curriculum: 8,
                },
                {
                  title: "Business Administration",
                  description:
                    "Lead with Knowledge: Master the Science of Business Administration, Shaping Tomorrow's Business Landscape.",
                  imgSrc:
                    "https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2022/11/New-Green-Modern-Business-YouTube-Thumbnail-1.webp",
                  date: "25/10/24",
                  curriculum: 2,
                  featured: true,
                },
              ],
            },
            homeFeatures_2: {
              title: "OPPORTUNITIES",
              subtitle: "Start Transforming your",
              specialWord: "Future",
              normalWord: "today",
              description:
                "Embark on a journey of transformation today and unlock boundless opportunities for your future. With ourinternationally acclaimed degree programs, you'll equip yourself with the qualifications essential for thriving in today's global landscape. Our degrees hold recognition across the EU and are easily validated in Commonwealth nations, offering you a passport to diverse career prospects worldwide.",
              features: [
                {
                  icon: faPersonChalkboard,
                  title: "International Qualification",
                  description:
                    "Upon graduation, you'll gain an internationally recognized degree that helps you qualify for career opportunities both locally and abroad.",
                },
                {
                  icon: faLaptopCode,
                  title: "A World of Opportunities",
                  description:
                    "Our degrees are recognized throughout the EU and easily validable in Commonwealth countries.",
                },
                {
                  icon: faUserGraduate,
                  title: "Gain The Qualifications You Need To Advance",
                  description:
                    "Apply now to kickstart an online master's degree that will accelerate your career and transform your life for the better.",
                },
              ],
            },
            homeLecturers: {
              title: "LECTURERS",
              subtitle: "Meet Our",
              specialWord: "Lecturers",
            },
            courseDetails: {
              coursesData: [
                {
                  id: "aB3cD4eF",
                  name: "Master of Science in Java Programming",
                  startDate: "01 Jan 2023",
                  duration: "2 years",
                  location: "In Campus",
                  totalEtc: 90,
                  cur: "2",
                  admission: {
                    desc: "Students are required to reach specific agreements with the host company and communicate the following data in writing to Ego Education to the mail: info@ego-education.com",
                    req: [
                      "three-year degree courses: 50 ECTS out of 90",
                      "master’s degree courses: 50 ECTS out of 90",
                      "one-year master degree course in Informatics: 20 ECTS out of 90",
                    ],
                  },
                  media: {
                    type: "image",
                    source:
                      "https://t4.ftcdn.net/jpg/06/87/83/03/360_F_687830359_0gDt5GdOpAE51LqpgxgrNGhlH9Jb2TBm.jpg",
                  },
                  career: [
                    "Java Programmer",
                    "Software Engineer",
                    "IT/Java Programme Manager",
                  ],
                  description:
                    "The aim of the course is to allow students to deal with the entire software development cycle, from the analysis of customer needs to the structuring of the database, from the design of the user interface to the construction of the back end using Object Oriented programming model and the Java language.",
                  slogan:
                    "Master the Art of Software Development with our Comprehensive Java Programming Master's Program.",

                  thumb:
                    "https://dce0qyjkutl4h.cloudfront.net/wp-content/webp-express/webp-images/uploads/2023/08/Java-enterprise-solutions.jpg.webp",
                  degree: "Master Degree",
                  institute: "Ego",
                  modules: [
                    {
                      title: "Basic Java",
                      description: `Basic Java The module explores the fundamentals of Java
                  programming and Object Oriented programming The Basic Java
                  module provides students with a solid foundation in Java
                  programming, catering to both beginners and those with
                  limited prior experience in coding. Throughout this
                  module, students will embark on a journey to Master Degree
                  the essential concepts of Java, ultimately enabling them
                  to critically analyze code, understand object-oriented
                  programming principles, and construct basic Java
                  applications.`,
                      ects: 12,
                    },
                    {
                      title: "Advanced Java",
                      description: `The module presents the techniques for good Java
                                  programming, and the Java Framework API The Advanced Java
                                  module is designed to empower students with a deeper
                                  understanding of the Java programming language, equipping
                                  them with the expertise needed to tackle complex software
                                  projects and leverage Java's rich ecosystem effectively.
                                  Throughout this module, students will Master Degree
                                  advanced Java concepts and frameworks, enabling them to
                                  critically analyze and apply their knowledge to real-world
                                  software development scenarios.`,
                      ects: 12,
                    },
                    {
                      title: "DBMS and SQL",
                      description: `The module defines the techniques for the data persistence
                                   and for data access via the Structured Query Language The
                                  DBMS and SQL module offers a comprehensive exploration of
                                  Database Management Systems (DBMS) and Structured Query
                                 Language (SQL). Designed for students pursuing a deeper
                                 understanding of data management and database design, this
                                 module equips them with the skills required to critically
                                  analyze data relations, plan and implement databases on a
                                  Relational Database Management System (RDBMS), and employ
                                   advanced SQL commands effectively.`,
                      ects: 12,
                    },
                    {
                      title: "Access to Databases from Applications",
                      description: `The module defines the techniques remote accesso to
                                 persistent data from a Java application The Access to
                                  Databases from Applications module offers students a
                                  comprehensive exploration of the critical intersection
                                 between application development and database management.
                                  This module equips students with the skills and knowledge
                                  required to effectively access, manipulate, and manage
                                 data stored in Relational Database Management Systems
                                  (RDBMS) from Java applications. Through this course,
                                   students will gain a deep understanding of access control,
                                  access control systems, and the use of the Java
                                  Persistence API (JPA) framework.`,
                      ects: 12,
                    },
                    {
                      title: "Web Applications",
                      description: `Module covers implementation of the full software web
                                   application project, back-end, front- end and management
                                   of third-party systems used for data persistence The Web
                                  Applications module provides students with an in-depth
                                  exploration of the technologies and principles behind
                                   modern web development. Students will develop a profound
                                   understanding of web application architecture, design
                                  patterns, and the intricacies of web protocols. This
                                  module equips them with the skills and critical knowledge
                                 necessary to design, develop, and deploy web-based
                               software systems, with a specific focus on the J2EE
                                   framework and the Java Spring Framework.`,
                      ects: 12,
                    },
                    {
                      title: "Research Methods",
                      description: ``,
                      ects: 6,
                    },
                    {
                      title: "Dissertation",
                      description: `The dissertation is a compulsory element of Master Degree
                                 of Science in Java Programming. Dissertation is based on a
                                  major piece of work that involves applying material
                                  encountered in the taught component of the degree, and
                                  extending that knowledge with the student's contribution,
                                 under the guidance of a supervisor. This component of the
                                  Master Degree’s degree provides an opportunity for
                                 students to pursue a single topic in depth and to
                                  demonstrate evidence of research ability at a Master
                                  Degrees level. The topic is typically a current problem in
                                  the broad area of their MSc programme. The dissertation
                                  usually involves experimental or theoretical research, or
                                  a substantial literature survey on a specific topic.`,
                      ects: 24,
                    },
                  ],
                  totalModules: 7,
                  videos: [
                    { src: "img/vid-1.mp4", title: "Intro" },
                    { src: "img/vid-2.mp4", title: "video example 1" },
                    { src: "img/vid-3.mp4", title: "video example 2" },
                    { src: "img/vid-4.mp4", title: "video example 3" },
                  ],
                  method:
                    "The programme comprises an online approach promoting the building of a community of practice via peer-to-peer learning which is asynchronous. Students have the freedom and flexibility to access the course at a time which is most convenient to them.",
                  price: 3000,
                  duration: 2,
                  category: "computer sicence",
                },
                {
                  id: "tU1vW2xY",
                  name: "Master of Science in Information Security",
                  startDate: "05 Jun 2023",
                  duration: "2 years",
                  location: "Online",
                  totalModules: 7,
                  career: [
                    "Information Security Manager",
                    "Information Security Officer",
                    "Information Security Analyst",
                    "Information Security Consultant",
                    "Managers",
                    "Business leaders",
                    "Policy makers",
                  ],
                  media: {
                    type: "image",
                    source:
                      "https://www.tees.ac.uk/Images/CommonImages/prospectus/PG/course_images/Cybersecurity.jpg",
                  },
                  description:
                    "The aim of the course is to acquire critical and in deep knowledge and skills needed to define IT security strategy, to implement corporate asset protection programs, and to develop and implement processes about IT risks mitigation. Students will develop an advanced knowledge of information security and an awareness of the context in which information security operates in terms of safety, environmental, social, and economic aspects. They will also gain a wide range of intellectual, practical and transferable skills, enabling them to develop a flexible professional career in IT and IS.",
                  slogan:
                    "Secure Your Future with Expertise: Master the Science of Information Security, Safeguarding Tomorrow's Digital Landscape.",

                  totalEtc: 90,
                  thumb:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWLWva0-DKp5IxK-HF9ZoqeT5YRas0sbZ8w&usqp=CAU",
                  degree: "Master Degree",
                  modules: [
                    {
                      title: "Governance and Risk Management",
                      description:
                        "The module explores the Risk Management and Governance techniques inherent in securing a company’s IT systems. The aim of the module is to study in depth knowledge needed by an IT managing professional for defining the IT security plan and strategy, to implement corporate asset protection programs, and to develop and implement processes about IT risks mitigation. Students of this module will analyse the information security changes, trends, and best practices and cover the information security compliance process and procedures.",
                      ects: 12,
                    },
                    {
                      title:
                        "Information Security, Controls, Compliance and Audit Management",
                      description:
                        "The module presents the techniques for identifying critical issues, defining documentation and collecting data for securing IT systems. This module presents the techniques used for verifying security and focuses on the areas related to Information Security Controls, Compliance, and Audit Management. The students of this module will critically analyse the concepts of corporate security, its design and implementation to be able to design effective information systems controls that align with operational processes and objectives. In addition, students will gain critical understanding and ability to analyse the IT audit process and IT audit standards.",
                      ects: 12,
                    },
                    {
                      title: "Security Programme Management and Operations",
                      description:
                        "The module defines the techniques for the realization and qualitative management of an IT project in the security field. This module explores Security Programme Management & Operations covering the development and implementation methodologies of an IT security project from a project management point of view. The students of this module will be exposed to critically analyse project management scope, practices and controls, point out the activities needed to successfully execute the information systems programme, estimate activity duration, and develop a schedule and staffing plan. The content will also cover incompatibilities, challenges, or issues related to project and vendors and how to manage stakeholders’ expectations.",
                      ects: 12,
                    },
                    {
                      title: "Information Security Core Competencies",
                      description:
                        "The module defines the techniques for “physical” management of security, identification of roles, policies etc. in the security field. The module covers Information Security Core Competencies and explores the methods for identifying useful technologies for securing IT. The objective of this module is to gain the critical understanding and in-depth knowledge of criteria for mandatory and discretionary access control, and to understand the different factors that help in implementation of access controls and design an access control plan. Students will also evaluate various social engineering concepts and their role in insider attacks and develop best practices to counter social engineering attacks.",
                      ects: 12,
                    },
                    {
                      title: "Strategic Planning and Finance",
                      description:
                        "The module covers implementation of the IT project, compliance with regulations and management of third-party systems used for security management. This module explores the administrative part of an IT security project; defines the strategic objectives, relations with suppliers, compliance with regulations, budget management, relations with stakeholders. The objective of this module is to develop in-depth understanding and critical knowledge of organization’s objectives, strategic plans and targets that support the operational needs of the organization including the assessment of potential risks, linked to the forecasting ability of future scenarios. The students will also identify how to report financial metrics to stakeholders. They will evaluate different procurement such as Statement of Objectives (SOO), Statement of Work (SOW), and Total Cost of Ownership (TCO).",
                      ects: 12,
                    },
                    {
                      title: "Research methods",
                      ects: 6,
                    },
                    {
                      title: "Dissertation",
                      description:
                        "The dissertation is a compulsory element of Master of Science in Information Security. Dissertation is based on a major piece of work that involves applying material encountered in the taught component of the degree, and extending that knowledge with the student's contribution, under the guidance of a supervisor. This component of Masters degree provides opportunity for students to pursue a single topic in depth and to demonstrate evidence of research ability at a Masters level. The topic is typically a current problem in the broad area of their MSc programme. The dissertation usually involves experimental or theoretical research, or a substantial literature survey on a specific topic.",
                      ects: 24,
                    },
                  ],
                  institute: "Ego",
                  method:
                    "The programme comprises an online approach promoting the building of a community of practice via peer-to-peer learning which is asynchronous. Students have the freedom and flexibility to access the course at a time which is most convenient to them.",
                  price: 3000,
                  duration: 2,
                  category: "computer sicence",
                },
                {
                  id: "gH5iJ6kL",
                  name: "Business Administration",
                  startDate: "15 Feb 2023",
                  category: "business & commerce",
                  duration: "3 years",
                  location: "Online",
                  totalModules: 18,
                  admission: {
                    desc: "Students are required to reach specific agreements with the host company and communicate the following data in writing to Pegaso International to the mail: traineeship@pegasointernational.eu",
                    req: [
                      "three-year degree courses: 100 ECTS out of 180",
                      "master’s degree courses: 50 ECTS out of 120",
                      "one-year master degree course in Informatics: 20 ECTS out of 90",
                    ],
                  },
                  cur: "5",
                  media: {
                    type: "image",
                    source:
                      "https://losalamos.unm.edu/degrees-certificates/certificates/business-banner--website-1.png",
                  },
                  description:
                    "The 3-year Business Administration Degree Course offers students comprehensive training tailored to meet various business needs. Graduates acquire versatile skills that align well with workplace demands. The program covers diverse areas such as organizational management, finance, banking, and credit sectors. Students delve into key company functions like accounting, planning, legal, and tax activities, with a focus on small and medium-sized enterprises. They also have the option to specialize in corporate finance, financial markets, and the credit system. Career opportunities include administrative, financial, organizational, production, and marketing roles.",
                  slogan:
                    "Lead with Knowledge: Master the Science of Business Administration, Shaping Tomorrow's Business Landscape.",
                  promo: null,
                  thumb: "https://ibu.ca/wp-content/uploads/2024/01/m29.webp",
                  degree: "Bachelor Degree",
                  institute: "Pegaso",
                  totalEtc: 180,
                  price: 3000,
                  career: [
                    "Accountant",
                    "Condominium and Building Administrator",
                    "Organization and Management of Production Factors Technician",
                    "Insurance Agent",
                    "Sales and Distribution Technician",
                    "Marketing Technician",
                  ],
                  outcome: [
                    "Demonstrate managerial, consulting and business administration",
                    "Explain the difference between private and public organizations",
                    "Illustrate the functioning of modern business organizations and financial systems",
                    "Developing appropriate methods of analysis and critical interpretation of the structures and dynamics of companies",
                    "Express specific aspects of leadership, management and business administration",
                    "Identify specific types of businesses and financial intermediation",
                    "Develop appropriate methods of analysis and critical interpretation of the structures and dynamics of companies",
                    "Support the principles of sustainability",
                    "Combine the use of statistical tools and principles with the administration of businesses.",
                  ],
                  modules: [
                    {
                      title: "Economic History",
                      description:
                        "The Economic History module offers an in-depth exploration of the historical development of economic systems, institutions, and policies. It delves into the interplay between economic forces and historical events, examining how societies have organized their economies, allocated resources, and generated wealth over time. ects: 10",
                      ects: 10,
                    },
                    {
                      title: "Introduction to Accounting",
                      description:
                        "The Introduction to Accounting module serves as a foundational exploration into the fundamental principles, concepts, and practices of accounting. It provides students with a comprehensive understanding of the language of business, enabling them to interpret and analyze financial information essential for decision-making within organizations.",
                      ects: 10,
                    },
                    {
                      title: "Private Law",
                      description:
                        "Private law, also known as civil law, encompasses the legal rules and principles that govern the relationships between individuals and private entities. It primarily focuses on regulating interactions between private parties, such as individuals, corporations, and organizations, rather than addressing matters involving the government or public authorities.",
                      ects: 10,
                    },
                    {
                      title: "Tax Law",
                      description:
                        "Tax law refers to the body of legal rules and regulations that govern taxation, including the imposition, collection, and enforcement of taxes by governmental authorities. It encompasses a wide range of laws and statutes at the local, national, and international levels, designed to ensure compliance with tax obligations and to regulate the administration of tax systems.",
                      ects: 10,
                    },
                    {
                      title: "Statistics",
                      description:
                        "Statistics is a branch of mathematics that involves the collection, analysis, interpretation, presentation, and organization of numerical data. It provides methods and techniques for summarizing and understanding patterns and trends in data, making informed decisions, and drawing conclusions about populations or phenomena based on sample observations",
                      ects: 10,
                    },
                    {
                      title: "Financial accounting",
                      description:
                        "Financial accounting is a specialized branch of accounting that focuses on the recording, summarizing, and reporting of financial transactions of an organization to external stakeholders, such as investors, creditors, regulators, and the public. Its primary objective is to provide accurate and reliable financial information about the performance, financial position, and cash flows of the business.",
                      ects: 6,
                    },
                    {
                      title: "Business Communication Strategies",
                      description:
                        "Business communication strategies encompass the methods, techniques, and practices used by organizations to convey messages, exchange information, and build relationships with internal and external stakeholders. Effective communication is essential for achieving organizational objectives, fostering collaboration, enhancing productivity, and maintaining a positive corporate image.",
                      ects: 10,
                    },
                    {
                      title: "Commercial Law",
                      description:
                        "Commercial law, also known as business law or trade law, encompasses the legal rules and regulations that govern commercial transactions and business activities. It provides a framework for conducting business operations, resolving disputes, and ensuring fair competition in the marketplace.",
                      ects: 10,
                    },
                    {
                      title:
                        "Economics And Management Of Financial Intermediaries",
                      description:
                        "The Economics and Management of Financial Intermediaries is a specialized field within finance and economics that focuses on the role, functions, and operations of financial intermediaries in the economy. ",
                      ects: 15,
                    },
                    {
                      title: "Administrative Law",
                      description:
                        "Administrative Law is a branch of public law that governs the activities of administrative agencies of government. It encompasses a wide range of legal principles and rules that regulate the exercise of administrative power, the decision-making processes of administrative bodies, and the rights and duties of individuals affected by administrative actions.",
                      ects: 10,
                    },
                    {
                      title: "Business Organization",
                      description:
                        "Business Organization refers to the structure and framework within which a business operates and conducts its activities. It encompasses various elements such as the legal structure, management hierarchy, decision-making processes, operational procedures, and relationships between different stakeholders.",
                      ects: 10,
                    },
                    {
                      title: "Economics and Business Management",
                      description:
                        "Economics and Business Management is a multidisciplinary field that combines principles of economics with management theories and practices to analyze and address business-related challenges.",
                      ects: 15,
                    },
                    {
                      title: "Statistics for Economics",
                      description:
                        "Statistics for Economics is a foundational course that introduces students to statistical methods and techniques used in economic analysis and decision-making. ",
                      ects: 10,
                    },
                    {
                      title: "Political Economics",
                      description:
                        "Political economics is a field of study that examines the interaction between politics and economics, focusing on how political institutions, processes, and decisions influence economic outcomes and vice versa.",
                      ects: 10,
                    },
                    {
                      title: "Informatics – Computing Skills",
                      description:
                        "Informatics – Computing Skills encompasses a broad range of competencies related to computer science, information technology, and computational thinking.",
                      ects: 5,
                    },
                    {
                      title: "Electives",
                      description:
                        "Electives are courses within an academic program that students can choose based on their interests, career goals, or academic requirements. These courses are typically offered in addition to the required core curriculum, allowing students to tailor their education to suit their individual needs and preferences.",
                      ects: 12,
                    },
                    {
                      title:
                        "For internships and placements in, public or private organizations, professional orders",
                      description: "",
                      ects: 3,
                    },
                    {
                      title: "Final dissertation",
                      description: "",
                      ects: 5,
                    },
                  ],
                },
                {
                  id: "gH5iJ6km",
                  name: "Civil Engineering",
                  startDate: "18 Feb 2023",
                  duration: "3 years",
                  totalEtc: 180,
                  totalModules: 18,
                  category: "Constructions",
                  location: "Online",
                  cur: "9",
                  media: {
                    type: "image",
                    source:
                      "https://images.ctfassets.net/8bbwomjfix8m/3khjUHELqiZJVgdkpXSAZf/17faf9504845ad605296527fa90d8993/civil.jpg?fit=fill&w=1366&h=446&fm=jpg",
                  },
                  description:
                    "The areas of interest related to this 3-year bachelor Degree course in Civil Engineering are: construction (civil and industrial buildings, remarkable construction projects such as bridges, dams, tunnels, etc.) and infrastructures (roads and transportation, supply, distribution and water supply systems, etc.). In this context, the Civil Engineer deals with the design and construction of works and handles with their operation, maintenance, detection and control. In recent years, with regard to the Civil Engineering sector, has been increasingly developing the demand for specialised professional profiles such as, for example, the environmental and land Engineer or the Construction Engineer, who are now provided with dedicated training offers. The study course in Civil Engineering finds its applicability in the continuous request of professional profiles with a solid and wide knowledge flexibility and updating skills, essential to face the diverse matters and the continuous development of technologies related to the world of buildings and civil infrastructures",
                  slogan:
                    "Build the Future: Master the Science of Civil Engineering, Creating Sustainable Infrastructure for Generations.",

                  outcome: [
                    "Apply technical proficiency in the principles and methods essential to modern civil engineering practice.",
                    "Analyze emerging problems in educational situations through methods of discussion, reflexivity and professional writing, while paying attention to oral and written documentation of the experience.",
                    "Demonstrate understanding of global, societal, environmental, and sustainability issues related to civil engineering.",
                    "Exhibit effective communication, teamwork, entrepreneurial, and leadership skill.",
                    "Engage in ethical and responsible practice while pursuing professional growth.",
                    "Support the principles of sustainability.",
                  ],
                  career: [
                    "Structural Field",
                    "Environmental Field",
                    "Construction Field",
                    "Bridge Field",
                  ],
                  thumb:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZPGmlllWI0tQ5LTlqqOeNO_8QsLSjegqUg&usqp=CAU",
                  degree: "Bachelor Degree",
                  institute: "Pegaso",
                },
                {
                  id: "mN7oP8qR",
                  name: "Informatics",
                  startDate: "10 Mar 2023",
                  duration: "2 years",
                  location: "Online",
                  cur: "4",
                  media: {
                    type: "image",
                    source:
                      "https://uwm.edu/publichealth/wp-content/uploads/sites/571/2023/01/banner-certificate-health-care-informatics.jpg",
                  },
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
                  slogan:
                    "Transforming Data into Insights: Mastering Informatics for the Digital Age.",
                  //   thumb: thumb1,
                  degree: "Master Degree",
                  institute: "Pegaso",
                  thumb:
                    "https://thumbs.dreamstime.com/b/programming-web-banner-best-languages-technology-process-software-development-157259186.jpg",
                },
                {
                  id: "uX3yZ4aB",
                  name: "Sport Science",
                  startDate: "12 Aug 2023",
                  duration: "3 years",
                  location: "Online",
                  media: {
                    type: "image",
                    source:
                      "https://www.gicafd.ua.es/imageresizer.php?src=https://www.gicafd.ua.es/plantillas/gicafd/imagen/carousel/dp131956166.jpg&w=1024&h=512&mode=stretch",
                  },
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
                  slogan:
                    "Pushing Boundaries, Achieving Excellence: The Science of Sports Mastery.",
                  thumb:
                    "https://acpe.edu.au/uploads/2023/05/ACPE-Careers-in-Sport-thumbnail.jpg",
                  degree: "Bachelor Degree",
                  institute: "Pegaso",
                },
                {
                  id: "gH7iJ8kL",
                  name: "Educational Science",
                  startDate: "18 Oct 2023",
                  duration: "1 year",
                  location: "Online",
                  media: {
                    type: "image",
                    source:
                      "https://cognizant.scene7.com/is/image/cognizant/gmp-manufacturing-hero-banner",
                  },
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
                  slogan:
                    "Fostering Minds, Shaping Futures: A Journey in Educational Science.",
                  thumb:
                    "https://plus.unsplash.com/premium_photo-1682124416359-d48d59ad6916?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                  degree: "Bachelor Degree",
                  institute: "Pegaso",
                },
                {
                  id: "gH7iJ8UI",
                  name: "Educational Science",
                  startDate: "18 Oct 2023",
                  duration: "1 year",
                  location: "Online",
                  media: {
                    type: "image",
                    source:
                      "https://cognizant.scene7.com/is/image/cognizant/gmp-manufacturing-hero-banner",
                  },
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
                  slogan:
                    "Fostering Minds, Shaping Futures: A Journey in Educational Science.",
                  thumb:
                    "https://plus.unsplash.com/premium_photo-1682124416359-d48d59ad6916?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                  degree: "PhD",
                  institute: "Pegaso",
                },
              ],
              button: "Read More",
              title: "Overview",
              title1 : "Career",
              title2: "Course Info",
              title3: "You May Also Be Interested In",
              tab2 : "Entry Requirements",
              tab3 : "Modules",
              tab4: "Admission",
              tab5: "Lecturer"
            },
          },
          widget: {
            apply: {
              line1: "Why Ego-Education ?",
              line2:
                "Advance your career through continuous learning. Expand your skillset, gain industry certifications, learn on your schedule, and do it all at a lower cost. Online education provides opportunities for career growth that will benefit you for years to come.",
              button: "Apply Now",
            },
            contact: {
              line1: "Stay In Touch",
              line2:
                "We value your feedback and inquiries, whether you have questions about our services, need assistance with your order, or simply want to share your thoughts, we're here to help.",
              line3: "24/7 Contact Support",
            },
            info: {
              category: "Category",
              modules: "Modules",
              duration: "Duration",
              price: "Price",
            },
          },
          degrees: {
            d1: "Master's Degree",
            d2: "Bachelor's Degree",
            d3: "PhD",
          },
          courseTab: {
            tab: "Our Courses",
          },
        },
      },
      br: {
        translation: {
          home: {
            hero: {
              line1: "Acelere sua carreira com um diploma online.",
              line2: "Aprenda de qualquer lugar. Avance mais rápido.",
              line3:
                "Nossos programas credenciados fornecem habilidades demandadas para expandir suas oportunidades.",
              button: "Explorar",
            },
            nav: {
              home: "Home",
              courses: "Cursos",
              eLearning: "e-Aprender",
              partners: "parceiros",
              research: "Pesquisa Ego",
              apply: "Inscreva-se",
              about: "Sobre nós",
            },
            banner: {
              line1: "Por que Ego?",
              line2:
                "A eGO Educação é uma marca do Instituto Internacional de Ensino Eletrônico Ltda (IELI), um Instituto de Ensino Superior sediado em Malta, criado graças à experiência decenal de seus fundadores no campo da educação universitária online.",
              line3:
                "Com nossa experiência de aprendizado 100% online, você obtém um diploma reconhecido internacionalmente sem interromper sua vida.",
              line4:
                "Estude à noite e nos finais de semana, no seu próprio ritmo.",
              button: "Inscreva-se Agora",
            },
            homeFeatures: {
              sectionHeader: {
                title: "Recursos",
                subtitle: "Estude de forma flexível em torno da sua vida",
                description:
                  "Nossos cursos online na nossa plataforma estão sempre disponíveis, para que você possa ajustar seus estudos à sua agenda ocupada.",
              },
              bulls: {
                b1: "Acesso 24/7",
                b2: "Personalizado e Flexível",
                b3: "Oportunidades Globais",
              },
              features: [
                {
                  title: "Cursos Online",
                  description:
                    "Acesse aulas, materiais e interaja com colegas e professores a qualquer momento.",
                },
                {
                  title: "Professores Especializados",
                  description:
                    "Nossos professores de classe mundial têm extensa experiência profissional, garantindo que você receba uma educação de alta qualidade e habilidades práticas.",
                },
                {
                  title: "Comunidade",
                  description:
                    "Nossa plataforma permite que os alunos se comuniquem entre si. Graças aos grupos de estudo, você fará parte de uma comunidade internacional.",
                },
              ],
            },
            homeFeatures_2: {
              title: "OPORTUNIDADES",
              subtitle: "Comece a transformar o seu",
              specialWord: "Futuro",
              normalWord: "hoje",
              description:
                "Embarque em uma jornada de transformação hoje e desbloqueie oportunidades ilimitadas para o seu futuro. Com nossos programas de graduação internacionalmente aclamados, você se equipará com as qualificações essenciais para prosperar na paisagem global de hoje. Nossos diplomas são reconhecidos em toda a UE e facilmente validados em nações da Commonwealth, oferecendo a você um passaporte para diversas perspectivas de carreira em todo o mundo.",
              features: [
                {
                  icon: faPersonChalkboard,
                  title: "Qualificação Internacional",
                  description:
                    "Ao se formar, você obterá um diploma reconhecido internacionalmente que o ajudará a se qualificar para oportunidades de carreira local e no exterior.",
                },
                {
                  icon: faLaptopCode,
                  title: "Um Mundo de Oportunidades",
                  description:
                    "Nossos diplomas são reconhecidos em toda a UE e facilmente validados em países da Commonwealth.",
                },
                {
                  icon: faUserGraduate,
                  title:
                    "Obtenha as Qualificações de que Você Precisa Para Avançar",
                  description:
                    "Inscreva-se agora para iniciar um mestrado online que acelerará sua carreira e transformará sua vida para melhor.",
                },
              ],
            },
            courseSlider: {
              title: "EXPLORAR TODOS OS CURSOS",
              subtitle: "Explore Nossos",
              specialWord: "Cursos",
              curriculum: "Currículo",
              readMore: "Leia Mais",
              courses: [
                {
                  title: "Mestrado em Programação Java",
                  description:
                    "Domine a arte do desenvolvimento de software com nosso programa abrangente de mestrado em Programação Java.",
                  imgSrc: coursePic,
                  date: "12/08/24",
                  curriculum: 3,
                },
                {
                  title: "Mestrado em Segurança da Informação",
                  description:
                    "Garanta seu futuro com expertise: domine a ciência da Segurança da Informação, protegendo a paisagem digital de amanhã.",
                  imgSrc:
                    "https://www.ipsr.org/uploads/2024/01/cybersecurity-thumb-copy-1.jpg",
                  date: "12/09/24",
                  curriculum: 8,
                },
                {
                  title: "Administração de Empresas",
                  description:
                    "Lidere com conhecimento: domine a ciência da Administração de Empresas, moldando o cenário empresarial de amanhã.",
                  imgSrc:
                    "https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2022/11/New-Green-Modern-Business-YouTube-Thumbnail-1.webp",
                  date: "25/10/24",
                  curriculum: 2,
                  featured: true,
                },
              ],
            },
            homeLecturers: {
              title: "PROFESSORES",
              subtitle: "Conheça os Nossos",
              specialWord: "Professores",
            },
            courseDetails: {
              coursesData: [
                {
                  id: "aB3cD4eF",
                  name: "Mestrado em Ciência da Programação Java",
                  startDate: "01 Jan 2023",
                  duration: "2 anos",
                  location: "Presencial",
                  totalEtc: 90,
                  cur: "2",
                  admission: {
                    desc: "Os alunos devem firmar acordos específicos com a empresa anfitriã e comunicar os seguintes dados por escrito à Ego Education no e-mail: info@ego-education.com",
                    req: [
                      "cursos de graduação de três anos: 50 ECTS de 90",
                      "cursos de mestrado: 50 ECTS de 90",
                      "curso de mestrado de um ano em Informática: 20 ECTS de 90",
                    ],
                  },
                  media: {
                    type: "imagem",
                    source:
                      "https://t4.ftcdn.net/jpg/06/87/83/03/360_F_687830359_0gDt5GdOpAE51LqpgxgrNGhlH9Jb2TBm.jpg",
                  },
                  career: [
                    "Programador Java",
                    "Engenheiro de Software",
                    "Gerente de Programa de TI/Java",
                  ],
                  description:
                    "O objetivo do curso é permitir que os alunos lidem com todo o ciclo de desenvolvimento de software, desde a análise das necessidades do cliente até a estruturação do banco de dados, desde o design da interface do usuário até a construção do back-end usando o modelo de programação orientada a objetos e a linguagem Java.",
                  slogan:
                    "Domine a Arte do Desenvolvimento de Software com o Nosso Abrangente Programa de Mestrado em Programação Java.",
                  thumb:
                    "https://dce0qyjkutl4h.cloudfront.net/wp-content/webp-express/webp-images/uploads/2023/08/Java-enterprise-solutions.jpg.webp",
                  degree: "Mestrado",
                  institute: "Ego",
                  modules: [
                    {
                      title: "Java Básico",
                      description:
                        "O módulo explora os fundamentos da programação Java e da programação orientada a objetos. O módulo Java Básico fornece aos alunos uma base sólida em programação Java, atendendo tanto a iniciantes quanto àqueles com experiência limitada em codificação. Ao longo deste módulo, os alunos embarcarão em uma jornada para dominar os conceitos essenciais do Java, permitindo-lhes analisar criticamente o código, entender os princípios de programação orientada a objetos e construir aplicativos Java básicos.",
                      ects: 12,
                    },
                    {
                      title: "Java Avançado",
                      description:
                        "O módulo apresenta as técnicas para uma boa programação Java e a API do Framework Java. O módulo Java Avançado é projetado para capacitar os alunos com uma compreensão mais profunda da linguagem de programação Java, equipando-os com a experiência necessária para enfrentar projetos de software complexos e alavancar efetivamente o rico ecossistema do Java. Ao longo deste módulo, os alunos dominarão conceitos e estruturas Java avançados, permitindo-lhes analisar e aplicar criticamente seu conhecimento a cenários reais de desenvolvimento de software.",
                      ects: 12,
                    },
                    {
                      title: "Banco de Dados e SQL",
                      description:
                        "O módulo define as técnicas para a persistência de dados e para o acesso a dados via Linguagem de Consulta Estruturada. O módulo Banco de Dados e SQL oferece uma exploração abrangente de Sistemas de Gerenciamento de Banco de Dados (SGBD) e Linguagem de Consulta Estruturada (SQL). Projetado para estudantes que buscam uma compreensão mais profunda da gestão de dados e do design de banco de dados, este módulo os equipa com as habilidades necessárias para analisar criticamente relações de dados, planejar e implementar bancos de dados em um Sistema de Gerenciamento de Banco de Dados Relacional (SGBDR) e empregar comandos SQL avançados de forma eficaz.",
                      ects: 12,
                    },
                    {
                      title: "Acesso a Bancos de Dados a partir de Aplicações",
                      description:
                        "O módulo define as técnicas de acesso remoto a dados persistentes a partir de uma aplicação Java. O módulo de Acesso a Bancos de Dados a partir de Aplicações oferece aos alunos uma exploração abrangente da interseção crítica entre o desenvolvimento de aplicativos e a gestão de bancos de dados. Este módulo equipa os alunos com as habilidades e conhecimentos necessários para acessar, manipular e gerenciar efetivamente dados armazenados em Sistemas de Gerenciamento de Banco de Dados Relacional (SGBDR) a partir de aplicativos Java. Ao longo deste curso, os alunos obterão um profundo entendimento do controle de acesso, sistemas de controle de acesso e o uso do Java Persistence API (JPA).",
                      ects: 12,
                    },
                    {
                      title: "Aplicações Web",
                      description:
                        "O módulo abrange a implementação do projeto completo de aplicativo web, back-end, front-end e gerenciamento de sistemas de terceiros usados para persistência de dados. O módulo de Aplicações Web fornece aos alunos uma exploração aprofundada das tecnologias e princípios por trás do desenvolvimento web moderno. Os alunos desenvolverão um profundo entendimento da arquitetura de aplicativos web, padrões de design e as complexidades dos protocolos da web. Este módulo os equipa com as habilidades e o conhecimento crítico necessários para projetar, desenvolver e implantar sistemas de software baseados na web, com um foco específico no framework J2EE e no Java Spring Framework.",
                      ects: 12,
                    },
                    {
                      title: "Métodos de Pesquisa",
                      description: "",
                      ects: 6,
                    },
                    {
                      title: "Dissertação",
                      description:
                        "A dissertação é um elemento obrigatório do Mestrado em Ciência da Programação Java. A dissertação é baseada em uma grande obra que envolve a aplicação do material encontrado no componente ensinado do curso e a extensão desse conhecimento com a contribuição do aluno, sob a orientação de um supervisor. Este componente do mestrado oferece a oportunidade para os alunos explorarem um único tópico em profundidade e demonstrarem evidências de habilidade de pesquisa em nível de mestrado. O tópico é tipicamente um problema atual na ampla área do programa de mestrado em Ciência da Computação. A dissertação geralmente envolve pesquisa experimental ou teórica, ou um levantamento substancial da literatura sobre um tópico específico.",
                      ects: 24,
                    },
                  ],
                  totalModules: 7,
                  videos: [
                    { src: "img/vid-1.mp4", title: "Introdução" },
                    { src: "img/vid-2.mp4", title: "exemplo de vídeo 1" },
                    { src: "img/vid-3.mp4", title: "exemplo de vídeo 2" },
                    { src: "img/vid-4.mp4", title: "exemplo de vídeo 3" },
                  ],
                  method:
                    "O programa compreende uma abordagem online promovendo a construção de uma comunidade de prática por meio de aprendizado entre pares que é assíncrono. Os alunos têm liberdade e flexibilidade para acessar o curso no momento que for mais conveniente para eles.",
                  price: 3000,
                  duration: 2,
                  category: "ciência da computação",
                },
                {
                  id: "tU1vW2xY",
                  name: "Mestrado em Segurança da Informação",
                  startDate: "05 Jun 2023",
                  duration: "2 anos",
                  location: "Online",
                  totalModules: 7,
                  career: [
                    "Gerente de Segurança da Informação",
                    "Oficial de Segurança da Informação",
                    "Analista de Segurança da Informação",
                    "Consultor de Segurança da Informação",
                    "Gerentes",
                    "Líderes empresariais",
                    "Tomadores de decisão",
                  ],
                  media: {
                    type: "imagem",
                    source:
                      "https://www.tees.ac.uk/Images/CommonImages/prospectus/PG/course_images/Cybersecurity.jpg",
                  },
                  description:
                    "O objetivo do curso é adquirir conhecimento e habilidades críticas e aprofundadas necessárias para definir estratégias de segurança de TI, implementar programas de proteção de ativos corporativos e desenvolver e implementar processos sobre mitigação de riscos de TI. Os alunos desenvolverão um conhecimento avançado de segurança da informação e uma consciência do contexto em que a segurança da informação opera em termos de aspectos de segurança, ambientais, sociais e econômicos. Eles também adquirirão uma ampla gama de habilidades intelectuais, práticas e transferíveis, possibilitando-lhes desenvolver uma carreira profissional flexível em TI e SI.",
                  slogan:
                    "Proteja o seu Futuro com Expertise: Domine a Ciência da Segurança da Informação, Salvaguardando o Ambiente Digital de Amanhã.",

                  totalEtc: 90,
                  thumb:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWLWva0-DKp5IxK-HF9ZoqeT5YRas0sbZ8w&usqp=CAU",
                  degree: "Mestrado",
                  modules: [
                    {
                      title: "Governança e Gerenciamento de Riscos",
                      description:
                        "O módulo explora as técnicas de Gerenciamento de Riscos e Governança inerentes à segurança dos sistemas de uma empresa. O objetivo do módulo é estudar em profundidade o conhecimento necessário por um profissional de gerenciamento de TI para definir o plano e a estratégia de segurança de TI, implementar programas de proteção de ativos corporativos e desenvolver e implementar processos sobre mitigação de riscos de TI. Os alunos deste módulo analisarão as mudanças, tendências e melhores práticas de segurança da informação e cobrirão o processo e os procedimentos de conformidade com a segurança da informação.",
                      ects: 12,
                    },
                    {
                      title:
                        "Segurança da Informação, Controles, Conformidade e Gestão de Auditoria",
                      description:
                        "O módulo apresenta as técnicas para identificar questões críticas, definir documentação e coletar dados para garantir a segurança dos sistemas de TI. Este módulo apresenta as técnicas usadas para verificar a segurança e foca nas áreas relacionadas ao Controle de Segurança da Informação, Conformidade e Gestão de Auditoria. Os alunos deste módulo analisarão criticamente os conceitos de segurança corporativa, seu design e implementação para poder projetar controles de sistemas de informação eficazes que estejam alinhados com processos e objetivos operacionais. Além disso, os alunos ganharão uma compreensão crítica e a capacidade de analisar o processo de auditoria de TI e as normas de auditoria de TI.",
                      ects: 12,
                    },
                    {
                      title: "Gestão de Programa de Segurança e Operações",
                      description:
                        "O módulo define as técnicas para a realização e gestão qualitativa de um projeto de TI no campo da segurança. Este módulo explora a Gestão de Programa de Segurança e Operações, abrangendo as metodologias de desenvolvimento e implementação de um projeto de segurança de TI do ponto de vista da gestão de projetos. Os alunos deste módulo serão expostos à análise crítica do escopo, práticas e controles de gerenciamento de projetos, apontarão as atividades necessárias para executar com sucesso o programa de sistemas de informação, estimarão a duração da atividade e desenvolverão um cronograma e um plano de pessoal. O conteúdo também abordará incompatibilidades, desafios ou problemas relacionados a projetos e fornecedores e como gerenciar as expectativas das partes interessadas.",
                      ects: 12,
                    },
                    {
                      title:
                        "Competências Essenciais em Segurança da Informação",
                      description:
                        "O módulo define as técnicas para a gestão “física” da segurança, identificação de funções, políticas etc. no campo da segurança. O módulo abrange as Competências Essenciais em Segurança da Informação e explora os métodos para identificar tecnologias úteis para a segurança de TI. O objetivo deste módulo é obter a compreensão crítica e o conhecimento em profundidade dos critérios para controles de acesso obrigatórios e discricionários e entender os diferentes fatores que ajudam na implementação de controles de acesso e projetar um plano de controle de acesso. Os alunos também avaliarão vários conceitos de engenharia social e seu papel em ataques internos e desenvolverão melhores práticas para combater ataques de engenharia social.",
                      ects: 12,
                    },
                    {
                      title: "Planejamento Estratégico e Finanças",
                      description:
                        "O módulo abrange a implementação do projeto de TI, a conformidade com os regulamentos e a gestão de sistemas de terceiros usados para gestão de segurança. Este módulo explora a parte administrativa de um projeto de segurança de TI; define os objetivos estratégicos, as relações com os fornecedores, a conformidade com os regulamentos, a gestão de orçamentos, as relações com as partes interessadas. O objetivo deste módulo é desenvolver uma compreensão em profundidade e conhecimento crítico dos objetivos da organização, planos estratégicos e metas que suportam as necessidades operacionais da organização, incluindo a avaliação de riscos potenciais, vinculados à capacidade de previsão de cenários futuros. Os alunos também identificarão como relatar métricas financeiras às partes interessadas. Eles avaliarão diferentes aquisições, como Declaração de Objetivos (SOO), Declaração de Trabalho (SOW) e Custo Total de Propriedade (TCO).",
                      ects: 12,
                    },
                    {
                      title: "Métodos de Pesquisa",
                      ects: 6,
                    },
                    {
                      title: "Dissertação",
                      description:
                        "A dissertação é um elemento obrigatório do Mestrado em Ciência da Segurança da Informação. A dissertação é baseada em uma grande obra que envolve a aplicação do material encontrado no componente ensinado do curso e a extensão desse conhecimento com a contribuição do aluno, sob a orientação de um supervisor. Este componente do mestrado oferece a oportunidade para os alunos explorarem um único tópico em profundidade e demonstrarem evidências de habilidade de pesquisa em nível de mestrado. O tópico é tipicamente um problema atual na ampla área do programa de mestrado em Ciência da Computação. A dissertação geralmente envolve pesquisa experimental ou teórica, ou um levantamento substancial da literatura sobre um tópico específico.",
                      ects: 24,
                    },
                  ],
                  institute: "Ego",
                  method:
                    "O programa compreende uma abordagem online promovendo a construção de uma comunidade de prática por meio de aprendizado entre pares que é assíncrono. Os alunos têm liberdade e flexibilidade para acessar o curso no momento que for mais conveniente para eles.",
                  price: 3000,
                  duration: 2,
                  category: "ciência da computação",
                },
                {
                  id: "gH5iJ6kL",
                  name: "Administração de Empresas",
                  startDate: "15 Fev 2023",
                  category: "negócios e comércio",
                  duration: "3 anos",
                  location: "Online",
                  totalModules: 18,
                  admission: {
                    desc: "Os alunos devem chegar a acordos específicos com a empresa anfitriã e comunicar os seguintes dados por escrito à Pegaso International pelo e-mail: traineeship@pegasointernational.eu",
                    req: [
                      "cursos de graduação de três anos: 100 ECTS de 180",
                      "cursos de mestrado: 50 ECTS de 120",
                      "curso de mestrado de um ano em Informática: 20 ECTS de 90",
                    ],
                  },
                  cur: "5",
                  media: {
                    type: "imagem",
                    source:
                      "https://losalamos.unm.edu/degrees-certificates/certificates/business-banner--website-1.png",
                  },
                  description:
                    "O Curso de Administração de Empresas de 3 anos oferece aos alunos treinamento abrangente adaptado para atender às várias necessidades de negócios. Os graduados adquirem habilidades versáteis que se alinham bem com as demandas do local de trabalho. O programa abrange diversas áreas, como gestão organizacional, finanças, setores bancários e de crédito. Os alunos mergulham nas principais funções da empresa, como contabilidade, planejamento, atividades legais e fiscais, com foco em pequenas e médias empresas. Eles também têm a opção de se especializar em finanças corporativas, mercados financeiros e sistema de crédito. As oportunidades de carreira incluem funções administrativas, financeiras, organizacionais, de produção e de marketing.",
                  slogan:
                    "Lidere com Conhecimento: Domine a Ciência da Administração de Empresas, Moldando o Panorama Empresarial do Amanhã.",

                  thumb: "https://ibu.ca/wp-content/uploads/2024/01/m29.webp",
                  degree: "Bacharelado",
                  institute: "Pegaso",
                  totalEtc: 180,
                  price: 3000,
                  career: [
                    "Contador",
                    "Administrador de Condomínios e Edifícios",
                    "Técnico em Organização e Gestão de Fatores de Produção",
                    "Corretor de Seguros",
                    "Técnico em Vendas e Distribuição",
                    "Técnico em Marketing",
                  ],
                  outcome: [
                    "Demonstrar habilidades gerenciais, de consultoria e administração de empresas",
                    "Explicar a diferença entre organizações privadas e públicas",
                    "Ilustrar o funcionamento de organizações empresariais modernas e sistemas financeiros",
                    "Desenvolver métodos apropriados de análise e interpretação crítica das estruturas e dinâmicas das empresas",
                    "Expressar aspectos específicos de liderança, gestão e administração de empresas",
                    "Identificar tipos específicos de negócios e intermediação financeira",
                    "Desenvolver métodos apropriados de análise e interpretação crítica das estruturas e dinâmicas das empresas",
                    "Apoiar os princípios de sustentabilidade",
                    "Combinar o uso de ferramentas e princípios estatísticos com a administração de empresas",
                  ],
                  modules: [
                    {
                      title: "História Econômica",
                      description:
                        "O módulo de História Econômica oferece uma exploração aprofundada do desenvolvimento histórico de sistemas econômicos, instituições e políticas. Ele mergulha na interação entre forças econômicas e eventos históricos, examinando como as sociedades organizaram suas economias, alocaram recursos e geraram riqueza ao longo do tempo.",
                      ects: 10,
                    },
                    {
                      title: "Introdução à Contabilidade",
                      description:
                        "O módulo de Introdução à Contabilidade serve como uma exploração fundamental dos princípios, conceitos e práticas fundamentais da contabilidade. Ele fornece aos alunos uma compreensão abrangente da linguagem dos negócios, permitindo-lhes interpretar e analisar informações financeiras essenciais para a tomada de decisões dentro das organizações.",
                      ects: 10,
                    },
                    {
                      title: "Direito Privado",
                      description:
                        "O direito privado, também conhecido como direito civil, engloba as regras legais e princípios que regem as relações entre indivíduos e entidades privadas. Ele se concentra principalmente na regulamentação das interações entre partes privadas, como indivíduos, corporações e organizações, em vez de abordar questões envolvendo o governo ou autoridades públicas.",
                      ects: 10,
                    },
                    {
                      title: "Direito Tributário",
                      description:
                        "O direito tributário refere-se ao conjunto de regras legais e regulamentos que regem a tributação, incluindo a imposição, cobrança e aplicação de impostos por autoridades governamentais. Ele abrange uma ampla gama de leis e estatutos nos níveis local, nacional e internacional, projetados para garantir o cumprimento das obrigações tributárias e regular a administração dos sistemas tributários.",
                      ects: 10,
                    },
                    {
                      title: "Estatística",
                      description:
                        "A estatística é um ramo da matemática que envolve a coleta, análise, interpretação, apresentação e organização de dados numéricos. Ela fornece métodos e técnicas para resumir e entender padrões e tendências em dados, tomar decisões informadas e tirar conclusões sobre populações ou fenômenos com base em observações de amostra.",
                      ects: 10,
                    },
                    {
                      title: "Contabilidade Financeira",
                      description:
                        "A contabilidade financeira é um ramo especializado da contabilidade que se concentra no registro, resumo e relato de transações financeiras de uma organização para partes interessadas externas, como investidores, credores, reguladores e o público. Seu objetivo principal é fornecer informações financeiras precisas e confiáveis sobre o desempenho, posição financeira e fluxos de caixa da empresa.",
                      ects: 6,
                    },
                    {
                      title: "Estratégias de Comunicação Empresarial",
                      description:
                        "As estratégias de comunicação empresarial englobam os métodos, técnicas e práticas usadas pelas organizações para transmitir mensagens, trocar informações e construir relacionamentos com partes interessadas internas e externas. A comunicação eficaz é essencial para alcançar os objetivos organizacionais, fomentar a colaboração, aumentar a produtividade e manter uma imagem corporativa positiva.",
                      ects: 10,
                    },
                    {
                      title: "Direito Comercial",
                      description:
                        "O direito comercial, também conhecido como direito empresarial ou direito comercial, engloba as regras legais e regulamentos que regem transações comerciais e atividades empresariais. Ele fornece um quadro para conduzir operações comerciais, resolver disputas e garantir uma competição justa no mercado.",
                      ects: 10,
                    },
                    {
                      title: "Economia e Gestão de Intermediários Financeiros",
                      description:
                        "A Economia e Gestão de Intermediários Financeiros é uma área especializada dentro da financeira e economia que se concentra no papel, funções e operações de intermediários financeiros na economia.",
                      ects: 15,
                    },
                    {
                      title: "Direito Administrativo",
                      description:
                        "O Direito Administrativo é um ramo do direito público que governa as atividades das agências administrativas do governo. Ele abrange uma ampla gama de princípios legais e regras que regulam o exercício do poder administrativo, os processos de tomada de decisão dos órgãos administrativos e os direitos e deveres das pessoas afetadas por ações administrativas.",
                      ects: 10,
                    },
                    {
                      title: "Organização Empresarial",
                      description:
                        "A Organização Empresarial refere-se à estrutura e ao modelo dentro dos quais uma empresa opera e conduz suas atividades. Ela abrange diversos elementos, como estrutura legal, hierarquia de gestão, processos de tomada de decisão, procedimentos operacionais e relacionamentos entre diferentes partes interessadas.",
                      ects: 10,
                    },
                    {
                      title: "Economia e Gestão Empresarial",
                      description:
                        "A Economia e Gestão Empresarial é um campo multidisciplinar que combina princípios de economia com teorias e práticas de gestão para analisar e enfrentar desafios relacionados aos negócios.",
                      ects: 15,
                    },
                    {
                      title: "Estatística para Economia",
                      description:
                        "A Estatística para Economia é um curso fundamental que introduz os alunos aos métodos e técnicas estatísticas usados na análise econômica e na tomada de decisões.",
                      ects: 10,
                    },
                    {
                      title: "Economia Política",
                      description:
                        "A economia política é um campo de estudo que examina a interação entre política e economia, concentrando-se em como instituições políticas, processos e decisões influenciam os resultados econômicos e vice-versa.",
                      ects: 10,
                    },
                    {
                      title: "Informática - Habilidades em Computação",
                      description:
                        "Informática - Habilidades em Computação engloba uma ampla gama de competências relacionadas à ciência da computação, tecnologia da informação e pensamento computacional.",
                      ects: 5,
                    },
                    {
                      title: "Eletivas",
                      description:
                        "Eletivas são cursos dentro de um programa acadêmico que os alunos podem escolher com base em seus interesses, objetivos de carreira ou requisitos acadêmicos. Esses cursos são geralmente oferecidos além do currículo básico obrigatório, permitindo que os alunos personalizem sua educação de acordo com suas necessidades e preferências individuais.",
                      ects: 12,
                    },
                    {
                      title:
                        "Para estágios e colocações em organizações públicas ou privadas, ordens profissionais",
                      description: "",
                      ects: 3,
                    },
                    {
                      title: "Dissertação final",
                      description: "",
                      ects: 5,
                    },
                  ],
                },
                {
                  id: "gH5iJ6km",
                  name: "Engenharia Civil",
                  startDate: "18 Fev 2023",
                  duration: "3 anos",
                  totalEtc: 180,
                  totalModules: 18,
                  category: "Construções",
                  location: "Online",
                  cur: "9",
                  media: {
                    type: "imagem",
                    source:
                      "https://images.ctfassets.net/8bbwomjfix8m/3khjUHELqiZJVgdkpXSAZf/17faf9504845ad605296527fa90d8993/civil.jpg?fit=fill&w=1366&h=446&fm=jpg",
                  },
                  description:
                    "As áreas de interesse relacionadas a este curso de bacharelado em Engenharia Civil de 3 anos são: construção (edifícios civis e industriais, projetos de construção notáveis como pontes, barragens, túneis, etc.) e infraestruturas (estradas e transporte, sistemas de abastecimento, distribuição e fornecimento de água, etc.). Nesse contexto, o Engenheiro Civil lida com o projeto e a construção de obras e cuida da operação, manutenção, detecção e controle delas. Nos últimos anos, com relação ao setor de Engenharia Civil, vem crescendo cada vez mais a demanda por perfis profissionais especializados, como, por exemplo, o Engenheiro Ambiental e de Terras ou o Engenheiro de Construção, que agora contam com ofertas de treinamento dedicadas. O curso de estudo em Engenharia Civil encontra sua aplicabilidade na contínua solicitação de perfis profissionais com sólida e ampla flexibilidade de conhecimento e habilidades de atualização, essenciais para enfrentar os diversos assuntos e o contínuo desenvolvimento de tecnologias relacionadas ao mundo das construções e infraestruturas civis.",
                  slogan:
                    "Construa o Futuro: Domine a Ciência da Engenharia Civil, Criando Infraestrutura Sustentável para as Gerações Futuras.",

                  outcome: [
                    "Aplicar proficiência técnica nos princípios e métodos essenciais para a prática moderna de engenharia civil.",
                    "Analisar problemas emergentes em situações educacionais por meio de métodos de discussão, reflexividade e escrita profissional, prestando atenção à documentação oral e escrita da experiência.",
                    "Demonstrar compreensão de questões globais, sociais, ambientais e de sustentabilidade relacionadas à engenharia civil.",
                    "Exibir habilidades eficazes de comunicação, trabalho em equipe, empreendedorismo e liderança.",
                    "Engajar-se em práticas éticas e responsáveis enquanto busca crescimento profissional.",
                    "Apoiar os princípios de sustentabilidade.",
                  ],
                  career: [
                    "Campo Estrutural",
                    "Campo Ambiental",
                    "Campo da Construção",
                    "Campo de Pontes",
                  ],
                  thumb:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZPGmlllWI0tQ5LTlqqOeNO_8QsLSjegqUg&usqp=CAU",
                  degree: "Bacharelado",
                  institute: "Pegaso",
                },
                {
                  id: "mN7oP8qR",
                  name: "Informática",
                  startDate: "10 Mar 2023",
                  duration: "2 anos",
                  location: "Online",
                  cur: "4",
                  thumb:
                    "https://thumbs.dreamstime.com/b/programming-web-banner-best-languages-technology-process-software-development-157259186.jpg",
                  media: {
                    type: "imagem",
                    source:
                      "https://uwm.edu/publichealth/wp-content/uploads/sites/571/2023/01/banner-certificate-health-care-informatics.jpg",
                  },
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
                  slogan:
                    "Transformando Dados em Insights: Dominando a Informática para a Era Digital.",
                  institute: "Pegaso",
                  degree: "Mestrado",
                },
                {
                  id: "uX3yZ4aB",
                  name: "Ciência do Esporte",
                  startDate: "12 Ago 2023",
                  duration: "3 anos",
                  location: "Online",
                  media: {
                    type: "imagem",
                    source:
                      "https://www.gicafd.ua.es/imageresizer.php?src=https://www.gicafd.ua.es/plantillas/gicafd/imagen/carousel/dp131956166.jpg&w=1024&h=512&mode=stretch",
                  },
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
                  slogan:
                    "Empurrando Limites, Alcançando a Excelência: A Ciência da Maestria Esportiva.",

                  thumb:
                    "https://acpe.edu.au/uploads/2023/05/ACPE-Careers-in-Sport-thumbnail.jpg",
                  degree: "Bacharelado",
                  institute: "Pegaso",
                },
                {
                  id: "gH7iJ8kL",
                  name: "Ciência Educacional",
                  startDate: "18 Out 2023",
                  duration: "1 ano",
                  location: "Online",
                  media: {
                    type: "imagem",
                    source:
                      "https://cognizant.scene7.com/is/image/cognizant/gmp-manufacturing-hero-banner",
                  },
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
                  slogan:
                    "Nutrindo Mentes, Moldando Futuros: Uma Jornada em Ciência Educacional.",

                  thumb:
                    "https://plus.unsplash.com/premium_photo-1682124416359-d48d59ad6916?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                  degree: "Bacharelado",
                  institute: "Pegaso",
                },
                {
                  id: "gH7iJ8UI",
                  name: "Ciência Educacional",
                  startDate: "18 Out 2023",
                  duration: "1 ano",
                  location: "Online",
                  media: {
                    type: "imagem",
                    source:
                      "https://cognizant.scene7.com/is/image/cognizant/gmp-manufacturing-hero-banner",
                  },
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
                  slogan:
                    "Nutrindo Mentes, Moldando Futuros: Uma Jornada em Ciência Educacional.",

                  thumb:
                    "https://plus.unsplash.com/premium_photo-1682124416359-d48d59ad6916?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                  degree: "Doutorado",
                  institute: "Pegaso",
                },
              ],
              button: "Leer Más",
              title: "Visão Geral",
              title1 : "Carreira",
              title2: "Informações do Curso",
              title3: "Você Também Pode se Interessar Por",
              tab2 : "Requisitos de entrada",
              tab3 : "Módulos",
              tab4: "Admissão",
              tab5: "Palestrante"
            },
          },
          widget: {
            apply: {
              line1: "Por que Ego-Educação?",
              line2:
                "Avance em sua carreira por meio de aprendizado contínuo. Amplie seu conjunto de habilidades, obtenha certificações da indústria, aprenda em seu próprio ritmo e faça tudo isso a um custo mais baixo. A educação online oferece oportunidades de crescimento profissional que beneficiarão você nos próximos anos.",
              button: "Inscreva-se",
            },
            contact: {
              line1: "Permaneça em Contato",
              line2:
                "Valorizamos seus comentários e perguntas, seja para dúvidas sobre nossos serviços, necessidade de assistência com seu pedido, ou apenas para compartilhar suas ideias, estamos aqui para ajudar.",
              line3: "Suporte de Contato 24/7",
            },
            info: {
              category: "Categoria",
              modules: "Módulos",
              duration: "Duração",
              price: "Preço",
            },
          },
          degrees: {
            d1: "Mestrado",
            d2: "Bacharelado",
            d3: "Doutorado",
          },
          courseTab: {
            tab: "Nossos Cursos",
          },
        },
      },
    },
  });
