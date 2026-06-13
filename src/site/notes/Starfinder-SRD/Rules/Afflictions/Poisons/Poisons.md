---
{"dg-publish":true,"permalink":"/starfinder-srd/rules/afflictions/poisons/poisons/","dg-note-properties":{"cssclasses":null,"aliases":[],"tags":null}}
---


# Poisons

Poisons are normally weaponized by loading a single dose into a weapon with the injection special property, such as an [[Starfinder-SRD/Compendium/Items/Weapons/Advanced Melee/One Handed - Advanced Melee/Injection Glove\|Injection Glove]] or [[Starfinder-SRD/Compendium/Items/Weapons/Smallarms/Needler Pistol\|Needler Pistol]]. It’s also possible to add a dose of poison to a melee weapon that deals piercing or slashing [[Starfinder-SRD/Rules/Combat Mechanics/Damage\|Damage]], though this takes a standard action and requires the poison to be in a vial that’s already in hand.


```base
properties:
  file.name:
    displayName: name
views:
  - type: table
    name: Poisons
    filters:
      and:
        - file.folder == "Starfinder-SRD/Rules/Afflictions/Poisons"
        - '!file.name.contains("Poisons")'
    order:
      - Level
      - file.name
      - price
      - save
      - DC
      - track
      - itemtype
      - cure
      - Effect
      - frequency
      - onset
    sort:
      - property: Level
        direction: ASC
      - property: type
        direction: ASC
    columnSize:
      note.Level: 62
      note.save: 70
      note.DC: 56
      note.track: 123
      note.frequency: 131

```

