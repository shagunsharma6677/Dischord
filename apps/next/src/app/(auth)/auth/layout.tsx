const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex auth-layout justify-center items-center w-full h-full ">
      <div className="text-center flex-1 flex justify-start items-center flex-col ">
        <div className="w-2/3 flex flex-col ">
          <h1 className="text-7xl text-left font-extrabold text-white">
            GROUP CHAT THAT’S ALL FUN & GAMES
          </h1>
          <p className="text-left text-2xl pr-6 text-white font-medium">
            Dischord is great for playing games and chilling with friends, or
            even building a worldwide community. Customise your own space to
            talk, play, and hang out.
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
