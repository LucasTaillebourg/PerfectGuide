package com.anima.feature.charactercreation;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CharacterCreationRest {
    
    @GetMapping("/characterType")
    public List<CharacterType> getCharatersType(){
        CharacterType c1 = CharacterType.builder().id(1).type("Personnage").build();
        CharacterType c2 = CharacterType.builder().id(2).type("Monstre").build();
        ArrayList<CharacterType> characterTypes = new ArrayList<>();
        characterTypes.add(c1);
        characterTypes.add(c2);
        return characterTypes;
    }
    
}
