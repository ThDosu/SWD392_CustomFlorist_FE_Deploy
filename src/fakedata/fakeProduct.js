export const productFake=[
    {
        id: 1,
        name: "",
        description: "",
        price: 14.99,
        imageUrl: "assets/images/thumbs/product-two-img1.png",
        compositions: [
            {
                id: 101,
                flowerId: 201,
                flowerName: "Broccoli",
                quantity: 2
            },{
                id: 101,
                flowerId: 21,
                flowerName: "Broccoli",
                quantity: 2
            }
        ],
        category: {
            name: "string",
            description: "string",
            is_active: true
        }
    },
    {
        id: 2,
        name: "",
        description: "",
        price: 9.99,
        imageUrl: "assets/images/thumbs/product-two-img2.png",
        compositions: [
            {
                id: 102,
                flowerId: 202,
                flowerName: "Carrot",
                quantity: 5
            }
        ],
        category: {
            name: "string",
            description: "string",
            is_active: true
        }
    },
    {
        id: 3,
        name: "",
        description: ".",
        price: 12.99,
        imageUrl: "assets/images/thumbs/product-two-img3.png",
        compositions: [
            {
                id: 103,
                flowerId: 203,
                flowerName: "Spinach",
                quantity: 3
            }
        ],
        category: {
            name: "z",
            description: "string",
            is_active: true
        }
    }
]
export const flowderList=  [
    {
      flowerId: 201,
      name: "string",
      flowerType: "string",
      color: "string",
      price: 21,
      image: "string",
      isActive: true
    },
    {
      flowerId: 21,
      name: "string",
      flowerType: "string",
      color: "string",
      price: 12,
      image: "string",
      isActive: true
    }
  ]