import { Project } from "@/entities";

export const projectData: Project[] = [
  {
    at: "LIKELION",
    title: "WEBLOOM - 난임 부부 AI 상담 서비스",
    bannerImageUrl: "/image/WeBloom.png",
    link: 'https://publish.obsidian.md/deveungi/Project/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%A0%95%EB%A6%AC/WEBLOOM+-+%EB%82%9C%EC%9E%84+%EB%B6%80%EB%B6%80+AI+%EC%83%81%EB%8B%B4+%EC%84%9C%EB%B9%84%EC%8A%A4',
    skills: [
      { name: "Django" },
      { name: "Next.js" },
      { name: "tailwindcss" },
      { name: "@tanstack/query" },
      { name: "Project Manager" },
      { name: "GPT 4o" },
    ],
  },
  {
    at: "HBU",
    title: "한밭박스 - 교내 네트워크 기반 파일공유 서비스",
    link: 'https://publish.obsidian.md/deveungi/Project/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%A0%95%EB%A6%AC/%ED%95%9C%EB%B0%AD%EB%B0%95%EC%8A%A4+-+%EA%B5%90%EB%82%B4+%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC+%EA%B8%B0%EB%B0%98+%ED%8C%8C%EC%9D%BC%EA%B3%B5%EC%9C%A0+%EC%84%9C%EB%B9%84%EC%8A%A4',
    bannerImageUrl: "/image/hanbox.png",
    skills: [
      { name: "Spring Boot" },
      { name: "React.js" },
      { name: "tailwindcss" },
      { name: "@tanstack/query" },
      { name: "Project Manager" },
      { name: "UI/UX Design" },
      { name: "Infrastructure" },
    ],
  },
  {
    at: "2024 EPSON CHALLENGE",
    title: "LetterU - 손글씨로 소통하는 언어교환 서비스",
    bannerImageUrl: "/image/letteru.png",
    link: "https://publish.obsidian.md/deveungi/Project/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%A0%95%EB%A6%AC/LetterU+-+%EC%86%90%EA%B8%80%EC%94%A8%EB%A1%9C+%EC%86%8C%ED%86%B5%ED%95%98%EB%8A%94+%EC%96%B8%EC%96%B4%EA%B5%90%ED%99%98+%EC%84%9C%EB%B9%84%EC%8A%A4",
    skills: [
      { name: "Django" },
      { name: "Next.js" },
      { name: "tailwindcss" },
      { name: "@tanstack/query" },
      { name: "Project Manager" },
    ],
  },
  {
    at: "STUDENTS",
    title: "Stock2U - 잔여재고 홍보 및 판매 서비스",
    link: "https://publish.obsidian.md/deveungi/Project/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%A0%95%EB%A6%AC/Stock2U+-+%EC%9E%94%EC%97%AC%EC%9E%AC%EA%B3%A0+%ED%99%8D%EB%B3%B4+%EB%B0%8F+%ED%8C%90%EB%A7%A4+%EC%84%9C%EB%B9%84%EC%8A%A4",
    bannerImageUrl: "/image/stock2u.png",
    skills: [
      { name: "Spring Boot" },
      { name: "React.js" },
      { name: "QueryDSL" },
      { name: "JPA(Hibernate)" },
      { name: "Project Manager" },
    ],
  },
  {
    at: "STUDENTS",
    title: "AlgHelper - 실패하지 않는 알고리즘 스터디",
    link: "https://github.com/galaxy4276/alg-study-helper",
    bannerImageUrl: "/image/alg-helper.png",
    skills: [
      { name: "React.js" },
      { name: "Github API" },
      { name: "tailwindcss" },
      { name: "Project Manager" },
    ],
  },
  {
    at: "STUDENTS",
    link: 'https://github.com/galaxy4276/mogakco',
    title: "Mogakco - 모각코 화상채팅 서비스",
    bannerImageUrl: "/image/mogakco.png",
    skills: [
      { name: "Next.js" },
      { name: "Nest.js" },
      { name: "socket i/o" },
    ],
  },
  {
    at: "ALONE",
    link: 'https://github.com/galaxy4276/NotionDS',
    title: "NDS - 갓생살기위한 노션 자동화(AWS Lambda)",
    bannerImageUrl: "/image/nds.png",
    skills: [
      { name: "Notion API" },
      { name: "Node.js" },
      { name: "Typescript" },
      { name: "AWS Lambda" },
    ],
  },
];
