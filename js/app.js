// State Object

// what information do you need to store?
// items []


// State Modification Functions

// these represent everything you can do to state
// take state as first argument
// any other data as other arguments
// should contain no jQuery code

// DOM Modification Functions (Functions that render state)

// render HTML into a DOM element
// single function for each part of the page you want to update
// Two arguments: state object, and a DOM element to render into
// body constructs the HTML to put into the DOM element
// each render function should finish with with a line that calls =>
// element.html to replace the old content w. the new content

// Event Listeners

// when an event fires, call one or more of your state mod functions =>
// to update the state appropriately
// then call one or more of your render functions to make your DOM =>
// reflect the updated state
