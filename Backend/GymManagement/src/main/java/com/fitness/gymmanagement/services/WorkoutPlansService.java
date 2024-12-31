package com.fitness.gymmanagement.services;

import com.fitness.gymmanagement.models.WorkoutPlans;
import com.fitness.gymmanagement.repository.WorkoutPlansRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkoutPlansService {

    @Autowired
    private WorkoutPlansRepository workoutPlansRepository;

    public List<WorkoutPlans> findAll() {
        return workoutPlansRepository.findAll();
    }

    public WorkoutPlans findById(Long id) {
        return workoutPlansRepository.findById(id).get();
    }

    public WorkoutPlans save(WorkoutPlans workoutPlans) {
        return workoutPlansRepository.save(workoutPlans);
    }

    public void delete(Long id) {
        workoutPlansRepository.deleteById(id);
    }
}
