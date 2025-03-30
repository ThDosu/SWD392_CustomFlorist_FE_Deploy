import { useEffect, useState } from "react";
import {  getProductFlowerById, putProductFlowerById } from "../api/product";
import { flowderList } from "../fakedata/fakeProduct";
import { toast } from "react-toastify";

const CustomBouquet = ({productDetail}) => {
  const [flowerDetail, setFlowerDetail] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log('flowerDetail', flowerDetail)
  const {UserID} =  JSON.parse(localStorage.getItem("userLoginFlower")) ||[]
  const userlogin = JSON.parse(localStorage.getItem("userLoginFlower")) ||[]
  const updateproduct = async() => {

    const newProduct = {
      ...productDetail,
      compositions: flowerDetail.map(item => ({
        flowerId: item.data.flowerId,
        minQuantity: item.quantity,
        maxQuantity: item.quantity,
        quantity: item.quantity,
        isActive: true
      })),
      categoryId: productDetail?.category?.categoryId,
      price: totalPrice,
      promotionId: 1,
      UserId: userlogin?.UserID
    }
    console.log('newProduct', newProduct)
    let savedProducts = JSON.parse(localStorage.getItem('savedProducts') || '[]');
    const existingIndex = savedProducts.findIndex(item => item.id === newProduct.id);

    if (existingIndex !== -1) {

      savedProducts[existingIndex] = newProduct;
    } else {
      savedProducts.push(newProduct);
    }
    localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
    let cart = JSON.parse(localStorage.getItem('cartFlower')) || [];
    console.log('cart', cart)
    const existingProduct = cart.find(item => item.id === newProduct.id);
    console.log('existingProduct', existingProduct)
    const existingProductIndex = cart.findIndex(item => item.id === newProduct.id);
    console.log('existingProductIndex', existingProductIndex);
    if (existingProduct) {
      cart[existingProductIndex] = { ...newProduct };
      localStorage.setItem('cartFlower', JSON.stringify(cart));

    } else {
        cart.push({ ...newProduct});
        console.log('carxzxccxzt', cart)
        localStorage.setItem('cartFlower', JSON.stringify(cart));
    }
    toast.success("Sửa bó hoa thành công")
  };

  const fetchFlowerDetail = async () => {
    let savedProducts = JSON.parse(localStorage.getItem('savedProducts') || '[]');
    const bouquetUser = savedProducts.find((item)=>item.UserId === userlogin?.UserID && item.id === productDetail?.id)
    if (!productDetail?.compositions) return;

    try {
      if(bouquetUser){
        const compositions = bouquetUser.compositions;
        const flowerIds = compositions.map((item) => item.flowerId);
        const flowerData = await Promise.all(flowerIds.map(getProductFlowerById));
        const mergedData = flowerData.map((flower) => {
          const composition = compositions.find((comp) => comp?.flowerId === flower?.data?.flowerId);
          return { ...flower, quantity: composition?.quantity || 0 };
        });
        setFlowerDetail(mergedData);
        calculateTotal(mergedData);
      }else{
        const compositions = productDetail.compositions;
        const flowerIds = compositions.map((item) => item.flowerId);
        const flowerData = await Promise.all(flowerIds.map(getProductFlowerById));
        const mergedData = flowerData.map((flower) => {
          const composition = compositions.find((comp) => comp?.flowerId === flower?.data?.flowerId);
          return { ...flower, quantity: composition?.quantity || 0 };
        });
        setFlowerDetail(mergedData);
        calculateTotal(mergedData);
      }
      
     
      

    } catch (error) {
      const compositions = productDetail.compositions;
      const flowerIds = compositions.map((item) => item.flowerId);
      const fallbackData = flowderList
        .filter((flower) => flowerIds.includes(flower.flowerId))
        .map((flower) => {
          const composition = compositions.find((comp) => comp.flowerId === flower.flowerId);
          return { ...flower, quantity: composition?.quantity || 0 };
        });

      setFlowerDetail(fallbackData);
      calculateTotal(fallbackData);

    }
  };
  const updateQuantity = (flowerId, change) => {
    setFlowerDetail((prevFlowers) => {
      const updatedFlowers = prevFlowers.map((flower) =>
        flower?.data?.flowerId === flowerId
          ? { ...flower, quantity: Math.max(0, flower.quantity + change) }
          : flower
      );
      calculateTotal(updatedFlowers);
      return updatedFlowers;
    });
  };
  const calculateTotal = (flowers) => {
    console.log('floweraaas', flowers)
    const total = flowers.reduce((sum, flower) => sum + (flower?.data?.price || 0) * (flower.quantity || 0), 0);
    setTotalPrice(total);
  };

  useEffect(()=>{
    fetchFlowerDetail()
  },[productDetail])
  const bouquet = {
    name: "Spring Blossom Bouquet",
    description: "A fresh mix of vibrant seasonal flowers, perfect for any occasion.",
    category: "",
  };

  const cardStyle = {
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out",
    width: "150px",
    margin: "10px",
  };

  const imageStyle = {
 
      height: "26.625rem !important"
  ,
  

      width: "23.625rem !important"
  
  };
  
  const priceStyle = {
    color: "red",
    fontWeight: "bold",
  };
  
  const FlowerCard = ({ name, price, image }) => (
    <div style={cardStyle}>
      <img src={image} alt={name} style={{ width: "100px", height: "100px", borderRadius: "8px" }} />
      <h3>{name}</h3>
      <p style={priceStyle}>${price?.toFixed(2)} per stem</p>
    </div>
  );
  
  // Flower options with name, price, and image
  const flowers = [
    { name: "Pink Rose", price: 2.5, image: "https://www.flowersbynature.com/files/cache/c4162a4071a53b5a7ae2269ccba7ddef_f2935.jpg" },
    { name: "Yellow Tulip", price: 3.0, image: "https://www.flowersbynature.com/files/cache/012ca8eef3e95fd54eb491326a9a6d1b_f2936.jpg" },
    { name: "White Lily", price: 4.0, image: "https://www.flowersbynature.com/files/cache/ae6da74443b1163daaaf3bd378b7d9dc_f2937.jpg" },
    { name: "Orange Daisy", price: 2.0, image: "https://www.flowersbynature.com/files/cache/a7f25f27872bf3555eedcb89757df8d6_f2940.jpg" },
    { name: "Lavender Orchid", price: 5.0, image: "https://www.flowersbynature.com/files/cache/584cf2f8896f454b295c55a6e0ba63f9_f2941.jpg" },
    { name: "Pink Rose", price: 2.5, image: "https://www.flowersbynature.com/files/cache/c4162a4071a53b5a7ae2269ccba7ddef_f2935.jpg" },
    
   
  ];

  // State to track quantity of each flower


  // Function to update quantity


  // Calculate total price


  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-6">
      {/* BOUQUET INFO */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">{productDetail?.name}</h1>
        <p className="text-gray-600 mt-2">{productDetail?.description}</p>
     
        <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full mt-2 inline-block">{bouquet.category}</span>
      </div>

    {/* FLOWER SELECTION */}
<div       style={{display: "flex"  }} 

 className="flex flex-wrap gap-6 justify-between">
  <img 
  style={{ width: "300px", height: "300px", objectFit: "cover" }}
  src={productDetail?.imageUrl || "https://th.bing.com/th/id/OIP.GOf_sxeKbeeKM5SSLHtzGgHaE7?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"} 
  alt="Image Bouquet" 
  className="rounded-md"
/>
      {UserID?(<>
  {flowerDetail?.map((flower,index) => (
    console.log('flower', flower),
    <div 
      key={flower?.data?.name} 
      style={cardStyle }
          
      className="border p-4 rounded-lg flex items-center gap-2 w-full max-w-md mr-4"
    >
      {/* Ảnh hoa */}
      <img 
        src={flower?.data?.image} 
        alt={flower?.data?.name} 
        className="w-90 h-90 object-cover rounded-md"
      />

      {/* Thông tin hoa */}
      <div className="flex-1">
        <h3 className="text-xl">{flower?.data?.name}</h3>
        <p className="text-gray-600">{flower?.data?.price}VNĐ per stem</p>
      </div>

      {/* Bộ chọn số lượng */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => updateQuantity(flower?.data?.flowerId, -1)}

          className="px-3 py-1 border rounded transition hover:bg-gray-200"
        >
          -
        </button>
        <span className="text-lg font-semibold">{flower?.quantity}</span>
        <button 
          onClick={() => updateQuantity(flower?.data?.flowerId, 1)}

          className="px-3 py-1 border rounded transition hover:bg-gray-200"
        >
          +
        </button>
      </div>
    </div>
  ))}</>
      ):(
          <h3 style={{color:"red"}}>Vui lòng đăng nhập để custom bó hoa theo ý thích</h3>
      )}

</div>

    {UserID&&
      <div className="text-center border-t pt-4">
        <h2 className="text-xl font-semibold">Total Price: {totalPrice}VNĐ</h2>
        <button onClick={updateproduct}  className="bg-green-600  px-6 py-2 rounded-lg mt-4 transition hover:bg-green-700">
          ORDER BOUQUET
        </button>
      </div>
    }
      {/* ORDER SUMMARY */}
    </div>
  );
};

export default CustomBouquet;