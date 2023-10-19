module.exports = function toReadable (number) {
        if (number === 0) {
          return "zero";
        }
      
        const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
      
        function convertLessThanThousand(num) {
          if (num === 0) return "";
          if (num < 20) {
            return ones[num];
          } else {
            const ten = Math.floor(num / 10);
            const one = num % 10;
            return tens[ten] + (one > 0 ? ` ${ones[one]}` : "");
          }
        }
      
        let result = "";
      
        if (number >= 100) {
          const hundreds = Math.floor(number / 100);
          result += ones[hundreds] + " hundred";
          if (number % 100 !== 0) {
            result += " ";
          }
        }
      
        result += convertLessThanThousand(number % 100);
      
        return result;
      }