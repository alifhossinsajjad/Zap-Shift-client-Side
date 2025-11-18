import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef } from "react";
const Coverage = () => {
  const position = [23.685, 90.3563];
  const mapRef = useRef(null);
  const serviceCenter = useLoaderData();
  console.log(serviceCenter);

  const handdleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;

    const district = serviceCenter.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coord = [district.latitude, district.longitude];

      console.log(coord, district);
      mapRef.current.flyTo(coord, 16)
    }
  };
  return (
    <div>
      <div className="bg-gray-100 rounded-xl p-15 my-10 shadow-xl">
        <h2 className="text-5xl text-start my-8 text-secondary font-bold">
          We are available in 64 districts
        </h2>
        <div className="my-10 ">
          <form onSubmit={handdleSearch}>
            <label className="input rounded-xl">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow"
                name="location"
                placeholder="Search"
              />
            </label>
          </form>
        </div>

        {/*  */}

        <div className="border h-90">
          <MapContainer
            className="h-99"
            center={position}
            zoom={7}
            scrollWheelZoom={false}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {serviceCenter.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong> <br /> service Area :{" "}
                  {center.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
