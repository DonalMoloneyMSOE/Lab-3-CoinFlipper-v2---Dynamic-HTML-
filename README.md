# Lab-3-CoinFlipper-v2---Dynamic-HTML-(12/14/17)
Lab 3: CoinFlipper v2 - Dynamic HTML

Outcomes
bullet	continue to develop JavaScript development skills
bullet	use JavaScript to access the DOM
bullet	use events to trigger JavaScript function execution
Assignment details
Input and output

In this assignment, you will rewrite the CoinFlipper application to use HTML input elements to get user-specified values for both the number of coins and number of throws (repetitions). You'll also change the way the program displays the output by scripting the DOM to dynamically create HTML content.
Note that this example uses tables with various elements nested within the table's cells (cells are dotted to make them visible here, but the outlines are normally not shown). Using tables to assist with HTML "GUI" element layout is a common approach, although there are other techniques available (e.g. CSS-based positioning). If you want to, you may use another technique to achieve the same general appearance.

For input, you are required to use text boxes, purposely so you will be forced to handle errors on input. Normally, if you can avoid input errors by using a better paradigm (such as a drop-down menu of valid choices), you should take such an approach. For the purpose of this lab, you need to make sure that the user specifies from 1 and 10 coins, and any number of throws greater than 0. Thus, input values <1 are not permitted for either value; non-integer, non-numeric (including empty) values are not permitted either.

You are required to display error messages regarding user input adjacent to the input fields - do not use the alert() function to present errors.

Your application must use an HTML button element to initiate the coin-flipping algorithm (details below). When that completes, your application's printHistogram() function should display output similar to that of the previous lab, except that it must be displayed on the same web page via JavaScript-generated dynamic HTML. There are various approaches to creating the histogram display; one way is to use the <progress> or <meter> elements (new to HTML5) to display the equivalent of the asterisk-based histograms of the previous lab. Note: printing asterisks is not allowed! For this lab, the histograms must be graphical in appearance. The console should not be used for output (other than for debugging purposes).

Note that you must also display the elapsed time required to execute your flipCoins() algorithm. In the last lab, you used the console object's methods to do this. For this lab, use the Javascript Date.now() or Performance.now() methods.
CSS Styling

Use CSS style rules to achieve the same general appearance as shown above, although you may choose your own colors, fonts, font sizes, table borders. You may use Bootstrap to style your page (refer to the Bootstrap reference for Grids, Tables, Progress Bars, Buttons, etc). However, you must adhere to the following few requirements:
bullet	Style the histogram bars to take up the majority (90% to 100%) of the overall width of the output portion of the display (the default width for the <meter> and <progress> elements is rather small). You'll have to compute a scaling factor based on the longest histogram line to do this.
bullet	Similarly, make the error message area wide enough to present those messages on only 1 or 2 lines. You may put your CSS rules in the .html file or in an external .css file.
Event Handling

For this assignment, place the majority of your JavaScript code in the CoinFlipper.js file (as you did for the last lab). In your CoinFlipper.html file, the only code in the <head> section should be the script tag where you refer to CoinFlipper.js:

    <!-- CoinFlipper functions in external file -->
    <script src="CoinFlipper.js"></script>

You will need some way of initializing your code; for example, by specifying a handler for the <body> onload event or the "Go" <button>'s onclick event.
Error Handling

When the "Go" button is pressed, you'll need to retrieve the values in the text fields and check them for valid values. You will need to show (via DOM scripting) error messages alongside the invalid input (and hide messages for valid input). This is the typical approach used in checkout forms in Amazon and other e-commerce sites.

A reason-specific error message should be generated that displays distinct/different errors for each of the following cases:
bullet	input value(s) outside of allowed range(s)
bullet	not a valid positive integer (e.g 8.7, -1, 0)
bullet	nothing at all entered,
bullet	non-numeric input (e.g. "1xy", "abc", "   ").

For validation of user input, you may find the following code useful as a starting point, but you will have to add additional checks:

/* Checks to see if the specified argument contains an integer.
   Returns false if simple checks indicate an invalid value or a value that is not a number.
 */
function isInteger(value) {
    var bool = isNaN(value);                    // true if not a number
    bool = bool || (value.indexOf('.') != -1);  // true if not a number like 3.2
    bool = bool || (value.indexOf(",") != -1);  // true if not a number like 3,2 (european decimal)
    return !bool;
}

When your application detects invalid input, it should display error messages, and should NOT display any histograms.

Submission
