import { useState } from 'react';
// import { createClient } from "@supabase/supabase-js";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
// import { customTheme } from "./theme"
import Login from "./componenets/Login"

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );

function App() {
  const [session, setSession] = useState(null);

  return(
    <div>
      <Login />
    </div>
  )
  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //   });
  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });
  //   return () => subscription.unsubscribe();
  // }, []);
  // if (!session) {
  //   return (
  //     <div
  //       style={{
  //         width: "100vw",
  //         height: "100vh",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <div>
  //       <Auth
  //           supabaseClient={supabase}
  //           appearance={{
  //             theme: ThemeSupa
            
  //           }}
  //       />
  //       </div>

  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <div>Logged in!</div>
  //       <button onClick={() => supabase.auth.signOut()}>Sign out</button>
  //     </div>
  //   );
  // }
}

export default App
