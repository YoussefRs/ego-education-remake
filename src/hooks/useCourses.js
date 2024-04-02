const useCourse = (req) => {
  const coursesData = [
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
      promo: null,
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
      promo: null,
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
          title: "Economics And Management Of Financial Intermediaries",
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
      promo: null,
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
      promo: { value: "20%", requirement: "Online application" },
      //   thumb: thumb1,
      degree: "Master Degree",
      institute: "Pegaso",
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
      promo: null,
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
      promo: null,
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
      promo: null,
      thumb:
        "https://plus.unsplash.com/premium_photo-1682124416359-d48d59ad6916?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      degree: "PhD",
      institute: "Pegaso",
    },
  ];

  const getCourseById = (id) => {
    const gotCourse = coursesData.filter((course) => course.id === id);
    return gotCourse[0];
  };

  function filterProperties(arrayOfObjects, propertiesArray) {
    return arrayOfObjects.map((obj) => {
      const newObj = {};
      propertiesArray.forEach((prop) => {
        if (obj.hasOwnProperty(prop)) {
          newObj[prop] = obj[prop];
        }
      });
      return newObj;
    });
  }

  if (req.type === "all") {
    return coursesData;
  } else if (req.type === "byId") {
    return getCourseById(req.param);
  } else if (req.type === "byProperties") {
    return filterProperties(coursesData, req.param);
  } else {
    return null;
  }
};

export default useCourse;
