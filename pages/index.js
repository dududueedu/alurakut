import GridMain from '../src/components/GridMain'
import Box from '../src/components/Box'
import { AlurakutMenu } from '../src/libs/AluraCommons'

function ProfileSideBar(props) {
  return (
    <Box className="profile" style={{ gridArea: 'profile' }}>
      <img className="myft" src={`https://github.com/${props.User}.png`} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'dududueedu'

  return (
    <>
      <AlurakutMenu />
      <GridMain>
        <div>
          <ProfileSideBar User={githubUser} />
        </div>
        <div>
          <Box style={{ gridArea: 'welcome' }}>Bem vindo</Box>
        </div>
        <div style={{ gridArea: 'profileRelations' }}>
          <Box>Pessoas da comunidade</Box>
          <Box>Comunidades</Box>
        </div>
      </GridMain>
    </>
  )
}