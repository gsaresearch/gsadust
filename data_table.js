export default function ()
{
  let table = function(p)
  {
    let mode = 1;
    let f, r;

    p.preload = function()
    {
      table1 = p.loadTable('0828_pm2.5.csv');
      table2 = p.loadTable('0828_pm10.csv');
    };

    p.setup = function() 
    {
      p.createCanvas(430, 700);
      p.frameRate(10);
    };

    p.draw = function() 
    {
      p.background(0);
      p.noFill();
      p.stroke(255);
      p.textSize(12);

      for(f = 10; f <= 310; f = f+100)
      {
        p.rect(f, 10, 100, 20);
      }
      p.text('time', 15, 25);
      p.text('concentration', 115, 25);
      p.text('latitude', 215, 25);
      p.text('longitude', 315, 25);

      if(mode === 1)
      {
        for(f = 1; f < table1.getRowCount(); f++)
        {
          row = table1.getRow(f); 
          for(r = 10; r <= 310; r = r+100)
          {
            p.rect(r, 10+ 20*f, 100, 20);
          }
          p.text(row.getString(0), 15, 25+ 20*f);
          p.text(row.getString(1), 115, 25+ 20*f);
          p.text(row.getString(2), 215, 25+ 20*f);
          p.text(row.getString(3), 315, 25+ 20*f);
        }
      }
      else
      {
        for(f = 1; f < table2.getRowCount(); f++)
        {
          row = table2.getRow(f); 
          for(r = 10; r <= 310; r = r+100)
          {
            p.rect(r, 10+ 20*f, 100, 20);
          }
          p.text(row.getString(0), 15, 25+ 20*f);
          p.text(row.getString(1), 115, 25+ 20*f);
          p.text(row.getString(2), 215, 25+ 20*f);
          p.text(row.getString(3), 315, 25+ 20*f);
        }
      }
    };

    p.mouseWheel = function()
    {
      p.translate(0, 10);
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
