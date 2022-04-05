const commonKeys = [
  "id",
  "productCode",
  "category",
  "productName",
  "brandName",
  "addedDate",
  "description",
];

const phoneKeys = [...commonKeys, "storage", "imei"];

const laptopKeys = [
  ...commonKeys,
  "processor",
  "ram",
  "storage",
  "gpu",
  "serialNumber",
];

const phones = [
  {
    id: 1,
    productCode: "PH01",
    category: "phone",
    productName: "iPhone X",
    brandName: "Apple",
    storage: "128GB",
    imei: "AA-BBBBBB-CCCCCC-D",
    addedDate: "2022.04.01",
    description: "",
  },
  {
    id: 2,
    productCode: "PH02",
    category: "phone",
    productName: "Mi 11 Ultra",
    brandName: "Xiaomi",
    storage: "64GB",
    imei: "AA-BBBBBB-CCCCCC-D",
    addedDate: "2022.04.01",
    description: "",
  },
  {
    id: 3,
    productCode: "PH03",
    category: "phone",
    productName: "10 Pro",
    brandName: "OnePlus",
    storage: "128GB",
    imei: "AA-BBBBBB-CCCCCC-D",
    addedDate: "2022.04.01",
    description: "",
  },
  {
    id: 4,
    productCode: "PH04",
    category: "phone",
    productName: "nova 9 SE",
    brandName: "Huawei",
    storage: "64GB",
    imei: "AA-BBBBBB-CCCCCC-D",
    addedDate: "2022.04.01",
    description: "",
  },
  {
    id: 5,
    productCode: "PH05",
    category: "phone",
    productName: "Pixel 6 Pro",
    brandName: "Google",
    storage: "128GB",
    imei: "AA-BBBBBB-CCCCCC-D",
    addedDate: "2022.04.01",
    description: "",
  },
  {
    id: 6,
    productCode: "PH02",
    category: "phone",
    productName: "Mi 11 Ultra",
    brandName: "Xiaomi",
    storage: "128GB",
    imei: "AA-BBBBBB-CCCCCC-D",
    addedDate: "2022.04.01",
    description: "",
  },
];

const laptops = [
  {
    id: 7,
    productCode: "LP01",
    category: "laptop",
    productName: "ZenBook Flip 13 UX362FA",
    brandName: "Asus",
    processor: "Intel Core i7 8th Gen",
    ram: "8GB",
    storage: "512GB HDD",
    gpu: "Intel UHD Graphics 620",
    serialNumber: "AA-BBBBBB-CCCCCC-D",
    addedDate: "2022.04.01",
    description: "",
  },
  {
    id: 8,
    productCode: "LP02",
    category: "laptop",
    productName: "EliteBook X360 4SU65UT",
    brandName: "HP",
    processor: "Intel Core i5 8th Gen",
    ram: "8GB",
    storage: "1TB HDD + 256GB SSD",
    gpu: "Intel Graphics 620",
    serialNumber: "AA-BBBBBB-CCCCCC-D",
    addedDate: "2022.04.01",
    description: "",
  },
  {
    id: 9,
    productCode: "LP03",
    category: "laptop",
    productName: "ROG Strix G G731GT-AU041T Gaming",
    brandName: "Asus",
    processor: "Intel Core i5 9th Gen",
    ram: "8GB",
    storage: "512GB SSD",
    gpu: "4 GB NVIDIA",
    serialNumber: "AA-BBBBBB-CCCCCC-D",
    addedDate: "2022.04.01",
    description: "",
  },
];

const priceList = {
  PH01: "$999",
  PH02: "$500",
  PH03: "$500",
  PH04: "$500",
  PH05: "$500",
  LP01: "$2000",
  LP02: "$2500",
  LP03: "$2500",
};

const soldItems = [
  {
    id: 2,
    customerName: "Mike A. Knudson",
    address: "1748 Alexander Drive",
    phoneNo: "000-000-0000",
    email: "example@email.com",
    date: "04-04-2022",
    note: "",
  },
  {
    id: 7,
    customerName: "Clifton C. Lafreniere",
    address: "1149 McKinley Avenue",
    phoneNo: "000-000-0000",
    email: "example@email.com",
    date: "04-04-2022",
    note: "",
  },
];

function GetName(_id) {
  const ProductsInInventory = [...phones, ...laptops];

  for (var item in ProductsInInventory) {
    if (ProductsInInventory[item].id === _id) {
      if (ProductsInInventory[item].category === "phone") {
        return (
          ProductsInInventory[item].brandName +
          " " +
          ProductsInInventory[item].productName +
          " " +
          ProductsInInventory[item].storage
        );
      } else if (ProductsInInventory[item].category === "laptop") {
        return (
          ProductsInInventory[item].brandName +
          " " +
          ProductsInInventory[item].productName +
          " " +
          ProductsInInventory[item].processor +
          " " +
          ProductsInInventory[item].ram
        );
      } else {
        return (
          ProductsInInventory[item].brandName +
          " " +
          ProductsInInventory[item].productName
        );
      }
    }
  }
  return;
}

function GetAllProducts() {
  const ProductsInInventory = [...phones, ...laptops];
  let allProducts = [];

  var round = 0;
  for (var item in ProductsInInventory) {
    var obj = ProductsInInventory[item];
    obj["name"] = GetName(obj.id);
    obj["price"] = priceList[obj["productCode"]];

    allProducts[round] = obj;
    round += 1;
  }
  return allProducts;
}

function GetProduct(id) {
  let ProductsInInventory = [...phones, ...laptops];

  for (var item in ProductsInInventory) {
    if (ProductsInInventory[item].id === id) {
      ProductsInInventory[item]["name"] = GetName(ProductsInInventory[item]);
      ProductsInInventory[item]["price"] =
        priceList[ProductsInInventory[item]["productCode"]];

      return ProductsInInventory[item];
    }
  }
  return;
}

function GetCategories() {
  return ["Phone", "Laptop"];
}

function GetCategoryCount(_category) {
  let ProductsInInventory = [...phones, ...laptops];
  let count = 0;

  for (var item in ProductsInInventory) {
    if (ProductsInInventory[item].category === _category.toLowerCase())
      count = count + 1;
  }
  return count;
}

function GetKeys(category) {
  const except = ["id", "category", "addedDate"];
  let selectedArray = [];

  if (category === "Phone") selectedArray = phoneKeys;
  else if (category === "Laptop") selectedArray = laptopKeys;

  return selectedArray.filter((element) => !except.includes(element));
}

function GetSoldItems() {
  return soldItems;
}

function GetSoldStatus(_id) {
  for (var item in soldItems) {
    if (soldItems[item].id === _id) {
      return true;
    }
  }
  return false;
}

export {
  GetAllProducts,
  GetProduct,
  GetName,
  GetCategories,
  GetKeys,
  GetSoldItems,
  GetSoldStatus,
  GetCategoryCount,
};
