import { Study } from "../types";
import RustStudy from "@/assets/icon/rust_study.svg";
import RedisStudy from "@/assets/icon/redis_study.svg";
import Kubernetes from "@/assets/icon/kubernetes-study.svg";
import SAA from "@/assets/icon/saa.svg";
import Spring from "@/assets/icon/spring.svg";
import Nodejs from "@/assets/icon/nodejs-study.svg";
import Rx from "@/assets/icon/rxjs.svg";
import Elastic from "@/assets/icon/elastic.svg";
import React from "@/assets/icon/react.svg";
import Postgres from "@/assets/icon/postgres.svg";

export const studyList: Study[] = [
  {
    title: "UX, DX 를 위한 최고의 도구",
    name: "React",
    content: <>
      기존에 서버 템플릿 엔진 웹개발, jQuery 등을 활용한 웹 개발을 활용하다가<br />
      React 를 접하면서 그만둘 뻔한 FE 개발에 재미를 붙였습니다. <br/>
      컴포넌트 기반으로 재사용성과 UI 를 모듈단위로 나눔으로써 더 코드를 간결하고 의미있게 작성할 수 있게 되었고, 상태 관리를 위한 리렌더링 기능과 기존 웹 개발에 대해 어려움을 겪는 부분을 많은 개발자가 고려하여 만든 방대한 생태계에 큰 재미와 매력을 느껴 지속적으로 공부하고 사용하고 있습니다.<br/>
      Next.js, Remix.js, Astro 등 다양한 파생 프레임워크에도 관심이 많으며 메이저 버전이  바뀌면서 매번 새롭게 변환되고 있는 기능들을 주목하고 있습니다.
    </>,
    bgColor: "#13BCDB",
    Present: <React />,
  },
  {
    title: "힙하고 멋있는 언어",
    name: "Rust",
    content: <>
      2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.<br /><br />
      당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요. <br /><br />

      계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서 사용하거나, CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 다시금 매력적이라는 생각이 들어 다시 틈틈히 공부하고 있어요.
    </>,
    bgColor: "#E43717",
    Present: <RustStudy />,
  },
  {
    title: "데이터베이스인데 빠른.",
    name: "Redis",
    content: <>
      C로 작성하고 매우 효율적인 알고리즘을 사용해 빠른 캐시 데이터베이스라고 알고있습니다.<br /><br />
      메모리를 이용하기때문에 다루기 매우 까다롭다는 의견도있고 실제로 가용할 수 있는 한계가 넉넉하기때문에 신경쓰지 않아도 된다는 의견도 들었어요. <br /><br />

      저는 레디스를 어떻게하면 잘 활용하고 레플리케이션이라던 지 다양한 방법을 사용해 인프라 고도화를 수행할 떄 얼마나 안전하게 사용할 수 있는 지,
      메시지 큐로써 가장 적합한 사례는 무엇이고 얼마나 잘 활용할 것인 지에 대해 고민하고 공부하고 있어요.
    </>,
    bgColor: "#D82C20",
    Present: <RedisStudy />,
  },
  {
    title: "오케스트레이션 끝판왕.",
    name: "Kubernetes",
    content: <>
      쿠버네티스를 사용하면 많은 애플리케이션을 운용할 때(특히 MSA)
      애플리케이션의 전반적인 관리나 가용 측면에서 매우 많은 이점을 얻어가는 정도만 알고있습니다. <br />

      현재는 도커를 자주사용하고있고, 개발자들이 만든 멋진 애플리케이션을 멋드러지게 운영을하기 위해 강의 하나, 책 한권을 구비하여
      입문단계에 발을 들이고 있습니다.
    </>,
    bgColor: "#326DE6",
    Present: <Kubernetes />,
  },
  {
    title: "한국에서 모르는 개발자 없는 스프링",
    name: "Spring",
    content: <>
      저는 원래 Node.js 를 활용한 서버 개발을 좋아합니다.<br />
      하지만 한국 생태계에서는 스프링은 정말 준필수라고 느꼈고 울며 겨자먹기로 진입했는데 대규모 애플리케이션에서 많은 것이 고려된 기능과 라이브러리들,
      사용하면서 습득해가기좋은 스프링의 철학과 구현 등 정말 성숙한 프레임워크라고 생각했습니다. <br />
      스프링을 공부하면서 OOP 를 최대한 잘 활용해보고자하고 있으며 지금은 저를 지속적으로 성장시켜주고 누군가에게 인정받게해줄 사랑스러운 녀석인 것 같습니다.
    </>,
    bgColor: "#77BC1F",
    Present: <Spring />,
  },
  {
    title: "AWS 솔루션 아키텍트 자격증",
    name: "AWS Solution Architect",
    content: <>
      AWS 에는 정말 많은 서비스가 존재하고 얼마나 잘 알고 활용하느냐에 따라 시스템의 가용성은 천차만별입니다.<br />

      실무경험을 하면서, 스스로 강의를 보면서 틈틈히 AWS 를 잘 알아가고 도입해야할 때 비즈니스와 환경을 고려해서 가장 효율적인
      인프라를 설정할 줄 아는 훌룡한 엔지니어가 되고싶어 노력 중입니다. <br /><br />
    </>,
    bgColor: "#272FCB",
    Present: <SAA />,
  },
  {
    title: "쉽고 강력한 Node.js",
    name: "Node.js",
    content: <>
      제가 웹 개발을 처음 시작할 때 MERN 이 유행했었고 자연스럽게 공부하게 되었어요.<br />
      이벤트 루프와 libuv 를 활용하여 동시성을 위한 고민을 기깔난 아키텍쳐로 해결한 부분이 정말
      매력적이라고 생각합니다. <br />

      인기있는 언어 Typescript 와 더불어서 Node.js 로 개발할 때 쉽고 빠르게 애플리케이션을 작성할 수 있는 부분이
      개인적으로 너무 좋았습니다. <br /><br />

      워커 스레드를 활용해 CPU 집약적인 작업을 빠르게 처리하거나 Node.js 를 활용한 다양한 대규모 애플리케이션 사례를 보고,
      Libuv 또는 Node.js 레포지토리를 분석하면서 숙련된 Node.js 개발자가 되도록 노력 중입니다.
    </>,
    bgColor: "#62B449",
    Present: <Nodejs />,
  },
  {
    title: "비동기 처리를 위한 새로운 패러다임",
    name: "RxJS",
    content: <>
      프런트엔드 개발을 하다보면 무수히 많은 이벤트처리와 비동기 처리때문에
      유지보수하기 좋은 코드를 작성하는 부분에서 많은 시간이 소요됩니다.<br />
      많은 요구사항을 이벤트와 비동기로 풀어내야하는 부분을 깔끔하게 해결하기위해 탄생한 것이
      반응형 프로그래밍이며 현재 React 웹 개발을 수행하는데 있어서 공식문서를 읽어가며
      조금씩 도입해보고 있습니다. <br />
      Rx 의 가장 곤란한 부분은 개인이 아닌 팀이 수행하는 프로젝트에서 러닝 커브가 적지않다는 점이기때문에
      제가 많이 사용해보고 숙달하여 언젠가 기존 또는 새로운 팀 내에서 소개하고 팀원들이 자연스럽게
      사용할 수 있도록 하고 싶습니다.
      </>,
    bgColor: "#F90191",
    Present: <Rx />,
  },
  {
    title: "역색인을 활용하는 검색 엔진",
    name: "ElasticSearch",
    content: <>
      RDB 는 강력하지만 항상 정답은 아닌 것 같습니다.<br />
      몇만 건의 데이터를 조회해야할 때 RDB 성능보다 더 빠른 대안으로 소개받고 알게되었고
      조회 목적 외에도 가용 중인 서비스에 대한 로그를 수집하거나,
      통계를 작성하거나 유사 검색을 활용한 추천 기능 등등 더 다양한 목적으로 활용할 수 있음을 알게되고 매력을 느껴
      ELK STACK 을 문서와 서적을 참고하여 천천히 공부해보고 있습니다.
    </>,
    bgColor: "#00BFB3",
    Present: <Elastic />,
  },
  {
    title: "관계형 데이터베이스",
    name: "PostgreSQL",
    content: <>
      RDB 를 더 잘 사용하기 위해 내부적으로 어떻게 동작하는 지,
      JOIN 을 사용해야하는 상황이나 복잡한 쿼리를 작성할 때 어떻게 작성해야 더 최적화된 쿼리를 작성할 수 있는 지, 기존에 동작하던 쿼리를 최적화하고 위해 어떻게 접근하고 튜닝을 해야하는 지.<br />
      이런 부분을 고민하고 있으며 기존에 MySQL 기반으로 내부적으로 캐시, 버퍼, 데이터 구조 (B- Tree, LRU 등등..)  등 RDB 가 많은 요청과 데이터를 처리하기 위해 얼마나 많은 것들이 고려되고 수행되는 지 관심을 가지고 공부해보고 있습니다.
    </>,
    bgColor: "#336791",
    Present: <Postgres />,
  },
]