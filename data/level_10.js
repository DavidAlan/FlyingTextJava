
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

gV.levelTitle[gC.LEVEL_10] = "Booleans";
gV.levelArray10 = 
        ["true#true#na" 
       ,"!(false)#true#na"    
       ,"true || true#true#na"    
       ,"true || false#true#na"    
       ,"false || true#true#na"    
       ,"true & true#true#na"
       ,"false || !false#true#na"    
       ,"!(true) || true#true#na"    
       ,"!(false && false)#true#na"    
       ,"true || (false || false)#true#na"    
       ,"(false || false) || true#true#na"    
       ,"false || false || false || true#true#na"    
       ,"!(false || false)#true#na"    
       ,"!(false) || !(true)#true#na"
       ,"true || !(true)#true#na"
       ,"true && (TRUE || !(true))#true#na"
    
       ,"false#false#false is not true"    
       ,"false && false#false#Neither is true"    
       ,"false || false#false#Neither is true"    
       ,"!(true) && true#false#Not true is false"    
       ,"false || (NOT TRUE || NOT true)#false#Nothing is true"
       ,"!(false && false) && false#false#And false is false"    
       ,"!(true)#false#NOT true is false, right?"    
       ,"false && false#false#false all around"
       ,"true && (false || false)#false#true && (false) is false"    
       ,"true & (false && false)#false#true && (false) is false"    
       ,"TOTALLY_true#false#Totally is not pseudocode"    
       ,"true && true && true && false#false#&& false makes it false"    
       ,"!(false) && !(true)#false#&& NOT true makes it false"    
       ,"true & !(true)#false#&& NOT true makes it false"    
       ,"MAYBE#false#Really?"    
       ,"COULD_BE#false#Did you even read the chapter?"    
       ,"CLICK_ME!#false#Made you click!"    
        ];

gV.levelArray10 = shuffle(gV.levelArray10);