// Utility functions to replace lodash dependencies

/**
 * Checks if a value is a function.
 * @param {*} value - The value to check
 * @returns {boolean} True if the value is a function, false otherwise
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Sorts an array by a given property or iteratee function.
 * @param {Array} array - The array to sort
 * @param {string|function} iteratee - The property name or function to sort by
 * @returns {Array} A new sorted array
 */
function sortBy(array, iteratee) {
  return array.slice().sort(function(a, b) {
    var aValue = typeof iteratee === 'function' ? iteratee(a) : a[iteratee];
    var bValue = typeof iteratee === 'function' ? iteratee(b) : b[iteratee];
    
    if (aValue < bValue) return -1;
    if (aValue > bValue) return 1;
    return 0;
  });
}

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed.
 * @param {function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @param {Object} [options] - The options object
 * @param {boolean} [options.leading=false] - Specify invoking on the leading edge of the timeout
 * @returns {function} The debounced function
 */
function debounce(func, wait, options) {
  var timeout;
  var leading = options && options.leading;
  
  return function() {
    var context = this;
    var args = arguments;
    
    var later = function() {
      timeout = null;
      if (!leading) func.apply(context, args);
    };
    
    var callNow = leading && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
}

// Export for use in other files
window.FlipletChartLineUtils = {
  isFunction: isFunction,
  sortBy: sortBy,
  debounce: debounce
};