import { FC, ReactElement } from "react";
import Elastic from "@/assets/icon/elasticsearch.svg";
import Tailwind from "@/assets/icon/tailwindcss.svg";
import React from "@/assets/icon/react.svg";
import ReactiveX from "@/assets/icon/reactivex.svg";
import Spring from "@/assets/icon/spring.svg";
import Kubernetes from "@/assets/icon/kubernetes.svg";
import Rust from "@/assets/icon/rust.svg";
import Kafka from "@/assets/icon/kafka.svg";
import Kotlin from "@/assets/icon/kotlin.svg";
import Redis from "@/assets/icon/redis.svg";
import Nodejs from "@/assets/icon/nodejs.svg";

export type Tech = "elastic" | "tailwindcss" | "react" | "rxjs" | "kubernetes" | 'spring' | 'rust' | 'kafka' | 'kotlin' | 'redis' | 'nodejs';

const TechComp: Record<Tech, ReactElement> = {
  elastic: <Elastic />,
  tailwindcss: <Tailwind />,
  react: <React />,
  rxjs: <ReactiveX />,
  spring: <Spring />,
  kubernetes: <Kubernetes />,
  rust: <Rust />,
  kafka: <Kafka />,
  redis: <Redis />,
  nodejs: <Nodejs />,
  kotlin: <Kotlin />,
};

export const TechBox: FC<{ type: Tech }> = ({ type }) => {
  return (
    <div className="rounded-lg bg-[#FAFAFA] w-[48px] h-[48px] drop-shadow-md flex justify-center items-center">
      {TechComp[type]}
    </div>
  );
};
