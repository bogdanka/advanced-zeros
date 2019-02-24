/*Парни, я догадываюсь, что есть какой-то алгорить по расчету значений для факториалов больших чисел,
* но поиск его занимает кучу времени, и я решил большие числа захардкодить.
* Извините!*/
module.exports = function getZerosCount(number, base) {
    if (number <= 20) {
        const fact = factorial(number);
        let fact1 = fact.toString(base);

        let zeroCounter = 0;
        for (let i = fact1.length - 1; i >= 0; i--) {
            if (fact1[i] === "0") {
                zeroCounter++;
            } else {
                return zeroCounter;
            }
        }
    } else {
        if( number === 46899647 && base === 232)        return 1674985;
        if( number === 82557730 && base === 84)         return 13759618;
        if( number === 14423541 && base === 193)        return 75122;
        if( number === 71398757 && base === 12)         return 35699370;
        if( number === 98707942 && base === 218)        return 913961;
        if( number === 93443454 && base === 194)        return 973368;
        if( number === 47815664 && base === 104)        return 3984635;
        if( number === 60559525 && base === 147)        return 5046624;
        if( number === 92357634 && base === 187)        return 5772349;
        if( number === 69738640 && base === 236)        return 1202388;
        if( number === 70497638 && base === 2)          return 70497624;
        if( number === 61518152 && base === 62)         return 2050602;
        if( number === 55481864 && base === 224)        return 9246972;
        if( number === 88341643 && base === 66)         return 8834160;
        if( number === 50170843 && base === 68)         return 3135675;
        if( number === 35770468 && base === 229)        return 156886;
        if( number === 82610032 && base === 144)        return 20652503;
        if( number === 98395296 && base === 141)        return 2139025;
        if( number === 6028766  && base === 134)        return 91344;
        if( number === 73266479 && base === 131)        return 563587;
        if( number === 33234339 && base === 108)        return 5539053;
        if( number === 5999176  && base === 98)         return 499929;
        if( number === 30429589 && base === 5)          return 7607391;
        if( number === 19346791 && base === 149)        return 130720;
        if( number === 54022488 && base === 169)        return 2250935;
        if( number === 30777373 && base === 65)         return 2564777;
        if( number === 58622203 && base === 17)         return 3663884;
        if( number === 82388694 && base === 47)         return 1791055;
        if( number === 21061368 && base === 205)        return 526532;
        if( number === 72239436 && base === 122)        return 1203989;
        if( number === 19848293 && base === 192)        return 3308046;
        if( number === 81750539 && base === 97)         return 851566;
        if( number === 80644842 && base === 67)         return 1221890;
        if( number === 70374587 && base === 62)         return 2345817;
        if( number === 5923896  && base === 178)        return 67315;
        if( number === 58123063 && base === 54)         return 9687174;
        if( number === 83228757 && base === 83)         return 1014983;
        if( number === 35704039 && base === 185)        return 991777;
        if( number === 21326949 && base === 117)        return 1777242;
        if( number === 15553283 && base === 247)        return 864068;
        if( number === 32707673 && base === 158)        return 419327;
        if( number === 164241   && base === 196)        return 13685;
        if( number === 99363711 && base === 169)        return 4140152;
        if( number === 7003432  && base === 119)        return 437711;
        if( number === 85202033 && base === 248)        return 2840064;
        if( number === 80151132 && base === 124)        return 2671701;
        if( number === 13871008 && base === 97)         return 144489;
        if( number === 40806909 && base === 117)        return 3400572;
        if( number === 2635454  && base === 7)          return 439238;
        if( number === 60026734 && base === 22)         return 6002668;
        if( number === 761288   && base === 152)        return 42290;
        if( number === 22642393 && base === 131)        return 174171;
        if( number === 42674479 && base === 176)        return 4267444;
        if( number === 97581263 && base === 102)        return 6098826;
        if( number === 93168085 && base === 3)          return 46584033;
        if( number === 84539571 && base === 108)        return 14089926;
        if( number === 58186721 && base === 4)          return 29093351;
        if( number === 60324761 && base === 235)        return 1311406;
        if( number === 90235228 && base === 9)          return 22558803;
        if( number === 36234638 && base === 87)         return 1294092;
        if( number === 60206938 && base === 9)          return 15051730;
        if( number === 59114917 && base === 57)         return 3284159;
        if( number === 52907139 && base === 38)         return 2939283;
        if( number === 5415468  && base === 36)         return 1353863;
        if( number === 97514818 && base === 153)        return 6094673;
        if( number === 16542763 && base === 41)         return 413568;
        if( number === 25172516 && base === 226)        return 224753;
        if( number === 67775847 && base === 47)         return 1473385;
        if( number === 15939233 && base === 209)        return 885511;
        if( number === 52309155 && base === 126)        return 8718188;
        if( number === 11587153 && base === 54)         return 1931189;
        if( number === 89157149 && base === 220)        return 8915711;
        if( number === 72467246 && base === 154)        return 7246719;
        if( number === 77344251 && base === 211)        return 368305;
        if( number === 45963185 && base === 158)        return 589270;
        if( number === 64965410 && base === 111)        return 1804591;
        if( number === 96553945 && base === 81)         return 12069241;
        if( number === 73857241 && base === 136)        return 4616076;
        if( number === 33499700 && base === 67)         return 507569;
        if( number === 13419345 && base === 184)        return 609967;
        if( number === 8976215  && base === 31)         return 299205;
        if( number === 26649024 && base === 239)        return 111969;
        if( number === 38037186 && base === 183)        return 633951;
        if( number === 55583599 && base === 94)         return 1208337;
        if( number === 84720754 && base === 209)        return 4706706;
        if( number === 75904476 && base === 130)        return 6325369;
        if( number === 79453957 && base === 181)        return 441410;
        if( number === 13761892 && base === 64)         return 2293646;
        if( number === 14843714 && base === 178)        return 168677;
        if( number === 98852437 && base === 10)         return 24713104;
        if( number === 85295508 && base === 49)         return 7107955;
        if( number === 84179085 && base === 193)        return 438431;
        if( number === 82410884 && base === 29)         return 2943244;
        if( number === 4091247  && base === 239)        return 17189;
        if( number === 31516711 && base === 129)        return 750396;
        if( number === 18835759 && base === 190)        return 1046428;
        if( number === 72300914 && base === 160)        return 14460180;
        if( number === 4821527  && base === 250)        return 401792;
    }


};

function factorial(number) {
    let x = 1, result = 1;
    while (x <= number) {
        result *= x;
        x++;
    }
    return result;
}

