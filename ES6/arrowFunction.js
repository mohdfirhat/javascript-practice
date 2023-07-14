function add(...nums) {
 /* Before
  let total = nums.reduce(function(x,y) {
    return x+y;
  });
  */
  // After
  let total = nums.reduce((x,y) => x+y);

  console.log(total);
}

add(1,2,3,4,5);