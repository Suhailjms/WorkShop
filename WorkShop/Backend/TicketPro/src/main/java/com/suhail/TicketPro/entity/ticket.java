package com.suhail.TicketPro.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;	
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Tickets")

public class ticket {


	@Id
	@Column(name = "ID")
	@GeneratedValue
	private int id;
	@Column(name = "name")
	private String name;
	@Column(name = "movie_name")
	private String movie_name;
	@Column(name = "email")
	private String email;

	@Column(name = "time")
	private String time;
	@Column(name = "tickets")
	private int tickets;
	public String getMovie_name() {
		return movie_name;
	}


	public void setMovie_name(String movie_name) {
		this.movie_name = movie_name;
	}


	@Column(name="price")
	private int price;
	@Column(name="screen_no")
	private int screen_no;
	@Column(name="seat")
	private String seat;
	
		
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	

	public int getTickets() {
		return tickets;
	}


	public void setTickets(int tickets) {
		this.tickets = tickets;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	public int getScreen_no() {
		return screen_no;
	}


	public void setScreen_no(int screen_no) {
		this.screen_no = screen_no;
	}
	

	public ticket(int id, String name, String time,int tickets,int price,int screen_no,String seat,String email,String movie_name) {
		super();
		this.id = id;
		this.name = name;
		this.time = time;
		this.tickets=tickets;
		this.price = price;
		this.screen_no= screen_no;
		this.seat = seat;	
		this.email = email;
		this.movie_name = movie_name;
	}
	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getTime() {
		return time;
	}


	public void setTime(String time) {
		this.time = time;
	}


	public String getSeat() {
		return seat;
	}


	public void setSeat(String seat) {
		this.seat = seat;
	}


	public ticket() {
		
	}
	}