
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

gV.levelTitle[gC.LEVEL_12] = "Loops";
gV.levelArray12 = 
       ["Do#true#na" 
       ,"while (wantsToContinue)#true#na"           
       ,"while (counter < 10)#true#na"    
       ,"while (counter > 0)#true#na"    
       ,"while (!playerDead)#true#na"    
       ,"while (!salariedEmployee)#true#na"    
       ,"while (salariedEmployee)#true#na"    
       ,"while ((x > 0) AND (x < 100))#true#na"    
       ,"while (wizards == 0)#true#na"    
       ,"while (employees > 99)#true#na"    
       ,"while (dogs != 0)#true#na"    
       ,"while (dogs == 0)#true#na"    
       ,"while (coins == 0)#true#na"    
       ,"while (coins > 10000)#true#na"    
       ,"while (bitCoins > 1)#true#na"    
       ,'while (getYorN("Again?"))#true#na'
       ,"while (x != 0)#true#na"    
       ,"while (x == 0)#true#na"    
       ,"while (studyTime > minRequired)#true#na"    
       ,"while (class == FUN)#true#na"    
       ,"while (thisClassIsFun)#true#na"    

       ,"while (147)#false#147 is not a condition to be tested"    
       ,"while (true || false)#false#while WHAT is true or false?"
       ,"while (true)#false#Don't do this. Change your design."
       ,"while (true and maybe false)#false#maybe is not code"
       ,"while (could be true)#false#could be is not code"
       ,"while ((x > 0) & (x < 100)#false#Missing )"    
       ,"while (coins = 0)#false#= should be = ="
       ,"while (playerIsAlive = true)#false#Booleans are not compared to T or F"
       ,"while (coins are true)#false#The word 'are' is not code"
       ,"while#false#Where is the condition?"
       ,"while#false#Where is the condition?"
       ,'while (getYorN("Again?"#false#Missing )'
       ,'while (this is a great class)#false#This is not code'
       ,"while (true)#false#Possible infinite loop. Don't code like this"
       ,"while (false)#false#Only executes once. Don't code like this"
       ,"while (readinGTexTBooK)#false#The variable is not camelCase"
       ,"while (Studying())#false#The function is not camelCase"
       ,"while (dogs = 0)#false#= should be = ="    
       ,"while (0 != 0)#false#Never true"    
       ,"while (goldCoins > )#false#Missing condition"   
       ,"While (dogs != 0)#false#While should be while"
       ,"While (dogs == 0)#false#While should be while"
       ,"While (coins == 0)#false#While should be while"
        ];

gV.levelArray12 = shuffle(gV.levelArray12);