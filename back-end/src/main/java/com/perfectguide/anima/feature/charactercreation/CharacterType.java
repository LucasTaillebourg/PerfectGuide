package com.perfectguide.anima.feature.charactercreation;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class CharacterType {
    private String name;
    private long id;
}
