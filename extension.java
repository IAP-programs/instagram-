import java.io.File;
import java.io.IOException;

public class TempFileWithExtension {
    public static void main(String[] args) {
        try {
            // Specify the prefix, suffix, and directory for the temporary file
            String prefix = "temp";
            String suffix = ".txt"; // Change this to your desired extension
            File tempFile = File.createTempFile(prefix, suffix);

            // Get the absolute path of the temporary file
            String tempFilePath = tempFile.getAbsolutePath();

            System.out.println("Temporary file created: " + tempFilePath);

            // Now you can use tempFilePath to work with the temporary file

            // Don't forget to delete the temporary file when done
            //tempFile.delete();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
