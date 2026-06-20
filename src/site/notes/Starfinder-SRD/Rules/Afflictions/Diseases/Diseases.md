---
{"dg-publish":true,"dg-path":"Rules/Afflictions/Diseases/Diseases.md","permalink":"/rules/afflictions/diseases/diseases/","dg-note-properties":{"cssclasses":null,"aliases":[],"tags":[]}}
---


# Diseases

Diseases are typically inhaled contagions (though these are usually filtered out by a standard space suit or suit of [[Starfinder-SRD/Compendium/Items/Armor/Armor\|Starfinder-SRD/Compendium/Items/Armor/Armor]]) or injury contagions. Page 417 explains the details of each method of contagion. If a disease lacks a Cure entry, its progression may be irreversible without powerful magic or technology, but a successful casting of _[[Starfinder-SRD/Compendium/Spells/Spells Level 3/Remove Affliction\|Remove Affliction]]_ usually prevents further deterioration. Physical and mental diseases have separate tracks.


```base
views:
  - type: table
    name: Table
    filters:
      and:
        - file.folder == "Starfinder-SRD/Rules/Afflictions/Diseases"
        - '!file.name.contains("Diseases")'
    order:
      - file.name
      - cure
      - DC
      - frequency
      - itemtype
      - track
      - Effect
    columnSize:
      note.cure: 121
      note.frequency: 80
      note.track: 92
    rowHeight: medium

```




