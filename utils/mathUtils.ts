export function findLargestNumber(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error("The array is empty.");
    }
  
    let largest = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    
    return largest;
  }
  