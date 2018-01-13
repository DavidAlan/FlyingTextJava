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

gV.levelTitle[gC.LEVEL_6] = "Module Headers";
gV.levelArray6 = 
       ["private static void displayOutput()#true#na" 
       ,"public static void displayOutput(String names)#true#na"    
       ,"private static void displayOutput(String names, int points)#true#na"    
       ,"private static void showOutput()#true#na"    
       ,"public static void showOutput(boolean isAlive)#true#na"    
       ,'private static void showString(String x)#true#na'
       ,'private static void calculateAnswer()#true#na'
       ,'public static void determineAnswer(String myArray)#true#na'
       ,'public static void callCaptainKirk(String SPOCK)#true#na'
       ,'private static void castSpell(int mySpell)#true#na'
       ,'private static void displayAwesomeGraphic()#true#na'
       ,'public static void transformData(int data)#true#na'
       ,'private static void captureTiger(String HOBBS)#true#na'
       ,'public static void displayOutput()#true#na'
       ,'private static void showOutput()#true#na'
       ,'public static void getGoodGrades(int studyMore)#true#na'
       ,'private static void earnA(int doHomework)#true#na'       
       ,'public static void getGoodJob(String learnLots)#true#na'       
       ,'private void study(double EXAMPLES)#true#na'       
    
       ,"private static void DisplayOutput()#false#Not camelCase"
       ,"public static void DisplayOutput(names)#false#Not camelCase, no varType in parameter"
       ,"private static void Xxx()#false#Not camelCase"    
       ,"public static void NBR_OF_ORCS = 3;#false#Not camelCase and its a mess"    
       ,'FUNCTION getInteger("enter data")#false#Invalid function header'    
       ,"FUNCTION void getInteger('enter data')#false#Invalid function header"
       ,"x = 4;#false#This is an expression"
       ,"4 = x + 1;#false#This is an expression"    
       ,"x++;#false#This is an expression"
       ,"countDownCounter--;#false#This is an expression"    
       ,"showOUTPUT;#false#Missing ( ) and name not camelCase"    
       ,"private static void x = getOutput()#false#This is a mess"    
       ,'private static void String getString("Name?")#false#Not a module header'
       ,'public static void int getInteger("Number?")#false#Not a module header'
       ,'public static void calculateAnswer#false#Missing ( )'
       ,'private static void determineAnswer(myArray))#false#Extra ), no varType in parameter'
       ,'private void void calcAnswer#false#void void is invalid in a module header'
       ,'public static void determineAnswer#false#Missing ( )'
       ,'return newValue;#false#This is a return statement'
       ,'MODULE shootAlienShip()#false#MODULE is not Java syntax'
       ,'private static int displayOutput()#false#Not a module header'
       ,'Function int getInteger(String message)#false#Not a module header'
       ,'public static void getGoodGrades(studyMore)#false#Missing varType in parameter'
       ,'private static void earnA(doHomework)#false#Missing varType in parameter'
       ,'private static void getGoodJob(learnLots)#false#Missing varType in parameter'
        ];
		
gV.levelArray6 = shuffle(gV.levelArray6);