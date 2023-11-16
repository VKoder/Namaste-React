import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../Images/Logo.png";

// HEADER COMPONENT
const Header = () => (
  <div className="header">
    <div className="hleft">
      <img src={logo}></img>
    </div>
    <div className="hright">
      <div id="hr1">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
        </ul>
      </div>
      <div id="hr2">
        <i class="ri-shopping-cart-fill"></i>
      </div>
    </div>
  </div>
);

//JSON DATA
const restrauntList = [
  {
    info: {
      id: "717982",
      name: "Burger King",
      cloudinaryImageId: "aa77cb6fce4d94f3ad4b4e7fb42782db",
      locality: "Lotus Park 3",
      areaName: "Ambegaon",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "717982",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "166",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-16 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "467580",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Bharti Vihar",
      areaName: "Katraj",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "467580",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "5588",
      avgRatingString: "4.6",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-15 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "461939",
      name: "Fried Chicken Destination",
      cloudinaryImageId: "rzxyoujbwyalfwksxol7",
      locality: "Vastunagar ",
      areaName: "Bibvewadi",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "461939",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "245841",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=9194051~p=3~eid=0000018b-d2c9-4558-6e1d-ac9900ff0307~srvts=1700048487768~45995",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-16 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "24075",
      name: "Cafe Momos",
      cloudinaryImageId: "alv5bura2gt24wmibqmr",
      locality: "Bharti Vidyapeeth",
      areaName: "Katraj",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "24075",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "18860",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=9108788~p=2~eid=0000018b-d2c9-4558-6e1d-ac9800ff025a~srvts=1700048487768~45995",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-15 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "255149",
      name: "Firangi Bake",
      cloudinaryImageId: "tengdwsfnqs29t8nwfwv",
      locality: "Datta nagar chowk",
      areaName: "Ambegaon Bk",
      costForTwo: "₹400 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Mexican",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "255149",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "3952",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-15 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "37467",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Chandrabhaga Nagar Rd",
      areaName: "Katraj",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "37467",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-16 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "53754",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Pune Satara Road",
      areaName: "Katraj",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "53754",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "721",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-16 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "669709",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "7de701fb433cb9905744d05ccd0736c1",
      locality: "Utkarsh Society",
      areaName: "Bibwewadi",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "669709",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "582",
      avgRatingString: "4.4",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-15 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "255148",
      name: "Oven Story Pizza - Standout Toppings",
      cloudinaryImageId: "f986df6f1a1fcf2ff24d2eaf44d570a7",
      locality: "Datta nagar chowk",
      areaName: "Ambegaon Bk",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "255148",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "3534",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "23-31 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-15 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "782004",
      name: "Burger Battel",
      cloudinaryImageId: "dfd90931f1a600bda63c8614a9570ace",
      locality: "Khanapur",
      areaName: "Bibwewadi",
      costForTwo: "₹158 for two",
      cuisines: ["Burgers", "Snacks", "Pizzas"],
      veg: true,
      feeDetails: {
        restaurantId: "782004",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "465348",
      avgRatingString: "NEW",
      promoted: true,
      adTrackingId:
        "cid=9349282~p=4~eid=0000018b-d2c9-4558-6e1d-ac9a00ff047e~srvts=1700048487768~45995",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-15 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "255150",
      name: "Sweet Truth",
      cloudinaryImageId: "4a3b48488e3aa9bda13efd8cfcd95284",
      locality: "Datta nagar chowk",
      areaName: "Ambegaon Bk",
      costForTwo: "₹450 for two",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "255150",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "4444",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-15 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "255151",
      name: "The Good Bowl",
      cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
      locality: "Datta nagar chowk",
      areaName: "Ambegaon Bk",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "255151",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "7918",
      avgRatingString: "4.0",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-15 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "24127",
      name: "Kalyan Bhel",
      cloudinaryImageId: "n4ggreyxvmcyaahscobd",
      locality: "Bharti Vidyapeeth Road",
      areaName: "Katraj",
      costForTwo: "₹100 for two",
      cuisines: ["Street Food", "Chaat", "Snacks", "South Indian"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "24127",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "532",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=9204261~p=1~eid=0000018b-d2c9-4558-6e1d-ac9700ff017c~srvts=1700048487768~45995",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-15 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
];

// RESTRAUNT CARD COMPONENT
const Card = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, areaName } =
    resData.info;
  const { header } = resData.info.aggregatedDiscountInfoV3;
  const { slaString } = resData.info.sla;
  return (
    <div className="ele">
      <div className="eleimg">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            cloudinaryImageId
          }
        ></img>
      </div>
      <div class="eleinner">
        <h3>{name}</h3>
        <p style={{ letterSpacing: "0.2px" }}>{cuisines.join(", ")}</p>
        <div className="date">
          <h5 id="tag">
            <span>
              <i class="ri-star-fill"></i>
            </span>
            {avgRating}
          </h5>
          <h5>
            <span>
              <i class="ri-star-fill"></i>
            </span>
            {header}
          </h5>
          <h5>
            <span>
              <i class="ri-e-bike-2-fill"></i>
            </span>
            {slaString}
          </h5>
        </div>
        <p id="rm">
          <span>
            <i class="ri-more-2-line"></i>
          </span>
          {areaName}
        </p>
      </div>
    </div>
  );
};

// HERO COMPONENT
const Hero = () => (
  <div className="hero">
    <div className="search">
      <input type="text" placeholder="Feeling Hungry?" id="searchInp"></input>
      <button id="searchBtn">Search</button>
    </div>
    <div className="restraunt">
      {
        restrauntList.map((restraunt) => (
          <Card key={restraunt.info.id} resData={restraunt} />
        )) // Iteratedly store restraunt Obj into resData which is a parameter of card!
      }

      {/* {
        restrauntList.forEach(element => {           //The forEach method does not return a new array; 
                                                    //it simply iterates over the elements of the array. 
          <Card resData = {element}/>             
        })
      } */}
    </div>
  </div>
);

// FOOTER COMPONENT
const Footer = () => (
  <div className="footer">
    <h4 id="foot">Copyright@asyncVivek.com</h4>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Hero />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
