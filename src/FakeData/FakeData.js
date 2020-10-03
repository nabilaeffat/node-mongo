const fakeData = [
    {
        id: 1,
        name: "Cox's Bazar",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Natural_beauty_of_Cox%27s_Bazar%2C_Bangladesh.jpg?fbclid=IwAR0MA1jK4PrRXjQ_HKMIVuLE4McnLSd2APVnQ5MhXxitF1na8js2tL9LGsc",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222540.22924604843!2d92.2515174!3d23.5122763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752feb9eb8c7313%3A0xf1d07a0cc84f174c!2sSajek%20Valley!5e1!3m2!1sen!2sbd!4v1600281981254!5m2!1sen!2sbd",
        Desc: "Inani Beach is an 18-kilometre-long sea beach in Ukhia Upazila of Cox's Bazar District, Bangladesh. It has a lot of coral stones, which are very sharp. These coral stones look black and green, and they are found in summer or rainy seasons. Pathorkhani is located in Jaliapalong, Inani Beach. Almost all of the visitors gather around it and love to take snapshot by sitting on it.",
        hotels: [
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"

            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            }
        ]
    },
    {
        id: 2,
        name: "Patenga Sea Beach",
        img: "http://3.bp.blogspot.com/-6xqUlAEh05o/T8EocauI0-I/AAAAAAAAAX4/XJS91Xc1iGY/s1600/cox-bazar2.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222540.22924604843!2d92.2515174!3d23.5122763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752feb9eb8c7313%3A0xf1d07a0cc84f174c!2sSajek%20Valley!5e1!3m2!1sen!2sbd!4v1600281981254!5m2!1sen!2sbd",
        Desc: "Inani Beach is an 18-kilometre-long sea beach in Ukhia Upazila of Cox's Bazar District, Bangladesh. It has a lot of coral stones, which are very sharp. These coral stones look black and green, and they are found in summer or rainy seasons. Pathorkhani is located in Jaliapalong, Inani Beach. Almost all of the visitors gather around it and love to take snapshot by sitting on it.",
        hotels: [
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"

            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            }
        ]
    },
    {
        id: 3,
        name: "Sajek Valley",
        img: "http://3.bp.blogspot.com/-6xqUlAEh05o/T8EocauI0-I/AAAAAAAAAX4/XJS91Xc1iGY/s1600/cox-bazar2.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222540.22924604843!2d92.2515174!3d23.5122763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752feb9eb8c7313%3A0xf1d07a0cc84f174c!2sSajek%20Valley!5e1!3m2!1sen!2sbd!4v1600281981254!5m2!1sen!2sbd",
        Desc: "Inani Beach is an 18-kilometre-long sea beach in Ukhia Upazila of Cox's Bazar District, Bangladesh. It has a lot of coral stones, which are very sharp. These coral stones look black and green, and they are found in summer or rainy seasons. Pathorkhani is located in Jaliapalong, Inani Beach. Almost all of the visitors gather around it and love to take snapshot by sitting on it.",
        hotels: [
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"

            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            }
        ]
    },
    {
        id: 4,
        name: "Boga Lake",
        img: "http://3.bp.blogspot.com/-6xqUlAEh05o/T8EocauI0-I/AAAAAAAAAX4/XJS91Xc1iGY/s1600/cox-bazar2.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222540.22924604843!2d92.2515174!3d23.5122763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752feb9eb8c7313%3A0xf1d07a0cc84f174c!2sSajek%20Valley!5e1!3m2!1sen!2sbd!4v1600281981254!5m2!1sen!2sbd",
        Desc: "Bogakain Lake, also called Baga Lake or Boga Lake, is a lake located in Ruma Upazila in the hill district Bandarban, Bangladesh. It is a natural sweet and deep water lake. Its height from sea level is nearly 1,246 feet. Geologists believe that it was created by collection of rain water in summer. The lake is irregular in shape. A team of geologists surveyed this lake in 1973. They found the lake's water to be too acidic for any form of life. By the year 1995, the lake's water became abundant with plants and fish. The local residents culture and gather Tilapia fish in this lake. People of Bawm tribe migrated from Saikot para to Boga Lake and set up this",
        hotels: [
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"

            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            }
        ]
    },
    {
        id: 5,
        name: "Nafa-khum Waterfalls",
        img: "http://3.bp.blogspot.com/-6xqUlAEh05o/T8EocauI0-I/AAAAAAAAAX4/XJS91Xc1iGY/s1600/cox-bazar2.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222540.22924604843!2d92.2515174!3d23.5122763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752feb9eb8c7313%3A0xf1d07a0cc84f174c!2sSajek%20Valley!5e1!3m2!1sen!2sbd!4v1600281981254!5m2!1sen!2sbd",
        Desc: "Bogakain Lake, also called Baga Lake or Boga Lake, is a lake located in Ruma Upazila in the hill district Bandarban, Bangladesh. It is a natural sweet and deep water lake. Its height from sea level is nearly 1,246 feet. Geologists believe that it was created by collection of rain water in summer. The lake is irregular in shape. A team of geologists surveyed this lake in 1973. They found the lake's water to be too acidic for any form of life. By the year 1995, the lake's water became abundant with plants and fish. The local residents culture and gather Tilapia fish in this lake. People of Bawm tribe migrated from Saikot para to Boga Lake and set up this",
        hotels: [
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"

            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            }
        ]
    },
    {
        id: 6,
        name: "Keokradongs",
        img: "http://3.bp.blogspot.com/-6xqUlAEh05o/T8EocauI0-I/AAAAAAAAAX4/XJS91Xc1iGY/s1600/cox-bazar2.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222540.22924604843!2d92.2515174!3d23.5122763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752feb9eb8c7313%3A0xf1d07a0cc84f174c!2sSajek%20Valley!5e1!3m2!1sen!2sbd!4v1600281981254!5m2!1sen!2sbd",
        Desc: "Bogakain Lake, also called Baga Lake or Boga Lake, is a lake located in Ruma Upazila in the hill district Bandarban, Bangladesh. It is a natural sweet and deep water lake. Its height from sea level is nearly 1,246 feet. Geologists believe that it was created by collection of rain water in summer. The lake is irregular in shape. A team of geologists surveyed this lake in 1973. They found the lake's water to be too acidic for any form of life. By the year 1995, the lake's water became abundant with plants and fish. The local residents culture and gather Tilapia fish in this lake. People of Bawm tribe migrated from Saikot para to Boga Lake and set up this",
        hotels: [
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"

            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            }
        ]
    },
    {
        id: 7,
        name: "Keokradongs",
        img: "http://3.bp.blogspot.com/-6xqUlAEh05o/T8EocauI0-I/AAAAAAAAAX4/XJS91Xc1iGY/s1600/cox-bazar2.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222540.22924604843!2d92.2515174!3d23.5122763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752feb9eb8c7313%3A0xf1d07a0cc84f174c!2sSajek%20Valley!5e1!3m2!1sen!2sbd!4v1600281981254!5m2!1sen!2sbd",
        Desc: "Bogakain Lake, also called Baga Lake or Boga Lake, is a lake located in Ruma Upazila in the hill district Bandarban, Bangladesh. It is a natural sweet and deep water lake. Its height from sea level is nearly 1,246 feet. Geologists believe that it was created by collection of rain water in summer. The lake is irregular in shape. A team of geologists surveyed this lake in 1973. They found the lake's water to be too acidic for any form of life. By the year 1995, the lake's water became abundant with plants and fish. The local residents culture and gather Tilapia fish in this lake. People of Bawm tribe migrated from Saikot para to Boga Lake and set up this",
        hotels: [
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"

            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            },
            {
                hotel: "Rain View Resort",
                price: "$32",
                rating: "4.5",
                image: "https://i.imgur.com/xRAD6T8.png"
            }
        ]
    }
];

export default fakeData;