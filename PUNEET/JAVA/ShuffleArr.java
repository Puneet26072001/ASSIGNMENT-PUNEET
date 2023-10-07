
import java.util.Arrays;
import java.util.Random;

public class ShuffleArr {
	public static void main(String[] args) {
		int[] a = { 1, 2, 3, 4, 5, 6, 7 };
		Random rand = new Random();
		for (int i = 0; i < a.length; i++) {
			int ranSwap = rand.nextInt(a.length);
			int t = a[ranSwap];
			a[ranSwap] = a[i];
			a[i] = t;
		}
		System.out.println(Arrays.toString(a));
	}
}