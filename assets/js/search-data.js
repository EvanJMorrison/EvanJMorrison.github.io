// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "How cells control protein fate, from ribosomes to degradation signals.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed papers and preprints, most recent first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-books",
          title: "Books",
          description: "Book reviews and reading notes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Research, education, fellowships, teaching, and service.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "Get in touch about research, collaboration, and scientific exchange.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "books-creating-black-americans-african-american-history-and-its-meanings-1619-to-the-present",
          title: 'Creating Black Americans: African-American History and Its Meanings, 1619 to the Present',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/creating-black-americans/";
            },},{id: "books-neo-colonialism-the-last-stage-of-imperialism",
          title: 'Neo-Colonialism: The Last Stage of Imperialism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/neo-colonialism/";
            },},{id: "books-the-demon-haunted-world-science-as-a-candle-in-the-dark",
          title: 'The Demon-Haunted World: Science as a Candle in the Dark',
          description: "A worthwhile defense of science, but an incomplete account of scientific literacy and pseudoscience.",
          section: "Books",handler: () => {
              window.location.href = "/books/the-demon-haunted-world/";
            },},{id: "news-nsf-graduate-research-fellowship",
          title: 'NSF Graduate Research Fellowship',
          description: "NSF support for my PhD research on how protein sequence regulates gene expression.",
          section: "News",handler: () => {
              window.location.href = "/news/2021/nsf-graduate-research-fellowship/";
            },},{id: "news-hhmi-gilliam-fellowship",
          title: 'HHMI Gilliam Fellowship',
          description: "A fellowship supporting my doctoral research on protein degradation.",
          section: "News",handler: () => {
              window.location.href = "/news/2022/hhmi-gilliam-fellowship/";
            },},{id: "news-research-presentation-award-at-sacnas",
          title: 'Research presentation award at SACNAS',
          description: "Presenting my N-degron research at NDiSTEM 2023 in Portland.",
          section: "News",handler: () => {
              window.location.href = "/news/2023/sacnas-research-presentation/";
            },},{id: "news-rising-stars-in-biomedical-sciences",
          title: 'Rising Stars in Biomedical Sciences',
          description: "An invited research talk at Sanford Burnham Prebys.",
          section: "News",handler: () => {
              window.location.href = "/news/2024/rising-stars-biomedical-sciences/";
            },},{id: "news-hhmi-gilliam-fellowship-expands-to-a-postdoctoral-pilot",
          title: 'HHMI Gilliam Fellowship expands to a postdoctoral pilot',
          description: "Four years of support for my postdoctoral research.",
          section: "News",handler: () => {
              window.location.href = "/news/hhmi-gilliam-postdoctoral-pilot/";
            },},{id: "news-phd-completed",
          title: 'PhD completed',
          description: "Completing my PhD in Molecular Biology &amp; Biochemistry at CU Anschutz.",
          section: "News",handler: () => {
              window.location.href = "/news/2025/phd/";
            },},{id: "news-joining-the-kostova-lab-at-stowers",
          title: 'Joining the Kostova lab at Stowers',
          description: "Beginning my postdoctoral work on ribosome quality control.",
          section: "News",handler: () => {
              window.location.href = "/news/2026/kostova-lab-stowers/";
            },},{id: "projects-ribosome-and-protein-quality-control",
          title: 'Ribosome and protein quality control',
          description: "Investigating the quality control of defective large ribosomal subunit proteins in human cells.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0_ribosome-quality-control/";
            },},{id: "projects-n-terminal-proteoform-diversity",
          title: 'N-terminal proteoform diversity',
          description: "How different beginnings of a protein arise, and why those differences matter for protein fate.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_n-terminal-proteoforms/";
            },},{id: "projects-metap-dependent-n-degron-pathways",
          title: 'MetAP-dependent N-degron pathways',
          description: "Connecting N-terminal processing with the recognition and degradation of proteins.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_n-degron-pathways/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/EJM_curriculum_vitae.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%45%6D%6F%72%72%69%73%6F%6E@%73%74%6F%77%65%72%73.%6F%72%67", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/EvanJMorrison", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Dbhh98QAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
