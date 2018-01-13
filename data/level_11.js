
//  Catch Flying Text program
//  Copyright (c) 2017 David A. Freitag 
//  http://software.dafreitag.com/
//
//  This program is free software: you can redistribute it and/or modify 
//  it under the terms of the GNU General Public License as published by 
//  the Free Software Foundation, either version 3 of the License, or 
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful, 
//  but WITHOUT ANY WARRANTY; without even the implied warranty of 
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
//  GNU General Public License for more details.
//
//  To receive a copy of the GNU General Public License, see
//  <https://www.gnu.org/licenses/>.

gV.levelTitle[gC.LEVEL_11] = "If Statements";
gV.levelArray11 = 
       ["if (x < MAX)#true#na" 
       ,"if (x <= MAX - 1)#true#na"    
       ,"if (rows <= maxNbrOfRows - 1)#true#na"    
       ,"if (rows < maxNbrOfRows)#true#na"    
       ,"if (cols < maxNbrOfCols)#true#na"    
       ,"if (cols <= maxNbrOfCols - 1)#true#na"    
       ,"if (playerIsAlive)#true#na"    
       ,"if (salariedEmployee)#true#na"    
       ,"if (dogIsLost)#true#na"    
       ,"if (nbrOrcs == 5)#true#na"    
       ,"if (counter < 100)#true#na"    
       ,"if (studentGrade < 60)#true#na"    
       ,'if (studentName == "Mary")#true#na'    
       ,'if (studentName == (sName))#true#na'    
       ,'if (studyHard)#true#na'    
       ,'if (goodGame)#true#na'    
       ,'if (nbrOfPeople == nbrOfdogs)#true#na'
       ,'if (nbrOfPeople > nbrOfCars)#true#na'
       ,'if (nbrOfPeople < 75)#true#na'
       ,'if (nbrOfPeople < 75)#true#na'
       ,'if (x > 10 || x < 0)#true#na'
       ,'if (x < 0 || x > 0)#true#na'
       
       ,"if (x greater than y)#false#'greater than' should be >"    
       ,"evaluate x: 0 or not#false#This is not code!"    
       ,"if ()#false#Missing condition to test"    
       ,"if (null)#false#What is being compared to null?"    
       ,"if (nbrOrcs = 5)#false#= should be = ="    
       ,"if (playerIsAlive == true)#false#Should be:   if(playerIsAlive)"
       ,'if (studentName == "Mary"#false#Missing )'    
       ,"if x = 5#false#Missing ( ) and = should be = ="    
       ,"if (employeeNbr is equal to 123)#false#'is equal to' should be = ="    
       ,"if Then#false#Missing condition"    
       ,'if (!studyHard))#false#Extra )'    
       ,'if (GoodGame)#false#not camelCase'    
       ,'if (4 = 4)#false#Never false'
       ,'if (x = 4)#false#Never false, = should be = ='
       ,'if (nbrEmployees = 99)#false#Never false, = should be = ='
       ,'if (nbrWizards = 0)#false#Never false, = should be = ='
       ,'if (nbrOfPeople = nbrOFdogs)#false#Not camelCase'
       ,'if (nbrOfPeople == nbrOFdogs)#false#Not camelCase'
       ,'if (nbrOFPeople < nbrOfPeople)#false#Not camelCase'
       ,'if (x > 10 && x < 0)#false#Never true'
       ,'if (x < 0 && x > 0)#false#Never true'
       ,'if (nbrOfPeople ~ 75)#false#Invalid operator'
        ];

gV.levelArray11 = shuffle(gV.levelArray11);