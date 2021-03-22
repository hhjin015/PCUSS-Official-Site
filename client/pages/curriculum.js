import Curriculum from "../components/sections/Curriculum";
import { data as curriculumData } from "../datas/CurriculumData";
import withHead from "../commons/withHead";
const curriculum = () => {
  return (
    <Curriculum datas={curriculumData} />
  )
}

export default withHead(curriculum, "커리큘럼", "정보보안 전문가가 되기위해 4년간 배우는 것들을 미리 알아보세요");