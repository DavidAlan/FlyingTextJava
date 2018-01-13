
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

gV.levelTitle[gC.LEVEL_9] = "Modules and Functions";
gV.levelArray9 = 
       ["x = calculateOutput( );#true#na" 
       ,"newValue = calcOutput(names);#true#na"    
       ,"displayOutput(names, points);#true#na"    
       ,"playerAlive = doBattle( );#true#na"    
       ,"playerAlive = calcHealthValue(FALSE);#true#na"    
       ,"x = getOutput( );#true#na"    
       ,'newValue = getString("Name?");#true#na'
       ,'newValue = getReal("Number?");#true#na'
       ,'newArray = determineAnswer(myArray);#true#na'
       ,'callMade = callCaptainKirk(SPOCK, dangerValue);#true#na'
       ,'succssful = castSpell(mySpell);#true#na'
       ,'done = displayAwesomeGraphic();#true#na'
       ,'newForm = transformData(data);#true#na'
       ,'newZooAnimal = captureTiger(HOBBS);#true#na'
       ,'Function int getInteger(String message);#true#na'
       ,'Function String getString(String message);#true#na'
       ,'displaySponge(BOB);#true#na'
       ,'getGoodGrades(study);#true#na'
       ,'learnCoding(readTheTextbook);#true#na'
       ,'writeNewSong(taylorSwift);#true#na'
       
       ,"displayOutput(names);#true#na"    
       ,"displayOutput(names, points);#true#na"    
       ,"showOutput();#true#na"    
       ,"showOutput(TRUE);#true#na"    
       ,'showString("Name?");#true#na'
       ,'calculateAnswer();#true#na'
       ,'determineAnswer(myArray);#true#na'
       ,'callCaptainKirk(SPOCK, dangerValue);#true#na'
       ,'castSpell(mySpell);#true#na'
       ,'displayAwesomeGraphic( );#true#na'
       ,'transformData(data);#true#na'
       ,'captureTiger(HOBBS);#true#na'
       
       ,"public static int calculateOutput( )#true#na" 
       ,"public static boolean calcOutput(String names)#true#na"    
       ,"public static int displayOutput(String names, int points)#true#na"    
       ,"public static int determineValues( )#true#na"    
       ,"public static boolean validateInput()#true#na"    
       ,'public static String getString(String msg)#true#na'
       ,'public static int getInt(String message)#true#na'
       ,'private static int calcAnswer(int myArray)#true#na'
       ,'private static int transformData(int data)#true#na'
       ,'private static boolean shootAlienShip( )#true#na'
       ,'private static String getOutput( )#true#na'
       ,'private static int determineOutput()#true#na'
       ,'private static int getInteger(String message)#true#na'
    
       ,"public static void displayOutput( )#true#na" 
       ,"public static void displayOutput(String names)#true#na"    
       ,"public static void showOutput( )#true#na"    
       ,"public static void showOutput(boolean isDead)#true#na"    
       ,'public static void showString(String x)#true#na'
       ,'public static void calculateAnswer( )#true#na'
       ,'public static void determineAnswer(int myArray)#true#na'
       ,'public static void callCaptainKirk(boolean SPOCK)#true#na'
       ,'public static void castSpell(String mySpell)#true#na'
       ,'public static void displayAwesomeGraphic( )#true#na'
       ,'public static void transformData(int data)#true#na'
       ,'public static void captureTiger(String HOBBS)#true#na'
       ,'public static void displayOutput( )#true#na'
       ,'public static void showOutput( )#true#na'
       ,'public static void getGoodGrades(int studyMore)#true#na'
       ,'public static void earnA(int doHomework)#true#na'       
       ,'public static void getGoodJob(String learnLots)#true#na'       
       ,'public static void study(int EXAMPLES)#true#na' 
        
       ,"public static void displayOutput(message)#false#Missing varType for parameter" 
       ,"newValue == calcOutput();#false#== should be ="    
       ,"DisplayOutput(names);#false#Not camelCase, Missing varType for parameter"    
       ,"Xxx();#false#Not camelCase"
       ,"NBR_OF_ORCS = 321;#false#Not camelCase"
       ,"nbrEmps = Y;#false#This is an expression"
       ,"5 = w + 1;#false#This is an expression"  
       ,"x++;#false#This is an expression"
       ,"doomsdayCounter--;#false#This is an expression"
       ,"calculateOUTPUT;#false#Not camelCase and missing ( )"
       ,"playerAlive = calcHealthValue;#false#Missing ( )"
       ,'showString("Name?"));#false#Extra ), Missing varType for parameter'
       ,'calculateAnswer( ) - x;#false#This is an expression'
       ,'answer = calculateAnswer;#false#Missing ( )'
       ,'newArray == determineAnswer(myArray);#false#== should be =, Missing varType for parameter'
       ,'x = calcAnswer until done;#false#This is an invalid expression'
       ,'2x = doubleValue(originalValue);#false#This is an invalid expression'
       ,'return newValue;#false#This is a return statement'
       ,'NEWzooAnimal = captureTiger(HOBBS);#false#Not camelCase'
       ,'public static void void shootAlienShip( )#false#void void is invalid in a header'
       ,'public static void null displayOutput( )#false#null is invalid in a function header'
       ,'public static nothing showOutput( )#false#nothing is invalid in a function header'
       ,'public static String getString( )#false#String is invalid in a module header'
       ,'private static boolean getYorN( )#false#boolean is invalid in a module header'
       ,'Function getString( )#false#Missing returnVariableType'
       ,'private static void getGoodGrades(studyMore)#false#Missing varType for parameter'
       ,'private static void earnA(doHomework)#false#Missing varType for parameter'
       ,'private static void getGoodJob(learnLots)#false#Missing varType for parameter'
       ,'private static void earnA(doHomework)#false#Missing varType for parameter'  
       ,'showOutput(TRUE)#false#Missing semicolon'    
       ,'showString("Name?")#false#Missing semicolon'    
       ,'calculateAnswer()#false#Missing semicolon'    
       ,'Public Static String getString(String msg)#false#Public Static should be public static'
       ,'Public Static int getInt(String message)#false#Public Static should be public static'
        ];

gV.levelArray9 = shuffle(gV.levelArray9);
gV.levelArray9 = shuffle(gV.levelArray9);