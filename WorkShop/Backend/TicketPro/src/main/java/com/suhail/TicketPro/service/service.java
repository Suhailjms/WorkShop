package com.suhail.TicketPro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.suhail.TicketPro.entity.ticket;
import com.suhail.TicketPro.repo.repo;

import jakarta.persistence.EntityManager;
@Service
public class service {

	@Autowired
	private repo stu;
	
	@Autowired
	EntityManager entityManager;
	public ticket savedata(ticket s) {
		return stu.save(s);
	}
	
	public void deleteDataById(int id) {
		stu.deleteById(id);
	}
	public ticket updatedata(ticket s) {
		return stu.saveAndFlush(s);
	}
	public List<ticket> findall(int pgno,int pgsize){
		PageRequest pg=PageRequest.of(pgno, pgsize);
		Page<ticket> pagedResult = stu.findAll(pg);
		return pagedResult.toList();
	}
	public List<ticket> findTicketsWithSorting(String field){
		return stu.findAll(Sort.by(Sort.Direction.DESC,field));
	}
	public List <ticket> getByAttribute(String attribute,int id){
		return stu.findAllTickets(attribute,id);
	}
}

