What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: getElementById finds one specific element by its unique id. it always returns just one element. getElementByClassName finds all elements that have that specific class. it retruns a collection of matching elements. querySelector finds the first element
that matches any css selector and querySelectorAll finds all elements that match any css selector.

How do you create and insert a new element into the DOM?
ans: by using createElement(). this will create a new html element. the specific element can be creating by adding the name of that element inside the parenthesis with single or double quotes like this createElement("div");.


What is Event Bubbling and how does it work?
ans: event bubbiling is how events goes up through the DOM tree from the element where they occurred to its parent elements. when an element is clicked, the event doesn't just happen on that element; it also "bubbles up" through all of its parent 
elements, one by one until it reaches the documnet root.


What is Event Delegation in JavaScript? Why is it useful?
ans: it is a technique where you attach a single event listener to a parent element to handle events for all of its children, instead to a parent element to handle events for all of its children; instead of attaching individual listeners to each child element.
it is useful because it automatically works for elements added later like it works with dynamic content; gives better performance and cleaner code.



What is the difference between preventDefault() and stopPropagation() methods?
ans: preventDefault() stops the browsers default behavior for that event like it would prevent what would normally happen when an event occurs, but the event still bubbles up through the DOM. in simple terms it'd just prevent the submission of an event.
on the other hand stopPropagation() stops the event from bubbling up to parent elemetns. the default browser behavior still happens but, parent elements won't recieve the envet.
the two key difference is that preventDefault() stops default behavior of the event and stopPropagation() won't; meanwhile preventDefault() won't stop event bubbling whilest stop Propagation will.
