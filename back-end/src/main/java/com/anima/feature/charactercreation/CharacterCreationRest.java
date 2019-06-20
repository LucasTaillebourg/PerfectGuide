package com.anima.feature.charactercreation;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CharacterCreationRest {
    
    @GetMapping("/characterType")
    public List<CharacterType> getCharatersType(){
        System.out.println("Requete");
        CharacterType c1 = CharacterType.builder().id(1).name("Personnage").build();
        CharacterType c2 = CharacterType.builder().id(2).name("Monstre").build();
        ArrayList<CharacterType> characterTypes = new ArrayList<>();
        characterTypes.add(c1);
        characterTypes.add(c2);
        System.out.println("Reponse : " + characterTypes);
        return characterTypes;
    }
    
}
