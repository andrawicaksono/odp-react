import photo from "../assets/photo.jpeg";

const Hero = () => {
  const firstName = "Chelsea";
  const lastName = "Immanuela";
  return (
    <div className="flex justify-between px-6 sm:px-4 lg:px-8 gap-8 mb-9">
      <Greeting firstName={firstName} />
      <Profile firstName={firstName} lastName={lastName} photo={photo} />
    </div>
  );
};

const Greeting = ({ firstName }) => {
  return (
    <div className="flex text-left">
      <div>
        <h1 className="text-6xl font-bold mb-4">Good Morning, {firstName}</h1>
        <p className="text-2xl">
          Check all your incoming and outgoing transactions here
        </p>
      </div>
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
      <div className="flex justify-center items-center">
        <img
          className="max-h-24 max-w-24 border-4 rounded-full border-solid border-primary"
          src={photo}
          alt={`${firstName} ${lastName}`}
        />
      </div>
    </div>
  );
};

export default Hero;
