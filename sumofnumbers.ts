// 1. sumFor - Using a for loop
function sumFor(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
}

// 2. sumWhile - Using a while loop
function sumWhile(numbers: number[]): number {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  console.log(sum);
  return sum;
}

// 3. sumRecursion - Using recursion
function sumRecursion(numbers: number[], index: number = 0): number {
  // Base case: if we've processed all numbers, return 0
  if (index === numbers.length) {
    return 0;
  }
  // Recursive case: add current number to the sum of remaining numbers
  const sum = numbers[index] + sumRecursion(numbers, index + 1);
  if (index === 0) {
    console.log(sum);
  }
  return sum;
}

// 4. sumTheFunctionalWay - Using functional programming (reduce)
function sumTheFunctionalWay(numbers: number[]): number {
  const sum = numbers.reduce((sum, num) => sum + num, 0);
  console.log(sum);
  return sum;
}

// Test the functions
sumFor([1, 2, 3, 4]);                    // Output: 10
sumWhile([1, 2, 3, 4]);                  // Output: 10
sumRecursion([1, 2, 3, 4]);              // Output: 10
sumTheFunctionalWay([1, 2, 3, 4]);       // Output: 10