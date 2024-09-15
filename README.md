# Final Space Character Database API Project

## Introduction
Welcome to my Final Space Character Database. This website uses the following api 'https://finalspaceapi.com/api/v0/character' to render information cards for each character. The website contains three pages, the welcome page, character page and character info page. The character page contains five filters, allowing you to filter by Character name, gender, species, status and origin. All of the filters work together with certain filters disappearing if no cards are available containing that specific filter. If a name that does not exist is seached for, a red error message will appear in the card section. Filters can be reset by clicking the 'All button. Cards have been decorated with a box shdaow colour to identify if they are 'Alive', 'Deacesed' or 'Unknown'. Clicking onto a character card will take you to an information page for that specific character.

## Project Plan

### 1. Create header
- HTML
  - Create div.
  - Add h1 element.
  - add classes to elements.

- CSS/SCSS
  - Center h1 element.
  - Add basic styling to header.
  - Add background image that fills entire div section.

### 2. Create Navbar
- HTML
  1. Nav components
    - Create button component for basic nav filter buttons.
    - Add classes to button.
  2. Nav container
    - Create container for nav button components.
    - Add classes to container.

- CSS/SCSS
  - Style container to the left of the page in a column.
  - Style buttons so they stack 

### 3. Create main section

#### 1. Create Card component
 - HTML
   - Create div for card 
    - add h3 element for character name
    - add img element for character image
    - add p tags for gendger, status, origin and species.

  - CSS/SCSSS
    -style card with image at the top.
    - Text should be styled in a column
    - Box shadow to display character status.
  
#### 2. Create Card Section Container
- HTML/TS
  - Map through card container using info from API.
  
- CSS/SCSS 
  - Create flex container
  - Flex Wrap 
  - Add slight gap to separate cards
  - Justify content: space-evenly

### 4. Add Filters
 - Create button filters for gender, species, origin and status.
 - Create input filter for character name.
 - Filters should work together so useState is updated each time a filter is applied 
 - Create button to reset all filters.


  


