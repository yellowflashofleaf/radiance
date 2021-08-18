// import JC from "./img/JC.jpg";
// import BO from "./img/bugoff.jpg";
// import CB from "./img/codeb.jpg";
// import RI from "./img/Recodeit.jpg";
// import EQ from "./img/Eq.jpg";
// import DQ from "./img/DQ.jpg";
// import DXT from "./img/Dextrous.jpg";
// import FQ from "./img/Fandom.jpg";
// import CRB from "./img/cerebro.jpg";
// import Q2B from "./img/Q2B.jpg";
// import WA from "./img/Webapp.jpg";
// import PS from "./img/PS.jpg";
// import IS from "./img/Insight.jpg";

// const technicalEvents = [
//   {
//     info: "while(!All-Clear()) try();",
//     moreInfo:
//       "Just Coding is a competition where the participants will have to write correct and efficient codes for the given set of problem statements.",
//     wildcard: "Just Coding Wildcard:",
//     wdInfo:
//       " This is an online coding round which will be hosted on Codechef. The winning team will get a direct entry in the final round. Also, top 2 teams from PICT FE/SE and TE/BE groups will get qualified for the final round.",
//     wdLink: " To play the wildcard contest Click Here.",
//     rounds: [
//       "Round 1: This is a coding round where teams have to code for given problems in a limited time.",
//       "Round 2: Qualifying teams will then have to code for the problems of higher difficulty level in a limited time.",
//     ],
//     rules: [
//       "1. Both the groups, FE-SE and TE-BE, will be given maximum 2 hours to complete.",
//       "2. Permitted languages will be C, C++, Python and Java.",
//       "3.Any offline IDE can be used but use of internet and any online IDE other than HackerRank is prohibited.",
//     ],
//     team: [
//       "FE-SE (Junior Team): Teams of 2",
//       "TE-BE (Senior Team): Teams of 2 ",
//       "Individual",
//     ],
//     fees: "Rs.100 per team (Juniors/Seniors) and Individual 80/-",
//     img: JC,
//     content: "Just Coding",
//     registrationLink: "#",
//   },
//   {
//     info: "Truth can be found within the code!",
//     moreInfo:
//       "Bug-off is a competition where the participants are expected to remove the bugs from the given set of codes and achieve the desired output within the time limit. The participants (Team/Individual) with the maximum number of error-free codes win the contest.",
//     rounds: [
//       "Round 1: In this round participants will have to answer series of mcq’s based on Understanding Of Programming Language And Logic.",
//       "Round 2: Here the participants will have to debug the given code and make minimal changes to pass the given constraints.",
//     ],
//     rules: [
//       "1. Both the groups, FE-SE and TE-BE, will be given maximum 30 minutes to compete in the first round.",
//       "2. FE-SE participants will be given a choice between C/C++ language.",
//       "3. TE/BE participants can submit the solution in C/C++/Java.",
//       "4. Second Round Will Be Of Duration: 1 hour .",
//     ],
//     team: [
//       "FE-SE (Junior Team): Teams of 2",
//       "TE-BE (Senior Team): Teams of 2 ",
//       "Individual",
//     ],
//     fees: "Rs.100 per team (Juniors/Seniors) and Individual 80/-",
//     img: BO,
//     content: "Bugoff",
//     registrationLink: "#",
//   },
//   {
//     info: "Be the semicolon to your Buddy’s code!",
//     moreInfo:
//       "A coding competition based on understanding your buddy’s code and continuing his code with speed to get the desired output.",
//     rounds: [
//       "Round 1: In this round, your team needs to code fast for 10 easy questions within 30 minutes.",
//       "Round 2: This is a relay coding round where teams have to solve 2 different problem sets by swapping with their partner in given intervals.",
//     ],
//     rules: [
//       "1. Each team will consist of 2 members.",
//       "2. Team members aren't allowed to communicate with each other during the contest.",
//       "3. Use of Mobile phones, internet or any other electronic device is prohibited.",
//       "4. Any type of comments in the code will lead to disqualification of the team.",
//       "5. The contest duration is 60 minutes and the partners are required to exchange their seats after every 20 minutes.",
//       "6. The decision of organizers will be final and binding on all participants.",
//     ],
//     team: [
//       "FE-SE (Junior Team): Teams of 2",
//       "TE-BE (Senior Team): Teams of 2 ",
//     ],
//     fees: "Rs.100 per team (Juniors/Seniors).",
//     img: CB,
//     content: "Code Buddy",
//     registrationLink: "#",
//   },
//   {
//     info: "Think Perfection, Expect Excellence!",
//     moreInfo:
//       "A competitive coding competition based on perfection along with speed !",
//     rounds: [
//       "Round 1: This is MCQ round. The participants will be allowed to use computer to code the solution if required or they can solve it on paper.",
//       "Round 2: Second round a set of executable files will be given.The participants can run the files any number of times they want. From the given custom inputs by the participant they need to figure out the logic of the code of the executable file and code it.",
//     ],
//     rules: [
//       "1. Languages allowed are C, C++, Python and Java.",
//       "2. Use of the internet and any other electronic devices during the contest are not allowed.",
//       "The decision of the organizers will be final.",
//     ],
//     team: [
//       "FE-SE (Junior Team): Teams of 2",
//       "TE-BE (Senior Team): Teams of 2 ",
//       "Individual",
//     ],
//     fees: "Rs.100 per team (Juniors/Seniors) and Individual 80/-",
//     img: RI,
//     content: "Recode It",
//     registrationLink: "#",
//   },
//   {
//     info: "Where knowledge meets imagination!",
//     moreInfo:
//       "The first round is a treasure hunt across the campus using deductive EnTC related clues. The qualifying teams would be given problem statements having difficulty level according to the year of the participants. FE and SE/TE students would have to face simple circuit debugging and circuit building problems in the second round.",
//     rounds: null,
//     rules: [
//       "1. All the teams would be given a maximum of 2.5 hours to finish the treasure hunt.",
//       "2. Use of Internet or any other resource is allowed during the treasure hunt.",
//       "3.Only the top 16 teams would qualify for the second round ( 8 from each group).",
//       "4. The hunt is strictly restricted to the college campus.",
//       "5. Any help or clarity on the proceedings of the event would be given by volunteers present on spot.",
//       "6. The winner will be decided depending on the accuracy and the speed of completing the given tasks in both the rounds.",
//       "7. The decision of the organizers will be final and binding on all participants for the treasure hunt.",
//     ],
//     team: ["FE       (Juniors): Team of 2", "SE/TE (Seniors): Team of 2"],
//     fees: "Fees: Rs.100 per team (Juniors/Seniors).",
//     img: EQ,
//     content: "Electroquest",
//     registrationLink: "#",
//   },
//   {
//     info: "What we have is Data Glut!",
//     moreInfo:
//       "DataQuest is one of its kind data science competition taking place for first time in Pune. Participants will be tested upon their data science and machine learning skills to optimize the given metric for given dataset.",
//     rounds: null,
//     rules: [
//       "1. This competition will be hosted on Kaggle.",
//       "2. Problem Statement along with dataset will be released on Kaggle.",
//       "3. Duration of contest will be 7 days.",
//       "4. The right to decide optimization metric will be towards judges and it will be final and binding.",
//     ],
//     team: ["Team upto 3 members."],
//     fees: "Rs.150 per team",
//     img: DQ,
//     content: "Data Quest",
//     registrationLink: "#",
//   },
// ];
// const nonTechnicalEvents = [
//   {
//     info: "Show the BEST version of you!",
//     moreInfo:
//       "Dextrous provides you with a unique experience of the standard interviewing procedure comprising an Aptitude Test and a Group Discussion followed by a Personal Interview taken by renowned professionals from the industry. It is truly an opportunity in the form of a mock-interview before your placements.",
//     rounds: null,
//     rules: [
//       "1. Every participant will be allowed to appear for the Aptitute Test and the Group Discussion.",
//       "2. Based on the combined score of Aptitude-Test and the Group Discussion, the shortlisted participants can appear for the interview.",
//       "3. The winner will be decided on the basis of his/her combined performance in the Aptitude-Test, the Group Discussion and the Interview.",
//     ],
//     team: ["FE/SE/TE/BE: Individual"],
//     fees: "Rs.100",
//     img: DXT,
//     content: "Dextrous",
//     registrationLink: "#",
//   },
//   {
//     info: "Talk with the pics!",
//     moreInfo:
//       "Are you in search of a stage for the 'writer' within you? Folks, INSIGHT is then, your apt destination. Give birth to your own piece of literature, let it be a paragraph, a short story or even a poem, relating to the displayed image. Use your creativity to the fullest in this 'unique' competition and unveil the budding writer in you. Unfurl your imagination to the extreme and orchestrate a splendid art of writing at Insight.",
//     rounds: null,
//     rules: [
//       "1. Each participant can appear for the first round.",
//       "2. 3 images will be displayed after a particular duration for the first round.",
//       "3. The participants will be shortlisted for the second round based on the performance in the first round.",
//       "4. The shortlisted participants are expected to deal with a series of images in the second round.",
//       "5. The decision of the judges will be final and binding on all participants.",
//     ],
//     team: ["FE/SE/TE/BE: Individuals only"],
//     fees: "Rs.50 per person.",
//     img: IS,
//     content: "Insight",
//     registrationLink: "#",
//   },
//   {
//     info: "Show how much of a true fan you are!",
//     moreInfo:
//       "A Pop Culture quiz competition consisting of famous fandom topics like Game of Thrones, Harry Potter, FRIENDS, Marvel and DC. The competition consists of two rounds.",
//     rounds: [
//       "Round 1: A general quiz of duration 20 minutes.",
//       "Round 2: Buzzer Round having direct questions as well as audio visual questions.",
//       "(HP,GOT,FRIENDS). Debate(Marvel vs. DC)",
//     ],
//     rules: [
//       "1. Every participant is allowed to appear for the first round.",
//       "2. Use of any unfair means will result in direct disqualification.",
//       "3. The decision of the organizers will be final and binding on all participants.",
//     ],
//     team: ["FE/SE/TE/BE: Individual or Team of 2"],
//     fees: "Rs.80 (Individual), Rs.100 (Team of 2)",
//     img: FQ,
//     content: "Fandom Quiz",
//     registrationLink: "#",
//   },
//   {
//     info: "Be sagacious!",
//     moreInfo:
//       'Do you have the mettle to solve mind boggling questions and brain teasers? Cerebro presents to you a great opportunity to test your logical and analytical skills. The questions here will only judge your wit. Join forces, team up with your partner and prove that you\'re the best! No need of any "general" knowledge, all that\'s required is a "special" brain!',
//     rounds: null,
//     rules: [
//       "1. The competition will be organised in two rounds (Prelims & Finals) for both the groups.",
//       "2. Each participant can appear for the first round (Prelims) only once.",
//       "3. Teams will be shortlisted for Round II (Finals) based on the performance in Round I(Prelims).",
//       "4. Use of mobile phones, internet or any electrical gadget is strictly prohibited.",
//       "5. The decision of the organizers will be final and binding on all participants.",
//     ],
//     team: [
//       "FE-SE (Junior Team): Teams of 2",
//       "TE-BE (Senior Team): Teams of 2 ",
//       "Individual",
//     ],
//     fees: "Rs. 80 /- (Non-PASC members) \n Rs. 50 /- (PASC members)",
//     img: CRB,
//     content: "Cerebro",
//     registrationLink: "#",
//   },
//   {
//     info: "Go BIG or go home!!",
//     moreInfo:
//       "Ever dreamt of owning the perfect playing XI ? We've got all you cricket enthusiasts a chance to create the best team using strategic bidding and experience the thrill, like the IPL auction! The first round will be a general quiz based on cricket. The second round of the contest will be a real-time auction.",
//     rounds: null,
//     rules: [
//       "1. Each participant is allowed to appear for the first round.",
//       "2. Based on the score in the quiz, top twelve teams will be shortlisted to appear for the auction in the second round.",
//       "3. The decision of the organizers will be final and binding on all participants.",
//     ],
//     team: ["FE/SE/TE/BE : Team of 2"],
//     fees: "Rs.100 per team.",
//     img: Q2B,
//     content: "Quiz 2 Bid",
//     registrationLink: "#",
//   },
//   {
//     info: "The integration of information, design, and technology!",
//     moreInfo:
//       "A platform to showcase your talent by making creative and unique websites or android applications in accordance with the provided problem statements.",
//     rounds: null,
//     rules: [
//       "1. Problem Statements will be released on 23rd August.",
//       '2. Participants will have to upload their developed app on Github and share the link on "webappdev.pulzion@gmail.com".',
//       "3. The decision of the organizers will be final and binding on all participants.",
//     ],
//     team: ["FE/SE : Team of 2", "TE/BE : Team of 2"],
//     fees: "Rs.100 per team.",
//     img: WA,
//     content: "Webapp",
//     registrationLink: "#",
//   },
//   {
//     info: "Let your design speak for itself !!",
//     moreInfo:
//       "Ever wondered what kind of skill you have in the world of digital imagery? Ever wondered if you're the best at Image manipulation? Here is your chance to prove it, and take away a sweet prize while you're at it!",
//     rounds: null,
//     rules: [
//       "1. Send in your Posters to psroyale.pulzion@gmail.com",
//       "2. The dimensions of the poster for the first round should be 1280x720.",
//       "3. The top 10 entires get selected to round 2.",
//       "4. The Theme for the second poster will be given on-the-spot.",
//       "5. Use of Copyrighted Images is not Allowed.",
//     ],
//     team: ["FE/SE/TE/BE: Individuals only"],
//     fees: "Rs.50 per person.",
//     img: PS,
//     content: "Photoshop Royale",
//     registrationLink: "#",
//   },
// ];

// const allEvents = [...technicalEvents, ...nonTechnicalEvents];

// export { allEvents, technicalEvents, nonTechnicalEvents };

const eventsData = [
  {
    _id: "611d3fdaf9b3ab563fbe2543",
    name: "Algo-racers",
    image:
      "https://pulzion-2021.s3.ap-south-1.amazonaws.com/assets/event_logos/JustCoding.png",
    info: "while( ! succeed == try() ){keepCoding(); }",
    moreInfo:
      "Are you someone whose fingers look around for a keyboard when you come across a problem statement? Then Just Coding is meant for you, a stimulating yet fun coding event!",
    wildcard: "",
    show: true,
    wdInfo:
      "Coding or programming is an acquired skill. It can be perfected by mere practice and application of basic concepts, accompanied by logical thinking. So here is a contest wherein participants will have to write a code for a given set of problem statements to nail them. If you're up for challenging yet fun tasks, Just coding is the place for you.",
    wdLink: "The competition would take place in the following manner:",
    rounds: [
      "Round 1: This is a Fast Coding round where participants will have to solve relatively easier coding questions in a short period.",
      "Round 2: In this round, the difficulty level of questions will be relatively higher and qualifying participants will be given two hours to code an optimal solution to the given questions.",
    ],
    rules: [
      "1. Both groups, FE-SE and TE-BE would be given a maximum of 30 minutes to complete the questions of the first round.",
      "2. Both the groups, FE-SE and TE-BE, will be given a maximum of 120 minutes to complete the questions of the second round.",
      "3. Permitted languages will be C, C++, Python and Java.",
      "4. Use of unfair means will result in direct disqualification.",
      "5. The decision of the organizers will be considered final and binding for all participants.",
      "Event Leads: ",
      " - Soumya Malgonde: +91 8999027977",
      " - Ayush Shah: +91 9860699500",
    ],
    team: [
      "FE-SE (Junior Category): Individual participation",
      "TE-BE (Senior Category): Individual participation",
    ],
    isTechnical: true,
  },
];

export default eventsData;
