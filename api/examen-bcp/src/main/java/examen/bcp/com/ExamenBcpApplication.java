package examen.bcp.com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan({ "examen.bcp.com.*" })
@SpringBootApplication
public class ExamenBcpApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExamenBcpApplication.class, args);
	}

}
