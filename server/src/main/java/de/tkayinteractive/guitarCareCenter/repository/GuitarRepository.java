package de.tkayinteractive.guitarCareCenter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import de.tkayinteractive.guitarCareCenter.domain.Guitar;

public interface GuitarRepository extends JpaRepository<Guitar, Long> {

}
