const product: { id: number; name: string; price: number } = {
    id: 123,
    name: 'Áo thun',
    price: 250000,
  };

  const { id, name:productName, price } = product;
  
  console.log(`Sản phẩm có mã ${id} là ${name}, giá ${price} VND.`);
  
  