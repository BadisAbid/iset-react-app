// routes.js
import {
  CoursesSection,
  Nouveautés,
  HelpDesk,
  LoginRegister,
  Teacher1,
  Admin1,
  Student1,
  InformatiquePage,
  FirstSemesterPage,
  SecondSemesterPage,
  AffairesPage,
  FirstSemesterAffaires,
  SecondSemesterAffaires,
  MecaniquePage,
  FirstSemesterMechanics,
  SecondSemesterMechanics,
  ElectricalPage,
  FirstSemesterElectrical,
  SecondSemesterElectrical,
} from "./components";

const routes = [
  { path: "/", element: <CoursesSection /> },
  { path: "/nouveautés", element: <Nouveautés /> },
  { path: "/HelpDesk", element: <HelpDesk /> },
  { path: "/login", element: <LoginRegister /> },
  { path: "/teacher1", element: <Teacher1 /> },
  { path: "/admin1", element: <Admin1 /> },
  { path: "/student1", element: <Student1 /> },
  { path: "/informatique", element: <InformatiquePage /> },
  { path: "/informatique/1er-semestre", element: <FirstSemesterPage /> },
  { path: "/informatique/2eme-semestre", element: <SecondSemesterPage /> },
  { path: "/AffairesPage", element: <AffairesPage /> },
  { path: "/affaires/1er-semestre", element: <FirstSemesterAffaires /> },
  { path: "/affaires/2eme-semestre", element: <SecondSemesterAffaires /> },
  { path: "/MecaniquePage", element: <MecaniquePage /> },
  { path: "/mecanique/1er-semestre", element: <FirstSemesterMechanics /> },
  { path: "/mecanique/2eme-semestre", element: <SecondSemesterMechanics /> },
  { path: "/ElectricalPage", element: <ElectricalPage /> },
  {
    path: "/genie-electrique/1er-semestre",
    element: <FirstSemesterElectrical />,
  },
  {
    path: "/genie-electrique/2eme-semestre",
    element: <SecondSemesterElectrical />,
  },
];

export default routes;
