import { Certificate } from "@/shared/ui/certificate";

export const MyCertificate = () => {
  return (
    <div className="flex default-gap flex-wrap">
      <Certificate
        name="Engineer Information Processing"
        issuer="한국산업인력공단 국가자격 (산업기사)"
        colorType="purple"
        link="https://www.q-net.or.kr/crf005.do?id=crf00501&gSite=&gId=#none"
        textWhite
      />
      <Certificate
        name="Linux Master 1st Grade"
        issuer="KAIT"
        link="https://www.ihd.or.kr/introducesubject1.do"
        colorType="green"
      />
      <Certificate
        name="Network Manager 2st Grade"
        issuer="ICQA"
        link="https://www.icqa.or.kr/cn/page/network"
        colorType="green"
      />
    </div>
  )
}