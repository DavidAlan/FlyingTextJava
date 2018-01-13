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

gV.levelTitle[gC.LEVEL_4] = "Expressions";
gV.levelArray4 = 
       ["x = 5;#true#na" 
       ,"employee = number;#true#na"    
       ,"employeeToProcess = employeeNumber;#true#na"    
       ,"NBR_OF_ORCS = 42;#true#na"    
       ,"NBR_OF_AWARDS = 99;#true#na"    
       ,"NBR_OF_USERS = numberOfUsers;#true#na"    
       ,"numberOfUsers = numberOfUsersFound;#true#na"      
       ,"x++;#true#na"    
       ,"counter++;#true#na"    
       ,"countDownCounter--;#true#na"    
       ,"y = (3 + x);#true#na"    
       ,"y = (x + 3.14);#true#na"    
       ,"house = walls + roof;#true#na"    
       ,"newSalary = currentSalary * percentRaise;#true#na"           
       ,"MAX_ROWS = 12;#true#na"    
       ,"x = x + 1;#true#na"    

       ,"maxRows is null;#false#'is' is not valid code"    
       ,"employee == number;#false#= = should be ="
       ,"employee === number;#false#= = = should be ="
       ,"numberOfUsers = NumberOfUsersFound;#false#Not camelCase"    
       ,"NBR_OF_EMPLOYEES == 42;#false#= = should be =" 
       ,"4 = x;#false#Cannot assign a value to a number"
       ,"4 = x + 1;#false#Cannot assign a value to a number"
       ,"y = 3 + x);#false#Missing ("
       ,"y = (3 + x));#false#Extra )"
       ,"area = (width + length + height;#false#Missing )"
       ,"newSalary = currentSalary * percentRaise plus 2;#false#plus should be +"
       ,"name equals lowercase(name);#false#equals should be ="
       ,"x == x + 1;#false#== should be ="
       ,"USERS = 4 or 12;#false#Invalid use of 'or'"
       ,"userHealth = userHealth / 0;#false#Cannot divide by 0"
       ,"TRUE;#false#Not a full expression" 
       ,"EMPLOYEE_GENDER;#false#Missing ="
       ,"!$%#^@(*%&$!;#false#What do you think this IS?"
       ,"x++#false#Missing semi-colon (;)"
       ,"y = x + 4#false#Missing semi-colon (;)"
       ,"y = (3+ x)#false#Missing semi-colon (;)"
       ,"MAX_ROWS= 12#false#Missing semi-colon (;)"
       ,"NBR_OF_ORCS = numberOfUsers#false#Missing semi-colon (;)"
        ];

gV.levelArray4 = shuffle(gV.levelArray4);