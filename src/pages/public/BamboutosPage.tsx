import { DepartmentPage } from '../../components/culture/DepartmentPage';
import { bamboutosOverview, bamboutosSections, bamboutosStories } from '../../content/bamboutos';
import { images } from '../../config/images';

export function BamboutosPage() {
  return (
    <DepartmentPage
      name={bamboutosOverview.name}
      heroImage={images.bamboutosHero}
      intro={bamboutosOverview.intro}
      sections={bamboutosSections}
      stories={bamboutosStories}
    />
  );
}
