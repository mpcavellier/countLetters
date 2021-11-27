/*The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

Before implementing this function, we need to think about how it will report back these counts. It's not that we want to know how many H's are in this sentence?, because that would just be a number. We need it report back multiple numbers. */

// My error: The code here so far only returns the total letter count but not the count for each individual letter

const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ + Assertion Passed: + ${actual} +  ===  + ${expected}`);
    } else {
      console.log(
        `🛑🛑🛑 + Assertion Failed:  + ${actual} +  !==  + ${expected}`
      );
    }
  };
  
  const countLetters = (str) => {
    //array with counts of chars that will be returned
    const counts = {};
    //execute loop for every char in string
    for (const s of str) {
      //if count of current char being looped through has a value, add +1 to the count of current char
      if (counts[s]) {
        counts[s]++;
        //Else, if a char is being looped through we know the char has at least a value of 1 because it does in fact exist and it is being looped through.  What this does is creates a baseline count of 1 without duplicates and only adds to each unique char's count.
      } else {
        counts[s] = 1;
      }
    }
    //simple method used to convert object to string so the counts show in one string like you would enter as a parameter for assertEquals().  It's just causes unneccesary problems for inputting the expected parameter in assertEquals() if you don't do this.
    return JSON.stringify(counts);
  };
  
  console.log(countLetters("LHL"));
  
  assertEqual(countLetters("LHL"), '{"L":2,"H":1}');
  