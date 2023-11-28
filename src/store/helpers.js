import laptops from '../data/laptops.json'
import cellphones from '../data/cellphones.json'
import laptopAccessories from '../data/laptopAccessories.json'
import cellphonesAccessories from '../data/cellphonesAccessories.json'

export function getCurrentData(productID) {
  let result
  if (productID === 1) result = laptops
  else if (productID === 2) result = laptopAccessories
  else if (productID === 3) result = cellphones
  else result = cellphonesAccessories
  return result
}
