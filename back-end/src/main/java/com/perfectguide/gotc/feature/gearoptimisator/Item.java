package com.perfectguide.gotc.feature.gearoptimisator;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Builder
@Getter
@Setter
public class Item {
    String set;
    Location location;
    Rarity rarity;
    Map<String, Float> stats;
}
