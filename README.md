# FrissKert
Projektünk célja, hogy hozzá segítsük az embereket a friss zöldség és gyümölcs vásárlásához direkt a kis termelők kertjéből, ugyanakkor ezzel segítsük a termelők terményeinek eladásait is a modern eszközök használatával. A termelő megoszthatja a terményeit az applikációban/ weboldalon, amelyeket a többi felhasználó megnézheti és láthatja, hogy hol helyezkedik el az a termék, és felveheti a kapcsolatot a termék termelőjével email illetve a megadott telefonszámon keresztül.

A projekt tervezésekor a következő célok kerültek megfogalmazásra:

1.megkönnyíti a vásárlók mindennapi vásárlásait
2.segít a friss és házi termékek (zöldségek illetve gyümölcsök) egyszerűbb elérését 
3.gyorsabb és hatékonyabb vásárlás
4.egyszerű interakció a felhasználó és az adott használati felület között

A weboldal funkciói a következők:

1.	Regisztráció: Az alkalmazás használata kizárólag regisztrált felhasználók számára engedélyezett. Az alkalmazás megnyitása után a Regisztráció gombon keresztül érjük el, azt hogy tudjunk regisztrálni. Regisztrációhoz a felhasználónak névre, telefonszámra, lakcímre, email címre és jelszóra van szüksége.
2.	Bejelentkezés: Ha már regisztrált a felhasználó, utána a bejelentkezésnél már csak email cimre és a jelszóra lesz szüksége a bejelentkezéshez.
3.	Elemek böngészése: Bejelentkezés után a FrissKert felületén már lehet az eladók és a terményeik között keresgélni.
4.	Új elemek feltöltése: Új zöldségeket illetve gyümölcsöket lehet feltölteni a weboldalra.
5.	Kapcsolatfelvétel emailen: Email cim által kommunikálhatnak az eladó és a vásárló egymás között.

A weboldal elindításához szükségesek a következő követelmények biztosítása:

1.Asztali gép vagy laptop
2.Internet kapcsolat
3.Böngésző: Chrome 120.0.6099.131+, Safari 17.0+ (a popup ablakok hátterének blur-je nem jelenik meg)
4.Windows 10 pro+ vagy macOS 14.0+ operációs rendszer
5.Windows: XAMPP 8.2.12, macOS: XAMPP 8.2.4
6.Tárhely: kb. 200 MB

A weboldal elindításához szükséges előkészületek:

1.Instalálni a Chrome böngészőt az alábbi link segítségével
  -> https://support.google.com/chrome/answer/95346?hl=en&co=GENIE.Platform%3DDesktop
2.Instalálni XAMPP Web Servert az alábbi link segítségével
  -> https://www.apachefriends.org/download.html
  !Figyelni a verizóra: Windows: XAMPP 8.2.12, macOS: XAMPP 8.2.4
3.Letölteni a projekt FrissKert_Weblap.zip file-t az alábbi link segítségével
  -> https://github.com/gyrobert/FrissKert
  
A weboldal elindítása:

1. Megnyítjuk az XAMPP Web Server applikácíot
   a) Windows: XAMPP Control Panel, a Windows keresőbe megtaláljuk
   b) MacOS: manager-osx, ami az Applications mappába található
2. Elindítani az Apache Web Servert
   a)Windows: Config fülnél, majd az Apache szervernél megnyomjuk a start gombot
   b)MacOS: Manage Servers fülnél, majd az Apache szervernél megnyomjuk a start gombot
3. Megkeressük hova telepítettük az XAMPP-ot és megnyítjuk annak a mappáját
4. Megnyitjuk a htdocs mappát
5. A letöltött projekt file-t kicsomagoljuk
6. A file tartalmát átmásoljuk a htdocs mappába
7. Elindítani a Chrome böngészőt
8. Az URL címhez beírjuk localhost/login2.html-t és elindítjuk
9. Betölt a weboldal és használhatjuk is
   

