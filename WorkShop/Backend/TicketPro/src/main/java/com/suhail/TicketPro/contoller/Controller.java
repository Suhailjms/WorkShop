package com.suhail.TicketPro.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.suhail.TicketPro.entity.ticket;
import com.suhail.TicketPro.service.service;

@RestController
@CrossOrigin("http://localhost:3000")
public class Controller {
		
 @Autowired
 private service ss;
 
 @PostMapping("/savedata")
 public boolean savingdata(@RequestBody ticket s) {
	  return ss.savedata(s) != null;
 }
 
 @GetMapping("/{field}")
 public List<ticket> listing(@PathVariable String field) {
	 List<ticket>allTickets = ss.findTicketsWithSorting(field);
 	 return allTickets ;
 }
 @GetMapping("/find/{attribute}/{id}")
 public List<ticket> getAttribute(@PathVariable String attribute,@PathVariable int id) {
	 List<ticket>allTickets = ss.getByAttribute(attribute,id);
 	 return allTickets ;
 }
 @PutMapping("/update")
 public Boolean updatedata(@RequestBody ticket s) {
	 return ss.updatedata(s)!=null;
 }
 
 @DeleteMapping("/deleteById/{id}")
 public void deleteDepartmentById(@PathVariable("id") int id ) {
     ss.deleteDataById(id);
 }
}


