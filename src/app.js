import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './layouts/appLayout'
import { QuickResponseObjects } from './quickResponseObjects/quickResponseObjects'
import { CreateQuickResponseObject, } from './quickResponseObjects/createQuickResponseObject'
import { QuickResponeObjectDetail } from './quickResponseObjects/quickResponseObjectDetail'
import { StartApp} from './noAuthenticated/newSignup'
import { SignIn} from './noAuthenticated/newSignin'

export const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<SignIn />} />
            <Route path="/" element={<AppLayout />} >
              <Route path="create" element={<CreateQuickResponseObject />} />
              <Route path="codes" element={<QuickResponseObjects />} />
              <Route path="codes/:codeId" element={<QuickResponeObjectDetail />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: '1 rem' }}>
                    <p>404</p>
                    <p>Page not found</p>
                  </main>
                }
              />
            </Route>
            <Route path="/StartApp" element={<StartApp />} />

          </Routes>
        </BrowserRouter>
      </ChakraProvider >
    </>
  )
}