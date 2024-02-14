package com.recharge.mobilerecharge.controller;

import com.recharge.mobilerecharge.model.Recharge;
import com.recharge.mobilerecharge.service.RechargesService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;


@RestController
@RequestMapping("/api/recharges")
public class RechargeController {

    @Autowired
    private RechargesService rechargeService;

    @Tag(name="Delete Recharge Plan",description = "Deleting Recharge Plan using PlanID Endpoint")
    @DeleteMapping("/api/customer/recharge/{planId}")
    public ResponseEntity<String> deleteRecharge(@PathVariable Long planId) {
        rechargeService.deleteRecharge(planId);
        return ResponseEntity.ok("Recharge plan deleted");
    }

    @Tag(name="Posting Recharge",description = "Posting New Recharge Plans Endpoint")
    @PostMapping("/api/customer/recharge")
    public ResponseEntity<Recharge> saveRecharge(@RequestBody Recharge recharge) {
        Recharge savedRecharge = rechargeService.saveRecharge(recharge);
        return ResponseEntity.ok().body(savedRecharge);
    }
    
    // @PostMapping("/api/customer/recharge/addon")
    // public ResponseEntity<Recharge> saveAddOn(@RequestBody AddOn addOn)
	// {
    //     AddOn savedAddOn = rechargeService.saveRecharge(addOn);
    //     return ResponseEntity.ok().body(savedAddOn);
	// }

    @Tag(name="Updating Recharge Plans ",description = "Updating Recharge Plans using PlanID Endpoint")
    @PutMapping("/api/customer/recharge/{planId}")
    public ResponseEntity<String> editRecharge(@PathVariable Long planId, @RequestBody Recharge recharge) {
		rechargeService.updateDetails(planId,recharge);
        return ResponseEntity.ok("Recharge plan edited");
    }
    // @GetMapping("/api/customer/{userid}")
	// public List<Recharge> fetchDetails()
	// {
	// 	return rechargeService.getDetails();
	// }

    @Tag(name="Getting Recharge",description = "Getting Recharging using UserID Endpoint")
    @GetMapping("/api/customer/{userid}")
	public Optional<Recharge> fetchID(@PathVariable("userid") Long id)
	{
		return rechargeService.getDetailss(id);
	}

}