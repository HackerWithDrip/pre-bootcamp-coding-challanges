function calculateTriangleArea(a, b, c) { // calculates the area of a triangle, given the sides
    const s = 0.5 * (a + b + c); // calculates the semiperimeter

    const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c))); // calculates the area
    return area; // returns the area of the triangle

}

console.log(triangeArea(3, 4, 5));
console.log(triangeArea(3, 8, 9));
console.log(triangeArea(1, 2, 3));
console.log(triangeArea(4, 5, 6));