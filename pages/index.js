import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import Box from '../src/components/Box'
import MainGrid from '../src/components/MainGrid'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(propriedades){
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '8px'}} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}.png`}>@{propriedades.githubUser}</a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

function ProfileRelationsBox(propriedades){
  return (
    <ProfileRelationsBoxWrapper>
    <h2 className="smallTitle">
      {propriedades.title} ({propriedades.itens.length})
    </h2>
    <ul>
      {propriedades.itens.map((itemAtual) => {
        return (
          <li key={itemAtual.id}>
            <a href={`/users/${itemAtual.login}`}>
              <img src={`https://github.com/${itemAtual.login}.png`} />
              <span>{itemAtual.login}</span>
            </a>
          </li>
        )
      })}
    </ul>
  </ProfileRelationsBoxWrapper> 
  );
}

export default function Home(props) {
  const [comunidades, setComunidades] = React.useState([]);
  const githubUser = props.githubUser;
  const TOKEN = process.env.READ_TOKEN;//meu readToken
  
  const pessoasFavoritas = [
    {"id": "peas", "login": "peas"}, 
    {"id": "omariosouto", "login": "omariosouto"}, 
    {"id": "juunegreiros", "login": "juunegreiros"}, 
    {"id": "rafaballerini", "login": "rafaballerini"}, 
    {"id": "marcobrunodev", "login": "marcobrunodev"}, 
    {"id": "felipefialho", "login": "felipefialho"}
  ];
  
  const [seguidores, setSeguidores] = React.useState([]);

  //GET - Pegar o array de dados do github
  React.useEffect(function() {
    fetch("https://api.github.com/users/ffsf-filho/followers")
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json();
      })
      .then(function (respostaCompleta) {
        setSeguidores(respostaCompleta);
      });
    
    //API GraphQL
    fetch('https://graphql.datocms.com/', 
      { method: 'POST',
        headers: {
          'Authorization': TOKEN,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({"query": `query {
              allCommunities {
                id
                title
                imageUrl
                creatorSlug
              }
            }` })
      })
      .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
      .then((respostaCompleta) => {
          const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
          setComunidades(comunidadesVindasDoDato);
      })
  }, [])

  //1 - Criar um box que vai ter um map, baseado nos itens do array que pegamos no github

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem Vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
              <h2 className="subTitle">O que você deseja fazer?</h2>
              <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);
                const comunidade = {
                  title: dadosDoForm.get('title'),
                  image_url: dadosDoForm.get('image'),
                  creator_slug: githubUser,
                }

                fetch('/api/comunidades', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(comunidade)
                })
                .then(async (response) => {
                  const dados = await response.json();
                  const comunidade = dados.registroCriado;
                  const comunidadesAtualizadas = [...comunidades, comunidade];
                  setComunidades(comunidadesAtualizadas)
                })
              }}>
                <div>
                  <input name="title" type="text"
                    placeholder="Qual vai ser o nome da sua comunidade ?"  
                    aria-label="Qual vai ser o nome da sua comunidade ?" />
                </div>
                <div>
                  <input name="image" type="text"
                    placeholder="Coloque uma URL para ser usada como capa"  
                    aria-label="Coloque uma URL para ser usada como capa" />
                </div>
                <button>
                  Criar comunidade
                </button>
              </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBox title="Seguidores" itens={seguidores}/>
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/comunities/${itemAtual.title}`}>
                      {/* <img src={`http://placehold.it/300x1300`} /> */}
                      <img src={itemAtual.imageUrl} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBox title="Pessoas Comunidades" itens={pessoasFavoritas}/>
        </div>
      </MainGrid>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
        Authorization: token
      }
  })
  .then((resposta) => resposta.json())

  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser
    }, // will be passed to the page component as props
  }
} 