import { Container, Modal, Header, MetaComplete } from "./styled";
import { ProgressBar } from "../../components/ProgressBar";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_URL_BACK_END

export function Dashboard() {
  const [total, setTotal] = useState(6000);
  const [meta] = useState(6000);

  useEffect(() => {
    const fetchData = () => {
      fetch(`${apiUrl}/dados`)
        .then((res) => res.json())
        .then((data) => setTotal(data))
        .catch((err) => console.error(err));
    };

    fetchData();

    // Loop para buscar dados de 2 em 2 segundos.
    // const interval = setInterval(() => {
    //   fetchData();
    // }, 2000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Header>
        <img
          className="logo"
          src="../../../public/logo_bem_servico.png"
          alt="logo_bem_servico"
        />
      </Header>
      <Modal>
        <h2>META DA EQUIPE 2026</h2>
        <div className="stats">
          <div className="stat">
            Vendas em Movimento: {total} Vidas &nbsp; | &nbsp; Meta: {meta}{" "}
            Vidas
          </div>
        </div>

        <ProgressBar total={total} meta={meta} />

        {total == meta ? (
          <MetaComplete>
            <h3>
              <img src="../../../public/confete.png" alt="festa" /> 
              &nbsp; META BATIDA - {meta.toLocaleString("pt-BR")} VIDAS &nbsp;
              <img src="../../../public/confete.png" alt="festa" />
            </h3>
          </MetaComplete>
        ) : (
          <></>
        )}
      </Modal>
    </Container>
  );
}
