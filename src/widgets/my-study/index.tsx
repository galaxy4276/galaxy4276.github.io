import { Card, Typo } from "@/shared/ui";
import RustStudy from "@/assets/icon/rust-study.svg";
import RedisStudy from "@/assets/icon/redis-study.svg";
import ReactiveStudy from "@/assets/icon/rxjs-study.svg";
import KotlinStudy from "@/assets/icon/kotlin-study.svg";
import KafkaStudy from "@/assets/icon/kafka-study.svg";
import NextStudy from "@/assets/icon/nextjs-study.svg";
import PostgreStudy from "@/assets/icon/postgres-study.svg";
import KuberneteStudy from "@/assets/icon/kubernetes-study.svg";
import SaaStudy from "@/assets/icon/saa-study.svg";
import ElasticStudy from "@/assets/icon/elastic-study.svg";
import SpringStudy from "@/assets/icon/spring-study.svg";
import NodeStudy from "@/assets/icon/nodejs-study.svg";
import { useState } from "react";
import { StudyContext } from "@/features/study";

export const MyStudy = () => {
  const [using, setUsing] = useState(false);

  return (<StudyContext.Provider value={{ usingInteraction: using, setUsingInteraction: setUsing }}>
    <Card
      className="w-full h-[260px] relative overflow-hidden"
    >
      <div className="flex gap-x-[4px] h-full">
        <Card.Extendable
          idle={<div className="h-full px-[6px] flex justify-center items-center bg-[#E43717] rounded-[4px]">
            <RustStudy/>
          </div>}
          extend={<div className="bg-[#E43717] study-desc">
            <Typo size={20} className="whitespace-nowrap text-white" bold>힙하고 멋있는 언어.</Typo>
            <div className="w-[160px] mt-1.5 border border-white"></div>
            <Typo size={14} className="text-white py-2">
              2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.
            </Typo>
            <Typo size={14} className="text-white py-2">
              당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요.
            </Typo>
            <Typo size={14} className="text-white py-2">
              계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서
              사용하거나,
              CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 앞으로 저와 쭉 함께 갈 언어라 생각이 들어 다시 틈틈히 공부하고 있어요.
            </Typo>
          </div>}
        />

        {/* redis */}
        <Card.Extendable
          idle={<div className="h-full px-[6px] flex justify-center items-center bg-[#D82C20] rounded-[4px]">
            <RedisStudy/>
          </div>}
          extend={<div className="bg-[#D82C20] study-desc">
            <Typo size={20} className="whitespace-nowrap text-white" bold>빠른 캐시 데이터베이스</Typo>
            <div className="w-[180px] mt-1.5 border border-white"></div>
            <Typo size={14} className="text-white py-2">
              2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.
            </Typo>
            <Typo size={14} className="text-white py-2">
              당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요.
            </Typo>
            <Typo size={14} className="text-white py-2">
              계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서
              사용하거나,
              CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 앞으로 저와 쭉 함께 갈 언어라 생각이 들어 다시 틈틈히 공부하고 있어요.
            </Typo>
          </div>}
        />

        {/* RXJS */}
        <Card.Extendable
          idle={<div className="h-full px-[6px] flex justify-center items-center bg-[#F90191] rounded-[4px]">
            <ReactiveStudy/>
          </div>}
          extend={<div className="bg-[#F90191] study-desc">
            <Typo size={20} className="whitespace-nowrap text-white" bold>빠른 캐시 데이터베이스</Typo>
            <div className="w-[180px] mt-1.5 border border-white"></div>
            <Typo size={14} className="text-white py-2">
              2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.
            </Typo>
            <Typo size={14} className="text-white py-2">
              당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요.
            </Typo>
            <Typo size={14} className="text-white py-2">
              계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서
              사용하거나,
              CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 앞으로 저와 쭉 함께 갈 언어라 생각이 들어 다시 틈틈히 공부하고 있어요.
            </Typo>
          </div>}
        />

        {/* Kotlin */}
        <Card.Extendable
          idle={<div className="h-full px-[6px] flex justify-center items-center bg-[#C915D9] rounded-[4px]">
            <KotlinStudy/>
          </div>}
          extend={<div className="bg-[#C915D9] study-desc">
            <Typo size={20} className="whitespace-nowrap text-white" bold>빠른 캐시 데이터베이스</Typo>
            <div className="w-[180px] mt-1.5 border border-white"></div>
            <Typo size={14} className="text-white py-2">
              2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.
            </Typo>
            <Typo size={14} className="text-white py-2">
              당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요.
            </Typo>
            <Typo size={14} className="text-white py-2">
              계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서
              사용하거나,
              CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 앞으로 저와 쭉 함께 갈 언어라 생각이 들어 다시 틈틈히 공부하고 있어요.
            </Typo>
          </div>}
        />

        {/* Kafka */}
        <Card.Extendable
          idle={<div className="h-full px-[6px] flex justify-center items-center bg-[#F4F4F4] rounded-[4px]">
            <KafkaStudy/>
          </div>}
          extend={<div className="bg-[#F4F4F4] study-desc">
            <Typo size={20} className="whitespace-nowrap text-slate-800" bold>빠른 캐시 데이터베이스</Typo>
            <div className="w-[180px] mt-1.5 border border-slate-800"></div>
            <Typo size={14} className="text-slate-700 py-2">
              2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.
            </Typo>
            <Typo size={14} className="text-slate-700 py-2">
              당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요.
            </Typo>
            <Typo size={14} className="text-slate-700 py-2">
              계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서
              사용하거나,
              CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 앞으로 저와 쭉 함께 갈 언어라 생각이 들어 다시 틈틈히 공부하고 있어요.
            </Typo>
          </div>}
        />

        {/* Nextjs */}
        <Card.Extendable
          idle={<div className="h-full px-[6px] flex justify-center items-center bg-[#000000] rounded-[4px]">
            <NextStudy/>
          </div>}
          extend={<div className="bg-[#000000] study-desc">
            <Typo size={20} className="whitespace-nowrap text-white" bold>빠른 캐시 데이터베이스</Typo>
            <div className="w-[180px] mt-1.5 border border-white"></div>
            <Typo size={14} className="text-white py-2">
              2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.
            </Typo>
            <Typo size={14} className="text-white py-2">
              당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요.
            </Typo>
            <Typo size={14} className="text-white py-2">
              계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서
              사용하거나,
              CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 앞으로 저와 쭉 함께 갈 언어라 생각이 들어 다시 틈틈히 공부하고 있어요.
            </Typo>
          </div>}
        />

        {/* Postgres */}
        <Card.Extendable
          idle={<div className="h-full px-[6px] flex justify-center items-center bg-[#33679B] rounded-[4px]">
            <PostgreStudy/>
          </div>}
          extend={<div className="bg-[#33679B] study-desc">
            <Typo size={20} className="whitespace-nowrap text-white" bold>빠른 캐시 데이터베이스</Typo>
            <div className="w-[180px] mt-1.5 border border-white"></div>
            <Typo size={14} className="text-white py-2">
              2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.
            </Typo>
            <Typo size={14} className="text-white py-2">
              당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요.
            </Typo>
            <Typo size={14} className="text-white py-2">
              계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서
              사용하거나,
              CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 앞으로 저와 쭉 함께 갈 언어라 생각이 들어 다시 틈틈히 공부하고 있어요.
            </Typo>
          </div>}
        />

        {/* Kubernetes Study */}
        <Card.Extendable
          idle={<div className="h-full px-[6px] flex justify-center items-center bg-[#326DE6] rounded-[4px]">
            <KuberneteStudy/>
          </div>}
          extend={<div className="bg-[#326DE6] study-desc">
            <Typo size={20} className="whitespace-nowrap text-white" bold>빠른 캐시 데이터베이스</Typo>
            <div className="w-[180px] mt-1.5 border border-white"></div>
            <Typo size={14} className="text-white py-2">
              2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.
            </Typo>
            <Typo size={14} className="text-white py-2">
              당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요.
            </Typo>
            <Typo size={14} className="text-white py-2">
              계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서
              사용하거나,
              CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 앞으로 저와 쭉 함께 갈 언어라 생각이 들어 다시 틈틈히 공부하고 있어요.
            </Typo>
          </div>}
        />

        {/* SAA */}
        <Card.Extendable
          idle={<div className="h-full px-[6px] flex justify-center items-center bg-[#F7981D] rounded-[4px]">
            <SaaStudy/>
          </div>}
          extend={<div className="bg-[#F7981D] study-desc">
            <Typo size={20} className="whitespace-nowrap text-white" bold>빠른 캐시 데이터베이스</Typo>
            <div className="w-[180px] mt-1.5 border border-white"></div>
            <Typo size={14} className="text-white py-2">
              2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.
            </Typo>
            <Typo size={14} className="text-white py-2">
              당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요.
            </Typo>
            <Typo size={14} className="text-white py-2">
              계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서
              사용하거나,
              CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 앞으로 저와 쭉 함께 갈 언어라 생각이 들어 다시 틈틈히 공부하고 있어요.
            </Typo>
          </div>}
        />

        {/* Elastic */}
        <Card.Extendable
          idle={<div className="h-full px-[6px] flex justify-center items-center bg-[#00BFB3] rounded-[4px]">
            <ElasticStudy/>
          </div>}
          extend={<div className="bg-[#00BFB3] study-desc">
            <Typo size={20} className="whitespace-nowrap text-white" bold>빠른 캐시 데이터베이스</Typo>
            <div className="w-[180px] mt-1.5 border border-white"></div>
            <Typo size={14} className="text-white py-2">
              2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.
            </Typo>
            <Typo size={14} className="text-white py-2">
              당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요.
            </Typo>
            <Typo size={14} className="text-white py-2">
              계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서
              사용하거나,
              CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 앞으로 저와 쭉 함께 갈 언어라 생각이 들어 다시 틈틈히 공부하고 있어요.
            </Typo>
          </div>}
        />

        {/* Spring */}
        <Card.Extendable
          idle={<div className="h-full px-[6px] flex justify-center items-center bg-[#77BC1F] rounded-[4px]">
            <SpringStudy/>
          </div>}
          extend={<div className="bg-[#77BC1F] study-desc">
            <Typo size={20} className="whitespace-nowrap text-white" bold>빠른 캐시 데이터베이스</Typo>
            <div className="w-[180px] mt-1.5 border border-white"></div>
            <Typo size={14} className="text-white py-2">
              2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.
            </Typo>
            <Typo size={14} className="text-white py-2">
              당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요.
            </Typo>
            <Typo size={14} className="text-white py-2">
              계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서
              사용하거나,
              CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 앞으로 저와 쭉 함께 갈 언어라 생각이 들어 다시 틈틈히 공부하고 있어요.
            </Typo>
          </div>}
        />

        {/* Node.js */}
        <Card.Extendable
          idle={<div className="h-full px-[6px] flex justify-center items-center bg-[#62B449] rounded-[4px]">
            <NodeStudy/>
          </div>}
          extend={<div className="bg-[#62B449] study-desc">
            <Typo size={20} className="whitespace-nowrap text-white" bold>빠른 캐시 데이터베이스</Typo>
            <div className="w-[180px] mt-1.5 border border-white"></div>
            <Typo size={14} className="text-white py-2">
              2023년 한국 개발 커뮤니티에서 처음 화두에 올랐을 때 웹 어셈블리로서의 활용, 네이티브에 가까운 성능으로 이목을 끌었던 것 같습니다.
            </Typo>
            <Typo size={14} className="text-white py-2">
              당시 네이티브 언어나 성능을 목적으로 하는 언어를 몰랐던 상황이었기 때문에 한 가지를 배워두고자 러스트에 입문했어요.
            </Typo>
            <Typo size={14} className="text-white py-2">
              계속 러스트를 배워 활용하기까지 얼마나 사용하게 될까 의문을 가지고 시간이 흘러가던 중, 외부에서 개발자분들과 따로 대면하면서 사내 서비스 퍼포먼스를 위해 기존 체계에 러스트를 혼합해서
              사용하거나,
              CPU 집약적인 작업의 퍼포먼스를 위해 tokio 를 도입하는 등 각자만의 사용 경험을 듣고 앞으로 저와 쭉 함께 갈 언어라 생각이 들어 다시 틈틈히 공부하고 있어요.
            </Typo>
          </div>}
        />
      </div>
    </Card>
  </StudyContext.Provider>)

};
