package com.assignment.api.controller;
import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import com.assignment.api.entity.employee;
import com.assignment.api.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController 
{
	@Autowired
	EmployeeRepository repo;
	@GetMapping("/")
	public List<employee> getAllemployees()
	{
		List<employee> employee = repo.findAll();
		return employee;
	}
	
	@PostMapping("/addemployee")
	public void addemployee(@RequestBody employee employee)
	{
		repo.save(employee);
	}
	
	@GetMapping("/updateemployee/{id}")
	public employee updateemployee(@PathVariable int id)
	{
		employee employee = repo.findById(id).get();
		return employee;

				
	}
	@PutMapping("/updateemployee/{id}")
	public employee updateemployee(@PathVariable int id,@RequestBody employee updatedemployee) 
	{
		employee employee = repo.findById(id).get();
		employee.setName(updatedemployee.getName());
		employee.setTeam(updatedemployee.getTeam());
		employee.setMobile_number(updatedemployee.getMobile_number());
		employee.setEmail(updatedemployee.getEmail());
		repo.save(employee);
		return employee;
	}
	
	@DeleteMapping("/deleteemployee/{id}")
	public void employee(@PathVariable int id)
	{
		employee employee = repo.findById(id).get();
		repo.delete(employee);
	}
}


