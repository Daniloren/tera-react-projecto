import React from 'react'

export default function Home() {
  return (
    <div className="home center">
    <div className="home__logo">
      <img src="images/logo.svg" class="responsive" alt="" />
    </div>
    <select className="home__select-users">
      <option>User 1</option>
      <option>User 2</option>
      <option>User 3</option>
    </select>
    <button className="button-primary">Entrar</button>
  </div>
  )
}