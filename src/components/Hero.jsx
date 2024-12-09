const Hero = ({ firstName, lastName, photo }) => {
  return (
    <div className="flex justify-between">
      <Greeting firstName={firstName} />
      <Profile firstName={firstName} lastName={lastName} photo={photo} />
    </div>
  );
};

const Greeting = ({ firstName }) => {
  return (
    <div className="text-left">
      <h1 className="text-6xl font-bold mb-4">Good Morning, {firstName}</h1>
      <p className="text-2xl">
        Check all your incoming and outgoing transactions here
      </p>
    </div>
  );
};

const Profile = ({ firstName, lastName, photo }) => {
  return (
    <div className="flex items-center gap-6">
      <div className="text-right">
        <h3 className="font-bold">{`${firstName} ${lastName}`}</h3>
        <p>Personal Account</p>
      </div>
      <div className="overflow-hidden h-24 w-24 border-4 rounded-full border-solid border-primary">
        <img src={photo} alt={`${firstName} ${lastName}`} />
      </div>
    </div>
  );
};

export default Hero;
