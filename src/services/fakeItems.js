const mobilePhones = [
  {
    id: 1,
    itemCode: "PH01",
    productName: "iPhone X",
    brandName: "Apple",
    storage: "128GB",
    imei: "AA-BBBBBB-CCCCCC-D",
    description: "",
  },
  {
    id: 2,
    itemCode: "PH01",
    productName: "iPhone X",
    brandName: "Apple",
    storage: "128GB",
    imei: "AA-BBBBBB-CCCCCC-D",
    description: "",
  },
  {
    id: 3,
    itemCode: "PH01",
    productName: "iPhone X",
    brandName: "Apple",
    storage: "128GB",
    imei: "AA-BBBBBB-CCCCCC-D",
    description: "",
  },
  {
    id: 4,
    itemCode: "PH01",
    productName: "iPhone X",
    brandName: "Apple",
    storage: "128GB",
    imei: "AA-BBBBBB-CCCCCC-D",
    description: "",
  },
];

const laptops = [
  {
    id: 5,
    itemCode: "LP01",
    productName: "VivoBook 17",
    brandName: "Asus",
    processor: "AMD Ryzen 3700U",
    ram: "16GB",
    storage: "1TB HDD",
    gpu: "Intel Graphics 620",
    serialNumber: "AA-BBBBBB-CCCCCC-D",
    description: "",
  },
  {
    id: 6,
    itemCode: "LP02",
    productName: "VivoBook 17",
    brandName: "Asus",
    processor: "AMD Ryzen 3700U",
    ram: "16GB",
    storage: "1TB HDD",
    gpu: "Intel Graphics 620",
    serialNumber: "AA-BBBBBB-CCCCCC-D",
    description: "",
  },
];

const allItems = [...mobilePhones, ...laptops];

export function getAllItems() {
  //   let allItems = [];

  //   var round = 0;
  //   for (var itemCat in itemCategories) {
  //     var obj = itemCategories[itemCat];
  //     var tempObj = {
  //       id: obj["id"],
  //       itemName:
  //         obj["id"] +
  //         " - " +
  //         obj["itemCode"] +
  //         " - " +
  //         obj["brandName"] +
  //         " - " +
  //         obj["productName"],
  //     };
  //     allItems[round] = tempObj;
  //     round += 1;
  //   }
  //   return allItems;
  return allItems;
}
