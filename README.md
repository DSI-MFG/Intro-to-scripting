# Simple Scripting for Machinists

This is a collection of simple JavaScript files that demonstrate basic scripting concepts for machinists.

## Files

### 1. `nc-parser-simple.js`

**What it does:** Parses NC (G-code) files to find tool changes and track the lowest Z position for each tool.

**Key concepts:**

- Reading text files line by line
- Using regular expressions to find patterns
- Storing data in objects
- Looping through arrays

**Example output:**

```
T01 lowest point: Z0.500
T02 lowest point: Z0.200
T03 lowest point: Z1.000
```

### 2. `probe-analyzer-simple.js`

**What it does:** Reads probe data from CSV files and creates charts showing measured values vs tolerance bands.

**Key concepts:**

- Parsing CSV data
- Working with arrays and objects
- Creating charts with Chart.js
- Calculating basic statistics

**CSV Format:**

```csv
number, nominal size, measured size, tolerance, comp band tolerance, comp amount
1, 1.0000, 1.0000, 0.0030, 0.0010, 0.0000
2, 1.0000, 1.0012, 0.0030, 0.0010, -0.0012
```

### 3. `example-usage.js`

**What it does:** Shows how to use both parsers together in a complete application.

**Key concepts:**

- File handling with FileReader
- Async/await for file operations
- Event listeners
- Error handling
- DOM manipulation

## How to Use

1. **Copy the code** from any of these files
2. **Paste it** into the "PASTE CODE HERE" section of the HTML page
3. **Load your files** (NC file and/or probe CSV)
4. **Click Analyze** to see the results

## Learning Points

### For NC Parser:

- `split('\n')` - breaks text into lines
- `match(/T(\d+)/)` - finds tool numbers using regex
- `parseInt()` - converts text to numbers
- Objects store key-value pairs

### For Probe Analyzer:

- `map()` - transforms arrays
- `reduce()` - calculates totals
- `Math.min()` and `Math.max()` - find extremes
- Chart.js creates visualizations

### For Complete App:

- `addEventListener()` - responds to button clicks
- `async/await` - handles file reading
- `try/catch` - handles errors gracefully
- `document.getElementById()` - finds HTML elements

## Sample Data

Use `sample_probe_data.csv` to test the probe analyzer. It contains 25 parts with realistic measurement data.

## Next Steps

Once you understand these basics, you can:

- Add more file formats
- Create different chart types
- Add data filtering
- Export results in different formats
- Build a complete web application

Remember: Start simple, then add complexity as you learn!
