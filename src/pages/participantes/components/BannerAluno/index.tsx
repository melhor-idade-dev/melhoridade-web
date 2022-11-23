import { useNavigate } from "react-router-dom";
import { IAluno } from "../../../../types/Aluno";
import { Container } from "./styles";

type Props = {
  aluno: IAluno;
};

export function BannerAluno({ aluno }: Props) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/aluno/${aluno.id}`)}>
      <div className="borda">
        <div>
          <img src={aluno.url} />
        </div>
        <div>
          <div className="dados">
            <p>{aluno.name}</p>
          </div>
          <div className="dados">
            <p>{aluno.cpf}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
