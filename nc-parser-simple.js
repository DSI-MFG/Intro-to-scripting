// Simple NC File Parser
// Finds tool changes, tracks lowest Z position, and extracts tool comments

function parseNCFile(ncContent) {
  // Split the file into individual lines
  const lines = ncContent.split("\n");

  // Object to store results: tool number -> {lowestZ, comment}
  const tools = {};

  // Track current tool, its lowest Z, and comment
  let currentTool = null;
  let lowestZ = null;
  let toolComment = "";

  // Go through each line
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Look for tool changes (T followed by numbers)
    const toolMatch = trimmed.match(/T(\d+)/);
    if (toolMatch) {
      // Save previous tool if we found one
      if (currentTool && lowestZ !== null) {
        tools[currentTool] = {
          lowestZ: lowestZ,
          comment: toolComment.trim(),
        };
      }

      // Start tracking new tool
      currentTool = parseInt(toolMatch[1]);
      lowestZ = null;
      toolComment = "";

      // Look for comment on same line as T command
      const commentMatch = trimmed.match(/\(([^)]+)\)/);
      if (commentMatch) {
        toolComment = commentMatch[1];
      } else {
        // Check next line for comment
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim();
          const nextCommentMatch = nextLine.match(/\(([^)]+)\)/);
          if (nextCommentMatch) {
            toolComment = nextCommentMatch[1];
          }
        }
      }
    }

    // Look for Z coordinates
    const zMatch = trimmed.match(/Z([+-]?\d*\.?\d+)/);
    if (zMatch && currentTool !== null) {
      const z = parseFloat(zMatch[1]);

      // Update lowest Z if this is lower
      if (lowestZ === null || z < lowestZ) {
        lowestZ = z;
      }
    }
  }

  // Don't forget the last tool
  if (currentTool && lowestZ !== null) {
    tools[currentTool] = {
      lowestZ: lowestZ,
      comment: toolComment.trim(),
    };
  }

  return tools;
}

// Example usage:
// const ncContent = "T01 (1/4 END MILL)\nG00 Z1.0\nG01 Z0.5\nT02\n(3/8 DRILL)\nG00 Z2.0\nG01 Z0.2";
// const results = parseNCFile(ncContent);
// console.log(results); // {1: {lowestZ: 0.5, comment: "1/4 END MILL"}, 2: {lowestZ: 0.2, comment: "3/8 DRILL"}}
