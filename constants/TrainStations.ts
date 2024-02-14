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
  
  const trainStations: TrainStationList = {
    Red: ["Howard", "Jarvis", "Morse", "Loyola", "Granville", "Thorndale", "Berwyn", "Argyle", "Lawrence", "Wilson", "Sheridan", "Addison", "Belmont", "Fullerton", "North/Clybourn", "Clark/Division", "Chicago", "Grand", "Lake", "Monroe", "Jackson", "Harrison", "Roosevelt"],
    Blue: ["O'Hare", "Rosemont", "Cumberland", "Harlem", "Jefferson Park", "Montrose", "Irving Park", "Addison", "Belmont", "Logan Square", "California", "Western", "Damen", "Division", "Chicago", "Grand", "Clark/Lake", "Washington", "Monroe", "Jackson", "LaSalle", "Clinton", "UIC-Halsted", "Racine", "Illinois Medical District", "Western", "Kedzie-Homan", "Pulaski", "Cicero", "Austin", "Oak Park", "Harlem/Lake", "Forest Park"],
    Green: ["Harlem/Lake", "Oak Park", "Ridgeland", "Austin", "Central", "Laramie", "Cicero", "Pulaski", "Conservatory-Central Park Drive", "Kedzie", "California", "Ashland", "Halsted", "Roosevelt", "Indiana", "43rd", "47th", "51st", "Garfield", "King Drive", "Cottage Grove", "East 63rd-Cottage Grove", "University", "Dorchester", "63rd Street", "Garfield", "Pershing", "McCormick Place", "35th-Bronzeville-IIT", "Indiana", "43rd", "47th", "51st", "Garfield", "King Drive", "Cottage Grove"],
    Brown: ["Kimball", "Kedzie", "Francisco", "Rockwell", "Western", "Damen", "Montrose", "Irving Park", "Addison", "Belmont", "Southport", "Wellington", "Diversey", "Fullerton", "Armitage", "Sedgwick", "Chicago", "Merchandise Mart", "Clark/Lake"],
    Orange: ["Midway", "Pulaski", "Kedzie", "Western", "35th/Archer", "Ashland", "Halsted", "Roosevelt", "Harold Washington Library-State/Van Buren", "LaSalle/Van Buren", "Quincy", "Washington/Wells", "Clark/Lake"],
    Pink: ["54th/Cermak", "Cicero", "Kostner", "Pulaski", "Central Park", "Kedzie", "California", "Western", "Damen", "18th", "Polk", "Ashland", "Morgan", "Clinton", "Clark/Lake"],
    Purple: ["Linden", "Central", "Noyes", "Foster", "Davis", "Dempster", "Main", "South Blvd", "Howard"],
    Yellow: ["Howard", 'Oakton-Skokie', 'Dempster-Skokie']
  };

  export { trainStations, TrainStationList };
  