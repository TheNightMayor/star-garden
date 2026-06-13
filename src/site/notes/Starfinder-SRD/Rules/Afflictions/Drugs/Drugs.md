---
{"dg-publish":true,"permalink":"/starfinder-srd/rules/afflictions/drugs/drugs/","dg-note-properties":{"aliases":null,"tags":null}}
---


# Drugs

Though numerous pharmaceuticals and similar substances can be referred to as drugs, this entry refers specifically to narcotics that are not typically used for medicinal purposes. Drugs are normally weaponized by loading a single dose into a weapon with the injection weapon property, such as an [[Starfinder-SRD/Compendium/Items/Weapons/Advanced Melee/One Handed - Advanced Melee/Injection Glove\|Injection Glove]] or [[Starfinder-SRD/Compendium/Items/Weapons/Smallarms/Needler Pistol/Needler Pistol\|Starfinder-SRD/Compendium/Items/Weapons/Smallarms/Needler Pistol/Needler Pistol]]. Drugs can also be slipped into the food or drink of a target, normally requiring both that a character succeed at a DC 20 Sleight of Hand check and that the imbiber fail a separate DC 20 Perception check to notice the change in the drugged food or drink. For more information about drugs, including stat blocks for specific drugs and details about addiction and their other effects, see [[Starfinder-SRD/Rules/Afflictions/Afflictions\|Afflictions]]

Drugs are a special kind of poison that grant a beneficial effect right away but also move the user a single step down the associated poison track. However, the user doesn’t lose Hit Points, even if the drug functions as a Constitution poison. Taking a drug also exposes the user to the [[Starfinder-SRD/Rules/Afflictions/Diseases/Addiction\|Addiction]] disease, with a DC that depends on how addictive the drug is. If a character is dosed with a drug against his will, he can attempt a Fortitude save against the drug’s DC. If he succeeds, this negates both the drug’s beneficial and negative effects, as well the chance for addiction. Immunity to poison or a similar effect prevents a character from experiencing the drug’s beneficial effects, and removing or suppressing a drug’s negative effects with restorative spells also cancels the benefits.


```base
views:
  - type: table
    name: Table
    filters:
      and:
        - file.folder == "Starfinder-SRD/Rules/Afflictions/Drugs"
        - '!file.name.contains("Drugs")'
    order:
      - Level
      - file.name
      - price
      - itemtype
      - addiction
      - DC
      - track
      - Effect
    sort:
      - property: Level
        direction: ASC
    columnSize:
      note.Level: 59
      file.name: 138
      note.addiction: 129
      note.track: 86
    rowHeight: medium

```

