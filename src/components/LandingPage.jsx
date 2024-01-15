import Map from "./Map";
import Reservation from "./Reservation";

const LandingPage = () => {
  const location = {
    address:
      "165 Aminu Kano Cres, Wuse 2, Abuja 904101, Federal Capital Territory.",
    lat: 9.083619299593956,
    lng: 7.469084380517205,
  };
  return (
    <>
      <div className="w-full relative h-[100vh]">
        {/* mission and black banner area */}
        <div className="h-[35vh] p-[3rem] sm:p-[5rem] bg-black opacity-85 text-white px-10 ">
          <div className="max-w-6xl mx-auto">
            {/* the mission paragraph text is here */}
            <h1 className="text-xl sm:text-2xl ">Our Mission :</h1>
            <p className="italic text-base sm:text-xl py-2">
              To be a leading provider of high-quality, sustainable, and
              innovative properties, dedicated to meeting the diverse needs of
              our clients. NAF Properties aims to create value through strategic
              real estate development, management, and investment, fostering
              lasting relationships and contributing positively to the
              communities we serve..
            </p>
          </div>
        </div>
        {/* form and map location is render from this area */}
        <div className="absolute top-[13rem] max-w-7xl mx-auto left-0 right-0 bg-white rounded-lg pb-[2rem]">
          <div className="flex flex-col sm:flex-row justify-between items-center shadow-2xl rounded-lg py-2">
            <Reservation />
            <Map location={location} zoomLevel={17} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
