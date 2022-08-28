const data = [
    {
        price: 200,
        name: 'Bản ủi',
        address: 'Tôn Thất Tùng, TPHCM'
    },
    {
        price: 3000,
        name: 'Máy giặt',
        address: 'Hai Bà Trưng, Quận Phú Nhuận, TPHCM'
    },
    {
        price: 600,
        name: 'Bàn làm việc',
        address: 'Nam Kỳ Khởi Nghĩa, Quận 3, TPHCM'
    },
    {
        price: 1000,
        name: 'Ghế làm việc',
        address: 'Đống đa, Quận 3, Hà Nội'
    },
    {
        price: 25000,
        name: 'Máy tính',
        address: 'Cái bè, Huyện Cái bè, TPHCM'
    },
    {
        price: 9000,
        name: 'Màn hình tivi',
        address: 'Châu Đốc, Kiên Giang'
    },
    {
        price: 30000,
        name: 'Iphone 13',
        address: 'American'
    },
    {
        price: 28000,
        name: 'Samsum s22',
        address: 'Korea'
    }, 
]

//Bai 1
function sanpham(name, price,address){
    console.log('Sản phẩm: ' + name + ', Giá: ' + price + ', Địa chỉ mua hàng: ' + address);
}
  
data.map(function(item){
    return console.log(
      sanpham(item.name, item.price, item.address)
    )
  }
)

//Bai 2
const newData = data.filter(
    function ABC(item){
        if(item.price >= 25000) return true;
        return false
    }
)

newData.map(function ABC(item){
    return console.log(
      sanpham(item.name, item.price, item.address)
    )
  }
)

//Bai 3
const item = data.find(
    function ABC(item){
        if (item.price === 200) return true;
        return false
    }
)

console.log(sanpham(item.name, item.price, item.address))

//Bai 4
const newItem = data.find(
    function ABC(item){
        if (item.price === 30000) return true;
        return false
    }
)

console.log(sanpham(item.name, item.price, item.address))