import GridMain from '../src/components/GridMain'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/libs/AluraCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/css/ProfileRelations'
import React, { useState } from 'react';

function ProfileSideBar(props) {
  return (
    <Box className="profile" style={{ gridArea: 'profile' }}>
      <img className="myft" src={`https://github.com/${props.User}.png`} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.User}`} target="_blank">
          @{props.User}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'dududueedu'

  const amigosFavoritos = [
    'kelyAna',
    'Vafernandes',
    'laysqueiroz',
    'VitinhoSouza',
    'daianefsilveira',
    'HugoPDF5'
  ]

  const [comunidades, setcomunidades] = useState([{
    id: '40028922',
    title: 'Odeio acordar cedo!',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]) //control state

  return (
    <>
      <AlurakutMenu githubUser={githubUser}/>
      <GridMain>
        <div className="profile" style={{ gridArea: 'profile' }}>
          <ProfileSideBar User={githubUser} />
        </div>
        <div style={{ gridArea: 'welcome' }}>
          <Box>
            <h1 className="title"> Bem vindo(a) </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h3 className="subTitle">O que você deseja fazer?</h3>

            <form onSubmit={function handleCreateComunidade(event) {
              event.preventDefault()

              const dadosForm = new FormData(event.target)

              console.log('Campo: ', dadosForm.get('title'))
              console.log('Image: ', dadosForm.get('image'))

              const comunidade = {
                id: new Date().toUTCString(),
                title: dadosForm.get('title'),
                image: dadosForm.get('image')
              }

              const comunidadesAtuaisState = [...comunidades, comunidade]
              setcomunidades(comunidadesAtuaisState)

            }}>
              <div>
                <input placeholder="Qual o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual o nome da sua comunidade?"
                  type="text" />
              </div>

              <div>
                <input placeholder="Qual URL da capa para essa comunidade?"
                  name="image"
                  aria-label="Qual URL da capa para essa comunidade?" />
              </div>

              <button>Criar Comunidade</button>
            </form>
          </Box>
        </div>
        <div style={{ gridArea: 'profileRelations' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle"> Comunidades ({comunidades.length}) </h2>
            <ul>
              {comunidades.map((comunidad) => {
                if (comunidades.length < 7){
                  return (
                    <li key={comunidad.id}>
                      <a href={`/users/${comunidad.title}`} target="_blank">
                        <img src={comunidad.image} />
                        <span> {comunidad.title} </span>
                      </a>
                    </li>
                  )
                }
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle"> Pessoas da comunidade ({amigosFavoritos.length}) </h2>

            <ul>
              {amigosFavoritos.map((amigo) => {
                return (
                  <li key={amigo}>
                    <a href={`https://github.com/${amigo}`} target="_blank">
                      <img src={`https://github.com/${amigo}.png`} />
                      <span> {amigo} </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </GridMain>
    </>
  )
}