type TrainStationList = {
    Red: string[];
    Blue: string[];
    Green: string[];
    Brown: string[];
    Orange: string[];
    Pink: string[];
    Purple: string[];
    Yellow: string[];
  };
  
  // if colors are empty, the station is closed
  const TrainStations = {
    "'Cicero'": { latitude: 41.886519, longitude: -87.744698, colors: ["Red", "Green", "Pink"] },
    "'Central Park'": { latitude: 41.853839, longitude: -87.714842, colors: ["Pink"] },
    "'Halsted'": { latitude: 41.778943, longitude: -87.644244, colors: ["Green", "Orange", "Pink"] },
    "'Cumberland'": { latitude: 41.984246, longitude: -87.838028, colors: ["Blue"] },
    "'Racine'": { latitude: 41.87592, longitude: -87.659458, colors: ["Orange"] },
    "'Paulina' (Brown)": { latitude: 41.943623, longitude: -87.670907, colors: ["Orange"] },
    "'18th'": { latitude: 41.857908, longitude: -87.669147, colors: ["Pink"] },
    "'Clark/Lake'": { latitude: 41.885737, longitude: -87.630886, colors: ["Brown", "Orange", "Pink"] },
    "'Jefferson Park'": { latitude: 41.970634, longitude: -87.760892, colors: ["Blue"] },
    "'Diversey'": { latitude: 41.932732, longitude: -87.653131, colors: ["Brown"] },
    "'Montrose'": { latitude: 41.961539, longitude: -87.743574, colors: ["Brown", "Blue"] },
    "'UIC-Halsted'": { latitude: 41.875474, longitude: -87.649707, colors: ["Green", "Orange"] },
    "'35th-Bronzeville-IIT'": { latitude: 41.831677, longitude: -87.625826, colors: ["Green", "Orange"] },
    "'Foster'": { latitude: 42.05416, longitude: -87.68356, colors: ["Purple"] },
    "'Quincy/Wells' (Brown)": { latitude: 41.878723, longitude: -87.63374, colors: ["Orange"] },
    "'Southport'": { latitude: 41.943744, longitude: -87.663619, colors: ["Brown"] },
    "'Loyola'": { latitude: 42.001073, longitude: -87.661061, colors: ["Red", "Purple"] },
    "'47th'": { latitude: 41.809209, longitude: -87.618826, colors: ["Green"] },
    "'Bryn Mawr'": { latitude: 41.983504, longitude: -87.65884, colors: ["Red"] },
    "'Harlem'": { latitude: 41.87349, longitude: -87.806961, colors: ["Blue", "Green"] },
    "'Howard'": { latitude: 42.019063, longitude: -87.672892, colors: ["Red", "Purple", "Yellow"] },
    "'Kedzie'": { latitude: 41.853964, longitude: -87.705408, colors: ["Green", "Brown", "Pink"] },
    "'King Drive'": { latitude: 41.78013, longitude: -87.615546, colors: ["Green"] },
    "'Ashland/63rd'": { latitude: 41.77886, longitude: -87.663766, colors: ["Green"] },
    "'95th/Dan Ryan'": { latitude: 41.722377, longitude: -87.624342, colors: ["Red"] },
    "'Western'": { latitude: 41.854225, longitude: -87.685129, colors: ["Blue", "Green", "Brown"] },
    "'Armitage'": { latitude: 41.918217, longitude: -87.652644, colors: ["Brown", "Purple"] },
    "'Roosevelt'": { latitude: 41.867405, longitude: -87.62659, colors: ["Red", "Green", "Orange"] },
    "'Belmont'": { latitude: 41.939751, longitude: -87.65338, colors: ["Red", "Brown", "Blue"] },
    "'54th/Cermak'": { latitude: 41.85177331, longitude: -87.75669201, colors: ["Pink"] },
    "'Dempster'": { latitude: 42.041655, longitude: -87.681602, colors: ["Purple", "Yellow"] },
    "'Fullerton'": { latitude: 41.925051, longitude: -87.652866, colors: ["Red", "Brown"] },
    "'Lawrence'": { latitude: 41.969139, longitude: -87.658493, colors: ["Red", "Green"] },
    "'Illinois Medical District'": { latitude: 41.875706, longitude: -87.673932, colors: ["Blue", "Green"] },
    "'Lake'": { latitude: 41.884809, longitude: -87.627813, colors: ["Red", "Brown"] },
    "'79th'": { latitude: 41.750419, longitude: -87.625112, colors: ["Red"] },
    "'Austin'": { latitude: 41.887293, longitude: -87.774135, colors: ["Blue", "Green"] },
    "'Clinton'": { latitude: 41.885678, longitude: -87.641782, colors: ["Blue", "Pink", "Orange"] },
    "'Wellington'": { latitude: 41.936033, longitude: -87.653266, colors: ["Red", "Brown"] },
    "'Skokie-bound'": { latitude: 42.019063, longitude: -87.672892, colors: ["Yellow"] },
    "'Oak Park'": { latitude: 41.872108, longitude: -87.791602, colors: ["Blue", "Green", "Yellow"] },
    "'Chicago'": { latitude: 41.896671, longitude: -87.628176, colors: ["Red", "Brown"] },
    "'Sedgwick' (Brown)": { latitude: 41.910409, longitude: -87.639302, colors: ["Brown", "Purple"] },
    "'Addison'": { latitude: 41.947028, longitude: -87.674642, colors: ["Red", "Blue"] },
    "'Jackson'": { latitude: 41.878153, longitude: -87.627596, colors: ["Red", "Blue", "Green"] },
    "'Monroe'": { latitude: 41.880703, longitude: -87.629378, colors: ["Red", "Blue", "Brown"] },
    "'Rockwell'": { latitude: 41.966115, longitude: -87.6941, colors: ["Brown"] },
    "'Damen'": { latitude: 41.854517, longitude: -87.675975, colors: ["Blue", "Green", "Pink"] },
    "'Pulaski'": { latitude: 41.799756, longitude: -87.724493, colors: ["Green", "Pink", "Orange", "Brown"] },
    "'Harlem/Lake'": { latitude: 41.886848, longitude: -87.803176, colors: ["Blue", "Green"] },
    "'Washington/Wabash'": { latitude: 41.88322, longitude: -87.626189, colors: ["Orange", "Pink"] },
    "'California'": { latitude: 41.854109, longitude: -87.694774, colors: ["Blue", "Green", "Pink", "Brown"] },
    "'Morse'": { latitude: 42.008362, longitude: -87.665909, colors: ["Red", "Purple"] },
    "'Grand'": { latitude: 41.891665, longitude: -87.628021, colors: ["Red", "Blue", "Brown"] },
    "'Division'": { latitude: 41.903355, longitude: -87.666496, colors: ["Red", "Blue", "Green"] },
    "'Sheridan'": { latitude: 41.953775, longitude: -87.654929, colors: ["Red", "Purple"] },
    "'Merchandise Mart'": { latitude: 41.888969, longitude: -87.633924, colors: ["Brown", "Purple"] },
    "'O'Hare'": { latitude: 41.97766526, longitude: -87.90422307, colors: ["Blue", "Green"] },
    "'43rd'": { latitude: 41.816462, longitude: -87.619021, colors: ["Green", "Purple"] },
    "'Sox-35th'": { latitude: 41.831191, longitude: -87.630636, colors: ["Green"] },
    "'Logan Square'": { latitude: 41.929728, longitude: -87.708541, colors: ["Blue", "Pink"] },
    "'Ashland'": { latitude: 41.839234, longitude: -87.665317, colors: ["Green", "Pink", "Orange"] },
    "'Irving Park'": { latitude: 41.954521, longitude: -87.674868, colors: ["Blue", "Brown", "Pink"] },
    "'Wilson'": { latitude: 41.964273, longitude: -87.657588, colors: ["Red", "Purple"] },
    "'Cermak-Chinatown'": { latitude: 41.853206, longitude: -87.630968, colors: ["Red"] },
    "'LaSalle'": { latitude: 41.875568, longitude: -87.631722, colors: ["Brown", "Orange"] },
    "'Thorndale'": { latitude: 41.990259, longitude: -87.659076, colors: ["Red", "Purple"] },
    "'Granville'": { latitude: 41.993664, longitude: -87.659202, colors: ["Red", "Purple"] },
    "'Central'": { latitude: 42.063987, longitude: -87.685617, colors: ["Green", "Purple"] },
    "'Conservatory'": { latitude: 41.884904, longitude: -87.716523, colors: ["Green"] },
    "'Noyes'": { latitude: 42.058282, longitude: -87.683337, colors: ["Red", "Purple"] },
    "'Jarvis'": { latitude: 42.015876, longitude: -87.669092, colors: ["Red"] },
    "'Davis'": { latitude: 42.04771, longitude: -87.683543, colors: ["Red", "Purple"] },
    "'51st'": { latitude: 41.80209, longitude: -87.618487, colors: ["Green", "Purple"] },
    "'Garfield'": { latitude: 41.79542, longitude: -87.631157, colors: ["Green", "Purple"] },
    "'Cermak-McCormick Place'": { latitude: 41.853115, longitude: -87.626402, colors: ["Green", "Orange"] },
    "'Polk'": { latitude: 41.871551, longitude: -87.66953, colors: ["Green", "Pink"] },
    "'35th/Archer'": { latitude: 41.829353, longitude: -87.680622, colors: ["Green", "Orange"] },
    "'South Boulevard'": { latitude: 42.027612, longitude: -87.678329, colors: ["Purple"] },
    "'Main'": { latitude: 42.033456, longitude: -87.679538, colors: ["Purple"] },
    "'Argyle'": { latitude: 41.973453, longitude: -87.65853, colors: ["Red", "Pink", "Green"] },
    "'Harold Washington Library-State/Van Buren'": { latitude: 41.876862, longitude: -87.628196, colors: ["Orange"] },
    "'Washington'": { latitude: 41.883164, longitude: -87.62944, colors: ["Red"] },
    "'Kedzie-Homan'": { latitude: 41.874341, longitude: -87.70604, colors: ["Green", "Pink"] },
    "'63rd'": { latitude: 41.780536, longitude: -87.630952, colors: ["Green", "Purple"] },
    "'Laramie'": { latitude: 41.887163, longitude: -87.754986, colors: ["Green"] },
    "'87th'": { latitude: 41.735372, longitude: -87.624717, colors: ["Green"] },
    "'Forest Park'": { latitude: 41.874257, longitude: -87.817318, colors: ["Blue", "Green"] },
    "'Rosemont'": { latitude: 41.983507, longitude: -87.859388, colors: ["Blue", "Green"] },
    "'Adams/Wabash'": { latitude: 41.879507, longitude: -87.626037, colors: ["Orange"] },
    "'Berwyn'": { latitude: 41.977984, longitude: -87.658668, colors: [] },
    "'Clark/Division'": { latitude: 41.90392, longitude: -87.631412, colors: ["Red"] },
    "'Indiana'": { latitude: 41.821732, longitude: -87.621371, colors: ["Green", "Purple"] },
    "'Kostner'": { latitude: 41.853751, longitude: -87.733258, colors: ["Pink"] },
    "'Dempster-Skokie'": { latitude: 42.038951, longitude: -87.751919, colors: ["Purple", "Yellow"] },
    "'Morgan'": { latitude: 41.885586, longitude: -87.652193, colors: ["Blue", "Pink"] },
    "'Oakton-Skokie'": { latitude: 42.02624348, longitude: -87.74722084, colors: ["Yellow"] },
    "'Cottage Grove'": { latitude: 41.780309, longitude: -87.605857, colors: ["Green", "Purple"] },
    "'Midway'": { latitude: 41.78661, longitude: -87.737875, colors: ["Orange"] },
    "'Ridgeland'": { latitude: 41.887159, longitude: -87.783661, colors: ["Green"] },
    "'Linden'": { latitude: 42.073153, longitude: -87.69073, colors: ["Purple"] },
    "'North/Clybourn'": { latitude: 41.910655, longitude: -87.649177, colors: ["Red"] },
    "'Francisco'": { latitude: 41.966046, longitude: -87.701644, colors: ["Blue", "Pink"] },
    "'LaSalle/Van Buren'": { latitude: 41.8768, longitude: -87.631739, colors: [] },
    "'69th'": { latitude: 41.768367, longitude: -87.625724, colors: ["Green"] },
    "'Washington/Wells'": { latitude: 41.882695, longitude: -87.63378, colors: ["Orange"] },
    "'Harrison'": { latitude: 41.874039, longitude: -87.627479, colors: ["Red", "Blue", "Brown"] },
    "'Kimball'": { latitude: 41.967901, longitude: -87.713065, colors: ["Brown"] },
    "'State/Lake'": { latitude: 41.88574, longitude: -87.627835, colors: ["Red"] }
};

  export { TrainStations, TrainStationList };
  