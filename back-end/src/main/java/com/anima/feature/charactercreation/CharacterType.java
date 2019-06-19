package com.anima.feature.charactercreation;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class CharacterType {
    private String type;
    private long id;
}
