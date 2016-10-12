
//create the main svg
var call_number_group = document.createElementNS("http://www.w3.org/2000/svg", "svg");
call_number_group.setAttribute('width','90');
call_number_group.setAttribute('height','4.8em');
call_number_group.setAttribute('x','0');
call_number_group.setAttribute('y','885.8');

//create the "book" rect
var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect.setAttribute('width','60');
rect.setAttribute('height','4.8em');
rect.setAttribute('fill','#eee');
rect.setAttribute('stroke',"#BE1E2D");
rect.setAttribute('stroke-width','3');

//<text font-family="monospace">
var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
text.setAttribute('font-family','monospace');

//<tspan x=".5em" dy="1.2em">QL696</tspan>
var tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
tspan.setAttribute('x','.5em');
tspan.setAttribute('dy','1.2em');
tspan.textContent = 'QL696';

//create the directional triangle svg
//<svg x="60" y="0" xmlns="http://www.w3.org/2000/svg">
//	<polygon points="0,0 0,30 15,15" fill="#FFDD00" stroke="firebrick" stroke-width="2"/>
//</svg>
var arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
arrow.setAttribute('x','60');
arrow.setAttribute('y','0');

var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
polygon.setAttribute('points','0,0 0,30 15,15');
polygon.setAttribute('fill','#FFDD00');
polygon.setAttribute('stroke','firebrick');
polygon.setAttribute('stroke-width','2');

//roll everything up
arrow.appendChild(polygon);
text.appendChild(tspan);
call_number_group.appendChild(rect);
call_number_group.appendChild(text);
call_number_group.appendChild(arrow);
rc4_01.appendChild(call_number_group);
