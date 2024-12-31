package com.fitness.gymmanagement.services;

import com.fitness.gymmanagement.models.Payments;
import com.fitness.gymmanagement.repository.PaymentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentsService {

    @Autowired
    private PaymentsRepository paymentsRepository;

    public List<Payments> getAllPayments() {
        return paymentsRepository.findAll();
    }

    public Payments getPaymentById(Long id) {
        return paymentsRepository.findById(id).get();
    }

    public Payments addPayment(Payments payment) {
        return paymentsRepository.save(payment);
    }

    public void deletePayment(Long id) {
        paymentsRepository.deleteById(id);
    }
}
