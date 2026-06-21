---
{"dg-publish":true,"dg-path":"Aliens/Alien-Codex.md","permalink":"/aliens/alien-codex/","contentClasses":"","dg-note-properties":{"cssclasses":[],"aliases":["Alien Codex"],"date created":"Tuesday, August 22nd 2023, 4:01:13 pm","date modified":"Tuesday, July 30th 2024, 10:08:01 pm","icon":"bug","tags":[]}}
---


```base
views:
  - type: cards
    name: All Aliens A-Z
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
    groupBy:
      property: cr
      direction: ASC
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
      - hp
      - EAC
      - KAC
      - ac
      - Init
      - modifier
    sort:
      - property: file.name
        direction: ASC
    image: note.image
    columnSize:
      note.cr: 45
      note.type: 160
      note.subtype: 119
      note.alignment: 123
      note.hp: 56
      note.EAC: 77
      note.KAC: 78
      note.Init: 77
      note.modifier: 104
    cardSize: 140
    imageAspectRatio: 1.5
  - type: cards
    name: Aberration
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type.contains("aberration")
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image
  - type: cards
    name: Animals
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type.contains("animal")
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image
  - type: cards
    name: Constructs
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type.contains("construct")
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image
  - type: cards
    name: Dragons
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type.contains("dragon")
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image
  - type: cards
    name: Fey
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type.contains("fey")
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image
  - type: cards
    name: Humanoids
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type == "humanoid"
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image
  - type: cards
    name: Magical Beasts
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type.contains("Magical Beast")
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image
  - type: cards
    name: Monstrous Humanoids
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type.contains("monstrous humanoid")
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image
  - type: cards
    name: Oozes
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type.contains("ooze")
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image
  - type: cards
    name: Outsiders
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type.contains("outsider")
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image
  - type: cards
    name: Plants
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type.contains("plant")
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image
  - type: cards
    name: Undead
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type.contains("undead")
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image
  - type: cards
    name: Vermin
    filters:
      and:
        - file.folder == "Starfinder-SRD/Compendium/Bestiary/Alien-Codex"
        - '!file.name.contains("alien")'
        - type.contains("vermin")
    order:
      - file.name
      - cr
      - type
      - subtype
      - size
      - alignment
    image: note.image

```

