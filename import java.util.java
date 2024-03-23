import java.util.Scanner;
public class Number
{
    public static void main (string[] args)
{
int num;
System.out.print("enter an integer number: ");
Scanner input = new Scanner(System.in);
num =input.nextInt();

if (num % 2 == 0)
System.out.println(num+ "is an even number.");
else
System.out.println(num+ "is an odd number. ");
}
}




