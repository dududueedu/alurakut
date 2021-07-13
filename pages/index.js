import GridMain from '../src/components/GridMain'
import Box from '../src/components/Box'

export default function Home() {
  return (
    <GridMain>
      <div>
        <Box className="profile" style={{ gridArea: 'profile' }}>
          <img className="myft" src="https://github.com/dududueedu.png" />
        </Box>
      </div>
      <div>
        <Box style={{ gridArea: 'welcome' }}>Bem vindo</Box>
      </div>
      <div style={{ gridArea: 'profileRelations' }}>
        <Box>Pessoas da comunidade</Box>
        <Box>Comunidades</Box>
      </div>
    </GridMain>
  )
}