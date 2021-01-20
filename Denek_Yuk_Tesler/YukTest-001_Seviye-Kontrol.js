var xp = 0;
var nick = console.assert();
var level = console.assert();
var _ = " ";
var _1="'";

function kontrol() {
    return true;
}

function odultp(tp = 250) {
    xp += tp;
}

function lvl(ytr = 20) {
    var lvl;
    level = lvl;
    if (lvl < ytr) {
        console.log(_1,nick,_1,_,"üzgünüm ama yeterli seviyede olmadığından \n bu organizasyon ile iş birliğinde bulunamayacaksın");
    }
    else if (lvl == ytr || lvl >= ytr) {
        console.log(_1,nick,_1,_,"Bölgeye hoş geldin \n git ve hancıdan görev listeni al");
    }
}

function list(sec = 4) {
    sec = console.assert();
    var missn = ["1-Akseki Bölgesi","2-Michigan Köyü","3-Argaxtrya çölü","4-Vazgeç"];
    
    console.log("  Görev Listesi \n ¦®®®®®®®®®®®®®®¦");
    for (const deger of missn) {
        console.log(deger);
    }
}

kontrol(odultp(100));
kontrol(lvl(19));
kontrol(list());

//BİTMEDİ BİTMEDİ DAHA BİTMEDİ TANSİYONUM DÜŞTÜĞÜNDEN UYUYORUM ARTIK 