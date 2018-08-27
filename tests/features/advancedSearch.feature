Feature: Advanced search 

Scenario: Check for advanced search
    Given I go to the SpringerLink home page
    And   I go to advanced search page "https://link.springer.com/advanced-search" 
    And   I give title of the resource as "Greening Citizenship" and author name as "Andy Scerri"
    And   I set year of publishing as in "2012"
    When  I click search button for advanced search
    Then  URL should be "https://link.springer.com/search?date-facet-mode=in&facet-start-year=2012&dc.creator=Andy+Scerri&showAll=true&dc.title=Greening+Citizenship#"
    Then  I expect the top most search result item has title "Greening Citizenship"
    And   This item is published in "2012" 
    And   This item is authored by "Andy Scerri"

