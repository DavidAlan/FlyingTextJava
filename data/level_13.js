
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

gV.levelTitle[gC.LEVEL_13] = "Arrays";
gV.levelArray13 = 
       ["int myArray[SIZE];#true#na" 
       ,"String aNumber[100];#true#na" 
       ,"String employees[MAX_EMPS];#true#na" 
       ,"String employees[1];#true#na" 
       ,"employees[1] = 45;#true#na" 
       ,"employees[10] = 22;#true#na" 
       ,"employees[A] = 99;#true#na" 
       ,"employees[MIN][MAX] = 99;#true#na" 
       ,"spongeBob[0] = 0;#true#na" 
       ,"rockStars[140] = 7;#true#na" 
       ,"sales[7536] = 99;#true#na" 
       ,'starshipNames[10] = "Enterprise";#true#na' 
       ,"String ORCS_NAMES[3];#true#na" 
       ,"String EMP_NAMES[69];#true#na" 
       ,"boolean janitors[30];#true#na" 
       ,"uName[0] = YEAR;#true#na" 
       ,"isAlive[10] = True;#true#na" 
       ,"theBeatles[10] = True;#true#na" 
       ,"empName[2][4] = iName;#true#na" 
       ,"boolean empName[2][4][1][5];#true#na" 
       ,"empName[0][0] = 0;#true#na" 
    
       ,"uName[Aaa] = YEAR;#false#Variable not camelCase" 
       ,"empName[ ][ ] = iName;#false#Missing Subscripts" 
       ,"Sales[7536] = 99;#false#Not camelCase" 
       ,"employeeS[10] = 22;#false#Not camelCase" 
       ,"isAlive[-1] = True;#false#Cannot have a negative subscript" 
       ,"Int myArray[ ];#false#Int is not java. Should be int"  
       ,"String [SIZE];#false#Missing variable name" 
       ,"String employees;#false#Missing [ ]" 
       ,"int orcs{1};#false#{ } should be [ ]" 
       ,"String orcs[ ];#false#Missing size value in [ ]" 
       ,"String DOGS[private];#false#private is a reserved word" 
       ,"boolean employees{100};#false#{ } should be [ ]" 
       ,"employees[ ] = 45;#false#Missing size value in [ ]" 
       ,"employees[1] == 45;#false#== should be =" 
       ,"employees[0] = Zero;#false#Zero is not camelCase" 
       ,"wizardNames[10] =;#false#Missing value after =" 
       ,'theBeatles[1] == "Fab 4";#false#== should be =' 
       ,'SchoolNames[5] = "PimaCC";#false#Variable not camelCase' 
       ,"int employeeName[ ][ ] = iName;#false#Missing values in [ ]" 
       ,"boolean employeeName[2][4][1][5] = 4;#false#4 is not a boolean" 
       ,"int empName[0][0] == true;#false#True is not an Integer" 
       ,"CLICK_ME_AND_WIN_PRIZES!;#false#You haven't been around much have you?"    
        ];

gV.levelArray13 = shuffle(gV.levelArray13);