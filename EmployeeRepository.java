package com.assignment.api.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.assignment.api.entity.employee;

public interface EmployeeRepository extends JpaRepository<employee,Integer>{
	
}
