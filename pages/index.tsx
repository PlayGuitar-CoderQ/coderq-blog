// ts静态类型
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="test">
      <h1 className="text-blue-800 ">初始化标签</h1>
      <span className="txt">测试scss</span>
    </div>
  );
};

export default Home;
