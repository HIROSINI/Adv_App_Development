package com.recharge.mobilerecharge.service;


import java.util.List;

import com.recharge.mobilerecharge.model.Addons;

public interface AddonService {

        List<Addons> getAllAddOns();
    
        Addons saveAddOn(Addons addOn);
        Addons saveAddOns(Addons addOn);
    
}
