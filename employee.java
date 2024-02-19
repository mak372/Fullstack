package com.assignment.api.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Column;

@Entity
@Table(name = "employee")
public class employee {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int employee_id;
	@Column
	private String name;
	@Column
	private String team;
	@Column
	private int mobile_number;
	@Column
	private String email;
	
	public employee(){
		
	}
	
	public employee(String name, String team, int mobile_number, String email) {
		super();
		this.name = name;
		this.team = team;
		this.mobile_number = mobile_number;
		this.email = email;
	}

	public int getEmployee_id() {
		return employee_id;
	}
	public void setEmployee_id(int employee_id) {
		this.employee_id = employee_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTeam() {
		return team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
	public int getMobile_number() {
		return mobile_number;
	}
	public void setMobile_number(int mobile_number) {
		this.mobile_number = mobile_number;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	@Override
	public String toString() {
		return "employee [employee_id=" + employee_id + ", name=" + name + ", team=" + team + ", mobile_number="
				+ mobile_number + ", email=" + email + "]";
	}
	
	
}
