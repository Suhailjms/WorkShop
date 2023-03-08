package com.suhail.TicketPro.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;

import com.suhail.TicketPro.entity.ticket;

public interface repo extends JpaRepository<ticket, Integer>
	{
		@Query(
				value="select * from movies m where m.name = ?1 and m.id=?2",
				nativeQuery = true)
		List<ticket> findAllTickets(String name,int id);
}