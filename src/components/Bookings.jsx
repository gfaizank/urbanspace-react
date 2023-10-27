import React, { useEffect, useState } from "react";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  const getpaidList = async () => {
    await fetch(
      "https://wm-backend.connecturbanspa.repl.co/client/gaurav456@gmail.com/incartservices"
    )
      .then((res) => res.json())
      .then((response) => {
        setBookings(response);
        console.log("Paid Services List", response);
      })
      .catch((error) => {
        console.error("Error :", error);
        console.log(error);
      });
  };

  useEffect(() => {
    getpaidList();
  }, []);

  return (
    <div>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full border border-gray-100 bg-gray-700 shadow-md p-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-300">My Bookings</h1>
        <button className="border border-gray-400 rounded-full py-2 px-4 text-violet-400 hover:bg-gray-100 transition duration-300">
          Help
        </button>
      </nav>

      {/* Page Content */}
      <div
        // className="p-4"
        style={{
          marginTop: "100px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {bookings?.map((booking) => {
          return (
            <div
              style={{
                background: "white",
                padding: "20px",
                marginTop: "10px",
                width: "95%",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  {booking?.service_title}
                </h1>
              </div>
              <div>
                <p>{booking?.service_desc}</p>
                <h3>{booking?.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bookings;
