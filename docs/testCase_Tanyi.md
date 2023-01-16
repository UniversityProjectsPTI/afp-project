# Test Report
#### Tanyi Győző

Teszt sorszám | Funkció | Eredmény | Státusz | Megjegyzés | Tesztelő személy | Dátum
--- | --- | --- | --- | --- | --- | --- 
1 |  Szerver indítás (npm start) | sikeresen lefut, a http://localhost:3000 URL automatikusan megnyílik a böngészőben. | sikeres | - | Tanyi Győző | 2023.01.14.
2 | Gombok animációja.| Az animálása működik a "tovább" és "A kvízjáték indítása" tesztelve. | sikeres | - | Tanyi Győző | 2023.01.14.
3 | Az oldal tesztelése mobil készülékről. (Firefox) | A kártyák megjelentek, a gombok működtek | sikeres | Két képernyőkép: `Screenshot_20230114_155114_Firefox.jpg` és `Screenshot_20230114_155125_Firefox.jpg` hozzáadva a docs könyvtárhoz. | Tanyi Győző | 2023.01.14.
4 | Szerver indítás Linux rendszer alatt (npm start) | `Module not found` hiba | sikertelen | - | Tanyi Győző | 2023.01.15.
5 | Szerver indítás Linux rendszer alatt (npm start) | Sikeres indítás. | sikeres | - | Tanyi Győző | 2023.01.15.
6 | Új GUI elemek tesztelése (gombok, számláló, képek, stb.) | A komponensek megjelennek és működnek | sikeres | - | Tanyi Győző | 2023.01.15.
7 | A játék indulásának tesztelése mobil eszközön | Az üdvözlő képernyő és a játék elindul. | sikeres | - | Tanyi Győző | 2023.01.16.
8 | A játékmenet tesztelése mobil eszközön álló képernyőn | A gombok és a szöveges tartalom megjelenik, a képek nem. | nem teljes | Képernyőképek: `Screenshot_20230116_083529_Firefox.jpg` `Screenshot_20230116_083534_Firefox.jpg` `Screenshot_20230116_083549_Firefox.jpg` | Tanyi Győző | 2023.01.16.
9 | A játékmenet tesztelése mobil eszközön fekvő képernyőn | Minden tartalom megfelelő megjelenik | sikeres | Képernyőképek: `Screenshot_20230116_083604_Firefox.jpg` `Screenshot_20230116_083612_Firefox.jpg` | Tanyi Győző | 2023.01.16.
10 | A játékmenet tesztelése a timer -rel kiegészített játékon (desktop) | A timer helyesen működik, és minden korábbi komponens is megfelelően megjelenik és működik. | sikeres | - | Tanyi Győző | 2023.01.16.
11 | A játékmenet tesztelése a timer -rel kiegészített játékon (mobil) | A timer mobilkészüléken is látható és jól működik, minden korábban is működő más komponenssel együtt. | sikeres | - | Tanyi Győző | 2023.01.16.
