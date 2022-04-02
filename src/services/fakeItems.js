const mobilePhones = [
  {
    id: 1,
    itemCode: "PH01",
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
    itemCode: "PH02",
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
    itemCode: "LP01",
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
    id: 6,
    itemCode: "LP02",
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

export function getAllItems() {
  const allItemsInInventory = [...mobilePhones, ...laptops];
  let allItems = [];

  var round = 0;
  for (var item in allItemsInInventory) {
    var obj = allItemsInInventory[item];
    obj["name"] = getName(obj);
    obj["price"] = priceList[obj["itemCode"]];

    allItems[round] = obj;
    round += 1;
  }
  return allItems;
}

export function getItem(id) {
  let allItemsInInventory = [...mobilePhones, ...laptops];

  for (var item in allItemsInInventory) {
    if (allItemsInInventory[item].id === id) {
      allItemsInInventory[item]["name"] = getName(allItemsInInventory[item]);
      allItemsInInventory[item]["price"] =
        priceList[allItemsInInventory[item]["itemCode"]];

      return allItemsInInventory[item];
    }
  }
  return;
}
