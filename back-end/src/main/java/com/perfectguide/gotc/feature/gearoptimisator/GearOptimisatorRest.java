package com.perfectguide.gotc.feature.gearoptimisator;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
public class GearOptimisatorRest {
    private static final String GEAR_OPTIMISATION_ENDPOINT = "gearOptimisation";

    @GetMapping("/" + GEAR_OPTIMISATION_ENDPOINT + "/listGear")
    public List<Item> getGearList(){
        
        Map<String, Float> stats1 = new HashMap<>();
        stats1.put("Attack", 10f);

        Map<String, Float> stats2 = new HashMap<>();
        stats2.put("Defense", 10f);
        
        Item casqueKG = Item.builder()
                                .set("Kings guard")
                                .location(Location.HELMET)
                                .rarity(Rarity.LEGENDARY)
                                .stats(stats1)
                                .build();

        Item bootFaceless = Item.builder()
            .set("Faceless")
            .location(Location.BOOT)
            .rarity(Rarity.POOR)
            .stats(stats2)
            .build();

        List<Item> items = new ArrayList<>();
        items.add(casqueKG);
        items.add(bootFaceless);
        return items;
    }

}