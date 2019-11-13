let conStart = 10;
let conRange = 15;
let mode = 1;

function setup()
{
  let botton1, button2;
  button1 = createButton('pm2.5');
  button1.position(10, 100);
  button1.mouseClicked(button1clicked);
  button2 = createButton('pm10');
  button2.position(10, 130);
  button2.mouseClicked(button2clicked);
}
function button1clicked()
  {
    mode = 1;
  };
function button2clicked()
  {
    mode = 2;
  };

import graph from "./gsadust.js";
import info from "./gsadust.js";
import table from "./gsadust.js";

new p5(graph);
new p5(info);
new p5(table);
