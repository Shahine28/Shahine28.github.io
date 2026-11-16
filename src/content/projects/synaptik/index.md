---
title: "Synaptik"
tagline: "Puzzle Game, ALT CTRL, GDC26"
year: 2025
duration: "1 Month"
tech: "Unity / C#"
roles: "Gameplay / UI"
teamSize: "Team of 8"
cover: ./cover.png
order: 120
# YouTube video id (the part after watch?v=). Empty = no trailer shown.
youtube: "Gcc4yLWwEOQ"
availableOn:
  - platform: itch
    url: "https://zolaely.itch.io/synaptik"
pitch: |
  Synaptik is a puzzle game in which the player takes on the role of a behaviorist controlling the brain of an alien named ZipZoup. Using a machine and an alternative controller, the goal is to activate specific areas of his brain to manipulate his emotions (Friendly, Aggressive, Fearful, Curious) and actions. The objective is to complete specific missions and trigger...
screenshots: []
features: []
---

## Context

I had the opportunity to go to San Francisco to present this alternative controller project at the GDC (Game Developers Conference). Faced with a rapidly evolving game design and tight deadlines, I made the decision to completely rethink the game's technical architecture mid-development to make it more robust.

## Team

- 3 Game Programmers
- 2 Game Designers
- 2 Game Artists
- 1 Producer

## Tasks

- Architecture & Core Programming (Unity / C#): Complete rework of the architecture with a highly modular approach (SOLID principles, DRY, extensive use of interfaces). I programmed almost the entire game (systems, AI, gameplay).
- Data-Driven Systems & Events: Development of a Mission System driven by ScriptableObjects, managed via a QuestManager and coupled with a global Event Bus. Creation of the SuspicionManager (Game Over logic).
- Custom Inputs & Alt Controller: Implementation of a custom input system (New Input System) converting the controller's physical signals into emotional states and in-game interactions.
- Gameplay Mechanics & Game Feel: Complete refactoring of the interaction system (Hit/Throw System, Give Interactions) and integration of Juice and player animations.
- UI Programming: Redesign (Refact) of the UI architecture (Layouts, Quest UI, Main Menu).
- Pipeline & Cross-Discipline: Development of temporary "Plug & Play" mock-up systems to streamline production and prevent bottlenecks for the Art and Design teams.
