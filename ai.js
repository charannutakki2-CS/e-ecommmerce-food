// Simple AI Recommendation Logic (Content Based)

const products = [
  {name:"Smart Headphones", category:"electronics"},
  {name:"Bluetooth Speaker", category:"electronics"},
  {name:"Running Shoes", category:"fashion"}
];

function recommend(category){
  return products.filter(p => p.category === category);
}

// Example usage:
console.log(recommend("electronics"));
