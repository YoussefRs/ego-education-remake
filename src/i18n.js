import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";
import coursePic from "./assets/Courses/New-blue-modern-website-programming-online-tutorials-youtube-thumbnail-1.jpg";

i18n
  .use(i18nextBrowserLanguagedetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
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
              eLearning: "eLearning",
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
            courseDetails: {
              title: "Course Details",
              description: "Explore our courses and gain valuable skills.",
            },
            // Add more sections as needed
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
              eLearning: "E-Aprendizado",
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
          },
        },
      },
    },
  });
