import { Card, Typo } from "@/shared/ui";
import EmailIcon from "@/assets/icon/email.svg";
import { workHistories } from "@/shared/constants/work-history.ts";
import Marquee from "@/shared/ui/marquee.tsx";
import { Tech, TechBox } from "@/shared/ui/TechBox";
import { join } from "@/shared/utils";

const myEmail = "deveungi@gmail.com";
const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}`;

const techs: Tech[] = ["elastic", "react", "rxjs", "kubernetes", "spring", "tailwindcss", "rust", "kafka", "kotlin", "redis", "nodejs"];

export const MyHistory = () => {
  const onClickDirectContact = () => window.open(url, "_blank");

  return (
    <div className="flex flex-col default-gap md:pc-gap md:grid grid-cols-4">
      <article className="col-span-2 flex flex-col default-gap">
        <Card className="bg-no-repeat flex w-full justify-between cursor-pointer object-cover bg-cover h-[80px]" style={{ backgroundImage: "url(\"/image/pink.png\")" }} onClick={onClickDirectContact}>
          <Typo size={22} lang="en" className="text-white self-end" bold>DIRECT CONTACT</Typo>
          <EmailIcon />
        </Card>

        <Card className="min-h-[180px] flex flex-col md:min-h-[240px]">
          <div className="relative pt-2">
            <div id="blur-left" className="w-[15px] h-[64px] bg-white absolute blur-lg left-0 top-0"/>
            <Marquee className="[--duration:20s]" pauseOnHover>
              {techs.map((tech) => <TechBox type={tech} key={tech}/>)}
            </Marquee>
            <Marquee className="[--duration:20s]" reverse pauseOnHover>
              {techs.map((tech) => <TechBox type={tech} key={tech}/>)}
            </Marquee>
          </div>

          <div className="flex flex-col pt-2 justify-end">
            <Typo size={13} className="text-slate-400">다음 기술들에</Typo>
            <Typo size={18} className="text-slate-800" bold>관심이 많아요 🥰</Typo>
          </div>
        </Card>

        <Card className="h-[156px] bg-no-repeat object-cover bg-cover overflow-hidden" style={{ backgroundImage: "url(\"/image/coc-bg.png\")" }}>
          <Typo size={20} className="text-white" lang="en" bold>Cyber Operation Center (Airforce)</Typo>
          <Typo size={14} className="text-white" lang="en">Agent of Network Monitoring (Military)</Typo>

          <div className="flex flex-col leading-4 py-2">
            <Typo size={14} className="text-white" lang="en">Automating Web Detecting (Python)</Typo>
            <Typo size={14} className="text-white" lang="en">Web Attack Access Packet Analysistic</Typo>
            <Typo size={14} className="text-white" lang="en">Chrome Extension Utilities</Typo>
          </div>

          <Typo size={12} className="text-white text-right" lang="en">2021. 10. ~ 2023. 07.</Typo>
        </Card>
      </article>

      <article className="col-span-2 flex flex-col default-gap h-fit">
        <Card className="col-span-2 h-fit">
          <div className="flex flex-col">
            <Typo size={12} className="text-slate-400">최소 1년 이상</Typo>
            <Typo size={20} color="title" bold>이력 사항</Typo>

            <div className="flex flex-col gap-y-3 py-2">
              {workHistories.map(({ title, companyName, date, expire }) => (
                <div className="w-full flex justify-between" key={title.name}>
                  <div className="flex flex-col leading-4">
                    <Typo size={16} lang="en" className={join(["text-slate-800", expire && "line-through"])} bold>
                      {title.name}
                    </Typo>
                    <Typo size={14} lang="en" className="text-slate-500">
                      {title.description}
                    </Typo>
                  </div>
                  <div className="flex flex-col leading-4">
                    <Typo size={16} lang="en" className="text-right text-slate-800" bold>
                      {companyName}
                    </Typo>
                    <Typo size={12} lang="en" className="whitespace-nowrap text-right text-slate-500" bold>
                      {date.start} ~ {date.end}
                    </Typo>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <div className="w-full h-full flex default-gap md:pc-gap">
          <Card.Hover
            className="h-[180px] flex-[0.5] bg-no-repeat object-cover bg-cover overflow-hidden"
            style={{ backgroundImage: "url(\"/image/blue-bg.png\")" }}
            elementHovered={(
              <div className="w-full h-full relative fade-in">
                <div className="absolute left-0 top-0 w-full h-full flex p-2 z-20">
                  <Typo className="text-white" size={12} bold>
                    많은 트래픽을 처리하기위해 애플리케이션 내에 어떠한 아키텍처를 도입해야하는 지,
                    이슈를 해결하기위해 적절하게 도움이 되는 기술을 현상황에 맞게 트레이드-오프를 고려하여 적절하게 사용할 수 있도록
                    꾸준히 백엔드 생태계를 들여다보며 다양한 것들을 학습하고 있습니다.
                    Node.js, Spring 생태계에 관심이 많습니다.
                  </Typo>
                </div>

                <div className="w-full h-full absolute bg-black top-0 left-0 z-10 opacity-50" />
              </div>
            )}
          >
            <div className="flex flex-col justify-end h-full leading-5">
              <Typo size={20} className="text-white" lang="en" bold>BACKEND</Typo>
              <Typo size={12} className="text-white" lang="ko">효율적인 트랜잭션 처리</Typo>
              <div className="w-full border border-white"></div>
            </div>
          </Card.Hover>
          <Card.Hover
            className="h-[180px] flex-[0.5] bg-no-repeat object-cover bg-cover overflow-hidden"
            style={{backgroundImage: "url(\"/image/orange-bg.png\")"}}
            elementHovered={(
              <div className="w-full h-full relative fade-in">
                <div className="absolute left-0 top-0 w-full h-full flex p-2 z-20">
                  <Typo className="text-white" size={12} bold>
                    어떻게하면 애플리케이션에서 더 편안함과 좋은 사용성을 사용자로부터 유발할 수 있는 지 고민하고, UI 컴포넌트들에 대해서 적절한 디자인 패턴을 학습하고 안정적인 애플리케이션을 팀에서 만들어갈 수 있도록 학습중입니다.
                  </Typo>
                </div>

                <div className="w-full h-full absolute bg-black top-0 left-0 z-10 opacity-50"/>
              </div>
            )}
          >
            <div className="flex flex-col justify-end h-full leading-5">
              <Typo size={20} className="text-white" lang="en" bold>FRONTEND</Typo>
              <Typo size={12} className="text-white" lang="ko">사용자의 더 나은 경험을 위해</Typo>
              <div className="w-full border border-white"></div>
            </div>
          </Card.Hover>
        </div>
      </article>

    </div>
  )
};
