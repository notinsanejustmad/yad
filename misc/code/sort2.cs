using System;
using System.Drawing;
class gray{
  protected static int origRow;
  protected static int origCol;
  static void Main(){
    origRow = Console.CursorTop;
    origCol = Console.CursorLeft;
    Console.WriteLine("Put bitmap (.bmp) image in the same folder as this file.");
    Console.WriteLine("Then enter the file name (e.g image.bmp), then hit enter:  ");
    string imageName = Console.ReadLine();
Bitmap c = new Bitmap(imageName);
            Bitmap d;
                Random rnd = new Random();
            int x, y;
            int x2, y2;
            int i;
            Color[] pixels = new Color[c.Width * c.Height];
            int R, G, B;
            int sum1;
            int temp;
            Console.Clear();
            Console.WriteLine("How moshed should it be (100-200 is a good range, but try out what you want)");
            int sort = Convert.ToInt32(Console.ReadLine());
            Console.Clear();
            Console.WriteLine("Working... this might take a few seconds, be patient");
            Color newColor = Color.FromArgb(0, 0, 0);

            // Loop through the images pixels to reset color.

            for (i = 0; i < c.Width * c.Height; i++)
{
  x = i / c.Height;
  y = ((i) - x) / c.Width;
      pixels[i] = c.GetPixel(x, y);
    }
            for (x = 0; x < c.Width; x++)
            {
                for (y = 0; y < c.Height; y++)
                {
                  i= (y * c.Width) + x;
                  sum1 = (c.GetPixel(x, y).R+c.GetPixel(x, y).G+c.GetPixel(x, y).B);
                  R = c.GetPixel(x,y).R;
                  G = c.GetPixel(x,y).G;
                  B = c.GetPixel(x,y).B;
                  int sum2 = pixels[i].R + pixels[i].G + pixels[i].B;
                  newColor = Color.FromArgb(R, G, B);
                  bool tempp = false;
                  if (sum1 < sum2 + sort && sum1 > sum2 - sort){
                    tempp = true;
                  }
                    if(tempp) {
                      newColor = Color.FromArgb(pixels[i].R, pixels[i].G, pixels[i].B);
                    }
                    c.SetPixel(x, y, newColor);

            }
          }
          for (i = 0; i < c.Width * c.Height; i++)
{
y = i / c.Width;
x = ((i) - y) / c.Height;
    pixels[i] = c.GetPixel(x, y);
  }
          for (x = 0; x < c.Width; x++)
          {
              for (y = 0; y < c.Height; y++)
              {
                i= (x * c.Height) + y;
                sum1 = (c.GetPixel(x, y).R+c.GetPixel(x, y).G+c.GetPixel(x, y).B);
                R = c.GetPixel(x,y).R;
                G = c.GetPixel(x,y).G;
                B = c.GetPixel(x,y).B;
                int sum2 = pixels[i].R + pixels[i].G + pixels[i].B;
                newColor = Color.FromArgb(R, G, B);
                bool tempp = false;
                if (sum1 < sum2 + sort && sum1 > sum2 - sort){
                  tempp = true;
                }
                  if(tempp) {
                    newColor = Color.FromArgb(pixels[i].R, pixels[i].G, pixels[i].B);
                  }
                  c.SetPixel(x, y, newColor);

          }
        }
           c.Save("new.bmp");
           Console.Clear();
           Console.WriteLine("Done! Press Enter to exit");
           Console.ReadLine();
         }

protected static void WriteAt(string s, int x, int y){
  try
   {
     Console.SetCursorPosition(origCol+x, origRow+y);
     Console.Write(s);
    }
  catch (ArgumentOutOfRangeException e)
    {
      Console.Clear();
      Console.WriteLine(e.Message);
     }
        }
         }
