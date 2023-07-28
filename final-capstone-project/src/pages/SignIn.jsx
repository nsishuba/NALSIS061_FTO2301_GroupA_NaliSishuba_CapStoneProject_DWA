// import { createClient } from "@supabase/supabase-js";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from '@supabase/auth-ui-shared'
// import { useNavigate } from "react-router-dom";

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );

// export default function SignIn() {
//     const navigate = useNavigate();

//     supabase.auth.onAuthStateChange(async (event) => {
//         if (event !== "SIGNED_OUT") {
//             navigate("/success")
//         }else {
//             navigate("/")
//         }
//     })

//       return (
//         <div>
//           <Auth 
//                 supabaseClient={supabase}
//                 appearance={{ theme: ThemeSupa }}/>
//         </div>
//       );
// }
