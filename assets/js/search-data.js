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
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-started-my-phd-at-ucla-working-with-adtitya-grover",
          title: 'Started my PhD at UCLA, working with Adtitya Grover!',
          description: "",
          section: "News",},{id: "news-transformer-neural-processes-my-first-paper-as-a-phd-student-got-accepted-at-icml-2022",
          title: 'Transformer Neural Processes, my first paper as a PhD student, got accepted at...',
          description: "",
          section: "News",},{id: "news-started-my-internship-at-microsoft-research-to-work-with-ashish-kapoor-and-jayesh-k-gupta-on-foundation-models-for-weather-and-climate",
          title: 'Started my internship at Microsoft Research to work with Ashish Kapoor and Jayesh...',
          description: "",
          section: "News",},{id: "news-honored-to-receive-the-amazon-fellowship",
          title: 'Honored to receive the Amazon Fellowship.',
          description: "",
          section: "News",},{id: "news-we-released-climax-the-first-foundation-model-for-weather-and-climate",
          title: 'We released ClimaX – the first foundation model for weather and climate.',
          description: "",
          section: "News",},{id: "news-climax-has-been-featured-in-major-media-outlets-including-washington-post-mit-tech-review-infoq-and-nature",
          title: 'ClimaX has been featured in major media outlets, including Washington Post, MIT Tech...',
          description: "",
          section: "News",},{id: "news-climax-got-accepted-at-icml-2023-and-won-the-best-paper-award-at-the-synergy-of-scientific-and-machine-learning-modeling-workshop-icml-2023",
          title: 'ClimaX got accepted at ICML 2023 and won the best paper award at...',
          description: "",
          section: "News",},{id: "news-presented-climax-at-agu-fall-meeting-2023-ai4climatescience-at-aaai-2023-university-of-cambridge-ai4er-seminar-series-bureau-of-meteorology-australia-university-of-leeds-university-of-georgia-and-university-of-tennessee",
          title: 'Presented ClimaX at AGU Fall Meeting 2023, AI4ClimateScience at AAAI 2023, University of...',
          description: "",
          section: "News",},{id: "news-expt-and-climatelearn-got-accepted-at-neurips-2023",
          title: 'ExPT and ClimateLearn got accepted at NeurIPS 2023.',
          description: "",
          section: "News",},{id: "news-we-released-stormer-which-achieves-state-of-the-art-performance-for-data-driven-weather-forecasting",
          title: 'We released Stormer, which achieves state-of-the-art performance for data-driven weather forecasting.',
          description: "",
          section: "News",},{id: "news-honored-to-receive-the-outstanding-graduate-student-research-award-department-of-computer-science-ucla",
          title: 'Honored to receive the Outstanding Graduate Student Research Award, Department of Computer Science,...',
          description: "",
          section: "News",},{id: "news-stormer-won-the-best-paper-award-at-the-climate-change-in-ai-ccai-workshop-at-iclr-2024",
          title: 'Stormer won the best paper award at the Climate Change in AI (CCAI)...',
          description: "",
          section: "News",},{id: "news-started-my-internship-at-google-deepmind-to-work-with-richard-song-on-llm-embeddings-for-universal-bayesian-optimization",
          title: 'Started my internship at Google Deepmind to work with Richard Song on LLM...',
          description: "",
          section: "News",},{id: "news-stormer-chaosbench-and-probing-llm-got-accepted-at-neurips-2024-probing-llm-won-the-best-paper-award-at-the-foundation-model-interventions-workshop-neurips-2024",
          title: 'Stormer, ChaosBench, and Probing LLM got accepted at NeurIPS 2024. Probing LLM won...',
          description: "",
          section: "News",},{id: "news-lico-got-accepted-at-iclr-2025",
          title: 'LICO got accepted at ICLR 2025.',
          description: "",
          section: "News",},{id: "news-honored-to-receive-the-dissertation-year-award-dya-from-ucla",
          title: 'Honored to receive the Dissertation Year Award (DYA) from UCLA.',
          description: "",
          section: "News",},{id: "news-started-my-internship-at-nvidia-on-the-weather-and-climate-simulation-team",
          title: 'Started my internship at NVIDIA on the Weather and Climate Simulation team.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%75%6E%67%6E%64@%63%73.%75%63%6C%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tung-nd", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tung-nguyen-40703616b", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=F9mgq3sAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/tungnd_13", "_blank");
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
