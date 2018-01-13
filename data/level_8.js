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

gV.levelTitle[gC.LEVEL_8] = "Function Headers";
gV.levelArray8 = 
        ["public static int calculateOutput()#true#na" 
       ,"public static boolean calcOutput(names)#true#na"    
       ,"public static int displayOutput(names, points)#true#na"    
       ,"public static int determineValues()#true#na"    
       ,"public static boolean validateInput()#true#na"    
       ,'public static String getString(String msg)#true#na'
       ,'public static double getDouble(String message)#true#na'
       ,'private static int calcAnswer(int myArray)#true#na'
       ,'private static int transformData(float data)#true#na'
       ,'private static boolean shootAlienShip()#true#na'
       ,'private static String getOutput()#true#na'
       ,'private static double determineOutput()#true#na'
       ,'private static int getInteger(String message)#true#na'
    
       ,"private static DisplayOutput()#false#Missing returnVariableType"
       ,"private static Void getOutput(names)#false#Void is not valid in a function header"
       ,"Module Xxx()#false#Not a function"
       ,"private static NBR_OF_ORCS = 3#false#Not a function header"
       ,'private static getInteger("enter data")#false#Missing returnVariableType'
       ,'private static void getInteger("enter data")#false#Missing returnVariableType'
       ,"test = x#false#This is an expression"    
       ,"66 = x + 1#false#This is an invalid expression"    
       ,"xPoint++#false#This is an expression"    
       ,"doomsdayCounter--#false#This is an expression"    
       ,"public static showOUTPUT#false#Missing returnVariableType and ( )"    
       ,"public static x = getOutput()#false#This is a combination of statements"    
       ,'public static getString("Name?")#false#Missing returnVariableType'
       ,'public static calculateAnswer()#false#Missing returnVariableType'
       ,'public static int CalculateAnswer#false#Missing ( )'
       ,'public static int determineAnswer(myArray))#false#Extra )'
       ,'public static void calcAnswer#false#Void is invalid and missing ( )'
       ,'public static int callCaptainKirk(SPOCK)#false#integer should be int or Integer'
       ,'private static Intt castSpell(mySpell)#false#Intt is not Java'
       ,'private static displayAwesomeGraphic()#false#Missing returnVariableType'
       ,'private static Integer OR String determineAnswer()#false#Cannot user OR like this'
       ,'return newValue#false#Not a function header'
       ,'private static Int captureTiger(HOBBS)#false#Int should be int'
       ,'Module int displayOutput()#false#Module should be Function'
       ,'private static int calcAnswer(int myArray);#false#Extra semicolon'
       ,'private static int transformData(int data);#false#Extra semicolon'
       ,'private static boolean shootAlienShip();#false#Extra semicolon'
        ];

gV.levelArray8 = shuffle(gV.levelArray8);