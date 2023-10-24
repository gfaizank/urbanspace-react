import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InfiniteImageMarquee from "./InfiniteImageMarquee";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../styles/Services.css";
import { useEffect } from "react";
import { Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    width: "100%",
  },
};
Modal.setAppElement("#root"); // Set the root element for accessibility

const brandLogos = [
  "https://vectorseek.com/wp-content/uploads/2021/01/Godrej-Logo-Vector.jpg",
  "https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$",
  "https://logowik.com/content/uploads/images/200_lg.jpg",
  "https://mir-s3-cdn-cf.behance.net/projects/404/dca8a1108725981.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
  "https://e0.pxfuel.com/wallpapers/477/114/desktop-wallpaper-sony-logo.jpg",
  "https://logoeps.com/wp-content/uploads/2011/08/panasonic-logo.jpg",
  "https://i.pinimg.com/originals/b0/ba/64/b0ba64db9dba4a5fd06474046491f087.jpg",
  "data:image/png;base64,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",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Hitachi_logo_large.gif/640px-Hitachi_logo_large.gif",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Onida_Electronics.svg/1200px-Onida_Electronics.svg.png",
  "data:image/png;base64,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",
  "https://logos-download.com/wp-content/uploads/2016/03/Philips_logo_blue.png",
];

const Services = () => {
  const [data, setData] = useState([]);
  const [service, setService] = useState();
  const [openServiceDetails, setServiceDetails] = useState(false);
  const [isDescopen, setIsDescOpen] = useState(false);
  const [isOpen, setIsOpen] = useState({});
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = () => {
    // Simulate adding to cart
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };
  

  const toggleOpen = (category) => {
    setIsOpen({
      ...isOpen,
      [category]: !isOpen[category],
    });
  };

  const logosPerSlideDesktop = 4; // Number of logos to display per slide for desktop
  const logosPerSlideMobile = 3; // Number of logos to display per slide for mobile

  // Calculate the number of slides required
  const totalSlidesDesktop = Math.ceil(
    brandLogos.length / logosPerSlideDesktop
  );
  const totalSlidesMobile = Math.ceil(brandLogos.length / logosPerSlideMobile);

  // Create an array of slides, each containing the logos for that slide
  const slides = [];
  for (let i = 0; i < totalSlidesDesktop; i++) {
    const startIdx = i * logosPerSlideDesktop;
    const endIdx = startIdx + logosPerSlideDesktop;
    const slideLogos = brandLogos.slice(startIdx, endIdx);

    slides.push(
      <div key={i} className="hidden sm:flex space-x-4">
        {" "}
        {/* Show for desktop screens */}
        {slideLogos.map((logo, index) => (
          <div key={index} className="w-1/4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={logo}
                alt={`Brand ${startIdx + index + 1}`}
                className="w-full h-32 sm:h-40 object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  Brand {startIdx + index + 1}
                </h3>
                <p className="text-gray-300">Description</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  for (let i = 0; i < totalSlidesMobile; i++) {
    const startIdx = i * logosPerSlideMobile;
    const endIdx = startIdx + logosPerSlideMobile;
    const slideLogos = brandLogos.slice(startIdx, endIdx);

    slides.push(
      <div key={i + totalSlidesDesktop} className="flex sm:hidden space-x-4">
        {" "}
        {/* Show for mobile screens */}
        {slideLogos.map((logo, index) => (
          <div key={index} className="w-1/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={logo}
                alt={`Brand ${startIdx + index + 1}`}
                className="w-full h-8 sm:h-40 object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  Brand {startIdx + index + 1}
                </h3>
                <p className="text-gray-300">Description</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // const [addToCartLabels, setAddToCartLabels] = useState(service.map(() => "Add to Cart"));

  // const toggleAddToCart = (index) => {
  //   // Create a new array with updated button labels
  //   const newLabels = [...addToCartLabels];
  //   newLabels[index] = newLabels[index] === "Add to Cart" ? "Go to Cart" : "Add to Cart";
  //   setAddToCartLabels(newLabels);
  // }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleServiceClick = () => {
    openModal();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const ImageUrls = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  const servicesFetch = async () => {
    await fetch("https://wm-backend--connecturbanspa.repl.co/api/services") // Replace with your API endpoint
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.api_data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    servicesFetch();
  }, []);

  const addToCart = async (service) => {
    await fetch(
      "https://wm-backend.connecturbanspa.repl.co/client/gaurav456@gmail.com/addtocart",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          service_title: service?.service_title,
          service_desc: service?.service_desc,
          price: service?.price,
          isfixed: `${service?.isfixed}`,
          // ispaid: false,
        }),
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error :", error);
        console.log(error);
      });
  };

  const getUnpaidList = async () => {
    await fetch(
      "https://wm-backend.connecturbanspa.repl.co/client/ram@gmail.com/incartservices"
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("Listt", response);
      })
      .catch((error) => {
        console.error("Error :", error);
        console.log(error);
      });
  };

  const removeFromCart = async (service) => {
    await fetch(
      "https://wm-backend.connecturbanspa.repl.co/client/ram@gmail.com/removefromcart",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          service_title: service?.service_title,
        }),
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error :", error);
        console.log(error);
      });
  };



  return (
    <div className="container mx-auto p-4 bg-black text-white">
      <h1 className="text-3xl font-semibold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((service, index) => (
          <div
            key={index}
            onClick={() => {
              // handleServiceClick(service)
              setService(service.services);
              setServiceDetails(true);
            }}
            // className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl text-black cursor-pointer"
            className="bg-white rounded-lg text-black cursor-pointer hover:shadow-xl shadow-lg"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-40 object-cover"
              style={{
                borderRadius: 10,
              }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-300">{service.desc.slice(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>

      
      <Modal isOpen={openServiceDetails} onRequestClose={closeModal}>
  <div
    style={{
      justifyContent: "flex-end",
      display: "flex",
      flexDirection: "column",  // Change to a column layout for small screens
      padding: 0,
    }}
  >
    <IconButton
      onClick={() => {
        setServiceDetails();
      }}
      style={{
        marginLeft: "auto",  // Move the close button to the right
      }}
    >
      <CloseIcon
        fontSize="small"
        color="white"
        style={{
          background: "black",
          color: "#fff",
          borderRadius: 50,
          padding: 5,
        }}
      ></CloseIcon>
    </IconButton>
    {service?.map((service, index) => {
      return (
        <div>
          <div
            style={{
              padding: 10,
              display: "flex",
              flexDirection: "column",  // Change to a column layout for small screens
              borderBottom: "1px solid #D3D3D3",
            }}
          >
            <h1
              key={index}
              style={{
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              {service?.service_title}
            </h1>
            <IconButton
              onClick={() => {
                setIsDescOpen(!isDescopen);
              }}
              style={{
                marginLeft: "auto",  // Move the close button to the right
              }}
            >
              <KeyboardArrowDownIcon
                fontSize="small"
                style={{
                  background: "black",
                  color: "white",
                }}
              ></KeyboardArrowDownIcon>
            </IconButton>
          </div>
          <div>
            {isDescopen ? (
              <>
                <div
                  style={{
                    padding: 10,
                    display: "flex",
                    flexDirection: "column",  // Change to a column layout for small screens
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",  // Change to a column layout for small screens
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                      }}
                      src={service?.service_img}
                    ></img>
                    <h2
                      key={index}
                      style={{
                        marginLeft: "5px",
                        marginRight: "5px",  // Add margin for better readability
                      }}
                    >
                      {service?.service_desc}
                    </h2>
                  </div>
                  <Button
                    style={{
                      width: "100%",  // Make the button full-width on small screens
                      background: "black",
                      color: "white",
                      fontSize: 10,
                    }}
                    onClick={() => {
                      addToCart(service);
                      handleAddToCart();
                      // toggleAddToCart(index);
                    }} variant="contained" color="primary"
                  >
                   {/* {addToCartLabels[index]} */}Add to Cart
                  </Button>
                  <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={cartOpen}
        autoHideDuration={3000} // Adjust the duration as needed
        onClose={handleCloseCart}
        message={
          <span style={{ display: "flex", alignItems: "center" }}>
            <CheckIcon style={{ marginRight: "8px" }} />
            Service added to cart!
          </span>
        }
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseCart}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
                </div>

                <div
                  style={{
                    padding: 10,
                  }}
                >
                  {service.isfixed ? (
                    <h1
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Price Rs {service.price}
                    </h1>
                  ) : (
                    <h1
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Starts From Rs {service.price}
                    </h1>
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      );
    })}
  </div>
</Modal>


      {/* Carousel section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Brands we deal with</h2>
        <div class="marquee">
          <div class="track">
            <div class="content">
              {brandLogos?.map((logo, index) => {
                return (
                  <img
                    src={`${logo}`}
                    key={index}
                    style={{
                      width: 150,
                      margin: 10,
                    }}
                  ></img>
                );
              })}
              {/* <img src='https://vectorseek.com/wp-content/uploads/2021/01/Godrej-Logo-Vector.jpg' style={{
          width:50,height:50
        }}></img> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

// {/* Carousel section */}
// <div className="mt-8">
// <h2 className="text-3xl font-semibold mb-4">Brands we deal with</h2>
// <Carousel
//   showArrows={true}
//   infiniteLoop={true}
//   showThumbs={false}
//   showStatus={false}
// >
//   {brandLogos.map((logo, index) => (
//     <div key={index}>
//       <img src={logo} alt={`Brand ${index}`}
//       className="w-32 h-32 object-contain"
//        />
//     </div>
//   ))}
// </Carousel>
// </div>