// Only change code below this line
function urlSlug(title) {
    //trim removed the whitespace in front of winter. the split removed the whitespace between is and coming.  
    const titleSplit = title.trim().split(/\s+/).join("-").toLowerCase();
    return titleSplit;
    
    }
    // Only change code above this line
    console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
    console.log(urlSlug(" Winter Is  Coming"));
    console.log(urlSlug(" Hold The Door"));
