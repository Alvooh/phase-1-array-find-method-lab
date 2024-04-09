// index.js

function superbowlWin(record) {
    // Use the find() method to search for an object where the result is "W"
    const winningRecord = record.find(game => game.result === "W");
  
    // If a winning record is found, return the year
    if (winningRecord) {
      return winningRecord.year;
    } else {
      // If no winning record is found, return undefined
      return undefined;
    }
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
  ];
  
  console.log(superbowlWin(record)); // Output: "2015"
  