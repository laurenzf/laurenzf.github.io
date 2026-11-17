/* =====================================================================
   content.js  ·  EVERYTHING YOU EDIT LIVES IN THIS FILE.
   index.html is the engine. You should not need to open it.

   The rules that keep it from breaking:
     - Text goes inside "double quotes". Every item in a list ends with a comma, except the last.
     - To use a quote mark inside text, write \" instead of ".
     - If the page goes blank after an edit, you dropped a comma, quote, or bracket near what you just changed.

   ADD A PHOTO to a project: put the file in the images folder, then add to that project's images list:
       { src: "images/gimbal.jpg", alt: "what the photo shows", caption: "short caption" },
   ADD A CAD DRAWING: put the PNG or JPG in images/drawings (and the PDF in files, if you have one), then add
   to that project's drawings list:
       { src: "images/drawings/nozzle.png", title: "Nozzle", number: "LF-001", rev: "A", pdf: "files/nozzle.pdf" },
     number, rev, and pdf are optional.
   ADD A VIDEO: { video: "https://youtu.be/...", caption: "what it shows" } in an images list.
   ADD A PROJECT: copy a whole { ... } block in FEATURED (big projects that open a full viewer) or CARDS
   (small builds), paste it after the comma of the previous block, and change the text. Give it a new id.
   NUMBER LABELS (third item in a stat or spec): "designed", "simulated", "estimated", "tested", "planned", or null.
   ===================================================================== */
const SITE = {
  name: "Laurenz Felix",
  eyebrow: "Chemical Engineering · UC Irvine · Class of 2028",
  headline: "Laurenz Felix",
  lede: "I study <b>chemical engineering specializing in Energy and Sustainability, minoring in materials science</b> at UC Irvine, and I'm working toward a career in <b>space</b>.",
  secondHeadline: "Chemistry first. Then hardware.",
  secondLede: "I research the chemistry behind chipmaking, and I build <b>thrusters, rockets, and the rigs to test them</b>. The question I keep asking is what a part is made of and why.",
  now: "Finished my PFAS research paper and presenting it Nov 23, working through the valve trade study for our CubeSat thruster, and assembling my Level 1 rocket.",
  resumeUrl: "files/Laurenz_Felix_Resume.pdf",  // the PDF lives in the files folder
  showTeamDetails: false,                        // flip to true once the SEDS lead approves sharing trade study results
  showPlaceholders: true,                        // empty photo and drawing slots; set false to hide them
  earthMap: "images/earth-cute.png",            // the stylized Earth at the bottom
  moonMap: "images/moon-2k.jpg",                 // NASA LRO color map (public domain)
  moonMapSmall: "images/moon-1k.jpg",            // lighter copy for phones
  home: { name: "Irvine, California", lat: 33.68, lon: -117.83 }   // the pin on the Earth at the bottom
};

/* Section headings: [small label, big heading, optional line under it] */
const SECTIONS = {
  projects: ["Projects", "Hardware I have designed, built, and tested", "Three case studies, then smaller builds. Open one for the full story, photos, and drawings. Every number says whether it was designed, simulated, estimated, or tested."],
  more: ["More builds"],
  about: ["About", "It started with a book fair"],
  skills: ["Skills", "Tools I can talk through in an interview"],
  credentials: ["Licenses, training, and teams"],
  leadership: ["Leadership", "Outreach and community"],
  contact: ["Contact", "Get in touch"]
};

const NAV = [["projects", "Projects"], ["research", "Research"], ["about", "About"], ["skills", "Skills"], ["leadership", "Leadership"], ["contact", "Contact"]];

const RESEARCH = {
  label: "Research",
  title: "Why chipmaking still depends on forever chemicals",
  role: "Irvine Hacker Fab · Semiconductor Fabrication Research Intern · Oct 2026 to present",
  status: "Paper complete · Presenting Nov 23",
  paperUrl: "files/Felix_PFAS_Photoresists_Paper.pdf",
  paperTitle: "Forever Chemicals in Chipmaking: Can Green Chemistry Replace PFAS in Photoresists?",
  body: [
    "I am one of 20 students in a one-quarter semiconductor fabrication internship led by a UCI professor. We learn the fab process, pick a topic, and research it ourselves.",
    "My topic is PFAS in photoresists: why the resists used in lithography rely on them, and whether greener chemistry can replace them. I wrote an 11-page literature review that compares the options using four of the 12 Principles of Green Chemistry. This is literature research, not lab work.",
    "I got into this through lithography. ASML builds machines that cost hundreds of millions of dollars, and I wanted to know what goes on inside them. That is how I found out the resists still depend on PFAS, even though we know it is harmful, because the world keeps needing more chips. It surprised me that a field this advanced is so far behind on this one thing.",
    "It is also personal. The Philippines, where my parents are from, is building up its chip industry, and I care about who ends up living next to that chemistry."
  ],
  findings: [
    "Fluorine makes the photoacid generator's acid strong, keeps it from evaporating, and keeps it from spreading and blurring the pattern. That is why it is hard to replace.",
    "About 0.1% of the PFAS used in lithography stays in the chip. Almost all of the rest ends up in wastewater or solvent waste, according to an industry mass-balance model.",
    "Anti-reflective top coatings, not the acid generators, cause well over 95% of the PFAS that reaches wastewater, so they are the easiest place to start.",
    "Fluorine-free acid generators exist, but the same one can beat a fluorinated version in one resist recipe and lose in another, so each one has to be tuned.",
    "The resist in the shared Hacker Fab patterning procedure is an older DNQ-novolac type with no acid generator, and its Safety Data Sheet lists no fluorinated ingredients."
  ],
  conclusion: "My take: phase PFAS out of resists gradually, starting with anti-reflective coatings, and swap acid generators one resist type at a time once a replacement is shown to be safer, not just PFAS-free.",
  facts: [
    ["Paper", "11 pages, 13 sources, 6 original figures"],
    ["Presentation", "A 3-minute talk to industry professionals, UCI faculty, and graduate researchers on Nov 23, 2026."],
    ["Method", "Literature review using four of the 12 Principles of Green Chemistry: prevention, safer chemicals, catalysis, and design for degradation."]
  ],
  figures: [
    { src: "images/pfas-fate.png", alt: "Bar chart of where photolithography PFAS ends up in 2024: wastewater 48.2%, incinerated solvent waste 47.8%, collected aqueous waste 2.8%, solid waste 0.5%, dry etching 0.5%, stays in the chip 0.1%.", caption: "Where the PFAS used in lithography ends up, from Dammel and Speed's 2024 mass-balance model. My chart." },
    { src: "images/pfas-resist-process.png", alt: "Four-step diagram of a chemically amplified resist: UV exposure through a mask, acid forms in the exposed area, post-exposure bake, and develop.", caption: "How a chemically amplified resist works. The acid generator in step 2 is where fluorine usually shows up. My diagram." },
    { src: "images/pfas-timeline.png", alt: "Timeline from 2011 to end of 2026: IBM fluorine-free PAG patent 2011, 2022 review, 2023 EU group restriction proposal, 2025 PFAS-free PAG and top coat in production, March 2026 EU committee opinion, final opinion expected end of 2026.", caption: "PFAS-free resist work alongside the EU restriction. My diagram." }
  ]
};

const FEATURED = [
  {
    id: "thruster",
    title: "Cold-gas thruster for a 12U CubeSat",
    meta: "Drag Sail Deorbit CubeSat · SEDS UCI · Propulsion Engineer · Oct 2026 to present",
    status: "In progress", done: false,
    summary: "A nitrogen cold-gas reaction control system for a student-built satellite. I co-design the thruster in CAD with a teammate who leads the nozzle geometry, and I own the solenoid valves and pressure transducers.",
    stats: [
      ["~76 s", "Vacuum specific impulse, ideal-gas calculation", "designed"],
      ["0.20 to 0.28 mm", "Nozzle throat for 75 mN at 200 to 100 psi", "designed"],
      ["50 mN to 1 N", "Thrust levels run in SolidWorks Flow Simulation", "simulated"]
    ],
    blocks: [
      { h: "My part", list: [
        "Co-designing the thruster in CAD and running flow simulations to study how the nozzle expands the gas.",
        "Selecting the solenoid valves and pressure transducers through a trade study. I score each option on propellant compatibility, pressure rating, flow, response time, leak rate, cycle life, power, mass, temperature range, flight heritage, cost, and lead time.",
        "Writing the requirements for the thruster assembly. Several values are still open.",
        "Sizing the feed lines. For nitrogen at 20 °C with a 30 m/s velocity limit, the minimum inner diameter per thruster comes out to 0.82, 0.67, and 0.58 mm at 100, 150, and 200 psi (designed)."
      ]},
      { h: "The materials question", p: "The hardest tradeoff so far is the valve seal. One seal material holds much higher pressure but only works over a narrow temperature range. The other handles more heat at a lower pressure rating. Which one wins depends on the feed pressure the team settles on." },
      { h: "What I learned", p: "I came in confident that I understood thrusters from reading about rocket engines. A cold-gas system turned out to be its own steep learning curve." },
      { h: "Still open", p: "Feed pressure, thruster count, and layout are under study by the team. The numbers above are design calculations, not measurements." }
    ],
    teamOnly: [
      "Valve trade study result: the Lee IEP solenoid valve is the baseline pick at 77.5%. It responds in about 0.5 ms and has CubeSat heritage.",
      "Transducer trade study result: the Bradford mini-SAPT scored highest at 76%."
    ],
    slots: ["Thruster CAD", "Flow simulation plot"],
    images: [],
    drawings: []
  },
  {
    id: "tvc",
    title: "Thrust vector control rocket",
    meta: "Personal project · Jun 2026 to present",
    status: "In design", done: false,
    summary: "A rocket that steers by gimbaling its motor, with self-landing as the long-term goal. Nothing is built yet. So far I have simulations and the avionics parts on hand.",
    stats: [
      ["Estes F15", "Motor the design is sized around", "designed"],
      ["2-axis", "Servo gimbal with metal-gear servos", "planned"],
      ["Step 1", "Static-fire rig with a 50 mm fan as a reusable stand-in thruster", "planned"]
    ],
    blocks: [
      { h: "The plan", list: [
        "Build a static-fire gimbal rig first, using a 50 mm electric ducted fan in place of a rocket motor so I can test the gimbal again and again.",
        "Fly thrust vector control on an Estes F15.",
        "Work toward a rocket that lands itself."
      ]},
      { h: "The materials angle", p: "The gimbal mount sits right next to the exhaust, so I am planning a thermal and materials study of it: a slug calorimeter, material coupons, exhaust modeling in RocketCEA, and heat shielding for the mount. No results yet." },
      { h: "Why this project", quote: "I just think making things fly is cool. I love drones and planes, and rockets are the next step. It is a little harder than a Level 1 certification, and I want to recreate something close to the frontier of today, something we would not have imagined 20 years ago." }
    ],
    links: [["Project repo on GitHub", "https://github.com/laurenzf/self-leveling-rocket"]],
    slots: ["Gimbal CAD", "Video coming soon"],
    images: [],
    drawings: []
  },
  {
    id: "rover",
    title: "Fire-extinguishing rover",
    meta: "FUSION Engineering Project · Mechanical Subteam · Jan to Jun 2026",
    status: "Finished", done: true,
    summary: "A rover that drives over rough terrain and puts out fires. On a 16-person team (14 members and 2 directors), I was on the 6-person mechanical subteam, where a teammate and I designed the water delivery system: the pump, a two-axis nozzle gimbal, and a gravity-fed tank of about 400 mL.",
    stats: [
      ["~80%+", "Target accuracy, best of all teams", "tested"],
      ["~2 min", "Course time. The next team took 4 min", "tested"],
      ["2 awards", "Best Overall Project and Sponsor's Choice at FUSIONCON", null]
    ],
    blocks: [
      { h: "My part", list: [
        "Sketched the concept, worked out how the pieces fit together, and made the first CAD. My teammate cleaned up and refined the models.",
        "Proposed the two-axis gimbal. The chassis was a rocker-bogie, like the Mars rovers, so the body tilted on rough ground. I borrowed the idea from camera stabilizers to keep the stream on target.",
        "Chose a gravity-fed tank to take load off the motors.",
        "Wrote Python calculations to estimate stream velocity, range, and height from the specs of the pump we bought (estimated)."
      ]},
      { h: "The build, from our poster", list: [
        "PVC pipe frame with printed PETG connectors and wood decks, 17.3 x 17 x 15 in.",
        "12.52 lb without water.",
        "Build cost: $277.62 for mechanical parts and $378.05 for electrical hardware."
      ]},
      { h: "What went wrong", p: "Late in the build, the water system leaked from almost every joint, and the water shorted the electrical team's PCB. We had spares, but the leak had to be fixed first. I sealed every tube joint with silicone and sanded the printed nozzle smooth so drops stopped clinging to the tip and dripping. We added a drip tray under the nozzle and covered the PCB. Our plastic-gear servos also burned out, so we upgraded to metal-gear servos and I redesigned their housings in CAD. After a lot of testing, the rover ran clean at competition." },
      { h: "What I would do differently", p: "Take on more of the CAD myself, refine the gimbal further, and add a way to change the stream so one nozzle can do more than shoot straight." }
    ],
    slots: ["Gimbal and nozzle CAD", "Servo housing, before and after"],
    images: [
      { src: "images/rover-final.jpg", alt: "The finished rover on a chair: a white PVC frame on four wheels with a gray printed water tank, a clear tube, and a two-axis nozzle gimbal on top.", caption: "The finished rover. PVC frame, printed tank and gimbal." },
      { src: "images/rover-poster.jpg", alt: "Laurenz standing next to the rover and the Rovercooked project poster on an easel.", caption: "With the rover and our poster at the project showcase." },
      { src: "images/rover-holding.jpg", alt: "Laurenz holding the rover in front of the poster, smiling.", caption: "Holding the rover after the showcase." }
    ],
    drawings: []
  }
];

const CARDS = [
  {
    title: "Level 1 high-power rocket",
    meta: "Zotckets at UCI · Sep 2026 to present",
    status: "Building, not flown yet",
    summary: "My certification rocket, designed for maximum apogee. I picked a Von Karman nose cone because it is the most efficient shape, it looks beautiful, and it simulated best.",
    spec: [
      ["Apogee", "974 m", "simulated"],
      ["Max velocity", "Mach 0.65", "simulated"],
      ["Stability", "1.99 cal", "simulated"],
      ["Nose cone, printed PETG", "148 g", "tested"],
      ["Airframe", "Two 74 mm tubes, 109 cm long", "designed"],
      ["Motor", "AeroTech H135W", "designed"]
    ],
    images: [
      { src: "images/l1-openrocket.png", paper: true, alt: "OpenRocket side view of the rocket: Von Karman nose cone, two body tubes, and three swept fins, with the center of gravity ahead of the center of pressure.", caption: "My OpenRocket model. Length 109 cm, 581 g without the motor (simulated)." }
    ],
    note: "I designed the nose cone, fins, and centering rings in SolidWorks, plus my own avionics sled with a barometer, IMU, GPS, and radio to log the flight. The hard part has been the gap between simulation and real parts, like true weight and center of gravity."
  },
  {
    title: "EDF flying wing",
    meta: "Personal project · Oct 2026 to present",
    status: "Assembled, cutting weight before first flight",
    summary: "A 3D-printed GASB ONE flying wing that I am converting from a propeller to a 50 mm electric ducted fan. Its avionics carry over to my rockets.",
    spec: [
      ["Nacelle", "PA-CF, my design in SolidWorks", "designed"],
      ["Airframe", "PETG with carbon fiber spars", "designed"],
      ["Motor controller", "40 A for a ~38 A draw", "designed"],
      ["Radio link, bench", "10 of 10 packets both ways", "tested"],
      ["IMU and barometer", "Reading correctly", "tested"],
      ["Failsafe", "Cuts throttle after 500 ms without signal", "designed"]
    ],
    images: [
      { src: "images/edf-avionics.jpg", alt: "A breadboard with an Arduino Nano, a radio module, an IMU, and a barometer, wired next to the black 3D-printed flying wing and its 40 A ESC.", caption: "The flight electronics on the bench before they go into the wing: Arduino Nano, radio, IMU, and barometer." }
    ],
    note: "It runs on an Arduino Nano and flies from an Xbox controller through a Python ground station on my laptop. I wrote the code with AI assistance."
  }
];

/* Small builds go here too. Copy a block to add one. */
CARDS.push({
  title: "Kendama wall hook",
  meta: "Personal project · Nov 2026",
  status: "Printed and in use",
  summary: "A wall hook I designed in SolidWorks and 3D printed for my kendama. It is also my first GD&T drawing, which I made after a recruiter suggested I practice it. Two prongs cradle the cross cup so it hangs flat against the wall, and it sticks up with Command strips, no screws. I made it universal for modern kendamas so I can print them for friends.",
  images: [
    { src: "images/drawings/kh-001-rev-c.jpg", paper: true, alt: "SolidWorks drawing KH-001 Rev C of the kendama wall hook: side and front views with basic dimensions, a flatness callout on datum A, profile, perpendicularity, and position tolerances, an isometric view, and notes.", caption: "Drawing KH-001, Rev C. My first GD&T drawing, dimensioned per ASME Y14.5-2018." },
    { src: "images/kendama-mounted.jpg", alt: "A wooden Sweets kendama with a blue ball hanging flat against a wall on a white 3D-printed hook.", caption: "Mounted on the wall with my Sweets kendama." },
    { src: "images/kendama-fit.jpg", alt: "Hand holding the kendama with the white hook's two prongs under the cross cup.", caption: "The two prongs cradle the cross cup." },
    { src: "images/kendama-print.jpg", alt: "The white printed hook lying on graph paper: a flat base with two curved prongs.", caption: "The printed part, straight off the printer." }
  ],
  spec: [
    ["Drawing", "KH-001 Rev C, ASME Y14.5-2018", null],
    ["GD&T used", "Flatness, profile, perpendicularity, position", null],
    ["Material", "PLA", "designed"],
    ["Mass", "About 23 g", "estimated"],
    ["Printer", "My Bambu Lab X2D", null],
    ["Mount", "Command strips, no tools", "designed"],
    ["Fit", "Held my kendama on the wall", "tested"],
    ["Price to friends", "$1 each", "planned"]
  ],
  note: "A small one, but it is the full loop on my own: measure the part, model it, draw it to a real standard with datums and tolerances, print it, test the fit, and make it general enough for other people's kendamas."
});

const ABOUT = {
  photo: "images/headshot.jpg",
  photoAlt: "Laurenz Felix smiling, wearing glasses, a white shirt, and a black tie",
  id: ["B.S. Chemical Engineering, Energy and Sustainability", "Minor in Materials Science and Engineering", "UC Irvine, expected June 2028"],
  body: [
    "In third grade I picked up an astronomy encyclopedia at my school's book fair. It was full of cool pictures and ideas, and I read the whole thing. That is where space started for me.",
    "I just did not know how to turn it into a career. My parents never really guided me through school, so I figured things out my own way, by trying everything. I did not even know what honors classes were. I did not have a lot growing up, so I tinkered with whatever I could, opening up toys and electronics to see how they worked. In middle school I joined the robotics team so I could actually build things. In high school I joined band and ended up on the drumline, which I never expected. I loved chemistry, took three years of biology instead of physics, and came into college thinking I was headed into medicine.",
    "Then it clicked that engineering was how I could work on space. I had not taken the classes to get into aerospace, so for a while I set that dream aside and moved into chemical engineering, specializing in energy and sustainability. Eventually I realized my major did not have to decide where I end up. I do not need to be in aerospace or mechanical engineering to work in the space industry, and chemical engineering gives me a different angle on hardware: what a part is made of, how it handles heat, and how it gets made. I am a first-generation Filipino-American from Sacramento, and most of my projects are built on my own time and budget, each one feeding into the next. At home I set up a garage maker space with 3D printers, a sewing machine, and a full set of hand and power tools, so I can build whatever I am thinking about.",
    "None of that path was planned, but all of it got me here, and it made me self-driven. I have not gotten into every project team I applied to, and I have not always fit the usual mold for my major. I am still going after this.",
    "In five years I want to be working on rockets, or anything that goes to space.",
    "Outside of engineering I make videos. One of my personal projects passed a million views."
  ],
  links: [["Watch one of my videos", "https://youtu.be/hvHscqjvV-I"]],
  galleryTitle: "Then and now",
  gallery: [
    { src: "images/maker-space.jpg", alt: "A corner of a garage set up as a workshop: a desk with two laptops, a Bambu Lab 3D printer on a workbench, a cutting mat, pegboard, shelves, and a sewing machine on the top shelf.", caption: "My corner of the garage maker space. Pegboard and the rest of the tools coming soon." },
    { src: "images/kid-stool.jpg", alt: "Laurenz as a toddler in a red and navy striped sweater, sitting on a blue and white ceramic stool.", caption: "Me as a kid at the airport." },
    { src: "images/kid-juice.jpg", alt: "Laurenz as a toddler in the same striped sweater, drinking from a juice box.", caption: "Same airport trip." }
  ],
  quotesTitle: "Three lines I keep coming back to",
  quotes: [
    ["You miss 100% of the shots you don't take.", "Wayne Gretzky"],
    ["Never give up on your dreams.", ""],
    ["Choose to be kind.", ""]
  ]
};

const SKILLS = [
  ["CAD and analysis", "SolidWorks and SolidWorks Flow Simulation, Fusion 360, OpenRocket, GD&T, Excel"],
  ["Programming", "Python, MATLAB, C++"],
  ["Hardware", "Arduino, soldering, breadboarding, multimeter debugging, 3D printing in PETG and PA-CF, shop tools"],
  ["Engineering process", "Trade studies, requirements writing, material selection, technical writing, literature review, lab safety"],
  ["Coursework", "General and organic chemistry with labs, physics, multivariable calculus"],
  ["Also", "Video and photo editing (DaVinci Resolve), Canva, Google Workspace"]
];

const CREDENTIALS = [
  ["Ham Radio Technician", "FCC amateur radio license. I use it for the 433 MHz links on my aircraft and rockets."],
  ["Nuclear Reactor Operator Training", "Starting Spring 2027."],
  ["Teams", "SEDS UCI, Zotckets, FUSION, AIChE"]
];

const LEADERSHIP = [
  ["FUSION at UCI", "External Vice President Intern · Jan to Jun 2026", "FUSION is UCI's Filipino organization for engineering and computer science students. I led outreach to Alyansa and other cultural organizations."],
  ["ACEing Autism", "External Outreach Manager · Jan 2025 to May 2026", "I contacted two or more organizations every week across Orange County and built connections including Easterseals."]
];

const CONTACT = {
  line: "I am looking for a Summer 2027 internship in aerospace, propulsion, materials, or semiconductors. Email is the best way to reach me.",
  emails: [["School", "laurenzf@uci.edu"], ["Personal", "lrnzf05@gmail.com"]],
  links: [["LinkedIn", "linkedin.com/in/laurenzfelix", "https://www.linkedin.com/in/laurenzfelix/"], ["GitHub", "github.com/laurenzf", "https://github.com/laurenzf"]]
};
/* Visitor stats: after making a GoatCounter account, paste its one-line script tag at the very end of index.html, just before </body>. */
