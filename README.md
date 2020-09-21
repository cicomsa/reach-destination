# Reach destination

Given an initial position and a set of instruction, have two rovers reach a destination on a grid shape plateau.

## Input data:

A string in the following format:
```D D
   D D L
   LLLLLLL
   D D L
   LLLLL
```
    

Line one: the size of the grid represented by two digits separated by space. The two digits are the equivalant of x and y on a xy grid.

Line two: Rover 1 initial position on the grid represented by two digits and a capital letter separated by spaces. The two digits are the equivalant of x and y on a xy grid, and the letter the heading of the rover: N(north), W(west), E(east) or S(south).

Line three: Rover 1 instructions represented by a string of capital letters: 'M' (move forward in the direction of the last current heading), 'L (turn the rover 90 degrees to the left without moving a step forward)', 'R' (turn the rover 90 degrees to the right without moving a step forward).

Line four: Rover 2 initial position on the grid represented by two digits and a capital letter separated by spaces. The two digits are the equivalant of x and y on a xy grid, and the letter the heading of the rover: N(north), W(west), E(east) or S(south).

Line five: Rover 2 instructions represented by a string of capital letters: 'M' (move forward in the direction of the last current heading), 'L (turn the rover 90 degrees to the left without moving a step forward)', 'R' (turn the rover 90 degrees to the right without moving a step forward).


Each rover implements the instructions after another one has reached its destination.

## Output data:

A string made of both rovers reached destination which to include in the given format:
``` 
    X1 Y1 Head1
    X2 Y2 Head2
```
    
Return error messages if the data received is not valid or if, following the given instructions, any rover steps outside the plateau.
