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
    productName: "iPhone 8",
    brandName: "Apple",
    storage: "64GB",
    imei: "AA-BBBBBB-CCCCCC-D",
    addedDate: "2022.04.01",
    description: "",
  },
];

const laptops = [
  {
    id: 5,
    productCode: "LP01",
    category: "laptop",
    productName: "VivoBook 17",
    brandName: "Asus",
    processor: "AMD Ryzen 3700U",
    ram: "16GB",
    storage: "1TB HDD",
    gpu: "Intel Graphics 620",
    serialNumber: "AA-BBBBBB-CCCCCC-D",
    addedDate: "2022.04.01",
    description: "",
  },
  {
    id: 60,
    productCode: "LP02",
    category: "laptop",
    productName: "VivoBook 18",
    brandName: "Asus",
    processor: "AMD Ryzen 3700U",
    ram: "16GB",
    storage: "1TB HDD",
    gpu: "Intel Graphics 620",
    serialNumber: "AA-BBBBBB-CCCCCC-D",
    addedDate: "2022.04.01",
    description: "",
  },
];

const priceList = { PH01: "$999", PH02: "$500", LP01: "$2000", LP02: "$2500" };

function getName(obj) {
  let name = "";
  if (obj.category === "phone") {
    name = obj.brandName + " " + obj.productName + " " + obj.storage;
  } else if (obj.category === "laptop") {
    name =
      obj.brandName +
      " " +
      obj.productName +
      " " +
      obj.processor +
      " " +
      obj.ram;
  } else {
    name = obj.brandName + " " + obj.productName;
  }
  return name;
}

function getAllProducts() {
  const ProductsInInventory = [...phones, ...laptops];
  let allProducts = [];

  var round = 0;
  for (var item in ProductsInInventory) {
    var obj = ProductsInInventory[item];
    obj["name"] = getName(obj);
    obj["price"] = priceList[obj["productCode"]];

    allProducts[round] = obj;
    round += 1;
  }
  return allProducts;
}

function getProduct(id) {
  let ProductsInInventory = [...phones, ...laptops];

  for (var item in ProductsInInventory) {
    if (ProductsInInventory[item].id === id) {
      ProductsInInventory[item]["name"] = getName(ProductsInInventory[item]);
      ProductsInInventory[item]["price"] =
        priceList[ProductsInInventory[item]["productCode"]];

      return ProductsInInventory[item];
    }
  }
  return;
}

function getCategories() {
  return ["Select..", "Phones", "Laptops"];
}

function getKeys(category) {
  const except = ["id", "category", "addedDate"];
  let selectedArray = [];

  if (category === "Phones") selectedArray = phoneKeys;
  else if (category === "Laptops") selectedArray = laptopKeys;

  return selectedArray.filter((element) => !except.includes(element));
}

export { getAllProducts, getProduct, getCategories, getKeys };
