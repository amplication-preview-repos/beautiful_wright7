import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InstagramAccessTokenList } from "./instagramAccessToken/InstagramAccessTokenList";
import { InstagramAccessTokenCreate } from "./instagramAccessToken/InstagramAccessTokenCreate";
import { InstagramAccessTokenEdit } from "./instagramAccessToken/InstagramAccessTokenEdit";
import { InstagramAccessTokenShow } from "./instagramAccessToken/InstagramAccessTokenShow";
import { LinkedInAccessTokenList } from "./linkedInAccessToken/LinkedInAccessTokenList";
import { LinkedInAccessTokenCreate } from "./linkedInAccessToken/LinkedInAccessTokenCreate";
import { LinkedInAccessTokenEdit } from "./linkedInAccessToken/LinkedInAccessTokenEdit";
import { LinkedInAccessTokenShow } from "./linkedInAccessToken/LinkedInAccessTokenShow";
import { FacebookAccessTokenList } from "./facebookAccessToken/FacebookAccessTokenList";
import { FacebookAccessTokenCreate } from "./facebookAccessToken/FacebookAccessTokenCreate";
import { FacebookAccessTokenEdit } from "./facebookAccessToken/FacebookAccessTokenEdit";
import { FacebookAccessTokenShow } from "./facebookAccessToken/FacebookAccessTokenShow";
import { TwitterAccessTokenList } from "./twitterAccessToken/TwitterAccessTokenList";
import { TwitterAccessTokenCreate } from "./twitterAccessToken/TwitterAccessTokenCreate";
import { TwitterAccessTokenEdit } from "./twitterAccessToken/TwitterAccessTokenEdit";
import { TwitterAccessTokenShow } from "./twitterAccessToken/TwitterAccessTokenShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SocialMediaService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="InstagramAccessToken"
          list={InstagramAccessTokenList}
          edit={InstagramAccessTokenEdit}
          create={InstagramAccessTokenCreate}
          show={InstagramAccessTokenShow}
        />
        <Resource
          name="LinkedInAccessToken"
          list={LinkedInAccessTokenList}
          edit={LinkedInAccessTokenEdit}
          create={LinkedInAccessTokenCreate}
          show={LinkedInAccessTokenShow}
        />
        <Resource
          name="FacebookAccessToken"
          list={FacebookAccessTokenList}
          edit={FacebookAccessTokenEdit}
          create={FacebookAccessTokenCreate}
          show={FacebookAccessTokenShow}
        />
        <Resource
          name="TwitterAccessToken"
          list={TwitterAccessTokenList}
          edit={TwitterAccessTokenEdit}
          create={TwitterAccessTokenCreate}
          show={TwitterAccessTokenShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
