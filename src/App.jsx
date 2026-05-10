import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import './index.css';

const chapters = [
  {
    id: 1,
    number: "I",
    title: "The First Hello",
    date: "November — December 2022",
    caption: "Every love story has a first page. This is ours — those first moments when everything felt new, exciting, and somehow already like coming home.",
    photos: [
    "IMG_20221104_202022.jpg",
    "IMG_20221206_215914.jpg",
    "IMG_20221206_215919.jpg",
    "IMG_20221206_215934.jpg",
    "IMG_20221210_190330.jpg",
    "IMG_20221210_190334.jpg",
    "IMG_20221210_190337.jpg",
    "IMG_20221210_192722.jpg",
    "IMG_20221210_192726.jpg",
    "IMG_20221210_192727.jpg",
    "IMG_20221210_215618.jpg",
    "IMG_20221210_232234.jpg",
    "IMG_20221210_232248.jpg",
    "IMG_20221210_232252.jpg",
    "IMG_20221210_232255.jpg",
    "IMG_20221210_232332.jpg",
    "IMG_20221211_162736.jpg",
    "IMG_20221218_200807.jpg",
    ]
  },
  {
    id: 2,
    number: "II",
    title: "Our Beginning",
    date: "January — March 2023",
    caption: "The early months, full of firsts. First laughs, first trips, first realizations that something real was forming between us.",
    photos: [
    "2BB98BBE-BA20-4DD8-9F4D-F73E60F065E5.jpg",
    "IMG_0152.jpg",
    "IMG_0153.jpg",
    "IMG_0154.jpg",
    "IMG_0155.jpg",
    "IMG_0156.jpg",
    "IMG_0157.jpg",
    "IMG_0158.jpg",
    "IMG_0159.jpg",
    "IMG_0160.jpg",
    "IMG_0161.jpg",
    "IMG_0183.jpg",
    "IMG_0184.jpg",
    "IMG_0185.jpg",
    "IMG_0188.jpg",
    "IMG_0189.jpg",
    "IMG_0190.jpg",
    "IMG_0191.jpg",
    "IMG_0198.jpg",
    "IMG_0200.jpg",
    "IMG_0201.jpg",
    "IMG_0207.jpg",
    "IMG_0208.jpg",
    "IMG_0209.jpg",
    "IMG_0211.jpg",
    "IMG_0212.jpg",
    "IMG_0231.jpg",
    "IMG_0232.jpg",
    "IMG_0233.jpg",
    "IMG_0234.jpg",
    "IMG_0235.jpg",
    "IMG_0236.jpg",
    "IMG_0331.jpg",
    "IMG_0332.jpg",
    "IMG_0333.jpg",
    "IMG_0334.jpg",
    "IMG_0335.jpg",
    "IMG_0336.jpg",
    "IMG_0337.jpg",
    "IMG_0338.jpg",
    "IMG_0342.jpg",
    "IMG_0343.jpg",
    "IMG_0345.jpg",
    "IMG_0346.jpg",
    "IMG_0349.jpg",
    "IMG_0373.jpg",
    "IMG_0374.jpg",
    "IMG_0376.jpg",
    "IMG_0377.jpg",
    "IMG_0378.jpg",
    "IMG_0379.jpg",
    "IMG_0380.jpg",
    "IMG_0381.jpg",
    "IMG_0382.jpg",
    "IMG_0383.jpg",
    "IMG_0385.jpg",
    "IMG_0386.jpg",
    "IMG_0387.jpg",
    "IMG_0388.jpg",
    "IMG_0389.jpg",
    "IMG_0390.jpg",
    "IMG_0392.jpg",
    "IMG_0393.jpg",
    "IMG_0394.jpg",
    "IMG_0395.jpg",
    "IMG_0404.jpg",
    "IMG_0406.jpg",
    "IMG_0407.jpg",
    "IMG_0408.jpg",
    "IMG_0409.jpg",
    "IMG_0410.jpg",
    "IMG_0424.jpg",
    "IMG_0429.jpg",
    "IMG_0430.jpg",
    "IMG_0431.jpg",
    "IMG_0466.jpg",
    "IMG_0467.jpg",
    "IMG_0468.jpg",
    "IMG_0469.jpg",
    "IMG_0470.jpg",
    "IMG_0471.jpg",
    "IMG_0472.jpg",
    "IMG_0473.jpg",
    "IMG_0474.jpg",
    "IMG_0475.jpg",
    "IMG_0476.jpg",
    "IMG_0477.jpg",
    "IMG_0478.jpg",
    "IMG_0483.jpg",
    "IMG_0484.jpg",
    "IMG_0485.jpg",
    "IMG_0486.jpg",
    "IMG_0488.jpg",
    "IMG_0493.jpg",
    "IMG_0494.jpg",
    "IMG_0497.jpg",
    "IMG_0498.jpg",
    "IMG_0499.jpg",
    "IMG_0508.jpg",
    "IMG_0543.jpg",
    "IMG_0544.jpg",
    "IMG_0546.jpg",
    "IMG_0547.jpg",
    "IMG_0548.jpg",
    "IMG_0558.jpg",
    "IMG_0559.jpg",
    "IMG_0560.jpg",
    "IMG_0562.jpg",
    "IMG_0563.jpg",
    "IMG_0564.jpg",
    "IMG_0565.jpg",
    "IMG_0566.jpg",
    "IMG_0567.jpg",
    "IMG_0568.jpg",
    "IMG_0569.jpg",
    "IMG_0570.jpg",
    "IMG_0571.jpg",
    "IMG_0572.jpg",
    "IMG_0608.jpg",
    "IMG_0609.jpg",
    "IMG_0668.jpg",
    "IMG_0669.jpg",
    "IMG_0670.jpg",
    "IMG_0736.jpg",
    "IMG_0737.jpg",
    "IMG_0738.jpg",
    "IMG_0752.jpg",
    "IMG_0753.jpg",
    "IMG_0768.jpg",
    "IMG_0769.jpg",
    "IMG_0770.jpg",
    "IMG_0771.jpg",
    "IMG_0824.jpg",
    "IMG_0840.jpg",
    "IMG_0845.jpg",
    "IMG_0846.jpg",
    "IMG_0848.jpg",
    "IMG_0849.jpg",
    "IMG_0850.jpg",
    "IMG_0851.jpg",
    "IMG_0852.jpg",
    "IMG_0853.jpg",
    "IMG_0854.jpg",
    "IMG_0855.jpg",
    "IMG_0858.jpg",
    "IMG_0859.jpg",
    "IMG_0860.jpg",
    "IMG_0865.jpg",
    "IMG_0866.jpg",
    "IMG_0867.jpg",
    "IMG_0868.jpg",
    "IMG_0872.jpg",
    "IMG_0873.jpg",
    "IMG_0874.jpg",
    "IMG_0875.jpg",
    "IMG_0876.jpg",
    "IMG_0877.jpg",
    "IMG_0878.jpg",
    "IMG_0879.jpg",
    "IMG_0880.jpg",
    "IMG_0881.jpg",
    "IMG_0884.jpg",
    "IMG_0885.jpg",
    "IMG_0886.jpg",
    "IMG_0887.jpg",
    "IMG_0888.jpg",
    "IMG_0889.jpg",
    "IMG_0892.jpg",
    "IMG_0894.jpg",
    "IMG_0895.jpg",
    "IMG_0896.jpg",
    "IMG_0897.jpg",
    "IMG_0898.jpg",
    "IMG_0900.jpg",
    "IMG_0901.jpg",
    "IMG_0902.jpg",
    "IMG_0903.jpg",
    "IMG_0904.jpg",
    "IMG_0905.jpg",
    "IMG_0906.jpg",
    "IMG_0907.jpg",
    "IMG_0908.jpg",
    "IMG_0909.jpg",
    "IMG_0910.jpg",
    "IMG_0911.jpg",
    "IMG_0912.jpg",
    "IMG_0913.jpg",
    "IMG_0915.jpg",
    "IMG_0916.jpg",
    "IMG_0917.jpg",
    "IMG_0918.jpg",
    "IMG_0919.jpg",
    "IMG_0920.jpg",
    "IMG_0921.jpg",
    "IMG_0932.jpg",
    "IMG_0933.jpg",
    "IMG_0938.jpg",
    "IMG_0939.jpg",
    "IMG_0940.jpg",
    "IMG_0941.jpg",
    "IMG_0942.jpg",
    "IMG_0943.jpg",
    "IMG_0944.jpg",
    "IMG_0945.jpg",
    "IMG_0946.jpg",
    "IMG_0947.jpg",
    "IMG_0948.jpg",
    "IMG_0949.jpg",
    "IMG_0950.jpg",
    "IMG_0951.jpg",
    "IMG_0958.jpg",
    "IMG_0959.jpg",
    "IMG_0960.jpg",
    "IMG_0970.jpg",
    "IMG_0971.jpg",
    "IMG_0972.jpg",
    "IMG_0973.jpg",
    "IMG_0975.jpg",
    "IMG_0976.jpg",
    "IMG_0977.jpg",
    "IMG_0978.jpg",
    "IMG_0979.jpg",
    "IMG_0980.jpg",
    "IMG_0981.jpg",
    "IMG_0985.jpg",
    "IMG_0986.jpg",
    "IMG_0987.jpg",
    "IMG_0988.jpg",
    "IMG_0989.jpg",
    "IMG_0990.jpg",
    "IMG_0991.jpg",
    "IMG_1019.jpg",
    "IMG_1020.jpg",
    "IMG_1022.jpg",
    "IMG_1035.jpg",
    "IMG_1036.jpg",
    "IMG_1041.jpg",
    "IMG_1042.jpg",
    "IMG_1043.jpg",
    "IMG_1044.jpg",
    "IMG_1045.jpg",
    "IMG_1055.jpg",
    "IMG_1059.jpg",
    "IMG_1060.jpg",
    "IMG_1063.jpg",
    "IMG_1064.jpg",
    "IMG_1065.jpg",
    "IMG_1066.jpg",
    "IMG_1067.jpg",
    "IMG_1079.jpg",
    "IMG_1082.jpg",
    "IMG_1083.jpg",
    "IMG_1084.jpg",
    "IMG_1087.jpg",
    "IMG_1088.jpg",
    "IMG_1102.jpg",
    "IMG_1103.jpg",
    "IMG_1104.jpg",
    "IMG_1105.jpg",
    "IMG_1113.jpg",
    "IMG_1114.jpg",
    "IMG_1115.jpg",
    "IMG_1116.jpg",
    "IMG_1129.jpg",
    "IMG_1130.jpg",
    "IMG_1131.jpg",
    "IMG_1132.jpg",
    "IMG_1133.jpg",
    "IMG_1134.jpg",
    "IMG_1135.jpg",
    "IMG_1136.jpg",
    "IMG_1137.jpg",
    "IMG_1138.jpg",
    "IMG_1139.jpg",
    "IMG_1140.jpg",
    "IMG_1141.jpg",
    "IMG_1142.jpg",
    "IMG_1143.jpg",
    "IMG_1144.jpg",
    "IMG_1146.jpg",
    "IMG_1147.jpg",
    "IMG_1148.jpg",
    "IMG_1149.jpg",
    "IMG_1150.jpg",
    "IMG_1158.jpg",
    "IMG_1160.jpg",
    "IMG_1161.jpg",
    "IMG_1162.jpg",
    "IMG_1163.jpg",
    "IMG_1164.jpg",
    "IMG_1165.jpg",
    "IMG_1166.jpg",
    "IMG_1167.jpg",
    "IMG_1171.jpg",
    "IMG_1172.jpg",
    "IMG_1173.jpg",
    "IMG_1174.jpg",
    "IMG_1175.jpg",
    "IMG_1183.jpg",
    "IMG_1184.jpg",
    "IMG_1185.jpg",
    "IMG_1194.jpg",
    "IMG_1234.jpg",
    "IMG_1287.jpg",
    "IMG_1297.jpg",
    "IMG_1298.jpg",
    "IMG_1301.jpg",
    "IMG_1302.jpg",
    "IMG_1349.jpg",
    "IMG_1350.jpg",
    ]
  },
  {
    id: 3,
    number: "III",
    title: "Falling Deeper",
    date: "April — June 2023",
    caption: "Spring into summer — we were inseparable. Every weekend an adventure, every ordinary day made extraordinary by the company.",
    photos: [
    "IMG_1356.jpg",
    "IMG_1357.jpg",
    "IMG_1358.jpg",
    "IMG_1359.jpg",
    "IMG_1360.jpg",
    "IMG_1363.jpg",
    "IMG_1364.jpg",
    "IMG_1370.jpg",
    "IMG_1372.jpg",
    "IMG_1374.jpg",
    "IMG_1375.jpg",
    "IMG_1376.jpg",
    "IMG_1377.jpg",
    "IMG_1378.jpg",
    "IMG_1383.jpg",
    "IMG_1384.jpg",
    "IMG_1385.jpg",
    "IMG_1386.jpg",
    "IMG_1414.jpg",
    "IMG_1415.jpg",
    "IMG_1416.jpg",
    "IMG_1428.jpg",
    "IMG_1440.jpg",
    "IMG_1441.jpg",
    "IMG_1442.jpg",
    "IMG_1445.jpg",
    "IMG_1446.jpg",
    "IMG_1447.jpg",
    "IMG_1448.jpg",
    "IMG_1449.jpg",
    "IMG_1450.jpg",
    "IMG_1451.jpg",
    "IMG_1452.jpg",
    "IMG_1453.jpg",
    "IMG_1454.jpg",
    "IMG_1455.jpg",
    "IMG_1461.jpg",
    "IMG_1462.jpg",
    "IMG_1463.jpg",
    "IMG_1464.jpg",
    "IMG_1465.jpg",
    "IMG_1466.jpg",
    "IMG_1467.jpg",
    "IMG_1468.jpg",
    "IMG_1469.jpg",
    "IMG_1470.jpg",
    "IMG_1471.jpg",
    "IMG_1475.jpg",
    "IMG_1476.jpg",
    "IMG_1490.jpg",
    "IMG_1491.jpg",
    "IMG_1526.jpg",
    "IMG_1530.jpg",
    "IMG_1532.jpg",
    "IMG_1541.jpg",
    "IMG_1543.jpg",
    "IMG_1544.jpg",
    "IMG_1545.jpg",
    "IMG_1546.jpg",
    "IMG_1547.jpg",
    "IMG_1548.jpg",
    "IMG_1549.jpg",
    "IMG_1550.jpg",
    "IMG_1551.jpg",
    "IMG_1552.jpg",
    "IMG_1553.jpg",
    "IMG_1554.jpg",
    "IMG_1555.jpg",
    "IMG_1556.jpg",
    "IMG_1558.jpg",
    "IMG_1566.jpg",
    "IMG_1567.jpg",
    "IMG_1568.jpg",
    "IMG_1577.jpg",
    "IMG_1578.jpg",
    "IMG_1601.jpg",
    "IMG_1626.jpg",
    "IMG_1627.jpg",
    "IMG_1628.jpg",
    "IMG_1629.jpg",
    "IMG_1630.jpg",
    "IMG_1631.jpg",
    "IMG_1632.jpg",
    "IMG_1653.jpg",
    "IMG_1694.jpg",
    "IMG_1707.jpg",
    "IMG_1708.jpg",
    "IMG_1710.jpg",
    "IMG_1711.jpg",
    "IMG_1712.jpg",
    "IMG_1713.jpg",
    "IMG_1718.jpg",
    "IMG_1719.jpg",
    "IMG_1720.jpg",
    "IMG_1721.jpg",
    "IMG_1722.jpg",
    "IMG_1723.jpg",
    "IMG_1724.jpg",
    "IMG_1725.jpg",
    "IMG_1727.jpg",
    "IMG_1728.jpg",
    "IMG_1729.jpg",
    "IMG_1732.jpg",
    "IMG_1733.jpg",
    "IMG_1734.jpg",
    "IMG_1735.jpg",
    "IMG_1736.jpg",
    "IMG_1737.jpg",
    "IMG_1738.jpg",
    "IMG_1739.jpg",
    "IMG_1740.jpg",
    "IMG_1741.jpg",
    "IMG_1742.jpg",
    "IMG_1744.jpg",
    "IMG_1745.jpg",
    "IMG_1746.jpg",
    "IMG_1747.jpg",
    "IMG_1748.jpg",
    "IMG_1749.jpg",
    "IMG_1750.jpg",
    "IMG_1751.jpg",
    "IMG_1752.jpg",
    "IMG_1753.jpg",
    "IMG_1754.jpg",
    "IMG_1755.jpg",
    "IMG_1756.jpg",
    "IMG_1791.jpg",
    "IMG_1792.jpg",
    "IMG_1793.jpg",
    "IMG_1794.jpg",
    "IMG_1795.jpg",
    "IMG_1796.jpg",
    "IMG_1797.jpg",
    "IMG_1798.jpg",
    "IMG_1799.jpg",
    "IMG_1800.jpg",
    "IMG_1890.jpg",
    "IMG_1891.jpg",
    "IMG_1893.jpg",
    "IMG_1894.jpg",
    "IMG_1895.jpg",
    "IMG_1897.jpg",
    "IMG_1898.jpg",
    "IMG_1899.jpg",
    "IMG_1900.jpg",
    "IMG_1916.jpg",
    "IMG_1919.jpg",
    "IMG_1920.jpg",
    "IMG_1921.jpg",
    "IMG_1937.jpg",
    "IMG_1938.jpg",
    "IMG_1942.jpg",
    "IMG_1943.jpg",
    "IMG_1944.jpg",
    "IMG_1945.jpg",
    "IMG_1946.jpg",
    "IMG_1948.jpg",
    "IMG_1949.jpg",
    "IMG_1950.jpg",
    "IMG_1959.jpg",
    "IMG_1960.jpg",
    "IMG_1961.jpg",
    "IMG_1982.jpg",
    "IMG_1983.jpg",
    "IMG_1984.jpg",
    "IMG_1985.jpg",
    "IMG_1986.jpg",
    "IMG_1987.jpg",
    "IMG_1988.jpg",
    "IMG_1989.jpg",
    "IMG_1990.jpg",
    "IMG_1995.jpg",
    "IMG_1996.jpg",
    "IMG_1997.jpg",
    "IMG_2014.jpg",
    "IMG_2015.jpg",
    "IMG_2016.jpg",
    "IMG_2017.jpg",
    "IMG_2018.jpg",
    "IMG_2019.jpg",
    "IMG_2020.jpg",
    "IMG_2021.jpg",
    "IMG_2022.jpg",
    "IMG_2043.jpg",
    "IMG_2044.jpg",
    "IMG_2055.jpg",
    "IMG_2056.jpg",
    "IMG_2057.jpg",
    "IMG_2058.jpg",
    "IMG_2059.jpg",
    "IMG_2060.jpg",
    "IMG_2061.jpg",
    "IMG_2062.jpg",
    "IMG_2063.jpg",
    "IMG_2064.jpg",
    "IMG_2065.jpg",
    "IMG_2066.jpg",
    "IMG_2067.jpg",
    "IMG_2068.jpg",
    "IMG_2069.jpg",
    "IMG_2070.jpg",
    "IMG_2071.jpg",
    "IMG_2072.jpg",
    "IMG_2084.jpg",
    "IMG_2085.jpg",
    "IMG_2086.jpg",
    "IMG_2087.jpg",
    "IMG_2088.jpg",
    "IMG_2089.jpg",
    "IMG_2090.jpg",
    "IMG_2091.jpg",
    "IMG_2092.jpg",
    "IMG_2093.jpg",
    "IMG_2094.jpg",
    "IMG_2096.jpg",
    "IMG_2097.jpg",
    "IMG_2098.jpg",
    "IMG_2099.jpg",
    "IMG_2108.jpg",
    "IMG_2123.jpg",
    "IMG_2125.jpg",
    "IMG_2126.jpg",
    "IMG_2127.jpg",
    "IMG_2128.jpg",
    "IMG_2129.jpg",
    "IMG_2130.jpg",
    "IMG_2131.jpg",
    "IMG_2135.jpg",
    "IMG_2137.jpg",
    "IMG_2139.jpg",
    "IMG_2140.jpg",
    "IMG_2141.jpg",
    "IMG_2142.jpg",
    "IMG_2143.jpg",
    "IMG_2144.jpg",
    "IMG_2145.jpg",
    "IMG_2146.jpg",
    "IMG_2147.jpg",
    "IMG_2148.jpg",
    "IMG_2149.jpg",
    "IMG_2150.jpg",
    "IMG_2151.jpg",
    "IMG_2152.jpg",
    "IMG_2154.jpg",
    "IMG_2159.jpg",
    "IMG_2160.jpg",
    "IMG_2161.jpg",
    "IMG_2176.jpg",
    "IMG_2177.jpg",
    "IMG_2206.jpg",
    "IMG_2207.jpg",
    "IMG_2243.jpg",
    "IMG_2244.jpg",
    "IMG_2256.jpg",
    "IMG_2257.jpg",
    "IMG_2258.jpg",
    "IMG_2259.jpg",
    "IMG_2260.jpg",
    "IMG_2261.jpg",
    "IMG_2262.jpg",
    "IMG_2263.jpg",
    "IMG_2264.jpg",
    "IMG_2311.jpg",
    "IMG_2313.jpg",
    "IMG_2314.jpg",
    "IMG_2372.jpg",
    "IMG_2373.jpg",
    "IMG_2374.jpg",
    "IMG_2376.jpg",
    "IMG_2377.jpg",
    "IMG_2378.jpg",
    "IMG_2379.jpg",
    "IMG_2389.jpg",
    "IMG_2391.jpg",
    "IMG_2393.jpg",
    "IMG_2394.jpg",
    "IMG_2395.jpg",
    "IMG_2396.jpg",
    "IMG_2397.jpg",
    "IMG_2398.jpg",
    "IMG_2399.jpg",
    "IMG_2400.jpg",
    "IMG_2401.jpg",
    "IMG_2402.jpg",
    "IMG_2403.jpg",
    "IMG_2404.jpg",
    "IMG_2405.jpg",
    "IMG_2406.jpg",
    "IMG_2407.jpg",
    "IMG_2408.jpg",
    "IMG_2409.jpg",
    "IMG_2410.jpg",
    "IMG_2411.jpg",
    "IMG_2425.jpg",
    "IMG_2426.jpg",
    "IMG_2427.jpg",
    "IMG_2435.jpg",
    "IMG_2436.jpg",
    "IMG_2437.jpg",
    "IMG_2438.jpg",
    "IMG_2439.jpg",
    "IMG_2518.jpg",
    "IMG_2519.jpg",
    "IMG_2520.jpg",
    ]
  },
  {
    id: 4,
    number: "IV",
    title: "Midsummer",
    date: "July — August 2023",
    caption: "Long evenings, unhurried days. The kind of summer you don't want to end — because you know the people in it are irreplaceable.",
    photos: [
    "9D5447E7-6915-4D8C-96EA-9380D4142FE5.jpg",
    "IMG_2783.jpg",
    "IMG_2785.jpg",
    "IMG_2786.jpg",
    "IMG_2787.jpg",
    "IMG_2888.jpg",
    "IMG_2889.jpg",
    "IMG_2966.jpg",
    "IMG_2976.jpg",
    "IMG_2977.jpg",
    "IMG_2978.jpg",
    "IMG_2992.jpg",
    "IMG_2993.jpg",
    "IMG_2995.jpg",
    "IMG_2996.jpg",
    "IMG_2997.jpg",
    "IMG_2998.jpg",
    "IMG_3001.jpg",
    "IMG_3002.jpg",
    "IMG_3003.jpg",
    "IMG_3004.jpg",
    "IMG_3005.jpg",
    "IMG_3006.jpg",
    "IMG_3007.jpg",
    "IMG_3008.jpg",
    "IMG_3009.jpg",
    "IMG_3010.jpg",
    "IMG_3032.jpg",
    "IMG_3033.jpg",
    "IMG_3034.jpg",
    "IMG_3035.jpg",
    "IMG_3036.jpg",
    "IMG_3051.jpg",
    "IMG_3052.jpg",
    "IMG_3053.jpg",
    "IMG_3054.jpg",
    "IMG_3055.jpg",
    "IMG_3056.jpg",
    "IMG_3057.jpg",
    "IMG_3058.jpg",
    "IMG_3059.jpg",
    "IMG_3060.jpg",
    "IMG_3078.jpg",
    "IMG_3079.jpg",
    "IMG_3080.jpg",
    "IMG_3086.jpg",
    "IMG_3108.jpg",
    "IMG_3109.jpg",
    "IMG_3110.jpg",
    "IMG_3111.jpg",
    "IMG_3112.jpg",
    "IMG_3113.jpg",
    "IMG_3119.jpg",
    "IMG_3120.jpg",
    "IMG_3121.jpg",
    "IMG_3122.jpg",
    "IMG_3123.jpg",
    "IMG_3124.jpg",
    "IMG_3125.jpg",
    "IMG_3126.jpg",
    "IMG_3127.jpg",
    "IMG_3128.jpg",
    "IMG_3129.jpg",
    "IMG_3133.jpg",
    "IMG_3134.jpg",
    "IMG_3135.jpg",
    "IMG_3136.jpg",
    "IMG_3138.jpg",
    "IMG_3139.jpg",
    "IMG_3140.jpg",
    "IMG_3177.jpg",
    "IMG_3178.jpg",
    "IMG_3179.jpg",
    "IMG_3180.jpg",
    "IMG_3181.jpg",
    "IMG_3182.jpg",
    "IMG_3183.jpg",
    "IMG_3184.jpg",
    "IMG_3185.jpg",
    "IMG_3186.jpg",
    "IMG_3187.jpg",
    "IMG_3197.jpg",
    "IMG_3198.jpg",
    "IMG_3199.jpg",
    "IMG_3234.jpg",
    "IMG_3235.jpg",
    "IMG_3236.jpg",
    "IMG_3237.jpg",
    "IMG_3238.jpg",
    "IMG_3239.jpg",
    "IMG_3241.jpg",
    "IMG_3242.jpg",
    "IMG_3251.jpg",
    "IMG_3255.jpg",
    "IMG_3271.jpg",
    "IMG_3272.jpg",
    "IMG_3277.jpg",
    "IMG_3278.jpg",
    "IMG_3279.jpg",
    "IMG_3280.jpg",
    "IMG_3281.jpg",
    "IMG_3282.jpg",
    "IMG_3283.jpg",
    "IMG_3284.jpg",
    "IMG_3285.jpg",
    "IMG_3286.jpg",
    "IMG_3290.jpg",
    "IMG_3291.jpg",
    "IMG_3292.jpg",
    "IMG_3293.jpg",
    "IMG_3300.jpg",
    "IMG_3301.jpg",
    "IMG_3302.jpg",
    "IMG_3309.jpg",
    "IMG_3310.jpg",
    "IMG_3311.jpg",
    "IMG_3312.jpg",
    "IMG_3313.jpg",
    "IMG_3314.jpg",
    "IMG_3322.jpg",
    "IMG_3347.jpg",
    "IMG_3348.jpg",
    ]
  },
  {
    id: 5,
    number: "V",
    title: "Picking Back Up",
    date: "October — December 2024",
    caption: "Distance is just geography. When we came back together it was like no time had passed — only that everything meant a little more.",
    photos: [
    "2854133F-8775-46DC-AC39-A16AB7400099.jpg",
    "IMG_5586.jpg",
    "IMG_5591.jpg",
    "IMG_2763.JPG",
    "IMG_2764.JPG",
    "IMG_2765.JPG",
    "IMG_2766.JPG",
    "IMG_2767.JPG",
    "IMG_2768.JPG",
    "IMG_2769.JPG",
    "IMG_2770.JPG",
    "IMG_2771.JPG",
    "IMG_2772.JPG",
    "IMG_2773.JPG",
    "IMG_2774.JPG",
    "IMG_2775.JPG",
    "IMG_5625.jpg",
    "IMG_5653.jpg",
    "IMG_5654.jpg",
    "IMG_5655.jpg",
    ]
  },
  {
    id: 6,
    number: "VI",
    title: "Right Now",
    date: "2025",
    caption: "This is the chapter we are still writing. New cities, new memories, the same us.",
    photos: [
    "6C00EE80-4808-46A6-B477-4F99F3565576.jpg",
    "C853E726-4344-4622-96A2-902002828832.jpg",
    "IMG_5679.jpg",
    "IMG_5680.jpg",
    "IMG_5681.jpg",
    "IMG_5682.jpg",
    "IMG_5683.jpg",
    "IMG_5685.jpg",
    "IMG_5686.jpg",
    "IMG_5687.jpg",
    "IMG_5688.jpg",
    "IMG_5689.jpg",
    "IMG_5690.jpg",
    "IMG_5691.jpg",
    "IMG_5692.jpg",
    "IMG_5693.jpg",
    "IMG_5826.jpg",
    "IMG_5827.jpg",
    "IMG_5828.jpg",
    "IMG_5829.jpg",
    "IMG_5831.jpg",
    "IMG_5832.jpg",
    "IMG_5833.jpg",
    "IMG_5861.jpg",
    "IMG_5862.jpg",
    "IMG_5866.jpg",
    "52927F25-E2FE-469A-9713-B8D3FC512704.jpg",
    "CDC67BE4-4BED-4F6D-B94B-BF281D51B745.jpg",
    ]
  },
  {
    id: 7,
    number: "VII",
    title: "Undated Memories",
    date: "Moments Without Timestamps",
    caption: "Not every memory comes with a label. Some are just fragments — beautiful, unordered, entirely ours.",
    photos: [
    "001d25ce-b4a7-4c35-826f-3265668a639e.jpg",
    "040acbb8-26f8-4b75-a6d9-1f7174a7cc59.jpg",
    "088e12ee-e0c4-4a73-abdf-20b9bc899818.jpg",
    "08a2d713-6b0f-4a88-9b58-7654e241d661.jpg",
    "16e2bb5c-c65f-4965-8159-f048bc5a681d.jpg",
    "1756451d-ad95-4dd2-8fe6-7b360b325661.jpg",
    "1b69c1bd-17d6-4704-9046-695b11c1dcf9.jpg",
    "1d111cb4-8c05-47ed-acb6-6918df272af4.jpg",
    "1d15af4b-4784-41f0-900f-f1b8344a726f.jpg",
    "2019af7d-6546-457a-8cf9-c34614a8f625.jpg",
    "28cc86bf-68be-4858-8fe1-cf5392be1b46.jpg",
    "2b381d9f-33ce-4858-8efa-6994e43e3b93.jpg",
    "2ca0276b-c521-4075-8970-6b2d559165a1.jpg",
    "2ddebdd5-ac2c-4535-b24e-61c8de501c87.jpg",
    "3265fb83-ca96-4fbc-8ffa-7fc1a6ed00d4.jpg",
    "335ce858-ffd3-4631-83b8-9093d102d64a.jpg",
    "33fb0b8d-7ee6-4566-afe2-995cd557f107.jpg",
    "351dcc61-1ad6-418f-bc7d-91440a45160c.jpg",
    "359cbfae-d44d-4b98-ad0a-294525ef6bb0.jpg",
    "35ba5fcf-4560-49b6-9739-e2e7f38a1cc0.jpg",
    "364f14e7-c515-4e36-912d-0886e7813f2b.jpg",
    "36ed18a2-e58a-4c26-b45d-a47c8d8c0471.jpg",
    "3af66468-8b71-49e4-8773-ae0b90afd154.jpg",
    "3bb1a42d-1782-498b-b67e-8be63211c1d5.jpg",
    "3d8ebff3-f890-425b-97f4-fbff9af9ce3a.jpg",
    "3edbc0da-6386-40f5-b042-71fef8a9e12e.jpg",
    "415eb9e0-4dad-4ba8-9c75-47b62ffeaa08.jpg",
    "41993d1e-73a2-4a7d-bada-85eab93c4d47.jpg",
    "4283d605-1233-455a-801f-8860ca52230b.jpg",
    "42f51d8c-4bd0-4c3a-9e80-7386c2d81d65.jpg",
    "4409c618-f3f3-48f2-bc0f-cef0c88d33bb.jpg",
    "44d23a39-10f1-42a2-8785-0be3c950eb6f.jpg",
    "4534a8c5-371a-417a-a458-fa9892f51213.jpg",
    "48acd797-59a5-4c27-8988-a0efe9c35f7c.jpg",
    "48d63aa1-700c-489b-a73a-dc44ec091d69.jpg",
    "4efbbcf1-7a36-45e0-a0ce-c156bae9f3b5.jpg",
    "50af847b-6fe6-4d7a-9da6-27f8cb0e05fe.jpg",
    "51aa4a0b-08ab-4677-a071-8ee6eda4c21d.jpg",
    "52b89f51-b253-45b6-8bdd-97ec0095aa31.jpg",
    "5776f1f7-2653-46c6-99ed-24970aaa099a.jpg",
    "59f66ff0-e277-453d-96e1-8ba358aab24d.jpg",
    "5dfefb2d-8856-4930-9b1f-189639cffef5.jpg",
    "67629300-f6af-4e7a-888b-a8835282240a.jpg",
    "688c9782-681a-45d5-b484-a7f2c3fbff46.jpg",
    "693c1fe3-d22a-41ee-b00a-b146e5ee9da3.jpg",
    "6964cdcd-5dae-43e6-a2c4-dea19b14f3f8.jpg",
    "6a1b82bb-ea22-40b7-b2b0-5c964ed33170.jpg",
    "6d5c94d8-92d1-4432-91cf-dc8f367debb6.jpg",
    "6df270ff-0123-43b4-8e3a-a0c3d7ff0ef1.jpg",
    "75f8c18c-dcab-4cb2-a1a1-55f8798b6cc9.jpg",
    "76954272-267f-44fc-beac-19cc29b9d639.jpg",
    "775cded1-8c71-4be4-87bd-cb092f98b2cb.jpg",
    "793304aa-be90-4b70-826d-8f1157fcba88.jpg",
    "79f195d5-1f67-449a-8b63-7d7f2f02c9c4.jpg",
    "7bac8b9f-ac0a-4293-b8a1-f58f29ba1801.jpg",
    "7cf4fc14-38b9-4d64-820e-7162e7c48e42.jpg",
    "7e284389-185f-429e-9bae-fd07081396f3.jpg",
    "7e2cc15c-8759-4d60-8ccb-15939d85a2d5.jpg",
    "82a3dd2e-69b6-46ea-8158-28e4b413d170.jpg",
    "82c7f65c-2748-4d62-aeda-c6c19113fd11.jpg",
    "875810ed-a9ed-47ef-b157-dc1dd3a6f4eb.jpg",
    "8759cd72-24f3-451c-8ee0-44d6ab00b124.jpg",
    "896cd11a-67c2-4d3b-aacf-c6a71f712603.jpg",
    "8b683738-065b-4de5-bbd2-9dc8de7bff8f.jpg",
    "8d631e96-84d4-484f-9e82-d4d29d560ef3.jpg",
    "91d131f5-da82-482e-8856-cef92b145c45.jpg",
    "966fbe92-cb45-476b-ae31-f5293afa17d9.jpg",
    "969b9568-d78e-48ac-ae15-241846e9c31a.jpg",
    "AE36DC1E-B7AC-45E7-9834-9B1004ED64FD.jpg",
    "B0A49C49-B809-4898-986B-F58586716FDC.jpg",
    "D9904BF2-D7A1-4AB6-B280-D196D5F82A6E.jpg",
    "FCFFA771-C51A-466C-9E49-32A5A5798A83.jpg",
    "IMG_1350-COLLAGE.jpg",
    "a1e880ad-8704-4f34-b720-fde11c67d87b.jpg",
    "a8bb2efc-0dc1-4a53-aff2-8f4a962308d4.jpg",
    "aa268846-e417-4069-8bdd-7e39f7d39b27.jpg",
    "aab2895d-763a-44ca-9677-1de73b9376d9.jpg",
    "abe23aed-a432-4b41-8bf4-d11e41d3e822.jpg",
    "ad602ef3-f2b8-4439-8581-d6f3cdbeb742.jpg",
    "ae76593e-2495-49a7-8f69-162a0e35a561.jpg",
    "b206c8d1-9771-44cf-b9b9-c791ce6e7356.jpg",
    "b23816f8-0ff4-4e07-9a98-f251f266dd60.jpg",
    "b38684eb-8b59-466e-b914-0cde735bb259.jpg",
    "b4bb5adf-d8ca-4ce1-b732-72aa8d530c53.jpg",
    "b4dc6e35-5229-4069-8da1-3a8287681f30.jpg",
    "b64645f3-ecb7-4577-a4ca-b14e021ee44f.jpg",
    "b71a2d29-8870-49e7-a238-2ee7e1a59844.jpg",
    "b8d54f78-21a0-4ec2-bc02-3c7aef688dd4.jpg",
    "b9d124d3-e261-4746-8124-b625f708280e.jpg",
    "baecc9e3-2b68-4d17-bd0e-b84befc9b95c.jpg",
    "bc5f9b6c-dd7d-4b5f-a190-2832614e5ec1.jpg",
    "be6a2de3-775d-4b24-b32e-5641e6d50492.jpg",
    "bf4723c2-6cc5-45ba-9d20-7079809a1928.jpg",
    "c01b8f85-7735-4c62-b1b8-affbaa4101d0.jpg",
    "c1ccba85-383c-4710-8c48-fb4b16e42ce0.jpg",
    "c31ea71f-a3ec-49bf-8b73-363ecda9c2a7.jpg",
    "c36dfabb-4c6c-4997-b284-c2e0b86839a8.jpg",
    "c3bd09c4-7002-4829-ba81-96bbd766c7a5.jpg",
    "c4e07cf3-bbb1-41b1-875b-0aaf7a106f32.jpg",
    "c5263d01-d446-47ec-95fc-1606f08a4975.jpg",
    "c5fb1aa6-18a9-40ba-86f9-a2013f85cd44.jpg",
    "c8a606c8-0d7c-4400-b5ec-c664f723ec44.jpg",
    "cbb3977c-d30d-43f7-854f-a8f4b38bb9b1.jpg",
    "ce62b7e9-6837-418c-b8a2-0a9b5754e254.jpg",
    "d3c1ca43-9d18-4be0-9b17-5bda7fb5cba2.jpg",
    "d6da612d-23f8-44f9-a015-4787dbc8ef1e.jpg",
    "d7e4e6dd-7790-4284-ba21-a67c227d2f9e.jpg",
    "d964f304-bbb1-403d-a12c-4577f888d3ed.jpg",
    "da80714d-1272-4f44-9b21-1bb19441d455.jpg",
    "dbcbd2b7-4ac9-49d3-accf-b24cb1923489.jpg",
    "dc0bbf95-a182-44ab-9185-1d548079afe8.jpg",
    "e14b07e1-9aeb-4ca1-800f-a8509553ba6e.jpg",
    "e96ecb3e-8327-42da-afb8-3f6e183537a0.jpg",
    "e96f8a77-705e-45e7-8f70-95418b610715.jpg",
    "e973ce91-d560-4373-82cb-b5067dfee15e.jpg",
    "e986e3f1-e395-4e0d-8c23-a6e4c971281c.jpg",
    "ed2c9cd5-8aa5-4f1c-bab9-12da7ba1df89.jpg",
    "ee893efb-5922-4cfd-944c-8c47bacb3620.jpg",
    "f2a3a95b-a151-4ba7-8d6c-f8dbffa2c3cd.jpg",
    "f5e5e549-5377-4739-b6a6-f13c28f558c1.jpg",
    "fbcaceb4-b864-4c3f-be2c-97aaaedf5fbd.jpg",
    "fd9442da-94f0-4799-a99e-0c0f61eaae05.jpg",
    "ff05ca5a-1616-4f80-bbef-5aff4c97f349.jpg",
    ]
  },
];

const PREVIEW_COUNT = 24;

const heartData = Array.from({ length: 12 }, (_, i) => ({
  left: `${5 + i * 8}%`, bottom: '0', fontSize: `${12 + (i % 4) * 3}px`,
}));

const petalData = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3 + 2) % 98}%`,
  fontSize: `${0.9 + (i % 3) * 0.3}rem`,
  duration: 8 + (i % 5) * 1.4,
  delay: i * 0.65,
  opacity: 0.35 + (i % 3) * 0.15,
}));

function applyTilt(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  el.style.transform = `perspective(700px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg) scale(1.05)`;
  el.style.transition = 'transform 0.1s ease';
}

function resetTilt(e) {
  const el = e.currentTarget;
  el.style.transform = '';
  el.style.transition = 'transform 0.45s ease';
}

const FloatingHeart = ({ style }) => (
  <motion.div
    className="floating-heart"
    style={style}
    animate={{ y: [-20, -80, -140], opacity: [0, 0.7, 0] }}
    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 4, ease: "easeOut" }}
  >
    ♥
  </motion.div>
);

const RosePetal = ({ style }) => (
  <motion.div
    className="rose-petal"
    style={{ left: style.left, fontSize: style.fontSize, opacity: style.opacity, top: 0 }}
    animate={{ y: ['-5vh', '108vh'], rotate: [0, 180, 360], x: [0, 14, -9, 18, 0] }}
    transition={{ duration: style.duration, repeat: Infinity, delay: style.delay, ease: 'linear' }}
  >
    ❀
  </motion.div>
);

const LazyPhoto = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="lazy-photo-wrap">
      {!loaded && <div className="photo-shimmer" />}
      <img
        className="lazy-img"
        src={src}
        alt={alt}
        loading="lazy"
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

const slideVariants = {
  enter: (dir) => ({ x: dir * 90, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir * -90, opacity: 0 }),
};

const Lightbox = ({ chapter, photoIndex, direction, onClose, onPrev, onNext }) => {
  const photo = chapter.photos[photoIndex];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox-content"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={photo}
            src={`/photos/${photo}`}
            alt={`Memory from ${chapter.title}`}
            className="lightbox-img"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <button className="lightbox-close" onClick={onClose} aria-label="Close"><X size={22} /></button>
        {photoIndex > 0 && (
          <button className="lightbox-nav prev" onClick={onPrev} aria-label="Previous"><ChevronLeft size={28} /></button>
        )}
        {photoIndex < chapter.photos.length - 1 && (
          <button className="lightbox-nav next" onClick={onNext} aria-label="Next"><ChevronRight size={28} /></button>
        )}
        <div className="lightbox-counter">{photoIndex + 1} / {chapter.photos.length}</div>
        <div className="lightbox-chapter-label">{chapter.title}</div>
      </motion.div>
    </motion.div>
  );
};

const WanderingCaricature = ({ src, delay = 0, size = 120 }) => {
  const [pos, setPos] = useState(() => ({
    x: 5 + Math.random() * 80,
    y: 5 + Math.random() * 80,
  }));

  useEffect(() => {
    const move = () => setPos({
      x: 5 + Math.random() * 80,
      y: 5 + Math.random() * 80,
    });
    const t = setTimeout(() => {
      move();
      const id = setInterval(move, 3000 + Math.random() * 2000);
      return () => clearInterval(id);
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <motion.div
      className="caricature-float"
      animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      transition={{ duration: 2.8, ease: [0.45, 0, 0.55, 1] }}
      style={{ width: size, height: size }}
    >
      <img src={src} alt="caricature" />
    </motion.div>
  );
};

const RomanceScene = () => (
  <div className="romance-scene">
    <motion.span
      className="romance-figure"
      animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    >🧑</motion.span>
    <motion.span
      className="romance-heart"
      animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
    >♥</motion.span>
    <motion.span
      className="romance-figure"
      animate={{ x: [0, -4, 0], y: [0, -4, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
    >👩</motion.span>
  </div>
);

const ChapterPicker = ({ selected, onToggle, onSelectAll, onClearAll }) => (
  <motion.section
    className="picker-section"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
  >
    <div className="picker-header">
      <p className="picker-eyebrow">Our Story</p>
      <h2 className="picker-title">Choose your chapters</h2>
      <p className="picker-subtitle">Pick the memories you want to explore, or open everything at once.</p>
      <div className="picker-controls">
        <button className="picker-ctrl-btn" onClick={onSelectAll}>Explore All</button>
        {selected.size > 0 && (
          <button className="picker-ctrl-btn ghost" onClick={onClearAll}>Clear</button>
        )}
      </div>
    </div>

    <div className="picker-grid">
      {chapters.map((chapter, idx) => {
        const isSelected = selected.has(chapter.id);
        return (
          <motion.button
            key={chapter.id}
            className={`picker-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onToggle(chapter.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
            whileHover={{ y: -4 }}
          >
            <div className="picker-card-img">
              <img src={`/photos/${chapter.photos[0]}`} alt={chapter.title} loading="lazy" />
              <div className="picker-card-overlay" />
              <AnimatePresence mode="wait">
                {isSelected ? (
                  <motion.div key="check" className="picker-check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                    ♥
                  </motion.div>
                ) : (
                  <motion.div key="romance" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.3 }}>
                    <RomanceScene />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="picker-card-body">
              <span className="picker-card-number">{chapter.number}</span>
              <h3 className="picker-card-title">{chapter.title}</h3>
              <span className="picker-card-count">{chapter.photos.length} photos</span>
            </div>
          </motion.button>
        );
      })}
    </div>

    {selected.size > 0 && (
      <motion.div className="picker-cta" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <a href="#timeline" className="picker-view-btn">
          View {selected.size === chapters.length ? 'all' : selected.size} {selected.size === 1 ? 'chapter' : 'chapters'} ↓
        </a>
      </motion.div>
    )}
  </motion.section>
);

const ChapterSection = ({ chapter, onPhotoClick }) => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? chapter.photos : chapter.photos.slice(0, PREVIEW_COUNT);
  const hasMore = chapter.photos.length > PREVIEW_COUNT;

  return (
    <motion.section
      className="chapter-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="chapter-header">
        <div className="chapter-number-wrap">
          <span className="chapter-numeral">{chapter.number}</span>
          <div className="chapter-line" />
        </div>
        <div className="chapter-meta">
          <span className="chapter-date">{chapter.date}</span>
          <h2 className="chapter-title">{chapter.title}</h2>
          <p className="chapter-caption">{chapter.caption}</p>
        </div>
      </div>

      <div className="photo-grid">
        {visible.map((photo, idx) => (
          <motion.button
            key={photo}
            className="photo-thumb"
            onClick={() => onPhotoClick(chapter, idx)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: Math.min(idx, 12) * 0.03 }}
          >
            <div className="photo-tilt" onMouseMove={applyTilt} onMouseLeave={resetTilt}>
              <LazyPhoto src={`/photos/${photo}`} alt={`${chapter.title} memory ${idx + 1}`} />
              <div className="photo-overlay"><Heart size={20} fill="currentColor" /></div>
            </div>
          </motion.button>
        ))}
      </div>

      {hasMore && (
        <div className="expand-row">
          <button className="expand-btn" onClick={() => setExpanded(e => !e)}>
            {expanded
              ? `Show less`
              : `Show all ${chapter.photos.length} photos`}
          </button>
        </div>
      )}
    </motion.section>
  );
};

export default function App() {
  const [lightbox, setLightbox] = useState(null);
  const [selected, setSelected] = useState(new Set());

  const toggleChapter = useCallback((id) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const selectAll = useCallback(() => setSelected(new Set(chapters.map(c => c.id))), []);
  const clearAll = useCallback(() => setSelected(new Set()), []);

  const visibleChapters = chapters.filter(c => selected.has(c.id));

  const openLightbox = useCallback((chapter, photoIndex) => setLightbox({ chapter, photoIndex, direction: 0 }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(() => {
    setLightbox(prev => {
      if (!prev || prev.photoIndex >= prev.chapter.photos.length - 1) return prev;
      return { ...prev, photoIndex: prev.photoIndex + 1, direction: 1 };
    });
  }, []);

  const goPrev = useCallback(() => {
    setLightbox(prev => {
      if (!prev || prev.photoIndex <= 0) return prev;
      return { ...prev, photoIndex: prev.photoIndex - 1, direction: -1 };
    });
  }, []);

  return (
    <div className="app">
      <WanderingCaricature src="/caricature/4f20e70e-b21e-422a-9e36-c28a8f3bf7a8.jpeg" delay={0} size={110} />
      <WanderingCaricature src="/caricature/846c4742-c5f6-4099-ac30-2d75295643f5.jpeg" delay={1800} size={110} />
      <section className="hero">
        <div className="hero-hearts">
          {heartData.map((style, i) => <FloatingHeart key={i} style={style} />)}
          {petalData.map((style, i) => <RosePetal key={i} style={style} />)}
        </div>
        <motion.div className="hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: 'easeOut' }}>
          <p className="hero-eyebrow">May 10th, 2026</p>
          <h1 className="hero-title">Happy Birthday,<br />Tanya</h1>
          <p className="hero-subtitle">
            Twenty-six years of being you — brilliant, warm, endlessly beautiful.<br />
            This is a small piece of what I carry with me everywhere.
          </p>
          <div className="hero-divider"><span className="hero-heart">♥</span></div>
          <p className="hero-scroll-hint">Scroll through our story</p>
          <motion.div className="hero-scroll-arrow" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>↓</motion.div>
        </motion.div>
      </section>

      <ChapterPicker selected={selected} onToggle={toggleChapter} onSelectAll={selectAll} onClearAll={clearAll} />

      <main className="timeline" id="timeline">
        <div className="timeline-spine" />
        <AnimatePresence mode="popLayout">
          {visibleChapters.map((chapter) => (
            <ChapterSection key={chapter.id} chapter={chapter} onPhotoClick={openLightbox} />
          ))}
        </AnimatePresence>
        {selected.size === 0 && (
          <motion.div className="timeline-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="empty-couple">
              <motion.span
                className="empty-figure"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >🧑</motion.span>
              <div className="empty-hearts-wrap">
                {[0, 1, 2].map(i => (
                  <motion.span
                    key={i}
                    className="empty-heart-float"
                    animate={{ y: [0, -28, -56], opacity: [0, 1, 0], x: [-8 + i * 8, -4 + i * 6, -8 + i * 8] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.65, ease: 'easeOut' }}
                  >♥</motion.span>
                ))}
              </div>
              <motion.span
                className="empty-figure"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              >👩</motion.span>
            </div>
            <p className="empty-label">Select a chapter above to begin ♥</p>
          </motion.div>
        )}
      </main>

      <footer className="site-footer">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <p className="footer-heart">♥</p>
          <p className="footer-message">925 memories. One favourite person.</p>
          <p className="footer-sign">With all my love, always.<br />~ Claude and Karthik</p>
        </motion.div>
      </footer>

      <AnimatePresence>
        {lightbox && (
          <Lightbox chapter={lightbox.chapter} photoIndex={lightbox.photoIndex} direction={lightbox.direction ?? 0} onClose={closeLightbox} onNext={goNext} onPrev={goPrev} />
        )}
      </AnimatePresence>
    </div>
  );
}
