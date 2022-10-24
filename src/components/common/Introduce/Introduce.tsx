import React from 'react';

export const Introduce: React.FC = () => {
  return (
    <section className="flex pb-10 gap-x-5">
      <section className="w-24 h-24 md:w-32 md:h-32 drop-shadow-lg">
        <img
          src="https://avatars.githubusercontent.com/u/50310464?v=4"
          alt="my_profile"
          className="rounded-full"
        />
      </section>

      <dl className="flex flex-col">
        <dt className="px-2 py-py font-semibold rounded-md gradient-deepblue text-white w-fit mb-2">
          galaxy4276
        </dt>
        <dd>
          열정을 유지하고 배움을 갈망하는 개발자입니다.
        </dd>
        <dd>
          IT 개발 서비스 협업에 관심이 많습니다.
        </dd>
      </dl>
    </section>
  );
};
