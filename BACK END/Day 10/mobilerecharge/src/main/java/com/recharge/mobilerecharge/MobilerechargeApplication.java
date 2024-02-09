package com.recharge.mobilerecharge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;


@SpringBootApplication
@OpenAPIDefinition (
		info =@Info (
				title = "RechargeNow",
				version = "0.0.1",
				description = "Online Mobile Recharge Portal",
				contact = @Contact(
						name = "Hirosini",
						email = "hirop2408@gmail.com"
						)
				)
		)
public class MobilerechargeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MobilerechargeApplication.class, args);
	}

}
