import Navbar from "./components/navbar/Navbar"
import '../styles/globals.css'
import MountedClient from "./components/MountedClient"
import Modal from "./components/navbar/modals/Modal"
import RegisterModal from "./components/navbar/modals/RegisterModal"
import ReduxProvider from "./providers/ReduxProvider"
import LoginModal from "./components/navbar/modals/LoginModal"
import ToastProvider from "./providers/ToastProvider"
import getCurrentUser from "./actions/getCurrentUser"
import ElementModal from "./components/navbar/modals/ElementModal"

export default async function RootLayout  ({ children }: { children: React.ReactNode })  {
  
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <MountedClient>
            {/* <Modal isOpen={true} onSubmit={() => {}} onClose={() => {}} btnLabel="Register" title="Register"/> */}
            <RegisterModal />
            <ToastProvider/>
            <LoginModal/>
            <ElementModal/>
            <Navbar user={user} />
          </MountedClient>
        </ReduxProvider>
        {children}
      </body>
    </html>
  )
}

