var elements = [ hydrogen = {symbol:"H", number: 1, name:"hydrogen", radius: 0.53, vdw: 1.20, valence: 1, eleneg: 2.20, eleaff: 72.8, radioactive: false, group: 1, period: 1, member: null, wiki:"https://en.wikipedia.org/wiki/hydrogen"},
                 helium = {symbol:"He", number:2, name:"helium", radius: 0.31, vdw: 1.40, valence: 0, eleneg: null, eleaff: 0, radioactive: false, group: 18, period: 1, member: "noble gas", wiki:"https://en.wikipedia.org/wiki/helium"},
                 lithium = {symbol:"Li", number:3, name:"lithium", radius: 1.67, vdw: 1.82, valence: 1, eleneg: 0.98, eleaff: 59.6, radioactive: false, group: 1, period: 2, member: "alkali", wiki:"https://en.wikipedia.org/wiki/lithium"},
                 beryllium = {symbol:"Be", number:4, name:"beryllium", radius: 1.12, vdw: 1.53, valence: 2, eleneg: 1.57, eleaff: 0, radioactive: false, group: 2, period: 2, member: "alkaline earth", wiki:"https://en.wikipedia.org/wiki/beryllium"},
                 boron = {symbol:"B", number:5, name:"boron", radius: 0.87, vdw: 1.92, valence: 3, eleneg: 2.04, eleaff: 26.7, radioactive: false, group: 13, period: 2, member: "metalloid", wiki:"https://en.wikipedia.org/wiki/boron"},
                 carbon = {symbol:"C", number:6, name:"carbon", radius: 0.67, vdw: 1.70, valence: 4, eleneg: 2.55, eleaff: 153.9, radioactive: false, group: 14, period: 2, member: null, wiki:"https://en.wikipedia.org/wiki/carbon"},
                 nitrogen = {symbol:"N", number:7, name:"nitrogen", radius: 0.56, vdw: 1.55, valence: 3, eleneg: 3.04, eleaff: 7, radioactive: false, group: 15, period: 2, member: null, wiki:"https://en.wikipedia.org/wiki/nitrogen"},
                 oxygen = {symbol:"O", number:8, name:"oxygen", radius: 0.48, vdw: 1.52, valence: 2, eleneg: 3.44, eleaff: 141, radioactive: false, group: 16, period: 2, member: null, wiki:"https://en.wikipedia.org/wiki/oxygen"},
                 fluorine = {symbol:"F", number:9, name:"fluorine", radius: 0.42, vdw: 1.47, valence: 1, eleneg: 3.98, eleaff: 328, radioactive: false, group: 17, period: 2, member: "halogen", wiki:"https://en.wikipedia.org/wiki/fluorine"},
                 neon = {symbol:"Ne", number:10, name:"neon", radius: 0.38, vdw: 1.54, valence: 0, eleneg: null, eleaff: 0, radioactive: false, group: 18, period: 2, member: "noble gas", wiki:"https://en.wikipedia.org/wiki/neon"},
                 sodium = {symbol:"Na", number:11, name:"sodium", radius: 1.90, vdw: 2.27, valence: 1, eleneg: 0.93, eleaff: 52.8, radioactive: false, group: 1, period: 3, member: "alkali", wiki:"https://en.wikipedia.org/wiki/sodium"},
                 magnesium = {symbol:"Mg", number:12, name:"magnesium", radius: 1.45, vdw: 1.73, valence: 2, eleneg: 1.31, eleaff: 0, radioactive: false, group: 2, period: 3, member: "alkaline earth", wiki:"https://en.wikipedia.org/wiki/magnesium"},
                 aluminum = {symbol:"Al", number:13, name:"aluminum", radius: 1.18, vdw: 1.84, valence: 3, eleneg: 1.61, eleaff: 42.5, radioactive: false, group: 13, period: 3, member: "poor metal", wiki:"https://en.wikipedia.org/wiki/aluminum"},
                 silicon = {symbol:"Si", number:14, name:"silicon", radius: 1.11, vdw: 2.10, valence: 4, eleneg: 1.90, eleaff: 133.6, radioactive: false, group: 14, period: 3, member: "metalloid", wiki:"https://en.wikipedia.org/wiki/silicon"},
                 phosphorus = {symbol:"P", number:15, name:"phosphorus", radius: 0.98, vdw: 1.80, valence: 5, eleneg: 2.19, eleaff: 72, radioactive: false, group: 15, period: 3, member: null, wiki:"https://en.wikipedia.org/wiki/phosphorus"},
                 sulfur = {symbol:"S", number:16, name:"sulfur", radius: 0.88, vdw: 1.80, valence: 6, eleneg: 2.58, eleaff: 200, radioactive: false, group: 16, period: 3, member: null, wiki:"https://en.wikipedia.org/wiki/sulfur"},
                 chlorine = {symbol:"Cl", number:17, name:"chlorine", radius: 0.79, vdw: 1.75, valence: 5, eleneg: 3.16, eleaff: 349, radioactive: false, group: 17, period: 3, member: "halogen", wiki:"https://en.wikipedia.org/wiki/chlorine"},
                 argon = {symbol:"Ar", number:18, name:"argon", radius: 0.71, vdw: 1.88, valence: 0, eleneg: null, eleaff: 0, radioactive: false, group: 18, period: 3, member: "noble gas", wiki:"https://en.wikipedia.org/wiki/argon"},
                 potassium = {symbol:"K", number:19, name:"potassium", radius: 2.43, vdw: 2.75, valence: 1, eleneg: 0.82, eleaff: 48.4, radioactive: false, group: 1, period: 4, member: "alkali", wiki:"https://en.wikipedia.org/wiki/potassium"},
                 calcium = {symbol:"Ca", number:20, name:"calcium", radius: 1.94, vdw: 2.31, valence: 2, eleneg: 1.00, eleaff: 2.37, radioactive: false, group: 2, period: 4, member: "alkaline earth", wiki:"https://en.wikipedia.org/wiki/calcium"},
                 scandium = {symbol:"Sc", number:21, name:"scandium", radius: 1.84, vdw: 2.11, valence: 3, eleneg: 1.36, eleaff: 18.1, radioactive: false, group: 3, period: 4, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/scandium"},
                 titanium = {symbol:"Ti", number:22, name:"titanium", radius: 1.76, vdw: 0, valence: 4, eleneg: 1.54, eleaff: 7.6, radioactive: false, group: 4, period: 4, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/titanium"},
                 vanadium = {symbol:"V", number:23, name:"vanadium", radius: 1.71, vdw: 0, valence: 5, eleneg: 1.63, eleaff: 50.6, radioactive: false, group: 5, period: 4, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/vanadium"},
                 chromium = {symbol:"Cr", number:24, name:"chromium", radius: 1.66, vdw: 0, valence: 6, eleneg: 1.66, eleaff: 64.3, radioactive: false, group: 6, period: 4, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/chromium"},
                 manganese = {symbol:"Mn", number:25, name:"manganese", radius: 1.61, vdw: 0, valence: 4, eleneg: 1.55, eleaff: 0, radioactive: false, group: 7, period: 4, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/manganese"},
                 iron = {symbol:"Fe", number:26, name:"iron", radius: 1.56, vdw: null, valence: 3, eleneg: 1.83, eleaff: 15.7, radioactive: false, group: 8, period: 4, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/iron"},
                 cobalt = {symbol:"Co", number:27, name:"cobalt", radius: 1.52, vdw: null, valence: 4, eleneg: 1.88, eleaff: 63.7, radioactive: false, group: 9, period: 4, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/cobalt"},
                 nickel = {symbol:"Ni", number:28, name:"nickel", radius: 1.49, vdw: 1.63, valence: 2, eleneg: 1.91, eleaff: 112, radioactive: false, group: 10, period: 4, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/nickel"},
                 copper = {symbol:"Cu", number:29, name:"copper", radius: 1.45, vdw: 1.40, valence: 2, eleneg: 1.90, eleaff: 118.4, radioactive: false, group: 11, period: 4, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/copper"},
                 zinc = {symbol:"Zn", number:30, name:"zinc", radius: 1.42, vdw: 1.39, valence: 2, eleneg: 1.65, eleaff: 0, radioactive: false, group: 12, period: 4, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/zinc"},
                 gallium = {symbol:"Ga", number:31, name:"gallium", radius: 1.36, vdw: 1.87, valence: 3, eleneg: 1.81, eleaff: 28.9, radioactive: false, group: 13, period: 4, member: "poor metal", wiki:"https://en.wikipedia.org/wiki/gallium"},
                 germanium = {symbol:"Ge", number:32, name:"germanium", radius: 1.25, vdw: 2.11, valence: 4, eleneg: 2.01, eleaff: 119, radioactive: false, group: 14, period: 4, member: "metalloid", wiki:"https://en.wikipedia.org/wiki/germanium"},
                 arsenic = {symbol:"As", number:33, name:"arsenic", radius: 1.14, vdw: 1.85, valence: 5, eleneg: 2.18, eleaff: 78, radioactive: false, group: 15, period: 4, member: "metalloid", wiki:"https://en.wikipedia.org/wiki/arsenic"},
                 selenium = {symbol:"Se", number:34, name:"selenium", radius: 1.03, vdw: 1.90, valence: 6, eleneg: 2.55, eleaff: 195, radioactive: false, group: 16, period: 4, member: null, wiki:"https://en.wikipedia.org/wiki/selenium"},
                 bromine = {symbol:"Br", number:35, name:"bromine", radius: 0.94, vdw: 1.85, valence: 7, eleneg: 2.96, eleaff: 324.6, radioactive: false, group: 17, period: 4, member: "halogen", wiki:"https://en.wikipedia.org/wiki/bromine"},
                 krypton = {symbol:"Kr", number:36, name:"krypton", radius: 0.88, vdw: 2.02, valence: 2, eleneg: 3.00, eleaff: 0, radioactive: false, group: 18, period: 4, member: "noble gas", wiki:"https://en.wikipedia.org/wiki/krypton"},
                 rubidium = {symbol:"Rb", number:37, name:"rubidium", radius: 2.65, vdw: 3.03, valence: 1, eleneg: 0.82, eleaff: 46.9, radioactive: false, group: 1, period: 5, member: "alkali", wiki:"https://en.wikipedia.org/wiki/rubidium"},
                 strontium = {symbol:"Sr", number:38, name:"strontium", radius: 2.19, vdw: 2.49, valence: 2, eleneg: 0.95, eleaff: 5.03, radioactive: false, group: 2, period: 5, member: "alkaline earth", wiki:"https://en.wikipedia.org/wiki/strontium"},
                 yttrium = {symbol:"Y", number:39, name:"yttrium", radius: 2.12, vdw: null, valence: 3, eleneg: 1.22, eleaff: 29.6, radioactive: false, group: 3, period: 5, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/yttrium"},
                 zirconium = {symbol:"Zr", number:40, name:"zirconium", radius: 2.06, valence: 4, eleneg: 1.33, eleaff: 41.1, radioactive: false, group: 4, period: 5, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/zirconium"},
                 niobium = {symbol:"Nb", number:41, name:"niobium", radius: 1.98, vdw: null, valence: 5, eleneg: 1.60, eleaff: 86.1, radioactive: false, group: 5, period: 5, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/niobium"},
                 molybdenum = {symbol:"Mo", number:42, name:"molybdenum", radius: 1.90, vdw: null, valence: 6, eleneg: 2.16, eleaff: 71.9, radioactive: false, group: 6, period: 5, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/molybdenum"},
                 technetium = {symbol:"Tc", number:43, name:"technetium", radius: 1.83, vdw: null, valence: 7, eleneg: 1.90, eleaff: 53, radioactive: true, group: 7, period: 5, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/technetium"},
                 ruthenium = {symbol:"Ru", number:44, name:"ruthenium", radius: 1.78, vdw: null, valence: 6, eleneg: 2.20, eleaff: 101.3, radioactive: false, group: 8, period: 5, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/ruthenium"},
                 rhodium = {symbol:"Rh", number:45, name:"rhodium", radius: 1.73, vdw: null, valence: 6, eleneg: 2.28, eleaff: 109.7, radioactive: false, group: 9, period: 5, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/rhodium"},
                 palladium = {symbol:"Pd", number:46, name:"palladium", radius: 1.69, vdw: 1.63, valence: 4, eleneg: 2.20, eleaff: 53.7, radioactive: false, group: 10, period: 5, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/palladium"},
                 silver = {symbol:"Ag", number:47, name:"silver", radius: 1.65, vdw: 1.72, valence: 2, eleneg: 1.93, eleaff: 125.6, radioactive: false, group: 11, period: 5, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/silver"},
                 cadmium = {symbol:"Cd", number:48, name:"cadmium", radius: 1.61, vdw: 1.58, valence: 2, eleneg: 1.69, eleaff: 0, radioactive: false, group: 12, period: 5, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/cadmium"},
                 indium = {symbol:"In", number:49, name:"indium", radius: 1.56, vdw: 1.93, valence: 3, eleneg: 1.69, eleaff: 28.9, radioactive: false, group: 13, period: 5, member: "poor metal", wiki:"https://en.wikipedia.org/wiki/indium"},
                 tin = {symbol:"Sn", number:50, name:"tin", radius: 1.45, vdw: 2.17, valence: 4, eleneg: 1.96, eleaff: 107.3, radioactive: false, group: 14, period: 5, member: "poor metal", wiki:"https://en.wikipedia.org/wiki/tin"},
                 antimony = {symbol:"Sb", number:51, name:"antimony", radius: 1.33, vdw: 2.06, valence: 5, eleneg: 2.05, eleaff: 103.2, radioactive: false, group: 15, period: 5, member: "metalloid", wiki:"https://en.wikipedia.org/wiki/antimony"},
                 tellurium = {symbol:"Te", number:52, name:"tellurium", radius: 1.23, vdw: 2.06, valence: 6, eleneg: 2.10, eleaff: 190.2, radioactive: false, group: 16, period: 5, member: "metalloid", wiki:"https://en.wikipedia.org/wiki/tellurium"},
                 iodine = {symbol:"I", number:53, name:"iodine", radius: 1.15, vdw: 1.98, valence: 7, eleneg: 2.66, eleaff: 295.2, radioactive: false, group: 17, period: 5, member: "halogen", wiki:"https://en.wikipedia.org/wiki/iodine"},
                 xenon = {symbol:"Xe", number:54, name:"xenon", radius: 1.08, vdw: 2.16, valence: 6, eleneg: 2.60, eleaff: 0, radioactive: false, group: 18, period: 5, member: "noble gas", wiki:"https://en.wikipedia.org/wiki/xenon"},
                 cesium = {symbol:"Cs", number:55, name:"cesium", radius: 2.98, vdw: 3.43, valence: 1, eleneg: 0.79, eleaff: 45.5, radioactive: false, group: 1, period: 6, member: "alkali", wiki:"https://en.wikipedia.org/wiki/cesium"},
                 barium = {symbol:"Ba", number:56, name:"barium", radius: 2.53, vdw: 2.68, valence: 2, eleneg: 0.89, eleaff: 13.95, radioactive: false, group: 2, period: 6, member: "alkaline earth", wiki:"https://en.wikipedia.org/wiki/barium"},
                 lanthanum = {symbol:"La", number:57, name:"lanthanum", radius: null, vdw: null, valence: 3, eleneg: 1.10, eleaff: 48, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/lanthanum"},
                 cerium = {symbol:"Ce", number:58, name:"cerium", radius: null, vdw: null, valence: 4, eleneg: 1.12, eleaff: 50, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/cerium"},
                 praseodymium = {symbol:"Pr", number:59, name:"praseodymium", radius: 2.47, vdw: null, valence: 4, eleneg: 1.13, eleaff: 50, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/praseodymium"},
                 neodymium = {symbol:"Nd", number:60, name:"neodymium", radius: 2.06, vdw: null, valence: 3, eleneg: 1.14, eleaff: 50, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/neodymium"},
                 promethium = {symbol:"Pm", number:61, name:"promethium", radius: 2.05, vdw: null, valence: 3, eleneg: null, eleaff: 50, radioactive: true, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/promethium"},
                 samarium = {symbol:"Sm", number:62, name:"samarium", radius: 2.38, vdw: null, valence: 3, eleneg: 1.17, eleaff: 50, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/samarium"},
                 europium = {symbol:"Eu", number:63, name:"europium", radius: 2.31, vdw: null, valence: 3, eleneg: null, eleaff: 50, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/europium"},
                 gadolinium = {symbol:"Gd", number:64, name:"gadolinium", radius: 2.33, vdw: null, valence: 3, eleneg: 1.20, eleaff: 50, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/gadolinium"},
                 terbium = {symbol:"Tb", number:65, name:"terbium", radius: 2.25, vdw: null, valence: 3, eleneg: null, eleaff: 50, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/terbium"},
                 dysprosium = {symbol:"Dy", number:66, name:"dysprosium", radius: 2.28, vdw: null, valence: 3, eleneg: 1.22, eleaff: 50, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/dysprosium"},
                 holmium = {symbol:"Ho", number:67, name:"holmium", radius: 2.26, vdw: null, valence: 3, eleneg: 1.23, eleaff: 50, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/holmium"},
                 erbium = {symbol:"Er", number:68, name:"erbium", radius: 2.26, vdw: null, valence: 3, eleneg: 1.24, eleaff: 50, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/erbium"},
                 thulium = {symbol:"Tm", number:69, name:"thulium", radius: 2.22, vdw: null, valence: 3, eleneg: 1.25, eleaff: 50, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/thulium"},
                 ytterbium = {symbol:"Yb", number:70, name:"ytterbium", radius: 2.22, vdw: null, valence: 3, eleneg: null, eleaff: 50, radioactive: false, group: null, period: 6, member: "lanthanide", wiki:"https://en.wikipedia.org/wiki/ytterbium"},
                 lutetium = {symbol:"Lu", number:71, name:"lutetium", radius: 2.17, vdw: null, valence: 3, eleneg: 1.27, eleaff: 50, radioactive: false, group: 3, period: 6, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/lutetium"},
                 hafnium = {symbol:"Hf", number:72, name:"hafnium", radius: 2.08, vdw: null, valence: 4, eleneg: 1.30, eleaff: 0, radioactive: false, group: 4, period: 6, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/hafnium"},
                 tantalum = {symbol:"Ta", number:73, name:"tantalum", radius: 2.00, vdw: null, valence: 5, eleneg: 1.50, eleaff: 31, radioactive: false, group: 5, period: 6, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/tantalum"},
                 tungsten = {symbol:"W", number:74, name:"tungsten", radius: 1.93, vdw: null, valence: 6, eleneg: 2.36, eleaff: 78.6, radioactive: false, group: 6, period: 6, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/tungsten"},
                 rhenium = {symbol:"Re", number:75, name:"rhenium", radius: 1.88, vdw: null, valence: 7, eleneg: 1.90, eleaff: 14.5, radioactive: false, group: 7, period: 6, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/rhenium"},
                 osmium = {symbol:"Os", number:76, name:"osmium", radius: 1.85, vdw: null, valence: 6, eleneg: 2.20, eleaff: 106.1, radioactive: false, group: 8, period: 6, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/osmium"},
                 iridium = {symbol:"Ir", number:77, name:"iridium", radius: 1.80, vdw: null, valence: 6, eleneg: 2.28, eleaff: 151, radioactive: false, group: 9, period: 6, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/iridium"},
                 platinum = {symbol:"Pt", number:78, name:"platinum", radius: 1.77, vdw: 1.75, valence: 6, eleneg: 2.54, eleaff: 205.3, radioactive: false, group: 10, period: 6, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/platinum"},
                 gold = {symbol:"Au", number:79, name:"gold", radius: 1.74, vdw: 1.66, valence: 5, eleneg: 2.00, eleaff: 222.8, radioactive: false, group: 11, period: 6, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/gold"},
                 mercury = {symbol:"Hg", number:80, name:"mercury", radius: 1.71, vdw: 1.55, valence: 2, eleneg: 1.62, eleaff: 0, radioactive: false, group: 12, period: 6, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/mercury"},
                 thallium = {symbol:"Tl", number:81, name:"thallium", radius: 1.56, vdw: 1.96, valence: 3, eleneg: 1.62, eleaff: 19.2, radioactive: false, group: 13, period: 6, member: "poor metal", wiki:"https://en.wikipedia.org/wiki/thallium"},
                 lead = {symbol:"Pb", number:82, name:"lead", radius: 1.54, vdw: 2.02, valence: 4, eleneg: 2.33, eleaff: 35.1, radioactive: false, group: 14, period: 6, member: "poor metal", wiki:"https://en.wikipedia.org/wiki/lead"},
                 bismuth = {symbol:"Bi", number:83, name:"bismuth", radius: 1.43, vdw: 2.07, valence: 5, eleneg: 2.02, eleaff: 91.2, radioactive: false, group: 15, period: 6, member: "poor metal", wiki:"https://en.wikipedia.org/wiki/bismuth"},
                 polonium = {symbol:"Po", number:84, name:"polonium", radius: 1.35, vdw: 1.97, valence: 6, eleneg: 2.00, eleaff: 183.3, radioactive: true, group: 16, period: 6, member: "metalloid", wiki:"https://en.wikipedia.org/wiki/polonium"},
                 astatine = {symbol:"At", number:85, name:"astatine", radius: 1.27, vdw: 2.02, valence: 7, eleneg: 2.20, eleaff: 270.1, radioactive: true, group: 17, period: 6, member: "halogen", wiki:"https://en.wikipedia.org/wiki/astatine"},
                 radon = {symbol:"Rn", number:86, name:"radon", radius: 1.20, vdw: 2.20, valence: 6, eleneg: null, eleaff: 0, radioactive: true, group: 18, period: 6, member: "noble gas", wiki:"https://en.wikipedia.org/wiki/radon"},
                 francium = {symbol:"Fr", number:87, name:"francium", radius: null, vdw: 3.48, valence: 3, eleneg: null, eleaff: null, radioactive: true, group: 1, period: 7, member: "alkali", wiki:"https://en.wikipedia.org/wiki/francium"},
                 radium = {symbol:"Ra", number:88, name:"radium", radius: null, vdw: 2.83, valence: 2, eleneg: 0.90, eleaff: null, radioactive: true, group: 2, period: 7, member: "alkaline earth", wiki:"https://en.wikipedia.org/wiki/radium"},
                 actinium = {symbol:"Ac", number:89, name:"actinium", radius: null, vdw: null, valence: 3, eleneg: 1.10, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/actinium"},
                 thorium = {symbol:"Th", number:90, name:"thorium", radius: null, vdw: null, valence: 4, eleneg: 1.30, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/thorium"},
                 protactinium = {symbol:"Pa", number:91, name:"protactinium", radius: null, vdw: null, valence: 5, eleneg: 1.50, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide""actinide", wiki:"https://en.wikipedia.org/wiki/protactinium"},
                 uranium = {symbol:"U", number:92, name:"uranium", radius: null, vdw: 1.86, valence: 6, eleneg: 1.38, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/uranium"},
                 neptunium = {symbol:"Np", number:93, name:"neptunium", radius: null, vdw: 0, valence: 6, eleneg: 1.36, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/neptunium"},
                 plutonium = {symbol:"Pu", number:94, name:"plutonium", radius: null, vdw: null, valence: 6, eleneg: 1.28, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/plutonium"},
                 americium = {symbol:"Am", number:95, name:"americium", radius: null, vdw: null, valence: 4, eleneg: 1.30, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/americium"},
                 curium = {symbol:"Cm", number:96, name:"curium", radius: null, vdw: null, valence: 4, eleneg: 1.30, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/curium"},
                 berkelium = {symbol:"Bk", number:97, name:"berkelium", radius: null, vdw: null, valence: 4, eleneg: 1.30, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/berkelium"},
                 californium = {symbol:"Cf", number:98, name:"californium", radius: null, vdw: null, valence: 4, eleneg: 1.30, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/californium"},
                 einsteinium = {symbol:"Es", number:99, name:"einsteinium", radius: null, vdw: null, valence: 4, eleneg: 1.30, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/einsteinium"},
                 fermium = {symbol:"Fm", number:100, name:"fermium", radius: null, vdw: null, valence: 3, eleneg: 1.30, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/fermium"},
                 mendelevium = {symbol:"Md", number:101, name:"mendelevium", radius: null, vdw: null, valence: 3, eleneg: 1.30, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/mendelevium"},
                 nobelium = {symbol:"No", number:102, name:"nobelium", radius: null, vdw: null, valence: 3, eleneg: 1.30, eleaff: null, radioactive: true, group: null, period: 7, member: "actinide", wiki:"https://en.wikipedia.org/wiki/nobelium"},
                 lawrencium = {symbol:"Lr", number:103, name:"lawrencium", radius: null, vdw: null, valence: 3, eleneg: null, eleaff: null, radioactive: true, group: 3, period: 7, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/lawrencium"},
                 rutherfordium = {symbol:"Rf", number:104, name:"rutherfordium", radius: null, vdw: null, valence: 4, eleneg: null, eleaff: null, radioactive: true, group: 4, period: 7, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/rutherfordium"},
                 dubnium = {symbol:"Db", number:105, name:"dubnium", radius: null, vdw: null, valence: 5, eleneg: null, eleaff: null, radioactive: true, group: 5, period: 7, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/dubnium"},
                 seaborgium = {symbol:"Sg", number:106, name:"seaborgium", radius: null, vdw: null, valence: 6, eleneg: null, eleaff: null, radioactive: true, group: 6, period: 7, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/seaborgium"},
                 bohrium = {symbol:"Bh", number:107, name:"bohrium", radius: null, vdw: null, valence: 7, eleneg: null, eleaff: null, radioactive: true, group: 7, period: 7, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/bohrium"},
                 hassium = {symbol:"Hs", number:108, name:"hassium", radius: null, vdw: null, valence: null, eleneg: null, eleaff: null, radioactive: true, group: 8, period: 7, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/hassium"},
                 meitnerium = {symbol:"Mt", number:109, name:"meitnerium", radius: null, vdw: null, valence: null, eleneg: null, eleaff: null, radioactive: true, group: 9, period: 7, member: "transition metal", wiki:"https://en.wikipedia.org/wiki/meitnerium"}
               ];