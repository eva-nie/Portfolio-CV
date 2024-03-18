import "./App.css"

import React from "react"
import { Header } from "layout/header/Header"
import { Main } from "layout/sections/main/Main"
import { Skills } from "layout/sections/skills/Skills"
import { Works } from "layout/sections/works/Works"
import { Testimonials } from "layout/sections/testimonials/Testimonials"
import { Contact } from "layout/sections/contacts/Contacts"
import { Slogan } from "layout/sections/slogan/Slogan"
import { Footer } from "layout/footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimonials />
      <Contact />
      <Slogan />
      <Footer />
    </div>
  )
}

export default App
