package de.tkayinteractive.guitarCareCenter.domain;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Guitar {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String manufacturer;
	private String model;
	private String color;
	private String purchaseDate;
	private BigDecimal price;
	
	public Guitar() {
		// TODO Auto-generated constructor stub
	}

	public Guitar(Long id, String manufacturer, String model, String color, String purchaseDate, BigDecimal price) {
		super();
		this.id = id;
		this.manufacturer = manufacturer;
		this.model = model;
		this.color = color;
		this.purchaseDate = purchaseDate;
		this.price = price;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(String purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Guitar [id=" + id + ", manufacturer=" + manufacturer + ", model=" + model + ", color=" + color
				+ ", purchaseDate=" + purchaseDate + ", price=" + price + "]";
	}
	
	
	

}
