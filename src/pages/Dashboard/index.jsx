import { Container, Modal, Header, MetaComplete, FullscreenButton } from "./styled";
import { ProgressBar } from "../../components/ProgressBar";
import { useEffect, useState } from "react";
import Logo from '../../assets/logo_bem_servico.png'
import Confete from '../../assets/confete.png'


const apiUrl = import.meta.env.VITE_URL_BACK_END
const meta = Number(import.meta.env.VITE_META)

export function Dashboard() {
  const [total, setTotal] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  useEffect(() => {
    const fetchData = () => {
      fetch(`${apiUrl}/busca_numero_vendas.php`)
        .then((res) => res.json())
        .then((data) => setTotal(data.total))
        .catch((err) => console.error(err));
    };

    fetchData();

    // Loop para buscar dados de 2 em 2 segundos.
    const interval = setInterval(() => {
      fetchData();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Header>
        <img
          className="logo"
          src={Logo}
          alt="logo_bem_servico"
        />
      </Header>
      <Modal>
        <h2>META DA EQUIPE {new Date().getFullYear()}</h2>
        <div className="stats">
          <div className="stat">
            Vendas em Movimento: {total} Vidas &nbsp; | &nbsp; Meta: {meta}{" "}
            Vidas
          </div>
        </div>

        <ProgressBar total={total} meta={meta} />

        {total >= meta ? (
          <MetaComplete>
            <h3>
              <img src={Confete} alt="festa" /> 
              &nbsp; META BATIDA - {meta.toLocaleString("pt-BR")} VIDAS &nbsp;
              <img src={Confete} alt="festa" />
            </h3>
          </MetaComplete>
        ) : (
          <></>
        )}
      </Modal>
      <FullscreenButton onClick={toggleFullscreen} title={isFullscreen ? 'Sair do fullscreen (Esc)' : 'Tela cheia'}>
        {isFullscreen ? '⊡' : '⛶'}
      </FullscreenButton>
    </Container>
  );
}
