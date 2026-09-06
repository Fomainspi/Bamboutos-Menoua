import { DepartmentPage } from '../../components/culture/DepartmentPage';
import { menouaOverview, menouaSections, menouaStories } from '../../content/menoua';
import { images } from '../../config/images';

export function MenouaPage() {
  return (
    <DepartmentPage
      name={menouaOverview.name}
      heroImage={images.menouaHero}
      intro={menouaOverview.intro}
      sections={menouaSections}
      stories={menouaStories}
    />
  );
}
