Feature: Page load and basic search functionality

Scenario: Check Springer-home page title
  Given I go to the SpringerLink home page
  Then  I expect the title of the page "Home - Springer"

Scenario Outline: Basic search
  Given I type a search string "<search-string>" in the search box
  When  I click search icon
  Then  I expect the top most search result item has title "<result-string>"
  Examples:
    | search-string | result-string |
    | Blind Identification of Output-Only Systems and Structural Damage via Sparse Representations | Blind Identification of Output-Only Systems and Structural Damage via Sparse Representations |
    | Affective Learning — A Manifesto | Affective Learning — A Manifesto |
    | Seismic Tomography of Volcanoes | Seismic Tomography of Volcanoes |
    | Software Quality and Software Testing in Internet Times | Software Quality and Software Testing in Internet Times |
