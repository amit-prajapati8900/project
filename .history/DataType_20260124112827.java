import java.util.*;
public class DataType {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    //     String val = sc.nextLine();
    //     System.out.println(val);
    //    byte byt=sc.nextByte();
    //    System.out.println(byt);
   int Pencile = (int)sc.nextFloat();
   int  Pen = (int)sc.nextFloat();
   int Ers = (int)sc.nextFloat();
   float bill=(float)(Pencile+Pen+Ers);
   float gst=18/100*bill;
    System.out.println(gst);
   }
}


