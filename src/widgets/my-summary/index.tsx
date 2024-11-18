import { Card, Typo } from "@/shared/ui";
import { Map } from "react-kakao-maps-sdk";
import { LinkButton } from "@/widgets/link-button";

export const MySummary = () => {
  const onClickDownloadResume = () => {
    const a = document.createElement("a");
    a.download = "resume.pdf";
    a.href = "/resume.pdf";
    a.click();
  };

  return (
    <div className="flex flex-col default-gap md:grid grid-cols-info">
      <Card className="p-[16px] flex flex-col gap-y-[8px]">
        <header className="flex gap-x-[23px]">
          <img
            src="/image/me.jpeg"
            alt="me.png"
            className="overflow-hidden w-[90px] h-[90px] rounded-[99px] shadow-inner"
          />
          <div className="flex flex-col justify-center leading-7">
            <Typo size={28} color="title" bold>최은기</Typo>
            <Typo size={18} color="sub-title" lang="en" className="pl-[12px]" bold>Web Developer</Typo>
          </div>
        </header>

        <div>
          <Typo color="text" size={13} className="leading-5 pl-2">
            저는 웹 전반적으로서 아우러서 유용하고 아름다운 기능들을 작성해나가는데 큰 관심을 가지고 활동하고 있습니다.
            최근에는 스마트뉴비라는 스타트업에서
            청년 채용 플랫폼을 개발하고 있어요!
          </Typo>
        </div>
      </Card>
      <Card className="p-0 h-[200px] md:w-full overflow-hidden">
        <Map
          center={{lat: 36.350303, lng: 127.298245 }}
          level={6}
          style={{width: "100%", height: "100%"}}
        >
        </Map>
      </Card>
      <div className="flex flex-col gap-y-[8px]">
        <Card className="flex-1 flex items-center justify-between">
          <Typo size={20} lang="en" bold>RESUME</Typo>
          <button onClick={onClickDownloadResume}>
            <img src="/image/download.png" alt="download" />
          </button>
        </Card>
        <div className="default-gap grid grid-cols-3 flex-1">
          <LinkButton variant="github" link="https://github.com/galaxy4276" />
          <LinkButton variant="linkedin" link="https://www.linkedin.com/in/eun-gi-choi-12a3a6313/" />
          <LinkButton variant="obsidian" link="https://publish.obsidian.md/deveungi/publish/%EA%B0%99%EC%9D%B4+%EC%9D%BC%ED%95%98%EA%B8%B0+%EC%A2%8B%EC%9D%80+%EC%82%AC%EB%9E%8C%EC%9D%B4+%EB%90%98%EA%B8%B0+%EC%9C%84%ED%95%9C+%EA%B3%B5%EA%B0%84" />
        </div>
      </div>
    </div>
  );
}
