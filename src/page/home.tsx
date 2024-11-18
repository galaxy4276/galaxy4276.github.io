import { MySummary } from "@/widgets/my-summary";
import { MyHistory } from "@/widgets/my-history";
import { MyCertificate } from "@/widgets/my-certificate";
// import { MyStudy } from "@/widgets/my-study";
import { MyProject } from "@/widgets/my-project"  ;

export const Home = () => {
  return (
    <div className="flex flex-col gap-y-[8px] py-[128px]">
      <MySummary />
      <MyHistory />
      {/*<MyStudy />*/}
      <MyCertificate />
      <MyProject />
    </div>
  )
};
