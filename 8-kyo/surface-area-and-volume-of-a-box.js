INSTRUCTIONS
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

SOLUTIONS

function getSize(width, height, depth) {
    let total = 2 * (width * height + width * depth + height * depth);
    let volume = width * height * depth;
    return [total, volume];
}

// function getSize(width, height, depth){
//     var box = { width: width, height:height, depth:depth};
    
//     return [getArea(box), getVolume(box)];
//   }
//   function getArea(box){
//     return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
//   }  
//   function getVolume(box){
//     return box.width * box.height * box.depth;
//   }

//   const getSize = (w, h, d) => [
//     (w * h + w * d + h * d) * 2,
//     w * h * d
// ]

// function getSize(w, h, d){
// 	var area = (2*d*h) + (2*w*h) + (2*d*w);
// 	var volume = d*w*h;
//   return [area, volume];
// }