import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const ProfileComponent = React.lazy(() =>
  import("./components/ProfileComponent")
);
const BackgroundChanger = React.lazy(() =>
  import("./components/BackgroundChanger")
);
const CustomReact = React.lazy(() => import("./components/CustomReact"));
const ParagraphGenerator = React.lazy(() =>
  import("./components/ParagraphGenerator")
);
const GithubInfoCard = React.lazy(() => import("./components/GithubInfoCard"));
const OTPLogin = React.lazy(() => import("./components/OTPLogin"));
const BirthdayWishComponent = React.lazy(() =>
  import("./components/BirthdayWishComponent")
);

const components = [
  { path: "/profile-component", component: ProfileComponent },
  { path: "/background-changer", component: BackgroundChanger },
  { path: "/custom-react", component: CustomReact },
  { path: "/paragraph-generator", component: ParagraphGenerator },
  { path: "/github-info-card", component: GithubInfoCard },
  { path: "/otp-login", component: OTPLogin },
  { path: "/birthday-wish", component: BirthdayWishComponent },
];
function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          {components.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback="Loading...">
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      {components.map(({ path }, index) => (
        <button
          key={index}
          onClick={() => {
            navigate(path);
          }}
        >
          Q{index + 1}. {path.slice(1).replace("-", " ")}
        </button>
      ))}
    </div>
  );
}

export default App;
