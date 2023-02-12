import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-w-screen  min-h-screen bg-gradient-to-b from-blue-800 to-blue-800">
      <span className="text-3xl text-white">React Retro</span>
      <Card />
      <CardNew />
    </div>
  );
};

const Card = () => {
  return (
    <div className="h-24 w-48 rounded-lg border-pink-500 bg-blue-400 text-white hover:border-pink-900">
      <span>Retro Card</span>
    </div>
  );
};

const CardNew = () => {
  return (
    <div className="h-24 w-48 rounded-lg border-red-500 bg-blue-400 text-white hover:bg-opacity-10">
      <span>Retro Card</span>
    </div>
  );
};

export default Home;
