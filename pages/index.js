import GridMain from '../src/components/GridMain'
import Box from '../src/components/Box'
import { AlurakutMenu } from '../src/libs/AluraCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/css/ProfileRelations'

function ProfileSideBar(props) {
  return (
    <Box className="profile" style={{ gridArea: 'profile' }}>
      <img className="myft" src={`https://github.com/${props.User}.png`} />
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
    'HugoPDF5',
    'daianefsilveira'
  ]

  return (
    <>
      <AlurakutMenu />
      <GridMain>
        <div>
          <ProfileSideBar User={githubUser} />
        </div>
        <div>
          <Box style={{ gridArea: 'welcome' }}>
            <h1 className="title"> Bem vindo(a) </h1>
          </Box>
        </div>
        <div style={{ gridArea: 'profileRelations' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle"> Pessoas da comunidade ({amigosFavoritos.length}) </h2>

            <ul>
              {amigosFavoritos.map((amigo) => {
                return (
                  <li>
                    <a href={`https://github.com/${amigo}`} key={amigo} target="_blank">
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