export type WorkHistory = {
  title: {
    name: string;
    description: string;
  };
  companyName: string;
  date: {
    start: string;
    end: string;
  };
  expire: boolean;
}


export const workHistories: WorkHistory[] = [
  {
    title: {
      name: "FE Developer",
      description: "React Web Dev & Infra Operation.",
    },
    companyName: "스마트뉴비",
    date: {
      start: "24. 09.",
      end: "Present",
    },
    expire: false,
  },
  {
    title: {
      name: "Node.js FullStack Developer",
      description: "Fastify.js, React App Dev, AWS Operation.",
    },
    companyName: "MCG Labs",
    date: {
      start: "24. 02.",
      end: "24. 09.",
    },
    expire: true,
  },
  {
    title: {
      name: "BE Developer",
      description: "Spring Boot 3, Mybatis",
    },
    companyName: "(주)에프에스",
    date: {
      start: "24. 02.",
      end: "24. 03.",
    },
    expire: true,
  },
  {
    title: {
      name: "FullStack Developer",
      description: "Spring Boot 3, Next.js 12",
    },
    companyName: "(주)핸듀",
    date: {
      start: "23. 07.",
      end: "24. 04.",
    },
    expire: true,
  },
  {
    title: {
      name: "FE Developer",
      description: "React Web Dev",
    },
    companyName: "(주)씨엠유니버스",
    date: {
      start: "21. 02.",
      end: "21. 06.",
    },
    expire: true,
  },
];
