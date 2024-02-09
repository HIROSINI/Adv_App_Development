package com.recharge.mobilerecharge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.recharge.mobilerecharge.model.Plans;
import com.recharge.mobilerecharge.service.PlanService;

import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("/api/plans")
public class PlansController {

    @Autowired
    private PlanService planService;

    @Tag(name="Getting Plans",description = "Getting Plans using Plantype Endpoint")
    @GetMapping("/customer/{planType}")
    public ResponseEntity<List<Plans>> getPlanByType(@PathVariable String planType) {
        List<Plans> plans = planService.getPlanByType(planType);
        return ResponseEntity.ok(plans);
    }
    
    @Tag(name="Delete Plans",description = "Deleting Plans using PlanID Endpoint")
    @DeleteMapping("/del/{planId}")
    public ResponseEntity<Void> deletePlan(@PathVariable Long planId) {
        planService.deletePlan(planId);
        return ResponseEntity.noContent().build();
    }

    @Tag(name="Update Plans",description = "Updating Plans Using PlanID Endpoint")
    @PutMapping("/update/{id}")
    public ResponseEntity<Plans> updatePlan(@PathVariable Long id, @RequestBody Plans plan) {
        Plans updatedPlan = planService.updatePlan(id, plan);
        if (updatedPlan != null) {
            return ResponseEntity.ok().body(updatedPlan);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Tag(name="Posting Plans",description = "Posting Recharging Plans Endpoint")
    @PostMapping("/post")
    public ResponseEntity<Plans> savePlan(@RequestBody Plans plan) {
        Plans savedPlan = planService.savePlan(plan);
        return ResponseEntity.ok().body(savedPlan);
    }

}