
var call_number_group = document.createElementNS("http://www.w3.org/2000/svg", "svg");
call_number_group.setAttribute('width','60');
call_number_group.setAttribute('height','4.8em');
call_number_group.setAttribute('x','0');
call_number_group.setAttribute('y','885.8');

var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect.setAttribute('width','60');
rect.setAttribute('height','4.8em');
rect.setAttribute('fill','#eee');

//<text font-family="monospace">
var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
text.setAttribute('font-family','monospace');

//<tspan x=".5em" dy="1.2em">QL696</tspan>
var tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
tspan.setAttribute('x','.5em');
tspan.setAttribute('dy','1.2em');
tspan.textContent = 'QL696';

//roll everything up
text.appendChild(tspan);
call_number_group.appendChild(rect);
call_number_group.appendChild(text);
rc4_01.appendChild(call_number_group);
