export default function ()
{
  let info = function(i)
  {
    i.setup = function()
    {
      i.createCanvas(250, 700);
      i.background(0);

      i.textSize(20);
      i.fill(255);
      i.text('Color - Concentration', 10, 30);
      i.text('(㎍/㎥)', 130, 70);
      i.text('10', 10, 85);
      i.text('17.5', 10, 325);
      i.text('25', 10, 585);

      i.noStroke();
      i.colorMode(i.HSB);
      let f, r;
      for(f = conStart; f < conStart+conRange; f += 0.01)
      {
        i.stroke(255 -(f-conStart)*255/conRange, 255, 255);
        i.line(50, (f-conStart)*500/conRange +80, 150, (f-conStart)*500/conRange +80);
      }
    };
  };
}

export default function() {
  let graph = function(p)
  {
    let valueX = 0;
    let valueZ = 0;
    let value1;
    let value2;
    let value3;
    let value4;

    p.preload = function()
    {
      table1 = p.loadTable('0828_pm2.5.csv');
      table2 = p.loadTable('0828_pm10.csv');
      map1 = p.loadImage('GSA.png');
    };

    p.setup = function()
    {
      p.createCanvas(700, 700, p.P2D);
    };

    p.draw = function()
    {
      p.background(0);
      p.image(map1, 100, 100, 500, 500);

      let row;
      if(mode === 1)
      {
        for(let l = 1; l < table1.getRowCount(); l++)
        {
            row = table1.getRow(l);
            concentration = row.getString(1);
            latitude = -(row.getString(2)-35.22697222)*145945.6304*5/3 +600;
            longitude = (row.getString(3)-126.8471111)*118680.2753*5/3 +100;
            p.colorMode(p.HSB);
            p.fill(255 -(concentration-conStart)*255/conRange, 255, 255);
            p.circle(longitude, latitude, 20);   
        }
      }
      if(mode === 2)
      {
        for(let l = 1; l < table2.getRowCount(); l++)
        {
            row = table2.getRow(l);
            concentration = row.getString(1);
            latitude = -(row.getString(2)-35.22697222)*145945.6304*5/3 +600;
            longitude = (row.getString(3)-126.8471111)*118680.2753*5/3 +100;
            p.colorMode(p.HSB);
            p.fill(255 -(concentration-conStart)*255/conRange, 255, 255);
            p.circle(longitude, latitude, 20);
        }
      }
    };

    p.keyTyped = function()
    {
      if(p.key === '1')
      {
        mode = 1;
      }
      if(p.key === '2')
      {
        mode = 2;
      }
    };
  };
}
